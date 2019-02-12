define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/application_tokens', 'packages/pedantic/pedantic'], function(dart_sdk, change_detection, modules, ng_zone, application_tokens, pedantic) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__di__injector__runtime = change_detection.src__di__injector__runtime;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__bootstrap__modules = modules.src__bootstrap__modules;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const src__core__application_ref = modules.src__core__application_ref;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__platform__dom__shared_styles_host = modules.src__platform__dom__shared_styles_host;
  const src__core__linker__view_ref = modules.src__core__linker__view_ref;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__linker__component_resolver = modules.src__core__linker__component_resolver;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__render__api = application_tokens.src__core__render__api;
  const pedantic$ = pedantic.pedantic;
  const _root = Object.create(null);
  const src__errors__generic_type_missing = Object.create(_root);
  const src__errors__test_already_running = Object.create(_root);
  const src__errors__will_never_stabilize = Object.create(_root);
  const src__errors = Object.create(_root);
  const src__bootstrap = Object.create(_root);
  const src__frontend__ng_zone__timer_hook_zone = Object.create(_root);
  const src__frontend__stabilizer = Object.create(_root);
  const src__frontend__ng_zone__base_stabilizer = Object.create(_root);
  const src__frontend__ng_zone__real_time_stabilizer = Object.create(_root);
  const src__frontend__fixture = Object.create(_root);
  const src__frontend__bed = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  const $append = dartx.append;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $every = dartx.every;
  const $remove = dartx.remove;
  const $parent = dartx.parent;
  const $text = dartx.text;
  const $addAll = dartx.addAll;
  const $isNotEmpty = dartx.isNotEmpty;
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let __ToReflectiveInjector = () => (__ToReflectiveInjector = dart.constFn(dart.fnType(src__di__injector__runtime.ReflectiveInjector, [], [src__di__injector__injector.Injector])))();
  let VoidToNgZone = () => (VoidToNgZone = dart.constFn(dart.fnType(src__core__zone__ng_zone.NgZone, [])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [src__core__zone__ng_zone.NgZoneError])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ZoneAndZoneDelegateAndZone__ToTimer = () => (ZoneAndZoneDelegateAndZone__ToTimer = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, VoidTovoid()])))();
  let Injector__ToNgTestStabilizer = () => (Injector__ToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector], [src__frontend__ng_zone__timer_hook_zone.TimerHookZone])))();
  let InjectorToNgTestStabilizer = () => (InjectorToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector])))();
  let FnToNgTestStabilizer = () => (FnToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [InjectorToNgTestStabilizer()])))();
  let Injector__To_DelegatingNgTestStabilizer = () => (Injector__To_DelegatingNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer._DelegatingNgTestStabilizer, [src__di__injector__injector.Injector], [src__frontend__ng_zone__timer_hook_zone.TimerHookZone])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let NgTestStabilizerTobool = () => (NgTestStabilizerTobool = dart.constFn(dart.fnType(core.bool, [src__frontend__stabilizer.NgTestStabilizer])))();
  let ListOfNgTestStabilizer = () => (ListOfNgTestStabilizer = dart.constFn(core.List$(src__frontend__stabilizer.NgTestStabilizer)))();
  let voidTobool = () => (voidTobool = dart.constFn(dart.fnType(core.bool, [dart.void])))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let _IdentityHashSetOf_ObservedTimer = () => (_IdentityHashSetOf_ObservedTimer = dart.constFn(collection._IdentityHashSet$(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer)))();
  let dynamicToNgTestStabilizer = () => (dynamicToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [dart.dynamic])))();
  let JSArrayOfInjectorToNgTestStabilizer = () => (JSArrayOfInjectorToNgTestStabilizer = dart.constFn(_interceptors.JSArray$(InjectorToNgTestStabilizer())))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let InjectorToFutureOfvoid = () => (InjectorToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [src__di__injector__injector.Injector])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  src__errors__generic_type_missing.GenericTypeMissingError = class GenericTypeMissingError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      if (this.message == null) {
        return "Generic type required";
      }
      return "Generic type required: " + dart.str(this.message);
    }
  };
  (src__errors__generic_type_missing.GenericTypeMissingError.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
    src__errors__generic_type_missing.GenericTypeMissingError.__proto__.new.call(this);
  }).prototype = src__errors__generic_type_missing.GenericTypeMissingError.prototype;
  dart.addTypeTests(src__errors__generic_type_missing.GenericTypeMissingError);
  const message$ = Symbol("GenericTypeMissingError.message");
  dart.setFieldSignature(src__errors__generic_type_missing.GenericTypeMissingError, () => ({
    __proto__: dart.getFields(src__errors__generic_type_missing.GenericTypeMissingError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__errors__generic_type_missing.GenericTypeMissingError, ['toString']);
  src__errors__test_already_running.TestAlreadyRunningError = class TestAlreadyRunningError extends core.Error {
    toString() {
      return "" + "Another instance of an `NgTestFixture` is still executing!\n\n" + "NgTestBed supports *one* test executing at a time to avoid timing " + "conflicts or stability issues related to sharing a browser DOM.\n\n" + "When you are done with a test, make sure to dispose fixtures:\n" + "  tearDown(() => disposeAnyRunningTest())\n\n" + "NOTE: `disposeAnyRunningTest` returns a Future that must complete " + "*before* executing another test - `tearDown` handles this for you " + "if returned like the example above.";
    }
  };
  (src__errors__test_already_running.TestAlreadyRunningError.new = function() {
    src__errors__test_already_running.TestAlreadyRunningError.__proto__.new.call(this);
  }).prototype = src__errors__test_already_running.TestAlreadyRunningError.prototype;
  dart.addTypeTests(src__errors__test_already_running.TestAlreadyRunningError);
  dart.defineExtensionMethods(src__errors__test_already_running.TestAlreadyRunningError, ['toString']);
  src__errors__will_never_stabilize.WillNeverStabilizeError = class WillNeverStabilizeError extends core.Error {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    toString() {
      return "Failed to stabilize after " + dart.str(this.threshold) + " attempts";
    }
  };
  (src__errors__will_never_stabilize.WillNeverStabilizeError.new = function(threshold) {
    this[threshold$] = threshold;
    src__errors__will_never_stabilize.WillNeverStabilizeError.__proto__.new.call(this);
  }).prototype = src__errors__will_never_stabilize.WillNeverStabilizeError.prototype;
  dart.addTypeTests(src__errors__will_never_stabilize.WillNeverStabilizeError);
  const threshold$ = Symbol("WillNeverStabilizeError.threshold");
  dart.setFieldSignature(src__errors__will_never_stabilize.WillNeverStabilizeError, () => ({
    __proto__: dart.getFields(src__errors__will_never_stabilize.WillNeverStabilizeError.__proto__),
    threshold: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__errors__will_never_stabilize.WillNeverStabilizeError, ['toString']);
  src__bootstrap.testInjectorFactory = function(providers) {
    if (dart.test(providers[$isEmpty])) {
      return dart.fn(parent => {
        if (parent === void 0) parent = null;
        return parent;
      }, __ToInjector());
    }
    return dart.fn(parent => {
      if (parent === void 0) parent = null;
      return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([providers]), parent);
    }, __ToReflectiveInjector());
  };
  src__bootstrap.bootstrapForTest = function(E, componentFactory, hostElement, userInjector, opts) {
    return async.async(src__core__linker__component_factory.ComponentRef$(E), function* bootstrapForTest() {
      let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
      let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
      let createNgZone = opts && 'createNgZone' in opts ? opts.createNgZone : dart.fn(src__bootstrap__modules.createNgZone, VoidToNgZone());
      if (componentFactory == null) {
        dart.throw(new core.ArgumentError.notNull("componentFactory"));
      }
      if (hostElement == null) {
        dart.throw(new core.ArgumentError.notNull("hostElement"));
      }
      if (userInjector == null) {
        dart.throw(new core.ArgumentError.notNull("userInjector"));
      }
      let injector = src__bootstrap__run.appInjector(userInjector, {createNgZone: createNgZone});
      let appRef = src__core__application_ref.ApplicationRef._check(injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
      let caughtError = null;
      let ngZone = src__core__zone__ng_zone.NgZone._check(injector.get(dart.wrapType(src__core__zone__ng_zone.NgZone)));
      let onErrorSub = ngZone.onError.listen(dart.fn(e => {
        caughtError = e;
      }, NgZoneErrorToNull()));
      if (beforeComponentCreated != null) {
        yield beforeComponentCreated(injector);
      }
      return appRef.run(src__core__linker__component_factory.ComponentRef$(E), dart.fn(() => src__bootstrap._runAndLoadComponent(E, appRef, componentFactory, hostElement, injector, {beforeChangeDetection: beforeChangeDetection}).then(src__core__linker__component_factory.ComponentRef$(E), dart.fn(componentRef => async.async(src__core__linker__component_factory.ComponentRef$(E), function*() {
        yield ngZone.onTurnDone.first;
        yield async.Future.value();
        yield onErrorSub.cancel();
        if (caughtError != null) {
          return async.Future$(src__core__linker__component_factory.ComponentRef$(E)).error(caughtError.error, core.StackTrace.fromString(caughtError.stackTrace[$join]("\n")));
        }
        return componentRef;
      }), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [src__core__linker__component_factory.ComponentRef$(E)]))), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [])));
    });
  };
  src__bootstrap._runAndLoadComponent = function(E, appRef, componentFactory, hostElement, injector, opts) {
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    let t = src__core__render__api.sharedStylesHost;
    t == null ? src__core__render__api.sharedStylesHost = new src__platform__dom__shared_styles_host.DomSharedStylesHost.new(html.document) : t;
    let componentRef = componentFactory.create(injector);
    let cdMode = src__core__linker__view_ref.ViewRefImpl.as(componentRef.hostView).appView.cdMode;
    if (!dart.test(src__core__change_detection__constants.isDefaultChangeDetectionStrategy(cdMode)) && cdMode !== src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways) {
      dart.throw(new core.UnsupportedError.new("The root component in an Angular test or application must use the " + "default form of change detection (ChangeDetectionStrategy.Default). " + ("Instead got " + dart.str(src__core__linker__view_ref.ViewRefImpl.as(componentRef.hostView).appView.cdMode) + " ") + ("on component " + dart.str(dart.wrapType(E)) + ".")));
    }
    function loadComponent() {
      hostElement[$append](componentRef.location);
      appRef.registerChangeDetector(componentRef.changeDetectorRef);
      componentRef.onDestroy(dart.fn(() => {
        appRef.unregisterChangeDetector(componentRef.changeDetectorRef);
      }, VoidToNull()));
      appRef.tick();
      return async.Future$(src__core__linker__component_factory.ComponentRef$(E)).value(componentRef);
    }
    dart.fn(loadComponent, dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), []));
    let beforeChangeDetectionReturn = null;
    if (beforeChangeDetection != null) {
      beforeChangeDetectionReturn = beforeChangeDetection(componentRef.instance);
    }
    if (FutureOfvoid().is(beforeChangeDetectionReturn)) {
      return beforeChangeDetectionReturn.then(src__core__linker__component_factory.ComponentRef$(E), dart.fn(_ => loadComponent(), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [dart.void])));
    } else {
      return loadComponent();
    }
  };
  const _timerZone = Symbol('_timerZone');
  src__frontend__ng_zone__timer_hook_zone.TimerHookZone = class TimerHookZone extends core.Object {
    get createTimer() {
      return this[createTimer];
    }
    set createTimer(value) {
      this[createTimer] = value;
    }
    run(T, context) {
      return this[_timerZone].run(T, context);
    }
  };
  (src__frontend__ng_zone__timer_hook_zone.TimerHookZone.new = function() {
    this[_timerZone] = null;
    this[createTimer] = dart.fn((self, parent, zone, duration, callback) => parent.createTimer(zone, duration, callback), ZoneAndZoneDelegateAndZone__ToTimer());
    this[_timerZone] = async.Zone.current.fork({specification: async.ZoneSpecification.new({createTimer: dart.fn((self, parent, zone, duration, callback) => this.createTimer(self, parent, zone, duration, callback), ZoneAndZoneDelegateAndZone__ToTimer())})});
  }).prototype = src__frontend__ng_zone__timer_hook_zone.TimerHookZone.prototype;
  dart.addTypeTests(src__frontend__ng_zone__timer_hook_zone.TimerHookZone);
  const createTimer = Symbol("TimerHookZone.createTimer");
  dart.setMethodSignature(src__frontend__ng_zone__timer_hook_zone.TimerHookZone, () => ({
    __proto__: dart.getMethods(src__frontend__ng_zone__timer_hook_zone.TimerHookZone.__proto__),
    run: dart.gFnType(T => [T, [dart.fnType(T, [])]])
  }));
  dart.setFieldSignature(src__frontend__ng_zone__timer_hook_zone.TimerHookZone, () => ({
    __proto__: dart.getFields(src__frontend__ng_zone__timer_hook_zone.TimerHookZone.__proto__),
    [_timerZone]: dart.fieldType(async.Zone),
    createTimer: dart.fieldType(ZoneAndZoneDelegateAndZone__ToTimer())
  }));
  src__frontend__stabilizer.composeStabilizers = function(factories) {
    return dart.fn((injector, zone) => {
      if (zone === void 0) zone = null;
      return new src__frontend__stabilizer._DelegatingNgTestStabilizer.new(factories[$map](src__frontend__stabilizer.NgTestStabilizer, dart.fn(f => {
        if (Injector__ToNgTestStabilizer().is(f)) {
          return f(injector, zone);
        }
        if (InjectorToNgTestStabilizer().is(f)) {
          return f(injector);
        }
        dart.throw(new core.ArgumentError.new("Invalid stabilizer factory: " + dart.str(f)));
      }, FnToNgTestStabilizer())));
    }, Injector__To_DelegatingNgTestStabilizer());
  };
  src__frontend__stabilizer.NgTestStabilizer = class NgTestStabilizer extends core.Object {
    get isStable() {
      return false;
    }
    update(runAndTrackSideEffects) {
      if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
      return FutureOfbool().sync(dart.fn(() => {
        if (runAndTrackSideEffects != null) {
          runAndTrackSideEffects();
        }
        return false;
      }, VoidTobool()));
    }
    stabilize(opts) {
      return async.async(dart.void, (function* stabilize() {
        let runAndTrackSideEffects = opts && 'runAndTrackSideEffects' in opts ? opts.runAndTrackSideEffects : null;
        let threshold = opts && 'threshold' in opts ? opts.threshold : 100;
        if (threshold == null) {
          dart.throw(new core.ArgumentError.notNull("threshold"));
        }
        if (runAndTrackSideEffects != null) {
          yield this.update(runAndTrackSideEffects);
        }
        return this.stabilizeWithThreshold(threshold);
      }).bind(this));
    }
    stabilizeWithThreshold(threshold) {
      return async.async(dart.void, (function* stabilizeWithThreshold() {
        if (dart.notNull(threshold) < 1) {
          dart.throw(new core.ArgumentError.value(threshold, "threshold", "Must be >= 1"));
        }
        let count = 0;
        function thresholdExceeded() {
          return count++ > dart.notNull(threshold);
        }
        dart.fn(thresholdExceeded, VoidTobool());
        while (!dart.test(yield this.update())) {
          if (dart.test(thresholdExceeded())) {
            dart.throw(new src__errors__will_never_stabilize.WillNeverStabilizeError.new(threshold));
          }
        }
      }).bind(this));
    }
  };
  (src__frontend__stabilizer.NgTestStabilizer.new = function() {
  }).prototype = src__frontend__stabilizer.NgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer.NgTestStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer.NgTestStabilizer.__proto__),
    update: dart.fnType(async.Future$(core.bool), [], [dart.fnType(dart.void, [])]),
    stabilize: dart.fnType(async.Future$(dart.void), [], {runAndTrackSideEffects: dart.fnType(dart.void, []), threshold: core.int}),
    stabilizeWithThreshold: dart.fnType(async.Future$(dart.void), [core.int])
  }));
  dart.setGetterSignature(src__frontend__stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getGetters(src__frontend__stabilizer.NgTestStabilizer.__proto__),
    isStable: core.bool
  }));
  dart.defineLazy(src__frontend__stabilizer.NgTestStabilizer, {
    /*src__frontend__stabilizer.NgTestStabilizer.alwaysStable*/get alwaysStable() {
      return dart.const(new src__frontend__stabilizer._AlwaysStableNgTestStabilizer.new());
    }
  });
  src__frontend__stabilizer._AlwaysStableNgTestStabilizer = class _AlwaysStableNgTestStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
    get isStable() {
      return true;
    }
  };
  (src__frontend__stabilizer._AlwaysStableNgTestStabilizer.new = function() {
    src__frontend__stabilizer._AlwaysStableNgTestStabilizer.__proto__.new.call(this);
  }).prototype = src__frontend__stabilizer._AlwaysStableNgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer._AlwaysStableNgTestStabilizer);
  const _delegates = Symbol('_delegates');
  const _updatedAtLeastOnce = Symbol('_updatedAtLeastOnce');
  const _updateAll = Symbol('_updateAll');
  const stabilizeWithThreshold = Symbol("stabilizeWithThreshold");
  src__frontend__stabilizer._DelegatingNgTestStabilizer = class _DelegatingNgTestStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
    get isStable() {
      return this[_delegates][$every](dart.fn(delegate => delegate.isStable, NgTestStabilizerTobool()));
    }
    update(runAndTrackSideEffects) {
      return async.async(core.bool, (function* update() {
        if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
        if (dart.test(this[_delegates][$isEmpty])) {
          return false;
        }
        if (runAndTrackSideEffects == null && dart.test(this[_updatedAtLeastOnce])) {
          yield this[_updateAll](runAndTrackSideEffects, dart.fn(d => !dart.test(d.isStable), NgTestStabilizerTobool()));
        } else {
          yield this[_updateAll](runAndTrackSideEffects);
        }
        this[_updatedAtLeastOnce] = true;
        return this.isStable;
      }).bind(this));
    }
    [_updateAll](runAndTrackSideEffects, test) {
      return async.async(dart.void, (function* _updateAll() {
        if (test === void 0) test = null;
        for (let delegate of this[_delegates]) {
          if (test == null || dart.test(test(delegate))) {
            yield delegate.update(runAndTrackSideEffects);
          }
        }
      }).bind(this));
    }
    stabilizeWithThreshold(threshold) {
      return async.async(dart.void, (function* stabilizeWithThreshold$() {
        try {
          this[_updatedAtLeastOnce] = false;
          return this[stabilizeWithThreshold](threshold);
        } finally {
          this[_updatedAtLeastOnce] = false;
        }
      }).bind(this));
    }
    [stabilizeWithThreshold](threshold) {
      return super.stabilizeWithThreshold(threshold);
    }
  };
  (src__frontend__stabilizer._DelegatingNgTestStabilizer.new = function(stabilizers) {
    this[_updatedAtLeastOnce] = false;
    this[_delegates] = stabilizers[$toList]({growable: false});
    src__frontend__stabilizer._DelegatingNgTestStabilizer.__proto__.new.call(this);
  }).prototype = src__frontend__stabilizer._DelegatingNgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer._DelegatingNgTestStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer._DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer._DelegatingNgTestStabilizer.__proto__),
    [_updateAll]: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.void, [])], [dart.fnType(core.bool, [src__frontend__stabilizer.NgTestStabilizer])])
  }));
  dart.setFieldSignature(src__frontend__stabilizer._DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getFields(src__frontend__stabilizer._DelegatingNgTestStabilizer.__proto__),
    [_delegates]: dart.finalFieldType(ListOfNgTestStabilizer()),
    [_updatedAtLeastOnce]: dart.fieldType(core.bool)
  }));
  const _triggerSideEffects = Symbol('_triggerSideEffects');
  const _waitForAsyncEventsOrErrors = Symbol('_waitForAsyncEventsOrErrors');
  const _is_BaseNgZoneStabilizer_default = Symbol('_is_BaseNgZoneStabilizer_default');
  src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer$ = dart.generic(T => {
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    class BaseNgZoneStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
      get ngZone() {
        return this[ngZone$];
      }
      set ngZone(value) {
        super.ngZone = value;
      }
      get pendingTimers() {
        return this[pendingTimers$];
      }
      set pendingTimers(value) {
        super.pendingTimers = value;
      }
      get isStable() {
        return !dart.test(this.ngZone.hasPendingMicrotasks);
      }
      static _noSideEffects() {}
      update(runAndTrackSideEffects) {
        if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
        return FutureOfvoid().sync(dart.fn(() => {
          this[_triggerSideEffects](runAndTrackSideEffects != null ? runAndTrackSideEffects : dart.fn(src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer._noSideEffects, VoidTovoid()));
          return this[_waitForAsyncEventsOrErrors]();
        }, VoidToFutureOfvoid())).then(core.bool, dart.fn(_ => this.isStable, voidTobool()));
      }
      [_triggerSideEffects](withCallback) {
        async.scheduleMicrotask(dart.fn(() => this.ngZone.runGuarded(dart.fn(() => withCallback(), VoidTovoid())), VoidTovoid()));
      }
      waitForAsyncEvents() {
        return this.ngZone.onTurnDone.first;
      }
      static rebuildStackTrace(traceOrChain) {
        return core.StackTrace.fromString(traceOrChain[$join]("\n"));
      }
      [_waitForAsyncEventsOrErrors]() {
        return async.async(dart.void, (function* _waitForAsyncEventsOrErrors() {
          let uncaughtError = null;
          let uncaughtStack = null;
          let onErrorSub = null;
          onErrorSub = this.ngZone.onError.listen(dart.fn(e => {
            uncaughtError = e.error;
            uncaughtStack = src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer.rebuildStackTrace(e.stackTrace);
            onErrorSub.cancel();
          }, NgZoneErrorToNull()));
          yield this.waitForAsyncEvents();
          yield FutureOfNull().new(dart.fn(() => {
          }, VoidToNull()));
          pedantic$.unawaited(onErrorSub.cancel());
          return uncaughtError != null ? FutureOfvoid().error(uncaughtError, uncaughtStack) : FutureOfvoid().value();
        }).bind(this));
      }
    }
    (BaseNgZoneStabilizer.new = function(ngZone, pendingTimers) {
      this[ngZone$] = ngZone;
      this[pendingTimers$] = pendingTimers;
      BaseNgZoneStabilizer.__proto__.new.call(this);
    }).prototype = BaseNgZoneStabilizer.prototype;
    dart.addTypeTests(BaseNgZoneStabilizer);
    BaseNgZoneStabilizer.prototype[_is_BaseNgZoneStabilizer_default] = true;
    const ngZone$ = Symbol("BaseNgZoneStabilizer.ngZone");
    const pendingTimers$ = Symbol("BaseNgZoneStabilizer.pendingTimers");
    dart.setMethodSignature(BaseNgZoneStabilizer, () => ({
      __proto__: dart.getMethods(BaseNgZoneStabilizer.__proto__),
      update: dart.fnType(async.Future$(core.bool), [], [dart.fnType(dart.void, [])]),
      [_triggerSideEffects]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      waitForAsyncEvents: dart.fnType(async.Future$(dart.void), []),
      [_waitForAsyncEventsOrErrors]: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setGetterSignature(BaseNgZoneStabilizer, () => ({
      __proto__: dart.getGetters(BaseNgZoneStabilizer.__proto__),
      isStable: core.bool
    }));
    dart.setFieldSignature(BaseNgZoneStabilizer, () => ({
      __proto__: dart.getFields(BaseNgZoneStabilizer.__proto__),
      ngZone: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
      pendingTimers: dart.finalFieldType(SetOfT())
    }));
    return BaseNgZoneStabilizer;
  });
  src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer = src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer$();
  dart.addTypeTests(src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer, _is_BaseNgZoneStabilizer_default);
  const _minimumDurationForAllPendingTimers = Symbol('_minimumDurationForAllPendingTimers');
  const _duration = Symbol('_duration');
  const _delegate = Symbol('_delegate');
  const _onCancel = Symbol('_onCancel');
  src__frontend__ng_zone__real_time_stabilizer._ObservedTimer = class _ObservedTimer extends core.Object {
    cancel() {
      this[_onCancel]();
      this[_delegate].cancel();
    }
    get tick() {
      return this[_delegate].tick;
    }
    get isActive() {
      return this[_delegate].isActive;
    }
  };
  (src__frontend__ng_zone__real_time_stabilizer._ObservedTimer.new = function(delegate, duration, onCancel) {
    this[_delegate] = delegate;
    this[_duration] = duration;
    this[_onCancel] = onCancel;
  }).prototype = src__frontend__ng_zone__real_time_stabilizer._ObservedTimer.prototype;
  dart.addTypeTests(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer);
  src__frontend__ng_zone__real_time_stabilizer._ObservedTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer, () => ({
    __proto__: dart.getMethods(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer, () => ({
    __proto__: dart.getGetters(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer.__proto__),
    tick: core.int,
    isActive: core.bool
  }));
  dart.setFieldSignature(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer, () => ({
    __proto__: dart.getFields(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer.__proto__),
    [_delegate]: dart.finalFieldType(async.Timer),
    [_duration]: dart.finalFieldType(core.Duration),
    [_onCancel]: dart.finalFieldType(VoidTovoid())
  }));
  const waitForAsyncEvents = Symbol("waitForAsyncEvents");
  src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer = class RealTimeNgZoneStabilizer extends src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer$(src__frontend__ng_zone__real_time_stabilizer._ObservedTimer) {
    static new(timerZone, ngZone) {
      let pendingTimers = new (_IdentityHashSetOf_ObservedTimer()).new();
      timerZone.createTimer = dart.fn((self, parent, zone, duration, callback) => {
        if (!dart.test(src__core__zone__ng_zone.inAngularZone(ngZone, zone))) {
          return parent.createTimer(zone, duration, callback);
        }
        let instance = null;
        let wrappedCallback = () => {
          try {
            callback();
          } finally {
            pendingTimers.remove(instance);
          }
        };
        dart.fn(wrappedCallback, VoidToNull());
        let delegate = parent.createTimer(zone, duration, wrappedCallback);
        instance = new src__frontend__ng_zone__real_time_stabilizer._ObservedTimer.new(delegate, duration, dart.fn(() => pendingTimers.remove(instance), VoidTobool()));
        pendingTimers.add(instance);
        return instance;
      }, ZoneAndZoneDelegateAndZone__ToTimer());
      return new src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.__(ngZone, pendingTimers);
    }
    get isStable() {
      return dart.test(super.isStable) && dart.test(this.pendingTimers.isEmpty);
    }
    waitForAsyncEvents() {
      return async.async(dart.void, (function* waitForAsyncEvents$() {
        yield this[waitForAsyncEvents]();
        if (dart.test(this.pendingTimers.isNotEmpty)) {
          yield async.Future.delayed(this[_minimumDurationForAllPendingTimers]());
        }
      }).bind(this));
    }
    [_minimumDurationForAllPendingTimers]() {
      let result = core.Duration.zero;
      for (let timer of this.pendingTimers) {
        if (dart.test(timer[_duration]['>'](result))) {
          result = timer[_duration];
        }
      }
      return result;
    }
    [waitForAsyncEvents]() {
      return super.waitForAsyncEvents();
    }
  };
  (src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.__ = function(ngZone, pendingTimers) {
    src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.__proto__.new.call(this, ngZone, pendingTimers);
  }).prototype = src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.prototype;
  dart.addTypeTests(src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer);
  dart.setMethodSignature(src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.__proto__),
    waitForAsyncEvents: dart.fnType(async.Future$(dart.void), []),
    [_minimumDurationForAllPendingTimers]: dart.fnType(core.Duration, [])
  }));
  dart.setGetterSignature(src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer, () => ({
    __proto__: dart.getGetters(src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.__proto__),
    isStable: core.bool
  }));
  const _rootComponentRef = Symbol('_rootComponentRef');
  src__frontend__fixture.injectFromFixture = function(T, fixture, tokenOrType) {
    return T._check(fixture[_rootComponentRef].injector.get(tokenOrType));
  };
  const _applicationRef = Symbol('_applicationRef');
  const _testStabilizer = Symbol('_testStabilizer');
  const _is_NgTestFixture_default = Symbol('_is_NgTestFixture_default');
  src__frontend__fixture.NgTestFixture$ = dart.generic(T => {
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(src__frontend__fixture.NgTestFixture$(T)))();
    let ComponentRefOfT = () => (ComponentRefOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(T)))();
    class NgTestFixture extends core.Object {
      static new(applicationRef, rootComponentRef, testStabilizer) {
        return new (NgTestFixtureOfT()).__(applicationRef, rootComponentRef, testStabilizer);
      }
      dispose() {
        return async.async(dart.void, (function* dispose() {
          yield this.update();
          this[_rootComponentRef].destroy();
          this[_rootComponentRef].location[$parent][$remove]();
          this[_applicationRef].dispose();
          src__frontend__bed.activeTest = null;
        }).bind(this));
      }
      get rootElement() {
        return this[_rootComponentRef].location;
      }
      update(run) {
        if (run === void 0) run = null;
        return this[_testStabilizer].stabilize({runAndTrackSideEffects: dart.fn(() => {
            if (run != null) {
              FutureOfvoid().sync(dart.fn(() => {
                run(this[_rootComponentRef].instance);
              }, VoidToNull()));
            }
          }, VoidToNull())});
      }
      get text() {
        return this.rootElement[$text];
      }
      get assertOnlyInstance() {
        return this[_rootComponentRef].instance;
      }
    }
    (NgTestFixture.__ = function(applicationRef, rootComponentRef, testStabilizer) {
      this[_applicationRef] = applicationRef;
      this[_rootComponentRef] = rootComponentRef;
      this[_testStabilizer] = testStabilizer;
    }).prototype = NgTestFixture.prototype;
    dart.addTypeTests(NgTestFixture);
    NgTestFixture.prototype[_is_NgTestFixture_default] = true;
    dart.setMethodSignature(NgTestFixture, () => ({
      __proto__: dart.getMethods(NgTestFixture.__proto__),
      dispose: dart.fnType(async.Future$(dart.void), []),
      update: dart.fnType(async.Future$(dart.void), [], [dart.fnType(dart.void, [T])])
    }));
    dart.setGetterSignature(NgTestFixture, () => ({
      __proto__: dart.getGetters(NgTestFixture.__proto__),
      rootElement: html.Element,
      text: core.String,
      assertOnlyInstance: T
    }));
    dart.setFieldSignature(NgTestFixture, () => ({
      __proto__: dart.getFields(NgTestFixture.__proto__),
      [_applicationRef]: dart.finalFieldType(src__core__application_ref.ApplicationRef),
      [_rootComponentRef]: dart.finalFieldType(ComponentRefOfT()),
      [_testStabilizer]: dart.finalFieldType(src__frontend__stabilizer.NgTestStabilizer)
    }));
    return NgTestFixture;
  });
  src__frontend__fixture.NgTestFixture = src__frontend__fixture.NgTestFixture$();
  dart.addTypeTests(src__frontend__fixture.NgTestFixture, _is_NgTestFixture_default);
  dart.defineLazy(src__frontend__bed, {
    /*src__frontend__bed.activeTest*/get activeTest() {
      return null;
    },
    set activeTest(_) {}
  });
  src__frontend__bed._concat = function(E, a, b) {
    let _ = a[$toList]();
    _[$addAll](b);
    return _;
  };
  src__frontend__bed.disposeAnyRunningTest = function() {
    return async.async(dart.void, function* disposeAnyRunningTest() {
      let t = src__frontend__bed.activeTest;
      return t == null ? null : t.dispose();
    });
  };
  const _createDynamic = Symbol('_createDynamic');
  src__frontend__bed.createDynamicFixture = function(T, bed, type, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    return bed[_createDynamic](type, {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection});
  };
  src__frontend__bed.createDynamicTestBed = function(T, opts) {
    let host = opts && 'host' in opts ? opts.host : null;
    let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
    let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
    return src__frontend__bed.NgTestBed$(T)._allowDynamicType({host: host, rootInjector: rootInjector, watchAngularLifecycle: watchAngularLifecycle});
  };
  const _host = Symbol('_host');
  const _providers = Symbol('_providers');
  const _createStabilizer = Symbol('_createStabilizer');
  const _rootInjector = Symbol('_rootInjector');
  const _componentFactory = Symbol('_componentFactory');
  let const$;
  let const$0;
  const _usesComponentFactory = Symbol('_usesComponentFactory');
  const _createRootInjectorFactory = Symbol('_createRootInjectorFactory');
  const _is_NgTestBed_default = Symbol('_is_NgTestBed_default');
  src__frontend__bed.NgTestBed$ = dart.generic(T => {
    let NgTestBedOfT = () => (NgTestBedOfT = dart.constFn(src__frontend__bed.NgTestBed$(T)))();
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(src__frontend__fixture.NgTestFixture$(T)))();
    let FutureOfNgTestFixtureOfT = () => (FutureOfNgTestFixtureOfT = dart.constFn(async.Future$(NgTestFixtureOfT())))();
    let ComponentRefOfT = () => (ComponentRefOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(T)))();
    let ComponentRefOfTToFutureOfNgTestFixtureOfT = () => (ComponentRefOfTToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [ComponentRefOfT()])))();
    let ComponentFactoryOfT = () => (ComponentFactoryOfT = dart.constFn(src__core__linker__component_factory.ComponentFactory$(T)))();
    let VoidToFutureOfNgTestFixtureOfT = () => (VoidToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [])))();
    class NgTestBed extends core.Object {
      static _defaultHost() {
        let host = html.Element.tag("ng-test-bed");
        html.document.body[$append](host);
        return host;
      }
      static _defaultRootInjector(parent) {
        if (parent === void 0) parent = null;
        return src__di__injector__injector.Injector.empty(src__di__injector__hierarchical.HierarchicalInjector._check(parent));
      }
      static _alwaysStable(_) {
        return src__frontend__stabilizer.NgTestStabilizer.alwaysStable;
      }
      static _defaultStabilizers(injector, timerZone) {
        if (timerZone === void 0) timerZone = null;
        return src__frontend__ng_zone__real_time_stabilizer.RealTimeNgZoneStabilizer.new(timerZone, injector.provideType(src__core__zone__ng_zone.NgZone, dart.wrapType(src__core__zone__ng_zone.NgZone)));
      }
      static forComponent(T, component, opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : dart.fn(src__frontend__bed.NgTestBed._defaultRootInjector, __ToInjector());
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) {
          dart.throw(new src__errors__generic_type_missing.GenericTypeMissingError.new());
        }
        if (component == null) {
          dart.throw(new core.ArgumentError.notNull("component"));
        }
        return new (src__frontend__bed.NgTestBed$(T))._useComponentFactory({component: component, rootInjector: rootInjector, host: host, watchAngularLifecycle: watchAngularLifecycle});
      }
      static new(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) {
          dart.throw(new src__errors__generic_type_missing.GenericTypeMissingError.new());
        }
        return NgTestBedOfT()._allowDynamicType({host: host, rootInjector: rootInjector, watchAngularLifecycle: watchAngularLifecycle});
      }
      static _allowDynamicType(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        return new (NgTestBedOfT()).__({host: host, providers: const$0 || (const$0 = dart.constList([dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader)], core.Object)), stabilizer: dart.test(watchAngularLifecycle) ? dart.fn(src__frontend__bed.NgTestBed._defaultStabilizers, Injector__ToNgTestStabilizer()) : dart.fn(src__frontend__bed.NgTestBed._alwaysStable, dynamicToNgTestStabilizer()), rootInjector: rootInjector});
      }
      get [_usesComponentFactory]() {
        return this[_componentFactory] != null;
      }
      addProviders(providers) {
        if (dart.test(this[_usesComponentFactory])) {
          dart.throw(new core.UnsupportedError.new("Use \"addInjector\" instead"));
        }
        return this.fork(T, {providers: src__frontend__bed._concat(core.Object, this[_providers], providers)});
      }
      addInjector(factory) {
        return this.fork(T, {rootInjector: dart.fn(parent => {
            if (parent === void 0) parent = null;
            return this[_rootInjector](factory(parent));
          }, __ToInjector())});
      }
      addStabilizers(stabilizers) {
        return this.fork(T, {stabilizer: src__frontend__stabilizer.composeStabilizers((() => {
            let _ = JSArrayOfInjectorToNgTestStabilizer().of([this[_createStabilizer]]);
            _[$addAll](stabilizers);
            return _;
          })())});
      }
      create(opts) {
        let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        return this[_createDynamic](dart.wrapType(T), {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection});
      }
      static _checkForActiveTest() {
        if (src__frontend__bed.activeTest != null) {
          dart.throw(new src__errors__test_already_running.TestAlreadyRunningError.new());
        }
      }
      [_createRootInjectorFactory]() {
        let rootInjector = this[_rootInjector];
        if (dart.test(this[_providers][$isNotEmpty])) {
          rootInjector = dart.fn(parent => {
            if (parent === void 0) parent = null;
            return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(this[_providers], this[_rootInjector](parent));
          }, __ToReflectiveInjector());
        }
        return rootInjector;
      }
      [_createDynamic](type, opts) {
        let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        src__frontend__bed.NgTestBed._checkForActiveTest();
        return FutureOfNgTestFixtureOfT().sync(dart.fn(() => {
          src__frontend__bed.NgTestBed._checkForActiveTest();
          let timerHookZone = new src__frontend__ng_zone__timer_hook_zone.TimerHookZone.new();
          let ngZoneInstance = null;
          function ngZoneFactory() {
            return timerHookZone.run(src__core__zone__ng_zone.NgZone, dart.fn(() => ngZoneInstance = new src__core__zone__ng_zone.NgZone.new({enableLongStackTrace: true}), VoidToNgZone()));
          }
          dart.fn(ngZoneFactory, VoidToNgZone());
          let allStabilizers = null;
          const createStabilizersAndRunUserHook = (function(injector) {
            return async.async(dart.void, (function* createStabilizersAndRunUserHook() {
              let createStabilizer = this[_createStabilizer];
              allStabilizers = Injector__ToNgTestStabilizer().is(createStabilizer) ? createStabilizer(injector, timerHookZone) : createStabilizer(injector);
              if (beforeComponentCreated == null) {
                return null;
              }
              let completer = CompleterOfvoid().new();
              ngZoneInstance.runGuarded(dart.fn(() => async.async(core.Null, function*() {
                try {
                  yield beforeComponentCreated(injector);
                  completer.complete();
                } catch (e) {
                  let s = dart.stackTrace(e);
                  completer.completeError(e, s);
                }
              }), VoidToFutureOfNull()));
              return completer.future.whenComplete(dart.fn(() => allStabilizers.update(), VoidToFutureOfbool()));
            }).bind(this));
          }).bind(this);
          dart.fn(createStabilizersAndRunUserHook, InjectorToFutureOfvoid());
          return src__bootstrap.bootstrapForTest(T, ComponentFactoryOfT()._check(this[_componentFactory] != null ? this[_componentFactory] : src__core__linker__component_resolver.typeToFactory(type)), this[_host] != null ? this[_host] : src__frontend__bed.NgTestBed._defaultHost(), this[_createRootInjectorFactory](), {beforeComponentCreated: createStabilizersAndRunUserHook, beforeChangeDetection: beforeChangeDetection, createNgZone: ngZoneFactory}).then(NgTestFixtureOfT(), dart.fn(componentRef => async.async(NgTestFixtureOfT(), function*() {
            src__frontend__bed.NgTestBed._checkForActiveTest();
            yield allStabilizers.stabilize();
            let testFixture = NgTestFixtureOfT().new(src__core__application_ref.ApplicationRef._check(componentRef.injector.get(dart.wrapType(src__core__application_ref.ApplicationRef))), componentRef, allStabilizers);
            src__frontend__bed.activeTest = testFixture;
            return testFixture;
          }), ComponentRefOfTToFutureOfNgTestFixtureOfT()));
        }, VoidToFutureOfNgTestFixtureOfT()));
      }
      fork(E, opts) {
        dart.checkTypeBound(E, T, 'E');
        let host = opts && 'host' in opts ? opts.host : null;
        let component = opts && 'component' in opts ? opts.component : null;
        let providers = opts && 'providers' in opts ? opts.providers : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let stabilizer = opts && 'stabilizer' in opts ? opts.stabilizer : null;
        return new (src__frontend__bed.NgTestBed$(E)).__({host: host != null ? host : this[_host], providers: providers != null ? providers : this[_providers], stabilizer: stabilizer != null ? stabilizer : this[_createStabilizer], rootInjector: rootInjector != null ? rootInjector : this[_rootInjector], component: src__core__linker__component_factory.ComponentFactory$(E)._check(component != null ? component : this[_componentFactory])});
      }
      setComponent(E, component) {
        dart.checkTypeBound(E, T, 'E');
        return this.fork(E, {component: component});
      }
      setHost(host) {
        return this.fork(T, {host: host});
      }
    }
    (NgTestBed.__ = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let stabilizer = opts && 'stabilizer' in opts ? opts.stabilizer : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let component = opts && 'component' in opts ? opts.component : null;
      this[_host] = host;
      this[_providers] = providers[$toList]();
      this[_createStabilizer] = stabilizer;
      let l = rootInjector;
      this[_rootInjector] = l != null ? l : dart.fn(src__frontend__bed.NgTestBed._defaultRootInjector, __ToInjector());
      this[_componentFactory] = component;
    }).prototype = NgTestBed.prototype;
    (NgTestBed._useComponentFactory = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let component = opts && 'component' in opts ? opts.component : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : null;
      this[_host] = host;
      this[_providers] = const$ || (const$ = dart.constList([], core.Object));
      this[_createStabilizer] = dart.test(watchAngularLifecycle) ? dart.fn(src__frontend__bed.NgTestBed._defaultStabilizers, Injector__ToNgTestStabilizer()) : dart.fn(src__frontend__bed.NgTestBed._alwaysStable, dynamicToNgTestStabilizer());
      this[_rootInjector] = rootInjector;
      this[_componentFactory] = component;
    }).prototype = NgTestBed.prototype;
    dart.addTypeTests(NgTestBed);
    NgTestBed.prototype[_is_NgTestBed_default] = true;
    dart.setMethodSignature(NgTestBed, () => ({
      __proto__: dart.getMethods(NgTestBed.__proto__),
      addProviders: dart.fnType(src__frontend__bed.NgTestBed$(T), [core.Iterable$(core.Object)]),
      addInjector: dart.fnType(src__frontend__bed.NgTestBed$(T), [dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])]),
      addStabilizers: dart.fnType(src__frontend__bed.NgTestBed$(T), [core.Iterable$(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector]))]),
      create: dart.fnType(async.Future$(src__frontend__fixture.NgTestFixture$(T)), [], {beforeComponentCreated: dart.fnType(async.FutureOr$(dart.void), [src__di__injector__injector.Injector]), beforeChangeDetection: dart.fnType(async.FutureOr$(dart.void), [T])}),
      [_createRootInjectorFactory]: dart.fnType(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector]), []),
      [_createDynamic]: dart.fnType(async.Future$(src__frontend__fixture.NgTestFixture$(T)), [core.Type], {beforeComponentCreated: dart.fnType(async.FutureOr$(dart.void), [src__di__injector__injector.Injector]), beforeChangeDetection: dart.fnType(async.FutureOr$(dart.void), [T])}),
      fork: dart.gFnType(E => [src__frontend__bed.NgTestBed$(E), [], {host: html.Element, component: src__core__linker__component_factory.ComponentFactory$(E), providers: core.Iterable$(core.Object), rootInjector: dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector]), stabilizer: dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector])}], E => [T]),
      setComponent: dart.gFnType(E => [src__frontend__bed.NgTestBed$(E), [src__core__linker__component_factory.ComponentFactory$(E)]], E => [T]),
      setHost: dart.fnType(src__frontend__bed.NgTestBed$(T), [html.Element])
    }));
    dart.setGetterSignature(NgTestBed, () => ({
      __proto__: dart.getGetters(NgTestBed.__proto__),
      [_usesComponentFactory]: core.bool
    }));
    dart.setFieldSignature(NgTestBed, () => ({
      __proto__: dart.getFields(NgTestBed.__proto__),
      [_host]: dart.finalFieldType(html.Element),
      [_providers]: dart.finalFieldType(ListOfObject()),
      [_createStabilizer]: dart.finalFieldType(InjectorToNgTestStabilizer()),
      [_componentFactory]: dart.finalFieldType(ComponentFactoryOfT()),
      [_rootInjector]: dart.finalFieldType(__ToInjector())
    }));
    return NgTestBed;
  });
  src__frontend__bed.NgTestBed = src__frontend__bed.NgTestBed$();
  dart.addTypeTests(src__frontend__bed.NgTestBed, _is_NgTestBed_default);
  dart.trackLibraries("packages/angular_test/src/bootstrap.ddc", {
    "package:angular_test/src/errors/generic_type_missing.dart": src__errors__generic_type_missing,
    "package:angular_test/src/errors/test_already_running.dart": src__errors__test_already_running,
    "package:angular_test/src/errors/will_never_stabilize.dart": src__errors__will_never_stabilize,
    "package:angular_test/src/errors.dart": src__errors,
    "package:angular_test/src/bootstrap.dart": src__bootstrap,
    "package:angular_test/src/frontend/ng_zone/timer_hook_zone.dart": src__frontend__ng_zone__timer_hook_zone,
    "package:angular_test/src/frontend/stabilizer.dart": src__frontend__stabilizer,
    "package:angular_test/src/frontend/ng_zone/base_stabilizer.dart": src__frontend__ng_zone__base_stabilizer,
    "package:angular_test/src/frontend/ng_zone/real_time_stabilizer.dart": src__frontend__ng_zone__real_time_stabilizer,
    "package:angular_test/src/frontend/fixture.dart": src__frontend__fixture,
    "package:angular_test/src/frontend/bed.dart": src__frontend__bed
  }, '{"version":3,"sourceRoot":"","sources":["errors/generic_type_missing.dart","errors/test_already_running.dart","errors/will_never_stabilize.dart","bootstrap.dart","frontend/ng_zone/timer_hook_zone.dart","frontend/stabilizer.dart","frontend/ng_zone/base_stabilizer.dart","frontend/ng_zone/real_time_stabilizer.dart","frontend/fixture.dart","frontend/bed.dart"],"names":[],"mappings":"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","file":"bootstrap.ddc.js"}');
  // Exports:
  return {
    src__errors__generic_type_missing: src__errors__generic_type_missing,
    src__errors__test_already_running: src__errors__test_already_running,
    src__errors__will_never_stabilize: src__errors__will_never_stabilize,
    src__errors: src__errors,
    src__bootstrap: src__bootstrap,
    src__frontend__ng_zone__timer_hook_zone: src__frontend__ng_zone__timer_hook_zone,
    src__frontend__stabilizer: src__frontend__stabilizer,
    src__frontend__ng_zone__base_stabilizer: src__frontend__ng_zone__base_stabilizer,
    src__frontend__ng_zone__real_time_stabilizer: src__frontend__ng_zone__real_time_stabilizer,
    src__frontend__fixture: src__frontend__fixture,
    src__frontend__bed: src__frontend__bed
  };
});

//# sourceMappingURL=bootstrap.ddc.js.map
