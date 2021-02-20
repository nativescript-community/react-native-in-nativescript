/**
 * @see https://github.com/NativeScript/NativeScript/tree/feat/ns7-finishing-touches/packages/webpack/templates
 * @see https://github.com/NativeScript/NativeScript/pull/8801/files
 */
const webpackConfig = require("./webpack.typescript");
const webpack = require("webpack");
const path = require("path");
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
    console.log(`baseConfig original`, baseConfig);
    const platform = env && (env.android && "android" || env.ios && "ios" || env.platform);
    const projectRoot = __dirname;

    const port = 8081;

    /**
     * @example "/Users/jamie/Documents/git/react-native-in-nativescript/apps/demo-react/platforms/ios/demoreact/app"
     */
    const bundleOutput = baseConfig.output.path;

    /** @type {import("@haul-bundler/core").EnvOptions} */
    const haulEnv = {
        platform,
        /**
         * This one's a bit problematic. Sometimes it makes more sense to pass the "src" directory (e.g. for loading assets), and
         * sometimes it makes more sense to pass the project root. Either way, you end up having to correct the generated config in
         * one place or another. I'll go with the build context and then make corrections as necessary.
         * baseConfig.context is the src folder:
         * @example "/Users/jamie/Documents/git/react-native-in-nativescript/apps/demo-react/src"
         */
        root: baseConfig.context,
        /**
         * The examples in this section suggest it to be the same directory as bundleOutput, which I believe mirrors the NativeScript
         * runtime's working directory structure (require() calls are clearly resolved relative to that directory).
         * @see https://github.com/callstack/haul/blob/0747fd41b94603900c8759511ca18f7c9e2e03ee/docs/CLI%20Commands.md#haul-bundle
         */
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
        port, // Treating it as ProjectConfig["server"]["port"]; I think it's used only by the `haul reload` CLI command.
    };

    const bundleName = "index";

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
            [bundleName]: {
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
        webpackConfigs: {
            [bundleName]: haulWebpackConfig,
        },
    } = haulConfig;
    const haulTsxRule = haulWebpackConfig.module.rules[1];
    const haulAssetRule = haulWebpackConfig.module.rules[2];
    // It was looking for "babel.config.js" relative to src, so we fix that here.
    haulTsxRule.use[0].options.extends = getBabelConfigPath(projectRoot);
    // It was placing the cache directory in "src/node_modules" rather than node_modules, so we fix that here.
    haulTsxRule.use[0].options.cacheDirectory = production ?
        false :
        path.join(
            projectRoot,
            'node_modules',
            '.cache',
            'babel-loader',
            platform,
        );

    require('util').inspect.defaultOptions.depth = 7;

    if(useReactNative){
        /* baseConfig */
        // entry: {
        //     bundle: './app.ts',
        //     'tns_modules/@nativescript/core/inspector_modules': 'inspector_modules'
        // }

        /* haul */
        // entry: [
        //     '/Users/jamie/Documents/git/react-native-in-nativescript/apps/demo-react/node_modules/react-native/Libraries/polyfills/console.js',
        //     '/Users/jamie/Documents/git/react-native-in-nativescript/apps/demo-react/node_modules/react-native/Libraries/polyfills/error-guard.js',
        //     '/Users/jamie/Documents/git/react-native-in-nativescript/apps/demo-react/node_modules/react-native/Libraries/polyfills/Object.es7.js',
        //     'react-native/Libraries/Core/InitializeCore.js',
        //     './app.ts'
        // ]

        baseConfig.entry = {
            // No need to polyfill inspector_modules, to my understanding (whatever that is).
            ...baseConfig.entry,
            // Our app.ts gets polyfilled
            bundle: haulWebpackConfig.entry,
        };

        const parserRule = haulWebpackConfig.module.rules[0];
        baseConfig.module.rules.splice(0, 0, parserRule);

        // There's also an asset loader, but let's see how well things go just with NativeScript's existing one first.
    }

    /** Find the rule for transpiling ts files ("ts-loader"), and modify it to test for .tsx files too. */
    const tsxRule = baseConfig.module.rules.find(rule => rule.use && rule.use.loader === "ts-loader");
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

    if(useReactNative){
        /**
         * As a "better-than-nothing" effort, any file under nativescript-src gets processed by our ts-loader setup rather than
         * by haul's Babel setup.
         */
        const nativeScriptSourcesDir = "nativescript-compat";
        const nativeScriptSourcesDirpath = path.resolve(baseConfig.context, nativeScriptSourcesDir);
        tsxRule.include = nativeScriptSourcesDirpath;

        /**
         * Originally this:
         * /node_modules(?!.*[\/\\](react|@react-navigation|@react-native-community|@expo|pretty-format|@haul-bundler|metro))/
         * I've added in @nativescript and @nativescript-community.
         */
        haulTsxRule.exclude = [
            haulTsxRule.exclude,
            nativeScriptSourcesDirpath,
        ];

        /**
         * In the RNS rule, we stick with ts-loader, and add in babel-loader just to support HMR.
         * In the Haul rule, they use babelWorkerLoader, and extend the preset in babel.config.js:
         *   module:@haul-bundler/babel-preset-react-native
         * That seems to include a plugin "@babel/plugin-transform-typescript".
         * What remains to be seen is whether passing it baseConfig.context or projectRoot makes more sense.
         * 
         * Between ts-loader and our tsconfig.json, we're missing a few key features in @babel/plugin-transform-typescript.
         * 
         * --experimentalDecorators: @babel/plugin-proposal-decorators exists, but let's just not use decorators in userland
         *                           for now.
         * --emitDecoratorMetadata:  https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata exists, but
         *                           let's just not use decorators in userland for now.
         * @nativescript/webpack/transformers/ns-transform-native-classes transformer: Unsupported. Let's not use @NativeClass
         *                           in userland for now. @nativescript/core doesn't distribute any mentions of it in the
         *                           built code, so we'll be fine.
         * Path aliases:             In user code, let's stop using alias imports (e.g. "~/*": "./src/*") to keep things simple.
         *                           However, it does appear that "~" is already aliased by the baseConfig to mean the app's full path.
         *                           So I'm not even sure whether that's in conflict to begin with.
         *                           There are some paths to our monorepo package srcs, but I think those are only used by the
         *                           monorepo's package-by-package build commands, not the demo build commands.
         * rootDirs:                 Only matters at editing-time and type-checking time, so should be fine.
         * `target: es2017`:         I'm not clear what haul is targeting. I suspect we'll be fine without changing anything.
         * --allowTsInNodeModules    I think it's a mistake that this is in there to begin with. @nativescript/core only
         *                           distributes .js and .d.ts, so we should be fine.
         * sourceMap:                No idea how this will go, but we've specified a source map filename to haul!
         * 
         * Beyond proof-of-concept, we could make a rule that any files under src/nativescript get processed with ts-loader,
         */
        baseConfig.module.rules.push(haulTsxRule);
        const nativeScriptAssetsDirPath = path.resolve(baseConfig.context, "assets");
        const nativeScriptFontsDirPath = path.resolve(baseConfig.context, "fonts");
        haulAssetRule.exclude = [nativeScriptAssetsDirPath, nativeScriptFontsDirPath];
        baseConfig.module.rules.push(haulAssetRule);
    }

    /**
     * Modify "nativescript-dev-webpack/hmr/hot-loader" to test for .tsx files
     * (and also js files, which it should have been doing to begin with!)
     */
    const nativeScriptDevWebpackHotLoader = baseConfig.module.rules.find(rule =>
        rule.use === "@nativescript/webpack/hmr/hot-loader"
    );
    nativeScriptDevWebpackHotLoader.test = useReactNative ? /\.(ts|tsx|jsx|js|css|scss|html|xml)$/ : /\.(ts|tsx|js|css|scss|html|xml)$/;

    if(useReactNative){
        /** CaseSensitivePathsPlugin */
        baseConfig.plugins.splice(0, 0, haulWebpackConfig.plugins[0]);
    }

    baseConfig.resolve.extensions = [
        ".tsx",
        /** We don't officially support JSX. Makes the webpack config rather more complicated to set up. */
        ...(useReactNative ? [".jsx"] : []),
        ...baseConfig.resolve.extensions
    ];
    if(!useReactNative){
        baseConfig.resolve.alias["react-dom"] = "react-nativescript";
    }

    /** Augment NativeScript's existing DefinePlugin definitions with a few more of our own. */
    const existingDefinePlugin = baseConfig.plugins.find(plugin =>
        plugin && plugin.constructor && plugin.constructor.name === "DefinePlugin"
    );
    const haulDefinePlugin = haulWebpackConfig.plugins.find(plugin =>
        plugin && plugin.constructor && plugin.constructor.name === "DefinePlugin"
    );
    baseConfig.plugins.splice(
        baseConfig.plugins.indexOf(existingDefinePlugin),
        1,
        new webpack.DefinePlugin({
            ...existingDefinePlugin.definitions,
            ...(useReactNative ? haulDefinePlugin.definitions : []),
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

    if(useReactNative){
        baseConfig.plugins.splice(
            2,
            0,
            /** LoaderOptionsPlugin */
            haulWebpackConfig.plugins[2],
            /** LimitChunkCountPlugin */
            haulWebpackConfig.plugins[3],
            /** SourceMapDevToolPlugin */
            haulWebpackConfig.plugins[4],
            /** BasicBundleWebpackPlugin */
            haulWebpackConfig.plugins[5],
        );

        baseConfig.resolve.plugins = haulWebpackConfig.resolve.plugins;
        baseConfig.optimization.namedModules = true;
        baseConfig.optimization.concatenateModules = false; // true is complaining a lot about ESM
        /**
         * "webworker" gives us `TypeError: global.webpackChunk is not a function
         * The original [Function: nativescriptTarget] seems important for NativeScript, anyway!.
         */
        // baseConfig.target = "webworker";
        baseConfig.stats = "verbose";
    }

    console.log("haulWebpackConfig:", haulWebpackConfig);
    console.log("baseConfig:", baseConfig);

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