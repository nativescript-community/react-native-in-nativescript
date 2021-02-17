/**
 * @see https://github.com/NativeScript/NativeScript/tree/feat/ns7-finishing-touches/packages/webpack/templates
 * @see https://github.com/NativeScript/NativeScript/pull/8801/files
 */
const webpackConfig = require("./webpack.typescript");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {
    AssetResolver,
    HasteResolver,
    getBabelConfigPath,
    resolveModule,
    ASSET_LOADER_PATH,
    Runtime,
    EnvOptions,
    NormalizedProjectConfig,
} = require('@haul-bundler/core');
const { withPolyfills, makeConfig } = require("@haul-bundler/preset-0.60");

const useReactNative = true;

module.exports = (env) => {
    env = env || {};
    const hmr = env.hmr;
    const production = env.production;
    const isAnySourceMapEnabled = !!env.sourceMap || !!env.hiddenSourceMap;

    const baseConfig = webpackConfig(env);

    const {
        // "/Users/jamie/Documents/git/react-native-in-nativescript/apps/demo-react/src"
        context,
        // entry.bundle: "./app.ts"
        output,
    } = baseConfig;
    const projectRoot = __dirname;
    const appResourcesFullPath = resolve(projectRoot, env.appResourcesPath || "App_Resources");
    const platform = env && (env.android && "android" || env.ios && "ios" || env.platform);

    const port = 8081;

    const bundleOutput = baseConfig.output.path;

    /** @type {import("@haul-bundler/core").EnvOptions} */
    const haulEnv = {
        platform,
        root: baseConfig.context,
        /**
         * I'm not totally sure about assetsDest, but here's what I can find out:
         * 
         * "Directory name where to store bundles and assets referenced in the bundle."
         * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/packages/ haul-cli/src/commands/multiBundle.ts
         * "Directory name where to store assets referenced in the bundle."
         * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/packages/ haul-cli/src/commands/bundle.ts
         * @default (assetsDest || bundleOutput || "") I think is how it's generally consumed.
         * @example build/assets
         * @example dist/ios/dev
         * @example dist/ios/prod
         * @example dist/non-min/ios
         * @example dist/non-min/android
         * @example dist/min/ios
         * @example dist/min/android
         * @example dist/external/ios
         * @example dist/external/android
         * @example windows/RNWTestApp/Bundle
         * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/packages/ haul-core-legacy/src/compiler/worker/runWebpackCompiler.js
         * I've seen a test expect something to get copied to this location:
         *   'host/dist/ios/dev/assets/node_modules/react-navigation-stack/lib/module/views/assets/ back-icon.png'
         * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/e2e/ monorepo_multibundle/__tests__/monorepo.test.ts
         */
        // assetsDest: appResourcesFullPath, // Unlikely to be correct.
        assetsDest: bundleOutput,
        dev: !env.production,
        minify: !!env.uglify,
        maxWorkers: void 0,
        bundleType: "basic-bundle",
        /**
         * We do want multi-bundle because we're outputting to a directory rather than a file, and indeed creating multiple bundles.
         */
        bundleMode: "multi-bundle", // | "single-bundle",
        bundleTarget: "file", // | "server",
        /**
         * The main bundle (bundle.js) is output to:
         *   platforms/ios/demoreact/demoreact/app
         * This is actually a pretty small file (41 KB), consisting of all the user-space code,
         * but it's clearly the entrypoint, as it begins with this line that pulls in the other:
         *   require("./runtime.js");require("./vendor.js");
         * 
         * - runtime.js carries barely anything (just 14 KB).
         * - vendor.js, 9.5 MB, is where you'll find all the node_modules e.g. react-nativescript.
         */
        bundleOutput,
        sourceMapFilename: baseConfig.output.sourceMapFilename,
        port, // Undocumented, but let's treat it as ProjectConfig["server"]["port"].
    };

    /**
      * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/docs/Configuration.md#project-configuration-reference
      * @see https://github.com/callstack/haul/blob/master/packages/haul-preset-0.60/src/defaultConfig.ts
      * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/packages/haul-cli/src/commands/multiBundle.ts
      */
    const haulConfigBuilder = makeConfig({
        server: {
            host: "localhost",
            port,
        },
        platforms: ["ios", "android"],
        templates: {
            ios: '[bundleName].jsbundle',
            android: '[bundleName].[platform].bundle',
        },
        bundles: {
            index: {
                entry: withPolyfills(baseConfig.entry.bundle),
                platform: haulEnv.platform,
                root: haulEnv.root,
                assetsDest: haulEnv.assetsDest,
                dev: haulEnv.dev,
                minify: haulEnv.minify,
                // Not totally sure about this one
                providesModuleNodeModules: void 0,
                hasteOptions: void 0,
                maxWorkers: haulEnv.maxWorkers,
                type: haulEnv.bundleType,
            },
        },
    });


    const haulConfig = haulConfigBuilder(new Runtime(), haulEnv);

    const {
        entry: haulConfigEntryFiles,
        module: haulConfigModule,
    } = haulConfig;

    console.log(haulConfig);

    if(useReactNative){
        baseConfig.entry = {
            // No need to polyfill inspector_modules, to my understanding (whatever that is).
            ...baseConfig.entry,
            // Our app.ts gets polyfilled
            bundle: haulConfigEntryFiles,
        };

        const parserRule = haulConfigModule.rules[0];
        baseConfig.module.rules.splice(0, 0, parserRule);
    }

    /** Find the rule for transpiling ts files ("ts-loader"), and modify it to test for .tsx files too. */
    const tsxRule = baseConfig.module.rules.find(rule => rule.use && rule.use.loader === "ts-loader");

    if(useReactNative){
        const haulTsxRule = haulConfigModule.rules[1];

        tsxRule.test = haulTsxRule.test;
        tsxRule.exclude = haulTsxRule.exclude;

        console.log(haulTsxRule);

        process.exit(1);

        tsxRule.use = [

            tsxRule.use,
        ].filter(Boolean);
    } else {
        tsxRule.test = /\.(ts|tsx)$/;
        tsxRule.use = [
            /**
             * Add React Refresh HMR support.
             * @see https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/55028c6355b31e697e21bf3e9a48613a7b94bee7/examples/typescript-without-babel/webpack.config.js#L18-L21
             */
            hmr && !production && {
                loader: "babel-loader",
                options: {
                    sourceMaps: isAnySourceMapEnabled ? "inline" : false,
                    babelrc: false,
                    plugins: ['react-refresh/babel']
                }
            },
            tsxRule.use,
        ].filter(Boolean);
    }

    /**
     * Modify "nativescript-dev-webpack/hmr/hot-loader" to test for .tsx files
     * (and also js files, which it should have been doing to begin with!)
     */
    const nativeScriptDevWebpackHotLoader = baseConfig.module.rules.find(rule =>
        rule.use === "@nativescript/webpack/hmr/hot-loader"
    );
    nativeScriptDevWebpackHotLoader.test = /\.(ts|tsx|js|css|scss|html|xml)$/;

    /** We don't officially support JSX. Makes the webpack config rather more complicated to set up. */
    baseConfig.resolve.extensions = [".tsx", ...baseConfig.resolve.extensions];
    baseConfig.resolve.alias["react-dom"] = "react-nativescript";

    /** Augment NativeScript's existing DefinePlugin definitions with a few more of our own. */
    const existingDefinePlugin = baseConfig.plugins.find(plugin =>
        plugin && plugin.constructor && plugin.constructor.name === "DefinePlugin"
    );
    baseConfig.plugins.splice(
        baseConfig.plugins.indexOf(existingDefinePlugin),
        1,
        new webpack.DefinePlugin({
            ...existingDefinePlugin.definitions,
            /** For various libraries in the React ecosystem. */
            "__DEV__": production ? "false" : "true",
            "__TEST__": "false",
            /**
             * Primarily for React Fast Refresh plugin, but technically the allowHmrInProduction option could be used instead.
             * Worth including anyway, as there are plenty of Node libraries that use this flag.
             */
            "process.env.NODE_ENV": JSON.stringify(production ? "production" : "development"),
        }),
    );

    if(hmr && !production){
        baseConfig.plugins.push(new ReactRefreshWebpackPlugin({
            /**
             * Maybe one day we'll implement an Error Overlay, but the work involved is too daunting for now.
             * @see https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/79#issuecomment-644324557
             */
            overlay: false,
            /**
             * If you (temporarily) want to enable HMR on a production build:
             *   1) Set `forceEnable` to `true` 
             *   2) Remove the `!production` condition on `tsxRule` to ensure that babel-loader gets used.
             */
            forceEnable: false,
        }));
    } else {
        baseConfig.plugins = baseConfig.plugins.filter(p => !(p && p.constructor && p.constructor.name === "HotModuleReplacementPlugin"));
    }

    return baseConfig;
};