define(['dart_sdk', 'packages/stream_channel/stream_channel', 'packages/async/async', 'packages/test_api/src/suite_channel_manager', 'packages/term_glyph/term_glyph', 'packages/test_api/test_api'], function(dart_sdk, stream_channel, async, suite_channel_manager, term_glyph, test_api) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_channel_controller = stream_channel.src__stream_channel_controller;
  const src__multi_channel = stream_channel.src__multi_channel;
  const src__stream_queue = async.src__stream_queue;
  const src__suite_channel_manager = suite_channel_manager.src__suite_channel_manager;
  const term_glyph$ = term_glyph.term_glyph;
  const src__backend__metadata = test_api.src__backend__metadata;
  const src__backend__declarer = test_api.src__backend__declarer;
  const src__backend__stack_trace_formatter = test_api.src__backend__stack_trace_formatter;
  const src__backend__suite_platform = test_api.src__backend__suite_platform;
  const src__backend__suite = test_api.src__backend__suite;
  const src__backend__invoker = test_api.src__backend__invoker;
  const src__util__remote_exception = test_api.src__util__remote_exception;
  const src__backend__group = test_api.src__backend__group;
  const src__backend__test = test_api.src__backend__test;
  const src__backend__group_entry = test_api.src__backend__group_entry;
  const src__backend__state = test_api.src__backend__state;
  const src__backend__message = test_api.src__backend__message;
  const src__backend__live_test = test_api.src__backend__live_test;
  const _root = Object.create(null);
  const src__remote_listener = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $map = dartx.map;
  let StreamChannelControllerOfObject = () => (StreamChannelControllerOfObject = dart.constFn(src__stream_channel_controller.StreamChannelController$(core.Object)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async$.Zone, async$.ZoneDelegate, async$.Zone, core.String])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async$.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfGroup = () => (JSArrayOfGroup = dart.constFn(_interceptors.JSArray$(src__backend__group.Group)))();
  let GroupEntryToMap = () => (GroupEntryToMap = dart.constFn(dart.fnType(core.Map, [src__backend__group_entry.GroupEntry])))();
  let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [src__backend__state.State])))();
  let AsyncErrorToNull = () => (AsyncErrorToNull = dart.constFn(dart.fnType(core.Null, [async$.AsyncError])))();
  let MessageToNull = () => (MessageToNull = dart.constFn(dart.fnType(core.Null, [src__backend__message.Message])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  const _suite = Symbol('_suite');
  const _printZone = Symbol('_printZone');
  const _listen = Symbol('_listen');
  let const$;
  const _serializeGroup = Symbol('_serializeGroup');
  const _serializeTest = Symbol('_serializeTest');
  const _runLiveTest = Symbol('_runLiveTest');
  let const$0;
  src__remote_listener.RemoteListener = class RemoteListener extends core.Object {
    static start(getMain, opts) {
      let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
      let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
      let controller = new (StreamChannelControllerOfObject()).new({allowForeignErrors: false, sync: true});
      let channel = src__multi_channel.MultiChannel.new(controller.local);
      let verboseChain = true;
      let printZone = dart.test(hidePrints) ? null : async$.Zone.current;
      let spec = async$.ZoneSpecification.new({print: dart.fn((_, __, ___, line) => {
          if (printZone != null) printZone.print(line);
          channel.sink.add(new (IdentityMapOfString$String()).from(["type", "print", "line", line]));
        }, ZoneAndZoneDelegateAndZone__ToNull())});
      async$.Stream.fromIterable([]).listen(dart.fn(_ => {
      }, dynamicToNull())).cancel();
      new src__suite_channel_manager.SuiteChannelManager.new().asCurrent(core.Null, dart.fn(() => {
        new src__backend__stack_trace_formatter.StackTraceFormatter.new().asCurrent(core.Null, dart.fn(() => {
          async$.runZoned(FutureOfNull(), dart.fn(() => async$.async(core.Null, function*() {
            let main = null;
            try {
              main = getMain();
            } catch (e) {
              if (core.NoSuchMethodError.is(e)) {
                let _ = e;
                src__remote_listener.RemoteListener._sendLoadException(channel, "No top-level main() function defined.");
                return;
              } else {
                let error = e;
                let stackTrace = dart.stackTrace(error);
                src__remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
                return;
              }
            }
            if (!core.Function.is(main)) {
              src__remote_listener.RemoteListener._sendLoadException(channel, "Top-level main getter is not a function.");
              return;
            } else if (!VoidTodynamic().is(main)) {
              src__remote_listener.RemoteListener._sendLoadException(channel, "Top-level main() function takes arguments.");
              return;
            }
            let queue = src__stream_queue.StreamQueue.new(channel.stream);
            let message = (yield queue.next);
            if (!dart.equals(dart.dindex(message, "type"), "initial")) dart.assertFailed();
            queue.rest.listen(dart.fn(message => {
              if (dart.equals(dart.dindex(message, "type"), "close")) {
                controller.local.sink.close();
                return;
              }
              if (!dart.equals(dart.dindex(message, "type"), "suiteChannel")) dart.assertFailed();
              src__suite_channel_manager.SuiteChannelManager.current.connectIn(core.String.as(dart.dindex(message, "name")), channel.virtualChannel(core.int.as(dart.dindex(message, "id"))));
            }, dynamicToNull()));
            if ((() => {
              let l = core.bool.as(dart.dindex(message, "asciiGlyphs"));
              return l != null ? l : false;
            })()) term_glyph$.ascii = true;
            let metadata = new src__backend__metadata.Metadata.deserialize(dart.dindex(message, "metadata"));
            verboseChain = metadata.verboseTrace;
            let declarer = new src__backend__declarer.Declarer.new({metadata: metadata, platformVariables: SetOfString().from(core.Iterable.as(dart.dindex(message, "platformVariables"))), collectTraces: core.bool.as(dart.dindex(message, "collectTraces")), noRetry: core.bool.as(dart.dindex(message, "noRetry"))});
            src__backend__stack_trace_formatter.StackTraceFormatter.current.configure({except: src__remote_listener.RemoteListener._deserializeSet(core.List.as(dart.dindex(message, "foldTraceExcept"))), only: src__remote_listener.RemoteListener._deserializeSet(core.List.as(dart.dindex(message, "foldTraceOnly")))});
            if (beforeLoad != null) yield beforeLoad();
            yield declarer.declare(VoidTodynamic().as(main));
            let suite = new src__backend__suite.Suite.new(declarer.build(), src__backend__suite_platform.SuitePlatform.deserialize(dart.dindex(message, "platform")), {path: core.String.as(dart.dindex(message, "path"))});
            async$.runZoned(core.Null, dart.fn(() => {
              src__backend__invoker.Invoker.guard(dart.void, dart.fn(() => new src__remote_listener.RemoteListener.__(suite, printZone)[_listen](channel), VoidTovoid()));
            }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([const$ || (const$ = dart.const(core.Symbol.new('test.declarer'))), declarer])});
          }), VoidToFutureOfNull()), {onError: dart.fn((error, stackTrace) => {
              src__remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
            }, dynamicAndStackTraceToNull()), zoneSpecification: spec});
        }, VoidToNull()));
      }, VoidToNull()));
      return controller.foreign;
    }
    static _deserializeSet(list) {
      if (list == null) return null;
      if (dart.test(list[$isEmpty])) return null;
      return SetOfString().from(list);
    }
    static _sendLoadException(channel, message) {
      channel.sink.add(new (IdentityMapOfString$String()).from(["type", "loadException", "message", message]));
    }
    static _sendError(channel, error, stackTrace, verboseChain) {
      channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", src__util__remote_exception.RemoteException.serialize(error, src__backend__stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(stackTrace, {verbose: verboseChain}))]));
    }
    [_listen](channel) {
      channel.sink.add(new (IdentityMapOfString$Object()).from(["type", "success", "root", this[_serializeGroup](channel, this[_suite].group, JSArrayOfGroup().of([]))]));
    }
    [_serializeGroup](channel, group, parents) {
      parents = parents[$toList]();
      parents[$add](group);
      return new _js_helper.LinkedMap.from(["type", "group", "name", group.name, "metadata", group.metadata.serialize(), "trace", group.trace == null ? null : dart.toString(group.trace), "setUpAll", this[_serializeTest](channel, group.setUpAll, parents), "tearDownAll", this[_serializeTest](channel, group.tearDownAll, parents), "entries", group.entries[$map](core.Map, dart.fn(entry => src__backend__group.Group.is(entry) ? this[_serializeGroup](channel, entry, parents) : this[_serializeTest](channel, src__backend__test.Test.as(entry), parents), GroupEntryToMap()))[$toList]()]);
    }
    [_serializeTest](channel, test, groups) {
      if (test == null) return null;
      let testChannel = channel.virtualChannel();
      testChannel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dindex(message, "command"), "run")) dart.assertFailed();
        this[_runLiveTest](test.load(this[_suite], {groups: groups}), channel.virtualChannel(core.int.as(dart.dindex(message, "channel"))));
      }, dynamicToNull()));
      return new _js_helper.LinkedMap.from(["type", "test", "name", test.name, "metadata", test.metadata.serialize(), "trace", (() => {
          let t = test.trace;
          return t == null ? null : dart.toString(t);
        })(), "channel", testChannel.id]);
    }
    [_runLiveTest](liveTest, channel) {
      channel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dindex(message, "command"), "close")) dart.assertFailed();
        liveTest.close();
      }, dynamicToNull()));
      liveTest.onStateChange.listen(dart.fn(state => {
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "state-change", "status", state.status.name, "result", state.result.name]));
      }, StateToNull()));
      liveTest.onError.listen(dart.fn(asyncError => {
        channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", src__util__remote_exception.RemoteException.serialize(asyncError.error, src__backend__stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(asyncError.stackTrace, {verbose: liveTest.test.metadata.verboseTrace}))]));
      }, AsyncErrorToNull()));
      liveTest.onMessage.listen(dart.fn(message => {
        if (this[_printZone] != null) this[_printZone].print(message.text);
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "message", "message-type", message.type.name, "text", message.text]));
      }, MessageToNull()));
      async$.runZoned(core.Null, dart.fn(() => {
        liveTest.run().then(dart.void, dart.fn(_ => channel.sink.add(new (IdentityMapOfString$String()).from(["type", "complete"])), dynamicTovoid()));
      }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([const$0 || (const$0 = dart.const(core.Symbol.new('test.runner.test_channel'))), channel])});
    }
  };
  (src__remote_listener.RemoteListener.__ = function(suite, printZone) {
    this[_suite] = suite;
    this[_printZone] = printZone;
  }).prototype = src__remote_listener.RemoteListener.prototype;
  dart.addTypeTests(src__remote_listener.RemoteListener);
  dart.setMethodSignature(src__remote_listener.RemoteListener, () => ({
    __proto__: dart.getMethods(src__remote_listener.RemoteListener.__proto__),
    [_listen]: dart.fnType(dart.void, [src__multi_channel.MultiChannel]),
    [_serializeGroup]: dart.fnType(core.Map, [src__multi_channel.MultiChannel, src__backend__group.Group, core.Iterable$(src__backend__group.Group)]),
    [_serializeTest]: dart.fnType(core.Map, [src__multi_channel.MultiChannel, src__backend__test.Test, core.Iterable$(src__backend__group.Group)]),
    [_runLiveTest]: dart.fnType(dart.void, [src__backend__live_test.LiveTest, src__multi_channel.MultiChannel])
  }));
  dart.setFieldSignature(src__remote_listener.RemoteListener, () => ({
    __proto__: dart.getFields(src__remote_listener.RemoteListener.__proto__),
    [_suite]: dart.finalFieldType(src__backend__suite.Suite),
    [_printZone]: dart.finalFieldType(async$.Zone)
  }));
  dart.trackLibraries("packages/test_api/src/remote_listener.ddc", {
    "package:test_api/src/remote_listener.dart": src__remote_listener
  }, '{"version":3,"sourceRoot":"","sources":["remote_listener.dart"],"names":[],"mappings":"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","file":"remote_listener.ddc.js"}');
  // Exports:
  return {
    src__remote_listener: src__remote_listener
  };
});

//# sourceMappingURL=remote_listener.ddc.js.map
