define(['dart_sdk', 'packages/async/async', 'packages/stack_trace/stack_trace'], function(dart_sdk, async, stack_trace) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__async_memoizer = async.src__async_memoizer;
  const src__restartable_timer = async.src__restartable_timer;
  const src__future_group = async.src__future_group;
  const src__chain = stack_trace.src__chain;
  const _root = Object.create(null);
  const pool = Object.create(_root);
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  let CompleterOfPoolResource = () => (CompleterOfPoolResource = dart.constFn(async$.Completer$(pool.PoolResource)))();
  let QueueOfCompleterOfPoolResource = () => (QueueOfCompleterOfPoolResource = dart.constFn(collection.Queue$(CompleterOfPoolResource())))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let QueueOfVoidTovoid = () => (QueueOfVoidTovoid = dart.constFn(collection.Queue$(VoidTovoid())))();
  let FutureOfPoolResource = () => (FutureOfPoolResource = dart.constFn(async$.Future$(pool.PoolResource)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async$.Future$(dart.void)))();
  let intToFutureOfvoid = () => (intToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.int])))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async$.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async$.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const _maxAllocatedResources = Symbol('_maxAllocatedResources');
  const _timeout = Symbol('_timeout');
  const _requestedResources = Symbol('_requestedResources');
  const _onReleaseCallbacks = Symbol('_onReleaseCallbacks');
  const _onReleaseCompleters = Symbol('_onReleaseCompleters');
  const _allocatedResources = Symbol('_allocatedResources');
  const _timer = Symbol('_timer');
  const _closeGroup = Symbol('_closeGroup');
  const _closeMemo = Symbol('_closeMemo');
  const _onTimeout = Symbol('_onTimeout');
  const _runOnRelease = Symbol('_runOnRelease');
  const _resetTimer = Symbol('_resetTimer');
  const _onResourceReleased = Symbol('_onResourceReleased');
  const _onResourceReleaseAllowed = Symbol('_onResourceReleaseAllowed');
  pool.Pool = class Pool extends core.Object {
    get isClosed() {
      return this[_closeMemo].hasRun;
    }
    get done() {
      return this[_closeMemo].future;
    }
    request() {
      if (dart.test(this.isClosed)) {
        dart.throw(new core.StateError.new("request() may not be called on a closed Pool."));
      }
      if (dart.notNull(this[_allocatedResources]) < dart.notNull(this[_maxAllocatedResources])) {
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) + 1;
        return FutureOfPoolResource().value(new pool.PoolResource.__(this));
      } else if (dart.test(this[_onReleaseCallbacks].isNotEmpty)) {
        return this[_runOnRelease](this[_onReleaseCallbacks].removeFirst());
      } else {
        let completer = CompleterOfPoolResource().new();
        this[_requestedResources].add(completer);
        this[_resetTimer]();
        return completer.future;
      }
    }
    withResource(T, callback) {
      return async$.async(T, (function* withResource() {
        if (dart.test(this.isClosed)) {
          dart.throw(new core.StateError.new("withResource() may not be called on a closed Pool."));
        }
        let resource = (yield this.request());
        try {
          return yield callback();
        } finally {
          resource.release();
        }
      }).bind(this));
    }
    forEach(S, T, elements, action, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let t = onError;
      t == null ? onError = dart.fn((item, e, s) => true, dart.fnType(core.bool, [S, core.Object, core.StackTrace])) : t;
      let cancelPending = false;
      let resumeCompleter = null;
      let controller = null;
      let iterator = null;
      const run = (function(i) {
        return async$.async(dart.void, (function* run() {
          while (dart.test(iterator.moveNext())) {
            let current = iterator.current;
            this[_resetTimer]();
            yield (() => {
              let t = resumeCompleter;
              return t == null ? null : t.future;
            })();
            if (cancelPending) {
              break;
            }
            let value = null;
            try {
              value = (yield action(current));
            } catch (e) {
              let stack = dart.stackTrace(e);
              if (dart.test(onError(current, e, stack))) {
                controller.addError(e, stack);
              }
              continue;
            }
            controller.add(value);
          }
        }).bind(this));
      }).bind(this);
      dart.fn(run, intToFutureOfvoid());
      let doneFuture = null;
      const onListen = (function() {
        if (!(iterator == null)) dart.assertFailed();
        iterator = elements[$iterator];
        if (!(doneFuture == null)) dart.assertFailed();
        doneFuture = async$.Future.wait(dart.void, IterableOfint().generate(this[_maxAllocatedResources])[$map](FutureOfvoid(), dart.fn(i => this.withResource(dart.void, dart.fn(() => run(i), VoidToFutureOfvoid())), intToFutureOfvoid())), {eagerError: true}).catchError(dart.bind(controller, 'addError'));
        doneFuture.whenComplete(dart.bind(controller, 'close'));
      }).bind(this);
      dart.fn(onListen, VoidTovoid());
      controller = async$.StreamController$(T).new({sync: true, onListen: onListen, onCancel: dart.fn(() => async$.async(core.Null, function*() {
          if (!!cancelPending) dart.assertFailed();
          cancelPending = true;
          yield doneFuture;
        }), VoidToFutureOfNull()), onPause: dart.fn(() => {
          if (!(resumeCompleter == null)) dart.assertFailed();
          resumeCompleter = async$.Completer.new();
        }, VoidToNull()), onResume: dart.fn(() => {
          if (!(resumeCompleter != null)) dart.assertFailed();
          resumeCompleter.complete();
          resumeCompleter = null;
        }, VoidToNull())});
      return controller.stream;
    }
    close() {
      return this[_closeMemo].runOnce(dart.fn(() => {
        if (this[_closeGroup] != null) return this[_closeGroup].future;
        this[_resetTimer]();
        this[_closeGroup] = new src__future_group.FutureGroup.new();
        for (let callback of this[_onReleaseCallbacks]) {
          this[_closeGroup].add(async$.Future.sync(callback));
        }
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - dart.notNull(this[_onReleaseCallbacks].length);
        this[_onReleaseCallbacks].clear();
        if (this[_allocatedResources] === 0) this[_closeGroup].close();
        return this[_closeGroup].future;
      }, VoidToFutureOfList()));
    }
    [_onResourceReleased]() {
      this[_resetTimer]();
      if (dart.test(this[_requestedResources].isNotEmpty)) {
        let pending = this[_requestedResources].removeFirst();
        pending.complete(new pool.PoolResource.__(this));
      } else {
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - 1;
        if (dart.test(this.isClosed) && this[_allocatedResources] === 0) this[_closeGroup].close();
      }
    }
    [_onResourceReleaseAllowed](onRelease) {
      this[_resetTimer]();
      if (dart.test(this[_requestedResources].isNotEmpty)) {
        let pending = this[_requestedResources].removeFirst();
        pending.complete(this[_runOnRelease](onRelease));
      } else if (dart.test(this.isClosed)) {
        this[_closeGroup].add(async$.Future.sync(onRelease));
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - 1;
        if (this[_allocatedResources] === 0) this[_closeGroup].close();
      } else {
        let zone = async$.Zone.current;
        let registered = zone.registerCallback(dart.dynamic, onRelease);
        this[_onReleaseCallbacks].add(dart.fn(() => zone.run(dart.void, registered), VoidTovoid()));
      }
    }
    [_runOnRelease](onRelease) {
      async$.Future.sync(onRelease).then(core.Null, dart.fn(value => {
        this[_onReleaseCompleters].removeFirst().complete(new pool.PoolResource.__(this));
      }, dynamicToNull())).catchError(dart.fn((error, stackTrace) => {
        this[_onReleaseCompleters].removeFirst().completeError(error, stackTrace);
      }, dynamicAndStackTraceToNull()));
      let completer = CompleterOfPoolResource().sync();
      this[_onReleaseCompleters].add(completer);
      return completer.future;
    }
    [_resetTimer]() {
      if (this[_timer] == null) return;
      if (dart.test(this[_requestedResources].isEmpty)) {
        this[_timer].cancel();
      } else {
        this[_timer].reset();
      }
    }
    [_onTimeout]() {
      for (let completer of this[_requestedResources]) {
        completer.completeError(new async$.TimeoutException.new("Pool deadlock: all resources have been " + "allocated for too long.", this[_timeout]), src__chain.Chain.current());
      }
      this[_requestedResources].clear();
      this[_timer] = null;
    }
  };
  (pool.Pool.new = function(maxAllocatedResources, opts) {
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    this[_requestedResources] = QueueOfCompleterOfPoolResource().new();
    this[_onReleaseCallbacks] = QueueOfVoidTovoid().new();
    this[_onReleaseCompleters] = QueueOfCompleterOfPoolResource().new();
    this[_allocatedResources] = 0;
    this[_timer] = null;
    this[_closeGroup] = null;
    this[_closeMemo] = new src__async_memoizer.AsyncMemoizer.new();
    this[_maxAllocatedResources] = maxAllocatedResources;
    this[_timeout] = timeout;
    if (dart.notNull(this[_maxAllocatedResources]) <= 0) {
      dart.throw(new core.ArgumentError.value(this[_maxAllocatedResources], "maxAllocatedResources", "Must be greater than zero."));
    }
    if (timeout != null) {
      let _ = new src__restartable_timer.RestartableTimer.new(timeout, dart.bind(this, _onTimeout));
      _.cancel();
      this[_timer] = _;
    }
  }).prototype = pool.Pool.prototype;
  dart.addTypeTests(pool.Pool);
  dart.setMethodSignature(pool.Pool, () => ({
    __proto__: dart.getMethods(pool.Pool.__proto__),
    request: dart.fnType(async$.Future$(pool.PoolResource), []),
    withResource: dart.gFnType(T => [async$.Future$(T), [dart.fnType(async$.FutureOr$(T), [])]]),
    forEach: dart.gFnType((S, T) => [async$.Stream$(T), [core.Iterable$(S), dart.fnType(async$.FutureOr$(T), [S])], {onError: dart.fnType(core.bool, [S, core.Object, core.StackTrace])}]),
    close: dart.fnType(async$.Future, []),
    [_onResourceReleased]: dart.fnType(dart.void, []),
    [_onResourceReleaseAllowed]: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
    [_runOnRelease]: dart.fnType(async$.Future$(pool.PoolResource), [dart.fnType(dart.dynamic, [])]),
    [_resetTimer]: dart.fnType(dart.void, []),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(pool.Pool, () => ({
    __proto__: dart.getGetters(pool.Pool.__proto__),
    isClosed: core.bool,
    done: async$.Future
  }));
  dart.setFieldSignature(pool.Pool, () => ({
    __proto__: dart.getFields(pool.Pool.__proto__),
    [_requestedResources]: dart.finalFieldType(QueueOfCompleterOfPoolResource()),
    [_onReleaseCallbacks]: dart.finalFieldType(QueueOfVoidTovoid()),
    [_onReleaseCompleters]: dart.finalFieldType(QueueOfCompleterOfPoolResource()),
    [_maxAllocatedResources]: dart.finalFieldType(core.int),
    [_allocatedResources]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(src__restartable_timer.RestartableTimer),
    [_timeout]: dart.finalFieldType(core.Duration),
    [_closeGroup]: dart.fieldType(src__future_group.FutureGroup),
    [_closeMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
  }));
  const _pool = Symbol('_pool');
  const _released = Symbol('_released');
  pool.PoolResource = class PoolResource extends core.Object {
    release() {
      if (dart.test(this[_released])) {
        dart.throw(new core.StateError.new("A PoolResource may only be released once."));
      }
      this[_released] = true;
      this[_pool][_onResourceReleased]();
    }
    allowRelease(onRelease) {
      if (dart.test(this[_released])) {
        dart.throw(new core.StateError.new("A PoolResource may only be released once."));
      }
      this[_released] = true;
      this[_pool][_onResourceReleaseAllowed](onRelease);
    }
  };
  (pool.PoolResource.__ = function(pool) {
    this[_released] = false;
    this[_pool] = pool;
  }).prototype = pool.PoolResource.prototype;
  dart.addTypeTests(pool.PoolResource);
  dart.setMethodSignature(pool.PoolResource, () => ({
    __proto__: dart.getMethods(pool.PoolResource.__proto__),
    release: dart.fnType(dart.void, []),
    allowRelease: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])])
  }));
  dart.setFieldSignature(pool.PoolResource, () => ({
    __proto__: dart.getFields(pool.PoolResource.__proto__),
    [_pool]: dart.finalFieldType(pool.Pool),
    [_released]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/pool/pool.ddc", {
    "package:pool/pool.dart": pool
  }, '{"version":3,"sourceRoot":"","sources":["pool.dart"],"names":[],"mappings":"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","file":"pool.ddc.js"}');
  // Exports:
  return {
    pool: pool
  };
});

//# sourceMappingURL=pool.ddc.js.map
