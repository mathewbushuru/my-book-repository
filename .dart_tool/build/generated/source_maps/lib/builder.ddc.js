define(['dart_sdk', 'packages/source_maps/src/source_map_span', 'packages/source_span/source_span'], function(dart_sdk, source_map_span, source_span) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__source_map_span = source_map_span.src__source_map_span;
  const src__vlq = source_map_span.src__vlq;
  const src__utils = source_map_span.src__utils;
  const src__location = source_span.src__location;
  const src__file = source_span.src__file;
  const src__span = source_span.src__span;
  const _root = Object.create(null);
  const parser = Object.create(_root);
  const builder = Object.create(_root);
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $add = dartx.add;
  const $length = dartx.length;
  const $runtimeType = dartx.runtimeType;
  const $_set = dartx._set;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $values = dartx.values;
  const $codeUnitAt = dartx.codeUnitAt;
  const $substring = dartx.substring;
  const $contains = dartx.contains;
  const $isEmpty = dartx.isEmpty;
  const $forEach = dartx.forEach;
  const $sort = dartx.sort;
  const $toString = dartx.toString;
  const $putIfAbsent = dartx.putIfAbsent;
  const $keys = dartx.keys;
  const $last = dartx.last;
  const $compareTo = dartx.compareTo;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfMapping = () => (JSArrayOfMapping = dart.constFn(_interceptors.JSArray$(parser.Mapping)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfMapping = () => (ListOfMapping = dart.constFn(core.List$(parser.Mapping)))();
  let IdentityMapOfString$SingleMapping = () => (IdentityMapOfString$SingleMapping = dart.constFn(_js_helper.IdentityMap$(core.String, parser.SingleMapping)))();
  let SingleMappingToMap = () => (SingleMappingToMap = dart.constFn(dart.fnType(core.Map, [parser.SingleMapping])))();
  let MapOfString$SingleMapping = () => (MapOfString$SingleMapping = dart.constFn(core.Map$(core.String, parser.SingleMapping)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfSourceFile = () => (ListOfSourceFile = dart.constFn(core.List$(src__file.SourceFile)))();
  let JSArrayOfTargetLineEntry = () => (JSArrayOfTargetLineEntry = dart.constFn(_interceptors.JSArray$(parser.TargetLineEntry)))();
  let JSArrayOfTargetEntry = () => (JSArrayOfTargetEntry = dart.constFn(_interceptors.JSArray$(parser.TargetEntry)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let IdentityMapOfint$SourceFile = () => (IdentityMapOfint$SourceFile = dart.constFn(_js_helper.IdentityMap$(core.int, src__file.SourceFile)))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let VoidToSourceFile = () => (VoidToSourceFile = dart.constFn(dart.fnType(src__file.SourceFile, [])))();
  let intToSourceFile = () => (intToSourceFile = dart.constFn(dart.fnType(src__file.SourceFile, [core.int])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let SourceFileToString = () => (SourceFileToString = dart.constFn(dart.fnType(core.String, [src__file.SourceFile])))();
  let StringAnddynamicTodynamic = () => (StringAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String, dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let ListOfTargetLineEntry = () => (ListOfTargetLineEntry = dart.constFn(core.List$(parser.TargetLineEntry)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ListOfTargetEntry = () => (ListOfTargetEntry = dart.constFn(core.List$(parser.TargetEntry)))();
  let IteratorOfString = () => (IteratorOfString = dart.constFn(core.Iterator$(core.String)))();
  let JSArrayOfEntry = () => (JSArrayOfEntry = dart.constFn(_interceptors.JSArray$(builder.Entry)))();
  let ListOfEntry = () => (ListOfEntry = dart.constFn(core.List$(builder.Entry)))();
  let ComparableOfEntry = () => (ComparableOfEntry = dart.constFn(core.Comparable$(builder.Entry)))();
  parser.parse = function(jsonMap, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    return parser.parseJson(core.Map._check(convert.jsonDecode(jsonMap)), {otherMaps: otherMaps, mapUrl: mapUrl});
  };
  parser.parseExtended = function(jsonMap, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    return parser.parseJsonExtended(convert.jsonDecode(jsonMap), {otherMaps: otherMaps, mapUrl: mapUrl});
  };
  parser.parseJsonExtended = function(json, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    if (core.List.is(json)) {
      return new parser.MappingBundle.fromJson(json, {mapUrl: core.String._check(mapUrl)});
    }
    return parser.parseJson(core.Map.as(json));
  };
  parser.parseJson = function(map, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    if (!dart.equals(map[$_get]("version"), 3)) {
      dart.throw(new core.ArgumentError.new("unexpected source map version: " + dart.str(map[$_get]("version")) + ". " + "Only version 3 is supported."));
    }
    if (dart.test(map[$containsKey]("sections"))) {
      if (dart.test(map[$containsKey]("mappings")) || dart.test(map[$containsKey]("sources")) || dart.test(map[$containsKey]("names"))) {
        dart.throw(new core.FormatException.new("map containing \"sections\" " + "cannot contain \"mappings\", \"sources\", or \"names\"."));
      }
      return new parser.MultiSectionMapping.fromJson(core.List._check(map[$_get]("sections")), otherMaps, {mapUrl: mapUrl});
    }
    return new parser.SingleMapping.fromJson(map, {mapUrl: mapUrl});
  };
  parser.Mapping = class Mapping extends core.Object {
    spanForLocation(location, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      return this.spanFor(location.line, location.column, {uri: location.sourceUrl == null ? null : dart.toString(location.sourceUrl), files: files});
    }
  };
  (parser.Mapping.new = function() {
  }).prototype = parser.Mapping.prototype;
  dart.addTypeTests(parser.Mapping);
  dart.setMethodSignature(parser.Mapping, () => ({
    __proto__: dart.getMethods(parser.Mapping.__proto__),
    spanForLocation: dart.fnType(src__source_map_span.SourceMapSpan, [src__location.SourceLocation], {files: core.Map$(core.String, src__file.SourceFile)})
  }));
  const _lineStart = Symbol('_lineStart');
  const _columnStart = Symbol('_columnStart');
  const _maps = Symbol('_maps');
  const _indexFor = Symbol('_indexFor');
  parser.MultiSectionMapping = class MultiSectionMapping extends parser.Mapping {
    [_indexFor](line, column) {
      for (let i = 0; i < dart.notNull(this[_lineStart][$length]); i++) {
        if (dart.dtest(dart.dsend(line, '<', [this[_lineStart][$_get](i)]))) return i - 1;
        if (dart.equals(line, this[_lineStart][$_get](i)) && dart.dtest(dart.dsend(column, '<', [this[_columnStart][$_get](i)]))) return i - 1;
      }
      return dart.notNull(this[_lineStart][$length]) - 1;
    }
    spanFor(line, column, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      let index = this[_indexFor](line, column);
      return this[_maps][$_get](index).spanFor(dart.notNull(line) - dart.notNull(this[_lineStart][$_get](index)), dart.notNull(column) - dart.notNull(this[_columnStart][$_get](index)), {files: files});
    }
    toString() {
      let buff = new core.StringBuffer.new(dart.str(this[$runtimeType]) + " : [");
      for (let i = 0; i < dart.notNull(this[_lineStart][$length]); i++) {
        buff.write("(");
        buff.write(this[_lineStart][$_get](i));
        buff.write(",");
        buff.write(this[_columnStart][$_get](i));
        buff.write(":");
        buff.write(this[_maps][$_get](i));
        buff.write(")");
      }
      buff.write("]");
      return buff.toString();
    }
  };
  (parser.MultiSectionMapping.fromJson = function(sections, otherMaps, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    this[_lineStart] = JSArrayOfint().of([]);
    this[_columnStart] = JSArrayOfint().of([]);
    this[_maps] = JSArrayOfMapping().of([]);
    for (let section of sections) {
      let offset = dart.dindex(section, "offset");
      if (offset == null) dart.throw(new core.FormatException.new("section missing offset"));
      let line = dart.dindex(dart.dindex(section, "offset"), "line");
      if (line == null) dart.throw(new core.FormatException.new("offset missing line"));
      let column = dart.dindex(dart.dindex(section, "offset"), "column");
      if (column == null) dart.throw(new core.FormatException.new("offset missing column"));
      this[_lineStart][$add](core.int._check(line));
      this[_columnStart][$add](core.int._check(column));
      let url = dart.dindex(section, "url");
      let map = dart.dindex(section, "map");
      if (url != null && map != null) {
        dart.throw(new core.FormatException.new("section can't use both url and map entries"));
      } else if (url != null) {
        if (otherMaps == null || otherMaps[$_get](url) == null) {
          dart.throw(new core.FormatException.new("section contains refers to " + dart.str(url) + ", but no map was " + "given for it. Make sure a map is passed in \"otherMaps\""));
        }
        this[_maps][$add](parser.parseJson(otherMaps[$_get](url), {otherMaps: otherMaps, mapUrl: url}));
      } else if (map != null) {
        this[_maps][$add](parser.parseJson(core.Map._check(map), {otherMaps: otherMaps, mapUrl: mapUrl}));
      } else {
        dart.throw(new core.FormatException.new("section missing url or map"));
      }
    }
    if (this[_lineStart][$length] === 0) {
      dart.throw(new core.FormatException.new("expected at least one section"));
    }
  }).prototype = parser.MultiSectionMapping.prototype;
  dart.addTypeTests(parser.MultiSectionMapping);
  dart.setMethodSignature(parser.MultiSectionMapping, () => ({
    __proto__: dart.getMethods(parser.MultiSectionMapping.__proto__),
    [_indexFor]: dart.fnType(core.int, [dart.dynamic, dart.dynamic]),
    spanFor: dart.fnType(src__source_map_span.SourceMapSpan, [core.int, core.int], {files: core.Map$(core.String, src__file.SourceFile), uri: core.String})
  }));
  dart.setFieldSignature(parser.MultiSectionMapping, () => ({
    __proto__: dart.getFields(parser.MultiSectionMapping.__proto__),
    [_lineStart]: dart.finalFieldType(ListOfint()),
    [_columnStart]: dart.finalFieldType(ListOfint()),
    [_maps]: dart.finalFieldType(ListOfMapping())
  }));
  dart.defineExtensionMethods(parser.MultiSectionMapping, ['toString']);
  const _mappings = Symbol('_mappings');
  parser.MappingBundle = class MappingBundle extends parser.Mapping {
    addMapping(mapping) {
      this[_mappings][$_set](mapping.targetUrl, mapping);
    }
    toJson() {
      return this[_mappings][$values][$map](core.Map, dart.fn(v => v.toJson(), SingleMappingToMap()))[$toList]();
    }
    toString() {
      let buff = new core.StringBuffer.new();
      for (let map of this[_mappings][$values]) {
        buff.write(dart.toString(map));
      }
      return buff.toString();
    }
    containsMapping(url) {
      return this[_mappings][$containsKey](url);
    }
    spanFor(line, column, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      if (uri == null) {
        dart.throw(new core.ArgumentError.notNull("uri"));
      }
      let onBoundary = true;
      let separatorCodeUnits = JSArrayOfint().of(["/"[$codeUnitAt](0), ":"[$codeUnitAt](0)]);
      for (let i = 0; i < uri.length; ++i) {
        if (dart.test(onBoundary)) {
          let candidate = uri[$substring](i);
          if (dart.test(this[_mappings][$containsKey](candidate))) {
            return this[_mappings][$_get](candidate).spanFor(line, column, {files: files, uri: candidate});
          }
        }
        onBoundary = separatorCodeUnits[$contains](uri[$codeUnitAt](i));
      }
      let offset = dart.notNull(line) * 1000000 + dart.notNull(column);
      let location = new src__location.SourceLocation.new(offset, {line: line, column: column, sourceUrl: core.Uri.parse(uri)});
      return new src__source_map_span.SourceMapSpan.new(location, location, "");
    }
  };
  (parser.MappingBundle.new = function() {
    this[_mappings] = new (IdentityMapOfString$SingleMapping()).new();
  }).prototype = parser.MappingBundle.prototype;
  (parser.MappingBundle.fromJson = function(json, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    this[_mappings] = new (IdentityMapOfString$SingleMapping()).new();
    for (let map of json) {
      this.addMapping(parser.SingleMapping.as(parser.parseJson(core.Map._check(map), {mapUrl: mapUrl})));
    }
  }).prototype = parser.MappingBundle.prototype;
  dart.addTypeTests(parser.MappingBundle);
  dart.setMethodSignature(parser.MappingBundle, () => ({
    __proto__: dart.getMethods(parser.MappingBundle.__proto__),
    addMapping: dart.fnType(dart.dynamic, [parser.SingleMapping]),
    toJson: dart.fnType(core.List, []),
    containsMapping: dart.fnType(core.bool, [core.String]),
    spanFor: dart.fnType(src__source_map_span.SourceMapSpan, [core.int, core.int], {files: core.Map$(core.String, src__file.SourceFile), uri: core.String})
  }));
  dart.setFieldSignature(parser.MappingBundle, () => ({
    __proto__: dart.getFields(parser.MappingBundle.__proto__),
    [_mappings]: dart.fieldType(MapOfString$SingleMapping())
  }));
  dart.defineExtensionMethods(parser.MappingBundle, ['toString']);
  const _mapUrl = Symbol('_mapUrl');
  let const$;
  const _consumeNewLine = Symbol('_consumeNewLine');
  const _segmentError = Symbol('_segmentError');
  const _consumeValue = Symbol('_consumeValue');
  const _consumeNewSegment = Symbol('_consumeNewSegment');
  const _findLine = Symbol('_findLine');
  const _findColumn = Symbol('_findColumn');
  parser.SingleMapping = class SingleMapping extends parser.Mapping {
    get urls() {
      return this[urls$];
    }
    set urls(value) {
      super.urls = value;
    }
    get names() {
      return this[names$];
    }
    set names(value) {
      super.names = value;
    }
    get files() {
      return this[files$];
    }
    set files(value) {
      super.files = value;
    }
    get lines() {
      return this[lines$];
    }
    set lines(value) {
      super.lines = value;
    }
    get targetUrl() {
      return this[targetUrl$];
    }
    set targetUrl(value) {
      this[targetUrl$] = value;
    }
    get sourceRoot() {
      return this[sourceRoot];
    }
    set sourceRoot(value) {
      this[sourceRoot] = value;
    }
    get extensions() {
      return this[extensions];
    }
    set extensions(value) {
      super.extensions = value;
    }
    static fromEntries(entries, fileUrl) {
      if (fileUrl === void 0) fileUrl = null;
      let sourceEntries = core.List.from(entries);
      sourceEntries[$sort]();
      let lines = JSArrayOfTargetLineEntry().of([]);
      let urls = new (IdentityMapOfString$int()).new();
      let names = new (IdentityMapOfString$int()).new();
      let files = new (IdentityMapOfint$SourceFile()).new();
      let lineNum = null;
      let targetEntries = null;
      for (let sourceEntry of sourceEntries) {
        if (lineNum == null || dart.dtest(dart.dsend(dart.dload(dart.dload(sourceEntry, 'target'), 'line'), '>', [lineNum]))) {
          lineNum = dart.dload(dart.dload(sourceEntry, 'target'), 'line');
          targetEntries = JSArrayOfTargetEntry().of([]);
          lines[$add](new parser.TargetLineEntry.new(core.int._check(lineNum), targetEntries));
        }
        if (dart.dload(sourceEntry, 'source') == null) {
          targetEntries[$add](new parser.TargetEntry.new(core.int._check(dart.dload(dart.dload(sourceEntry, 'target'), 'column'))));
        } else {
          let sourceUrl = dart.dload(dart.dload(sourceEntry, 'source'), 'sourceUrl');
          let urlId = urls[$putIfAbsent](sourceUrl == null ? "" : dart.toString(sourceUrl), dart.fn(() => urls[$length], VoidToint()));
          if (src__file.FileLocation.is(dart.dload(sourceEntry, 'source'))) {
            files[$putIfAbsent](urlId, dart.fn(() => src__file.FileLocation.as(dart.dload(sourceEntry, 'source')).file, VoidToSourceFile()));
          }
          let srcNameId = dart.dload(sourceEntry, 'identifierName') == null ? null : names[$putIfAbsent](core.String._check(dart.dload(sourceEntry, 'identifierName')), dart.fn(() => names[$length], VoidToint()));
          targetEntries[$add](new parser.TargetEntry.new(core.int._check(dart.dload(dart.dload(sourceEntry, 'target'), 'column')), urlId, core.int._check(dart.dload(dart.dload(sourceEntry, 'source'), 'line')), core.int._check(dart.dload(dart.dload(sourceEntry, 'source'), 'column')), srcNameId));
        }
      }
      return new parser.SingleMapping.__(fileUrl, urls[$values][$map](src__file.SourceFile, dart.fn(i => files[$_get](i), intToSourceFile()))[$toList](), urls[$keys][$toList](), names[$keys][$toList](), lines);
    }
    toJson(opts) {
      let includeSourceContents = opts && 'includeSourceContents' in opts ? opts.includeSourceContents : false;
      let buff = new core.StringBuffer.new();
      let line = 0;
      let column = 0;
      let srcLine = 0;
      let srcColumn = 0;
      let srcUrlId = 0;
      let srcNameId = 0;
      let first = true;
      for (let entry of this.lines) {
        let nextLine = entry.line;
        if (dart.notNull(nextLine) > dart.notNull(line)) {
          for (let i = line; dart.notNull(i) < dart.notNull(nextLine); i = dart.notNull(i) + 1) {
            buff.write(";");
          }
          line = nextLine;
          column = 0;
          first = true;
        }
        for (let segment of entry.entries) {
          if (!first) buff.write(",");
          first = false;
          column = parser.SingleMapping._append(buff, column, segment.column);
          let newUrlId = segment.sourceUrlId;
          if (newUrlId == null) continue;
          srcUrlId = parser.SingleMapping._append(buff, srcUrlId, newUrlId);
          srcLine = parser.SingleMapping._append(buff, srcLine, segment.sourceLine);
          srcColumn = parser.SingleMapping._append(buff, srcColumn, segment.sourceColumn);
          if (segment.sourceNameId == null) continue;
          srcNameId = parser.SingleMapping._append(buff, srcNameId, segment.sourceNameId);
        }
      }
      let result = new (IdentityMapOfString$Object()).from(["version", 3, "sourceRoot", this.sourceRoot == null ? "" : this.sourceRoot, "sources", this.urls, "names", this.names, "mappings", buff.toString()]);
      if (this.targetUrl != null) result[$_set]("file", this.targetUrl);
      if (dart.test(includeSourceContents)) {
        result[$_set]("sourcesContent", this.files[$map](core.String, dart.fn(file => {
          return file == null ? null : file.getText(0);
        }, SourceFileToString()))[$toList]());
      }
      this.extensions[$forEach](dart.fn((name, value) => result[$_set](name, value), StringAnddynamicTodynamic()));
      return result;
    }
    static _append(buff, oldValue, newValue) {
      buff.writeAll(src__vlq.encodeVlq(dart.notNull(newValue) - dart.notNull(oldValue)));
      return newValue;
    }
    [_segmentError](seen, line) {
      return new core.StateError.new("Invalid entry in sourcemap, expected 1, 4, or 5" + (" values, but got " + dart.str(seen) + ".\ntargeturl: " + dart.str(this.targetUrl) + ", line: " + dart.str(line)));
    }
    [_findLine](line) {
      let index = src__utils.binarySearch(this.lines, dart.fn(e => core.bool._check(dart.dsend(dart.dload(e, 'line'), '>', [line])), dynamicTobool()));
      return dart.notNull(index) <= 0 ? null : this.lines[$_get](dart.notNull(index) - 1);
    }
    [_findColumn](line, column, lineEntry) {
      if (lineEntry == null || lineEntry.entries[$length] === 0) return null;
      if (lineEntry.line != line) return lineEntry.entries[$last];
      let entries = lineEntry.entries;
      let index = src__utils.binarySearch(entries, dart.fn(e => core.bool._check(dart.dsend(dart.dload(e, 'column'), '>', [column])), dynamicTobool()));
      return dart.notNull(index) <= 0 ? null : entries[$_get](dart.notNull(index) - 1);
    }
    spanFor(line, column, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      let entry = this[_findColumn](line, column, this[_findLine](line));
      if (entry == null || entry.sourceUrlId == null) return null;
      let url = this.urls[$_get](entry.sourceUrlId);
      if (this.sourceRoot != null) {
        url = dart.str(this.sourceRoot) + dart.str(url);
      }
      if (files != null && files[$_get](url) != null) {
        let file = files[$_get](url);
        let start = file.getOffset(entry.sourceLine, entry.sourceColumn);
        if (entry.sourceNameId != null) {
          let text = this.names[$_get](entry.sourceNameId);
          return new src__source_map_span.SourceMapFileSpan.new(files[$_get](url).span(start, dart.notNull(start) + text.length), {isIdentifier: true});
        } else {
          return new src__source_map_span.SourceMapFileSpan.new(files[$_get](url).location(start).pointSpan());
        }
      } else {
        let start = new src__location.SourceLocation.new(0, {sourceUrl: this[_mapUrl] == null ? url : this[_mapUrl].resolve(url), line: entry.sourceLine, column: entry.sourceColumn});
        if (entry.sourceNameId != null) {
          return new src__source_map_span.SourceMapSpan.identifier(start, this.names[$_get](entry.sourceNameId));
        } else {
          return new src__source_map_span.SourceMapSpan.new(start, start, "");
        }
      }
    }
    toString() {
      return (() => {
        let _ = new core.StringBuffer.new(dart.str(this[$runtimeType]) + " : [");
        _.write("targetUrl: ");
        _.write(this.targetUrl);
        _.write(", sourceRoot: ");
        _.write(this.sourceRoot);
        _.write(", urls: ");
        _.write(this.urls);
        _.write(", names: ");
        _.write(this.names);
        _.write(", lines: ");
        _.write(this.lines);
        _.write("]");
        return _;
      })().toString();
    }
    get debugString() {
      let buff = new core.StringBuffer.new();
      for (let lineEntry of this.lines) {
        let line = lineEntry.line;
        for (let entry of lineEntry.entries) {
          buff.write(this.targetUrl);
          buff.write(": ");
          buff.write(line);
          buff.write(":");
          buff.write(entry.column);
          if (entry.sourceUrlId != null) {
            buff.write("   -->   ");
            buff.write(this.sourceRoot);
            buff.write(this.urls[$_get](entry.sourceUrlId));
            buff.write(": ");
            buff.write(entry.sourceLine);
            buff.write(":");
            buff.write(entry.sourceColumn);
          }
          if (entry.sourceNameId != null) {
            buff.write(" (");
            buff.write(this.names[$_get](entry.sourceNameId));
            buff.write(")");
          }
          buff.write("\n");
        }
      }
      return buff.toString();
    }
  };
  (parser.SingleMapping.__ = function(targetUrl, files, urls, names, lines) {
    this[sourceRoot] = null;
    this[targetUrl$] = targetUrl;
    this[files$] = files;
    this[urls$] = urls;
    this[names$] = names;
    this[lines$] = lines;
    this[_mapUrl] = null;
    this[extensions] = new (IdentityMapOfString$dynamic()).new();
  }).prototype = parser.SingleMapping.prototype;
  (parser.SingleMapping.fromJson = function(map, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    this[targetUrl$] = core.String._check(map[$_get]("file"));
    this[urls$] = ListOfString().from(core.Iterable._check(map[$_get]("sources")));
    this[names$] = ListOfString().from(core.Iterable._check(map[$_get]("names")));
    this[files$] = ListOfSourceFile().new(core.int._check(dart.dload(map[$_get]("sources"), 'length')));
    this[sourceRoot] = core.String._check(map[$_get]("sourceRoot"));
    this[lines$] = JSArrayOfTargetLineEntry().of([]);
    this[_mapUrl] = core.Uri._check(typeof mapUrl == 'string' ? core.Uri.parse(mapUrl) : mapUrl);
    this[extensions] = new (IdentityMapOfString$dynamic()).new();
    let sourcesContent = map[$_get]("sourcesContent") == null ? const$ || (const$ = dart.constList([], dart.dynamic)) : ListOfString().from(core.Iterable._check(map[$_get]("sourcesContent")));
    for (let i = 0; i < dart.notNull(this.urls[$length]) && i < dart.notNull(sourcesContent[$length]); i++) {
      let source = sourcesContent[$_get](i);
      if (source == null) continue;
      this.files[$_set](i, new src__file.SourceFile.fromString(core.String._check(source), {url: this.urls[$_get](i)}));
    }
    let line = 0;
    let column = 0;
    let srcUrlId = 0;
    let srcLine = 0;
    let srcColumn = 0;
    let srcNameId = 0;
    let tokenizer = new parser._MappingTokenizer.new(core.String._check(map[$_get]("mappings")));
    let entries = JSArrayOfTargetEntry().of([]);
    while (dart.test(tokenizer.hasTokens)) {
      if (dart.test(tokenizer.nextKind.isNewLine)) {
        if (!dart.test(entries[$isEmpty])) {
          this.lines[$add](new parser.TargetLineEntry.new(line, entries));
          entries = JSArrayOfTargetEntry().of([]);
        }
        line++;
        column = 0;
        tokenizer[_consumeNewLine]();
        continue;
      }
      if (dart.test(tokenizer.nextKind.isNewSegment)) dart.throw(this[_segmentError](0, line));
      column = column + dart.notNull(tokenizer[_consumeValue]());
      if (!dart.test(tokenizer.nextKind.isValue)) {
        entries[$add](new parser.TargetEntry.new(column));
      } else {
        srcUrlId = srcUrlId + dart.notNull(tokenizer[_consumeValue]());
        if (srcUrlId >= dart.notNull(this.urls[$length])) {
          dart.throw(new core.StateError.new("Invalid source url id. " + dart.str(this.targetUrl) + ", " + dart.str(line) + ", " + dart.str(srcUrlId)));
        }
        if (!dart.test(tokenizer.nextKind.isValue)) dart.throw(this[_segmentError](2, line));
        srcLine = srcLine + dart.notNull(tokenizer[_consumeValue]());
        if (!dart.test(tokenizer.nextKind.isValue)) dart.throw(this[_segmentError](3, line));
        srcColumn = srcColumn + dart.notNull(tokenizer[_consumeValue]());
        if (!dart.test(tokenizer.nextKind.isValue)) {
          entries[$add](new parser.TargetEntry.new(column, srcUrlId, srcLine, srcColumn));
        } else {
          srcNameId = srcNameId + dart.notNull(tokenizer[_consumeValue]());
          if (srcNameId >= dart.notNull(this.names[$length])) {
            dart.throw(new core.StateError.new("Invalid name id: " + dart.str(this.targetUrl) + ", " + dart.str(line) + ", " + dart.str(srcNameId)));
          }
          entries[$add](new parser.TargetEntry.new(column, srcUrlId, srcLine, srcColumn, srcNameId));
        }
      }
      if (dart.test(tokenizer.nextKind.isNewSegment)) tokenizer[_consumeNewSegment]();
    }
    if (!dart.test(entries[$isEmpty])) {
      this.lines[$add](new parser.TargetLineEntry.new(line, entries));
    }
    map[$forEach](dart.fn((name, value) => {
      if (dart.dtest(dart.dsend(name, 'startsWith', ["x_"]))) this.extensions[$_set](core.String._check(name), value);
    }, dynamicAnddynamicToNull()));
  }).prototype = parser.SingleMapping.prototype;
  dart.addTypeTests(parser.SingleMapping);
  const urls$ = Symbol("SingleMapping.urls");
  const names$ = Symbol("SingleMapping.names");
  const files$ = Symbol("SingleMapping.files");
  const lines$ = Symbol("SingleMapping.lines");
  const targetUrl$ = Symbol("SingleMapping.targetUrl");
  const sourceRoot = Symbol("SingleMapping.sourceRoot");
  const extensions = Symbol("SingleMapping.extensions");
  dart.setMethodSignature(parser.SingleMapping, () => ({
    __proto__: dart.getMethods(parser.SingleMapping.__proto__),
    toJson: dart.fnType(core.Map, [], {includeSourceContents: core.bool}),
    [_segmentError]: dart.fnType(dart.dynamic, [core.int, core.int]),
    [_findLine]: dart.fnType(parser.TargetLineEntry, [core.int]),
    [_findColumn]: dart.fnType(parser.TargetEntry, [core.int, core.int, parser.TargetLineEntry]),
    spanFor: dart.fnType(src__source_map_span.SourceMapSpan, [core.int, core.int], {files: core.Map$(core.String, src__file.SourceFile), uri: core.String})
  }));
  dart.setGetterSignature(parser.SingleMapping, () => ({
    __proto__: dart.getGetters(parser.SingleMapping.__proto__),
    debugString: core.String
  }));
  dart.setFieldSignature(parser.SingleMapping, () => ({
    __proto__: dart.getFields(parser.SingleMapping.__proto__),
    urls: dart.finalFieldType(ListOfString()),
    names: dart.finalFieldType(ListOfString()),
    files: dart.finalFieldType(ListOfSourceFile()),
    lines: dart.finalFieldType(ListOfTargetLineEntry()),
    targetUrl: dart.fieldType(core.String),
    sourceRoot: dart.fieldType(core.String),
    [_mapUrl]: dart.finalFieldType(core.Uri),
    extensions: dart.finalFieldType(MapOfString$dynamic())
  }));
  dart.defineExtensionMethods(parser.SingleMapping, ['toString']);
  parser.TargetLineEntry = class TargetLineEntry extends core.Object {
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get entries() {
      return this[entries$];
    }
    set entries(value) {
      this[entries$] = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + ": " + dart.str(this.line) + " " + dart.str(this.entries);
    }
  };
  (parser.TargetLineEntry.new = function(line, entries) {
    this[line$] = line;
    this[entries$] = entries;
  }).prototype = parser.TargetLineEntry.prototype;
  dart.addTypeTests(parser.TargetLineEntry);
  const line$ = Symbol("TargetLineEntry.line");
  const entries$ = Symbol("TargetLineEntry.entries");
  dart.setFieldSignature(parser.TargetLineEntry, () => ({
    __proto__: dart.getFields(parser.TargetLineEntry.__proto__),
    line: dart.finalFieldType(core.int),
    entries: dart.fieldType(ListOfTargetEntry())
  }));
  dart.defineExtensionMethods(parser.TargetLineEntry, ['toString']);
  parser.TargetEntry = class TargetEntry extends core.Object {
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get sourceUrlId() {
      return this[sourceUrlId$];
    }
    set sourceUrlId(value) {
      super.sourceUrlId = value;
    }
    get sourceLine() {
      return this[sourceLine$];
    }
    set sourceLine(value) {
      super.sourceLine = value;
    }
    get sourceColumn() {
      return this[sourceColumn$];
    }
    set sourceColumn(value) {
      super.sourceColumn = value;
    }
    get sourceNameId() {
      return this[sourceNameId$];
    }
    set sourceNameId(value) {
      super.sourceNameId = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + ": " + ("(" + dart.str(this.column) + ", " + dart.str(this.sourceUrlId) + ", " + dart.str(this.sourceLine) + ", " + dart.str(this.sourceColumn) + ", " + dart.str(this.sourceNameId) + ")");
    }
  };
  (parser.TargetEntry.new = function(column, sourceUrlId, sourceLine, sourceColumn, sourceNameId) {
    if (sourceUrlId === void 0) sourceUrlId = null;
    if (sourceLine === void 0) sourceLine = null;
    if (sourceColumn === void 0) sourceColumn = null;
    if (sourceNameId === void 0) sourceNameId = null;
    this[column$] = column;
    this[sourceUrlId$] = sourceUrlId;
    this[sourceLine$] = sourceLine;
    this[sourceColumn$] = sourceColumn;
    this[sourceNameId$] = sourceNameId;
  }).prototype = parser.TargetEntry.prototype;
  dart.addTypeTests(parser.TargetEntry);
  const column$ = Symbol("TargetEntry.column");
  const sourceUrlId$ = Symbol("TargetEntry.sourceUrlId");
  const sourceLine$ = Symbol("TargetEntry.sourceLine");
  const sourceColumn$ = Symbol("TargetEntry.sourceColumn");
  const sourceNameId$ = Symbol("TargetEntry.sourceNameId");
  dart.setFieldSignature(parser.TargetEntry, () => ({
    __proto__: dart.getFields(parser.TargetEntry.__proto__),
    column: dart.finalFieldType(core.int),
    sourceUrlId: dart.finalFieldType(core.int),
    sourceLine: dart.finalFieldType(core.int),
    sourceColumn: dart.finalFieldType(core.int),
    sourceNameId: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(parser.TargetEntry, ['toString']);
  const _internal = Symbol('_internal');
  const _length = Symbol('_length');
  parser._MappingTokenizer = class _MappingTokenizer extends core.Object {
    moveNext() {
      return (this.index = dart.notNull(this.index) + 1) < dart.notNull(this[_length]);
    }
    get current() {
      return dart.notNull(this.index) >= 0 && dart.notNull(this.index) < dart.notNull(this[_length]) ? this[_internal][$_get](this.index) : null;
    }
    get hasTokens() {
      return dart.notNull(this.index) < dart.notNull(this[_length]) - 1 && dart.notNull(this[_length]) > 0;
    }
    get nextKind() {
      if (!dart.test(this.hasTokens)) return parser._TokenKind.EOF;
      let next = this[_internal][$_get](dart.notNull(this.index) + 1);
      if (next === ";") return parser._TokenKind.LINE;
      if (next === ",") return parser._TokenKind.SEGMENT;
      return parser._TokenKind.VALUE;
    }
    [_consumeValue]() {
      return src__vlq.decodeVlq(this);
    }
    [_consumeNewLine]() {
      this.index = dart.notNull(this.index) + 1;
    }
    [_consumeNewSegment]() {
      this.index = dart.notNull(this.index) + 1;
    }
    toString() {
      let buff = new core.StringBuffer.new();
      for (let i = 0; i < dart.notNull(this.index); i++) {
        buff.write(this[_internal][$_get](i));
      }
      buff.write("[31m");
      buff.write(this.current == null ? "" : this.current);
      buff.write("[0m");
      for (let i = dart.notNull(this.index) + 1; i < this[_internal].length; i++) {
        buff.write(this[_internal][$_get](i));
      }
      buff.write(" (" + dart.str(this.index) + ")");
      return buff.toString();
    }
  };
  (parser._MappingTokenizer.new = function(internal) {
    this.index = -1;
    this[_internal] = internal;
    this[_length] = internal.length;
  }).prototype = parser._MappingTokenizer.prototype;
  dart.addTypeTests(parser._MappingTokenizer);
  parser._MappingTokenizer[dart.implements] = () => [IteratorOfString()];
  dart.setMethodSignature(parser._MappingTokenizer, () => ({
    __proto__: dart.getMethods(parser._MappingTokenizer.__proto__),
    moveNext: dart.fnType(core.bool, []),
    [_consumeValue]: dart.fnType(core.int, []),
    [_consumeNewLine]: dart.fnType(dart.void, []),
    [_consumeNewSegment]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(parser._MappingTokenizer, () => ({
    __proto__: dart.getGetters(parser._MappingTokenizer.__proto__),
    current: core.String,
    hasTokens: core.bool,
    nextKind: parser._TokenKind
  }));
  dart.setFieldSignature(parser._MappingTokenizer, () => ({
    __proto__: dart.getFields(parser._MappingTokenizer.__proto__),
    [_internal]: dart.finalFieldType(core.String),
    [_length]: dart.finalFieldType(core.int),
    index: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(parser._MappingTokenizer, ['toString']);
  parser._TokenKind = class _TokenKind extends core.Object {
    get isValue() {
      return !dart.test(this.isNewLine) && !dart.test(this.isNewSegment) && !dart.test(this.isEof);
    }
  };
  (parser._TokenKind.new = function(opts) {
    let isNewLine = opts && 'isNewLine' in opts ? opts.isNewLine : false;
    let isNewSegment = opts && 'isNewSegment' in opts ? opts.isNewSegment : false;
    let isEof = opts && 'isEof' in opts ? opts.isEof : false;
    this.isNewLine = isNewLine;
    this.isNewSegment = isNewSegment;
    this.isEof = isEof;
  }).prototype = parser._TokenKind.prototype;
  dart.addTypeTests(parser._TokenKind);
  dart.setGetterSignature(parser._TokenKind, () => ({
    __proto__: dart.getGetters(parser._TokenKind.__proto__),
    isValue: core.bool
  }));
  dart.setFieldSignature(parser._TokenKind, () => ({
    __proto__: dart.getFields(parser._TokenKind.__proto__),
    isNewLine: dart.finalFieldType(core.bool),
    isNewSegment: dart.finalFieldType(core.bool),
    isEof: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(parser._TokenKind, {
    /*parser._TokenKind.LINE*/get LINE() {
      return dart.const(new parser._TokenKind.new({isNewLine: true}));
    },
    /*parser._TokenKind.SEGMENT*/get SEGMENT() {
      return dart.const(new parser._TokenKind.new({isNewSegment: true}));
    },
    /*parser._TokenKind.EOF*/get EOF() {
      return dart.const(new parser._TokenKind.new({isEof: true}));
    },
    /*parser._TokenKind.VALUE*/get VALUE() {
      return dart.const(new parser._TokenKind.new());
    }
  });
  const _entries = Symbol('_entries');
  builder.SourceMapBuilder = class SourceMapBuilder extends core.Object {
    addFromOffset(source, targetFile, targetOffset, identifier) {
      if (targetFile == null) {
        dart.throw(new core.ArgumentError.new("targetFile cannot be null"));
      }
      this[_entries][$add](new builder.Entry.new(source, targetFile.location(targetOffset), identifier));
    }
    addSpan(source, target, opts) {
      let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : null;
      if (isIdentifier == null) {
        isIdentifier = src__source_map_span.SourceMapSpan.is(source) ? source.isIdentifier : false;
      }
      let name = dart.test(isIdentifier) ? source.text : null;
      this[_entries][$add](new builder.Entry.new(source.start, target.start, name));
    }
    addLocation(source, target, identifier) {
      this[_entries][$add](new builder.Entry.new(source, target, identifier));
    }
    build(fileUrl) {
      return parser.SingleMapping.fromEntries(this[_entries], fileUrl).toJson();
    }
    toJson(fileUrl) {
      return convert.jsonEncode(this.build(fileUrl));
    }
  };
  (builder.SourceMapBuilder.new = function() {
    this[_entries] = JSArrayOfEntry().of([]);
  }).prototype = builder.SourceMapBuilder.prototype;
  dart.addTypeTests(builder.SourceMapBuilder);
  dart.setMethodSignature(builder.SourceMapBuilder, () => ({
    __proto__: dart.getMethods(builder.SourceMapBuilder.__proto__),
    addFromOffset: dart.fnType(dart.void, [src__location.SourceLocation, src__file.SourceFile, core.int, core.String]),
    addSpan: dart.fnType(dart.void, [src__span.SourceSpan, src__span.SourceSpan], {isIdentifier: core.bool}),
    addLocation: dart.fnType(dart.void, [src__location.SourceLocation, src__location.SourceLocation, core.String]),
    build: dart.fnType(core.Map, [core.String]),
    toJson: dart.fnType(core.String, [core.String])
  }));
  dart.setFieldSignature(builder.SourceMapBuilder, () => ({
    __proto__: dart.getFields(builder.SourceMapBuilder.__proto__),
    [_entries]: dart.finalFieldType(ListOfEntry())
  }));
  builder.Entry = class Entry extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get identifierName() {
      return this[identifierName$];
    }
    set identifierName(value) {
      super.identifierName = value;
    }
    compareTo(other) {
      builder.Entry._check(other);
      let res = this.target.compareTo(other.target);
      if (res !== 0) return res;
      res = dart.toString(this.source.sourceUrl)[$compareTo](dart.toString(other.source.sourceUrl));
      if (res !== 0) return res;
      return this.source.compareTo(other.source);
    }
  };
  (builder.Entry.new = function(source, target, identifierName) {
    this[source$] = source;
    this[target$] = target;
    this[identifierName$] = identifierName;
  }).prototype = builder.Entry.prototype;
  dart.addTypeTests(builder.Entry);
  const source$ = Symbol("Entry.source");
  const target$ = Symbol("Entry.target");
  const identifierName$ = Symbol("Entry.identifierName");
  builder.Entry[dart.implements] = () => [ComparableOfEntry()];
  dart.setMethodSignature(builder.Entry, () => ({
    __proto__: dart.getMethods(builder.Entry.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setFieldSignature(builder.Entry, () => ({
    __proto__: dart.getFields(builder.Entry.__proto__),
    source: dart.finalFieldType(src__location.SourceLocation),
    target: dart.finalFieldType(src__location.SourceLocation),
    identifierName: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(builder.Entry, ['compareTo']);
  dart.trackLibraries("packages/source_maps/builder.ddc", {
    "package:source_maps/parser.dart": parser,
    "package:source_maps/builder.dart": builder
  }, '{"version":3,"sourceRoot":"","sources":["parser.dart","builder.dart"],"names":[],"mappings":"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","file":"builder.ddc.js"}');
  // Exports:
  return {
    parser: parser,
    builder: builder
  };
});

//# sourceMappingURL=builder.ddc.js.map
