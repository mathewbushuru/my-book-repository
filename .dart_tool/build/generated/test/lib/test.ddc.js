define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const test = Object.create(_root);
  dart.trackLibraries("packages/test/test.ddc", {
    "package:test/test.dart": test
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"test.ddc.js"}');
  // Exports:
  return {
    test: test
  };
});

//# sourceMappingURL=test.ddc.js.map
