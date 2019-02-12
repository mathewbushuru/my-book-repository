define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const term_glyph = Object.create(_root);
  const src__generated__top_level = Object.create(_root);
  const src__generated__glyph_set = Object.create(_root);
  const src__generated__ascii_glyph_set = Object.create(_root);
  const src__generated__unicode_glyph_set = Object.create(_root);
  dart.defineLazy(term_glyph, {
    /*term_glyph.asciiGlyphs*/get asciiGlyphs() {
      return dart.const(new src__generated__ascii_glyph_set.AsciiGlyphSet.new());
    },
    /*term_glyph.unicodeGlyphs*/get unicodeGlyphs() {
      return dart.const(new src__generated__unicode_glyph_set.UnicodeGlyphSet.new());
    }
  });
  dart.copyProperties(term_glyph, {
    get glyphs() {
      return term_glyph._glyphs;
    }
  });
  dart.defineLazy(term_glyph, {
    /*term_glyph._glyphs*/get _glyphs() {
      return term_glyph.unicodeGlyphs;
    },
    set _glyphs(_) {}
  });
  dart.copyProperties(term_glyph, {
    set ascii(value) {
      term_glyph._glyphs = dart.test(value) ? term_glyph.asciiGlyphs : term_glyph.unicodeGlyphs;
    },
    get ascii() {
      return dart.equals(term_glyph.glyphs, term_glyph.asciiGlyphs);
    }
  });
  term_glyph.glyphOrAscii = function(glyph, alternative) {
    return term_glyph.glyphs.glyphOrAscii(glyph, alternative);
  };
  dart.copyProperties(src__generated__top_level, {
    get bullet() {
      return term_glyph.glyphs.bullet;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get leftArrow() {
      return term_glyph.glyphs.leftArrow;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get rightArrow() {
      return term_glyph.glyphs.rightArrow;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get upArrow() {
      return term_glyph.glyphs.upArrow;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get downArrow() {
      return term_glyph.glyphs.downArrow;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get longLeftArrow() {
      return term_glyph.glyphs.longLeftArrow;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get longRightArrow() {
      return term_glyph.glyphs.longRightArrow;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLine() {
      return term_glyph.glyphs.horizontalLine;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLine() {
      return term_glyph.glyphs.verticalLine;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get topLeftCorner() {
      return term_glyph.glyphs.topLeftCorner;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get topRightCorner() {
      return term_glyph.glyphs.topRightCorner;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get bottomLeftCorner() {
      return term_glyph.glyphs.bottomLeftCorner;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get bottomRightCorner() {
      return term_glyph.glyphs.bottomRightCorner;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get cross() {
      return term_glyph.glyphs.cross;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeUp() {
      return term_glyph.glyphs.teeUp;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeDown() {
      return term_glyph.glyphs.teeDown;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeLeft() {
      return term_glyph.glyphs.teeLeft;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeRight() {
      return term_glyph.glyphs.teeRight;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get upEnd() {
      return term_glyph.glyphs.upEnd;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get downEnd() {
      return term_glyph.glyphs.downEnd;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get leftEnd() {
      return term_glyph.glyphs.leftEnd;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get rightEnd() {
      return term_glyph.glyphs.rightEnd;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineBold() {
      return term_glyph.glyphs.horizontalLineBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineBold() {
      return term_glyph.glyphs.verticalLineBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get topLeftCornerBold() {
      return term_glyph.glyphs.topLeftCornerBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get topRightCornerBold() {
      return term_glyph.glyphs.topRightCornerBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get bottomLeftCornerBold() {
      return term_glyph.glyphs.bottomLeftCornerBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get bottomRightCornerBold() {
      return term_glyph.glyphs.bottomRightCornerBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get crossBold() {
      return term_glyph.glyphs.crossBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeUpBold() {
      return term_glyph.glyphs.teeUpBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeDownBold() {
      return term_glyph.glyphs.teeDownBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeLeftBold() {
      return term_glyph.glyphs.teeLeftBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeRightBold() {
      return term_glyph.glyphs.teeRightBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get upEndBold() {
      return term_glyph.glyphs.upEndBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get downEndBold() {
      return term_glyph.glyphs.downEndBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get leftEndBold() {
      return term_glyph.glyphs.leftEndBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get rightEndBold() {
      return term_glyph.glyphs.rightEndBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineDouble() {
      return term_glyph.glyphs.horizontalLineDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineDouble() {
      return term_glyph.glyphs.verticalLineDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get topLeftCornerDouble() {
      return term_glyph.glyphs.topLeftCornerDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get topRightCornerDouble() {
      return term_glyph.glyphs.topRightCornerDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get bottomLeftCornerDouble() {
      return term_glyph.glyphs.bottomLeftCornerDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get bottomRightCornerDouble() {
      return term_glyph.glyphs.bottomRightCornerDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get crossDouble() {
      return term_glyph.glyphs.crossDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeUpDouble() {
      return term_glyph.glyphs.teeUpDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeDownDouble() {
      return term_glyph.glyphs.teeDownDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeLeftDouble() {
      return term_glyph.glyphs.teeLeftDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get teeRightDouble() {
      return term_glyph.glyphs.teeRightDouble;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineDoubleDash() {
      return term_glyph.glyphs.horizontalLineDoubleDash;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineDoubleDashBold() {
      return term_glyph.glyphs.horizontalLineDoubleDashBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineDoubleDash() {
      return term_glyph.glyphs.verticalLineDoubleDash;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineDoubleDashBold() {
      return term_glyph.glyphs.verticalLineDoubleDashBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineTripleDash() {
      return term_glyph.glyphs.horizontalLineTripleDash;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineTripleDashBold() {
      return term_glyph.glyphs.horizontalLineTripleDashBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineTripleDash() {
      return term_glyph.glyphs.verticalLineTripleDash;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineTripleDashBold() {
      return term_glyph.glyphs.verticalLineTripleDashBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineQuadrupleDash() {
      return term_glyph.glyphs.horizontalLineQuadrupleDash;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get horizontalLineQuadrupleDashBold() {
      return term_glyph.glyphs.horizontalLineQuadrupleDashBold;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineQuadrupleDash() {
      return term_glyph.glyphs.verticalLineQuadrupleDash;
    }
  });
  dart.copyProperties(src__generated__top_level, {
    get verticalLineQuadrupleDashBold() {
      return term_glyph.glyphs.verticalLineQuadrupleDashBold;
    }
  });
  src__generated__glyph_set.GlyphSet = class GlyphSet extends core.Object {};
  (src__generated__glyph_set.GlyphSet.new = function() {
  }).prototype = src__generated__glyph_set.GlyphSet.prototype;
  dart.addTypeTests(src__generated__glyph_set.GlyphSet);
  src__generated__ascii_glyph_set.AsciiGlyphSet = class AsciiGlyphSet extends core.Object {
    glyphOrAscii(glyph, alternative) {
      return alternative;
    }
    get bullet() {
      return "*";
    }
    get leftArrow() {
      return "<";
    }
    get rightArrow() {
      return ">";
    }
    get upArrow() {
      return "^";
    }
    get downArrow() {
      return "v";
    }
    get longLeftArrow() {
      return "<=";
    }
    get longRightArrow() {
      return "=>";
    }
    get horizontalLine() {
      return "-";
    }
    get verticalLine() {
      return "|";
    }
    get topLeftCorner() {
      return ",";
    }
    get topRightCorner() {
      return ",";
    }
    get bottomLeftCorner() {
      return "'";
    }
    get bottomRightCorner() {
      return "'";
    }
    get cross() {
      return "+";
    }
    get teeUp() {
      return "+";
    }
    get teeDown() {
      return "+";
    }
    get teeLeft() {
      return "+";
    }
    get teeRight() {
      return "+";
    }
    get upEnd() {
      return "'";
    }
    get downEnd() {
      return ",";
    }
    get leftEnd() {
      return "-";
    }
    get rightEnd() {
      return "-";
    }
    get horizontalLineBold() {
      return "=";
    }
    get verticalLineBold() {
      return "|";
    }
    get topLeftCornerBold() {
      return ",";
    }
    get topRightCornerBold() {
      return ",";
    }
    get bottomLeftCornerBold() {
      return "'";
    }
    get bottomRightCornerBold() {
      return "'";
    }
    get crossBold() {
      return "+";
    }
    get teeUpBold() {
      return "+";
    }
    get teeDownBold() {
      return "+";
    }
    get teeLeftBold() {
      return "+";
    }
    get teeRightBold() {
      return "+";
    }
    get upEndBold() {
      return "'";
    }
    get downEndBold() {
      return ",";
    }
    get leftEndBold() {
      return "-";
    }
    get rightEndBold() {
      return "-";
    }
    get horizontalLineDouble() {
      return "=";
    }
    get verticalLineDouble() {
      return "|";
    }
    get topLeftCornerDouble() {
      return ",";
    }
    get topRightCornerDouble() {
      return ",";
    }
    get bottomLeftCornerDouble() {
      return "\"";
    }
    get bottomRightCornerDouble() {
      return "\"";
    }
    get crossDouble() {
      return "+";
    }
    get teeUpDouble() {
      return "+";
    }
    get teeDownDouble() {
      return "+";
    }
    get teeLeftDouble() {
      return "+";
    }
    get teeRightDouble() {
      return "+";
    }
    get horizontalLineDoubleDash() {
      return "-";
    }
    get horizontalLineDoubleDashBold() {
      return "-";
    }
    get verticalLineDoubleDash() {
      return "|";
    }
    get verticalLineDoubleDashBold() {
      return "|";
    }
    get horizontalLineTripleDash() {
      return "-";
    }
    get horizontalLineTripleDashBold() {
      return "-";
    }
    get verticalLineTripleDash() {
      return "|";
    }
    get verticalLineTripleDashBold() {
      return "|";
    }
    get horizontalLineQuadrupleDash() {
      return "-";
    }
    get horizontalLineQuadrupleDashBold() {
      return "-";
    }
    get verticalLineQuadrupleDash() {
      return "|";
    }
    get verticalLineQuadrupleDashBold() {
      return "|";
    }
  };
  (src__generated__ascii_glyph_set.AsciiGlyphSet.new = function() {
  }).prototype = src__generated__ascii_glyph_set.AsciiGlyphSet.prototype;
  dart.addTypeTests(src__generated__ascii_glyph_set.AsciiGlyphSet);
  src__generated__ascii_glyph_set.AsciiGlyphSet[dart.implements] = () => [src__generated__glyph_set.GlyphSet];
  dart.setMethodSignature(src__generated__ascii_glyph_set.AsciiGlyphSet, () => ({
    __proto__: dart.getMethods(src__generated__ascii_glyph_set.AsciiGlyphSet.__proto__),
    glyphOrAscii: dart.fnType(core.String, [core.String, core.String])
  }));
  dart.setGetterSignature(src__generated__ascii_glyph_set.AsciiGlyphSet, () => ({
    __proto__: dart.getGetters(src__generated__ascii_glyph_set.AsciiGlyphSet.__proto__),
    bullet: core.String,
    leftArrow: core.String,
    rightArrow: core.String,
    upArrow: core.String,
    downArrow: core.String,
    longLeftArrow: core.String,
    longRightArrow: core.String,
    horizontalLine: core.String,
    verticalLine: core.String,
    topLeftCorner: core.String,
    topRightCorner: core.String,
    bottomLeftCorner: core.String,
    bottomRightCorner: core.String,
    cross: core.String,
    teeUp: core.String,
    teeDown: core.String,
    teeLeft: core.String,
    teeRight: core.String,
    upEnd: core.String,
    downEnd: core.String,
    leftEnd: core.String,
    rightEnd: core.String,
    horizontalLineBold: core.String,
    verticalLineBold: core.String,
    topLeftCornerBold: core.String,
    topRightCornerBold: core.String,
    bottomLeftCornerBold: core.String,
    bottomRightCornerBold: core.String,
    crossBold: core.String,
    teeUpBold: core.String,
    teeDownBold: core.String,
    teeLeftBold: core.String,
    teeRightBold: core.String,
    upEndBold: core.String,
    downEndBold: core.String,
    leftEndBold: core.String,
    rightEndBold: core.String,
    horizontalLineDouble: core.String,
    verticalLineDouble: core.String,
    topLeftCornerDouble: core.String,
    topRightCornerDouble: core.String,
    bottomLeftCornerDouble: core.String,
    bottomRightCornerDouble: core.String,
    crossDouble: core.String,
    teeUpDouble: core.String,
    teeDownDouble: core.String,
    teeLeftDouble: core.String,
    teeRightDouble: core.String,
    horizontalLineDoubleDash: core.String,
    horizontalLineDoubleDashBold: core.String,
    verticalLineDoubleDash: core.String,
    verticalLineDoubleDashBold: core.String,
    horizontalLineTripleDash: core.String,
    horizontalLineTripleDashBold: core.String,
    verticalLineTripleDash: core.String,
    verticalLineTripleDashBold: core.String,
    horizontalLineQuadrupleDash: core.String,
    horizontalLineQuadrupleDashBold: core.String,
    verticalLineQuadrupleDash: core.String,
    verticalLineQuadrupleDashBold: core.String
  }));
  src__generated__unicode_glyph_set.UnicodeGlyphSet = class UnicodeGlyphSet extends core.Object {
    glyphOrAscii(glyph, alternative) {
      return glyph;
    }
    get bullet() {
      return "•";
    }
    get leftArrow() {
      return "←";
    }
    get rightArrow() {
      return "→";
    }
    get upArrow() {
      return "↑";
    }
    get downArrow() {
      return "↓";
    }
    get longLeftArrow() {
      return "◀━";
    }
    get longRightArrow() {
      return "━▶";
    }
    get horizontalLine() {
      return "─";
    }
    get verticalLine() {
      return "│";
    }
    get topLeftCorner() {
      return "┌";
    }
    get topRightCorner() {
      return "┐";
    }
    get bottomLeftCorner() {
      return "└";
    }
    get bottomRightCorner() {
      return "┘";
    }
    get cross() {
      return "┼";
    }
    get teeUp() {
      return "┴";
    }
    get teeDown() {
      return "┬";
    }
    get teeLeft() {
      return "┤";
    }
    get teeRight() {
      return "├";
    }
    get upEnd() {
      return "╵";
    }
    get downEnd() {
      return "╷";
    }
    get leftEnd() {
      return "╴";
    }
    get rightEnd() {
      return "╶";
    }
    get horizontalLineBold() {
      return "━";
    }
    get verticalLineBold() {
      return "┃";
    }
    get topLeftCornerBold() {
      return "┏";
    }
    get topRightCornerBold() {
      return "┓";
    }
    get bottomLeftCornerBold() {
      return "┗";
    }
    get bottomRightCornerBold() {
      return "┛";
    }
    get crossBold() {
      return "╋";
    }
    get teeUpBold() {
      return "┻";
    }
    get teeDownBold() {
      return "┳";
    }
    get teeLeftBold() {
      return "┫";
    }
    get teeRightBold() {
      return "┣";
    }
    get upEndBold() {
      return "╹";
    }
    get downEndBold() {
      return "╻";
    }
    get leftEndBold() {
      return "╸";
    }
    get rightEndBold() {
      return "╺";
    }
    get horizontalLineDouble() {
      return "═";
    }
    get verticalLineDouble() {
      return "║";
    }
    get topLeftCornerDouble() {
      return "╔";
    }
    get topRightCornerDouble() {
      return "╗";
    }
    get bottomLeftCornerDouble() {
      return "╚";
    }
    get bottomRightCornerDouble() {
      return "╝";
    }
    get crossDouble() {
      return "╬";
    }
    get teeUpDouble() {
      return "╩";
    }
    get teeDownDouble() {
      return "╦";
    }
    get teeLeftDouble() {
      return "╣";
    }
    get teeRightDouble() {
      return "╠";
    }
    get horizontalLineDoubleDash() {
      return "╌";
    }
    get horizontalLineDoubleDashBold() {
      return "╍";
    }
    get verticalLineDoubleDash() {
      return "╎";
    }
    get verticalLineDoubleDashBold() {
      return "╏";
    }
    get horizontalLineTripleDash() {
      return "┄";
    }
    get horizontalLineTripleDashBold() {
      return "┅";
    }
    get verticalLineTripleDash() {
      return "┆";
    }
    get verticalLineTripleDashBold() {
      return "┇";
    }
    get horizontalLineQuadrupleDash() {
      return "┈";
    }
    get horizontalLineQuadrupleDashBold() {
      return "┉";
    }
    get verticalLineQuadrupleDash() {
      return "┊";
    }
    get verticalLineQuadrupleDashBold() {
      return "┋";
    }
  };
  (src__generated__unicode_glyph_set.UnicodeGlyphSet.new = function() {
  }).prototype = src__generated__unicode_glyph_set.UnicodeGlyphSet.prototype;
  dart.addTypeTests(src__generated__unicode_glyph_set.UnicodeGlyphSet);
  src__generated__unicode_glyph_set.UnicodeGlyphSet[dart.implements] = () => [src__generated__glyph_set.GlyphSet];
  dart.setMethodSignature(src__generated__unicode_glyph_set.UnicodeGlyphSet, () => ({
    __proto__: dart.getMethods(src__generated__unicode_glyph_set.UnicodeGlyphSet.__proto__),
    glyphOrAscii: dart.fnType(core.String, [core.String, core.String])
  }));
  dart.setGetterSignature(src__generated__unicode_glyph_set.UnicodeGlyphSet, () => ({
    __proto__: dart.getGetters(src__generated__unicode_glyph_set.UnicodeGlyphSet.__proto__),
    bullet: core.String,
    leftArrow: core.String,
    rightArrow: core.String,
    upArrow: core.String,
    downArrow: core.String,
    longLeftArrow: core.String,
    longRightArrow: core.String,
    horizontalLine: core.String,
    verticalLine: core.String,
    topLeftCorner: core.String,
    topRightCorner: core.String,
    bottomLeftCorner: core.String,
    bottomRightCorner: core.String,
    cross: core.String,
    teeUp: core.String,
    teeDown: core.String,
    teeLeft: core.String,
    teeRight: core.String,
    upEnd: core.String,
    downEnd: core.String,
    leftEnd: core.String,
    rightEnd: core.String,
    horizontalLineBold: core.String,
    verticalLineBold: core.String,
    topLeftCornerBold: core.String,
    topRightCornerBold: core.String,
    bottomLeftCornerBold: core.String,
    bottomRightCornerBold: core.String,
    crossBold: core.String,
    teeUpBold: core.String,
    teeDownBold: core.String,
    teeLeftBold: core.String,
    teeRightBold: core.String,
    upEndBold: core.String,
    downEndBold: core.String,
    leftEndBold: core.String,
    rightEndBold: core.String,
    horizontalLineDouble: core.String,
    verticalLineDouble: core.String,
    topLeftCornerDouble: core.String,
    topRightCornerDouble: core.String,
    bottomLeftCornerDouble: core.String,
    bottomRightCornerDouble: core.String,
    crossDouble: core.String,
    teeUpDouble: core.String,
    teeDownDouble: core.String,
    teeLeftDouble: core.String,
    teeRightDouble: core.String,
    horizontalLineDoubleDash: core.String,
    horizontalLineDoubleDashBold: core.String,
    verticalLineDoubleDash: core.String,
    verticalLineDoubleDashBold: core.String,
    horizontalLineTripleDash: core.String,
    horizontalLineTripleDashBold: core.String,
    verticalLineTripleDash: core.String,
    verticalLineTripleDashBold: core.String,
    horizontalLineQuadrupleDash: core.String,
    horizontalLineQuadrupleDashBold: core.String,
    verticalLineQuadrupleDash: core.String,
    verticalLineQuadrupleDashBold: core.String
  }));
  dart.trackLibraries("packages/term_glyph/term_glyph.ddc", {
    "package:term_glyph/term_glyph.dart": term_glyph,
    "package:term_glyph/src/generated/top_level.dart": src__generated__top_level,
    "package:term_glyph/src/generated/glyph_set.dart": src__generated__glyph_set,
    "package:term_glyph/src/generated/ascii_glyph_set.dart": src__generated__ascii_glyph_set,
    "package:term_glyph/src/generated/unicode_glyph_set.dart": src__generated__unicode_glyph_set
  }, '{"version":3,"sourceRoot":"","sources":["term_glyph.dart","src/generated/top_level.dart","src/generated/glyph_set.dart","src/generated/ascii_glyph_set.dart","src/generated/unicode_glyph_set.dart"],"names":[],"mappings":"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","file":"term_glyph.ddc.js"}');
  // Exports:
  return {
    term_glyph: term_glyph,
    src__generated__top_level: src__generated__top_level,
    src__generated__glyph_set: src__generated__glyph_set,
    src__generated__ascii_glyph_set: src__generated__ascii_glyph_set,
    src__generated__unicode_glyph_set: src__generated__unicode_glyph_set
  };
});

//# sourceMappingURL=term_glyph.ddc.js.map
