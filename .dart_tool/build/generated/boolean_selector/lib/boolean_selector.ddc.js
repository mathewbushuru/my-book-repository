define(['dart_sdk', 'packages/source_span/source_span', 'packages/string_scanner/string_scanner'], function(dart_sdk, source_span, string_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__file = source_span.src__file;
  const src__span_exception = source_span.src__span_exception;
  const src__span_scanner = string_scanner.src__span_scanner;
  const _root = Object.create(null);
  const src__none = Object.create(_root);
  const src__union_selector = Object.create(_root);
  const src__intersection_selector = Object.create(_root);
  const src__impl = Object.create(_root);
  const src__all = Object.create(_root);
  const boolean_selector = Object.create(_root);
  const src__visitor = Object.create(_root);
  const src__ast = Object.create(_root);
  const src__evaluator = Object.create(_root);
  const src__token = Object.create(_root);
  const src__scanner = Object.create(_root);
  const src__parser = Object.create(_root);
  const src__validator = Object.create(_root);
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $hashCode = dartx.hashCode;
  const $toSet = dartx.toSet;
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let VisitorOfbool = () => (VisitorOfbool = dart.constFn(src__visitor.Visitor$(core.bool)))();
  let const$;
  src__none.None = class None extends core.Object {
    get variables() {
      return this[variables];
    }
    set variables(value) {
      super.variables = value;
    }
    evaluate(semantics) {
      return false;
    }
    intersection(other) {
      return this;
    }
    union(other) {
      return other;
    }
    validate(isDefined) {}
    toString() {
      return "<none>";
    }
  };
  (src__none.None.new = function() {
    this[variables] = const$ || (const$ = dart.constList([], core.String));
  }).prototype = src__none.None.prototype;
  dart.addTypeTests(src__none.None);
  const variables = Symbol("None.variables");
  src__none.None[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__none.None, () => ({
    __proto__: dart.getMethods(src__none.None.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setFieldSignature(src__none.None, () => ({
    __proto__: dart.getFields(src__none.None.__proto__),
    variables: dart.finalFieldType(IterableOfString())
  }));
  dart.defineExtensionMethods(src__none.None, ['toString']);
  const _selector1 = Symbol('_selector1');
  const _selector2 = Symbol('_selector2');
  src__union_selector.UnionSelector = class UnionSelector extends core.Object {
    get variables() {
      let _ = this[_selector1].variables[$toList]();
      _[$addAll](this[_selector2].variables);
      return _;
    }
    evaluate(semantics) {
      return dart.test(this[_selector1].evaluate(semantics)) || dart.test(this[_selector2].evaluate(semantics));
    }
    intersection(other) {
      return new src__intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      return new src__union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector1].validate(isDefined);
      this[_selector2].validate(isDefined);
    }
    toString() {
      return "(" + dart.str(this[_selector1]) + ") && (" + dart.str(this[_selector2]) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return src__union_selector.UnionSelector.is(other) && dart.equals(this[_selector1], other[_selector1]) && dart.equals(this[_selector2], other[_selector2]);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[_selector1])) ^ dart.notNull(dart.hashCode(this[_selector2]))) >>> 0;
    }
  };
  (src__union_selector.UnionSelector.new = function(selector1, selector2) {
    this[_selector1] = selector1;
    this[_selector2] = selector2;
  }).prototype = src__union_selector.UnionSelector.prototype;
  dart.addTypeTests(src__union_selector.UnionSelector);
  src__union_selector.UnionSelector[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__union_selector.UnionSelector, () => ({
    __proto__: dart.getMethods(src__union_selector.UnionSelector.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setGetterSignature(src__union_selector.UnionSelector, () => ({
    __proto__: dart.getGetters(src__union_selector.UnionSelector.__proto__),
    variables: core.List$(core.String)
  }));
  dart.setFieldSignature(src__union_selector.UnionSelector, () => ({
    __proto__: dart.getFields(src__union_selector.UnionSelector.__proto__),
    [_selector1]: dart.finalFieldType(boolean_selector.BooleanSelector),
    [_selector2]: dart.finalFieldType(boolean_selector.BooleanSelector)
  }));
  dart.defineExtensionMethods(src__union_selector.UnionSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__union_selector.UnionSelector, ['hashCode']);
  const _selector1$ = Symbol('_selector1');
  const _selector2$ = Symbol('_selector2');
  src__intersection_selector.IntersectionSelector = class IntersectionSelector extends core.Object {
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this[_selector1$].variables;
        yield* this[_selector2$].variables;
      }).bind(this));
    }
    evaluate(semantics) {
      return dart.test(this[_selector1$].evaluate(semantics)) && dart.test(this[_selector2$].evaluate(semantics));
    }
    intersection(other) {
      return new src__intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      return new src__union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector1$].validate(isDefined);
      this[_selector2$].validate(isDefined);
    }
    toString() {
      return "(" + dart.str(this[_selector1$]) + ") && (" + dart.str(this[_selector2$]) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return src__intersection_selector.IntersectionSelector.is(other) && dart.equals(this[_selector1$], other[_selector1$]) && dart.equals(this[_selector2$], other[_selector2$]);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[_selector1$])) ^ dart.notNull(dart.hashCode(this[_selector2$]))) >>> 0;
    }
  };
  (src__intersection_selector.IntersectionSelector.new = function(selector1, selector2) {
    this[_selector1$] = selector1;
    this[_selector2$] = selector2;
  }).prototype = src__intersection_selector.IntersectionSelector.prototype;
  dart.addTypeTests(src__intersection_selector.IntersectionSelector);
  src__intersection_selector.IntersectionSelector[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getMethods(src__intersection_selector.IntersectionSelector.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setGetterSignature(src__intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getGetters(src__intersection_selector.IntersectionSelector.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getFields(src__intersection_selector.IntersectionSelector.__proto__),
    [_selector1$]: dart.finalFieldType(boolean_selector.BooleanSelector),
    [_selector2$]: dart.finalFieldType(boolean_selector.BooleanSelector)
  }));
  dart.defineExtensionMethods(src__intersection_selector.IntersectionSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__intersection_selector.IntersectionSelector, ['hashCode']);
  const _selector = Symbol('_selector');
  src__impl.BooleanSelectorImpl = class BooleanSelectorImpl extends core.Object {
    get variables() {
      return this[_selector].variables;
    }
    evaluate(semantics) {
      return core.bool._check(this[_selector].accept(new src__evaluator.Evaluator.new(semantics)));
    }
    intersection(other) {
      if (dart.equals(other, boolean_selector.BooleanSelector.all)) return this;
      if (dart.equals(other, boolean_selector.BooleanSelector.none)) return other;
      return src__impl.BooleanSelectorImpl.is(other) ? new src__impl.BooleanSelectorImpl.__(new src__ast.AndNode.new(this[_selector], other[_selector])) : new src__intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      if (dart.equals(other, boolean_selector.BooleanSelector.all)) return other;
      if (dart.equals(other, boolean_selector.BooleanSelector.none)) return this;
      return src__impl.BooleanSelectorImpl.is(other) ? new src__impl.BooleanSelectorImpl.__(new src__ast.OrNode.new(this[_selector], other[_selector])) : new src__union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector].accept(new src__validator.Validator.new(isDefined));
    }
    toString() {
      return dart.toString(this[_selector]);
    }
    _equals(other) {
      if (other == null) return false;
      return src__impl.BooleanSelectorImpl.is(other) && dart.equals(this[_selector], other[_selector]);
    }
    get hashCode() {
      return dart.hashCode(this[_selector]);
    }
  };
  (src__impl.BooleanSelectorImpl.parse = function(selector) {
    this[_selector] = new src__parser.Parser.new(selector).parse();
  }).prototype = src__impl.BooleanSelectorImpl.prototype;
  (src__impl.BooleanSelectorImpl.__ = function(selector) {
    this[_selector] = selector;
  }).prototype = src__impl.BooleanSelectorImpl.prototype;
  dart.addTypeTests(src__impl.BooleanSelectorImpl);
  src__impl.BooleanSelectorImpl[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getMethods(src__impl.BooleanSelectorImpl.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setGetterSignature(src__impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getGetters(src__impl.BooleanSelectorImpl.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getFields(src__impl.BooleanSelectorImpl.__proto__),
    [_selector]: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__impl.BooleanSelectorImpl, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__impl.BooleanSelectorImpl, ['hashCode']);
  let const$0;
  src__all.All = class All extends core.Object {
    get variables() {
      return this[variables$];
    }
    set variables(value) {
      super.variables = value;
    }
    evaluate(semantics) {
      return true;
    }
    intersection(other) {
      return other;
    }
    union(other) {
      return this;
    }
    validate(isDefined) {}
    toString() {
      return "<all>";
    }
  };
  (src__all.All.new = function() {
    this[variables$] = const$0 || (const$0 = dart.constList([], core.String));
  }).prototype = src__all.All.prototype;
  dart.addTypeTests(src__all.All);
  const variables$ = Symbol("All.variables");
  src__all.All[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__all.All, () => ({
    __proto__: dart.getMethods(src__all.All.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setFieldSignature(src__all.All, () => ({
    __proto__: dart.getFields(src__all.All.__proto__),
    variables: dart.finalFieldType(IterableOfString())
  }));
  dart.defineExtensionMethods(src__all.All, ['toString']);
  boolean_selector.BooleanSelector = class BooleanSelector extends core.Object {
    static parse(selector) {
      return new src__impl.BooleanSelectorImpl.parse(selector);
    }
  };
  (boolean_selector.BooleanSelector[dart.mixinNew] = function() {
  }).prototype = boolean_selector.BooleanSelector.prototype;
  dart.addTypeTests(boolean_selector.BooleanSelector);
  dart.defineLazy(boolean_selector.BooleanSelector, {
    /*boolean_selector.BooleanSelector.all*/get all() {
      return dart.const(new src__all.All.new());
    },
    /*boolean_selector.BooleanSelector.none*/get none() {
      return dart.const(new src__none.None.new());
    }
  });
  const _is_Visitor_default = Symbol('_is_Visitor_default');
  src__visitor.Visitor$ = dart.generic(T => {
    class Visitor extends core.Object {}
    (Visitor.new = function() {
    }).prototype = Visitor.prototype;
    dart.addTypeTests(Visitor);
    Visitor.prototype[_is_Visitor_default] = true;
    return Visitor;
  });
  src__visitor.Visitor = src__visitor.Visitor$();
  dart.addTypeTests(src__visitor.Visitor, _is_Visitor_default);
  src__visitor.RecursiveVisitor = class RecursiveVisitor extends core.Object {
    visitVariable(node) {}
    visitNot(node) {
      node.child.accept(this);
    }
    visitOr(node) {
      node.left.accept(this);
      node.right.accept(this);
    }
    visitAnd(node) {
      node.left.accept(this);
      node.right.accept(this);
    }
    visitConditional(node) {
      node.condition.accept(this);
      node.whenTrue.accept(this);
      node.whenFalse.accept(this);
    }
  };
  (src__visitor.RecursiveVisitor.new = function() {
  }).prototype = src__visitor.RecursiveVisitor.prototype;
  dart.addTypeTests(src__visitor.RecursiveVisitor);
  src__visitor.RecursiveVisitor[dart.implements] = () => [src__visitor.Visitor];
  dart.setMethodSignature(src__visitor.RecursiveVisitor, () => ({
    __proto__: dart.getMethods(src__visitor.RecursiveVisitor.__proto__),
    visitVariable: dart.fnType(dart.void, [src__ast.VariableNode]),
    visitNot: dart.fnType(dart.void, [src__ast.NotNode]),
    visitOr: dart.fnType(dart.void, [src__ast.OrNode]),
    visitAnd: dart.fnType(dart.void, [src__ast.AndNode]),
    visitConditional: dart.fnType(dart.void, [src__ast.ConditionalNode])
  }));
  src__ast.Node = class Node extends core.Object {};
  (src__ast.Node.new = function() {
  }).prototype = src__ast.Node.prototype;
  dart.addTypeTests(src__ast.Node);
  src__ast.VariableNode = class VariableNode extends core.Object {
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get variables() {
      return JSArrayOfString().of([this.name]);
    }
    accept(visitor) {
      return visitor.visitVariable(this);
    }
    toString() {
      return this.name;
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.VariableNode.is(other) && this.name == other.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (src__ast.VariableNode.new = function(name, span) {
    if (span === void 0) span = null;
    this[name$] = name;
    this[span$] = span;
  }).prototype = src__ast.VariableNode.prototype;
  dart.addTypeTests(src__ast.VariableNode);
  const span$ = Symbol("VariableNode.span");
  const name$ = Symbol("VariableNode.name");
  src__ast.VariableNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.VariableNode, () => ({
    __proto__: dart.getMethods(src__ast.VariableNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.VariableNode, () => ({
    __proto__: dart.getGetters(src__ast.VariableNode.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__ast.VariableNode, () => ({
    __proto__: dart.getFields(src__ast.VariableNode.__proto__),
    span: dart.finalFieldType(src__file.FileSpan),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__ast.VariableNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.VariableNode, ['hashCode']);
  src__ast.NotNode = class NotNode extends core.Object {
    get span() {
      return this[span$0];
    }
    set span(value) {
      super.span = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get variables() {
      return this.child.variables;
    }
    accept(visitor) {
      return visitor.visitNot(this);
    }
    toString() {
      return src__ast.VariableNode.is(this.child) || src__ast.NotNode.is(this.child) ? "!" + dart.str(this.child) : "!(" + dart.str(this.child) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.NotNode.is(other) && dart.equals(this.child, other.child);
    }
    get hashCode() {
      return ~dart.notNull(dart.hashCode(this.child)) >>> 0;
    }
  };
  (src__ast.NotNode.new = function(child, span) {
    if (span === void 0) span = null;
    this[child$] = child;
    this[span$0] = span;
  }).prototype = src__ast.NotNode.prototype;
  dart.addTypeTests(src__ast.NotNode);
  const span$0 = Symbol("NotNode.span");
  const child$ = Symbol("NotNode.child");
  src__ast.NotNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.NotNode, () => ({
    __proto__: dart.getMethods(src__ast.NotNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.NotNode, () => ({
    __proto__: dart.getGetters(src__ast.NotNode.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__ast.NotNode, () => ({
    __proto__: dart.getFields(src__ast.NotNode.__proto__),
    span: dart.finalFieldType(src__file.FileSpan),
    child: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.NotNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.NotNode, ['hashCode']);
  src__ast.OrNode = class OrNode extends core.Object {
    get span() {
      return src__ast._expandSafe(this.left.span, this.right.span);
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.left.variables;
        yield* this.right.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitOr(this);
    }
    toString() {
      let string1 = src__ast.AndNode.is(this.left) || src__ast.ConditionalNode.is(this.left) ? "(" + dart.str(this.left) + ")" : this.left;
      let string2 = src__ast.AndNode.is(this.right) || src__ast.ConditionalNode.is(this.right) ? "(" + dart.str(this.right) + ")" : this.right;
      return dart.str(string1) + " || " + dart.str(string2);
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.OrNode.is(other) && dart.equals(this.left, other.left) && dart.equals(this.right, other.right);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.left)) ^ dart.notNull(dart.hashCode(this.right))) >>> 0;
    }
  };
  (src__ast.OrNode.new = function(left, right) {
    this[left$] = left;
    this[right$] = right;
  }).prototype = src__ast.OrNode.prototype;
  dart.addTypeTests(src__ast.OrNode);
  const left$ = Symbol("OrNode.left");
  const right$ = Symbol("OrNode.right");
  src__ast.OrNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.OrNode, () => ({
    __proto__: dart.getMethods(src__ast.OrNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.OrNode, () => ({
    __proto__: dart.getGetters(src__ast.OrNode.__proto__),
    span: src__file.FileSpan,
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__ast.OrNode, () => ({
    __proto__: dart.getFields(src__ast.OrNode.__proto__),
    left: dart.finalFieldType(src__ast.Node),
    right: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.OrNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.OrNode, ['hashCode']);
  src__ast.AndNode = class AndNode extends core.Object {
    get span() {
      return src__ast._expandSafe(this.left.span, this.right.span);
    }
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.left.variables;
        yield* this.right.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitAnd(this);
    }
    toString() {
      let string1 = src__ast.OrNode.is(this.left) || src__ast.ConditionalNode.is(this.left) ? "(" + dart.str(this.left) + ")" : this.left;
      let string2 = src__ast.OrNode.is(this.right) || src__ast.ConditionalNode.is(this.right) ? "(" + dart.str(this.right) + ")" : this.right;
      return dart.str(string1) + " && " + dart.str(string2);
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.AndNode.is(other) && dart.equals(this.left, other.left) && dart.equals(this.right, other.right);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.left)) ^ dart.notNull(dart.hashCode(this.right))) >>> 0;
    }
  };
  (src__ast.AndNode.new = function(left, right) {
    this[left$0] = left;
    this[right$0] = right;
  }).prototype = src__ast.AndNode.prototype;
  dart.addTypeTests(src__ast.AndNode);
  const left$0 = Symbol("AndNode.left");
  const right$0 = Symbol("AndNode.right");
  src__ast.AndNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.AndNode, () => ({
    __proto__: dart.getMethods(src__ast.AndNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.AndNode, () => ({
    __proto__: dart.getGetters(src__ast.AndNode.__proto__),
    span: src__file.FileSpan,
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__ast.AndNode, () => ({
    __proto__: dart.getFields(src__ast.AndNode.__proto__),
    left: dart.finalFieldType(src__ast.Node),
    right: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.AndNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.AndNode, ['hashCode']);
  src__ast.ConditionalNode = class ConditionalNode extends core.Object {
    get span() {
      return src__ast._expandSafe(this.condition.span, this.whenFalse.span);
    }
    get condition() {
      return this[condition$];
    }
    set condition(value) {
      super.condition = value;
    }
    get whenTrue() {
      return this[whenTrue$];
    }
    set whenTrue(value) {
      super.whenTrue = value;
    }
    get whenFalse() {
      return this[whenFalse$];
    }
    set whenFalse(value) {
      super.whenFalse = value;
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.condition.variables;
        yield* this.whenTrue.variables;
        yield* this.whenFalse.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitConditional(this);
    }
    toString() {
      let conditionString = src__ast.ConditionalNode.is(this.condition) ? "(" + dart.str(this.condition) + ")" : this.condition;
      let trueString = src__ast.ConditionalNode.is(this.whenTrue) ? "(" + dart.str(this.whenTrue) + ")" : this.whenTrue;
      return dart.str(conditionString) + " ? " + dart.str(trueString) + " : " + dart.str(this.whenFalse);
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.ConditionalNode.is(other) && dart.equals(this.condition, other.condition) && dart.equals(this.whenTrue, other.whenTrue) && dart.equals(this.whenFalse, other.whenFalse);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.condition)) ^ dart.notNull(dart.hashCode(this.whenTrue)) ^ dart.notNull(dart.hashCode(this.whenFalse))) >>> 0;
    }
  };
  (src__ast.ConditionalNode.new = function(condition, whenTrue, whenFalse) {
    this[condition$] = condition;
    this[whenTrue$] = whenTrue;
    this[whenFalse$] = whenFalse;
  }).prototype = src__ast.ConditionalNode.prototype;
  dart.addTypeTests(src__ast.ConditionalNode);
  const condition$ = Symbol("ConditionalNode.condition");
  const whenTrue$ = Symbol("ConditionalNode.whenTrue");
  const whenFalse$ = Symbol("ConditionalNode.whenFalse");
  src__ast.ConditionalNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.ConditionalNode, () => ({
    __proto__: dart.getMethods(src__ast.ConditionalNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.ConditionalNode, () => ({
    __proto__: dart.getGetters(src__ast.ConditionalNode.__proto__),
    span: src__file.FileSpan,
    variables: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__ast.ConditionalNode, () => ({
    __proto__: dart.getFields(src__ast.ConditionalNode.__proto__),
    condition: dart.finalFieldType(src__ast.Node),
    whenTrue: dart.finalFieldType(src__ast.Node),
    whenFalse: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.ConditionalNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.ConditionalNode, ['hashCode']);
  src__ast._expandSafe = function(start, end) {
    if (start == null || end == null) return null;
    if (!dart.equals(start.file, end.file)) return null;
    return start.expand(end);
  };
  const _semantics = Symbol('_semantics');
  src__evaluator.Evaluator = class Evaluator extends core.Object {
    visitVariable(node) {
      return this[_semantics](node.name);
    }
    visitNot(node) {
      return !dart.dtest(node.child.accept(this));
    }
    visitOr(node) {
      return dart.dtest(node.left.accept(this)) || dart.dtest(node.right.accept(this));
    }
    visitAnd(node) {
      return dart.dtest(node.left.accept(this)) && dart.dtest(node.right.accept(this));
    }
    visitConditional(node) {
      return core.bool._check(dart.dtest(node.condition.accept(this)) ? node.whenTrue.accept(this) : node.whenFalse.accept(this));
    }
  };
  (src__evaluator.Evaluator.new = function(semantics) {
    this[_semantics] = core.Iterable.is(semantics) ? dart.bind(semantics[$toSet](), 'contains') : StringTobool().as(semantics);
  }).prototype = src__evaluator.Evaluator.prototype;
  dart.addTypeTests(src__evaluator.Evaluator);
  src__evaluator.Evaluator[dart.implements] = () => [VisitorOfbool()];
  dart.setMethodSignature(src__evaluator.Evaluator, () => ({
    __proto__: dart.getMethods(src__evaluator.Evaluator.__proto__),
    visitVariable: dart.fnType(core.bool, [src__ast.VariableNode]),
    visitNot: dart.fnType(core.bool, [src__ast.NotNode]),
    visitOr: dart.fnType(core.bool, [src__ast.OrNode]),
    visitAnd: dart.fnType(core.bool, [src__ast.AndNode]),
    visitConditional: dart.fnType(core.bool, [src__ast.ConditionalNode])
  }));
  dart.setFieldSignature(src__evaluator.Evaluator, () => ({
    __proto__: dart.getFields(src__evaluator.Evaluator.__proto__),
    [_semantics]: dart.finalFieldType(StringTobool())
  }));
  src__token.Token = class Token extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get span() {
      return this[span$1];
    }
    set span(value) {
      super.span = value;
    }
  };
  (src__token.Token.new = function(type, span) {
    this[type$] = type;
    this[span$1] = span;
  }).prototype = src__token.Token.prototype;
  dart.addTypeTests(src__token.Token);
  const type$ = Symbol("Token.type");
  const span$1 = Symbol("Token.span");
  dart.setFieldSignature(src__token.Token, () => ({
    __proto__: dart.getFields(src__token.Token.__proto__),
    type: dart.finalFieldType(src__token.TokenType),
    span: dart.finalFieldType(src__file.FileSpan)
  }));
  src__token.IdentifierToken = class IdentifierToken extends core.Object {
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get span() {
      return this[span$2];
    }
    set span(value) {
      super.span = value;
    }
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return "identifier \"" + dart.str(this.name) + "\"";
    }
  };
  (src__token.IdentifierToken.new = function(name, span) {
    this[type] = src__token.TokenType.identifier;
    this[name$0] = name;
    this[span$2] = span;
  }).prototype = src__token.IdentifierToken.prototype;
  dart.addTypeTests(src__token.IdentifierToken);
  const type = Symbol("IdentifierToken.type");
  const span$2 = Symbol("IdentifierToken.span");
  const name$0 = Symbol("IdentifierToken.name");
  src__token.IdentifierToken[dart.implements] = () => [src__token.Token];
  dart.setFieldSignature(src__token.IdentifierToken, () => ({
    __proto__: dart.getFields(src__token.IdentifierToken.__proto__),
    type: dart.finalFieldType(src__token.TokenType),
    span: dart.finalFieldType(src__file.FileSpan),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__token.IdentifierToken, ['toString']);
  src__token.TokenType = class TokenType extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (src__token.TokenType.__ = function(name) {
    this[name$1] = name;
  }).prototype = src__token.TokenType.prototype;
  dart.addTypeTests(src__token.TokenType);
  const name$1 = Symbol("TokenType.name");
  dart.setFieldSignature(src__token.TokenType, () => ({
    __proto__: dart.getFields(src__token.TokenType.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__token.TokenType, ['toString']);
  dart.defineLazy(src__token.TokenType, {
    /*src__token.TokenType.leftParen*/get leftParen() {
      return dart.const(new src__token.TokenType.__("left paren"));
    },
    /*src__token.TokenType.rightParen*/get rightParen() {
      return dart.const(new src__token.TokenType.__("right paren"));
    },
    /*src__token.TokenType.or*/get or() {
      return dart.const(new src__token.TokenType.__("or"));
    },
    /*src__token.TokenType.and*/get and() {
      return dart.const(new src__token.TokenType.__("and"));
    },
    /*src__token.TokenType.not*/get not() {
      return dart.const(new src__token.TokenType.__("not"));
    },
    /*src__token.TokenType.questionMark*/get questionMark() {
      return dart.const(new src__token.TokenType.__("question mark"));
    },
    /*src__token.TokenType.colon*/get colon() {
      return dart.const(new src__token.TokenType.__("colon"));
    },
    /*src__token.TokenType.identifier*/get identifier() {
      return dart.const(new src__token.TokenType.__("identifier"));
    },
    /*src__token.TokenType.endOfFile*/get endOfFile() {
      return dart.const(new src__token.TokenType.__("end of file"));
    }
  });
  dart.defineLazy(src__scanner, {
    /*src__scanner._whitespaceAndSingleLineComments*/get _whitespaceAndSingleLineComments() {
      return core.RegExp.new("([ \\t\\n]+|//[^\\n]*(\\n|$))+");
    },
    /*src__scanner._multiLineCommentBody*/get _multiLineCommentBody() {
      return core.RegExp.new("([^/*]|/[^*]|\\*[^/])+");
    },
    /*src__scanner._hyphenatedIdentifier*/get _hyphenatedIdentifier() {
      return core.RegExp.new("[a-zA-Z_-][a-zA-Z0-9_-]*");
    }
  });
  const _scanner = Symbol('_scanner');
  const _next = Symbol('_next');
  const _endOfFileEmitted = Symbol('_endOfFileEmitted');
  const _getNext = Symbol('_getNext');
  const _consumeWhitespace = Symbol('_consumeWhitespace');
  const _scanOperator = Symbol('_scanOperator');
  const _scanOr = Symbol('_scanOr');
  const _scanAnd = Symbol('_scanAnd');
  const _scanIdentifier = Symbol('_scanIdentifier');
  const _multiLineComment = Symbol('_multiLineComment');
  src__scanner.Scanner = class Scanner extends core.Object {
    peek() {
      if (this[_next] == null) this[_next] = this[_getNext]();
      return this[_next];
    }
    next() {
      let token = this[_next] == null ? this[_getNext]() : this[_next];
      this[_endOfFileEmitted] = dart.equals(token.type, src__token.TokenType.endOfFile);
      this[_next] = null;
      return token;
    }
    scan(type) {
      if (!dart.equals(this.peek().type, type)) return false;
      this.next();
      return true;
    }
    [_getNext]() {
      if (dart.test(this[_endOfFileEmitted])) dart.throw(new core.StateError.new("No more tokens."));
      this[_consumeWhitespace]();
      if (dart.test(this[_scanner].isDone)) {
        return new src__token.Token.new(src__token.TokenType.endOfFile, this[_scanner].spanFrom(this[_scanner].state));
      }
      switch (this[_scanner].peekChar()) {
        case 40:
        {
          return this[_scanOperator](src__token.TokenType.leftParen);
        }
        case 41:
        {
          return this[_scanOperator](src__token.TokenType.rightParen);
        }
        case 63:
        {
          return this[_scanOperator](src__token.TokenType.questionMark);
        }
        case 58:
        {
          return this[_scanOperator](src__token.TokenType.colon);
        }
        case 33:
        {
          return this[_scanOperator](src__token.TokenType.not);
        }
        case 124:
        {
          return this[_scanOr]();
        }
        case 38:
        {
          return this[_scanAnd]();
        }
        default:
        {
          return this[_scanIdentifier]();
        }
      }
    }
    [_scanOperator](type) {
      let start = this[_scanner].state;
      this[_scanner].readChar();
      return new src__token.Token.new(type, this[_scanner].spanFrom(start));
    }
    [_scanOr]() {
      let start = this[_scanner].state;
      this[_scanner].expect("||");
      return new src__token.Token.new(src__token.TokenType.or, this[_scanner].spanFrom(start));
    }
    [_scanAnd]() {
      let start = this[_scanner].state;
      this[_scanner].expect("&&");
      return new src__token.Token.new(src__token.TokenType.and, this[_scanner].spanFrom(start));
    }
    [_scanIdentifier]() {
      this[_scanner].expect(src__scanner._hyphenatedIdentifier, {name: "expression"});
      return new src__token.IdentifierToken.new(this[_scanner].lastMatch._get(0), this[_scanner].lastSpan);
    }
    [_consumeWhitespace]() {
      while (dart.test(this[_scanner].scan(src__scanner._whitespaceAndSingleLineComments)) || dart.test(this[_multiLineComment]())) {
      }
    }
    [_multiLineComment]() {
      if (!dart.test(this[_scanner].scan("/*"))) return false;
      while (dart.test(this[_scanner].scan(src__scanner._multiLineCommentBody)) || dart.test(this[_multiLineComment]())) {
      }
      this[_scanner].expect("*/");
      return true;
    }
  };
  (src__scanner.Scanner.new = function(selector) {
    this[_next] = null;
    this[_endOfFileEmitted] = false;
    this[_scanner] = new src__span_scanner.SpanScanner.new(selector);
  }).prototype = src__scanner.Scanner.prototype;
  dart.addTypeTests(src__scanner.Scanner);
  dart.setMethodSignature(src__scanner.Scanner, () => ({
    __proto__: dart.getMethods(src__scanner.Scanner.__proto__),
    peek: dart.fnType(src__token.Token, []),
    next: dart.fnType(src__token.Token, []),
    scan: dart.fnType(core.bool, [src__token.TokenType]),
    [_getNext]: dart.fnType(src__token.Token, []),
    [_scanOperator]: dart.fnType(src__token.Token, [src__token.TokenType]),
    [_scanOr]: dart.fnType(src__token.Token, []),
    [_scanAnd]: dart.fnType(src__token.Token, []),
    [_scanIdentifier]: dart.fnType(src__token.Token, []),
    [_consumeWhitespace]: dart.fnType(dart.void, []),
    [_multiLineComment]: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__scanner.Scanner, () => ({
    __proto__: dart.getFields(src__scanner.Scanner.__proto__),
    [_scanner]: dart.finalFieldType(src__span_scanner.SpanScanner),
    [_next]: dart.fieldType(src__token.Token),
    [_endOfFileEmitted]: dart.fieldType(core.bool)
  }));
  const _scanner$ = Symbol('_scanner');
  const _conditional = Symbol('_conditional');
  const _or = Symbol('_or');
  const _and = Symbol('_and');
  const _simpleExpression = Symbol('_simpleExpression');
  src__parser.Parser = class Parser extends core.Object {
    parse() {
      let selector = this[_conditional]();
      if (!dart.equals(this[_scanner$].peek().type, src__token.TokenType.endOfFile)) {
        dart.throw(new src__span_exception.SourceSpanFormatException.new("Expected end of input.", this[_scanner$].peek().span));
      }
      return selector;
    }
    [_conditional]() {
      let condition = this[_or]();
      if (!dart.test(this[_scanner$].scan(src__token.TokenType.questionMark))) return condition;
      let whenTrue = this[_conditional]();
      if (!dart.test(this[_scanner$].scan(src__token.TokenType.colon))) {
        dart.throw(new src__span_exception.SourceSpanFormatException.new("Expected \":\".", this[_scanner$].peek().span));
      }
      let whenFalse = this[_conditional]();
      return new src__ast.ConditionalNode.new(condition, whenTrue, whenFalse);
    }
    [_or]() {
      let left = this[_and]();
      if (!dart.test(this[_scanner$].scan(src__token.TokenType.or))) return left;
      return new src__ast.OrNode.new(left, this[_or]());
    }
    [_and]() {
      let left = this[_simpleExpression]();
      if (!dart.test(this[_scanner$].scan(src__token.TokenType.and))) return left;
      return new src__ast.AndNode.new(left, this[_and]());
    }
    [_simpleExpression]() {
      let token = this[_scanner$].next();
      switch (token.type) {
        case src__token.TokenType.not:
        {
          let child = this[_simpleExpression]();
          return new src__ast.NotNode.new(child, token.span.expand(child.span));
        }
        case src__token.TokenType.leftParen:
        {
          let child = this[_conditional]();
          if (!dart.test(this[_scanner$].scan(src__token.TokenType.rightParen))) {
            dart.throw(new src__span_exception.SourceSpanFormatException.new("Expected \")\".", this[_scanner$].peek().span));
          }
          return child;
        }
        case src__token.TokenType.identifier:
        {
          return new src__ast.VariableNode.new(src__token.IdentifierToken.as(token).name, token.span);
        }
        default:
        {
          dart.throw(new src__span_exception.SourceSpanFormatException.new("Expected expression.", token.span));
        }
      }
    }
  };
  (src__parser.Parser.new = function(selector) {
    this[_scanner$] = new src__scanner.Scanner.new(selector);
  }).prototype = src__parser.Parser.prototype;
  dart.addTypeTests(src__parser.Parser);
  dart.setMethodSignature(src__parser.Parser, () => ({
    __proto__: dart.getMethods(src__parser.Parser.__proto__),
    parse: dart.fnType(src__ast.Node, []),
    [_conditional]: dart.fnType(src__ast.Node, []),
    [_or]: dart.fnType(src__ast.Node, []),
    [_and]: dart.fnType(src__ast.Node, []),
    [_simpleExpression]: dart.fnType(src__ast.Node, [])
  }));
  dart.setFieldSignature(src__parser.Parser, () => ({
    __proto__: dart.getFields(src__parser.Parser.__proto__),
    [_scanner$]: dart.finalFieldType(src__scanner.Scanner)
  }));
  const _isDefined = Symbol('_isDefined');
  src__validator.Validator = class Validator extends src__visitor.RecursiveVisitor {
    visitVariable(node) {
      if (dart.test(this[_isDefined](node.name))) return;
      dart.throw(new src__span_exception.SourceSpanFormatException.new("Undefined variable.", node.span));
    }
  };
  (src__validator.Validator.new = function(isDefined) {
    this[_isDefined] = isDefined;
    src__validator.Validator.__proto__.new.call(this);
  }).prototype = src__validator.Validator.prototype;
  dart.addTypeTests(src__validator.Validator);
  dart.setFieldSignature(src__validator.Validator, () => ({
    __proto__: dart.getFields(src__validator.Validator.__proto__),
    [_isDefined]: dart.finalFieldType(StringTobool())
  }));
  dart.trackLibraries("packages/boolean_selector/boolean_selector.ddc", {
    "package:boolean_selector/src/none.dart": src__none,
    "package:boolean_selector/src/union_selector.dart": src__union_selector,
    "package:boolean_selector/src/intersection_selector.dart": src__intersection_selector,
    "package:boolean_selector/src/impl.dart": src__impl,
    "package:boolean_selector/src/all.dart": src__all,
    "package:boolean_selector/boolean_selector.dart": boolean_selector,
    "package:boolean_selector/src/visitor.dart": src__visitor,
    "package:boolean_selector/src/ast.dart": src__ast,
    "package:boolean_selector/src/evaluator.dart": src__evaluator,
    "package:boolean_selector/src/token.dart": src__token,
    "package:boolean_selector/src/scanner.dart": src__scanner,
    "package:boolean_selector/src/parser.dart": src__parser,
    "package:boolean_selector/src/validator.dart": src__validator
  }, '{"version":3,"sourceRoot":"","sources":["src/none.dart","src/union_selector.dart","src/intersection_selector.dart","src/impl.dart","src/all.dart","boolean_selector.dart","src/visitor.dart","src/ast.dart","src/evaluator.dart","src/token.dart","src/scanner.dart","src/parser.dart","src/validator.dart"],"names":[],"mappings":"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","file":"boolean_selector.ddc.js"}');
  // Exports:
  return {
    src__none: src__none,
    src__union_selector: src__union_selector,
    src__intersection_selector: src__intersection_selector,
    src__impl: src__impl,
    src__all: src__all,
    boolean_selector: boolean_selector,
    src__visitor: src__visitor,
    src__ast: src__ast,
    src__evaluator: src__evaluator,
    src__token: src__token,
    src__scanner: src__scanner,
    src__parser: src__parser,
    src__validator: src__validator
  };
});

//# sourceMappingURL=boolean_selector.ddc.js.map
