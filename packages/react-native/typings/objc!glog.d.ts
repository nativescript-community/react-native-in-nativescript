
declare const DEBUG_MODE: number;

interface DummyClassToDefineOperator {
}
declare var DummyClassToDefineOperator: interop.StructType<DummyClassToDefineOperator>;

declare var ERROR: number;

declare var FATAL: number;

declare var GLOG_ERROR: number;

declare var GLOG_FATAL: number;

declare var GLOG_INFO: number;

declare var GLOG_WARNING: number;

declare var INFO: number;

declare function InitGoogleLogging(argv0: string | interop.Pointer | interop.Reference<any>): void;

declare function InitVLOG3__(google: number): boolean;

declare function InstallFailureFunction(fail_func: interop.FunctionReference<() => void>): void;

declare var LogSeverityNames: interop.Reference<string>;

declare var LogSink: typeof NSObject;

declare var NUM_SEVERITIES: number;

declare function RawLog__SetLastTime(p1: tm): void;

declare function SetVLOGLevel(module_pattern: string | interop.Pointer | interop.Reference<any>, log_level: number): number;

declare function ShutdownGoogleLogging(): void;

declare var WARNING: number;

declare var glogVersionNumber: number;

declare var glogVersionString: interop.Reference<number>;

declare var google: number;

declare var std: number;
