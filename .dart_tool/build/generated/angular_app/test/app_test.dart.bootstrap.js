/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/$sdk/dev_compiler/amd/dart_sdk",
 "packages/angular/angular": "packages/angular/angular.ddc",
 "packages/angular/angular.template": "packages/angular/angular.template.ddc",
 "packages/angular/core": "packages/angular/core.ddc",
 "packages/angular/core.template": "packages/angular/core.template.ddc",
 "packages/angular/di": "packages/angular/di.ddc",
 "packages/angular/di.template": "packages/angular/di.template.ddc",
 "packages/angular/experimental": "packages/angular/experimental.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.ddc",
 "packages/angular/src/bootstrap/run.template": "packages/angular/src/bootstrap/run.template.ddc",
 "packages/angular/src/common/directives/ng_for_identity": "packages/angular/src/common/directives/ng_for_identity.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.ddc",
 "packages/angular/src/core/application_tokens.template": "packages/angular/src/core/application_tokens.template.ddc",
 "packages/angular/src/core/change_detection/change_detection": "packages/angular/src/core/change_detection/change_detection.ddc",
 "packages/angular/src/core/change_detection/change_detection.template": "packages/angular/src/core/change_detection/change_detection.template.ddc",
 "packages/angular/src/core/linker/view_type": "packages/angular/src/core/linker/view_type.ddc",
 "packages/angular/src/core/zone/ng_zone": "packages/angular/src/core/zone/ng_zone.ddc",
 "packages/angular_app/app_component": "packages/angular_app/app_component.ddc",
 "packages/angular_app/app_component.template": "packages/angular_app/app_component.template.ddc",
 "packages/angular_test/angular_test": "packages/angular_test/angular_test.ddc",
 "packages/angular_test/src/bootstrap": "packages/angular_test/src/bootstrap.ddc",
 "packages/angular_test/src/frontend": "packages/angular_test/src/frontend.ddc",
 "packages/async/async": "packages/async/async.ddc",
 "packages/boolean_selector/boolean_selector": "packages/boolean_selector/boolean_selector.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/js/js": "packages/js/js.ddc",
 "packages/js/js_util": "packages/js/js_util.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/matcher/matcher": "packages/matcher/matcher.ddc",
 "packages/matcher/src/core_matchers": "packages/matcher/src/core_matchers.ddc",
 "packages/meta/dart2js": "packages/meta/dart2js.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/pedantic/pedantic": "packages/pedantic/pedantic.ddc",
 "packages/pool/pool": "packages/pool/pool.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.ddc",
 "packages/stack_trace/stack_trace": "packages/stack_trace/stack_trace.ddc",
 "packages/stream_channel/stream_channel": "packages/stream_channel/stream_channel.ddc",
 "packages/string_scanner/string_scanner": "packages/string_scanner/string_scanner.ddc",
 "packages/term_glyph/term_glyph": "packages/term_glyph/term_glyph.ddc",
 "packages/test/test": "packages/test/test.ddc",
 "packages/test_api/src/util/iterable_set": "packages/test_api/src/util/iterable_set.ddc",
 "packages/test_api/test_api": "packages/test_api/test_api.ddc",
 "packages/test_core/test_core": "packages/test_core/test_core.ddc",
 "test/app_test": "app_test.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 4);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  // dartdevc only strips the final extension when adding modules to source
  // maps, so we need to do the same.
  if (moduleName != 'dart_sdk') {
    moduleName += '.ddc';
  }
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.ddc')) {
    return moduleMap.name + '.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("app_test.dart.bootstrap", ["test/app_test", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.ignoreWhitelistedErrors(false);
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  app.app_test.main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        if (childName === "app_test.dart") {
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("app_test.dart.bootstrap", {
    "app_test.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
