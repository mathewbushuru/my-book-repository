define(['dart_sdk', 'test/app_test', 'packages/test/bootstrap/browser'], function(dart_sdk, app_test, browser) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_test$ = app_test.app_test;
  const src__bootstrap__browser = browser.src__bootstrap__browser;
  const _root = Object.create(null);
  const app_test$46dart$46browser_test = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidTovoid(), [])))();
  app_test$46dart$46browser_test.main = function() {
    src__bootstrap__browser.internalBootstrapBrowserTest(dart.fn(() => dart.fn(app_test$.main, VoidTovoid()), VoidToFn()));
  };
  dart.trackLibraries("test/app_test.dart.browser_test.ddc", {
    "app_test.dart.browser_test.dart": app_test$46dart$46browser_test
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart.browser_test.dart"],"names":[],"mappings":";;;;;;;;;;;;AAKY,wDAA4B,CAAC,cAAW,qCAAI;EAC9C","file":"app_test.dart.browser_test.ddc.js"}');
  // Exports:
  return {
    app_test$46dart$46browser_test: app_test$46dart$46browser_test
  };
});

//# sourceMappingURL=app_test.dart.browser_test.ddc.js.map
