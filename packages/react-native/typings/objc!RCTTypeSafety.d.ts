
declare function RCTBridgingToArray(value: any): NSArray<any>;

declare function RCTBridgingToDouble(value: any): number;

declare function RCTBridgingToString(value: any): string;

declare var RCTTypeSafetyVersionNumber: number;

declare var RCTTypeSafetyVersionString: interop.Reference<number>;

declare class _RCTTypedModuleConstants<StructType> extends NSDictionary<string, any> {

	static alloc<StructType>(): _RCTTypedModuleConstants<StructType>; // inherited from NSObject

	static dictionary<StructType>(): _RCTTypedModuleConstants<StructType>; // inherited from NSDictionary

	static dictionaryWithDictionary<StructType>(dict: NSDictionary<KeyType, ObjectType>): _RCTTypedModuleConstants<StructType>; // inherited from NSDictionary

	static dictionaryWithObjectForKey<StructType>(object: ObjectType, key: KeyType): _RCTTypedModuleConstants<StructType>; // inherited from NSDictionary

	static dictionaryWithObjectsAndKeys<StructType>(firstObject: any): _RCTTypedModuleConstants<StructType>; // inherited from NSDictionary

	static dictionaryWithObjectsForKeys<StructType>(objects: NSArray<ObjectType> | ObjectType[], keys: NSArray<KeyType> | KeyType[]): _RCTTypedModuleConstants<StructType>; // inherited from NSDictionary

	static dictionaryWithObjectsForKeysCount<StructType>(objects: interop.Reference<ObjectType>, keys: interop.Reference<KeyType>, cnt: number): _RCTTypedModuleConstants<StructType>; // inherited from NSDictionary

	static new<StructType>(): _RCTTypedModuleConstants<StructType>; // inherited from NSObject

	static newWithUnsafeDictionary<StructType>(dictionary: NSDictionary<string, any>): _RCTTypedModuleConstants<StructType>;
}

declare var folly: number;

declare var follyVar: number;
