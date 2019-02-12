define(['dart_sdk', 'packages/source_span/source_span'], function(dart_sdk, source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location = source_span.src__location;
  const src__span = source_span.src__span;
  const src__file = source_span.src__file;
  const _root = Object.create(null);
  const src__source_map_span = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__vlq = Object.create(_root);
  const $replaceAll = dartx.replaceAll;
  const $compareTo = dartx.compareTo;
  const $length = dartx.length;
  const $first = dartx.first;
  const $last = dartx.last;
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $rightShift = dartx['>>'];
  const $add = dartx.add;
  const $containsKey = dartx.containsKey;
  const $leftShift = dartx['<<'];
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let VoidToMapOfString$int = () => (VoidToMapOfString$int = dart.constFn(dart.fnType(MapOfString$int(), [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  src__source_map_span.SourceMapSpan = class SourceMapSpan extends src__span.SourceSpanBase {
    get isIdentifier() {
      return this[isIdentifier$];
    }
    set isIdentifier(value) {
      super.isIdentifier = value;
    }
  };
  (src__source_map_span.SourceMapSpan.new = function(start, end, text, opts) {
    let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : false;
    this[isIdentifier$] = isIdentifier;
    src__source_map_span.SourceMapSpan.__proto__.new.call(this, start, end, text);
  }).prototype = src__source_map_span.SourceMapSpan.prototype;
  (src__source_map_span.SourceMapSpan.identifier = function(start, text) {
    src__source_map_span.SourceMapSpan.new.call(this, start, new src__location.SourceLocation.new(dart.notNull(start.offset) + text.length, {sourceUrl: start.sourceUrl, line: start.line, column: dart.notNull(start.column) + text.length}), text, {isIdentifier: true});
  }).prototype = src__source_map_span.SourceMapSpan.prototype;
  dart.addTypeTests(src__source_map_span.SourceMapSpan);
  const isIdentifier$ = Symbol("SourceMapSpan.isIdentifier");
  dart.setFieldSignature(src__source_map_span.SourceMapSpan, () => ({
    __proto__: dart.getFields(src__source_map_span.SourceMapSpan.__proto__),
    isIdentifier: dart.finalFieldType(core.bool)
  }));
  const _inner = Symbol('_inner');
  src__source_map_span.SourceMapFileSpan = class SourceMapFileSpan extends core.Object {
    get isIdentifier() {
      return this[isIdentifier$0];
    }
    set isIdentifier(value) {
      super.isIdentifier = value;
    }
    get file() {
      return this[_inner].file;
    }
    get start() {
      return this[_inner].start;
    }
    get end() {
      return this[_inner].end;
    }
    get text() {
      return this[_inner].text;
    }
    get context() {
      return this[_inner].context;
    }
    get sourceUrl() {
      return this[_inner].sourceUrl;
    }
    get length() {
      return this[_inner].length;
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      return this[_inner].compareTo(other);
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return this[_inner].highlight({color: color});
    }
    union(other) {
      return this[_inner].union(other);
    }
    expand(other) {
      return this[_inner].expand(other);
    }
    message(message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return this[_inner].message(message, {color: color});
    }
    toString() {
      return dart.toString(this[_inner])[$replaceAll]("FileSpan", "SourceMapFileSpan");
    }
  };
  (src__source_map_span.SourceMapFileSpan.new = function(inner, opts) {
    let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : false;
    this[_inner] = inner;
    this[isIdentifier$0] = isIdentifier;
  }).prototype = src__source_map_span.SourceMapFileSpan.prototype;
  dart.addTypeTests(src__source_map_span.SourceMapFileSpan);
  const isIdentifier$0 = Symbol("SourceMapFileSpan.isIdentifier");
  src__source_map_span.SourceMapFileSpan[dart.implements] = () => [src__source_map_span.SourceMapSpan, src__file.FileSpan];
  dart.setMethodSignature(src__source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getMethods(src__source_map_span.SourceMapFileSpan.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    highlight: dart.fnType(core.String, [], {color: dart.dynamic}),
    union: dart.fnType(src__span.SourceSpan, [src__span.SourceSpan]),
    expand: dart.fnType(src__file.FileSpan, [src__file.FileSpan]),
    message: dart.fnType(core.String, [core.String], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getGetters(src__source_map_span.SourceMapFileSpan.__proto__),
    file: src__file.SourceFile,
    start: src__file.FileLocation,
    end: src__file.FileLocation,
    text: core.String,
    context: core.String,
    sourceUrl: core.Uri,
    length: core.int
  }));
  dart.setFieldSignature(src__source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getFields(src__source_map_span.SourceMapFileSpan.__proto__),
    [_inner]: dart.finalFieldType(src__file.FileSpan),
    isIdentifier: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__source_map_span.SourceMapFileSpan, ['compareTo', 'toString']);
  src__utils.binarySearch = function(list, matches) {
    if (list[$length] === 0) return -1;
    if (dart.test(matches(list[$first]))) return 0;
    if (!dart.test(matches(list[$last]))) return list[$length];
    let min = 0;
    let max = dart.notNull(list[$length]) - 1;
    while (min < max) {
      let half = min + ((max - min) / 2)[$truncate]();
      if (dart.test(matches(list[$_get](half)))) {
        max = half;
      } else {
        min = half + 1;
      }
    }
    return max;
  };
  dart.defineLazy(src__vlq, {
    /*src__vlq.VLQ_BASE_SHIFT*/get VLQ_BASE_SHIFT() {
      return 5;
    },
    /*src__vlq.VLQ_BASE_MASK*/get VLQ_BASE_MASK() {
      return (1 << 5) - 1;
    },
    /*src__vlq.VLQ_CONTINUATION_BIT*/get VLQ_CONTINUATION_BIT() {
      return 1 << 5;
    },
    /*src__vlq.VLQ_CONTINUATION_MASK*/get VLQ_CONTINUATION_MASK() {
      return 1 << 5;
    },
    /*src__vlq.BASE64_DIGITS*/get BASE64_DIGITS() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    },
    /*src__vlq._digits*/get _digits() {
      return dart.fn(() => {
        let map = new (IdentityMapOfString$int()).new();
        for (let i = 0; dart.notNull(i) < 64; i = dart.notNull(i) + 1) {
          map[$_set]("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[$_get](i), i);
        }
        return map;
      }, VoidToMapOfString$int())();
    },
    /*src__vlq.MAX_INT32*/get MAX_INT32() {
      return dart.asInt(math.pow(2, 31) - 1);
    },
    /*src__vlq.MIN_INT32*/get MIN_INT32() {
      return dart.asInt(-math.pow(2, 31));
    }
  });
  src__vlq.encodeVlq = function(value) {
    if (dart.notNull(value) < dart.notNull(src__vlq.MIN_INT32) || dart.notNull(value) > dart.notNull(src__vlq.MAX_INT32)) {
      dart.throw(new core.ArgumentError.new("expected 32 bit int, got: " + dart.str(value)));
    }
    let res = JSArrayOfString().of([]);
    let signBit = 0;
    if (dart.notNull(value) < 0) {
      signBit = 1;
      value = -dart.notNull(value);
    }
    value = (dart.notNull(value) << 1 | signBit) >>> 0;
    do {
      let digit = dart.notNull(value) & 31;
      value = value[$rightShift](5);
      if (dart.notNull(value) > 0) {
        digit = (digit | 32) >>> 0;
      }
      res[$add]("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[$_get](digit));
    } while (dart.notNull(value) > 0);
    return res;
  };
  src__vlq.decodeVlq = function(chars) {
    let result = 0;
    let stop = false;
    let shift = 0;
    while (!stop) {
      if (!dart.test(chars.moveNext())) dart.throw(new core.StateError.new("incomplete VLQ value"));
      let char = chars.current;
      if (!dart.test(src__vlq._digits[$containsKey](char))) {
        dart.throw(new core.FormatException.new("invalid character in VLQ encoding: " + dart.str(char)));
      }
      let digit = src__vlq._digits[$_get](char);
      stop = (dart.notNull(digit) & 32) === 0;
      digit = dart.notNull(digit) & 31;
      result = result + digit[$leftShift](shift);
      shift = shift + 5;
    }
    let negate = (result & 1) === 1;
    result = result[$rightShift](1);
    result = negate ? -result : result;
    if (result < dart.notNull(src__vlq.MIN_INT32) || result > dart.notNull(src__vlq.MAX_INT32)) {
      dart.throw(new core.FormatException.new("expected an encoded 32 bit int, but we got: " + dart.str(result)));
    }
    return result;
  };
  dart.trackLibraries("packages/source_maps/src/source_map_span.ddc", {
    "package:source_maps/src/source_map_span.dart": src__source_map_span,
    "package:source_maps/src/utils.dart": src__utils,
    "package:source_maps/src/vlq.dart": src__vlq
  }, '{"version":3,"sourceRoot":"","sources":["source_map_span.dart","utils.dart","vlq.dart"],"names":[],"mappings":"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","file":"source_map_span.ddc.js"}');
  // Exports:
  return {
    src__source_map_span: src__source_map_span,
    src__utils: src__utils,
    src__vlq: src__vlq
  };
});

//# sourceMappingURL=source_map_span.ddc.js.map
