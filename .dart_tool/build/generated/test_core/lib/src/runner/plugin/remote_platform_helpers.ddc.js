define(['dart_sdk', 'packages/test_api/src/remote_listener', 'packages/test_api/src/suite_channel_manager', 'packages/test_api/test_api'], function(dart_sdk, remote_listener, suite_channel_manager, test_api) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__remote_listener = remote_listener.src__remote_listener;
  const src__suite_channel_manager = suite_channel_manager.src__suite_channel_manager;
  const src__backend__stack_trace_formatter = test_api.src__backend__stack_trace_formatter;
  const _root = Object.create(null);
  const src__runner__plugin__remote_platform_helpers = Object.create(_root);
  src__runner__plugin__remote_platform_helpers.serializeSuite = function(getMain, opts) {
    let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
    let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
    return src__remote_listener.RemoteListener.start(getMain, {hidePrints: hidePrints, beforeLoad: beforeLoad});
  };
  src__runner__plugin__remote_platform_helpers.suiteChannel = function(name) {
    let manager = src__suite_channel_manager.SuiteChannelManager.current;
    if (manager == null) {
      dart.throw(new core.StateError.new("suiteChannel() may only be called within a test worker."));
    }
    return manager.connectOut(name);
  };
  src__runner__plugin__remote_platform_helpers.setStackTraceMapper = function(mapper) {
    let formatter = src__backend__stack_trace_formatter.StackTraceFormatter.current;
    if (formatter == null) {
      dart.throw(new core.StateError.new("setStackTraceMapper() may only be called within a test worker."));
    }
    formatter.configure({mapper: mapper});
  };
  dart.trackLibraries("packages/test_core/src/runner/plugin/remote_platform_helpers.ddc", {
    "package:test_core/src/runner/plugin/remote_platform_helpers.dart": src__runner__plugin__remote_platform_helpers
  }, '{"version":3,"sourceRoot":"","sources":["remote_platform_helpers.dart"],"names":[],"mappings":";;;;;;;;;;yEAgC6B,OAAkB;QACjC,8DAAa;QAAa;UACpC,oCAAc,MAAM,CAAC,OAAO,eACZ,UAAU,cAAc,UAAU;EAAC;uEAW5B,IAAW;AACpC,QAAI,UAAU,8CAAmB,QAAQ;AACzC,QAAI,OAAO,IAAI,MAAM;AACnB,qBAAM,mBAAU,CAAC;;AAGnB,UAAO,QAAO,WAAW,CAAC,IAAI;EAChC;8EAOyB,MAAuB;AAC9C,QAAI,YAAY,uDAAmB,QAAQ;AAC3C,QAAI,SAAS,IAAI,MAAM;AACrB,qBAAM,mBAAU,CACZ;;AAGN,aAAS,UAAU,UAAS,MAAM;EACpC","file":"remote_platform_helpers.ddc.js"}');
  // Exports:
  return {
    src__runner__plugin__remote_platform_helpers: src__runner__plugin__remote_platform_helpers
  };
});

//# sourceMappingURL=remote_platform_helpers.ddc.js.map
