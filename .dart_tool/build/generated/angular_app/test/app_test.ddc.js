define(['dart_sdk', 'packages/angular_app/app_component.template', 'packages/angular_app/app_component', 'packages/angular_test/src/bootstrap', 'packages/test_core/test_core', 'packages/test_api/test_api'], function(dart_sdk, app_component, app_component$, bootstrap, test_core, test_api) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46template = app_component.app_component$46template;
  const app_component$0 = app_component$.app_component;
  const src__frontend__bed = bootstrap.src__frontend__bed;
  const test_core$ = test_core.test_core;
  const src__frontend__expect = test_api.src__frontend__expect;
  const _root = Object.create(null);
  const app_test = Object.create(_root);
  const $innerHtml = dartx.innerHtml;
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AppComponentToString = () => (AppComponentToString = dart.constFn(dart.fnType(core.String, [app_component$0.AppComponent])))();
  app_test.main = function() {
    let testBed = src__frontend__bed.NgTestBed.forComponent(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory);
    let fixture = null;
    test_core$.setUp(dart.fn(() => async.async(core.Null, function*() {
      fixture = (yield testBed.create());
    }), VoidToFutureOfNull()));
    test_core$.tearDown(dart.fn(src__frontend__bed.disposeAnyRunningTest, VoidToFutureOfvoid()));
    test_core$.test("Default greeting", dart.fn(() => {
      src__frontend__expect.expect(fixture.text, "Hello Angular");
    }, VoidToNull()));
    test_core$.test("Greet world", dart.fn(() => async.async(core.Null, function*() {
      yield fixture.update(dart.fn(c => c.name = "World", AppComponentToString()));
      src__frontend__expect.expect(fixture.text, "Hello World");
    }), VoidToFutureOfNull()));
    test_core$.test("Greet world HTML", dart.fn(() => {
      let html = fixture.rootElement[$innerHtml];
      src__frontend__expect.expect(html, "<h1>Hello Angular</h1>");
    }, VoidToNull()));
  };
  dart.trackLibraries("test/app_test.ddc", {
    "app_test.dart": app_test
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAQE,QAAM,UACF,4BAAS,aAAa,+BAAkB,8CAAqB;AACjE,QAA4B;AAE5B,oBAAK,CAAC;AACJ,aAAO,IAAG,MAAM,OAAO,OAAO;IAChC;AAEA,uBAAQ,CAAC,uEAAqB;AAE9B,mBAAI,CAAC,oBAAoB;AACvB,kCAAM,CAAC,OAAO,KAAK,EAAE;;AAGvB,mBAAI,CAAC,eAAe;AAClB,YAAM,OAAO,OAAO,CAAC,QAAC,CAAC,IAAK,CAAC,KAAK,GAAG;AACrC,kCAAM,CAAC,OAAO,KAAK,EAAE;IACvB;AAEA,mBAAI,CAAC,oBAAoB;AACvB,UAAM,OAAO,OAAO,YAAY,YAAU;AAC1C,kCAAM,CAAC,IAAI,EAAE;;EAEjB","file":"app_test.ddc.js"}');
  // Exports:
  return {
    app_test: app_test
  };
});

//# sourceMappingURL=app_test.ddc.js.map
