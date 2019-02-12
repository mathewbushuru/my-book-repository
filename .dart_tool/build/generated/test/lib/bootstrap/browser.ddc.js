define(['dart_sdk', 'packages/stream_channel/stream_channel', 'packages/test_core/src/runner/plugin/remote_platform_helpers', 'packages/test_core/src/util/stack_trace_mapper'], function(dart_sdk, stream_channel, remote_platform_helpers, stack_trace_mapper) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_channel_controller = stream_channel.src__stream_channel_controller;
  const src__runner__plugin__remote_platform_helpers = remote_platform_helpers.src__runner__plugin__remote_platform_helpers;
  const src__util__stack_trace_mapper = stack_trace_mapper.src__util__stack_trace_mapper;
  const _root = Object.create(null);
  const bootstrap__browser = Object.create(_root);
  const src__runner__browser__post_message_channel = Object.create(_root);
  const src__bootstrap__browser = Object.create(_root);
  const $origin = dartx.origin;
  const $location = dartx.location;
  const $data = dartx.data;
  const $onMessage = dartx.onMessage;
  let MessageEventToNull = () => (MessageEventToNull = dart.constFn(dart.fnType(core.Null, [html.MessageEvent])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  src__runner__browser__post_message_channel.postMessageChannel = function() {
    let controller = new src__stream_channel_controller.StreamChannelController.new({sync: true});
    html.window[$onMessage].listen(dart.fn(message => {
      if (message.origin != html.window[$location][$origin]) return;
      message.stopPropagation();
      controller.local.sink.add(message[$data]);
    }, MessageEventToNull()));
    controller.local.stream.listen(dart.fn(data => {
      dart.global.window.parent.postMessage(js_util.jsify(new (IdentityMapOfString$dynamic()).from(["href", html.window[$location].href, "data", data])), html.window[$location][$origin]);
    }, dynamicToNull()), {onDone: dart.fn(() => {
        dart.global.window.parent.postMessage(js_util.jsify(new (IdentityMapOfString$String()).from(["href", html.window[$location].href, "event", "done"])), html.window[$location][$origin]);
      }, VoidToNull())});
    dart.global.window.parent.postMessage(js_util.jsify(new (IdentityMapOfString$Object()).from(["href", html.window[$location].href, "ready", true])), html.window[$location][$origin]);
    return controller.foreign;
  };
  src__bootstrap__browser.internalBootstrapBrowserTest = function(getMain) {
    let channel = src__runner__plugin__remote_platform_helpers.serializeSuite(getMain, {hidePrints: false, beforeLoad: dart.fn(() => async.async(core.Null, function*() {
        let serialized = core.Map.as(yield src__runner__plugin__remote_platform_helpers.suiteChannel("test.browser.mapper").stream.first);
        if (serialized == null) return;
        src__runner__plugin__remote_platform_helpers.setStackTraceMapper(src__util__stack_trace_mapper.JSStackTraceMapper.deserialize(serialized));
      }), VoidToFutureOfNull())});
    src__runner__browser__post_message_channel.postMessageChannel().pipe(channel);
  };
  dart.trackLibraries("packages/test/bootstrap/browser.ddc", {
    "package:test/bootstrap/browser.dart": bootstrap__browser,
    "package:test/src/runner/browser/post_message_channel.dart": src__runner__browser__post_message_channel,
    "package:test/src/bootstrap/browser.dart": src__bootstrap__browser
  }, '{"version":3,"sourceRoot":"","sources":["../src/runner/browser/post_message_channel.dart","../src/bootstrap/browser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBE,QAAI,iBAAa,0DAAuB,QAAO;AAE/C,eAAM,YAAU,OAAO,CAAC,QAAC,OAAO;AAK9B,UAAI,OAAO,OAAO,IAAI,WAAM,WAAS,SAAO,EAAE;AAC9C,aAAO,gBAAgB;AAEvB,gBAAU,MAAM,KAAK,IAAI,CAAC,OAAO,OAAK;;AAGxC,cAAU,MAAM,OAAO,OAAO,CAAC,QAAC,IAAI;AAGlC,2CAAkB,CAAC,aAAK,CAAC,0CAAC,QAAQ,WAAM,WAAS,KAAK,EAAE,QAAQ,IAAI,KAChE,WAAM,WAAS,SAAO;kCACjB;AACT,6CAAkB,CACd,aAAK,CAAC,yCACJ,QAAQ,WAAM,WAAS,KAAK,EAC5B,SAAS,WAEX,WAAM,WAAS,SAAO;;AAK5B,yCAAkB,CAAC,aAAK,CAAC,yCAAC,QAAQ,WAAM,WAAS,KAAK,EAAE,SAAS,SAC7D,WAAM,WAAS,SAAO;AAE1B,UAAO,WAAU,QAAQ;EAC3B;kEC3CkC,OAAkB;AAClD,QAAI,UACA,2DAAc,CAAC,OAAO,eAAc,mBAAmB;AACzD,YAAI,yBACA,MAAM,yDAAY,CAAC,6BAA6B,MAAM;AAC1D,YAAI,UAAU,IAAI,MAAM;AACxB,wEAAmB,CAAC,gDAAkB,YAAY,CAAC,UAAU;MAC/D;AACA,iEAAkB,OAAO,CAAC,OAAO;EACnC","file":"browser.ddc.js"}');
  // Exports:
  return {
    bootstrap__browser: bootstrap__browser,
    src__runner__browser__post_message_channel: src__runner__browser__post_message_channel,
    src__bootstrap__browser: src__bootstrap__browser
  };
});

//# sourceMappingURL=browser.ddc.js.map
