define(['dart_sdk', 'packages/angular_test/src/bootstrap'], function(dart_sdk, bootstrap) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__frontend__ng_zone__base_stabilizer = bootstrap.src__frontend__ng_zone__base_stabilizer;
  const _root = Object.create(null);
  const src__frontend__ng_zone__fake_time_stabilizer = Object.create(_root);
  const src__frontend = Object.create(_root);
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  const $sort = dartx.sort;
  const $first = dartx.first;
  let _IdentityHashSetOf_FakeTimer = () => (_IdentityHashSetOf_FakeTimer = dart.constFn(collection._IdentityHashSet$(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ZoneAndZoneDelegateAndZone__To_FakeTimer = () => (ZoneAndZoneDelegateAndZone__To_FakeTimer = dart.constFn(dart.fnType(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, VoidTovoid()])))();
  let _FakeTimerTobool = () => (_FakeTimerTobool = dart.constFn(dart.fnType(core.bool, [src__frontend__ng_zone__fake_time_stabilizer._FakeTimer])))();
  let _FakeTimerAnd_FakeTimerToint = () => (_FakeTimerAnd_FakeTimerToint = dart.constFn(dart.fnType(core.int, [src__frontend__ng_zone__fake_time_stabilizer._FakeTimer, src__frontend__ng_zone__fake_time_stabilizer._FakeTimer])))();
  const _lastElapse = Symbol('_lastElapse');
  const _completeAfter = Symbol('_completeAfter');
  const _completeTimers = Symbol('_completeTimers');
  const _complete = Symbol('_complete');
  const _clearPendingStatus = Symbol('_clearPendingStatus');
  const _isActive = Symbol('_isActive');
  src__frontend__ng_zone__fake_time_stabilizer._FakeTimer = class _FakeTimer extends core.Object {
    get isActive() {
      return this[_isActive];
    }
    get tick() {
      return 0;
    }
    cancel() {
      if (dart.test(this.isActive)) {
        this[_clearPendingStatus]();
        this[_isActive] = false;
      }
    }
    complete() {
      if (dart.test(this.isActive)) {
        this[_complete]();
        this.cancel();
      }
    }
    static _compareByCompleteAfter(a, b) {
      return a[_completeAfter].compareTo(b[_completeAfter]);
    }
  };
  (src__frontend__ng_zone__fake_time_stabilizer._FakeTimer.new = function(complete, clearPendingStatus, completeAfter) {
    this[_isActive] = true;
    this[_complete] = complete;
    this[_clearPendingStatus] = clearPendingStatus;
    this[_completeAfter] = completeAfter;
  }).prototype = src__frontend__ng_zone__fake_time_stabilizer._FakeTimer.prototype;
  dart.addTypeTests(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer);
  src__frontend__ng_zone__fake_time_stabilizer._FakeTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer, () => ({
    __proto__: dart.getMethods(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer.__proto__),
    cancel: dart.fnType(dart.void, []),
    complete: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer, () => ({
    __proto__: dart.getGetters(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer.__proto__),
    isActive: core.bool,
    tick: core.int
  }));
  dart.setFieldSignature(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer, () => ({
    __proto__: dart.getFields(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer.__proto__),
    [_complete]: dart.finalFieldType(VoidTovoid()),
    [_clearPendingStatus]: dart.finalFieldType(VoidTovoid()),
    [_completeAfter]: dart.finalFieldType(core.Duration),
    [_isActive]: dart.fieldType(core.bool)
  }));
  src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer = class FakeTimeNgZoneStabilizer extends src__frontend__ng_zone__base_stabilizer.BaseNgZoneStabilizer$(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer) {
    static new(timerZone, ngZone) {
      let pendingTimers = new (_IdentityHashSetOf_FakeTimer()).new();
      let stabilizer = null;
      timerZone.createTimer = dart.fn((self, parent, zone, duration, callback) => {
        let instance = null;
        function removeTimer() {
          pendingTimers.remove(instance);
        }
        dart.fn(removeTimer, VoidTovoid());
        let wrappedCallback = () => {
          try {
            callback();
          } finally {
            removeTimer();
          }
        };
        dart.fn(wrappedCallback, VoidToNull());
        instance = new src__frontend__ng_zone__fake_time_stabilizer._FakeTimer.new(zone.bindCallback(core.Null, wrappedCallback), removeTimer, stabilizer[_lastElapse]['+'](duration));
        pendingTimers.add(instance);
        return instance;
      }, ZoneAndZoneDelegateAndZone__To_FakeTimer());
      return stabilizer = new src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer.__(ngZone, pendingTimers);
    }
    elapse(time) {
      return async.async(dart.void, (function* elapse() {
        let waitUntil = this[_lastElapse]['+'](time);
        yield this[_completeTimers](dart.fn(t => t[_completeAfter]['<='](waitUntil), _FakeTimerTobool()));
        this[_lastElapse] = waitUntil;
      }).bind(this));
    }
    [_completeTimers](shouldComplete) {
      return async.async(dart.void, (function* _completeTimers() {
        while (true) {
          let toComplete = this.pendingTimers.where(shouldComplete)[$toList]();
          if (dart.test(toComplete[$isEmpty])) {
            break;
          }
          toComplete[$sort](dart.fn(src__frontend__ng_zone__fake_time_stabilizer._FakeTimer._compareByCompleteAfter, _FakeTimerAnd_FakeTimerToint()));
          let firstPendingTimer = toComplete[$first];
          this[_lastElapse] = firstPendingTimer[_completeAfter];
          yield this.update(dart.bind(firstPendingTimer, 'complete'));
        }
      }).bind(this));
    }
  };
  (src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer.__ = function(ngZone, pendingTimers) {
    this[_lastElapse] = core.Duration.zero;
    src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer.__proto__.new.call(this, ngZone, pendingTimers);
  }).prototype = src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer.prototype;
  dart.addTypeTests(src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer);
  dart.setMethodSignature(src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer.__proto__),
    elapse: dart.fnType(async.Future$(dart.void), [core.Duration]),
    [_completeTimers]: dart.fnType(async.Future$(dart.void), [dart.fnType(core.bool, [src__frontend__ng_zone__fake_time_stabilizer._FakeTimer])])
  }));
  dart.setFieldSignature(src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer, () => ({
    __proto__: dart.getFields(src__frontend__ng_zone__fake_time_stabilizer.FakeTimeNgZoneStabilizer.__proto__),
    [_lastElapse]: dart.fieldType(core.Duration)
  }));
  dart.trackLibraries("packages/angular_test/src/frontend.ddc", {
    "package:angular_test/src/frontend/ng_zone/fake_time_stabilizer.dart": src__frontend__ng_zone__fake_time_stabilizer,
    "package:angular_test/src/frontend.dart": src__frontend
  }, '{"version":3,"sourceRoot":"","sources":["frontend/ng_zone/fake_time_stabilizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAgGuB,gBAAS;;;YAGd;IAAC;;AAIf,oBAAI,aAAQ,GAAE;AACZ,iCAAmB;AACnB,uBAAS,GAAG;;IAEhB;;AAGE,oBAAI,aAAQ,GAAE;AACZ,uBAAS;AACT,mBAAM;;IAEV;mCAEmC,CAAY,EAAE,CAAY;YACzD,EAAC,gBAAe,UAAU,CAAC,CAAC,gBAAe;IAAC;;;IAxB3C,eAAS,GAAG;IAFD,eAAS;IAAO,yBAAmB;IAAO,oBAAc;EAAC;;;;;;;;;;;;;;;;;;;;;eAvExC,SAAuB,EAAE,MAAa;AAAE,AAEvE,UAAM,gBAAgB;AAEtB,UAAyB;AACzB,eAAS,YAAY,GAAG,SAAC,IAAI,EAAE,MAAM,EAAE,IAAI,EAAE,QAAQ,EAAE,QAAQ;AAC7D,YAAW;AACX,iBAAK;AACH,uBAAa,OAAO,CAAC,QAAQ;;gBAD1B;AAIL,YAAM;AACJ,cAAI;AACF,oBAAQ;oBACA;AACR,uBAAW;;;gBAJT;AAON,gBAAQ,OAAG,2DAAU,CAAC,IAAI,aAAa,YAAC,eAAe,GAAG,WAAW,EACjE,AAAuB,UAAb,aAAY,MAAG,QAAQ;AACrC,qBAAa,IAAI,CAAC,QAAQ;AAC1B,cAAO,SAAQ;;AAEjB,YAAO,WAAU,OAAG,wEAA0B,CAC5C,MAAM,EACN,aAAa;IAEjB;WAeoB,IAAa;AAAE;AACjC,YAAM,YAAY,AAAY,iBAAD,MAAG,IAAI;AACpC,cAAM,qBAAe,CAAC,QAAC,CAAC,IAAK,AAAiB,CAAhB,gBAAe,OAAI,SAAS;AAC1D,yBAAW,GAAG,SAAS;MACzB;;sBAI6B,cAAwC;AAAE;AACrE,eAAO,MAAM;AACX,cAAI,aAAa,kBAAa,MAAM,CAAC,cAAc,UAAQ;AAC3D,wBAAI,UAAU,UAAQ,GAAE;AACtB;;AAGF,oBAAU,OAAK,SAAC,uDAAU,wBAAwB;AAClD,cAAI,oBAAoB,UAAU,QAAM;AACxC,2BAAW,GAAG,iBAAiB,gBAAe;AAC9C,gBAAM,WAAM,WAAC,iBAAiB;;MAElC;;;uFAhCE,MAAa,EACb,aAA6B;IAI3B,iBAAW,GAAG,aAAQ,KAAK;AAH3B,mGAAM,MAAM,EAAE,aAAa;EAAC","file":"frontend.ddc.js"}');
  // Exports:
  return {
    src__frontend__ng_zone__fake_time_stabilizer: src__frontend__ng_zone__fake_time_stabilizer,
    src__frontend: src__frontend
  };
});

//# sourceMappingURL=frontend.ddc.js.map
