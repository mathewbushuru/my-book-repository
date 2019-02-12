define(['dart_sdk', 'packages/source_maps/builder', 'packages/source_map_stack_trace/source_map_stack_trace', 'packages/package_resolver/package_resolver', 'packages/test_api/test_api'], function(dart_sdk, builder, source_map_stack_trace, package_resolver, test_api) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = builder.parser;
  const source_map_stack_trace$ = source_map_stack_trace.source_map_stack_trace;
  const src__sync_package_resolver = package_resolver.src__sync_package_resolver;
  const src__util__stack_trace_mapper = test_api.src__util__stack_trace_mapper;
  const _root = Object.create(null);
  const src__util__stack_trace_mapper$ = Object.create(_root);
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  const $cast = dartx.cast;
  const $map = dartx.map;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapEntryOfString$String = () => (MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))();
  let StringAndUriToMapEntryOfString$String = () => (StringAndUriToMapEntryOfString$String = dart.constFn(dart.fnType(MapEntryOfString$String(), [core.String, core.Uri])))();
  let MapEntryOfString$Uri = () => (MapEntryOfString$Uri = dart.constFn(core.MapEntry$(core.String, core.Uri)))();
  let StringAndStringToMapEntryOfString$Uri = () => (StringAndStringToMapEntryOfString$Uri = dart.constFn(dart.fnType(MapEntryOfString$Uri(), [core.String, core.String])))();
  const _mapContents = Symbol('_mapContents');
  const _mapUrl = Symbol('_mapUrl');
  const _packageResolver = Symbol('_packageResolver');
  const _sdkRoot = Symbol('_sdkRoot');
  const _mapping = Symbol('_mapping');
  src__util__stack_trace_mapper$.JSStackTraceMapper = class JSStackTraceMapper extends src__util__stack_trace_mapper.StackTraceMapper {
    mapStackTrace(trace) {
      let t = this[_mapping];
      t == null ? this[_mapping] = parser.parseExtended(this[_mapContents], {mapUrl: this[_mapUrl]}) : t;
      return source_map_stack_trace$.mapStackTrace(this[_mapping], trace, {packageResolver: this[_packageResolver], sdkRoot: this[_sdkRoot]});
    }
    serialize() {
      return new (IdentityMapOfString$dynamic()).from(["mapContents", this[_mapContents], "sdkRoot", this[_sdkRoot] == null ? null : dart.toString(this[_sdkRoot]), "packageConfigMap", src__util__stack_trace_mapper$.JSStackTraceMapper._serializePackageConfigMap(this[_packageResolver].packageConfigMap), "packageRoot", (() => {
          let t = this[_packageResolver].packageRoot;
          return t == null ? null : dart.toString(t);
        })(), "mapUrl", this[_mapUrl] == null ? null : dart.toString(this[_mapUrl])]);
    }
    static deserialize(serialized) {
      if (serialized == null) return null;
      let l = core.String.as(serialized[$_get]("packageRoot"));
      let packageRoot = l != null ? l : "";
      return new src__util__stack_trace_mapper$.JSStackTraceMapper.new(core.String.as(serialized[$_get]("mapContents")), {sdkRoot: core.Uri.parse(core.String.as(serialized[$_get]("sdkRoot"))), packageResolver: packageRoot[$isNotEmpty] ? src__sync_package_resolver.SyncPackageResolver.root(core.Uri.parse(core.String.as(serialized[$_get]("packageRoot")))) : src__sync_package_resolver.SyncPackageResolver.config(src__util__stack_trace_mapper$.JSStackTraceMapper._deserializePackageConfigMap(core.Map.as(serialized[$_get]("packageConfigMap"))[$cast](core.String, core.String))), mapUrl: core.Uri.parse(core.String.as(serialized[$_get]("mapUrl")))});
    }
    static _serializePackageConfigMap(packageConfigMap) {
      if (packageConfigMap == null) return null;
      return packageConfigMap[$map](core.String, core.String, dart.fn((key, value) => MapEntryOfString$String().new(key, dart.str(value)), StringAndUriToMapEntryOfString$String()));
    }
    static _deserializePackageConfigMap(serialized) {
      if (serialized == null) return null;
      return serialized[$map](core.String, core.Uri, dart.fn((key, value) => MapEntryOfString$Uri().new(key, core.Uri.parse(value)), StringAndStringToMapEntryOfString$Uri()));
    }
  };
  (src__util__stack_trace_mapper$.JSStackTraceMapper.new = function(mapContents, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    let packageResolver = opts && 'packageResolver' in opts ? opts.packageResolver : null;
    let sdkRoot = opts && 'sdkRoot' in opts ? opts.sdkRoot : null;
    this[_mapping] = null;
    this[_mapContents] = mapContents;
    this[_mapUrl] = mapUrl;
    this[_packageResolver] = packageResolver;
    this[_sdkRoot] = sdkRoot;
  }).prototype = src__util__stack_trace_mapper$.JSStackTraceMapper.prototype;
  dart.addTypeTests(src__util__stack_trace_mapper$.JSStackTraceMapper);
  dart.setMethodSignature(src__util__stack_trace_mapper$.JSStackTraceMapper, () => ({
    __proto__: dart.getMethods(src__util__stack_trace_mapper$.JSStackTraceMapper.__proto__),
    mapStackTrace: dart.fnType(core.StackTrace, [core.StackTrace]),
    serialize: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__util__stack_trace_mapper$.JSStackTraceMapper, () => ({
    __proto__: dart.getFields(src__util__stack_trace_mapper$.JSStackTraceMapper.__proto__),
    [_mapping]: dart.fieldType(parser.Mapping),
    [_packageResolver]: dart.finalFieldType(src__sync_package_resolver.SyncPackageResolver),
    [_sdkRoot]: dart.finalFieldType(core.Uri),
    [_mapContents]: dart.finalFieldType(core.String),
    [_mapUrl]: dart.finalFieldType(core.Uri)
  }));
  dart.trackLibraries("packages/test_core/src/util/stack_trace_mapper.ddc", {
    "package:test_core/src/util/stack_trace_mapper.dart": src__util__stack_trace_mapper$
  }, '{"version":3,"sourceRoot":"","sources":["stack_trace_mapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;kBAmC2B,KAAgB;AACvC,4BAAQ;mCAAK,oBAAa,CAAC,kBAAY,WAAU,aAAO;AACxD,YAAO,AAAO,sCAAa,CAAC,cAAQ,EAAE,KAAK,oBACtB,sBAAgB,WAAW,cAAQ;IAC1D;;AAIE,YAAO,2CACL,eAAe,kBAAY,EAC3B,WAAW,cAAQ,gCAAR,cAAQ,GACnB,oBACI,4EAA0B,CAAC,sBAAgB,iBAAiB,GAChE;kBAAe,sBAAgB,YAAY;;cAC3C,UAAU,aAAO,gCAAP,aAAO;IAErB;uBAIoC,UAAc;AAChD,UAAI,UAAU,IAAI,MAAM,MAAO;AAC/B,6BAAqB,UAAU,QAAC;UAAzB,8BAAqD;AAC5D,iBAAO,qDAAkB,gBAAC,UAAU,QAAC,2BACxB,QAAG,MAAM,gBAAC,UAAU,QAAC,+BACb,WAAW,aAAW,GACjC,mDAAwB,CACtB,QAAG,MAAM,gBAAC,UAAU,QAAC,oBACvB,qDAA0B,CAAC,8EAA4B,CACrD,YAAC,UAAU,QAAC,2BACH,sCACT,QAAG,MAAM,gBAAC,UAAU,QAAC;IACnC;sCAKI,gBAAiC;AACnC,UAAI,gBAAgB,IAAI,MAAM,MAAO;AACrC,YAAO,iBAAgB,MAAI,2BAAC,SAAC,GAAG,EAAE,KAAK,KAAK,6BAAQ,CAAC,GAAG,EAAE,SAAE,KAAK;IACnE;wCAKI,UAA8B;AAChC,UAAI,UAAU,IAAI,MAAM,MAAO;AAC/B,YAAO,WAAU,MAAI,wBAAC,SAAC,GAAG,EAAE,KAAK,KAAK,0BAAQ,CAAC,GAAG,EAAE,QAAG,MAAM,CAAC,KAAK;IACrE;;;QAtDS;QAA4B;QAAqB;IAflD,cAAQ;IAcQ,kBAAY;IAE9B,aAAO,GAAG,MAAM;IAChB,sBAAgB,GAAG,eAAe;IAClC,cAAQ,GAAG,OAAO","file":"stack_trace_mapper.ddc.js"}');
  // Exports:
  return {
    src__util__stack_trace_mapper: src__util__stack_trace_mapper$
  };
});

//# sourceMappingURL=stack_trace_mapper.ddc.js.map
