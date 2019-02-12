define(['dart_sdk', 'packages/async/async'], function(dart_sdk, async) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const isolate = dart_sdk.isolate;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_completer = async.src__stream_completer;
  const src__stream_sink_completer = async.src__stream_sink_completer;
  const src__null_stream_sink = async.src__null_stream_sink;
  const src__stream_sink_transformer = async.src__stream_sink_transformer;
  const src__delegate__stream = async.src__delegate__stream;
  const src__delegate__stream_sink = async.src__delegate__stream_sink;
  const src__subscription_stream = async.src__subscription_stream;
  const src__async_memoizer = async.src__async_memoizer;
  const src__single_subscription_transformer = async.src__single_subscription_transformer;
  const _root = Object.create(null);
  const src__stream_channel_controller = Object.create(_root);
  const src__stream_channel_completer = Object.create(_root);
  const src__multi_channel = Object.create(_root);
  const src__json_document_transformer = Object.create(_root);
  const src__isolate_channel = Object.create(_root);
  const src__disconnector = Object.create(_root);
  const src__delegating_stream_channel = Object.create(_root);
  const src__transformer__typed = Object.create(_root);
  const src__stream_channel_transformer = Object.create(_root);
  const src__guarantee_channel = Object.create(_root);
  const stream_channel = Object.create(_root);
  const src__close_guarantee_channel = Object.create(_root);
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $add = dartx.add;
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let SetOfint = () => (SetOfint = dart.constFn(core.Set$(core.int)))();
  let StreamChannelOfString = () => (StreamChannelOfString = dart.constFn(stream_channel.StreamChannel$(core.String)))();
  let EventSinkOfString = () => (EventSinkOfString = dart.constFn(async$.EventSink$(core.String)))();
  let ObjectAndEventSinkOfStringToNull = () => (ObjectAndEventSinkOfStringToNull = dart.constFn(dart.fnType(core.Null, [core.Object, EventSinkOfString()])))();
  let StreamSinkTransformerOfObject$String = () => (StreamSinkTransformerOfObject$String = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(core.Object, core.String)))();
  let StreamChannelOfObject = () => (StreamChannelOfObject = dart.constFn(stream_channel.StreamChannel$(core.Object)))();
  let StreamChannelTransformerOfObject$String = () => (StreamChannelTransformerOfObject$String = dart.constFn(src__stream_channel_transformer.StreamChannelTransformer$(core.Object, core.String)))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async$.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _local = Symbol('_local');
  const _foreign = Symbol('_foreign');
  const _is_StreamChannelController_default = Symbol('_is_StreamChannelController_default');
  src__stream_channel_controller.StreamChannelController$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async$.StreamController$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelController extends core.Object {
      get local() {
        return this[_local];
      }
      get foreign() {
        return this[_foreign];
      }
    }
    (StreamChannelController.new = function(opts) {
      let allowForeignErrors = opts && 'allowForeignErrors' in opts ? opts.allowForeignErrors : true;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      this[_local] = null;
      this[_foreign] = null;
      let localToForeignController = StreamControllerOfT().new({sync: sync});
      let foreignToLocalController = StreamControllerOfT().new({sync: sync});
      this[_local] = StreamChannelOfT().withGuarantees(foreignToLocalController.stream, localToForeignController.sink);
      this[_foreign] = StreamChannelOfT().withGuarantees(localToForeignController.stream, foreignToLocalController.sink, {allowSinkErrors: allowForeignErrors});
    }).prototype = StreamChannelController.prototype;
    dart.addTypeTests(StreamChannelController);
    StreamChannelController.prototype[_is_StreamChannelController_default] = true;
    dart.setGetterSignature(StreamChannelController, () => ({
      __proto__: dart.getGetters(StreamChannelController.__proto__),
      local: stream_channel.StreamChannel$(T),
      foreign: stream_channel.StreamChannel$(T)
    }));
    dart.setFieldSignature(StreamChannelController, () => ({
      __proto__: dart.getFields(StreamChannelController.__proto__),
      [_local]: dart.fieldType(StreamChannelOfT()),
      [_foreign]: dart.fieldType(StreamChannelOfT())
    }));
    return StreamChannelController;
  });
  src__stream_channel_controller.StreamChannelController = src__stream_channel_controller.StreamChannelController$();
  dart.addTypeTests(src__stream_channel_controller.StreamChannelController, _is_StreamChannelController_default);
  const _streamCompleter = Symbol('_streamCompleter');
  const _sinkCompleter = Symbol('_sinkCompleter');
  const _channel = Symbol('_channel');
  const _set = Symbol('_set');
  const _is_StreamChannelCompleter_default = Symbol('_is_StreamChannelCompleter_default');
  src__stream_channel_completer.StreamChannelCompleter$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let StreamSinkCompleterOfT = () => (StreamSinkCompleterOfT = dart.constFn(src__stream_sink_completer.StreamSinkCompleter$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class StreamChannelCompleter extends core.Object {
      get channel() {
        return this[_channel];
      }
      static fromFuture(channelFuture) {
        let completer = new src__stream_channel_completer.StreamChannelCompleter.new();
        channelFuture.then(dart.void, dart.bind(completer, 'setChannel'), {onError: dart.bind(completer, 'setError')});
        return completer.channel;
      }
      setChannel(channel) {
        StreamChannelOfT()._check(channel);
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setSourceStream(channel.stream);
        this[_sinkCompleter].setDestinationSink(channel.sink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setError(error, stackTrace);
        this[_sinkCompleter].setDestinationSink(new (NullStreamSinkOfT()).new());
      }
    }
    (StreamChannelCompleter.new = function() {
      this[_streamCompleter] = new (StreamCompleterOfT()).new();
      this[_sinkCompleter] = new (StreamSinkCompleterOfT()).new();
      this[_channel] = null;
      this[_set] = false;
      this[_channel] = StreamChannelOfT().new(this[_streamCompleter].stream, this[_sinkCompleter].sink);
    }).prototype = StreamChannelCompleter.prototype;
    dart.addTypeTests(StreamChannelCompleter);
    StreamChannelCompleter.prototype[_is_StreamChannelCompleter_default] = true;
    dart.setMethodSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getMethods(StreamChannelCompleter.__proto__),
      setChannel: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getGetters(StreamChannelCompleter.__proto__),
      channel: stream_channel.StreamChannel$(T)
    }));
    dart.setFieldSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getFields(StreamChannelCompleter.__proto__),
      [_streamCompleter]: dart.finalFieldType(StreamCompleterOfT()),
      [_sinkCompleter]: dart.finalFieldType(StreamSinkCompleterOfT()),
      [_channel]: dart.fieldType(StreamChannelOfT()),
      [_set]: dart.fieldType(core.bool)
    }));
    return StreamChannelCompleter;
  });
  src__stream_channel_completer.StreamChannelCompleter = src__stream_channel_completer.StreamChannelCompleter$();
  dart.addTypeTests(src__stream_channel_completer.StreamChannelCompleter, _is_StreamChannelCompleter_default);
  const _is_MultiChannel_default = Symbol('_is_MultiChannel_default');
  src__multi_channel.MultiChannel$ = dart.generic(T => {
    let _MultiChannelOfT = () => (_MultiChannelOfT = dart.constFn(src__multi_channel._MultiChannel$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class MultiChannel extends core.Object {
      static new(inner) {
        return new (_MultiChannelOfT()).new(inner);
      }
    }
    (MultiChannel[dart.mixinNew] = function() {
    }).prototype = MultiChannel.prototype;
    dart.addTypeTests(MultiChannel);
    MultiChannel.prototype[_is_MultiChannel_default] = true;
    MultiChannel[dart.implements] = () => [StreamChannelOfT()];
    return MultiChannel;
  });
  src__multi_channel.MultiChannel = src__multi_channel.MultiChannel$();
  dart.addTypeTests(src__multi_channel.MultiChannel, _is_MultiChannel_default);
  const _inner = Symbol('_inner');
  const _innerStreamSubscription = Symbol('_innerStreamSubscription');
  const _mainController = Symbol('_mainController');
  const _controllers = Symbol('_controllers');
  const _pendingIds = Symbol('_pendingIds');
  const _closedIds = Symbol('_closedIds');
  const _nextId = Symbol('_nextId');
  const _closeChannel = Symbol('_closeChannel');
  const _closeInnerChannel = Symbol('_closeInnerChannel');
  const _is_StreamChannelMixin_default = Symbol('_is_StreamChannelMixin_default');
  stream_channel.StreamChannelMixin$ = dart.generic(T => {
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async$.StreamTransformer$(T, T)))();
    let StreamSinkTransformerOfT$T = () => (StreamSinkTransformerOfT$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(T, T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    let StreamSinkOfTToStreamSinkOfT = () => (StreamSinkOfTToStreamSinkOfT = dart.constFn(dart.fnType(StreamSinkOfT(), [StreamSinkOfT()])))();
    class StreamChannelMixin extends core.Object {
      pipe(other) {
        StreamChannelOfT()._check(other);
        this.stream.pipe(other.sink);
        other.stream.pipe(this.sink);
      }
      transform(S, transformer) {
        src__stream_channel_transformer.StreamChannelTransformer$(S, T)._check(transformer);
        return transformer.bind(this);
      }
      transformStream(transformer) {
        StreamTransformerOfT$T()._check(transformer);
        return this.changeStream(dart.bind(transformer, 'bind'));
      }
      transformSink(transformer) {
        StreamSinkTransformerOfT$T()._check(transformer);
        return this.changeSink(dart.bind(transformer, 'bind'));
      }
      changeStream(change) {
        StreamOfTToStreamOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(change(this.stream), this.sink);
      }
      changeSink(change) {
        StreamSinkOfTToStreamSinkOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(this.stream, change(this.sink));
      }
      cast(S) {
        return stream_channel.StreamChannel$(S).new(src__delegate__stream.DelegatingStream.typed(S, this.stream), src__delegate__stream_sink.DelegatingStreamSink.typed(S, this.sink));
      }
    }
    (StreamChannelMixin.new = function() {
    }).prototype = StreamChannelMixin.prototype;
    dart.addTypeTests(StreamChannelMixin);
    StreamChannelMixin.prototype[_is_StreamChannelMixin_default] = true;
    StreamChannelMixin[dart.implements] = () => [StreamChannelOfT()];
    dart.setMethodSignature(StreamChannelMixin, () => ({
      __proto__: dart.getMethods(StreamChannelMixin.__proto__),
      pipe: dart.fnType(dart.void, [core.Object]),
      transform: dart.gFnType(S => [stream_channel.StreamChannel$(S), [core.Object]]),
      transformStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      transformSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      cast: dart.gFnType(S => [stream_channel.StreamChannel$(S), []])
    }));
    return StreamChannelMixin;
  });
  stream_channel.StreamChannelMixin = stream_channel.StreamChannelMixin$();
  dart.addTypeTests(stream_channel.StreamChannelMixin, _is_StreamChannelMixin_default);
  const _is__MultiChannel_default = Symbol('_is__MultiChannel_default');
  src__multi_channel._MultiChannel$ = dart.generic(T => {
    let StreamChannelControllerOfT = () => (StreamChannelControllerOfT = dart.constFn(src__stream_channel_controller.StreamChannelController$(T)))();
    let IdentityMapOfint$StreamChannelControllerOfT = () => (IdentityMapOfint$StreamChannelControllerOfT = dart.constFn(_js_helper.IdentityMap$(core.int, StreamChannelControllerOfT())))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let VoidToStreamChannelControllerOfT = () => (VoidToStreamChannelControllerOfT = dart.constFn(dart.fnType(StreamChannelControllerOfT(), [])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    let VirtualChannelOfT = () => (VirtualChannelOfT = dart.constFn(src__multi_channel.VirtualChannel$(T)))();
    let MultiChannelOfT = () => (MultiChannelOfT = dart.constFn(src__multi_channel.MultiChannel$(T)))();
    let MapOfint$StreamChannelControllerOfT = () => (MapOfint$StreamChannelControllerOfT = dart.constFn(core.Map$(core.int, StreamChannelControllerOfT())))();
    class _MultiChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_mainController].foreign.stream;
      }
      get sink() {
        return this[_mainController].foreign.sink;
      }
      virtualChannel(id) {
        if (id === void 0) id = null;
        let inputId = null;
        let outputId = null;
        if (id != null) {
          inputId = id;
          outputId = dart.notNull(id) + 1;
        } else {
          inputId = dart.notNull(this[_nextId]) + 1;
          outputId = this[_nextId];
          this[_nextId] = dart.notNull(this[_nextId]) + 2;
        }
        if (this[_inner] == null) {
          return new (VirtualChannelOfT()).__(this, inputId, StreamOfT().empty(), new (NullStreamSinkOfT()).new());
        }
        let controller = null;
        if (dart.test(this[_pendingIds].remove(inputId))) {
          controller = this[_controllers][$_get](inputId);
        } else if (dart.test(this[_controllers][$containsKey](inputId)) || dart.test(this[_closedIds].contains(inputId))) {
          dart.throw(new core.ArgumentError.new("A virtual channel with id " + dart.str(id) + " already exists."));
        } else {
          controller = new (StreamChannelControllerOfT()).new({sync: true});
          this[_controllers][$_set](inputId, controller);
        }
        controller.local.stream.listen(dart.fn(message => this[_inner].sink.add(JSArrayOfObject().of([outputId, message])), TTovoid()), {onDone: dart.fn(() => this[_closeChannel](inputId, outputId), VoidTovoid())});
        return new (VirtualChannelOfT()).__(this, outputId, controller.foreign.stream, controller.foreign.sink);
      }
      [_closeChannel](inputId, outputId) {
        this[_closedIds].add(inputId);
        let controller = this[_controllers][$remove](inputId);
        controller.local.sink.close();
        if (this[_inner] == null) return;
        this[_inner].sink.add(JSArrayOfint().of([outputId]));
        if (dart.test(this[_controllers][$isEmpty])) this[_closeInnerChannel]();
      }
      [_closeInnerChannel]() {
        this[_inner].sink.close();
        this[_innerStreamSubscription].cancel();
        this[_inner] = null;
        for (let controller of core.List.from(this[_controllers][$values])) {
          dart.dsend(dart.dload(dart.dload(controller, 'local'), 'sink'), 'close', []);
        }
        this[_controllers][$clear]();
      }
    }
    (_MultiChannel.new = function(inner) {
      this[_innerStreamSubscription] = null;
      this[_mainController] = new (StreamChannelControllerOfT()).new({sync: true});
      this[_controllers] = new (IdentityMapOfint$StreamChannelControllerOfT()).new();
      this[_pendingIds] = new (_IdentityHashSetOfint()).new();
      this[_closedIds] = new (_IdentityHashSetOfint()).new();
      this[_nextId] = 1;
      this[_inner] = inner;
      this[_controllers][$_set](0, this[_mainController]);
      this[_mainController].local.stream.listen(dart.fn(message => this[_inner].sink.add(JSArrayOfObject().of([0, message])), TTovoid()), {onDone: dart.fn(() => this[_closeChannel](0, 0), VoidTovoid())});
      this[_innerStreamSubscription] = this[_inner].stream.listen(dart.fn(message => {
        let id = dart.dindex(message, 0);
        if (dart.test(this[_closedIds].contains(id))) return;
        let controller = this[_controllers][$putIfAbsent](core.int._check(id), dart.fn(() => {
          this[_pendingIds].add(core.int._check(id));
          return new (StreamChannelControllerOfT()).new({sync: true});
        }, VoidToStreamChannelControllerOfT()));
        if (dart.dtest(dart.dsend(dart.dload(message, 'length'), '>', [1]))) {
          controller.local.sink.add(T._check(dart.dindex(message, 1)));
        } else {
          controller.local.sink.close();
        }
      }, dynamicToNull()), {onDone: dart.bind(this, _closeInnerChannel), onError: dart.bind(this[_mainController].local.sink, 'addError')});
    }).prototype = _MultiChannel.prototype;
    dart.addTypeTests(_MultiChannel);
    _MultiChannel.prototype[_is__MultiChannel_default] = true;
    _MultiChannel[dart.implements] = () => [MultiChannelOfT()];
    dart.setMethodSignature(_MultiChannel, () => ({
      __proto__: dart.getMethods(_MultiChannel.__proto__),
      virtualChannel: dart.fnType(src__multi_channel.VirtualChannel$(T), [], [core.int]),
      [_closeChannel]: dart.fnType(dart.void, [core.int, core.int]),
      [_closeInnerChannel]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_MultiChannel, () => ({
      __proto__: dart.getGetters(_MultiChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setFieldSignature(_MultiChannel, () => ({
      __proto__: dart.getFields(_MultiChannel.__proto__),
      [_inner]: dart.fieldType(stream_channel.StreamChannel),
      [_innerStreamSubscription]: dart.fieldType(async$.StreamSubscription),
      [_mainController]: dart.finalFieldType(StreamChannelControllerOfT()),
      [_controllers]: dart.finalFieldType(MapOfint$StreamChannelControllerOfT()),
      [_pendingIds]: dart.finalFieldType(SetOfint()),
      [_closedIds]: dart.finalFieldType(SetOfint()),
      [_nextId]: dart.fieldType(core.int)
    }));
    return _MultiChannel;
  });
  src__multi_channel._MultiChannel = src__multi_channel._MultiChannel$();
  dart.addTypeTests(src__multi_channel._MultiChannel, _is__MultiChannel_default);
  const _parent = Symbol('_parent');
  const _is_VirtualChannel_default = Symbol('_is_VirtualChannel_default');
  src__multi_channel.VirtualChannel$ = dart.generic(T => {
    let MultiChannelOfT = () => (MultiChannelOfT = dart.constFn(src__multi_channel.MultiChannel$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    class VirtualChannel extends stream_channel.StreamChannelMixin$(T) {
      get id() {
        return this[id$];
      }
      set id(value) {
        super.id = value;
      }
      get stream() {
        return this[stream$];
      }
      set stream(value) {
        super.stream = value;
      }
      get sink() {
        return this[sink$];
      }
      set sink(value) {
        super.sink = value;
      }
      virtualChannel(id) {
        if (id === void 0) id = null;
        return this[_parent].virtualChannel(id);
      }
    }
    (VirtualChannel.__ = function(parent, id, stream, sink) {
      this[_parent] = parent;
      this[id$] = id;
      this[stream$] = stream;
      this[sink$] = sink;
    }).prototype = VirtualChannel.prototype;
    dart.addTypeTests(VirtualChannel);
    VirtualChannel.prototype[_is_VirtualChannel_default] = true;
    const id$ = Symbol("VirtualChannel.id");
    const stream$ = Symbol("VirtualChannel.stream");
    const sink$ = Symbol("VirtualChannel.sink");
    VirtualChannel[dart.implements] = () => [MultiChannelOfT()];
    dart.setMethodSignature(VirtualChannel, () => ({
      __proto__: dart.getMethods(VirtualChannel.__proto__),
      virtualChannel: dart.fnType(src__multi_channel.VirtualChannel$(T), [], [core.int])
    }));
    dart.setFieldSignature(VirtualChannel, () => ({
      __proto__: dart.getFields(VirtualChannel.__proto__),
      [_parent]: dart.finalFieldType(MultiChannelOfT()),
      id: dart.finalFieldType(core.int),
      stream: dart.finalFieldType(StreamOfT()),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return VirtualChannel;
  });
  src__multi_channel.VirtualChannel = src__multi_channel.VirtualChannel$();
  dart.addTypeTests(src__multi_channel.VirtualChannel, _is_VirtualChannel_default);
  dart.defineLazy(src__json_document_transformer, {
    /*src__json_document_transformer.jsonDocument*/get jsonDocument() {
      return new src__json_document_transformer.JsonDocumentTransformer.new();
    }
  });
  const _codec = Symbol('_codec');
  src__json_document_transformer.JsonDocumentTransformer = class JsonDocumentTransformer extends core.Object {
    bind(channel) {
      StreamChannelOfString()._check(channel);
      let stream = channel.stream.map(dart.dynamic, dart.bind(this[_codec], 'decode'));
      let sink = StreamSinkTransformerOfObject$String().fromHandlers({handleData: dart.fn((data, sink) => {
          sink.add(this[_codec].encode(data));
        }, ObjectAndEventSinkOfStringToNull())}).bind(channel.sink);
      return StreamChannelOfObject().withCloseGuarantee(stream, sink);
    }
  };
  (src__json_document_transformer.JsonDocumentTransformer.new = function(opts) {
    let reviver = opts && 'reviver' in opts ? opts.reviver : null;
    let toEncodable = opts && 'toEncodable' in opts ? opts.toEncodable : null;
    this[_codec] = new convert.JsonCodec.new({reviver: reviver, toEncodable: toEncodable});
  }).prototype = src__json_document_transformer.JsonDocumentTransformer.prototype;
  (src__json_document_transformer.JsonDocumentTransformer.__ = function(codec) {
    this[_codec] = codec;
  }).prototype = src__json_document_transformer.JsonDocumentTransformer.prototype;
  dart.addTypeTests(src__json_document_transformer.JsonDocumentTransformer);
  src__json_document_transformer.JsonDocumentTransformer[dart.implements] = () => [StreamChannelTransformerOfObject$String()];
  dart.setMethodSignature(src__json_document_transformer.JsonDocumentTransformer, () => ({
    __proto__: dart.getMethods(src__json_document_transformer.JsonDocumentTransformer.__proto__),
    bind: dart.fnType(stream_channel.StreamChannel$(core.Object), [core.Object])
  }));
  dart.setFieldSignature(src__json_document_transformer.JsonDocumentTransformer, () => ({
    __proto__: dart.getFields(src__json_document_transformer.JsonDocumentTransformer.__proto__),
    [_codec]: dart.finalFieldType(convert.JsonCodec)
  }));
  const _is_IsolateChannel_default = Symbol('_is_IsolateChannel_default');
  src__isolate_channel.IsolateChannel$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let StreamSinkCompleterOfT = () => (StreamSinkCompleterOfT = dart.constFn(src__stream_sink_completer.StreamSinkCompleter$(T)))();
    let IsolateChannelOfT = () => (IsolateChannelOfT = dart.constFn(src__isolate_channel.IsolateChannel$(T)))();
    let StreamChannelControllerOfT = () => (StreamChannelControllerOfT = dart.constFn(src__stream_channel_controller.StreamChannelController$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    class IsolateChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[stream$];
      }
      set stream(value) {
        super.stream = value;
      }
      get sink() {
        return this[sink$];
      }
      set sink(value) {
        super.sink = value;
      }
      static connectReceive(receivePort) {
        let streamCompleter = new (StreamCompleterOfT()).new();
        let sinkCompleter = new (StreamSinkCompleterOfT()).new();
        let channel = new (IsolateChannelOfT()).__(streamCompleter.stream, sinkCompleter.sink);
        let subscription = null;
        subscription = receivePort.listen(dart.fn(message => {
          if (isolate.SendPort.is(message)) {
            let controller = new (StreamChannelControllerOfT()).new({allowForeignErrors: false, sync: true});
            new src__subscription_stream.SubscriptionStream.new(subscription).cast(T).pipe(controller.local.sink);
            controller.local.stream.listen(dart.fn(data => message.send(data), TTovoid()), {onDone: dart.bind(receivePort, 'close')});
            streamCompleter.setSourceStream(controller.foreign.stream);
            sinkCompleter.setDestinationSink(controller.foreign.sink);
            return;
          }
          streamCompleter.setError(new core.StateError.new("Unexpected Isolate response \"" + dart.str(message) + "\"."), core.StackTrace.current);
          sinkCompleter.setDestinationSink(new (NullStreamSinkOfT()).new());
          subscription.cancel();
        }, dynamicToNull()));
        return channel;
      }
      static connectSend(sendPort) {
        let receivePort = isolate.ReceivePort.new();
        sendPort.send(receivePort.sendPort);
        return IsolateChannelOfT().new(receivePort, sendPort);
      }
      static new(receivePort, sendPort) {
        let controller = new (StreamChannelControllerOfT()).new({allowForeignErrors: false, sync: true});
        receivePort.cast(T).pipe(controller.local.sink);
        controller.local.stream.listen(dart.fn(data => sendPort.send(data), TTovoid()), {onDone: dart.bind(receivePort, 'close')});
        return new (IsolateChannelOfT()).__(controller.foreign.stream, controller.foreign.sink);
      }
    }
    (IsolateChannel.__ = function(stream, sink) {
      this[stream$] = stream;
      this[sink$] = sink;
    }).prototype = IsolateChannel.prototype;
    dart.addTypeTests(IsolateChannel);
    IsolateChannel.prototype[_is_IsolateChannel_default] = true;
    const stream$ = Symbol("IsolateChannel.stream");
    const sink$ = Symbol("IsolateChannel.sink");
    dart.setFieldSignature(IsolateChannel, () => ({
      __proto__: dart.getFields(IsolateChannel.__proto__),
      stream: dart.finalFieldType(StreamOfT()),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return IsolateChannel;
  });
  src__isolate_channel.IsolateChannel = src__isolate_channel.IsolateChannel$();
  dart.addTypeTests(src__isolate_channel.IsolateChannel, _is_IsolateChannel_default);
  const _sinks = Symbol('_sinks');
  const _disconnectMemo = Symbol('_disconnectMemo');
  const _disconnect = Symbol('_disconnect');
  const _is_Disconnector_default = Symbol('_is_Disconnector_default');
  src__disconnector.Disconnector$ = dart.generic(T => {
    let _DisconnectorSinkOfT = () => (_DisconnectorSinkOfT = dart.constFn(src__disconnector._DisconnectorSink$(T)))();
    let JSArrayOf_DisconnectorSinkOfT = () => (JSArrayOf_DisconnectorSinkOfT = dart.constFn(_interceptors.JSArray$(_DisconnectorSinkOfT())))();
    let _DisconnectorSinkOfTToFuture = () => (_DisconnectorSinkOfTToFuture = dart.constFn(dart.fnType(async$.Future, [_DisconnectorSinkOfT()])))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    let StreamSinkOfTTo_DisconnectorSinkOfT = () => (StreamSinkOfTTo_DisconnectorSinkOfT = dart.constFn(dart.fnType(_DisconnectorSinkOfT(), [StreamSinkOfT()])))();
    let StreamChannelTransformerOfT$T = () => (StreamChannelTransformerOfT$T = dart.constFn(src__stream_channel_transformer.StreamChannelTransformer$(T, T)))();
    let ListOf_DisconnectorSinkOfT = () => (ListOf_DisconnectorSinkOfT = dart.constFn(core.List$(_DisconnectorSinkOfT())))();
    class Disconnector extends core.Object {
      get isDisconnected() {
        return this[_disconnectMemo].hasRun;
      }
      disconnect() {
        return this[_disconnectMemo].runOnce(dart.fn(() => {
          let futures = this[_sinks][$map](async$.Future, dart.fn(sink => sink[_disconnect](), _DisconnectorSinkOfTToFuture()))[$toList]();
          this[_sinks][$clear]();
          return async$.Future.wait(dart.dynamic, futures, {eagerError: true});
        }, VoidToFutureOfList()));
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return channel.changeSink(dart.fn(innerSink => {
          let sink = new (_DisconnectorSinkOfT()).new(innerSink);
          if (dart.test(this.isDisconnected)) {
            sink[_disconnect]().catchError(dart.fn(_ => {
            }, dynamicToNull()));
          } else {
            this[_sinks][$add](sink);
          }
          return sink;
        }, StreamSinkOfTTo_DisconnectorSinkOfT()));
      }
    }
    (Disconnector.new = function() {
      this[_sinks] = JSArrayOf_DisconnectorSinkOfT().of([]);
      this[_disconnectMemo] = new src__async_memoizer.AsyncMemoizer.new();
    }).prototype = Disconnector.prototype;
    dart.addTypeTests(Disconnector);
    Disconnector.prototype[_is_Disconnector_default] = true;
    Disconnector[dart.implements] = () => [StreamChannelTransformerOfT$T()];
    dart.setMethodSignature(Disconnector, () => ({
      __proto__: dart.getMethods(Disconnector.__proto__),
      disconnect: dart.fnType(async$.Future, []),
      bind: dart.fnType(stream_channel.StreamChannel$(T), [core.Object])
    }));
    dart.setGetterSignature(Disconnector, () => ({
      __proto__: dart.getGetters(Disconnector.__proto__),
      isDisconnected: core.bool
    }));
    dart.setFieldSignature(Disconnector, () => ({
      __proto__: dart.getFields(Disconnector.__proto__),
      [_sinks]: dart.finalFieldType(ListOf_DisconnectorSinkOfT()),
      [_disconnectMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return Disconnector;
  });
  src__disconnector.Disconnector = src__disconnector.Disconnector$();
  dart.addTypeTests(src__disconnector.Disconnector, _is_Disconnector_default);
  const _inner$ = Symbol('_inner');
  const _isDisconnected = Symbol('_isDisconnected');
  const _closed = Symbol('_closed');
  const _addStreamSubscription = Symbol('_addStreamSubscription');
  const _addStreamCompleter = Symbol('_addStreamCompleter');
  const _inAddStream = Symbol('_inAddStream');
  const _is__DisconnectorSink_default = Symbol('_is__DisconnectorSink_default');
  src__disconnector._DisconnectorSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async$.StreamSubscription$(T)))();
    class _DisconnectorSink extends core.Object {
      get done() {
        return this[_inner$].done;
      }
      get [_inAddStream]() {
        return this[_addStreamSubscription] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return async$.Future.value();
        this[_addStreamCompleter] = async$.Completer.sync();
        this[_addStreamSubscription] = stream.listen(dart.bind(this[_inner$], 'add'), {onError: dart.bind(this[_inner$], 'addError'), onDone: dart.bind(this[_addStreamCompleter], 'complete')});
        return this[_addStreamCompleter].future.then(dart.dynamic, dart.fn(_ => {
          this[_addStreamCompleter] = null;
          this[_addStreamSubscription] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        this[_closed] = true;
        return this[_inner$].close();
      }
      [_disconnect]() {
        this[_isDisconnected] = true;
        let future = this[_inner$].close();
        if (dart.test(this[_inAddStream])) {
          this[_addStreamCompleter].complete(this[_addStreamSubscription].cancel());
          this[_addStreamCompleter] = null;
          this[_addStreamSubscription] = null;
        }
        return future;
      }
    }
    (_DisconnectorSink.new = function(inner) {
      this[_isDisconnected] = false;
      this[_closed] = false;
      this[_addStreamSubscription] = null;
      this[_addStreamCompleter] = null;
      this[_inner$] = inner;
    }).prototype = _DisconnectorSink.prototype;
    dart.addTypeTests(_DisconnectorSink);
    _DisconnectorSink.prototype[_is__DisconnectorSink_default] = true;
    _DisconnectorSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_DisconnectorSink, () => ({
      __proto__: dart.getMethods(_DisconnectorSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async$.Future, [core.Object]),
      close: dart.fnType(async$.Future, []),
      [_disconnect]: dart.fnType(async$.Future, [])
    }));
    dart.setGetterSignature(_DisconnectorSink, () => ({
      __proto__: dart.getGetters(_DisconnectorSink.__proto__),
      done: async$.Future,
      [_inAddStream]: core.bool
    }));
    dart.setFieldSignature(_DisconnectorSink, () => ({
      __proto__: dart.getFields(_DisconnectorSink.__proto__),
      [_inner$]: dart.finalFieldType(StreamSinkOfT()),
      [_isDisconnected]: dart.fieldType(core.bool),
      [_closed]: dart.fieldType(core.bool),
      [_addStreamSubscription]: dart.fieldType(StreamSubscriptionOfT()),
      [_addStreamCompleter]: dart.fieldType(async$.Completer)
    }));
    return _DisconnectorSink;
  });
  src__disconnector._DisconnectorSink = src__disconnector._DisconnectorSink$();
  dart.addTypeTests(src__disconnector._DisconnectorSink, _is__DisconnectorSink_default);
  const _inner$0 = Symbol('_inner');
  const _is_DelegatingStreamChannel_default = Symbol('_is_DelegatingStreamChannel_default');
  src__delegating_stream_channel.DelegatingStreamChannel$ = dart.generic(T => {
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class DelegatingStreamChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_inner$0].stream;
      }
      get sink() {
        return this[_inner$0].sink;
      }
    }
    (DelegatingStreamChannel.new = function(inner) {
      this[_inner$0] = inner;
    }).prototype = DelegatingStreamChannel.prototype;
    dart.addTypeTests(DelegatingStreamChannel);
    DelegatingStreamChannel.prototype[_is_DelegatingStreamChannel_default] = true;
    dart.setGetterSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getGetters(DelegatingStreamChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setFieldSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getFields(DelegatingStreamChannel.__proto__),
      [_inner$0]: dart.finalFieldType(StreamChannelOfT())
    }));
    return DelegatingStreamChannel;
  });
  src__delegating_stream_channel.DelegatingStreamChannel = src__delegating_stream_channel.DelegatingStreamChannel$();
  dart.addTypeTests(src__delegating_stream_channel.DelegatingStreamChannel, _is_DelegatingStreamChannel_default);
  const _inner$1 = Symbol('_inner');
  const _is_TypeSafeStreamChannelTransformer_default = Symbol('_is_TypeSafeStreamChannelTransformer_default');
  src__transformer__typed.TypeSafeStreamChannelTransformer$ = dart.generic((S, T) => {
    let StreamChannelTransformerOfS$T = () => (StreamChannelTransformerOfS$T = dart.constFn(src__stream_channel_transformer.StreamChannelTransformer$(S, T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class TypeSafeStreamChannelTransformer extends core.Object {
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return this[_inner$1].bind(channel).cast(S);
      }
    }
    (TypeSafeStreamChannelTransformer.new = function(inner) {
      this[_inner$1] = inner;
    }).prototype = TypeSafeStreamChannelTransformer.prototype;
    dart.addTypeTests(TypeSafeStreamChannelTransformer);
    TypeSafeStreamChannelTransformer.prototype[_is_TypeSafeStreamChannelTransformer_default] = true;
    TypeSafeStreamChannelTransformer[dart.implements] = () => [StreamChannelTransformerOfS$T()];
    dart.setMethodSignature(TypeSafeStreamChannelTransformer, () => ({
      __proto__: dart.getMethods(TypeSafeStreamChannelTransformer.__proto__),
      bind: dart.fnType(stream_channel.StreamChannel$(S), [core.Object])
    }));
    dart.setFieldSignature(TypeSafeStreamChannelTransformer, () => ({
      __proto__: dart.getFields(TypeSafeStreamChannelTransformer.__proto__),
      [_inner$1]: dart.finalFieldType(src__stream_channel_transformer.StreamChannelTransformer)
    }));
    return TypeSafeStreamChannelTransformer;
  });
  src__transformer__typed.TypeSafeStreamChannelTransformer = src__transformer__typed.TypeSafeStreamChannelTransformer$();
  dart.addTypeTests(src__transformer__typed.TypeSafeStreamChannelTransformer, _is_TypeSafeStreamChannelTransformer_default);
  const _streamTransformer = Symbol('_streamTransformer');
  const _sinkTransformer = Symbol('_sinkTransformer');
  const _is_StreamChannelTransformer_default = Symbol('_is_StreamChannelTransformer_default');
  src__stream_channel_transformer.StreamChannelTransformer$ = dart.generic((S, T) => {
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let StreamChannelOfS = () => (StreamChannelOfS = dart.constFn(stream_channel.StreamChannel$(S)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async$.StreamTransformer$(T, S)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelTransformer extends core.Object {
      static typed(S, T, transformer) {
        return src__stream_channel_transformer.StreamChannelTransformer$(S, T).is(transformer) ? transformer : new (src__transformer__typed.TypeSafeStreamChannelTransformer$(S, T)).new(transformer);
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return StreamChannelOfS().withCloseGuarantee(channel.stream.transform(S, this[_streamTransformer]), this[_sinkTransformer].bind(channel.sink));
      }
    }
    (StreamChannelTransformer.new = function(streamTransformer, sinkTransformer) {
      this[_streamTransformer] = streamTransformer;
      this[_sinkTransformer] = sinkTransformer;
    }).prototype = StreamChannelTransformer.prototype;
    (StreamChannelTransformer.fromCodec = function(codec) {
      StreamChannelTransformer.new.call(this, codec.decoder, StreamSinkTransformerOfS$T().fromStreamTransformer(codec.encoder));
    }).prototype = StreamChannelTransformer.prototype;
    dart.addTypeTests(StreamChannelTransformer);
    StreamChannelTransformer.prototype[_is_StreamChannelTransformer_default] = true;
    dart.setMethodSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getMethods(StreamChannelTransformer.__proto__),
      bind: dart.fnType(stream_channel.StreamChannel$(S), [core.Object])
    }));
    dart.setFieldSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getFields(StreamChannelTransformer.__proto__),
      [_streamTransformer]: dart.finalFieldType(StreamTransformerOfT$S()),
      [_sinkTransformer]: dart.finalFieldType(StreamSinkTransformerOfS$T())
    }));
    return StreamChannelTransformer;
  });
  src__stream_channel_transformer.StreamChannelTransformer = src__stream_channel_transformer.StreamChannelTransformer$();
  dart.addTypeTests(src__stream_channel_transformer.StreamChannelTransformer, _is_StreamChannelTransformer_default);
  const _sink = Symbol('_sink');
  const _streamController = Symbol('_streamController');
  const _subscription = Symbol('_subscription');
  const _disconnected = Symbol('_disconnected');
  const _onStreamDisconnected = Symbol('_onStreamDisconnected');
  const _onSinkDisconnected = Symbol('_onSinkDisconnected');
  const _is_GuaranteeChannel_default = Symbol('_is_GuaranteeChannel_default');
  src__guarantee_channel.GuaranteeChannel$ = dart.generic(T => {
    let _GuaranteeSinkOfT = () => (_GuaranteeSinkOfT = dart.constFn(src__guarantee_channel._GuaranteeSink$(T)))();
    let SingleSubscriptionTransformerOfT$T = () => (SingleSubscriptionTransformerOfT$T = dart.constFn(src__single_subscription_transformer.SingleSubscriptionTransformer$(T, T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async$.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async$.StreamSubscription$(T)))();
    class GuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_streamController].stream;
      }
      get sink() {
        return this[_sink];
      }
      [_onSinkDisconnected]() {
        this[_disconnected] = true;
        if (this[_subscription] != null) this[_subscription].cancel();
        this[_streamController].close();
      }
    }
    (GuaranteeChannel.new = function(innerStream, innerSink, opts) {
      let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
      this[_sink] = null;
      this[_streamController] = null;
      this[_subscription] = null;
      this[_disconnected] = false;
      this[_sink] = new (_GuaranteeSinkOfT()).new(innerSink, this, {allowErrors: allowSinkErrors});
      if (dart.test(innerStream.isBroadcast)) {
        innerStream = innerStream.transform(T, new (SingleSubscriptionTransformerOfT$T()).new());
      }
      this[_streamController] = StreamControllerOfT().new({onListen: dart.fn(() => {
          if (dart.test(this[_disconnected])) return;
          this[_subscription] = innerStream.listen(dart.bind(this[_streamController], 'add'), {onError: dart.bind(this[_streamController], 'addError'), onDone: dart.fn(() => {
              this[_sink][_onStreamDisconnected]();
              this[_streamController].close();
            }, VoidToNull())});
        }, VoidToNull()), sync: true});
    }).prototype = GuaranteeChannel.prototype;
    dart.addTypeTests(GuaranteeChannel);
    GuaranteeChannel.prototype[_is_GuaranteeChannel_default] = true;
    dart.setMethodSignature(GuaranteeChannel, () => ({
      __proto__: dart.getMethods(GuaranteeChannel.__proto__),
      [_onSinkDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(GuaranteeChannel, () => ({
      __proto__: dart.getGetters(GuaranteeChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setFieldSignature(GuaranteeChannel, () => ({
      __proto__: dart.getFields(GuaranteeChannel.__proto__),
      [_sink]: dart.fieldType(_GuaranteeSinkOfT()),
      [_streamController]: dart.fieldType(StreamControllerOfT()),
      [_subscription]: dart.fieldType(StreamSubscriptionOfT()),
      [_disconnected]: dart.fieldType(core.bool)
    }));
    return GuaranteeChannel;
  });
  src__guarantee_channel.GuaranteeChannel = src__guarantee_channel.GuaranteeChannel$();
  dart.addTypeTests(src__guarantee_channel.GuaranteeChannel, _is_GuaranteeChannel_default);
  const _inner$2 = Symbol('_inner');
  const _channel$ = Symbol('_channel');
  const _allowErrors = Symbol('_allowErrors');
  const _doneCompleter = Symbol('_doneCompleter');
  const _closed$ = Symbol('_closed');
  const _addStreamSubscription$ = Symbol('_addStreamSubscription');
  const _addStreamCompleter$ = Symbol('_addStreamCompleter');
  const _inAddStream$ = Symbol('_inAddStream');
  const _addError = Symbol('_addError');
  const _is__GuaranteeSink_default = Symbol('_is__GuaranteeSink_default');
  src__guarantee_channel._GuaranteeSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    let GuaranteeChannelOfT = () => (GuaranteeChannelOfT = dart.constFn(src__guarantee_channel.GuaranteeChannel$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async$.StreamSubscription$(T)))();
    class _GuaranteeSink extends core.Object {
      get done() {
        return this[_doneCompleter].future;
      }
      get [_inAddStream$]() {
        return this[_addStreamSubscription$] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_inner$2].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_allowErrors])) {
          this[_inner$2].addError(error, stackTrace);
          return;
        }
        this[_doneCompleter].completeError(error, stackTrace);
        this[_onStreamDisconnected]();
        this[_channel$][_onSinkDisconnected]();
        this[_inner$2].close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_disconnected])) return async$.Future.value();
        this[_addStreamCompleter$] = async$.Completer.sync();
        this[_addStreamSubscription$] = stream.listen(dart.bind(this[_inner$2], 'add'), {onError: dart.bind(this, _addError), onDone: dart.bind(this[_addStreamCompleter$], 'complete')});
        return this[_addStreamCompleter$].future.then(dart.dynamic, dart.fn(_ => {
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        if (dart.test(this[_closed$])) return this.done;
        this[_closed$] = true;
        if (!dart.test(this[_disconnected])) {
          this[_channel$][_onSinkDisconnected]();
          this[_doneCompleter].complete(this[_inner$2].close());
        }
        return this.done;
      }
      [_onStreamDisconnected]() {
        this[_disconnected] = true;
        if (!dart.test(this[_doneCompleter].isCompleted)) this[_doneCompleter].complete();
        if (!dart.test(this[_inAddStream$])) return;
        this[_addStreamCompleter$].complete(this[_addStreamSubscription$].cancel());
        this[_addStreamCompleter$] = null;
        this[_addStreamSubscription$] = null;
      }
    }
    (_GuaranteeSink.new = function(inner, channel, opts) {
      let allowErrors = opts && 'allowErrors' in opts ? opts.allowErrors : true;
      this[_doneCompleter] = async$.Completer.new();
      this[_disconnected] = false;
      this[_closed$] = false;
      this[_addStreamSubscription$] = null;
      this[_addStreamCompleter$] = null;
      this[_inner$2] = inner;
      this[_channel$] = channel;
      this[_allowErrors] = allowErrors;
    }).prototype = _GuaranteeSink.prototype;
    dart.addTypeTests(_GuaranteeSink);
    _GuaranteeSink.prototype[_is__GuaranteeSink_default] = true;
    _GuaranteeSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_GuaranteeSink, () => ({
      __proto__: dart.getMethods(_GuaranteeSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace]),
      addStream: dart.fnType(async$.Future, [core.Object]),
      close: dart.fnType(async$.Future, []),
      [_onStreamDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_GuaranteeSink, () => ({
      __proto__: dart.getGetters(_GuaranteeSink.__proto__),
      done: async$.Future,
      [_inAddStream$]: core.bool
    }));
    dart.setFieldSignature(_GuaranteeSink, () => ({
      __proto__: dart.getFields(_GuaranteeSink.__proto__),
      [_inner$2]: dart.finalFieldType(StreamSinkOfT()),
      [_channel$]: dart.finalFieldType(GuaranteeChannelOfT()),
      [_doneCompleter]: dart.finalFieldType(async$.Completer),
      [_disconnected]: dart.fieldType(core.bool),
      [_closed$]: dart.fieldType(core.bool),
      [_addStreamSubscription$]: dart.fieldType(StreamSubscriptionOfT()),
      [_addStreamCompleter$]: dart.fieldType(async$.Completer),
      [_allowErrors]: dart.finalFieldType(core.bool)
    }));
    return _GuaranteeSink;
  });
  src__guarantee_channel._GuaranteeSink = src__guarantee_channel._GuaranteeSink$();
  dart.addTypeTests(src__guarantee_channel._GuaranteeSink, _is__GuaranteeSink_default);
  const _is_StreamChannel_default = Symbol('_is_StreamChannel_default');
  stream_channel.StreamChannel$ = dart.generic(T => {
    let _StreamChannelOfT = () => (_StreamChannelOfT = dart.constFn(stream_channel._StreamChannel$(T)))();
    let GuaranteeChannelOfT = () => (GuaranteeChannelOfT = dart.constFn(src__guarantee_channel.GuaranteeChannel$(T)))();
    let CloseGuaranteeChannelOfT = () => (CloseGuaranteeChannelOfT = dart.constFn(src__close_guarantee_channel.CloseGuaranteeChannel$(T)))();
    class StreamChannel extends core.Object {
      static new(stream, sink) {
        return new (_StreamChannelOfT()).new(stream, sink);
      }
      static withGuarantees(stream, sink, opts) {
        let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
        return new (GuaranteeChannelOfT()).new(stream, sink, {allowSinkErrors: allowSinkErrors});
      }
      static withCloseGuarantee(stream, sink) {
        return new (CloseGuaranteeChannelOfT()).new(stream, sink);
      }
    }
    (StreamChannel[dart.mixinNew] = function() {
    }).prototype = StreamChannel.prototype;
    dart.addTypeTests(StreamChannel);
    StreamChannel.prototype[_is_StreamChannel_default] = true;
    return StreamChannel;
  });
  stream_channel.StreamChannel = stream_channel.StreamChannel$();
  dart.addTypeTests(stream_channel.StreamChannel, _is_StreamChannel_default);
  const _is__StreamChannel_default = Symbol('_is__StreamChannel_default');
  stream_channel._StreamChannel$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async$.StreamSink$(T)))();
    class _StreamChannel extends stream_channel.StreamChannelMixin$(T) {}
    (_StreamChannel.new = function(stream, sink) {
      this.stream = stream;
      this.sink = sink;
    }).prototype = _StreamChannel.prototype;
    dart.addTypeTests(_StreamChannel);
    _StreamChannel.prototype[_is__StreamChannel_default] = true;
    dart.setFieldSignature(_StreamChannel, () => ({
      __proto__: dart.getFields(_StreamChannel.__proto__),
      stream: dart.finalFieldType(StreamOfT()),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return _StreamChannel;
  });
  stream_channel._StreamChannel = stream_channel._StreamChannel$();
  dart.addTypeTests(stream_channel._StreamChannel, _is__StreamChannel_default);
  const _stream = Symbol('_stream');
  const _sink$ = Symbol('_sink');
  const _disconnected$ = Symbol('_disconnected');
  const _subscription$ = Symbol('_subscription');
  const _is_CloseGuaranteeChannel_default = Symbol('_is_CloseGuaranteeChannel_default');
  src__close_guarantee_channel.CloseGuaranteeChannel$ = dart.generic(T => {
    let _CloseGuaranteeSinkOfT = () => (_CloseGuaranteeSinkOfT = dart.constFn(src__close_guarantee_channel._CloseGuaranteeSink$(T)))();
    let _CloseGuaranteeStreamOfT = () => (_CloseGuaranteeStreamOfT = dart.constFn(src__close_guarantee_channel._CloseGuaranteeStream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async$.StreamSubscription$(T)))();
    class CloseGuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_stream];
      }
      get sink() {
        return this[_sink$];
      }
      get [_subscription$]() {
        return this[_subscription];
      }
      set [_subscription$](value) {
        this[_subscription] = StreamSubscriptionOfT()._check(value);
      }
    }
    (CloseGuaranteeChannel.new = function(innerStream, innerSink) {
      this[_stream] = null;
      this[_sink$] = null;
      this[_subscription] = null;
      this[_disconnected$] = false;
      this[_sink$] = new (_CloseGuaranteeSinkOfT()).new(innerSink, this);
      this[_stream] = new (_CloseGuaranteeStreamOfT()).new(innerStream, this);
    }).prototype = CloseGuaranteeChannel.prototype;
    dart.addTypeTests(CloseGuaranteeChannel);
    CloseGuaranteeChannel.prototype[_is_CloseGuaranteeChannel_default] = true;
    const _subscription = Symbol("CloseGuaranteeChannel._subscription");
    dart.setGetterSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getGetters(CloseGuaranteeChannel.__proto__),
      stream: async$.Stream$(T),
      sink: async$.StreamSink$(T)
    }));
    dart.setFieldSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getFields(CloseGuaranteeChannel.__proto__),
      [_stream]: dart.fieldType(_CloseGuaranteeStreamOfT()),
      [_sink$]: dart.fieldType(_CloseGuaranteeSinkOfT()),
      [_subscription$]: dart.fieldType(StreamSubscriptionOfT()),
      [_disconnected$]: dart.fieldType(core.bool)
    }));
    return CloseGuaranteeChannel;
  });
  src__close_guarantee_channel.CloseGuaranteeChannel = src__close_guarantee_channel.CloseGuaranteeChannel$();
  dart.addTypeTests(src__close_guarantee_channel.CloseGuaranteeChannel, _is_CloseGuaranteeChannel_default);
  const _inner$3 = Symbol('_inner');
  const _channel$0 = Symbol('_channel');
  const _is__CloseGuaranteeStream_default = Symbol('_is__CloseGuaranteeStream_default');
  src__close_guarantee_channel._CloseGuaranteeStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async$.Stream$(T)))();
    let CloseGuaranteeChannelOfT = () => (CloseGuaranteeChannelOfT = dart.constFn(src__close_guarantee_channel.CloseGuaranteeChannel$(T)))();
    class _CloseGuaranteeStream extends async$.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_channel$0][_disconnected$])) {
          onData = null;
          onError = null;
        }
        let subscription = this[_inner$3].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
        if (!dart.test(this[_channel$0][_disconnected$])) {
          this[_channel$0][_subscription$] = subscription;
        }
        return subscription;
      }
    }
    (_CloseGuaranteeStream.new = function(inner, channel) {
      this[_inner$3] = inner;
      this[_channel$0] = channel;
      _CloseGuaranteeStream.__proto__.new.call(this);
    }).prototype = _CloseGuaranteeStream.prototype;
    dart.addTypeTests(_CloseGuaranteeStream);
    _CloseGuaranteeStream.prototype[_is__CloseGuaranteeStream_default] = true;
    dart.setMethodSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getMethods(_CloseGuaranteeStream.__proto__),
      listen: dart.fnType(async$.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getFields(_CloseGuaranteeStream.__proto__),
      [_inner$3]: dart.finalFieldType(StreamOfT()),
      [_channel$0]: dart.finalFieldType(CloseGuaranteeChannelOfT())
    }));
    return _CloseGuaranteeStream;
  });
  src__close_guarantee_channel._CloseGuaranteeStream = src__close_guarantee_channel._CloseGuaranteeStream$();
  dart.addTypeTests(src__close_guarantee_channel._CloseGuaranteeStream, _is__CloseGuaranteeStream_default);
  const _is__CloseGuaranteeSink_default = Symbol('_is__CloseGuaranteeSink_default');
  src__close_guarantee_channel._CloseGuaranteeSink$ = dart.generic(T => {
    let CloseGuaranteeChannelOfT = () => (CloseGuaranteeChannelOfT = dart.constFn(src__close_guarantee_channel.CloseGuaranteeChannel$(T)))();
    class _CloseGuaranteeSink extends src__delegate__stream_sink.DelegatingStreamSink$(T) {
      close() {
        let done = super.close();
        this[_channel$0][_disconnected$] = true;
        if (this[_channel$0][_subscription$] != null) {
          this[_channel$0][_subscription$].onData(null);
          this[_channel$0][_subscription$].onError(null);
        }
        return done;
      }
    }
    (_CloseGuaranteeSink.new = function(inner, channel) {
      this[_channel$0] = channel;
      _CloseGuaranteeSink.__proto__.new.call(this, inner);
    }).prototype = _CloseGuaranteeSink.prototype;
    dart.addTypeTests(_CloseGuaranteeSink);
    _CloseGuaranteeSink.prototype[_is__CloseGuaranteeSink_default] = true;
    dart.setFieldSignature(_CloseGuaranteeSink, () => ({
      __proto__: dart.getFields(_CloseGuaranteeSink.__proto__),
      [_channel$0]: dart.finalFieldType(CloseGuaranteeChannelOfT())
    }));
    return _CloseGuaranteeSink;
  });
  src__close_guarantee_channel._CloseGuaranteeSink = src__close_guarantee_channel._CloseGuaranteeSink$();
  dart.addTypeTests(src__close_guarantee_channel._CloseGuaranteeSink, _is__CloseGuaranteeSink_default);
  dart.trackLibraries("packages/stream_channel/stream_channel.ddc", {
    "package:stream_channel/src/stream_channel_controller.dart": src__stream_channel_controller,
    "package:stream_channel/src/stream_channel_completer.dart": src__stream_channel_completer,
    "package:stream_channel/src/multi_channel.dart": src__multi_channel,
    "package:stream_channel/src/json_document_transformer.dart": src__json_document_transformer,
    "package:stream_channel/src/isolate_channel.dart": src__isolate_channel,
    "package:stream_channel/src/disconnector.dart": src__disconnector,
    "package:stream_channel/src/delegating_stream_channel.dart": src__delegating_stream_channel,
    "package:stream_channel/src/transformer/typed.dart": src__transformer__typed,
    "package:stream_channel/src/stream_channel_transformer.dart": src__stream_channel_transformer,
    "package:stream_channel/src/guarantee_channel.dart": src__guarantee_channel,
    "package:stream_channel/stream_channel.dart": stream_channel,
    "package:stream_channel/src/close_guarantee_channel.dart": src__close_guarantee_channel
  }, '{"version":3,"sourceRoot":"","sources":["src/stream_channel_controller.dart","src/stream_channel_completer.dart","src/multi_channel.dart","stream_channel.dart","src/json_document_transformer.dart","src/isolate_channel.dart","src/disconnector.dart","src/delegating_stream_channel.dart","src/transformer/typed.dart","src/stream_channel_transformer.dart","src/guarantee_channel.dart","src/close_guarantee_channel.dart"],"names":[],"mappings":"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","file":"stream_channel.ddc.js"}');
  // Exports:
  return {
    src__stream_channel_controller: src__stream_channel_controller,
    src__stream_channel_completer: src__stream_channel_completer,
    src__multi_channel: src__multi_channel,
    src__json_document_transformer: src__json_document_transformer,
    src__isolate_channel: src__isolate_channel,
    src__disconnector: src__disconnector,
    src__delegating_stream_channel: src__delegating_stream_channel,
    src__transformer__typed: src__transformer__typed,
    src__stream_channel_transformer: src__stream_channel_transformer,
    src__guarantee_channel: src__guarantee_channel,
    stream_channel: stream_channel,
    src__close_guarantee_channel: src__close_guarantee_channel
  };
});

//# sourceMappingURL=stream_channel.ddc.js.map
