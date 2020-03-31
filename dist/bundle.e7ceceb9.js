// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"build/bundle.js":[function(require,module,exports) {
var global = arguments[3];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (l, r) {
  if (l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.head.appendChild(r);
})(window.document);

var app = function () {
  'use strict';

  function noop() {}

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function validate_store(store, name) {
    if (!store || typeof store.subscribe !== 'function') {
      throw new Error("'".concat(name, "' is not a store with a 'subscribe' method"));
    }
  }

  function subscribe(store, callback) {
    var unsub = store.subscribe(callback);
    return unsub.unsubscribe ? function () {
      return unsub.unsubscribe();
    } : unsub;
  }

  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_input_value(input, value) {
    if (value != null || input.value) {
      input.value = value;
    }
  }

  function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
  }

  function custom_event(type, detail) {
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  function flush() {
    var seen_callbacks = new Set();

    do {
      // first, call beforeUpdate functions
      // and update components
      while (dirty_components.length) {
        var component = dirty_components.shift();
        set_current_component(component);
        update(component.$$);
      }

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var i = 0; i < render_callbacks.length; i += 1) {
        var callback = render_callbacks[i];

        if (!seen_callbacks.has(callback)) {
          callback(); // ...so guard against infinite loops

          seen_callbacks.add(callback);
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var globals = typeof window !== 'undefined' ? window : global;

  function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, function () {
      lookup.delete(block.key);
    });
  }

  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    var o = old_blocks.length;
    var n = list.length;
    var i = o;
    var old_indexes = {};

    while (i--) {
      old_indexes[old_blocks[i].key] = i;
    }

    var new_blocks = [];
    var new_lookup = new Map();
    var deltas = new Map();
    i = n;

    while (i--) {
      var child_ctx = get_context(ctx, list, i);
      var key = get_key(child_ctx);
      var block = lookup.get(key);

      if (!block) {
        block = create_each_block(key, child_ctx);
        block.c();
      } else if (dynamic) {
        block.p(child_ctx, dirty);
      }

      new_lookup.set(key, new_blocks[i] = block);
      if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
    }

    var will_move = new Set();
    var did_move = new Set();

    function insert(block) {
      transition_in(block, 1);
      block.m(node, next);
      lookup.set(block.key, block);
      next = block.first;
      n--;
    }

    while (o && n) {
      var new_block = new_blocks[n - 1];
      var old_block = old_blocks[o - 1];
      var new_key = new_block.key;
      var old_key = old_block.key;

      if (new_block === old_block) {
        // do nothing
        next = new_block.first;
        o--;
        n--;
      } else if (!new_lookup.has(old_key)) {
        // remove old block
        destroy(old_block, lookup);
        o--;
      } else if (!lookup.has(new_key) || will_move.has(new_key)) {
        insert(new_block);
      } else if (did_move.has(old_key)) {
        o--;
      } else if (deltas.get(new_key) > deltas.get(old_key)) {
        did_move.add(new_key);
        insert(new_block);
      } else {
        will_move.add(old_key);
        o--;
      }
    }

    while (o--) {
      var _old_block = old_blocks[o];
      if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
    }

    while (n) {
      insert(new_blocks[n - 1]);
    }

    return new_blocks;
  }

  function get_spread_update(levels, updates) {
    var update = {};
    var to_null_out = {};
    var accounted_for = {
      $$scope: 1
    };
    var i = levels.length;

    while (i--) {
      var o = levels[i];
      var n = updates[i];

      if (n) {
        for (var key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }

        for (var _key in n) {
          if (!accounted_for[_key]) {
            update[_key] = n[_key];
            accounted_for[_key] = 1;
          }
        }

        levels[i] = n;
      } else {
        for (var _key2 in o) {
          accounted_for[_key2] = 1;
        }
      }
    }

    for (var _key3 in to_null_out) {
      if (!(_key3 in update)) update[_key3] = undefined;
    }

    return update;
  }

  function get_spread_object(spread_props) {
    return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if ($$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.l(children(options.target));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteComponent =
  /*#__PURE__*/
  function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {// overridden by instance, if it has props
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, detail));
  }

  function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev("SvelteDOMRemoveEventListener", {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      dispose();
    };
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
      node: node,
      attribute: attribute
    });else dispatch_dev("SvelteDOMSetAttribute", {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data) return;
    dispatch_dev("SvelteDOMSetData", {
      node: text,
      data: data
    });
    text.data = data;
  }

  var SvelteComponentDev =
  /*#__PURE__*/
  function (_SvelteComponent) {
    _inherits(SvelteComponentDev, _SvelteComponent);

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _possibleConstructorReturn(this, _getPrototypeOf(SvelteComponentDev).call(this));
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn("Component was already destroyed"); // eslint-disable-line no-console
        };
      }
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  var subscriber_queue = [];
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */

  function writable(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var stop;
    var subscribers = [];

    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;

        if (stop) {
          // store is ready
          var run_queue = !subscriber_queue.length;

          for (var i = 0; i < subscribers.length; i += 1) {
            var s = subscribers[i];
            s[1]();
            subscriber_queue.push(s, value);
          }

          if (run_queue) {
            for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
              subscriber_queue[_i][0](subscriber_queue[_i + 1]);
            }

            subscriber_queue.length = 0;
          }
        }
      }
    }

    function update(fn) {
      set(fn(value));
    }

    function subscribe(run) {
      var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var subscriber = [run, invalidate];
      subscribers.push(subscriber);

      if (subscribers.length === 1) {
        stop = start(set) || noop;
      }

      run(value);
      return function () {
        var index = subscribers.indexOf(subscriber);

        if (index !== -1) {
          subscribers.splice(index, 1);
        }

        if (subscribers.length === 0) {
          stop();
          stop = null;
        }
      };
    }

    return {
      set: set,
      update: update,
      subscribe: subscribe
    };
  }

  var selectedElement = writable(false);
  var hoveredElement = writable(false);
  /* src\Element.svelte generated by Svelte v3.16.7 */

  var file = "src\\Element.svelte";

  function create_fragment(ctx) {
    var button;
    var span0;
    var t0_value =
    /*atomic*/
    ctx[2].number + "";
    var t0;
    var t1;
    var strong;
    var t2_value =
    /*name*/
    ctx[0].substring(0, 2) + "";
    var t2;
    var t3;
    var span1;
    var t4;
    var t5;
    var span2;
    var t6_value = parseInt(
    /*mechanical*/
    ctx[1].mass) + "";
    var t6;
    var dispose;
    var block = {
      c: function create() {
        button = element("button");
        span0 = element("span");
        t0 = text(t0_value);
        t1 = space();
        strong = element("strong");
        t2 = text(t2_value);
        t3 = space();
        span1 = element("span");
        t4 = text(
        /*name*/
        ctx[0]);
        t5 = space();
        span2 = element("span");
        t6 = text(t6_value);
        attr_dev(span0, "class", "protons svelte-1aar2fv");
        add_location(span0, file, 41, 4, 1060);
        attr_dev(strong, "class", "svelte-1aar2fv");
        add_location(strong, file, 42, 4, 1109);
        attr_dev(span1, "class", "name svelte-1aar2fv");
        add_location(span1, file, 43, 4, 1152);
        attr_dev(span2, "class", "mass svelte-1aar2fv");
        add_location(span2, file, 44, 4, 1189);
        attr_dev(button, "class", "svelte-1aar2fv");
        toggle_class(button, "selected",
        /*selected*/
        ctx[4]);
        add_location(button, file, 40, 0, 970);
        dispose = [listen_dev(button, "click",
        /*onclick*/
        ctx[5], false, false, false), listen_dev(button, "mouseover",
        /*onhover*/
        ctx[6], false, false, false)];
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, span0);
        append_dev(span0, t0);
        append_dev(button, t1);
        append_dev(button, strong);
        append_dev(strong, t2);
        append_dev(button, t3);
        append_dev(button, span1);
        append_dev(span1, t4);
        append_dev(button, t5);
        append_dev(button, span2);
        append_dev(span2, t6);
        /*button_binding*/

        ctx[26](button);
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*atomic*/
        4 && t0_value !== (t0_value =
        /*atomic*/
        ctx[2].number + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*name*/
        1 && t2_value !== (t2_value =
        /*name*/
        ctx[0].substring(0, 2) + "")) set_data_dev(t2, t2_value);
        if (dirty &
        /*name*/
        1) set_data_dev(t4,
        /*name*/
        ctx[0]);
        if (dirty &
        /*mechanical*/
        2 && t6_value !== (t6_value = parseInt(
        /*mechanical*/
        ctx[1].mass) + "")) set_data_dev(t6, t6_value);

        if (dirty &
        /*selected*/
        16) {
          toggle_class(button, "selected",
          /*selected*/
          ctx[4]);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
        /*button_binding*/

        ctx[26](null);
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var $selectedElement;
    validate_store(selectedElement, "selectedElement");
    component_subscribe($$self, selectedElement, function ($$value) {
      return $$invalidate(25, $selectedElement = $$value);
    });
    var _$$props$protons = $$props.protons,
        protons = _$$props$protons === void 0 ? "" : _$$props$protons;
    var _$$props$symbol = $$props.symbol,
        symbol = _$$props$symbol === void 0 ? "" : _$$props$symbol;
    var _$$props$name = $$props.name,
        name = _$$props$name === void 0 ? "" : _$$props$name;
    var _$$props$mass = $$props.mass,
        mass = _$$props$mass === void 0 ? "" : _$$props$mass;

    var _$$props$_id = $$props._id,
        _id = _$$props$_id === void 0 ? "unset" : _$$props$_id;

    var _$$props$id = $$props.id,
        id = _$$props$id === void 0 ? "unset" : _$$props$id;
    var density = $$props.density;
    var _$$props$crystallogra = $$props.crystallography,
        crystallography = _$$props$crystallogra === void 0 ? {} : _$$props$crystallogra;
    var _$$props$sound = $$props.sound,
        sound = _$$props$sound === void 0 ? "" : _$$props$sound;
    var _$$props$electronic = $$props.electronic,
        electronic = _$$props$electronic === void 0 ? "" : _$$props$electronic;
    var _$$props$identity = $$props.identity,
        identity = _$$props$identity === void 0 ? "" : _$$props$identity;
    var _$$props$mechanical = $$props.mechanical,
        mechanical = _$$props$mechanical === void 0 ? "" : _$$props$mechanical;
    var _$$props$thermodynami = $$props.thermodynamics,
        thermodynamics = _$$props$thermodynami === void 0 ? "" : _$$props$thermodynami;
    var _$$props$atomic = $$props.atomic,
        atomic = _$$props$atomic === void 0 ? "" : _$$props$atomic;
    var _$$props$history = $$props.history,
        history = _$$props$history === void 0 ? "" : _$$props$history;
    var _$$props$chemical = $$props.chemical,
        chemical = _$$props$chemical === void 0 ? "" : _$$props$chemical;
    var _$$props$periodic_tab = $$props.periodic_table,
        periodic_table = _$$props$periodic_tab === void 0 ? "" : _$$props$periodic_tab;
    var _$$props$availability = $$props.availability,
        availability = _$$props$availability === void 0 ? "" : _$$props$availability;
    var _$$props$appearance = $$props.appearance,
        appearance = _$$props$appearance === void 0 ? "" : _$$props$appearance;
    var _$$props$magnetism = $$props.magnetism,
        magnetism = _$$props$magnetism === void 0 ? "" : _$$props$magnetism;
    var _$$props$allotropy = $$props.allotropy,
        allotropy = _$$props$allotropy === void 0 ? "" : _$$props$allotropy;

    function onclick(event) {
      selectedElement.set(id);
    }

    function onhover(event) {
      hoveredElement.set(id);
    }

    var current;
    var writable_props = ["protons", "symbol", "name", "mass", "_id", "id", "density", "crystallography", "sound", "electronic", "identity", "mechanical", "thermodynamics", "atomic", "history", "chemical", "periodic_table", "availability", "appearance", "magnetism", "allotropy"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Element> was created with unknown prop '".concat(key, "'"));
    });

    function button_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(3, current = $$value);
      });
    }

    $$self.$set = function ($$props) {
      if ("protons" in $$props) $$invalidate(7, protons = $$props.protons);
      if ("symbol" in $$props) $$invalidate(8, symbol = $$props.symbol);
      if ("name" in $$props) $$invalidate(0, name = $$props.name);
      if ("mass" in $$props) $$invalidate(9, mass = $$props.mass);
      if ("_id" in $$props) $$invalidate(10, _id = $$props._id);
      if ("id" in $$props) $$invalidate(11, id = $$props.id);
      if ("density" in $$props) $$invalidate(12, density = $$props.density);
      if ("crystallography" in $$props) $$invalidate(13, crystallography = $$props.crystallography);
      if ("sound" in $$props) $$invalidate(14, sound = $$props.sound);
      if ("electronic" in $$props) $$invalidate(15, electronic = $$props.electronic);
      if ("identity" in $$props) $$invalidate(16, identity = $$props.identity);
      if ("mechanical" in $$props) $$invalidate(1, mechanical = $$props.mechanical);
      if ("thermodynamics" in $$props) $$invalidate(17, thermodynamics = $$props.thermodynamics);
      if ("atomic" in $$props) $$invalidate(2, atomic = $$props.atomic);
      if ("history" in $$props) $$invalidate(18, history = $$props.history);
      if ("chemical" in $$props) $$invalidate(19, chemical = $$props.chemical);
      if ("periodic_table" in $$props) $$invalidate(20, periodic_table = $$props.periodic_table);
      if ("availability" in $$props) $$invalidate(21, availability = $$props.availability);
      if ("appearance" in $$props) $$invalidate(22, appearance = $$props.appearance);
      if ("magnetism" in $$props) $$invalidate(23, magnetism = $$props.magnetism);
      if ("allotropy" in $$props) $$invalidate(24, allotropy = $$props.allotropy);
    };

    $$self.$capture_state = function () {
      return {
        protons: protons,
        symbol: symbol,
        name: name,
        mass: mass,
        _id: _id,
        id: id,
        density: density,
        crystallography: crystallography,
        sound: sound,
        electronic: electronic,
        identity: identity,
        mechanical: mechanical,
        thermodynamics: thermodynamics,
        atomic: atomic,
        history: history,
        chemical: chemical,
        periodic_table: periodic_table,
        availability: availability,
        appearance: appearance,
        magnetism: magnetism,
        allotropy: allotropy,
        current: current,
        selected: selected,
        $selectedElement: $selectedElement
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("protons" in $$props) $$invalidate(7, protons = $$props.protons);
      if ("symbol" in $$props) $$invalidate(8, symbol = $$props.symbol);
      if ("name" in $$props) $$invalidate(0, name = $$props.name);
      if ("mass" in $$props) $$invalidate(9, mass = $$props.mass);
      if ("_id" in $$props) $$invalidate(10, _id = $$props._id);
      if ("id" in $$props) $$invalidate(11, id = $$props.id);
      if ("density" in $$props) $$invalidate(12, density = $$props.density);
      if ("crystallography" in $$props) $$invalidate(13, crystallography = $$props.crystallography);
      if ("sound" in $$props) $$invalidate(14, sound = $$props.sound);
      if ("electronic" in $$props) $$invalidate(15, electronic = $$props.electronic);
      if ("identity" in $$props) $$invalidate(16, identity = $$props.identity);
      if ("mechanical" in $$props) $$invalidate(1, mechanical = $$props.mechanical);
      if ("thermodynamics" in $$props) $$invalidate(17, thermodynamics = $$props.thermodynamics);
      if ("atomic" in $$props) $$invalidate(2, atomic = $$props.atomic);
      if ("history" in $$props) $$invalidate(18, history = $$props.history);
      if ("chemical" in $$props) $$invalidate(19, chemical = $$props.chemical);
      if ("periodic_table" in $$props) $$invalidate(20, periodic_table = $$props.periodic_table);
      if ("availability" in $$props) $$invalidate(21, availability = $$props.availability);
      if ("appearance" in $$props) $$invalidate(22, appearance = $$props.appearance);
      if ("magnetism" in $$props) $$invalidate(23, magnetism = $$props.magnetism);
      if ("allotropy" in $$props) $$invalidate(24, allotropy = $$props.allotropy);
      if ("current" in $$props) $$invalidate(3, current = $$props.current);
      if ("selected" in $$props) $$invalidate(4, selected = $$props.selected);
      if ("$selectedElement" in $$props) selectedElement.set($selectedElement = $$props.$selectedElement);
    };

    var selected;

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*id, $selectedElement*/
      33556480) {
        $$invalidate(4, selected = id === $selectedElement);
      }
    };

    return [name, mechanical, atomic, current, selected, onclick, onhover, protons, symbol, mass, _id, id, density, crystallography, sound, electronic, identity, thermodynamics, history, chemical, periodic_table, availability, appearance, magnetism, allotropy, $selectedElement, button_binding];
  }

  var Element =
  /*#__PURE__*/
  function (_SvelteComponentDev) {
    _inherits(Element, _SvelteComponentDev);

    function Element(options) {
      var _this;

      _classCallCheck(this, Element);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, options));
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        protons: 7,
        symbol: 8,
        name: 0,
        mass: 9,
        _id: 10,
        id: 11,
        density: 12,
        crystallography: 13,
        sound: 14,
        electronic: 15,
        identity: 16,
        mechanical: 1,
        thermodynamics: 17,
        atomic: 2,
        history: 18,
        chemical: 19,
        periodic_table: 20,
        availability: 21,
        appearance: 22,
        magnetism: 23,
        allotropy: 24
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Element",
        options: options,
        id: create_fragment.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*density*/
      ctx[12] === undefined && !("density" in props)) {
        console.warn("<Element> was created without expected prop 'density'");
      }

      return _this;
    }

    _createClass(Element, [{
      key: "protons",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "symbol",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "name",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "mass",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "_id",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "id",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "density",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "crystallography",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "sound",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "electronic",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "identity",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "mechanical",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "thermodynamics",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "atomic",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "history",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "chemical",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "periodic_table",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "availability",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "appearance",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "magnetism",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "allotropy",
      get: function get() {
        throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Element;
  }(SvelteComponentDev);
  /* src\Table.svelte generated by Svelte v3.16.7 */


  var file$1 = "src\\Table.svelte";

  function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    child_ctx[6] = i;
    return child_ctx;
  }

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    child_ctx[3] = i;
    return child_ctx;
  } // (14:12) {:else}


  function create_else_block(ctx) {
    var current;
    var element_1_spread_levels = [
    /*element*/
    ctx[4], {
      id:
      /*element*/
      ctx[4]._id["$oid"]
    }];
    var element_1_props = {};

    for (var i = 0; i < element_1_spread_levels.length; i += 1) {
      element_1_props = assign(element_1_props, element_1_spread_levels[i]);
    }

    var element_1 = new Element({
      props: element_1_props,
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(element_1.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(element_1, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var element_1_changes = dirty &
        /*table*/
        1 ? get_spread_update(element_1_spread_levels, [get_spread_object(
        /*element*/
        ctx[4]), element_1_spread_levels[1]]) : {};
        element_1.$set(element_1_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(element_1.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(element_1.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(element_1, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block.name,
      type: "else",
      source: "(14:12) {:else}",
      ctx: ctx
    });
    return block;
  } // (12:12) {#if element === undefined}


  function create_if_block(ctx) {
    var section;
    var block = {
      c: function create() {
        section = element("section");
        attr_dev(section, "class", "empty svelte-alokeh");
        add_location(section, file$1, 12, 16, 280);
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(12:12) {#if element === undefined}",
      ctx: ctx
    });
    return block;
  } // (11:8) {#each row as element, i ("id" + r + i)}


  function create_each_block_1(key_1, ctx) {
    var first;
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block, create_else_block];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*element*/
      ctx[4] === undefined) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var block = {
      key: key_1,
      first: null,
      c: function create() {
        first = empty();
        if_block.c();
        if_block_anchor = empty();
        this.first = first;
      },
      m: function mount(target, anchor) {
        insert_dev(target, first, anchor);
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(first);
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1.name,
      type: "each",
      source: "(11:8) {#each row as element, i (\\\"id\\\" + r + i)}",
      ctx: ctx
    });
    return block;
  } // (10:4) {#each table as row, r}


  function create_each_block(ctx) {
    var each_blocks = [];
    var each_1_lookup = new Map();
    var each_1_anchor;
    var current;
    var each_value_1 =
    /*row*/
    ctx[1];

    var get_key = function get_key(ctx) {
      return "id" +
      /*r*/
      ctx[3] +
      /*i*/
      ctx[6];
    };

    for (var i = 0; i < each_value_1.length; i += 1) {
      var child_ctx = get_each_context_1(ctx, each_value_1, i);
      var key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
    }

    var block = {
      c: function create() {
        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].c();
        }

        each_1_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].m(target, anchor);
        }

        insert_dev(target, each_1_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var each_value_1 =
        /*row*/
        ctx[1];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
        check_outros();
      },
      i: function intro(local) {
        if (current) return;

        for (var _i4 = 0; _i4 < each_value_1.length; _i4 += 1) {
          transition_in(each_blocks[_i4]);
        }

        current = true;
      },
      o: function outro(local) {
        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          transition_out(each_blocks[_i5]);
        }

        current = false;
      },
      d: function destroy(detaching) {
        for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
          each_blocks[_i6].d(detaching);
        }

        if (detaching) detach_dev(each_1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(10:4) {#each table as row, r}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$1(ctx) {
    var div;
    var current;
    var each_value =
    /*table*/
    ctx[0];
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    var out = function out(i) {
      return transition_out(each_blocks[i], 1, 1, function () {
        each_blocks[i] = null;
      });
    };

    var block = {
      c: function create() {
        div = element("div");

        for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
          each_blocks[_i7].c();
        }

        attr_dev(div, "class", "svelte-alokeh");
        add_location(div, file$1, 8, 0, 141);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].m(div, null);
        }

        current = true;
      },
      p: function update(ctx, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            dirty = _ref4[0];

        if (dirty &
        /*table, undefined*/
        1) {
          each_value =
          /*table*/
          ctx[0];

          var _i9;

          for (_i9 = 0; _i9 < each_value.length; _i9 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i9);

            if (each_blocks[_i9]) {
              each_blocks[_i9].p(child_ctx, dirty);

              transition_in(each_blocks[_i9], 1);
            } else {
              each_blocks[_i9] = create_each_block(child_ctx);

              each_blocks[_i9].c();

              transition_in(each_blocks[_i9], 1);

              each_blocks[_i9].m(div, null);
            }
          }

          group_outros();

          for (_i9 = each_value.length; _i9 < each_blocks.length; _i9 += 1) {
            out(_i9);
          }

          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;

        for (var _i10 = 0; _i10 < each_value.length; _i10 += 1) {
          transition_in(each_blocks[_i10]);
        }

        current = true;
      },
      o: function outro(local) {
        each_blocks = each_blocks.filter(Boolean);

        for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
          transition_out(each_blocks[_i11]);
        }

        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$1($$self, $$props, $$invalidate) {
    var table = $$props.table;
    var writable_props = ["table"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Table> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$set = function ($$props) {
      if ("table" in $$props) $$invalidate(0, table = $$props.table);
    };

    $$self.$capture_state = function () {
      return {
        table: table
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("table" in $$props) $$invalidate(0, table = $$props.table);
    };

    return [table];
  }

  var Table =
  /*#__PURE__*/
  function (_SvelteComponentDev2) {
    _inherits(Table, _SvelteComponentDev2);

    function Table(options) {
      var _this2;

      _classCallCheck(this, Table);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, options));
      init(_assertThisInitialized(_this2), options, instance$1, create_fragment$1, safe_not_equal, {
        table: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this2),
        tagName: "Table",
        options: options,
        id: create_fragment$1.name
      });
      var ctx = _this2.$$.ctx;
      var props = options.props || {};

      if (
      /*table*/
      ctx[0] === undefined && !("table" in props)) {
        console.warn("<Table> was created without expected prop 'table'");
      }

      return _this2;
    }

    _createClass(Table, [{
      key: "table",
      get: function get() {
        throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Table;
  }(SvelteComponentDev);
  /* src\TableFilters.svelte generated by Svelte v3.16.7 */


  var file$2 = "src\\TableFilters.svelte";

  function create_fragment$2(ctx) {
    var section;
    var h2;
    var t1;
    var label;
    var t2;
    var input;
    var t3;
    var dispose;
    var block = {
      c: function create() {
        section = element("section");
        h2 = element("h2");
        h2.textContent = "Use these filter to highlight elements with specific properties";
        t1 = space();
        label = element("label");
        t2 = text("name ");
        input = element("input");
        t3 = text(
        /*name*/
        ctx[0]);
        add_location(h2, file$2, 9, 0, 48);
        add_location(input, file$2, 10, 16, 137);
        add_location(label, file$2, 10, 4, 125);
        attr_dev(section, "class", "svelte-1eq2oow");
        add_location(section, file$2, 8, 0, 38);
        dispose = listen_dev(input, "input",
        /*input_input_handler*/
        ctx[1]);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, h2);
        append_dev(section, t1);
        append_dev(section, label);
        append_dev(label, t2);
        append_dev(label, input);
        set_input_value(input,
        /*name*/
        ctx[0]);
        append_dev(label, t3);
      },
      p: function update(ctx, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            dirty = _ref6[0];

        if (dirty &
        /*name*/
        1 && input.value !==
        /*name*/
        ctx[0]) {
          set_input_value(input,
          /*name*/
          ctx[0]);
        }

        if (dirty &
        /*name*/
        1) set_data_dev(t3,
        /*name*/
        ctx[0]);
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
    var name;

    function input_input_handler() {
      name = this.value;
      $$invalidate(0, name);
    }

    $$self.$capture_state = function () {
      return {};
    };

    $$self.$inject_state = function ($$props) {
      if ("name" in $$props) $$invalidate(0, name = $$props.name);
    };

    return [name, input_input_handler];
  }

  var TableFilters =
  /*#__PURE__*/
  function (_SvelteComponentDev3) {
    _inherits(TableFilters, _SvelteComponentDev3);

    function TableFilters(options) {
      var _this3;

      _classCallCheck(this, TableFilters);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TableFilters).call(this, options));
      init(_assertThisInitialized(_this3), options, instance$2, create_fragment$2, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this3),
        tagName: "TableFilters",
        options: options,
        id: create_fragment$2.name
      });
      return _this3;
    }

    return TableFilters;
  }(SvelteComponentDev);
  /* src\PropList.svelte generated by Svelte v3.16.7 */


  var Object_1 = globals.Object;
  var file$3 = "src\\PropList.svelte";

  function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  } // (5:0) {#if Object.keys(list).length }


  function create_if_block$1(ctx) {
    var each_1_anchor;
    var current;
    var each_value = Object.keys(
    /*list*/
    ctx[0]).sort();
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }

    var out = function out(i) {
      return transition_out(each_blocks[i], 1, 1, function () {
        each_blocks[i] = null;
      });
    };

    var block = {
      c: function create() {
        for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
          each_blocks[_i12].c();
        }

        each_1_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (var _i13 = 0; _i13 < each_blocks.length; _i13 += 1) {
          each_blocks[_i13].m(target, anchor);
        }

        insert_dev(target, each_1_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*list, Object*/
        1) {
          each_value = Object.keys(
          /*list*/
          ctx[0]).sort();

          var _i14;

          for (_i14 = 0; _i14 < each_value.length; _i14 += 1) {
            var child_ctx = get_each_context$1(ctx, each_value, _i14);

            if (each_blocks[_i14]) {
              each_blocks[_i14].p(child_ctx, dirty);

              transition_in(each_blocks[_i14], 1);
            } else {
              each_blocks[_i14] = create_each_block$1(child_ctx);

              each_blocks[_i14].c();

              transition_in(each_blocks[_i14], 1);

              each_blocks[_i14].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          group_outros();

          for (_i14 = each_value.length; _i14 < each_blocks.length; _i14 += 1) {
            out(_i14);
          }

          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;

        for (var _i15 = 0; _i15 < each_value.length; _i15 += 1) {
          transition_in(each_blocks[_i15]);
        }

        current = true;
      },
      o: function outro(local) {
        each_blocks = each_blocks.filter(Boolean);

        for (var _i16 = 0; _i16 < each_blocks.length; _i16 += 1) {
          transition_out(each_blocks[_i16]);
        }

        current = false;
      },
      d: function destroy(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach_dev(each_1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(5:0) {#if Object.keys(list).length }",
      ctx: ctx
    });
    return block;
  } // (12:8) {:else}


  function create_else_block$1(ctx) {
    var p;
    var t_value =
    /*list*/
    ctx[0][
    /*prop*/
    ctx[1]] + "";
    var t;
    var block = {
      c: function create() {
        p = element("p");
        t = text(t_value);
        attr_dev(p, "class", "svelte-uoee8j");
        add_location(p, file$3, 12, 12, 290);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*list*/
        1 && t_value !== (t_value =
        /*list*/
        ctx[0][
        /*prop*/
        ctx[1]] + "")) set_data_dev(t, t_value);
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$1.name,
      type: "else",
      source: "(12:8) {:else}",
      ctx: ctx
    });
    return block;
  } // (10:8) {#if typeof list[prop] === 'object'}


  function create_if_block_1(ctx) {
    var p;
    var current;
    var proplist = new PropList({
      props: {
        list:
        /*list*/
        ctx[0][
        /*prop*/
        ctx[1]]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        p = element("p");
        create_component(proplist.$$.fragment);
        attr_dev(p, "class", "svelte-uoee8j");
        add_location(p, file$3, 10, 12, 221);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        mount_component(proplist, p, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        var proplist_changes = {};
        if (dirty &
        /*list*/
        1) proplist_changes.list =
        /*list*/
        ctx[0][
        /*prop*/
        ctx[1]];
        proplist.$set(proplist_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(proplist.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(proplist.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
        destroy_component(proplist);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1.name,
      type: "if",
      source: "(10:8) {#if typeof list[prop] === 'object'}",
      ctx: ctx
    });
    return block;
  } // (7:4) {#each Object.keys(list).sort() as prop}


  function create_each_block$1(ctx) {
    var details;
    var summary;
    var t0_value =
    /*prop*/
    ctx[1] + "";
    var t0;
    var t1;
    var current_block_type_index;
    var if_block;
    var t2;
    var current;
    var if_block_creators = [create_if_block_1, create_else_block$1];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (_typeof(
      /*list*/
      ctx[0][
      /*prop*/
      ctx[1]]) === "object") return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var block = {
      c: function create() {
        details = element("details");
        summary = element("summary");
        t0 = text(t0_value);
        t1 = space();
        if_block.c();
        t2 = space();
        attr_dev(summary, "class", "svelte-uoee8j");
        add_location(summary, file$3, 8, 4, 138);
        attr_dev(details, "class", "svelte-uoee8j");
        add_location(details, file$3, 7, 0, 124);
      },
      m: function mount(target, anchor) {
        insert_dev(target, details, anchor);
        append_dev(details, summary);
        append_dev(summary, t0);
        append_dev(details, t1);
        if_blocks[current_block_type_index].m(details, null);
        append_dev(details, t2);
        current = true;
      },
      p: function update(ctx, dirty) {
        if ((!current || dirty &
        /*list*/
        1) && t0_value !== (t0_value =
        /*prop*/
        ctx[1] + "")) set_data_dev(t0, t0_value);
        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(details, t2);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(details);
        if_blocks[current_block_type_index].d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$1.name,
      type: "each",
      source: "(7:4) {#each Object.keys(list).sort() as prop}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var show_if = Object.keys(
    /*list*/
    ctx[0]).length;
    var if_block_anchor;
    var current;
    var if_block = show_if && create_if_block$1(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            dirty = _ref8[0];

        if (dirty &
        /*list*/
        1) show_if = Object.keys(
        /*list*/
        ctx[0]).length;

        if (show_if) {
          if (if_block) {
            if_block.p(ctx, dirty);
            transition_in(if_block, 1);
          } else {
            if_block = create_if_block$1(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
    var _$$props$list = $$props.list,
        list = _$$props$list === void 0 ? {} : _$$props$list;
    var writable_props = ["list"];
    Object_1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PropList> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$set = function ($$props) {
      if ("list" in $$props) $$invalidate(0, list = $$props.list);
    };

    $$self.$capture_state = function () {
      return {
        list: list
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("list" in $$props) $$invalidate(0, list = $$props.list);
    };

    return [list];
  }

  var PropList =
  /*#__PURE__*/
  function (_SvelteComponentDev4) {
    _inherits(PropList, _SvelteComponentDev4);

    function PropList(options) {
      var _this4;

      _classCallCheck(this, PropList);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PropList).call(this, options));
      init(_assertThisInitialized(_this4), options, instance$3, create_fragment$3, safe_not_equal, {
        list: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this4),
        tagName: "PropList",
        options: options,
        id: create_fragment$3.name
      });
      return _this4;
    }

    _createClass(PropList, [{
      key: "list",
      get: function get() {
        throw new Error("<PropList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<PropList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return PropList;
  }(SvelteComponentDev);
  /* src\ElementInfo.svelte generated by Svelte v3.16.7 */


  var Object_1$1 = globals.Object;
  var file$4 = "src\\ElementInfo.svelte"; // (23:8) {:else}

  function create_else_block$2(ctx) {
    var h2;
    var block = {
      c: function create() {
        h2 = element("h2");
        h2.textContent = "the infos of the hovered element";
        attr_dev(h2, "class", "svelte-kg38dv");
        add_location(h2, file$4, 23, 12, 519);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h2, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(h2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$2.name,
      type: "else",
      source: "(23:8) {:else}",
      ctx: ctx
    });
    return block;
  } // (21:8) {#if selected}


  function create_if_block_1$1(ctx) {
    var h2;
    var block = {
      c: function create() {
        h2 = element("h2");
        h2.textContent = "click an element to set as reference for comparison";
        attr_dev(h2, "class", "svelte-kg38dv");
        add_location(h2, file$4, 21, 12, 430);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h2, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(h2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(21:8) {#if selected}",
      ctx: ctx
    });
    return block;
  } // (18:4) {#if Object.keys(element).length}


  function create_if_block$2(ctx) {
    var current;
    var proplist = new PropList({
      props: {
        list:
        /*elementFiltered*/
        ctx[2]()
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(proplist.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(proplist, target, anchor);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current) return;
        transition_in(proplist.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(proplist.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(proplist, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(18:4) {#if Object.keys(element).length}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$4(ctx) {
    var section;
    var show_if;
    var current_block_type_index;
    var if_block;
    var current;
    var if_block_creators = [create_if_block$2, create_if_block_1$1, create_else_block$2];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (dirty &
      /*element*/
      2) show_if = !!Object.keys(
      /*element*/
      ctx[1]).length;
      if (show_if) return 0;
      if (
      /*selected*/
      ctx[0]) return 1;
      return 2;
    }

    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var block = {
      c: function create() {
        section = element("section");
        if_block.c();
        attr_dev(section, "class", "svelte-kg38dv");
        add_location(section, file$4, 16, 0, 289);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        if_blocks[current_block_type_index].m(section, null);
        current = true;
      },
      p: function update(ctx, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            dirty = _ref10[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx, dirty);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(section, null);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        if_blocks[current_block_type_index].d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var _$$props$selected = $$props.selected,
        selected = _$$props$selected === void 0 ? false : _$$props$selected;
    var _$$props$element = $$props.element,
        element = _$$props$element === void 0 ? {} : _$$props$element;

    function elementFiltered() {
      delete element._id;
      delete element.name;
      return element;
    }

    var writable_props = ["selected", "element"];
    Object_1$1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ElementInfo> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$set = function ($$props) {
      if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
      if ("element" in $$props) $$invalidate(1, element = $$props.element);
    };

    $$self.$capture_state = function () {
      return {
        selected: selected,
        element: element
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
      if ("element" in $$props) $$invalidate(1, element = $$props.element);
    };

    return [selected, element, elementFiltered];
  }

  var ElementInfo =
  /*#__PURE__*/
  function (_SvelteComponentDev5) {
    _inherits(ElementInfo, _SvelteComponentDev5);

    function ElementInfo(options) {
      var _this5;

      _classCallCheck(this, ElementInfo);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ElementInfo).call(this, options));
      init(_assertThisInitialized(_this5), options, instance$4, create_fragment$4, safe_not_equal, {
        selected: 0,
        element: 1
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this5),
        tagName: "ElementInfo",
        options: options,
        id: create_fragment$4.name
      });
      return _this5;
    }

    _createClass(ElementInfo, [{
      key: "selected",
      get: function get() {
        throw new Error("<ElementInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ElementInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "element",
      get: function get() {
        throw new Error("<ElementInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ElementInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return ElementInfo;
  }(SvelteComponentDev);
  /* src\App.svelte generated by Svelte v3.16.7 */


  var console_1 = globals.console;
  var file$5 = "src\\App.svelte";

  function create_fragment$5(ctx) {
    var app;
    var main;
    var h1;
    var t1;
    var t2;
    var aside;
    var t3;
    var t4;
    var t5;
    var footer;
    var current;
    var table_1 = new Table({
      props: {
        table:
        /*table*/
        ctx[0]
      },
      $$inline: true
    });
    var elementinfo0 = new ElementInfo({
      props: {
        element:
        /*elementHovered*/
        ctx[1]
      },
      $$inline: true
    });
    var elementinfo1 = new ElementInfo({
      props: {
        element:
        /*elementSelected*/
        ctx[2],
        selected: true
      },
      $$inline: true
    });
    var tablefilters = new TableFilters({
      $$inline: true
    });
    var block = {
      c: function create() {
        app = element("app");
        main = element("main");
        h1 = element("h1");
        h1.textContent = "Periodic Table of Elements";
        t1 = space();
        create_component(table_1.$$.fragment);
        t2 = space();
        aside = element("aside");
        create_component(elementinfo0.$$.fragment);
        t3 = space();
        create_component(elementinfo1.$$.fragment);
        t4 = space();
        create_component(tablefilters.$$.fragment);
        t5 = space();
        footer = element("footer");
        footer.textContent = "Made by Dallgoot";
        attr_dev(h1, "class", "svelte-19ml0u3");
        add_location(h1, file$5, 38, 8, 1140);
        attr_dev(main, "class", "svelte-19ml0u3");
        add_location(main, file$5, 37, 4, 1125);
        attr_dev(aside, "class", "svelte-19ml0u3");
        add_location(aside, file$5, 41, 4, 1224);
        attr_dev(footer, "class", "svelte-19ml0u3");
        add_location(footer, file$5, 46, 4, 1376);
        attr_dev(app, "class", "svelte-19ml0u3");
        add_location(app, file$5, 36, 0, 1115);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, app, anchor);
        append_dev(app, main);
        append_dev(main, h1);
        append_dev(main, t1);
        mount_component(table_1, main, null);
        append_dev(app, t2);
        append_dev(app, aside);
        mount_component(elementinfo0, aside, null);
        append_dev(aside, t3);
        mount_component(elementinfo1, aside, null);
        append_dev(app, t4);
        mount_component(tablefilters, app, null);
        append_dev(app, t5);
        append_dev(app, footer);
        current = true;
      },
      p: function update(ctx, _ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
            dirty = _ref12[0];

        var table_1_changes = {};
        if (dirty &
        /*table*/
        1) table_1_changes.table =
        /*table*/
        ctx[0];
        table_1.$set(table_1_changes);
        var elementinfo0_changes = {};
        if (dirty &
        /*elementHovered*/
        2) elementinfo0_changes.element =
        /*elementHovered*/
        ctx[1];
        elementinfo0.$set(elementinfo0_changes);
        var elementinfo1_changes = {};
        if (dirty &
        /*elementSelected*/
        4) elementinfo1_changes.element =
        /*elementSelected*/
        ctx[2];
        elementinfo1.$set(elementinfo1_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(table_1.$$.fragment, local);
        transition_in(elementinfo0.$$.fragment, local);
        transition_in(elementinfo1.$$.fragment, local);
        transition_in(tablefilters.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(table_1.$$.fragment, local);
        transition_out(elementinfo0.$$.fragment, local);
        transition_out(elementinfo1.$$.fragment, local);
        transition_out(tablefilters.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(app);
        destroy_component(table_1);
        destroy_component(elementinfo0);
        destroy_component(elementinfo1);
        destroy_component(tablefilters);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$5.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$5($$self, $$props, $$invalidate) {
    var $hoveredElement;
    var $selectedElement;
    validate_store(hoveredElement, "hoveredElement");
    component_subscribe($$self, hoveredElement, function ($$value) {
      return $$invalidate(6, $hoveredElement = $$value);
    });
    validate_store(selectedElement, "selectedElement");
    component_subscribe($$self, selectedElement, function ($$value) {
      return $$invalidate(7, $selectedElement = $$value);
    });
    var elements = $$props.elements;
    var elementsById = {};
    var table = [];

    for (var i = 0; i <= 10; i++) {
      table[i] = Array(18);
    }

    for (var _i17 in elements) {
      var el = elements[_i17];
      elementsById[el._id["$oid"]] = el;

      if ("periodic_table" in el) {
        var ptable = el.periodic_table;
        var col = parseInt(ptable.group.replace(new RegExp("\\ *group *", "gm"), ""));
        var row = ptable.period;
        table[row][col] = el;
      } else {
        console.log(el.name);
      }
    }

    var writable_props = ["elements"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<App> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$set = function ($$props) {
      if ("elements" in $$props) $$invalidate(3, elements = $$props.elements);
    };

    $$self.$capture_state = function () {
      return {
        elements: elements,
        elementsById: elementsById,
        table: table,
        i: i,
        elementHovered: elementHovered,
        $hoveredElement: $hoveredElement,
        elementSelected: elementSelected,
        $selectedElement: $selectedElement
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("elements" in $$props) $$invalidate(3, elements = $$props.elements);
      if ("elementsById" in $$props) $$invalidate(4, elementsById = $$props.elementsById);
      if ("table" in $$props) $$invalidate(0, table = $$props.table);
      if ("i" in $$props) i = $$props.i;
      if ("elementHovered" in $$props) $$invalidate(1, elementHovered = $$props.elementHovered);
      if ("$hoveredElement" in $$props) hoveredElement.set($hoveredElement = $$props.$hoveredElement);
      if ("elementSelected" in $$props) $$invalidate(2, elementSelected = $$props.elementSelected);
      if ("$selectedElement" in $$props) selectedElement.set($selectedElement = $$props.$selectedElement);
    };

    var elementHovered;
    var elementSelected;

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*elementsById, $hoveredElement*/
      80) {
        $$invalidate(1, elementHovered = elementsById[$hoveredElement]);
      }

      if ($$self.$$.dirty &
      /*elementsById, $selectedElement*/
      144) {
        $$invalidate(2, elementSelected = elementsById[$selectedElement]);
      }
    };

    return [table, elementHovered, elementSelected, elements];
  }

  var App =
  /*#__PURE__*/
  function (_SvelteComponentDev6) {
    _inherits(App, _SvelteComponentDev6);

    function App(options) {
      var _this6;

      _classCallCheck(this, App);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, options));
      init(_assertThisInitialized(_this6), options, instance$5, create_fragment$5, safe_not_equal, {
        elements: 3
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this6),
        tagName: "App",
        options: options,
        id: create_fragment$5.name
      });
      var ctx = _this6.$$.ctx;
      var props = options.props || {};

      if (
      /*elements*/
      ctx[3] === undefined && !("elements" in props)) {
        console_1.warn("<App> was created without expected prop 'elements'");
      }

      return _this6;
    }

    _createClass(App, [{
      key: "elements",
      get: function get() {
        throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return App;
  }(SvelteComponentDev);

  var elements = [{
    _id: {
      $oid: "5dac5dd27644df7dcbf35831"
    },
    density: {
      stp: "10 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 6d 1 7s 2",
      negativity: "Pauling scale: 1.1",
      ionisation: ["1st: 499 kJ/mol", "2nd: 1170 kJ/mol", "3rd: 1900 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 9, 2]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "227 (most stable isotope)"
    },
    name: "actinium",
    thermodynamics: {
      molar_heat: "27.2 J/(mol·K)",
      enthalpy: "14 kJ/mol",
      conductivity: "12 W/(m·K)",
      boiling: "3500±300 K ​(3200±300 °C, ​5800±500 °F) (extrapolated)",
      vaporization: "400 kJ/mol",
      phase: "solid",
      melting: "1500 K ​(1227 °C, ​2240 °F) (estimated)"
    },
    identity: {
      pronunciation: "/ æ k ˈ t ɪ n i ə m / ​ ( ak- TIN -ee-əm )",
      cas: "7440-34-8"
    },
    atomic: {
      covalent_radius: "215 pm",
      number: 89
    },
    history: {
      named_by: "André-Louis Debierne (1899)",
      discovery: "Friedrich Oskar Giesel (1902)"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    periodic_table: {
      group: "group 3",
      category: "actinide , sometimes considered a transition metal",
      period: 7,
      block: "d-block"
    },
    appearance: "silvery-white, glowing with an eerie blue light; sometimes with a golden cast",
    chemical: {
      oxydation_states: "+2, +3 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd27644df7dcbf35832"
    },
    density: {
      stp: "2.70 g/cm 3",
      liquid: {
        mp: "2.375 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "(rolled) 5000 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Ne ] 3s 2 3p 1",
      resistivity: "26.5 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.61",
      ionisation: [],
      shells: [2, 8, 3]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "160–550 MPa",
        vickers: "160–350 MPa",
        mohs: "2.75"
      },
      shear: {
        modulus: "26 GPa"
      },
      compression: {
        bulk_modulus: "76 GPa"
      },
      strain: {
        poisson: "0.35"
      },
      stifness: {
        young: "70 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+16.5·10 −6 cm 3 /mol",
      ordering: "paramagnetic"
    },
    name: "aluminium",
    thermodynamics: {
      molar_heat: "24.20 J/(mol·K)",
      enthalpy: "10.71 kJ/mol",
      conductivity: "237 W/(m·K)",
      boiling: "2743 K ​(2470 °C, ​4478 °F)",
      vaporization: "284 kJ/mol",
      expansion: "23.1 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "933.47 K ​(660.32 °C, ​1220.58 °F)"
    },
    identity: {
      name: {
        alternative: "aluminum (U.S., Canada)"
      },
      pronunciation: "aluminium : / ˌ æ lj ʊ ˈ m ɪ n i ə m / ( listen ) ( AL -yuu- MIN -ee-əm ) aluminum : / ə ˈ lj uː m ɪ n ə m / ( listen ) ( ə- LEW -min-əm )",
      cas: "7429-90-5"
    },
    atomic: {
      covalent_radius: "121±4 pm",
      weight: "26.981 5384 (3)",
      number: 13,
      vanderwaals: "184 pm",
      radius: "empirical: 143 pm"
    },
    history: {
      prediction: "Antoine Lavoisier (1782)",
      discovery: "Hans Christian Ørsted (1824)",
      named_by: "Humphry Davy (1812)"
    },
    periodic_table: {
      group: "group 13 (boron group)",
      category: "post-transition metal , sometimes considered a metalloid",
      period: 3,
      block: "p-block"
    },
    appearance: "silvery gray metallic",
    chemical: {
      oxydation_states: "−2, −1, +1, +2, +3 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd27644df7dcbf35833"
    },
    density: {
      stp: "12 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 5f 7 7s 2",
      resistivity: "0.69 µΩ·m",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 578 kJ/mol"],
      shells: [2, 8, 18, 32, 25, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "243 (most stable isotope)"
    },
    magnetism: {
      susceptibiity: "+1000.0·10 −6 cm 3 /mol",
      ordering: "paramagnetic"
    },
    name: "americium",
    thermodynamics: {
      molar_heat: "62.7 J/(mol·K)",
      enthalpy: "14.39 kJ/mol",
      conductivity: "10 W/(m·K)",
      boiling: "2880 K ​(2607 °C, ​4725 °F) (calculated)",
      phase: "solid",
      melting: "1449 K ​(1176 °C, ​2149 °F)"
    },
    identity: {
      pronunciation: "/ ˌ æ m ɪ ˈ r ɪ s i ə m / ​ ( AM -ə- RISS -ee-əm )",
      cas: "7440-35-9"
    },
    atomic: {
      covalent_radius: "180±6 pm",
      number: 95,
      radius: "empirical: 173 pm"
    },
    history: {
      discovery: "Glenn T. Seaborg , Ralph A. James , Leon O. Morgan , Albert Ghiorso (1944)",
      named_by: "after the Americas"
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+2, +3 , +4, +5, +6, +7 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd27644df7dcbf35834"
    },
    density: {
      stp: "6.697 g/cm 3",
      liquid: {
        mp: "6.53 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ rhombohedral"
    },
    sound: {
      speed: "3420 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2 5p 3",
      resistivity: "417 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.05",
      ionisation: ["1st: 834 kJ/mol", "3rd: 2440 kJ/mol"],
      shells: [2, 8, 18, 18, 5]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      shear: {
        modulus: "20 GPa"
      },
      compression: {
        bulk_modulus: "42 GPa"
      },
      hardness: {
        brinell: "294–384 MPa",
        mohs: "3.0"
      },
      stifness: {
        young: "55 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−99.0·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "antimony",
    thermodynamics: {
      molar_heat: "25.23 J/(mol·K)",
      enthalpy: "19.79 kJ/mol",
      conductivity: "24.4 W/(m·K)",
      boiling: "1908 K ​(1635 °C, ​2975 °F)",
      vaporization: "193.43 kJ/mol",
      expansion: "11 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "903.78 K ​(630.63 °C, ​1167.13 °F)"
    },
    identity: {
      pronunciation: "UK : / ˈ æ n t ɪ m ə n i / ( AN -tih-mə-nee ) US : / ˈ æ n t ɪ m oʊ n i / ( AN -tih-moh-nee )",
      cas: "7440-36-0"
    },
    atomic: {
      covalent_radius: "139±5 pm",
      weight: "121.760(1)",
      number: 51,
      vanderwaals: "206 pm",
      radius: "empirical: 140 pm"
    },
    history: {
      discovery: "before 800 CE"
    },
    periodic_table: {
      group: "group 15 (pnictogens)",
      category: "metalloid",
      period: 5,
      block: "p-block"
    },
    appearance: "silvery lustrous gray",
    chemical: {
      oxydation_states: "−3 , −2, −1, +1, +2, +3 , +4, +5 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd27644df7dcbf35835"
    },
    density: {
      stp: "1.784 g/L",
      liquid: {
        bp: "1.3954 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "323 m/s (gas, at 27 °C)"
    },
    electronic: {
      configuration: "[ Ne ] 3s 2 3p 6",
      negativity: "Pauling scale: no data",
      ionisation: ["3rd: 3931 kJ/mol"],
      shells: [2, 8, 8]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−19.6·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "argon",
    thermodynamics: {
      molar_heat: "20.85 J/(mol·K)",
      enthalpy: "1.18 kJ/mol",
      triple: "83.8058 K, ​68.89 kPa",
      boiling: "87.302 K ​(−185.848 °C, ​−302.526 °F)",
      critical: "150.687 K, 4.863 MPa",
      conductivity: "17.72 × 10 − 3 W/(m·K)",
      phase: "gas",
      melting: "83.81 K ​(−189.34 °C, ​−308.81 °F)",
      vaporization: "6.53 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ ɑːr ɡ ɒ n / ​ ( AR -gon )",
      cas: "7440-37-1"
    },
    atomic: {
      covalent_radius: "106±10 pm",
      weight: "[ 39.792 , 39.963 ] conventional: 39.948",
      number: 18,
      vanderwaals: "188 pm"
    },
    history: {
      discovery: "Lord Rayleigh and William Ramsay (1894)"
    },
    periodic_table: {
      group: "group 18 (noble gases)",
      category: "noble gas",
      period: 3,
      block: "p-block"
    },
    appearance: "colorless gas exhibiting a lilac/violet glow when placed in an electric field",
    chemical: {
      oxydation_states: "0"
    }
  }, {
    _id: {
      $oid: "5dac5dd27644df7dcbf35836"
    },
    density: {
      stp: "5.727 g/cm 3",
      liquid: {
        mp: "5.22 g/cm 3"
      }
    },
    thermodynamics: {
      molar_heat: "24.64 J/(mol·K)",
      enthalpy: "grey: 24.44 kJ/mol",
      triple: "1090 K, ​3628 kPa",
      phase: "solid",
      critical: "1673 K, ? MPa",
      conductivity: "50.2 W/(m·K)",
      expansion: "5.6 µm/(m·K) (at r.t. )",
      sublimation: "887 K ​(615 °C, ​1137 °F)",
      vaporization: "34.76 kJ/mol (?)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 2 4p 3",
      resistivity: "333 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.18",
      ionisation: ["2nd: 1798 kJ/mol", "3rd: 2735 kJ/mol"],
      shells: [2, 8, 18, 5]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "1440 MPa",
        mohs: "3.5"
      },
      compression: {
        bulk_modulus: "22 GPa"
      },
      stifness: {
        young: "8 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−5.5·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "arsenic",
    allotropy: "grey (most common), yellow, black",
    identity: {
      pronunciation: "/ ˈ ɑːr s n ɪ k / ( ARS -nik ) as an adjective: / ɑːr ˈ s ɛ n ɪ k / ( ar- SEN -ik )",
      cas: "7440-38-2"
    },
    atomic: {
      covalent_radius: "119±4 pm",
      weight: "74.921 595 (6)",
      number: 33,
      vanderwaals: "185 pm",
      radius: "empirical: 119 pm"
    },
    history: {
      discovery: "before 300 CE"
    },
    crystallography: {
      structure: "​ rhombohedral"
    },
    periodic_table: {
      group: "group 15 (pnictogens)",
      category: "metalloid",
      period: 4,
      block: "p-block"
    },
    appearance: "metallic grey",
    chemical: {
      oxydation_states: "−3 , −2, −1, +1, +2, +3 , +4, +5 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35837"
    },
    density: {
      stp: "(At 2 ) 6.35±0.15 g/cm 3 (predicted)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2 6p 5",
      negativity: "Pauling scale: 2.2",
      ionisation: [],
      shells: [2, 8, 18, 32, 18, 7]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      molar_volume: "(At 2 ) 32.94 cm 3 /mol (predicted)",
      mass: "210 (most stable isotope)"
    },
    name: "astatine",
    thermodynamics: {
      boiling: "610 K ​(337 °C, ​639 °F)",
      conductivity: "1.7 W/(m·K)",
      phase: "solid",
      vaporization: "(At 2 ) 54.39 kJ/mol",
      melting: "575 K ​(302 °C, ​576 °F)"
    },
    identity: {
      pronunciation: "/ ˈ æ s t ə t iː n , - t ɪ n / ​ ( AS -tə-teen, -⁠tin )",
      cas: "7440-68-8"
    },
    atomic: {
      covalent_radius: "150 pm",
      number: 85,
      vanderwaals: "202 pm"
    },
    history: {
      discovery: "Dale R. Corson , Kenneth Ross MacKenzie , Emilio Segrè (1940)",
      named_by: "after Greek astatos (αστατος), meaning \"unstable\""
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) (predicted)"
    },
    periodic_table: {
      group: "group 17 (halogens)",
      category: "metalloid , sometimes classified as a nonmetal, or a metal",
      period: 6,
      block: "p-block"
    },
    appearance: "unknown, probably metallic",
    chemical: {
      oxydation_states: "−1 , +1 , +3, +5, +7"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35838"
    },
    density: {
      stp: "3.51 g/cm 3",
      liquid: {
        mp: "3.338 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "1620 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 6s 2",
      resistivity: "332 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.89",
      ionisation: ["3rd: 3600 kJ/mol"],
      shells: [2, 8, 18, 18, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      shear: {
        modulus: "4.9 GPa"
      },
      compression: {
        bulk_modulus: "9.6 GPa"
      },
      hardness: {
        mohs: "1.25"
      },
      stifness: {
        young: "13 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+20.6·10 −6 cm 3 /mol",
      ordering: "paramagnetic"
    },
    name: "barium",
    thermodynamics: {
      molar_heat: "28.07 J/(mol·K)",
      enthalpy: "7.12 kJ/mol",
      conductivity: "18.4 W/(m·K)",
      boiling: "2118 K ​(1845 °C, ​3353 °F)",
      vaporization: "142 kJ/mol",
      expansion: "20.6 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1000 K ​(727 °C, ​1341 °F)"
    },
    identity: {
      pronunciation: "/ ˈ b ɛər i ə m / ​ ( BAIR -ee-əm )",
      cas: "7440-39-3"
    },
    atomic: {
      covalent_radius: "215±11 pm",
      weight: "137.327(7)",
      number: 56,
      vanderwaals: "268 pm",
      radius: "empirical: 222 pm"
    },
    history: {
      isolation: "Humphry Davy (1808)",
      discovery: "Carl Wilhelm Scheele (1772)"
    },
    periodic_table: {
      group: "group 2 (alkaline earth metals)",
      category: "alkaline earth metals",
      period: 6,
      block: "s-block"
    },
    appearance: "silvery gray; with a pale yellow tint",
    chemical: {
      oxydation_states: "+1, +2 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35839"
    },
    density: {
      stp: "alpha: 14.78 g/cm 3 beta: 13.25 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 5f 9 7s 2",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 601 kJ/mol"],
      shells: [2, 8, 18, 32, 27, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "247 (most stable isotope)"
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "berkelium",
    thermodynamics: {
      boiling: "beta: 2900 K ​(2627 °C, ​4760 °F)",
      enthalpy: "7.92 kJ/mol (calculated)",
      conductivity: "10 W/(m·K)",
      phase: "solid",
      melting: "beta: 1259 K ​(986 °C, ​1807 °F)"
    },
    identity: {
      pronunciation: "/ b ər ˈ k ɛ l i ə m / ( bər- KEL -ee-əm ) / ˈ b ɜːr k l i ə m / ( BUR -klee-əm )",
      cas: "7440-40-6"
    },
    atomic: {
      number: 97,
      radius: "empirical: 170 pm"
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory (1949)",
      named_by: "after Berkeley, California , where it was discovered"
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery",
    chemical: {
      oxydation_states: "+2, +3 , +4, +5"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf3583a"
    },
    density: {
      stp: "1.85 g/cm 3",
      liquid: {
        mp: "1.690 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "12,890 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ He ] 2s 2",
      resistivity: "36 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.57",
      ionisation: [],
      shells: [2, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "590–1320 MPa",
        vickers: "1670 MPa",
        mohs: "5.5"
      },
      shear: {
        modulus: "132 GPa"
      },
      compression: {
        bulk_modulus: "130 GPa"
      },
      strain: {
        poisson: "0.032"
      },
      stifness: {
        young: "287 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−9.0·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "beryllium",
    thermodynamics: {
      molar_heat: "16.443 J/(mol·K)",
      enthalpy: "12.2 kJ/mol",
      conductivity: "200 W/(m·K)",
      boiling: "2742 K ​(2469 °C, ​4476 °F)",
      critical: "5205 K, MPa (extrapolated)",
      expansion: "11.3 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1560 K ​(1287 °C, ​2349 °F)",
      vaporization: "292 kJ/mol"
    },
    identity: {
      pronunciation: "/ b ə ˈ r ɪ l i ə m / ​ ( bə- RIL -ee-əm )",
      cas: "7440-41-7"
    },
    atomic: {
      covalent_radius: "96±3 pm",
      weight: "9.012 1831 (5)",
      number: 4,
      vanderwaals: "153 pm",
      radius: "empirical: 112 pm"
    },
    history: {
      isolation: "Friedrich Wöhler & Antoine Bussy (1828)",
      discovery: "Louis Nicolas Vauquelin (1798)"
    },
    periodic_table: {
      group: "group 2 (alkaline earth metals)",
      category: "alkaline earth metal",
      period: 2,
      block: "s-block"
    },
    appearance: "white-gray metallic",
    chemical: {
      oxydation_states: "+1, +2 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf3583b"
    },
    density: {
      stp: "9.78 g/cm 3",
      liquid: {
        mp: "10.05 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ rhombohedral"
    },
    sound: {
      speed: "1790 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2 6p 3",
      resistivity: "1.29 µΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.02",
      ionisation: ["1st: 703 kJ/mol", "2nd: 1610 kJ/mol", "3rd: 2466 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 5]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "70–95 MPa",
        mohs: "2.25"
      },
      shear: {
        modulus: "12 GPa"
      },
      compression: {
        bulk_modulus: "31 GPa"
      },
      strain: {
        poisson: "0.33"
      },
      stifness: {
        young: "32 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−280.1·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "bismuth",
    thermodynamics: {
      molar_heat: "25.52 J/(mol·K)",
      enthalpy: "11.30 kJ/mol",
      conductivity: "7.97 W/(m·K)",
      boiling: "1837 K ​(1564 °C, ​2847 °F)",
      vaporization: "179 kJ/mol",
      expansion: "13.4 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "544.7 K ​(271.5 °C, ​520.7 °F)"
    },
    identity: {
      pronunciation: "/ ˈ b ɪ z m ə θ / ​ ( BIZ -məth )",
      cas: "7440-69-9"
    },
    atomic: {
      covalent_radius: "148±4 pm",
      weight: "208.980 40 (1)",
      number: 83,
      vanderwaals: "207 pm",
      radius: "empirical: 156 pm"
    },
    history: {
      discovery: "Claude François Geoffroy (1753)"
    },
    periodic_table: {
      group: "group 15 (pnictogens)",
      category: "post-transition metal",
      period: 6,
      block: "p-block"
    },
    appearance: "lustrous brownish silver",
    chemical: {
      oxydation_states: "−3, −2, −1, +1, +2, +3 , +4, +5 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf3583c"
    },
    density: {
      stp: "37.1 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 5 7s 2",
      ionisation: ["1st: 740 kJ/mol", "2nd: 1690 kJ/mol", "3rd: 2570 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 13, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "270 (most stable isotope) (unconfirmed: 278)"
    },
    name: "bohrium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ ˈ b ɔːr i ə m / ( listen ) ​ ( BOHR -ee-əm )",
      cas: "54037-14-8"
    },
    atomic: {
      covalent_radius: "141 pm (estimated)",
      number: 107,
      radius: "empirical: 128 pm (predicted)"
    },
    history: {
      discovery: "Gesellschaft für Schwerionenforschung (1981)",
      named_by: "after Niels Bohr"
    },
    periodic_table: {
      group: "group 7",
      category: "transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "( +3 ), ( +4 ), ( +5 ), +7 (parenthesized: prediction )"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf3583d"
    },
    density: {
      liquid: {
        mp: "2.08 g/cm 3"
      }
    },
    thermodynamics: {
      molar_heat: "11.087 J/(mol·K)",
      enthalpy: "50.2 kJ/mol",
      conductivity: "27.4 W/(m·K)",
      boiling: "4200 K ​(3927 °C, ​7101 °F)",
      vaporization: "508 kJ/mol",
      expansion: "β form: 5–7 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2349 K ​(2076 °C, ​3769 °F)"
    },
    electronic: {
      configuration: "[ He ] 2s 2 2p 1",
      resistivity: "~10 6 Ω·m (at 20 °C)",
      negativity: "Pauling scale: 2.04",
      ionisation: [],
      shells: [2, 3]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        mohs: "~9.5"
      }
    },
    magnetism: {
      susceptibiity: "−6.7·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "boron",
    allotropy: "α-, β-rhombohedral, β-tetragonal (and more )",
    identity: {
      pronunciation: "/ ˈ b ɔːr ɒ n / ​ ( BOHR -on )",
      cas: "7440-42-8"
    },
    atomic: {
      covalent_radius: "84±3 pm",
      weight: "[ 10.806 , 10.821 ] conventional: 10.81",
      number: 5,
      vanderwaals: "192 pm",
      radius: "empirical: 90 pm"
    },
    history: {
      isolation: "Humphry Davy (9 July 1808)",
      discovery: "Joseph Louis Gay-Lussac and Louis Jacques Thénard (30 June 1808)"
    },
    crystallography: {
      structure: "​ rhombohedral"
    },
    periodic_table: {
      group: "group 13 (boron group)",
      category: "metalloid",
      period: 2,
      block: "p-block"
    },
    sound: {
      speed: "16,200 m/s (at 20 °C)"
    },
    appearance: "black-brown",
    chemical: {
      oxydation_states: "−5, −1, +1, +2, +3 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf3583e"
    },
    density: {
      stp: "Br 2 , liquid: 3.1028 g/cm 3"
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    sound: {
      speed: "206 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 2 4p 5",
      resistivity: "7.8×10 10 Ω·m (at 20 °C)",
      negativity: "Pauling scale: 2.96",
      ionisation: ["2nd: 2103 kJ/mol", "3rd: 3470 kJ/mol"],
      shells: [2, 8, 18, 7]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−56.4·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "bromine",
    thermodynamics: {
      molar_heat: "(Br 2 ) 75.69 J/(mol·K)",
      enthalpy: "(Br 2 ) 10.571 kJ/mol",
      triple: "265.90 K, ​5.8 kPa",
      boiling: "332.0 K ​(58.8 °C, ​137.8 °F)",
      critical: "588 K, 10.34 MPa",
      conductivity: "0.122 W/(m·K)",
      phase: "liquid",
      melting: "265.8 K ​(−7.2 °C, ​19 °F)",
      vaporization: "(Br 2 ) 29.96 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ b r oʊ m iː n , - m ɪ n , - m aɪ n / ​ ( BROH -meen, -⁠min, -⁠myn )",
      cas: "7726-95-6"
    },
    atomic: {
      covalent_radius: "120±3 pm",
      weight: "[ 79.901 , 79.907 ] conventional: 79.904",
      number: 35,
      vanderwaals: "185 pm",
      radius: "empirical: 120 pm"
    },
    history: {
      discovery: "Antoine Jérôme Balard and Carl Jacob Löwig (1825)"
    },
    periodic_table: {
      group: "group 17 (halogens)",
      category: "reactive nonmetal",
      period: 4,
      block: "p-block"
    },
    appearance: "reddish-brown",
    chemical: {
      oxydation_states: "−1 , +1 , +3 , +4, +5 , +7 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf3583f"
    },
    density: {
      stp: "8.65 g/cm 3",
      liquid: {
        mp: "7.996 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "2310 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2",
      resistivity: "72.7 nΩ·m (at 22 °C)",
      negativity: "Pauling scale: 1.69",
      ionisation: ["3rd: 3616 kJ/mol"],
      shells: [2, 8, 18, 18, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "203–220 MPa",
        mohs: "2.0"
      },
      shear: {
        modulus: "19 GPa"
      },
      compression: {
        bulk_modulus: "42 GPa"
      },
      strain: {
        poisson: "0.30"
      },
      stifness: {
        young: "50 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−19.8·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "cadmium",
    thermodynamics: {
      molar_heat: "26.020 J/(mol·K)",
      enthalpy: "6.21 kJ/mol",
      conductivity: "96.6 W/(m·K)",
      boiling: "1040 K ​(767 °C, ​1413 °F)",
      vaporization: "99.87 kJ/mol",
      expansion: "30.8 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "594.22 K ​(321.07 °C, ​609.93 °F)"
    },
    identity: {
      pronunciation: "/ ˈ k æ d m i ə m / ​ ( KAD -mee-əm )",
      cas: "7440-43-9"
    },
    atomic: {
      covalent_radius: "144±9 pm",
      weight: "112.414(4)",
      number: 48,
      vanderwaals: "158 pm",
      radius: "empirical: 151 pm"
    },
    history: {
      named_by: "Friedrich Stromeyer (1817)",
      discovery: "Karl Samuel Leberecht Hermann and Friedrich Stromeyer (1817)"
    },
    periodic_table: {
      group: "group 12",
      category: "post-transition metal , alternatively considered a transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "silvery bluish-gray metallic",
    chemical: {
      oxydation_states: "−2, +1, +2 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35840"
    },
    density: {
      stp: "1.93 g/cm 3",
      liquid: {
        mp: "1.843 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centred cubic (bcc)"
    },
    electronic: {
      configuration: "[ Xe ] 6s 1",
      resistivity: "205 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.79",
      ionisation: ["3rd: 3400 kJ/mol"],
      shells: [2, 8, 18, 18, 8, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "0.14 MPa",
        mohs: "0.2"
      },
      compression: {
        bulk_modulus: "1.6 GPa"
      },
      stifness: {
        young: "1.7 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "caesium",
    thermodynamics: {
      molar_heat: "32.210 J/(mol·K)",
      enthalpy: "2.09 kJ/mol",
      conductivity: "35.9 W/(m·K)",
      boiling: "944 K ​(671 °C, ​1240 °F)",
      critical: "1938 K, 9.4 MPa",
      expansion: "97 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "301.7 K ​(28.5 °C, ​83.3 °F)",
      vaporization: "63.9 kJ/mol"
    },
    identity: {
      name: {
        alternative: "cesium (US, informal)"
      },
      pronunciation: "/ ˈ s iː z i ə m / ​ ( SEE -zee-əm )",
      cas: "7440-46-2"
    },
    atomic: {
      covalent_radius: "244±11 pm",
      weight: "132.905 451 96 (6)",
      number: 55,
      vanderwaals: "343 pm",
      radius: "empirical: 265 pm"
    },
    history: {
      discovery: "Robert Bunsen and Gustav Kirchhoff (1860)",
      named_by: "from Latin caesius , sky blue, for its spectral colours",
      isolation: "Carl Setterberg (1882)"
    },
    periodic_table: {
      group: "group 1 (alkali metals)",
      category: "alkali metal",
      period: 6,
      block: "s-block"
    },
    appearance: "pale gold",
    chemical: {
      oxydation_states: "−1, +1 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35841"
    },
    density: {
      stp: "1.55 g/cm 3",
      liquid: {
        mp: "1.378 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centred cubic (fcc)"
    },
    sound: {
      speed: "3810 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 4s 2",
      resistivity: "33.6 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.00",
      ionisation: [],
      shells: [2, 8, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "170–416 MPa",
        mohs: "1.75"
      },
      shear: {
        modulus: "7.4 GPa"
      },
      compression: {
        bulk_modulus: "17 GPa"
      },
      strain: {
        poisson: "0.31"
      },
      stifness: {
        young: "20 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+40.0·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "calcium",
    thermodynamics: {
      molar_heat: "25.929 J/(mol·K)",
      enthalpy: "8.54 kJ/mol",
      conductivity: "201 W/(m·K)",
      boiling: "1757 K ​(1484 °C, ​2703 °F)",
      vaporization: "154.7 kJ/mol",
      expansion: "22.3 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1115 K ​(842 °C, ​1548 °F)"
    },
    identity: {
      cas: "7440-70-2"
    },
    atomic: {
      covalent_radius: "176±10 pm",
      weight: "40.078(4)",
      number: 20,
      vanderwaals: "231 pm",
      radius: "empirical: 197 pm"
    },
    history: {
      discovery: "Humphry Davy (1808)"
    },
    periodic_table: {
      group: "group 2 (alkaline earth metals)",
      category: "alkaline earth metal",
      period: 4,
      block: "s-block"
    },
    appearance: "dull gray, silver; with a pale yellow tint",
    chemical: {
      oxydation_states: "+1, +2 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35842"
    },
    density: {
      stp: "15.1 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 5f 10 7s 2",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 608 kJ/mol"],
      shells: [2, 8, 18, 32, 28, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      hardness: {
        mohs: "3–4"
      },
      mass: "251 (most stable isotope)"
    },
    name: "californium",
    thermodynamics: {
      boiling: "1743 K ​(1470 °C, ​2678 °F) (estimation)",
      phase: "solid",
      melting: "1173 K ​(900 °C, ​1652 °F)"
    },
    identity: {
      pronunciation: "/ ˌ k æ l ɪ ˈ f ɔːr n i ə m / ​ ( KAL -ə- FOR -nee-əm )",
      cas: "7440-71-3"
    },
    atomic: {
      number: 98
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory (1950)",
      named_by: "after California , where it was discovered"
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery",
    chemical: {
      oxydation_states: "+2, +3 , +4, +5"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35843"
    },
    density: {
      stp: "amorphous: 1.8–2.1 g/cm 3 graphite: 2.267 g/cm 3 diamond: 3.515 g/cm 3"
    },
    crystallography: {
      structure: "diamond: ​ face-centered diamond-cubic (clear)"
    },
    thermodynamics: {
      molar_heat: "graphite: 8.517 J/(mol·K) diamond: 6.155 J/(mol·K)",
      enthalpy: "graphite: 117 kJ/mol",
      triple: "4600 K, ​10,800 kPa",
      phase: "solid",
      conductivity: "graphite: 119–165 W/(m·K) diamond: 900–2300 W/(m·K)",
      expansion: "diamond: 0.8 µm/(m·K) (at 25 °C)",
      sublimation: "3915 K ​(3642 °C, ​6588 °F)"
    },
    electronic: {
      configuration: "[ He ] 2s 2 2p 2",
      resistivity: "graphite: 7.837 µΩ·m",
      negativity: "Pauling scale: 2.55",
      ionisation: [],
      shells: [2, 4]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        mohs: "graphite: 1–2 diamond: 10"
      },
      shear: {
        modulus: "diamond: 478 GPa"
      },
      compression: {
        bulk_modulus: "diamond: 442 GPa"
      },
      strain: {
        poisson: "diamond: 0.1"
      },
      stifness: {
        young: "diamond: 1050 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−5.9·10 −6 (graph.) cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "carbon",
    allotropy: "graphite , diamond , others",
    identity: {
      cas: "graphite: 7782-42-5 diamond: 7782-40-3"
    },
    atomic: {
      covalent_radius: "sp 3 : 77 pm sp 2 : 73 pm sp: 69 pm",
      weight: "[ 12.0096 , 12.0116 ] conventional: 12.011",
      number: 6,
      vanderwaals: "170 pm"
    },
    history: {
      recognised: "Antoine Lavoisier (1789)",
      discovery: "Egyptians and Sumerians (3750 BCE)"
    },
    periodic_table: {
      group: "group 14 (carbon group)",
      category: "reactive nonmetal , sometimes considered a metalloid",
      period: 2,
      block: "p-block"
    },
    sound: {
      speed: "diamond: 18,350 m/s (at 20 °C)"
    },
    appearance: "graphite: black diamond: clear",
    chemical: {
      oxydation_states: "−4 , −3 , −2 , −1 , 0 , +1, +2, +3, +4 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35844"
    },
    density: {
      stp: "6.770 g/cm 3",
      liquid: {
        mp: "6.55 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) γ-Ce"
    },
    sound: {
      speed: "2100 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 1 5d 1 6s 2",
      resistivity: "β, poly: 828 nΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.12",
      ionisation: ["2nd: 1050 kJ/mol", "3rd: 1949 kJ/mol"],
      shells: [2, 8, 18, 19, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "186–412 MPa",
        vickers: "210–470 MPa",
        mohs: "2.5"
      },
      shear: {
        modulus: "γ form: 13.5 GPa"
      },
      compression: {
        bulk_modulus: "γ form: 21.5 GPa"
      },
      strain: {
        poisson: "γ form: 0.24"
      },
      stifness: {
        young: "γ form: 33.6 GPa"
      }
    },
    magnetism: {
      susceptibiity: "(β) +2450.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "cerium",
    thermodynamics: {
      molar_heat: "26.94 J/(mol·K)",
      enthalpy: "5.46 kJ/mol",
      conductivity: "11.3 W/(m·K)",
      boiling: "3716 K ​(3443 °C, ​6229 °F)",
      vaporization: "398 kJ/mol",
      expansion: "γ, poly: 6.3 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1068 K ​(795 °C, ​1463 °F)"
    },
    identity: {
      pronunciation: "/ ˈ s ɪər i ə m / ​ ( SEER -ee-əm )",
      cas: "7440-45-1"
    },
    atomic: {
      covalent_radius: "204±9 pm",
      weight: "140.116(1)",
      number: 58,
      radius: "empirical: 181.8 pm"
    },
    history: {
      discovery: "Martin Heinrich Klaproth , Jöns Jakob Berzelius , Wilhelm Hisinger (1803)",
      named_by: "after dwarf planet Ceres , itself named after Roman deity of agriculture Ceres",
      isolation: "Carl Gustaf Mosander (1838)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 , +4 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35845"
    },
    density: {
      stp: "3.2 g/L",
      liquid: {
        bp: "1.5625 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    sound: {
      speed: "206 m/s (gas, at 0 °C)"
    },
    electronic: {
      configuration: "[ Ne ] 3s 2 3p 5",
      resistivity: ">10 Ω·m (at 20 °C)",
      negativity: "Pauling scale: 3.16",
      ionisation: ["2nd: 2298 kJ/mol", "3rd: 3822 kJ/mol"],
      shells: [2, 8, 7]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−40.5·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "chlorine",
    thermodynamics: {
      molar_heat: "(Cl 2 ) 33.949 J/(mol·K)",
      enthalpy: "(Cl 2 ) 6.406 kJ/mol",
      conductivity: "8.9 × 10 − 3 W/(m·K)",
      boiling: "239.11 K ​(−34.04 °C, ​−29.27 °F)",
      critical: "416.9 K, 7.991 MPa",
      phase: "gas",
      melting: "171.6 K ​(−101.5 °C, ​−150.7 °F)",
      vaporization: "(Cl 2 ) 20.41 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ k l ɔːr iː n , - aɪ n / ​ ( KLOHR -een, -⁠eyen )",
      cas: "(Cl 2 ) 7782-50-5"
    },
    atomic: {
      covalent_radius: "102±4 pm",
      weight: "[ 35.446 , 35.457 ] conventional: 35.45",
      number: 17,
      vanderwaals: "175 pm"
    },
    history: {
      recognised: "Humphry Davy (1808)",
      discovery: "Carl Wilhelm Scheele (1774)"
    },
    periodic_table: {
      group: "group 17 (halogens)",
      category: "reactive nonmetal",
      period: 3,
      block: "p-block"
    },
    appearance: "pale yellow-green gas",
    chemical: {
      oxydation_states: "−1 , +1 , +2, +3 , +4, +5 , +6, +7 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35846"
    },
    density: {
      stp: "7.19 g/cm 3",
      liquid: {
        mp: "6.3 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "5940 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 5 4s 1",
      resistivity: "125 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.66",
      ionisation: ["3rd: 2987 kJ/mol"],
      shells: [2, 8, 13, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "687–6500 MPa",
        vickers: "1060 MPa",
        mohs: "8.5"
      },
      shear: {
        modulus: "115 GPa"
      },
      compression: {
        bulk_modulus: "160 GPa"
      },
      strain: {
        poisson: "0.21"
      },
      stifness: {
        young: "279 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+280.0·10 −6 cm 3 /mol (273 K)",
      ordering: "antiferromagnetic (rather: SDW )"
    },
    name: "chromium",
    thermodynamics: {
      molar_heat: "23.35 J/(mol·K)",
      enthalpy: "21.0 kJ/mol",
      conductivity: "93.9 W/(m·K)",
      boiling: "2944 K ​(2671 °C, ​4840 °F)",
      vaporization: "347 kJ/mol",
      expansion: "4.9 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2180 K ​(1907 °C, ​3465 °F)"
    },
    identity: {
      cas: "7440-47-3"
    },
    atomic: {
      covalent_radius: "139±5 pm",
      weight: "51.9961(6)",
      number: 24,
      radius: "empirical: 128 pm"
    },
    history: {
      discovery: "Louis Nicolas Vauquelin (1794, 1797)"
    },
    periodic_table: {
      group: "group 6",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "silvery metallic",
    chemical: {
      oxydation_states: "−4, −2, −1, +1, +2, +3 , +4, +5, +6 (depending on the oxidation state, an acidic, basic, or amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35847"
    },
    density: {
      stp: "8.90 g/cm 3",
      liquid: {
        mp: "8.86 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "4720 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 7 4s 2",
      resistivity: "62.4 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.88",
      ionisation: ["2nd: 1648 kJ/mol", "3rd: 3232 kJ/mol"],
      shells: [2, 8, 15, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "470–3000 MPa",
        vickers: "1043 MPa",
        mohs: "5.0"
      },
      shear: {
        modulus: "75 GPa"
      },
      compression: {
        bulk_modulus: "180 GPa"
      },
      strain: {
        poisson: "0.31"
      },
      stifness: {
        young: "209 GPa"
      }
    },
    magnetism: {
      ordering: "ferromagnetic"
    },
    name: "cobalt",
    thermodynamics: {
      molar_heat: "24.81 J/(mol·K)",
      enthalpy: "16.06 kJ/mol",
      conductivity: "100 W/(m·K)",
      boiling: "3200 K ​(2927 °C, ​5301 °F)",
      vaporization: "377 kJ/mol",
      expansion: "13.0 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1768 K ​(1495 °C, ​2723 °F)"
    },
    identity: {
      pronunciation: "/ ˈ k oʊ b ɒ l t / ( listen )",
      cas: "7440-48-4"
    },
    atomic: {
      covalent_radius: "Low spin: 126±3 pm High spin: 150±7 pm",
      weight: "58.933 194 (3)",
      number: 27,
      radius: "empirical: 125 pm"
    },
    history: {
      discovery: "Georg Brandt (1735)"
    },
    periodic_table: {
      group: "group 9",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "hard lustrous bluish gray metal",
    chemical: {
      oxydation_states: "−3, −1, +1, +2 , +3 , +4, +5 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35848"
    },
    density: {
      liquid: {
        mp: "23.7 g/cm 3 (predicted)"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 (predicted)",
      ionisation: ["1st: 1155 kJ/mol", "2nd: 2170 kJ/mol", "3rd: 3160 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 18, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "285 (most stable isotope)"
    },
    name: "copernicium",
    thermodynamics: {
      boiling: "357 +112 −108 K ​( 84 +112 −108 °C, ​ 183 +202 −194 °F)",
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ ˌ k oʊ p ər ˈ n ɪ s i ə m / ​ ( KOH -pər- NIS -ee-əm )",
      cas: "54084-26-3"
    },
    atomic: {
      covalent_radius: "122 pm (predicted)",
      number: 112,
      radius: "calculated: 147 pm (predicted)"
    },
    history: {
      discovery: "Gesellschaft für Schwerionenforschung (1996)",
      named_by: "after Nicolaus Copernicus"
    },
    periodic_table: {
      group: "group 12",
      category: "post-transition metal , alternatively considered a transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "0 , (+1), +2 , (+4) (parenthesized: prediction )"
    }
  }, {
    _id: {
      $oid: "5dac5dd37644df7dcbf35849"
    },
    density: {
      stp: "8.96 g/cm 3",
      liquid: {
        mp: "8.02 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "(annealed) 3810 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 1",
      resistivity: "16.78 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.90",
      ionisation: ["3rd: 3555 kJ/mol"],
      shells: [2, 8, 18, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "235–878 MPa",
        vickers: "343–369 MPa",
        mohs: "3.0"
      },
      shear: {
        modulus: "48 GPa"
      },
      compression: {
        bulk_modulus: "140 GPa"
      },
      strain: {
        poisson: "0.34"
      },
      stifness: {
        young: "110–128 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−5.46·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "copper",
    thermodynamics: {
      molar_heat: "24.440 J/(mol·K)",
      enthalpy: "13.26 kJ/mol",
      conductivity: "401 W/(m·K)",
      boiling: "2835 K ​(2562 °C, ​4643 °F)",
      vaporization: "300.4 kJ/mol",
      expansion: "16.5 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1357.77 K ​(1084.62 °C, ​1984.32 °F)"
    },
    identity: {
      cas: "7440-50-8"
    },
    atomic: {
      covalent_radius: "132±4 pm",
      weight: "63.546(3)",
      number: 29,
      vanderwaals: "140 pm",
      radius: "empirical: 128 pm"
    },
    history: {
      discovery: "Middle East ( 9000 BC )",
      named_by: "after Cyprus , principal mining place in Roman era ( Cyprium )"
    },
    periodic_table: {
      group: "group 11",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "red-orange metallic luster",
    chemical: {
      oxydation_states: "−2, +1, +2 , +3, +4 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3584a"
    },
    density: {
      stp: "13.51 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 5f 7 6d 1 7s 2",
      resistivity: "1.25 µΩ·m",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 581 kJ/mol"],
      shells: [2, 8, 18, 32, 25, 9, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "247 (most stable isotope)"
    },
    magnetism: {
      ordering: "antiferromagnetic-paramagnetic transition at 52 K"
    },
    name: "curium",
    thermodynamics: {
      boiling: "3383 K ​(3110 °C, ​5630 °F)",
      enthalpy: "13.85 kJ/mol",
      phase: "solid",
      melting: "1613 K ​(1340 °C, ​2444 °F)"
    },
    identity: {
      pronunciation: "/ ˈ k j ʊər i ə m / ​ ( KEWR -ee-əm )",
      cas: "7440-51-9"
    },
    atomic: {
      covalent_radius: "169±3 pm",
      number: 96,
      radius: "empirical: 174 pm"
    },
    history: {
      discovery: "Glenn T. Seaborg , Ralph A. James , Albert Ghiorso (1944)",
      named_by: "named after Marie Skłodowska-Curie and Pierre Curie"
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery metallic, glows purple in the dark",
    chemical: {
      oxydation_states: "+2, +3 , +4, +5, +6 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3584b"
    },
    density: {
      stp: "34.8 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 8 7s 2 (predicted)",
      ionisation: ["1st: 960 kJ/mol", "2nd: 1890 kJ/mol", "3rd: 3030 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 16, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "281 (most stable isotope)"
    },
    name: "darmstadtium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ d ɑːr m ˈ ʃ t ɑː t i ə m / ( listen ) ​ ( darm- SHTAH -tee-əm )",
      cas: "54083-77-1"
    },
    atomic: {
      covalent_radius: "128 pm (estimated)",
      number: 110,
      radius: "empirical: 132 pm (predicted)"
    },
    history: {
      discovery: "Gesellschaft für Schwerionenforschung (1994)",
      named_by: "after Darmstadt , Germany, where it was discovered"
    },
    periodic_table: {
      group: "group 10",
      category: "unknown chemical properties, but probably a transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "( 0 ), ( +2 ), (+4), (+6), ( +8 ) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3584c"
    },
    density: {
      stp: "29.3 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 3 7s 2",
      ionisation: ["1st: 665 kJ/mol", "2nd: 1547 kJ/mol", "3rd: 2378 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 11, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "268 (most stable isotope)"
    },
    name: "dubnium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "US : / ˈ d uː b n i ə m / ( DOOB -nee-əm ) UK : / ˈ d ʌ b n i ə m / ( DUB -nee-əm )",
      cas: "53850-35-4"
    },
    atomic: {
      covalent_radius: "149 pm (estimated)",
      number: 105,
      radius: "empirical: 139 pm (estimated)"
    },
    history: {
      discovery: "independently by the Lawrence Berkeley Laboratory and the Joint Institute for Nuclear Research (1970)",
      named_by: "after Dubna , Moscow Oblast , Russia, site of Joint Institute for Nuclear Research"
    },
    periodic_table: {
      group: "group 5",
      category: "transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "(+3), (+4), +5 (parenthesized: prediction )"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3584d"
    },
    density: {
      stp: "8.540 g/cm 3",
      liquid: {
        mp: "8.37 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "2710 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 10 6s 2",
      resistivity: "α, poly: 926 nΩ·m ( r.t. )",
      negativity: "Pauling scale: 1.22",
      ionisation: ["2nd: 1130 kJ/mol", "3rd: 2200 kJ/mol"],
      shells: [2, 8, 18, 28, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "500–1050 MPa",
        vickers: "410–550 MPa"
      },
      shear: {
        modulus: "α form: 24.7 GPa"
      },
      compression: {
        bulk_modulus: "α form: 40.5 GPa"
      },
      strain: {
        poisson: "α form: 0.247"
      },
      stifness: {
        young: "α form: 61.4 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+103,500·10 −6 cm 3 /mol (293.2 K)",
      ordering: "paramagnetic at 300 K"
    },
    name: "dysprosium",
    thermodynamics: {
      molar_heat: "27.7 J/(mol·K)",
      enthalpy: "11.06 kJ/mol",
      conductivity: "10.7 W/(m·K)",
      boiling: "2840 K ​(2562 °C, ​4653 °F)",
      vaporization: "280 kJ/mol",
      expansion: "α, poly: 9.9 µm/(m·K) ( r.t. )",
      phase: "solid",
      melting: "1680 K ​(1407 °C, ​2565 °F)"
    },
    identity: {
      pronunciation: "/ d ɪ s ˈ p r oʊ z i ə m / ​ ( dis- PROH -zee-əm )",
      cas: "7429-91-6"
    },
    atomic: {
      covalent_radius: "192±7 pm",
      weight: "162.500(1)",
      number: 66,
      radius: "empirical: 178 pm"
    },
    history: {
      discovery: "Lecoq de Boisbaudran (1886)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 , +4 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3584e"
    },
    density: {
      stp: "8.84 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 5f 11 7s 2",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 619 kJ/mol"],
      shells: [2, 8, 18, 32, 29, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "252 (most stable isotope)"
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "einsteinium",
    thermodynamics: {
      boiling: "1269 K ​(996 °C, ​1825 °F) (estimated)",
      phase: "solid",
      melting: "1133 K ​(860 °C, ​1580 °F)"
    },
    identity: {
      pronunciation: "/ aɪ n ˈ s t aɪ n i ə m / ​ ( eyen- STY -nee-əm )",
      cas: "7429-92-7"
    },
    atomic: {
      number: 99
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory (1952)",
      named_by: "after Albert Einstein"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery; glows blue in the dark",
    chemical: {
      oxydation_states: "+2, +3 , +4"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3584f"
    },
    density: {
      stp: "9.066 g/cm 3",
      liquid: {
        mp: "8.86 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "2830 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 12 6s 2",
      resistivity: "poly: 0.860 µΩ·m ( r.t. )",
      negativity: "Pauling scale: 1.24",
      ionisation: ["2nd: 1150 kJ/mol", "3rd: 2194 kJ/mol"],
      shells: [2, 8, 18, 30, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "600–1070 MPa",
        vickers: "430–700 MPa"
      },
      shear: {
        modulus: "28.3 GPa"
      },
      compression: {
        bulk_modulus: "44.4 GPa"
      },
      strain: {
        poisson: "0.237"
      },
      stifness: {
        young: "69.9 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+44,300.00·10 −6 cm 3 /mol",
      ordering: "paramagnetic at 300 K"
    },
    name: "erbium",
    thermodynamics: {
      molar_heat: "28.12 J/(mol·K)",
      enthalpy: "19.90 kJ/mol",
      conductivity: "14.5 W/(m·K)",
      boiling: "3141 K ​(2868 °C, ​5194 °F)",
      vaporization: "280 kJ/mol",
      expansion: "poly: 12.2 µm/(m·K) ( r.t. )",
      phase: "solid",
      melting: "1802 K ​(1529 °C, ​2784 °F)"
    },
    identity: {
      pronunciation: "/ ˈ ɜːr b i ə m / ​ ( UR -bee-əm )",
      cas: "7440-52-0"
    },
    atomic: {
      covalent_radius: "189±6 pm",
      weight: "167.259(3)",
      number: 68,
      radius: "empirical: 176 pm"
    },
    history: {
      discovery: "Carl Gustaf Mosander (1843)",
      named_by: "after Ytterby (Sweden), where it was mined"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (a basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35850"
    },
    density: {
      stp: "5.264 g/cm 3",
      liquid: {
        mp: "5.13 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 7 6s 2",
      resistivity: "poly: 0.900 µΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.2",
      ionisation: ["2nd: 1085 kJ/mol", "3rd: 2404 kJ/mol"],
      shells: [2, 8, 18, 25, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        vickers: "165–200 MPa"
      },
      shear: {
        modulus: "7.9 GPa"
      },
      compression: {
        bulk_modulus: "8.3 GPa"
      },
      strain: {
        poisson: "0.152"
      },
      stifness: {
        young: "18.2 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+34,000.0·10 −6 cm 3 /mol",
      ordering: "paramagnetic"
    },
    name: "europium",
    thermodynamics: {
      molar_heat: "27.66 J/(mol·K)",
      enthalpy: "9.21 kJ/mol",
      conductivity: "est. 13.9 W/(m·K)",
      boiling: "1802 K ​(1529 °C, ​2784 °F)",
      vaporization: "176 kJ/mol",
      expansion: "poly: 35.0 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1099 K ​(826 °C, ​1519 °F)"
    },
    identity: {
      pronunciation: "/ j ʊəˈr oʊ p i ə m / ​ ( yoor- OH -pee-əm )",
      cas: "7440-53-1"
    },
    atomic: {
      covalent_radius: "198±6 pm",
      weight: "151.964(1)",
      number: 63,
      radius: "empirical: 180 pm"
    },
    history: {
      discovery: "Eugène-Anatole Demarçay (1896, 1901)",
      named_by: "after Europe"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white, with a pale yellow tint; but rarely seen without oxide discoloration",
    chemical: {
      oxydation_states: "+1, +2 , +3 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35851"
    },
    density: {
      stp: "9.7(1) g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 12 7s 2",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 627 kJ/mol"],
      shells: [2, 8, 18, 32, 30, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "257 (most stable isotope)"
    },
    name: "fermium",
    thermodynamics: {
      phase: "unknown phase (predicted)",
      melting: "1800 K ​(1527 °C, ​2781 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ ˈ f ɜːr m i ə m / ​ ( FUR -mee-əm )",
      cas: "7440-72-4"
    },
    atomic: {
      number: 100
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory (1952)",
      named_by: "after Enrico Fermi"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    chemical: {
      oxydation_states: "+2, +3"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35852"
    },
    density: {
      liquid: {
        mp: "14 g/cm 3 (predicted)"
      }
    },
    crystallography: {
      structure: "​ face-centred cubic (fcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 7p 2 (predicted)",
      ionisation: ["2nd: 1600 kJ/mol", "3rd: 3370 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 18, 4]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "289 (most stable isotope) (unconfirmed: 290)"
    },
    name: "flerovium",
    thermodynamics: {
      boiling: "~ 210 K ​(~ −60 °C, ​~ −80 °F)",
      phase: "unknown phase (predicted)",
      vaporization: "38 kJ/mol (predicted)"
    },
    identity: {
      pronunciation: "/ f l ɪ ˈ r oʊ v i ə m / ​ ( flə- ROH -vee-əm )",
      cas: "54085-16-4"
    },
    atomic: {
      covalent_radius: "171–177 pm (extrapolated)",
      number: 114,
      radius: "empirical: 180 pm (predicted)"
    },
    history: {
      discovery: "Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL) (1999)",
      named_by: "after Flerov Laboratory of Nuclear Reactions (itself named after Georgy Flyorov )"
    },
    periodic_table: {
      group: "group 14 (carbon group)",
      category: "unknown chemical properties, but probably a post-transition metal",
      period: 7,
      block: "p-block"
    },
    chemical: {
      oxydation_states: "(0), (+1), ( +2 ), (+4), (+6) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35853"
    },
    density: {
      stp: "1.696 g/L",
      liquid: {
        bp: "1.505 g/cm 3"
      }
    },
    thermodynamics: {
      molar_heat: "C p : 31 J/(mol·K) (at 21.1 °C) C v : 23 J/(mol·K) (at 21.1 °C)",
      triple: "53.48 K, ​90 kPa",
      boiling: "85.03 K ​(−188.11 °C, ​−306.60 °F)",
      critical: "144.41 K, 5.1724 MPa",
      conductivity: "0.02591 W/(m·K)",
      phase: "gas",
      melting: "53.48 K ​(−219.67 °C, ​−363.41 °F)",
      vaporization: "6.51 kJ/mol"
    },
    electronic: {
      configuration: "[ He ] 2s 2 2p 5",
      negativity: "Pauling scale: 3.98",
      ionisation: ["1st: 1681 kJ/mol", "2nd: 3374 kJ/mol", "3rd: 6147 kJ/mol"],
      shells: [2, 7]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      ordering: "diamagnetic (−1.2×10 −4 )"
    },
    name: "fluorine",
    allotropy: "alpha, beta",
    identity: {
      pronunciation: "/ ˈ f l ʊər iː n , - ɪ n , - aɪ n / ( FLOOR -een, -⁠in, -⁠yn ) / ˈ f l ɔːr iː n , - ɪ n , - aɪ n / ( FLOHR -een, -⁠in, -⁠yn )",
      cas: "7782-41-4"
    },
    atomic: {
      covalent_radius: "64 pm",
      weight: "18.998 403 163 (6)",
      number: 9,
      vanderwaals: "135 pm"
    },
    history: {
      discovery: "André-Marie Ampère (1810)",
      named_by: "Humphry Davy",
      isolation: "Henri Moissan (June 26, 1886)"
    },
    crystallography: {
      structure: "​ cubic"
    },
    periodic_table: {
      group: "group 17 (halogens)",
      category: "reactive nonmetal",
      period: 2,
      block: "p-block"
    },
    appearance: "gas: very pale yellow liquid: bright yellow solid: alpha is opaque, beta is transparent",
    chemical: {
      oxydation_states: "−1 (oxidizes oxygen)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35854"
    },
    density: {
      stp: "2.8–3.0 g/cm 3 (extrapolated)"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc) (extrapolated)"
    },
    electronic: {
      configuration: "[ Rn ] 7s 1",
      resistivity: "3 µΩ·m (calculated)",
      negativity: "Pauling scale: >0.79",
      ionisation: ["1st: 393 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 8, 1]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "223 (most stable isotope)"
    },
    magnetism: {
      ordering: "Paramagnetic"
    },
    name: "francium",
    thermodynamics: {
      boiling: "? 950 K ​(680 °C, ​1300 °F)",
      conductivity: "15 W/(m·K) (extrapolated)",
      phase: "solid (predicted)",
      melting: "? 300 K ​(30 °C, ​80 °F)"
    },
    identity: {
      pronunciation: "/ ˈ f r æ n s i ə m / ​ ( FRAN -see-əm )",
      cas: "7440-73-5"
    },
    atomic: {
      covalent_radius: "260 pm (extrapolated)",
      number: 87,
      vanderwaals: "348 pm (extrapolated)"
    },
    history: {
      discovery: "Marguerite Perey (1939)",
      named_by: "after France , homeland of the discoverer"
    },
    periodic_table: {
      group: "group 1 (alkali metals)",
      category: "alkali metal",
      period: 7,
      block: "s-block"
    },
    chemical: {
      oxydation_states: "+1 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35855"
    },
    density: {
      stp: "7.90 g/cm 3",
      liquid: {
        mp: "7.4 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "2680 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 7 5d 1 6s 2",
      resistivity: "α, poly: 1.310 µΩ·m",
      negativity: "Pauling scale: 1.20",
      ionisation: ["2nd: 1170 kJ/mol", "3rd: 1990 kJ/mol"],
      shells: [2, 8, 18, 25, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        vickers: "510–950 MPa"
      },
      shear: {
        modulus: "α form: 21.8 GPa"
      },
      compression: {
        bulk_modulus: "α form: 37.9 GPa"
      },
      strain: {
        poisson: "α form: 0.259"
      },
      stifness: {
        young: "α form: 54.8 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+755,000.0·10 −6 cm 3 /mol (300.6 K)",
      ordering: "ferromagnetic - paramagnetic transition at 293.4 K"
    },
    name: "gadolinium",
    thermodynamics: {
      molar_heat: "37.03 J/(mol·K)",
      enthalpy: "10.05 kJ/mol",
      conductivity: "10.6 W/(m·K)",
      boiling: "3273 K ​(3000 °C, ​5432 °F)",
      vaporization: "301.3 kJ/mol",
      expansion: "α poly: 9.4 µm/(m·K) (at 100 °C)",
      phase: "solid",
      melting: "1585 K ​(1312 °C, ​2394 °F)"
    },
    identity: {
      pronunciation: "/ ˌ ɡ æ d ə ˈ l ɪ n i ə m / ​ ( GAD -ə- LIN -ee-əm )",
      cas: "7440-54-2"
    },
    atomic: {
      covalent_radius: "196±6 pm",
      weight: "157.25(3)",
      number: 64,
      radius: "empirical: 180 pm"
    },
    history: {
      discovery: "Jean Charles Galissard de Marignac (1880)",
      named_by: "after the mineral Gadolinite (itself named after Johan Gadolin )",
      isolation: "Lecoq de Boisbaudran (1886)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35856"
    },
    density: {
      stp: "5.91 g/cm 3",
      liquid: {
        mp: "6.095 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    sound: {
      speed: "2740 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 2 4p 1",
      resistivity: "270 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.81",
      ionisation: ["3rd: 2963 kJ/mol"],
      shells: [2, 8, 18, 3]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "56.8–68.7 MPa",
        mohs: "1.5"
      },
      strain: {
        poisson: "0.47"
      },
      stifness: {
        young: "9.8 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−21.6·10 −6 cm 3 /mol (at 290 K)",
      ordering: "diamagnetic"
    },
    name: "gallium",
    thermodynamics: {
      molar_heat: "25.86 J/(mol·K)",
      enthalpy: "5.59 kJ/mol",
      conductivity: "40.6 W/(m·K)",
      boiling: "2673 K ​(2400 °C, ​4352 °F)",
      vaporization: "256 kJ/mol",
      expansion: "18 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "302.9146 K ​(29.7646 °C, ​85.5763 °F)"
    },
    identity: {
      pronunciation: "/ ˈ ɡ æ l i ə m / ​ ( GAL -ee-əm )",
      cas: "7440-55-3"
    },
    atomic: {
      covalent_radius: "122±3 pm",
      weight: "69.723(1)",
      number: 31,
      vanderwaals: "187 pm",
      radius: "empirical: 135 pm"
    },
    history: {
      prediction: "Dmitri Mendeleev (1871)",
      discovery: "Lecoq de Boisbaudran (1875)",
      named_by: "after Gallia (Latin for: France), homeland of the discoverer"
    },
    periodic_table: {
      group: "group 13 (boron group)",
      category: "post-transition metal",
      period: 4,
      block: "p-block"
    },
    appearance: "silvery blue",
    chemical: {
      oxydation_states: "−5, −4, −2, −1, +1, +2, +3 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35857"
    },
    density: {
      stp: "5.323 g/cm 3",
      liquid: {
        mp: "5.60 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered diamond-cubic"
    },
    sound: {
      speed: "5400 m/s (at 20 °C)"
    },
    electronic: {
      negativity: "Pauling scale: 2.01",
      shells: [2, 8, 18, 4],
      configuration: "[ Ar ] 3d 10 4s 2 4p 2",
      resistivity: "1 Ω·m (at 20 °C)",
      ionisation: ["1st: 762 kJ/mol"],
      bandgap: "0.67 eV (at 300 K)"
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        mohs: "6.0"
      },
      shear: {
        modulus: "41 GPa"
      },
      compression: {
        bulk_modulus: "75 GPa"
      },
      strain: {
        poisson: "0.26"
      },
      stifness: {
        young: "103 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−76.84·10 −6 cm 3 /mol",
      ordering: "diamagnetic"
    },
    name: "germanium",
    thermodynamics: {
      molar_heat: "23.222 J/(mol·K)",
      enthalpy: "36.94 kJ/mol",
      conductivity: "60.2 W/(m·K)",
      boiling: "3106 K ​(2833 °C, ​5131 °F)",
      vaporization: "334 kJ/mol",
      expansion: "6.0 µm/(m·K)",
      phase: "solid",
      melting: "1211.40 K ​(938.25 °C, ​1720.85 °F)"
    },
    identity: {
      pronunciation: "/ dʒ ər ˈ m eɪ n i ə m / ​ ( jər- MAY -nee-əm )",
      cas: "7440-56-4"
    },
    atomic: {
      covalent_radius: "122 pm",
      weight: "72.630(8)",
      number: 32,
      vanderwaals: "211 pm",
      radius: "empirical: 122 pm"
    },
    history: {
      prediction: "Dmitri Mendeleev (1869)",
      discovery: "Clemens Winkler (1886)",
      named_by: "after Germany , homeland of the discoverer"
    },
    periodic_table: {
      group: "group 14 (carbon group)",
      category: "metalloid",
      period: 4,
      block: "p-block"
    },
    appearance: "grayish-white",
    chemical: {
      oxydation_states: "−4 −3, −2, −1, 0, +1, +2 , +3, +4 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35858"
    },
    density: {
      stp: "19.30 g/cm 3",
      liquid: {
        mp: "17.31 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "2030 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 1",
      resistivity: "22.14 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.54",
      ionisation: ["2nd: 1980 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      tensile: {
        strength: "120 MPa"
      },
      shear: {
        modulus: "27 GPa"
      },
      compression: {
        bulk_modulus: "180 GPa"
      },
      hardness: {
        brinell: "188–245 MPa",
        vickers: "188–216 MPa",
        mohs: "2.5"
      },
      strain: {
        poisson: "0.4"
      },
      stifness: {
        young: "79 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−28.0·10 −6 cm 3 /mol (at 296 K)",
      ordering: "diamagnetic"
    },
    name: "gold",
    thermodynamics: {
      molar_heat: "25.418 J/(mol·K)",
      enthalpy: "12.55 kJ/mol",
      conductivity: "318 W/(m·K)",
      boiling: "3243 K ​(2970 °C, ​5378 °F)",
      vaporization: "342 kJ/mol",
      expansion: "14.2 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1337.33 K ​(1064.18 °C, ​1947.52 °F)"
    },
    identity: {
      cas: "7440-57-5"
    },
    atomic: {
      covalent_radius: "136±6 pm",
      weight: "196.966 570 (4)",
      number: 79,
      vanderwaals: "166 pm",
      radius: "empirical: 144 pm"
    },
    history: {
      discovery: "In the Middle East (before 6000 BCE )",
      named_by: "from Latin aurum , meaning gold"
    },
    periodic_table: {
      group: "group 11",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "metallic yellow",
    chemical: {
      oxydation_states: "−3, −2, −1 , +1 , +2, +3 , +5 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35859"
    },
    density: {
      stp: "13.31 g/cm 3",
      liquid: {
        mp: "12 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "3010 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 2 6s 2",
      resistivity: "331 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.3",
      ionisation: ["2nd: 1440 kJ/mol", "3rd: 2250 kJ/mol"],
      shells: [2, 8, 18, 32, 10, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "1450–2100 MPa",
        vickers: "1520–2060 MPa",
        mohs: "5.5"
      },
      shear: {
        modulus: "30 GPa"
      },
      compression: {
        bulk_modulus: "110 GPa"
      },
      strain: {
        poisson: "0.37"
      },
      stifness: {
        young: "78 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+75.0·10 −6 cm 3 /mol (at 298 K)",
      ordering: "paramagnetic"
    },
    name: "hafnium",
    thermodynamics: {
      molar_heat: "25.73 J/(mol·K)",
      enthalpy: "27.2 kJ/mol",
      conductivity: "23.0 W/(m·K)",
      boiling: "4876 K ​(4603 °C, ​8317 °F)",
      vaporization: "648 kJ/mol",
      expansion: "5.9 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2506 K ​(2233 °C, ​4051 °F)"
    },
    identity: {
      pronunciation: "/ ˈ h æ f n i ə m / ​ ( HAF -nee-əm )",
      cas: "7440-58-6"
    },
    atomic: {
      covalent_radius: "175±10 pm",
      weight: "178.49(2)",
      number: 72,
      radius: "empirical: 159 pm"
    },
    history: {
      prediction: "Dmitri Mendeleev (1869)",
      discovery: "Dirk Coster and George de Hevesy (1922)",
      named_by: "after Hafnia . Latin for: Copenhagen , where it was discovered"
    },
    periodic_table: {
      group: "group 4",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "steel gray",
    chemical: {
      oxydation_states: "−2, +1, +2, +3, +4 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3585a"
    },
    density: {
      stp: "41 g/cm 3 (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 6 7s 2",
      ionisation: ["1st: 730 kJ/mol", "2nd: 1760 kJ/mol", "3rd: 2830 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 14, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "270 (most stable isotope)"
    },
    name: "hassium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ ˈ h æ s i ə m / ( listen ) ​ ( HAS -ee-əm )",
      cas: "54037-57-9"
    },
    atomic: {
      covalent_radius: "134 pm (estimated)",
      number: 108,
      radius: "empirical: 126 pm (estimated)"
    },
    history: {
      discovery: "Gesellschaft für Schwerionenforschung (1984)",
      named_by: "after Hassia , Latin for Hesse , Germany, where it was discovered"
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp) (predicted)"
    },
    periodic_table: {
      group: "group 8",
      category: "transition metal",
      period: 7,
      block: "d-block"
    },
    appearance: "silvery (predicted)",
    chemical: {
      oxydation_states: "( +2 ), (+3), ( +4 ), (+5), ( +6 ), +8 (parenthesized: prediction )"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3585b"
    },
    density: {
      stp: "0.1786 g/L",
      liquid: {
        mp: "0.145 g/cm 3",
        bp: "0.125 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "972 m/s"
    },
    electronic: {
      configuration: "1s 2",
      negativity: "Pauling scale: no data",
      ionisation: [],
      shells: [2]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−1.88·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "helium",
    thermodynamics: {
      molar_heat: "20.78 J/(mol·K)",
      enthalpy: "0.0138 kJ/mol",
      triple: "2.177 K, ​5.043 kPa",
      boiling: "4.222 K ​(−268.928 °C, ​−452.070 °F)",
      critical: "5.1953 K, 0.22746 MPa",
      conductivity: "0.1513 W/(m·K)",
      phase: "gas",
      melting: "0.95 K ​(−272.20 °C, ​−457.96 °F) (at 2.5 MPa)",
      vaporization: "0.0829 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ h iː l i ə m / ​ ( HEE -lee-əm )",
      cas: "7440-59-7"
    },
    atomic: {
      covalent_radius: "28 pm",
      weight: "4.002 602 (2)",
      number: 2,
      vanderwaals: "140 pm"
    },
    history: {
      discovery: "Pierre Janssen , Norman Lockyer (1868)",
      named_by: "after Helios , Greek Titan of the Sun",
      isolation: "William Ramsay , Per Teodor Cleve , Abraham Langlet (1895)"
    },
    periodic_table: {
      group: "group 18 (noble gases)",
      category: "noble gas",
      period: 1,
      block: "s-block"
    },
    appearance: "colorless gas, exhibiting a gray, cloudy glow (or reddish-orange if an especially high voltage is used) when placed in an electric field",
    chemical: {
      oxydation_states: "0"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3585c"
    },
    density: {
      stp: "8.79 g/cm 3",
      liquid: {
        mp: "8.34 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "2760 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 11 6s 2",
      resistivity: "poly: 814 nΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.23",
      ionisation: ["2nd: 1140 kJ/mol", "3rd: 2204 kJ/mol"],
      shells: [2, 8, 18, 29, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "500–1250 MPa",
        vickers: "410–600 MPa"
      },
      shear: {
        modulus: "26.3 GPa"
      },
      compression: {
        bulk_modulus: "40.2 GPa"
      },
      strain: {
        poisson: "0.231"
      },
      stifness: {
        young: "64.8 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "holmium",
    thermodynamics: {
      molar_heat: "27.15 J/(mol·K)",
      enthalpy: "17.0 kJ/mol",
      conductivity: "16.2 W/(m·K)",
      boiling: "2873 K ​(2600 °C, ​4712 °F)",
      vaporization: "251 kJ/mol",
      expansion: "poly: 11.2 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1734 K ​(1461 °C, ​2662 °F)"
    },
    identity: {
      pronunciation: "/ ˈ h oʊ l m i ə m / ​ ( HOHL -mee-əm )",
      cas: "7440-60-0"
    },
    atomic: {
      covalent_radius: "192±7 pm",
      weight: "164.930 328 (7)",
      number: 67,
      radius: "empirical: 176 pm"
    },
    history: {
      discovery: "Jacques-Louis Soret (1878)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (a basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3585d"
    },
    density: {
      stp: "0.08988 g/L",
      liquid: {
        mp: "0.07 g/cm 3 (solid: 0.0763 g/cm 3 )",
        bp: "0.07099 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal"
    },
    sound: {
      speed: "1310 m/s (gas, 27 °C)"
    },
    electronic: {
      configuration: "1s 1",
      negativity: "Pauling scale: 2.20",
      ionisation: [],
      shells: [1]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−3.98·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "hydrogen",
    thermodynamics: {
      molar_heat: "(H 2 ) 28.836 J/(mol·K)",
      enthalpy: "(H 2 ) 0.117 kJ/mol",
      triple: "13.8033 K, ​7.041 kPa",
      boiling: "20.271 K ​(−252.879 °C, ​−423.182 °F)",
      critical: "32.938 K, 1.2858 MPa",
      conductivity: "0.1805 W/(m·K)",
      phase: "gas",
      melting: "13.99 K ​(−259.16 °C, ​−434.49 °F)",
      vaporization: "(H 2 ) 0.904 kJ/mol"
    },
    identity: {
      cas: "12385-13-6 1333-74-0 (H 2 )"
    },
    atomic: {
      covalent_radius: "31±5 pm",
      weight: "[ 1.007 84 , 1.008 11 ] conventional: 1.008",
      number: 1,
      vanderwaals: "120 pm"
    },
    history: {
      named_by: "Antoine Lavoisier (1783)",
      discovery: "Henry Cavendish (1766)"
    },
    periodic_table: {
      group: "group 1",
      category: "reactive nonmetal",
      period: 1,
      block: "s-block"
    },
    appearance: "colorless gas",
    chemical: {
      oxydation_states: "−1 , +1 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3585e"
    },
    density: {
      stp: "7.31 g/cm 3",
      liquid: {
        mp: "7.02 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered tetragonal"
    },
    sound: {
      speed: "1215 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2 5p 1",
      resistivity: "83.7 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.78",
      ionisation: ["3rd: 2704 kJ/mol"],
      shells: [2, 8, 18, 18, 3]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "8.8–10.0 MPa",
        mohs: "1.2"
      },
      stifness: {
        young: "11 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−64.0·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "indium",
    thermodynamics: {
      molar_heat: "26.74 J/(mol·K)",
      enthalpy: "3.281 kJ/mol",
      triple: "429.7445 K, ​~1 kPa",
      boiling: "2345 K ​(2072 °C, ​3762 °F)",
      vaporization: "231.8 kJ/mol",
      conductivity: "81.8 W/(m·K)",
      expansion: "32.1 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "429.7485 K ​(156.5985 °C, ​313.8773 °F)"
    },
    identity: {
      pronunciation: "/ ˈ ɪ n d i ə m / ​ ( IN -dee-əm )",
      cas: "7440-74-6"
    },
    atomic: {
      covalent_radius: "142±5 pm",
      weight: "114.818(1)",
      number: 49,
      vanderwaals: "193 pm",
      radius: "empirical: 167 pm"
    },
    history: {
      isolation: "Hieronymous Theodor Richter (1864)",
      discovery: "Ferdinand Reich and Hieronymous Theodor Richter (1863)"
    },
    periodic_table: {
      group: "group 13 (boron group)",
      category: "post-transition metal",
      period: 5,
      block: "p-block"
    },
    appearance: "silvery lustrous gray",
    chemical: {
      oxydation_states: "−5, −2, −1, +1, +2, +3 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf3585f"
    },
    density: {
      stp: "4.933 g/cm 3"
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2 5p 5",
      resistivity: "1.3×10 7 Ω·m (at 0 °C)",
      negativity: "Pauling scale: 2.66",
      ionisation: ["3rd: 3180 kJ/mol"],
      shells: [2, 8, 18, 18, 7]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      compression: {
        bulk_modulus: "7.7 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−88.7·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "iodine",
    thermodynamics: {
      molar_heat: "(I 2 ) 54.44 J/(mol·K)",
      enthalpy: "(I 2 ) 15.52 kJ/mol",
      triple: "386.65 K, ​12.1 kPa",
      boiling: "457.4 K ​(184.3 °C, ​363.7 °F)",
      critical: "819 K, 11.7 MPa",
      conductivity: "0.449 W/(m·K)",
      phase: "solid",
      melting: "386.85 K ​(113.7 °C, ​236.66 °F)",
      vaporization: "(I 2 ) 41.57 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ aɪ ə d aɪ n , - d ɪ n , - d iː n / ​ ( EYE -ə-dyn, -⁠din, -⁠deen )",
      cas: "7553-56-2"
    },
    atomic: {
      covalent_radius: "139±3 pm",
      weight: "126.904 47 (3)",
      number: 53,
      vanderwaals: "198 pm",
      radius: "empirical: 140 pm"
    },
    history: {
      discovery: "Bernard Courtois (1811)"
    },
    periodic_table: {
      group: "group 17 (halogens)",
      category: "reactive nonmetal",
      period: 5,
      block: "p-block"
    },
    appearance: "lustrous metallic gray, violet as a gas",
    chemical: {
      oxydation_states: "−1 , +1 , +3 , +4, +5 , +6, +7 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd47644df7dcbf35860"
    },
    density: {
      stp: "22.56 g/cm 3",
      liquid: {
        mp: "19 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "4825 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 7 6s 2",
      resistivity: "47.1 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.20",
      ionisation: ["1st: 880 kJ/mol", "2nd: 1600 kJ/mol"],
      shells: [2, 8, 18, 32, 15, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "1670 MPa",
        vickers: "1760–2200 MPa",
        mohs: "6.5"
      },
      shear: {
        modulus: "210 GPa"
      },
      compression: {
        bulk_modulus: "320 GPa"
      },
      strain: {
        poisson: "0.26"
      },
      stifness: {
        young: "528 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+25.6·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "iridium",
    thermodynamics: {
      molar_heat: "25.10 J/(mol·K)",
      enthalpy: "41.12 kJ/mol",
      conductivity: "147 W/(m·K)",
      boiling: "4403 K ​(4130 °C, ​7466 °F)",
      vaporization: "564 kJ/mol",
      expansion: "6.4 µm/(m·K)",
      phase: "solid",
      melting: "2719 K ​(2446 °C, ​4435 °F)"
    },
    identity: {
      pronunciation: "/ ɪ ˈ r ɪ d i ə m / ​ ( ih- RID -ee-əm )",
      cas: "7439-88-5"
    },
    atomic: {
      covalent_radius: "141±6 pm",
      weight: "192.217(2)",
      number: 77,
      radius: "empirical: 136 pm"
    },
    history: {
      discovery: "Smithson Tennant (1803)"
    },
    periodic_table: {
      group: "group 9",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "−3, −1, 0, +1, +2, +3 , +4 , +5, +6, +7, +8, +9"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35861"
    },
    density: {
      stp: "7.874 g/cm 3",
      liquid: {
        mp: "6.98 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) between 1185–1667 K"
    },
    sound: {
      speed: "5120 m/s (at r.t. ) (electrolytic)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 6 4s 2",
      resistivity: "96.1 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.83",
      ionisation: ["3rd: 2957 kJ/mol"],
      shells: [2, 8, 14, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "200–1180 MPa",
        vickers: "608 MPa",
        mohs: "4"
      },
      shear: {
        modulus: "82 GPa"
      },
      compression: {
        bulk_modulus: "170 GPa"
      },
      strain: {
        poisson: "0.29"
      },
      stifness: {
        young: "211 GPa"
      }
    },
    magnetism: {
      ordering: "ferromagnetic"
    },
    name: "iron",
    thermodynamics: {
      molar_heat: "25.10 J/(mol·K)",
      enthalpy: "13.81 kJ/mol",
      conductivity: "80.4 W/(m·K)",
      boiling: "3134 K ​(2862 °C, ​5182 °F)",
      vaporization: "340 kJ/mol",
      expansion: "11.8 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1811 K ​(1538 °C, ​2800 °F)",
      curie: "1043 K"
    },
    identity: {
      cas: "7439-89-6"
    },
    atomic: {
      covalent_radius: "Low spin: 132±3 pm High spin: 152±6 pm",
      weight: "55.845(2)",
      number: 26,
      radius: "empirical: 126 pm"
    },
    history: {
      discovery: "before 5000 BC"
    },
    periodic_table: {
      group: "group 8",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "lustrous metallic with a grayish tinge",
    chemical: {
      oxydation_states: "−4, −2, −1, +1, +2 , +3 , +4, +5, +6 , +7 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35862"
    },
    density: {
      stp: "3.749 g/L",
      liquid: {
        bp: "2.413 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "(gas, 23 °C) 220 m·s −1 (liquid) 1120 m/s"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 2 4p 6",
      negativity: "Pauling scale: 3.00",
      ionisation: ["3rd: 3565 kJ/mol"],
      shells: [2, 8, 18, 8]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−28.8·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "krypton",
    thermodynamics: {
      molar_heat: "20.95 J/(mol·K)",
      enthalpy: "1.64 kJ/mol",
      triple: "115.775 K, ​73.53 kPa",
      boiling: "119.93 K ​(−153.415 °C, ​−244.147 °F)",
      critical: "209.48 K, 5.525 MPa",
      conductivity: "9.43×10 −3 W/(m·K)",
      phase: "gas",
      melting: "115.78 K ​(−157.37 °C, ​−251.27 °F)",
      vaporization: "9.08 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ k r ɪ p t ɒ n / ​ ( KRIP -ton )",
      cas: "7439-90-9"
    },
    atomic: {
      covalent_radius: "116±4 pm",
      weight: "83.798(2)",
      number: 36,
      vanderwaals: "202 pm"
    },
    history: {
      discovery: "William Ramsay and Morris Travers (1898)"
    },
    periodic_table: {
      group: "group 18 (noble gases)",
      category: "noble gas",
      period: 4,
      block: "p-block"
    },
    appearance: "colorless gas, exhibiting a whitish glow in an electric field",
    chemical: {
      oxydation_states: "0 , +1, +2 (rarely more than 0; oxide is unknown)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35863"
    },
    density: {
      stp: "6.162 g/cm 3",
      liquid: {
        mp: "5.94 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    sound: {
      speed: "2475 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 5d 1 6s 2",
      resistivity: "α, poly: 615 nΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.10",
      ionisation: ["2nd: 1067 kJ/mol"],
      shells: [2, 8, 18, 18, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "350–400 MPa",
        vickers: "360–1750 MPa",
        mohs: "2.5"
      },
      shear: {
        modulus: "α form: 14.3 GPa"
      },
      compression: {
        bulk_modulus: "α form: 27.9 GPa"
      },
      strain: {
        poisson: "α form: 0.280"
      },
      stifness: {
        young: "α form: 36.6 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+118.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "lanthanum",
    thermodynamics: {
      molar_heat: "27.11 J/(mol·K)",
      enthalpy: "6.20 kJ/mol",
      conductivity: "13.4 W/(m·K)",
      boiling: "3737 K ​(3464 °C, ​6267 °F)",
      vaporization: "400 kJ/mol",
      expansion: "α, poly: 12.1 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1193 K ​(920 °C, ​1688 °F)"
    },
    identity: {
      pronunciation: "/ ˈ l æ n θ ə n ə m / ​ ( LAN -thə-nəm )",
      cas: "7439-91-0"
    },
    atomic: {
      covalent_radius: "207±8 pm",
      weight: "138.905 47 (7)",
      number: 57,
      radius: "empirical: 187 pm"
    },
    history: {
      discovery: "Carl Gustaf Mosander (1838)"
    },
    periodic_table: {
      group: "group 3",
      category: "lanthanide , sometimes considered a transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35864"
    },
    density: {
      stp: "~15.6–16.6 g/cm 3 (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 7s 2 7p 1",
      negativity: "Pauling scale: 1.3 (predicted)",
      ionisation: [],
      shells: [2, 8, 18, 32, 32, 8, 3]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "266 (most stable isotope)"
    },
    name: "lawrencium",
    thermodynamics: {
      phase: "unknown phase (predicted)",
      melting: "1900 K ​(1627 °C, ​2961 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ l ə ˈ r ɛ n s i ə m / ( listen ) ​ ( lə- REN -see-əm )",
      cas: "22537-19-5"
    },
    atomic: {
      number: 103
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory and Joint Institute for Nuclear Research (1961–1971)",
      named_by: "after Ernest Lawrence"
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp) (predicted)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide , sometimes considered a transition metal",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery (predicted)",
    chemical: {
      oxydation_states: "+3"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35865"
    },
    density: {
      stp: "11.34 g/cm 3",
      liquid: {
        mp: "10.66 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "1190 m/s (at r.t. ) (annealed)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2 6p 2",
      resistivity: "208 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.87 (+2)",
      ionisation: [],
      shells: [2, 8, 18, 32, 18, 4]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "38–50 MPa",
        mohs: "1.5"
      },
      shear: {
        modulus: "5.6 GPa"
      },
      compression: {
        bulk_modulus: "46 GPa"
      },
      strain: {
        poisson: "0.44"
      },
      stifness: {
        young: "16 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−23.0×10 −6 cm 3 /mol (at 298 K)",
      ordering: "diamagnetic"
    },
    name: "lead",
    thermodynamics: {
      molar_heat: "26.650 J/(mol·K)",
      enthalpy: "4.77 kJ/mol",
      conductivity: "35.3 W/(m·K)",
      boiling: "2022 K ​(1749 °C, ​3180 °F)",
      vaporization: "179.5 kJ/mol",
      expansion: "28.9 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "600.61 K ​(327.46 °C, ​621.43 °F)"
    },
    identity: {
      pronunciation: "/ ˈ l ɛ d / ​ ( LED )",
      cas: "7439-92-1"
    },
    atomic: {
      covalent_radius: "146±5 pm",
      weight: "207.2(1)",
      number: 82,
      vanderwaals: "202 pm",
      radius: "empirical: 175 pm"
    },
    history: {
      discovery: "in the Middle East ( 7000 BCE )"
    },
    periodic_table: {
      group: "group 14 (carbon group)",
      category: "post-transition metal",
      period: 6,
      block: "p-block"
    },
    appearance: "metallic gray",
    chemical: {
      oxydation_states: "−4, −2, −1, +1, +2 , +3, +4 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35866"
    },
    density: {
      stp: "0.534 g/cm 3",
      liquid: {
        mp: "0.512 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "6000 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ He ] 2s 1",
      resistivity: "92.8 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.98",
      ionisation: [],
      shells: [2, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      shear: {
        modulus: "4.2 GPa"
      },
      compression: {
        bulk_modulus: "11 GPa"
      },
      hardness: {
        brinell: "5 MPa",
        mohs: "0.6"
      },
      stifness: {
        young: "4.9 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+14.2·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "lithium",
    thermodynamics: {
      molar_heat: "24.860 J/(mol·K)",
      enthalpy: "3.00 kJ/mol",
      conductivity: "84.8 W/(m·K)",
      boiling: "1603 K ​(1330 °C, ​2426 °F)",
      critical: "3220 K, 67 MPa (extrapolated)",
      expansion: "46 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "453.65 K ​(180.50 °C, ​356.90 °F)",
      vaporization: "136 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ l ɪ θ i ə m / ​ ( LITH -ee-əm )",
      cas: "7439-93-2"
    },
    atomic: {
      covalent_radius: "128±7 pm",
      weight: "[ 6.938 , 6.997 ] conventional: 6.94",
      number: 3,
      vanderwaals: "182 pm",
      radius: "empirical: 152 pm"
    },
    history: {
      isolation: "William Thomas Brande (1821)",
      discovery: "Johan August Arfwedson (1817)"
    },
    periodic_table: {
      group: "group 1 (alkali metals)",
      category: "alkali metal",
      period: 2,
      block: "s-block"
    },
    appearance: "silvery-white",
    chemical: {
      oxydation_states: "+1 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35867"
    },
    density: {
      stp: "12.9 g/cm 3 (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 7p 4 (predicted)",
      ionisation: ["2nd: 1330 kJ/mol", "3rd: 2850 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 18, 6]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "293 (most stable isotope)"
    },
    name: "livermorium",
    thermodynamics: {
      boiling: "1035–1135 K ​(762–862 °C, ​1403–1583 °F) (extrapolated)",
      enthalpy: "7.61 kJ/mol (extrapolated)",
      phase: "unknown phase (predicted)",
      vaporization: "42 kJ/mol (predicted)",
      melting: "637–780 K ​(364–507 °C, ​687–944 °F) (extrapolated)"
    },
    identity: {
      pronunciation: "/ ˌ l ɪ v ər ˈ m ɔːr i ə m / ​ ( LIV -ər- MOHR -ee-əm )",
      cas: "54100-71-9"
    },
    atomic: {
      covalent_radius: "162–166 pm (extrapolated)",
      number: 116,
      radius: "empirical: 183 pm (predicted)"
    },
    history: {
      discovery: "Joint Institute for Nuclear Research and Lawrence Livermore National Laboratory (2000)",
      named_by: "after Lawrence Livermore National Laboratory , itself named partly after Livermore, California"
    },
    periodic_table: {
      group: "group 16 (chalcogens)",
      category: "unknown chemical properties, but probably a post-transition metal",
      period: 7,
      block: "p-block"
    },
    chemical: {
      oxydation_states: "(−2), ( +2 ), (+4) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35868"
    },
    density: {
      stp: "9.841 g/cm 3",
      liquid: {
        mp: "9.3 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 1 6s 2",
      resistivity: "poly: 582 nΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.27",
      ionisation: ["2nd: 1340 kJ/mol"],
      shells: [2, 8, 18, 32, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "890–1300 MPa",
        vickers: "755–1160 MPa"
      },
      shear: {
        modulus: "27.2 GPa"
      },
      compression: {
        bulk_modulus: "47.6 GPa"
      },
      strain: {
        poisson: "0.261"
      },
      stifness: {
        young: "68.6 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "lutetium",
    thermodynamics: {
      molar_heat: "26.86 J/(mol·K)",
      enthalpy: "ca. 22 kJ/mol",
      conductivity: "16.4 W/(m·K)",
      boiling: "3675 K ​(3402 °C, ​6156 °F)",
      vaporization: "414 kJ/mol",
      expansion: "poly: 9.9 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1925 K ​(1652 °C, ​3006 °F)"
    },
    identity: {
      pronunciation: "/ lj uː ˈ t iː ʃ i ə m / ​ ( lew- TEE -shee-əm )",
      cas: "7439-94-3"
    },
    atomic: {
      covalent_radius: "187±8 pm",
      weight: "174.9668(1)",
      number: 71,
      radius: "empirical: 174 pm"
    },
    history: {
      discovery: "Carl Auer von Welsbach and Georges Urbain (1906)",
      named_by: "Georges Urbain (1906)",
      isolation: "Carl Auer von Welsbach (1906)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide , sometimes considered a transition metal",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35869"
    },
    density: {
      stp: "1.738 g/cm 3",
      liquid: {
        mp: "1.584 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "4940 m/s (at r.t. ) (annealed)"
    },
    electronic: {
      configuration: "[ Ne ] 3s 2",
      resistivity: "43.9 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.31",
      ionisation: [],
      shells: [2, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "44–260 MPa",
        mohs: "1–2.5"
      },
      shear: {
        modulus: "17 GPa"
      },
      compression: {
        bulk_modulus: "35.4 GPa"
      },
      strain: {
        poisson: "0.290"
      },
      stifness: {
        young: "45 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+13.1·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "magnesium",
    thermodynamics: {
      molar_heat: "24.869 J/(mol·K)",
      enthalpy: "8.48 kJ/mol",
      conductivity: "156 W/(m·K)",
      boiling: "1363 K ​(1091 °C, ​1994 °F)",
      vaporization: "128 kJ/mol",
      expansion: "24.8 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "923 K ​(650 °C, ​1202 °F)"
    },
    identity: {
      pronunciation: "/ m æ ɡ ˈ n iː z i ə m / ​ ( mag- NEE -zee-əm )",
      cas: "7439-95-4"
    },
    atomic: {
      covalent_radius: "141±7 pm",
      weight: "[ 24.304 , 24.307 ] conventional: 24.305",
      number: 12,
      vanderwaals: "173 pm",
      radius: "empirical: 160 pm"
    },
    history: {
      discovery: "Joseph Black (1755 )",
      named_by: "after Magnesia , Greece",
      isolation: "Humphry Davy (1808 )"
    },
    periodic_table: {
      group: "group 2 (alkaline earth metals)",
      category: "alkaline earth metal",
      period: 3,
      block: "s-block"
    },
    appearance: "shiny grey solid",
    chemical: {
      oxydation_states: "+1, +2 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf3586a"
    },
    density: {
      stp: "7.21 g/cm 3",
      liquid: {
        mp: "5.95 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "5150 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 5 4s 2",
      resistivity: "1.44 µΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.55",
      ionisation: ["3rd: 3248 kJ/mol"],
      shells: [2, 8, 13, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "196 MPa",
        mohs: "6.0"
      },
      compression: {
        bulk_modulus: "120 GPa"
      },
      stifness: {
        young: "198 GPa"
      }
    },
    magnetism: {
      susceptibiity: "(α) +529.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "manganese",
    thermodynamics: {
      molar_heat: "26.32 J/(mol·K)",
      enthalpy: "12.91 kJ/mol",
      conductivity: "7.81 W/(m·K)",
      boiling: "2334 K ​(2061 °C, ​3742 °F)",
      vaporization: "221 kJ/mol",
      expansion: "21.7 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1519 K ​(1246 °C, ​2275 °F)"
    },
    identity: {
      pronunciation: "/ ˈ m æ ŋ ɡ ə n iː z / ​ ( MANG -gə-neez )",
      cas: "7439-96-5"
    },
    atomic: {
      covalent_radius: "Low spin: 139±5 pm High spin: 161±8 pm",
      weight: "54.938 043 (2)",
      number: 25,
      radius: "empirical: 127 pm"
    },
    history: {
      isolation: "Johann Gottlieb Gahn (1774)",
      discovery: "Carl Wilhelm Scheele (1774)"
    },
    periodic_table: {
      group: "group 7",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "silvery metallic",
    chemical: {
      oxydation_states: "−3, −2, −1, +1, +2 , +3, +4 , +5, +6, +7 (depending on the oxidation state, an acidic, basic, or amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf3586b"
    },
    density: {
      stp: "37.4 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 7 7s 2 (predicted)",
      ionisation: ["1st: 800 kJ/mol", "2nd: 1820 kJ/mol", "3rd: 2900 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 15, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "278 (most stable isotope) (unconfirmed: 282)"
    },
    magnetism: {
      ordering: "paramagnetic (predicted)"
    },
    name: "meitnerium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ m aɪ t ˈ n ɪər i ə m / ( myt- NEER -ee-əm ) / ˈ m aɪ t n ə r i ə m / ( MYT -nər-ee-əm )",
      cas: "54038-01-6"
    },
    atomic: {
      covalent_radius: "129 pm (estimated)",
      number: 109,
      radius: "empirical: 128 pm (predicted)"
    },
    history: {
      discovery: "Gesellschaft für Schwerionenforschung (1982)",
      named_by: "after Lise Meitner"
    },
    periodic_table: {
      group: "group 9",
      category: "unknown chemical properties, but probably a transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "( +1 ), ( +3 ), (+4), ( +6 ), (+8), (+9) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf3586c"
    },
    density: {
      stp: "10.3(7) g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 13 7s 2",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 635 kJ/mol"],
      shells: [2, 8, 18, 32, 31, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "258 (most stable isotope)"
    },
    name: "mendelevium",
    thermodynamics: {
      phase: "unknown phase (predicted)",
      melting: "1100 K ​(827 °C, ​1521 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ ˌ m ɛ n d ɪ ˈ l iː v i ə m / ​ ( MEN -də- LEE -vee-əm )",
      cas: "7440-11-1"
    },
    atomic: {
      number: 101
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory (1955)",
      named_by: "after Dmitri Mendeleev"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    chemical: {
      oxydation_states: "+2, +3"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf3586d"
    },
    density: {
      stp: "13.534 g/cm 3"
    },
    crystallography: {
      structure: "​ rhombohedral"
    },
    sound: {
      speed: "liquid: 1451.4 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2",
      resistivity: "961 nΩ·m (at 25 °C)",
      negativity: "Pauling scale: 2.00",
      ionisation: ["2nd: 1810 kJ/mol", "3rd: 3300 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 2]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−33.44·10 −6 cm 3 /mol (293 K)",
      ordering: "diamagnetic"
    },
    name: "mercury",
    thermodynamics: {
      molar_heat: "27.983 J/(mol·K)",
      enthalpy: "2.29 kJ/mol",
      triple: "234.3156 K, ​1.65×10 −7 kPa",
      boiling: "629.88 K ​(356.73 °C, ​674.11 °F)",
      critical: "1750 K, 172.00 MPa",
      conductivity: "8.30 W/(m·K)",
      expansion: "60.4 µm/(m·K) (at 25 °C)",
      phase: "liquid",
      melting: "234.3210 K ​(−38.8290 °C, ​−37.8922 °F)",
      vaporization: "59.11 kJ/mol"
    },
    identity: {
      cas: "7439-97-6"
    },
    atomic: {
      covalent_radius: "132±5 pm",
      weight: "200.592(3)",
      number: 80,
      vanderwaals: "155 pm",
      radius: "empirical: 151 pm"
    },
    history: {
      discovery: "Ancient Chinese and Indians (before 2000 BCE )"
    },
    periodic_table: {
      group: "group 12",
      category: "post-transition metal , alternatively considered a transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "silvery",
    chemical: {
      oxydation_states: "−2 , +1 (mercurous), +2 (mercuric) (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf3586e"
    },
    density: {
      stp: "10.28 g/cm 3",
      liquid: {
        mp: "9.33 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "5400 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Kr ] 4d 5 5s 1",
      resistivity: "53.4 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.16",
      ionisation: ["2nd: 1560 kJ/mol", "3rd: 2618 kJ/mol"],
      shells: [2, 8, 18, 13, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "1370–2500 MPa",
        vickers: "1400–2740 MPa",
        mohs: "5.5"
      },
      shear: {
        modulus: "126 GPa"
      },
      compression: {
        bulk_modulus: "230 GPa"
      },
      strain: {
        poisson: "0.31"
      },
      stifness: {
        young: "329 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+89.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "molybdenum",
    thermodynamics: {
      molar_heat: "24.06 J/(mol·K)",
      enthalpy: "37.48 kJ/mol",
      conductivity: "138 W/(m·K)",
      boiling: "4912 K ​(4639 °C, ​8382 °F)",
      vaporization: "598 kJ/mol",
      expansion: "4.8 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2896 K ​(2623 °C, ​4753 °F)",
      diffusivity: "54.3 mm 2 /s (at 300 K)"
    },
    identity: {
      pronunciation: "/ m ə ˈ l ɪ b d ə n ə m / ​ ( mə- LIB -dən-əm )",
      cas: "7439-98-7"
    },
    atomic: {
      covalent_radius: "154±5 pm",
      weight: "95.95(1)",
      number: 42,
      radius: "empirical: 139 pm"
    },
    history: {
      isolation: "Peter Jacob Hjelm (1781)",
      discovery: "Carl Wilhelm Scheele (1778)"
    },
    periodic_table: {
      group: "group 6",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "gray metallic",
    chemical: {
      oxydation_states: "−4, −2, −1, +1, +2, +3, +4 , +5, +6 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf3586f"
    },
    density: {
      stp: "13.5 g/cm 3 (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 7p 3 (predicted)",
      ionisation: ["2nd: 1760 kJ/mol", "3rd: 2650 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 18, 5]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "290 (most stable isotope)"
    },
    name: "moscovium",
    thermodynamics: {
      boiling: "~1400 K ​(~1100 °C, ​~2000 °F) (predicted)",
      enthalpy: "5.90–5.98 kJ/mol (extrapolated)",
      phase: "unknown phase (predicted)",
      vaporization: "138 kJ/mol (predicted)",
      melting: "670 K ​(400 °C, ​750 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ m ɒ s ˈ k oʊ v i ə m / ​ ( mos- KOH -vee-əm )",
      cas: "54085-64-2"
    },
    atomic: {
      covalent_radius: "156–158 pm (extrapolated)",
      number: 115,
      radius: "empirical: 187 pm (predicted)"
    },
    history: {
      discovery: "Joint Institute for Nuclear Research and Lawrence Livermore National Laboratory (2003)",
      named_by: "After Moscow region"
    },
    periodic_table: {
      group: "group 15 (pnictogens)",
      category: "unknown chemical properties, but probably a post-transition metal",
      period: 7,
      block: "p-block"
    },
    chemical: {
      oxydation_states: "( +1 ), ( +3 ) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35870"
    },
    density: {
      stp: "7.01 g/cm 3",
      liquid: {
        mp: "6.89 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    sound: {
      speed: "2330 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 4 6s 2",
      resistivity: "α, poly: 643 nΩ·m",
      negativity: "Pauling scale: 1.14",
      ionisation: ["2nd: 1040 kJ/mol", "3rd: 2130 kJ/mol"],
      shells: [2, 8, 18, 22, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "265–700 MPa",
        vickers: "345–745 MPa"
      },
      shear: {
        modulus: "α form: 16.3 GPa"
      },
      compression: {
        bulk_modulus: "α form: 31.8 GPa"
      },
      strain: {
        poisson: "α form: 0.281"
      },
      stifness: {
        young: "α form: 41.4 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+5628.0·10 −6 cm 3 /mol (287.7 K)",
      ordering: "paramagnetic , antiferromagnetic below 20 K"
    },
    name: "neodymium",
    thermodynamics: {
      molar_heat: "27.45 J/(mol·K)",
      enthalpy: "7.14 kJ/mol",
      conductivity: "16.5 W/(m·K)",
      boiling: "3347 K ​(3074 °C, ​5565 °F)",
      vaporization: "289 kJ/mol",
      expansion: "α, poly: 9.6 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1297 K ​(1024 °C, ​1875 °F)"
    },
    identity: {
      pronunciation: "/ ˌ n iː oʊ ˈ d ɪ m i ə m / ​ ( NEE -oh- DIM -ee-əm )",
      cas: "7440-00-8"
    },
    atomic: {
      covalent_radius: "201±6 pm",
      weight: "144.242(3)",
      number: 60,
      radius: "empirical: 181 pm"
    },
    history: {
      discovery: "Carl Auer von Welsbach (1885)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+2, +3 , +4 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35871"
    },
    density: {
      stp: "0.9002 g/L",
      liquid: {
        bp: "1.207 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "435 m/s (gas, at 0 °C)"
    },
    electronic: {
      configuration: "[ He ] 2s 2 2p 6",
      ionisation: ["3rd: 6122 kJ/mol"],
      shells: [2, 8]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      compression: {
        bulk_modulus: "654 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−6.74·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "neon",
    thermodynamics: {
      molar_heat: "20.79 J/(mol·K)",
      enthalpy: "0.335 kJ/mol",
      triple: "24.556 K, ​43.37 kPa",
      boiling: "27.104 K ​(−246.046 °C, ​−410.883 °F)",
      critical: "44.4918 K, 2.7686 MPa",
      conductivity: "49.1×10 −3 W/(m·K)",
      phase: "gas",
      melting: "24.56 K ​(−248.59 °C, ​−415.46 °F)",
      vaporization: "1.71 kJ/mol"
    },
    identity: {
      cas: "7440-01-9"
    },
    atomic: {
      covalent_radius: "58 pm",
      weight: "20.1797(6)",
      number: 10,
      vanderwaals: "154 pm"
    },
    history: {
      prediction: "William Ramsay (1897)",
      discovery: "William Ramsay & Morris Travers (1898)"
    },
    periodic_table: {
      group: "group 18 (noble gases)",
      category: "noble gas",
      period: 2,
      block: "p-block"
    },
    appearance: "colorless gas exhibiting an orange-red glow when placed in an electric field",
    chemical: {
      oxydation_states: "0"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35872"
    },
    density: {
      stp: "alpha: 20.45 g/cm 3 accepted standard value: 19.38 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 5f 4 6d 1 7s 2",
      resistivity: "1.220 µΩ·m (at 22 °C)",
      negativity: "Pauling scale: 1.36",
      ionisation: [],
      shells: [2, 8, 18, 32, 22, 9, 2]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "237 (most stable isotope)"
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "neptunium",
    thermodynamics: {
      molar_heat: "29.46 J/(mol·K)",
      enthalpy: "5.19 kJ/mol",
      conductivity: "6.3 W/(m·K)",
      boiling: "4447 K ​(4174 °C, ​7545 °F) (extrapolated)",
      vaporization: "336 kJ/mol",
      phase: "solid",
      melting: "912±3 K ​(639±3 °C, ​1182±5 °F)"
    },
    identity: {
      pronunciation: "/ n ɛ p ˈ tj uː n i ə m / ​ ( nep- TEW -nee-əm )",
      cas: "7439-99-8"
    },
    atomic: {
      covalent_radius: "190±1 pm",
      number: 93,
      radius: "empirical: 155 pm"
    },
    history: {
      discovery: "Edwin McMillan and Philip H. Abelson (1940)",
      named_by: "after planet Neptune , itself named after Roman god of the sea Neptune"
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery metallic",
    chemical: {
      oxydation_states: "+1, +2, +3, +4, +5 , +6, +7 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35873"
    },
    density: {
      stp: "8.908 g/cm 3",
      liquid: {
        mp: "7.81 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "4900 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Ar ] 3d 8 4s 2 or [Ar] 3d 9 4s 1",
      resistivity: "69.3 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.91",
      ionisation: ["3rd: 3395 kJ/mol"],
      shells: [[2, 8, 16, 2], [2, 8, 17, 1]]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "667–1600 MPa",
        vickers: "638 MPa",
        mohs: "4.0"
      },
      shear: {
        modulus: "76 GPa"
      },
      compression: {
        bulk_modulus: "180 GPa"
      },
      strain: {
        poisson: "0.31"
      },
      stifness: {
        young: "200 GPa"
      }
    },
    magnetism: {
      ordering: "ferromagnetic"
    },
    name: "nickel",
    thermodynamics: {
      molar_heat: "26.07 J/(mol·K)",
      enthalpy: "17.48 kJ/mol",
      conductivity: "90.9 W/(m·K)",
      boiling: "3003 K ​(2730 °C, ​4946 °F)",
      vaporization: "379 kJ/mol",
      expansion: "13.4 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1728 K ​(1455 °C, ​2651 °F)"
    },
    identity: {
      cas: "7440-02-0"
    },
    atomic: {
      covalent_radius: "124±4 pm",
      weight: "58.6934(4)",
      number: 28,
      vanderwaals: "163 pm",
      radius: "empirical: 124 pm"
    },
    history: {
      discovery: "Axel Fredrik Cronstedt (1751)"
    },
    periodic_table: {
      group: "group 10",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "lustrous, metallic, and silver with a gold tinge",
    chemical: {
      oxydation_states: "−2, −1, +1, +2 , +3, +4 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35874"
    },
    density: {
      stp: "16 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp) (extrapolated)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 7p 1 (predicted)",
      ionisation: ["2nd: 2240 kJ/mol", "3rd: 3020 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 18, 3]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "286 (most stable isotope)"
    },
    name: "nihonium",
    thermodynamics: {
      boiling: "1430 K ​(1130 °C, ​2070 °F) (predicted)",
      enthalpy: "7.61 kJ/mol (extrapolated)",
      phase: "unknown phase (predicted)",
      vaporization: "130 kJ/mol (predicted)",
      melting: "700 K ​(430 °C, ​810 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ n ɪ ˈ h oʊ n i ə m / ​ ( nih- HOH -nee-əm )",
      cas: "54084-70-7"
    },
    atomic: {
      covalent_radius: "172–180 pm (extrapolated)",
      number: 113,
      radius: "empirical: 170 pm (predicted)"
    },
    history: {
      discovery: "Riken (Japan, first undisputed claim 2004) JINR (Russia) and Livermore (US, first announcement 2003)",
      named_by: "After Japan ( Nihon in Japanese)"
    },
    periodic_table: {
      group: "group 13 (boron group)",
      category: "unknown chemical properties, but probably a post-transition metal",
      period: 7,
      block: "p-block"
    },
    chemical: {
      oxydation_states: "(−1), ( +1 ), ( +3 ), (+5) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35875"
    },
    density: {
      stp: "8.57 g/cm 3"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "3480 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 4 5s 1",
      resistivity: "152 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 1.6",
      ionisation: ["2nd: 1380 kJ/mol", "3rd: 2416 kJ/mol"],
      shells: [2, 8, 18, 12, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "735–2450 MPa",
        vickers: "870–1320 MPa",
        mohs: "6.0"
      },
      shear: {
        modulus: "38 GPa"
      },
      compression: {
        bulk_modulus: "170 GPa"
      },
      strain: {
        poisson: "0.40"
      },
      stifness: {
        young: "105 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "niobium",
    thermodynamics: {
      molar_heat: "24.60 J/(mol·K)",
      enthalpy: "30 kJ/mol",
      conductivity: "53.7 W/(m·K)",
      boiling: "5017 K ​(4744 °C, ​8571 °F)",
      vaporization: "689.9 kJ/mol",
      expansion: "7.3 µm/(m·K)",
      phase: "solid",
      melting: "2750 K ​(2477 °C, ​4491 °F)"
    },
    identity: {
      pronunciation: "/ n aɪ ˈ oʊ b i ə m / ​ ( ny- OH -bee-əm )",
      cas: "7440-03-1"
    },
    atomic: {
      covalent_radius: "164±6 pm",
      weight: "92.906 37 (1)",
      number: 41,
      radius: "empirical: 146 pm"
    },
    history: {
      recognised: "Heinrich Rose (1844)",
      discovery: "Charles Hatchett (1801)",
      named_by: "after Niobe in Greek mythology, daughter of Tantalus ( tantalum )",
      isolation: "Christian Wilhelm Blomstrand (1864)"
    },
    periodic_table: {
      group: "group 5",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "gray metallic, bluish when oxidized",
    chemical: {
      oxydation_states: "−3, −1, +1, +2, +3, +4, +5 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd57644df7dcbf35876"
    },
    density: {
      stp: "1.2506 g/L at 0 °C, 1013 mbar",
      liquid: {
        bp: "0.808 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal"
    },
    sound: {
      speed: "353 m/s (gas, at 27 °C)"
    },
    electronic: {
      configuration: "[ He ] 2s 2 2p 3",
      negativity: "Pauling scale: 3.04",
      ionisation: ["2nd: 2856 kJ/mol"],
      shells: [2, 5]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      ordering: "diamagnetic"
    },
    name: "nitrogen",
    thermodynamics: {
      molar_heat: "(N 2 ) 29.124 J/(mol·K)",
      enthalpy: "(N 2 ) 0.72 kJ/mol",
      triple: "63.151 K, ​12.52 kPa",
      boiling: "77.355 K ​(−195.795 °C, ​−320.431 °F)",
      critical: "126.21 K, 3.39 MPa",
      conductivity: "25.83×10 −3 W/(m·K)",
      phase: "gas",
      melting: "63.15 K ​(−210.00 °C, ​−346.00 °F)",
      vaporization: "(N 2 ) 5.56 kJ/mol"
    },
    identity: {
      cas: "17778-88-0 7727-37-9 (N 2 )"
    },
    atomic: {
      covalent_radius: "71±1 pm",
      weight: "[ 14.006 43 , 14.007 28 ] conventional: 14.007",
      number: 7,
      vanderwaals: "155 pm"
    },
    history: {
      named_by: "Jean-Antoine Chaptal (1790)",
      discovery: "Daniel Rutherford (1772)"
    },
    periodic_table: {
      group: "group 15 (pnictogens)",
      category: "reactive nonmetal",
      period: 2,
      block: "p-block"
    },
    appearance: "colorless gas, liquid or solid",
    chemical: {
      oxydation_states: "−3 , −2, −1, +1, +2, +3 , +4, +5 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35877"
    },
    density: {
      stp: "9.9(4) g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 7s 2",
      negativity: "Pauling scale: 1.3 (predicted)",
      ionisation: [],
      shells: [2, 8, 18, 32, 32, 8, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "259 (most stable isotope)"
    },
    name: "nobelium",
    thermodynamics: {
      phase: "unknown phase (predicted)",
      melting: "1100 K ​(827 °C, ​1521 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ n oʊ ˈ b ɛ l i ə m / ( listen ) ( noh- BEL -ee-əm ) / n oʊ ˈ b iː l i ə m / ( noh- BEE -lee-əm )",
      cas: "10028-14-5"
    },
    atomic: {
      number: 102
    },
    history: {
      discovery: "Joint Institute for Nuclear Research (1966)",
      named_by: "after Alfred Nobel"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    chemical: {
      oxydation_states: "+2 , +3"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35878"
    },
    density: {
      liquid: {
        mp: "4.9–5.1 g/cm 3 (predicted)"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc) (extrapolated)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 7p 6 (predicted)",
      ionisation: ["2nd: 1560 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 18, 8]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "294 (most stable isotope) (unconfirmed: 295)"
    },
    name: "oganesson",
    thermodynamics: {
      boiling: "350±30 K ​(80±30 °C, ​170±50 °F) (extrapolated)",
      enthalpy: "23.5 kJ/mol (extrapolated)",
      phase: "unknown phase (predicted)",
      critical: "439 K, 6.8 MPa (extrapolated)",
      vaporization: "19.4 kJ/mol (extrapolated)"
    },
    identity: {
      pronunciation: "/ ˌ oʊ ɡ ə ˈ n ɛ s ɒ n / ( OH -gə- NES -on ) / ˌ ɒ ɡ ə ˈ n ɛ s ɒ n / ( OG -ə- NES -on )",
      cas: "54144-19-3"
    },
    atomic: {
      covalent_radius: "157 pm (predicted)",
      number: 118
    },
    history: {
      prediction: "Niels Bohr (1922)",
      discovery: "Joint Institute for Nuclear Research and Lawrence Livermore National Laboratory (2002)",
      named_by: "after Yuri Oganessian"
    },
    periodic_table: {
      group: "group 18",
      category: "unknown chemical properties, but probably a noble gas",
      period: 7,
      block: "p-block"
    },
    chemical: {
      oxydation_states: "(−1), (0), (+1), ( +2 ), ( +4 ), (+6) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35879"
    },
    density: {
      stp: "22.59 g/cm 3",
      liquid: {
        mp: "20 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "4940 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 6 6s 2",
      resistivity: "81.2 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 2.2",
      ionisation: ["1st: 840 kJ/mol", "2nd: 1600 kJ/mol"],
      shells: [2, 8, 18, 32, 14, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "293 MPa",
        vickers: "300 MPa",
        mohs: "7.0"
      },
      shear: {
        modulus: "222 GPa"
      },
      compression: {
        bulk_modulus: "462 GPa"
      },
      strain: {
        poisson: "0.25"
      }
    },
    magnetism: {
      susceptibiity: "11·10 −6 cm 3 /mol",
      ordering: "paramagnetic"
    },
    name: "osmium",
    thermodynamics: {
      molar_heat: "24.7 J/(mol·K)",
      enthalpy: "31 kJ/mol",
      conductivity: "87.6 W/(m·K)",
      boiling: "5285 K ​(5012 °C, ​9054 °F)",
      vaporization: "378 kJ/mol",
      expansion: "5.1 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "3306 K ​(3033 °C, ​5491 °F)"
    },
    identity: {
      pronunciation: "/ ˈ ɒ z m i ə m / ​ ( OZ -mee-əm )",
      cas: "7440-04-2"
    },
    atomic: {
      covalent_radius: "144±4 pm",
      weight: "190.23(3)",
      number: 76,
      radius: "empirical: 135 pm"
    },
    history: {
      discovery: "Smithson Tennant (1803)"
    },
    periodic_table: {
      group: "group 8",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "silvery, blue cast",
    chemical: {
      oxydation_states: "−4, −2, −1, 0, +1, +2, +3, +4 , +5, +6, +7, +8 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3587a"
    },
    density: {
      stp: "1.429 g/L",
      liquid: {
        bp: "1.141 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ cubic"
    },
    thermodynamics: {
      molar_heat: "(O 2 ) 29.378 J/(mol·K)",
      enthalpy: "(O 2 ) 0.444 kJ/mol",
      triple: "54.361 K, ​0.1463 kPa",
      boiling: "90.188 K ​(−182.962 °C, ​−297.332 °F)",
      critical: "154.581 K, 5.043 MPa",
      conductivity: "26.58×10 −3 W/(m·K)",
      phase: "gas",
      melting: "54.36 K ​(−218.79 °C, ​−361.82 °F)",
      vaporization: "(O 2 ) 6.82 kJ/mol"
    },
    electronic: {
      configuration: "[ He ] 2s 2 2p 4",
      negativity: "Pauling scale: 3.44",
      ionisation: [],
      shells: [2, 6]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "+3449.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "oxygen",
    allotropy: "O 2 , O 3 ( Ozone )",
    identity: {
      cas: "7782-44-7"
    },
    atomic: {
      covalent_radius: "66±2 pm",
      weight: "[ 15.999 03 , 15.999 77 ] conventional: 15.999",
      number: 8,
      vanderwaals: "152 pm"
    },
    history: {
      named_by: "Antoine Lavoisier (1777)",
      discovery: "Carl Wilhelm Scheele (1771)"
    },
    periodic_table: {
      group: "group 16 (chalcogens)",
      category: "reactive nonmetal",
      period: 2,
      block: "p-block"
    },
    sound: {
      speed: "330 m/s (gas, at 27 °C)"
    },
    appearance: "gas: colorless liquid and solid: pale blue",
    chemical: {
      oxydation_states: "−2 , −1 , +1 , +2"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3587b"
    },
    density: {
      stp: "12.023 g/cm 3",
      liquid: {
        mp: "10.38 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "3070 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10",
      resistivity: "105.4 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.20",
      ionisation: ["2nd: 1870 kJ/mol", "3rd: 3177 kJ/mol"],
      shells: [2, 8, 18, 18]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "320–610 MPa",
        vickers: "400–600 MPa",
        mohs: "4.75"
      },
      shear: {
        modulus: "44 GPa"
      },
      compression: {
        bulk_modulus: "180 GPa"
      },
      strain: {
        poisson: "0.39"
      },
      stifness: {
        young: "121 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+567.4·10 −6 cm 3 /mol (288 K)",
      ordering: "paramagnetic"
    },
    name: "palladium",
    thermodynamics: {
      molar_heat: "25.98 J/(mol·K)",
      enthalpy: "16.74 kJ/mol",
      conductivity: "71.8 W/(m·K)",
      boiling: "3236 K ​(2963 °C, ​5365 °F)",
      vaporization: "358 kJ/mol",
      expansion: "11.8 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1828.05 K ​(1554.9 °C, ​2830.82 °F)"
    },
    identity: {
      pronunciation: "/ p ə ˈ l eɪ d i ə m / ​ ( pə- LAY -dee-əm )",
      cas: "7440-05-3"
    },
    atomic: {
      covalent_radius: "139±6 pm",
      weight: "106.42(1)",
      number: 46,
      vanderwaals: "163 pm",
      radius: "empirical: 137 pm"
    },
    history: {
      discovery: "William Hyde Wollaston (1802)",
      named_by: "after asteroid Pallas , itself named after Pallas Athena"
    },
    periodic_table: {
      group: "group 10",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "0, +1, +2 , +3, +4 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3587c"
    },
    density: {
      stp: "white: 1.823 g/cm 3 red: ≈2.2–2.34 g/cm 3 violet: 2.36 g/cm 3 black: 2.69 g/cm 3"
    },
    crystallography: {
      structure: "​ body-centred cubic (bcc)"
    },
    electronic: {
      configuration: "[ Ne ] 3s 2 3p 3",
      negativity: "Pauling scale: 2.19",
      ionisation: ["2nd: 1907 kJ/mol"],
      shells: [2, 8, 5]
    },
    availability: {
      earth_crust: "5.2 (taking silicon as 100)",
      surface: "primordial"
    },
    mechanical: {
      compression: {
        bulk_modulus: "white: 5 GPa red: 11 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−20.8·10 −6 cm 3 /mol (293 K)",
      ordering: "white, red, violet, black: diamagnetic"
    },
    name: "phosphorus",
    thermodynamics: {
      molar_heat: "white: 23.824 J/(mol·K)",
      enthalpy: "white: 0.66 kJ/mol",
      conductivity: "white: 0.236 W/(m·K) black: 12.1 W/(m·K)",
      boiling: "white: 553.7 K ​(280.5 °C, ​536.9 °F)",
      vaporization: "white: 51.9 kJ/mol",
      phase: "solid",
      melting: "white: 317.3 K ​(44.15 °C, ​111.5 °F) red: ∼860 K (∼590 °C, ∼1090 °F)"
    },
    identity: {
      pronunciation: "/ ˈ f ɒ s f ər ə s / ​ ( FOS -fər-əs )",
      cas: "7723-14-0 (red) 12185-10-3 (white)"
    },
    atomic: {
      covalent_radius: "107±3 pm",
      weight: "30.973 761 998 (5)",
      number: 15,
      vanderwaals: "180 pm"
    },
    history: {
      recognised: "Antoine Lavoisier (1777)",
      discovery: "Hennig Brand (1669)"
    },
    periodic_table: {
      group: "group 15 (pnictogens)",
      category: "reactive nonmetal",
      period: 3,
      block: "p-block"
    },
    appearance: "Colourless, waxy white, yellow, scarlet, red, violet, black",
    chemical: {
      oxydation_states: "−3 , −2, −1, +1, +2, +3 , +4, +5 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3587d"
    },
    density: {
      stp: "21.45 g/cm 3",
      liquid: {
        mp: "19.77 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "2800 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 9 6s 1",
      resistivity: "105 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.28",
      ionisation: ["1st: 870 kJ/mol", "2nd: 1791 kJ/mol"],
      shells: [2, 8, 18, 32, 17, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      tensile: {
        strength: "125–240 MPa"
      },
      shear: {
        modulus: "61 GPa"
      },
      compression: {
        bulk_modulus: "230 GPa"
      },
      hardness: {
        brinell: "300–500 MPa",
        vickers: "400–550 MPa",
        mohs: "3.5"
      },
      strain: {
        poisson: "0.38"
      },
      stifness: {
        young: "168 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+201.9·10 −6 cm 3 /mol (290 K)",
      ordering: "paramagnetic"
    },
    name: "platinum",
    thermodynamics: {
      molar_heat: "25.86 J/(mol·K)",
      enthalpy: "22.17 kJ/mol",
      conductivity: "71.6 W/(m·K)",
      boiling: "4098 K ​(3825 °C, ​6917 °F)",
      vaporization: "510 kJ/mol",
      expansion: "8.8 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2041.4 K ​(1768.3 °C, ​3214.9 °F)"
    },
    identity: {
      pronunciation: "/ ˈ p l æ t ɪ n ə m / ​ ( PLAT -ə-nəm )",
      cas: "7440-06-4"
    },
    atomic: {
      covalent_radius: "136±5 pm",
      weight: "195.084(9)",
      number: 78,
      vanderwaals: "175 pm",
      radius: "empirical: 139 pm"
    },
    history: {
      discovery: "Antonio de Ulloa (1735)"
    },
    periodic_table: {
      group: "group 10",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "−3, −2, −1, +1, +2 , +3, +4 , +5, +6 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3587e"
    },
    density: {
      stp: "19.816 g/cm 3",
      liquid: {
        mp: "16.63 g/cm 3"
      }
    },
    sound: {
      speed: "2260 m/s"
    },
    electronic: {
      configuration: "[ Rn ] 5f 6 7s 2",
      resistivity: "1.460 µΩ·m (at 0 °C)",
      negativity: "Pauling scale: 1.28",
      ionisation: [],
      shells: [2, 8, 18, 32, 24, 8, 2]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      shear: {
        modulus: "43 GPa"
      },
      mass: "244 (most stable isotope)",
      strain: {
        poisson: "0.21"
      },
      stifness: {
        young: "96 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "plutonium",
    thermodynamics: {
      molar_heat: "35.5 J/(mol·K)",
      enthalpy: "2.82 kJ/mol",
      conductivity: "6.74 W/(m·K)",
      boiling: "3505 K ​(3228 °C, ​5842 °F)",
      vaporization: "333.5 kJ/mol",
      expansion: "46.7 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "912.5 K ​(639.4 °C, ​1182.9 °F)"
    },
    identity: {
      pronunciation: "/ p l uː ˈ t oʊ n i ə m / ​ ( ploo- TOH -nee-əm )",
      cas: "7440-07-5"
    },
    atomic: {
      covalent_radius: "187±1 pm",
      number: 94,
      radius: "empirical: 159 pm"
    },
    history: {
      discovery: "Glenn T. Seaborg , Arthur Wahl , Joseph W. Kennedy , Edwin McMillan (1940–1)",
      named_by: "after dwarf planet Pluto , itself named after classical god of the underworld Pluto"
    },
    crystallography: {
      structure: "​ monoclinic"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery white, tarnishing to dark gray in air",
    chemical: {
      oxydation_states: "+1, +2, +3, +4 , +5, +6, +7 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3587f"
    },
    density: {
      stp: "alpha: 9.196 g/cm 3 beta: 9.398 g/cm 3"
    },
    thermodynamics: {
      molar_heat: "26.4 J/(mol·K)",
      enthalpy: "ca. 13 kJ/mol",
      conductivity: "20 W/(m·K) (?)",
      boiling: "1235 K ​(962 °C, ​1764 °F)",
      vaporization: "102.91 kJ/mol",
      expansion: "23.5 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "527 K ​(254 °C, ​489 °F)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2 6p 4",
      resistivity: "α: 0.40 µΩ·m (at 0 °C)",
      negativity: "Pauling scale: 2.0",
      ionisation: [],
      shells: [2, 8, 18, 32, 18, 6]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "209 (most stable isotope)"
    },
    magnetism: {
      ordering: "nonmagnetic"
    },
    name: "polonium",
    allotropy: "α, β",
    identity: {
      pronunciation: "/ p ə ˈ l oʊ n i ə m / ​ ( pə- LOH -nee-əm )",
      cas: "7440-08-6"
    },
    atomic: {
      covalent_radius: "140±4 pm",
      number: 84,
      vanderwaals: "197 pm",
      radius: "empirical: 168 pm"
    },
    history: {
      discovery: "Pierre and Marie Curie (1898)",
      named_by: "after Polonia , Latin for Poland , homeland of Marie Curie",
      isolation: "Willy Marckwald (1902)"
    },
    crystallography: {
      structure: "​ rhombohedral β-Po"
    },
    periodic_table: {
      group: "group 16 (chalcogens)",
      category: "post-transition metal , but this status is disputed",
      period: 6,
      block: "p-block"
    },
    appearance: "silvery",
    chemical: {
      oxydation_states: "−2 , +2 , +4 , +5, +6 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35880"
    },
    density: {
      stp: "0.862 g/cm 3",
      liquid: {
        mp: "0.828 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "2000 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 4s 1",
      resistivity: "72 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.82",
      ionisation: ["2nd: 3052 kJ/mol", "3rd: 4420 kJ/mol"],
      shells: [2, 8, 8, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      shear: {
        modulus: "1.3 GPa"
      },
      compression: {
        bulk_modulus: "3.1 GPa"
      },
      hardness: {
        brinell: "0.363 MPa",
        mohs: "0.4"
      },
      stifness: {
        young: "3.53 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+20.8·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "potassium",
    thermodynamics: {
      molar_heat: "29.6 J/(mol·K)",
      enthalpy: "2.33 kJ/mol",
      conductivity: "102.5 W/(m·K)",
      boiling: "1032 K ​(759 °C, ​1398 °F)",
      critical: "2223 K, 16 MPa",
      expansion: "83.3 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "336.7 K ​(63.5 °C, ​146.3 °F)",
      vaporization: "76.9 kJ/mol"
    },
    identity: {
      pronunciation: "/ p ə ˈ t æ s i ə m / ​ ( pə- TAS -ee-əm )",
      cas: "7440-09-7"
    },
    atomic: {
      covalent_radius: "203±12 pm",
      weight: "39.0983(1)",
      number: 19,
      vanderwaals: "275 pm",
      radius: "empirical: 227 pm"
    },
    history: {
      discovery: "Humphry Davy (1807)"
    },
    periodic_table: {
      group: "group 1 (alkali metals)",
      category: "alkali metal",
      period: 4,
      block: "s-block"
    },
    appearance: "silvery gray",
    chemical: {
      oxydation_states: "−1, +1 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35881"
    },
    density: {
      stp: "6.77 g/cm 3",
      liquid: {
        mp: "6.50 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    sound: {
      speed: "2280 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 3 6s 2",
      resistivity: "α, poly: 0.700 µΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.13",
      ionisation: ["1st: 527 kJ/mol", "2nd: 1020 kJ/mol", "3rd: 2086 kJ/mol"],
      shells: [2, 8, 18, 21, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "250–640 MPa",
        vickers: "250–745 MPa"
      },
      shear: {
        modulus: "α form: 14.8 GPa"
      },
      compression: {
        bulk_modulus: "α form: 28.8 GPa"
      },
      strain: {
        poisson: "α form: 0.281"
      },
      stifness: {
        young: "α form: 37.3 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+5010.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "praseodymium",
    thermodynamics: {
      molar_heat: "27.20 J/(mol·K)",
      enthalpy: "6.89 kJ/mol",
      conductivity: "12.5 W/(m·K)",
      boiling: "3403 K ​(3130 °C, ​5666 °F)",
      vaporization: "331 kJ/mol",
      expansion: "α, poly: 6.7 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1208 K ​(935 °C, ​1715 °F)"
    },
    identity: {
      pronunciation: "/ ˌ p r eɪ z iː ə ˈ d ɪ m i ə m / ​ ( PRAY -zee-ə- DIM -ee-əm )",
      cas: "7440-10-0"
    },
    atomic: {
      covalent_radius: "203±7 pm",
      weight: "140.907 66 (1)",
      number: 59,
      radius: "empirical: 182 pm"
    },
    history: {
      discovery: "Carl Auer von Welsbach (1885)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "grayish white",
    chemical: {
      oxydation_states: "+1, +2, +3 , +4, +5 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35882"
    },
    density: {
      stp: "7.26 g/cm 3"
    },
    electronic: {
      configuration: "[ Xe ] 4f 5 6s 2",
      resistivity: "est. 0.75 µΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.13 (?)",
      ionisation: ["1st: 540 kJ/mol", "2nd: 1050 kJ/mol", "3rd: 2150 kJ/mol"],
      shells: [2, 8, 18, 23, 8, 2]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      compression: {
        bulk_modulus: "α form: est. 33 GPa"
      },
      shear: {
        modulus: "α form: est. 18 GPa"
      },
      mass: "145 (most stable isotope)",
      strain: {
        poisson: "α form: est. 0.28"
      },
      stifness: {
        young: "α form: est. 46 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "promethium",
    thermodynamics: {
      enthalpy: "7.13 kJ/mol",
      conductivity: "17.9 W/(m·K)",
      boiling: "3273 K ​(3000 °C, ​5432 °F)",
      vaporization: "289 kJ/mol",
      expansion: "9.0 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1315 K ​(1042 °C, ​1908 °F)"
    },
    identity: {
      pronunciation: "/ p r oʊ ˈ m iː θ i ə m / ​ ( proh- MEE -thee-əm )",
      cas: "7440-12-2"
    },
    atomic: {
      covalent_radius: "199 pm",
      number: 61,
      radius: "empirical: 183 pm"
    },
    history: {
      isolation: "Charles D. Coryell , Jacob A. Marinsky , Lawrence E. Glendenin (1945)",
      discovery: "Chien Shiung Wu , Emilio Segrè , Hans Bethe (1942)",
      named_by: "Grace Mary Coryell (1945)"
    },
    crystallography: {
      structure: "​ double hexagonal close-packed (dhcp)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "metallic",
    chemical: {
      oxydation_states: "+2, +3 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35883"
    },
    density: {
      stp: "15.37 g/cm 3"
    },
    crystallography: {
      structure: "​ body-centered tetragonal"
    },
    electronic: {
      configuration: "[ Rn ] 5f 2 6d 1 7s 2",
      resistivity: "177 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 1.5",
      ionisation: ["1st: 568 kJ/mol"],
      shells: [2, 8, 18, 32, 20, 9, 2]
    },
    availability: {
      surface: "from decay"
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "protactinium",
    thermodynamics: {
      enthalpy: "12.34 kJ/mol",
      conductivity: "47 W/(m·K)",
      boiling: "4300 K ​(4027 °C, ​7280 °F) (?)",
      vaporization: "481 kJ/mol",
      expansion: "~9.9 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1841 K ​(1568 °C, ​2854 °F)"
    },
    identity: {
      pronunciation: "/ ˌ p r oʊ t æ k ˈ t ɪ n i ə m / ​ ( PROH -tak- TIN -ee-əm )",
      cas: "7440-13-3"
    },
    atomic: {
      covalent_radius: "200 pm",
      weight: "231.035 88 (1)",
      number: 91,
      radius: "empirical: 163 pm"
    },
    history: {
      prediction: "Dmitri Mendeleev (1869)",
      named_by: "Otto Hahn and Lise Meitner (1917–8)",
      discovery: "Kasimir Fajans and Oswald Helmuth Göhring (1913)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "bright, silvery metallic luster",
    chemical: {
      oxydation_states: "+2, +3, +4, +5 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35884"
    },
    density: {
      stp: "5.5 g/cm 3"
    },
    electronic: {
      configuration: "[ Rn ] 7s 2",
      resistivity: "1 µΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.9",
      ionisation: [],
      shells: [2, 8, 18, 32, 18, 8, 2]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "226 (most stable isotope)"
    },
    magnetism: {
      ordering: "nonmagnetic"
    },
    name: "radium",
    thermodynamics: {
      enthalpy: "8.5 kJ/mol",
      conductivity: "18.6 W/(m·K)",
      boiling: "2010 K ​(1737 °C, ​3159 °F)",
      vaporization: "113 kJ/mol",
      phase: "solid",
      melting: "973 K ​(700 °C, ​1292 °F) (disputed)"
    },
    identity: {
      pronunciation: "/ ˈ r eɪ d i ə m / ​ ( RAY -dee-əm )",
      cas: "7440-14-4"
    },
    atomic: {
      covalent_radius: "221±2 pm",
      number: 88,
      vanderwaals: "283 pm"
    },
    history: {
      isolation: "Marie Curie (1910)",
      discovery: "Pierre and Marie Curie (1898)"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    periodic_table: {
      group: "group 2 (alkaline earth metals)",
      category: "alkaline earth metal",
      period: 7,
      block: "s-block"
    },
    appearance: "silvery white metallic",
    chemical: {
      oxydation_states: "+2 (expected to have a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35885"
    },
    density: {
      stp: "9.73 g/L",
      liquid: {
        bp: "4.4 g/cm 3"
      }
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2 6p 6",
      negativity: "Pauling scale: 2.2",
      ionisation: ["1st: 1037 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 8]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "222 (most stable isotope)"
    },
    magnetism: {
      ordering: "non-magnetic"
    },
    name: "radon",
    thermodynamics: {
      molar_heat: "5 R /2 = 20.786 J/(mol·K)",
      enthalpy: "3.247 kJ/mol",
      conductivity: "3.61 × 10 − 3 W/(m·K)",
      boiling: "211.5 K ​(−61.7 °C, ​−79.1 °F)",
      critical: "377 K, 6.28 MPa",
      phase: "gas",
      melting: "202 K ​(−71 °C, ​−96 °F)",
      vaporization: "18.10 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ r eɪ d ɒ n / ​ ( RAY -don )",
      cas: "10043-92-2"
    },
    atomic: {
      covalent_radius: "150 pm",
      number: 86,
      vanderwaals: "220 pm"
    },
    history: {
      isolation: "William Ramsay and Robert Whytlaw-Gray (1910)",
      discovery: "Ernest Rutherford and Robert B. Owens (1899)"
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    periodic_table: {
      group: "group 18 (noble gases)",
      category: "noble gas",
      period: 6,
      block: "p-block"
    },
    appearance: "colorless gas",
    chemical: {
      oxydation_states: "0 , +2, +6"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35886"
    },
    density: {
      stp: "21.02 g/cm 3",
      liquid: {
        mp: "18.9 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "4700 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 5 6s 2",
      resistivity: "193 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.9",
      ionisation: ["1st: 760 kJ/mol", "2nd: 1260 kJ/mol", "3rd: 2510 kJ/mol"],
      shells: [2, 8, 18, 32, 13, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "1320–2500 MPa",
        vickers: "1350–7850 MPa",
        mohs: "7.0"
      },
      shear: {
        modulus: "178 GPa"
      },
      compression: {
        bulk_modulus: "370 GPa"
      },
      strain: {
        poisson: "0.30"
      },
      stifness: {
        young: "463 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+67.6·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "rhenium",
    thermodynamics: {
      molar_heat: "25.48 J/(mol·K)",
      enthalpy: "60.43 kJ/mol",
      conductivity: "48.0 W/(m·K)",
      boiling: "5903 K ​(5630 °C, ​10,170 °F)",
      vaporization: "704 kJ/mol",
      expansion: "6.2 µm/(m·K)",
      phase: "solid",
      melting: "3459 K ​(3186 °C, ​5767 °F)"
    },
    identity: {
      pronunciation: "/ ˈ r iː n i ə m / ​ ( REE -nee-əm )",
      cas: "7440-15-5"
    },
    atomic: {
      covalent_radius: "151±7 pm",
      weight: "186.207(1)",
      number: 75,
      radius: "empirical: 137 pm"
    },
    history: {
      discovery: "Masataka Ogawa (1908)",
      named_by: "Walter Noddack , Ida Noddack , Otto Berg (1925)",
      isolation: "Masataka Ogawa (1919)"
    },
    periodic_table: {
      group: "group 7",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "silvery-grayish",
    chemical: {
      oxydation_states: "−3, −1, 0, +1, +2, +3, +4 , +5, +6, +7 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35887"
    },
    density: {
      stp: "12.41 g/cm 3",
      liquid: {
        mp: "10.7 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "4700 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 8 5s 1",
      resistivity: "43.3 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 2.28",
      ionisation: ["2nd: 1740 kJ/mol", "3rd: 2997 kJ/mol"],
      shells: [2, 8, 18, 16, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "980–1350 MPa",
        vickers: "1100–8000 MPa",
        mohs: "6.0"
      },
      shear: {
        modulus: "150 GPa"
      },
      compression: {
        bulk_modulus: "275 GPa"
      },
      strain: {
        poisson: "0.26"
      },
      stifness: {
        young: "380 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+111.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "rhodium",
    thermodynamics: {
      molar_heat: "24.98 J/(mol·K)",
      enthalpy: "26.59 kJ/mol",
      conductivity: "150 W/(m·K)",
      boiling: "3968 K ​(3695 °C, ​6683 °F)",
      vaporization: "493 kJ/mol",
      expansion: "8.2 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2237 K ​(1964 °C, ​3567 °F)"
    },
    identity: {
      pronunciation: "/ ˈ r oʊ d i ə m / ​ ( ROH -dee-əm )",
      cas: "7440-16-6"
    },
    atomic: {
      covalent_radius: "142±7 pm",
      weight: "102.905 49 (2)",
      number: 45,
      radius: "empirical: 134 pm"
    },
    history: {
      discovery: "William Hyde Wollaston (1804)"
    },
    periodic_table: {
      group: "group 9",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "silvery white metallic",
    chemical: {
      oxydation_states: "−3, −1, +1, +2, +3 , +4, +5, +6 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35888"
    },
    density: {
      stp: "28.7 g/cm 3 (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 9 7s 2 (predicted)",
      ionisation: ["1st: 1020 kJ/mol", "2nd: 2070 kJ/mol", "3rd: 3080 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 17, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "282 (most stable isotope) (unconfirmed: 286)"
    },
    name: "roentgenium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ r ʌ n t ˈ ɡ ɛ n i ə m / ( listen ) ( runt- GEN -ee-əm ) / r ɛ n t ˈ ɡ ɛ n i ə m / ( rent- GEN -ee-əm )",
      cas: "54386-24-2"
    },
    atomic: {
      covalent_radius: "121 pm (estimated)",
      number: 111,
      radius: "empirical: 138 pm (predicted)"
    },
    history: {
      discovery: "Gesellschaft für Schwerionenforschung (1994)",
      named_by: "after Wilhelm Röntgen"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc) (predicted)"
    },
    periodic_table: {
      group: "group 11",
      category: "unknown chemical properties, but probably a transition metal",
      period: 7,
      block: "d-block"
    },
    appearance: "silvery (predicted)",
    chemical: {
      oxydation_states: "(−1), (+1), ( +3 ), (+5) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf35889"
    },
    density: {
      stp: "1.532 g/cm 3",
      liquid: {
        mp: "1.46 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "1300 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 5s 1",
      resistivity: "128 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.82",
      ionisation: ["1st: 403 kJ/mol"],
      shells: [2, 8, 18, 8, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "0.216 MPa",
        mohs: "0.3"
      },
      compression: {
        bulk_modulus: "2.5 GPa"
      },
      stifness: {
        young: "2.4 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+17.0·10 −6 cm 3 /mol (303 K)",
      ordering: "paramagnetic"
    },
    name: "rubidium",
    thermodynamics: {
      molar_heat: "31.060 J/(mol·K)",
      enthalpy: "2.19 kJ/mol",
      triple: "312.41 K, ​? kPa",
      boiling: "961 K ​(688 °C, ​1270 °F)",
      critical: "2093 K, 16 MPa (extrapolated)",
      conductivity: "58.2 W/(m·K)",
      expansion: "90 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "312.45 K ​(39.30 °C, ​102.74 °F)",
      vaporization: "69 kJ/mol"
    },
    identity: {
      pronunciation: "/ r uː ˈ b ɪ d i ə m / ​ ( roo- BID -ee-əm )",
      cas: "7440-17-7"
    },
    atomic: {
      covalent_radius: "220±9 pm",
      weight: "85.4678(3)",
      number: 37,
      vanderwaals: "303 pm",
      radius: "empirical: 248 pm"
    },
    history: {
      isolation: "George de Hevesy",
      discovery: "Robert Bunsen and Gustav Kirchhoff (1861)"
    },
    periodic_table: {
      group: "group 1 (alkali metals)",
      category: "alkali metal",
      period: 5,
      block: "s-block"
    },
    appearance: "grey white",
    chemical: {
      oxydation_states: "−1, +1 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3588a"
    },
    density: {
      stp: "12.45 g/cm 3",
      liquid: {
        mp: "10.65 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "5970 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 7 5s 1",
      resistivity: "71 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 2.2",
      ionisation: ["2nd: 1620 kJ/mol", "3rd: 2747 kJ/mol"],
      shells: [2, 8, 18, 15, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "2160 MPa",
        mohs: "6.5"
      },
      shear: {
        modulus: "173 GPa"
      },
      compression: {
        bulk_modulus: "220 GPa"
      },
      strain: {
        poisson: "0.30"
      },
      stifness: {
        young: "447 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+43.2·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "ruthenium",
    thermodynamics: {
      molar_heat: "24.06 J/(mol·K)",
      enthalpy: "38.59 kJ/mol",
      conductivity: "117 W/(m·K)",
      boiling: "4423 K ​(4150 °C, ​7502 °F)",
      vaporization: "619 kJ/mol",
      expansion: "6.4 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2607 K ​(2334 °C, ​4233 °F)"
    },
    identity: {
      pronunciation: "/ r uː ˈ θ iː n i ə m / ​ ( roo- THEE -nee-əm )",
      cas: "7440-18-8"
    },
    atomic: {
      covalent_radius: "146±7 pm",
      weight: "101.07(2)",
      number: 44,
      radius: "empirical: 134 pm"
    },
    history: {
      discovery: "Karl Ernst Claus (1844)",
      named_by: "after Ruthenia (Latin for: medieval Kyivska Rus' region)"
    },
    periodic_table: {
      group: "group 8",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "silvery white metallic",
    chemical: {
      oxydation_states: "−4, −2, +1, +2, +3 , +4 , +5, +6, +7, +8 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3588b"
    },
    density: {
      stp: "23.2 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 2 7s 2",
      ionisation: ["1st: 580 kJ/mol", "2nd: 1390 kJ/mol", "3rd: 2300 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 10, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "267 (most stable isotope)"
    },
    name: "rutherfordium",
    thermodynamics: {
      boiling: "5800 K ​(5500 °C, ​9900 °F) (predicted)",
      phase: "unknown phase (predicted)",
      melting: "2400 K ​(2100 °C, ​3800 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ ˌ r ʌ ð ər ˈ f ɔːr d i ə m / ( listen ) ​ ( RUDH -ər- FOR -dee-əm )",
      cas: "53850-36-5"
    },
    atomic: {
      covalent_radius: "157 pm (estimated)",
      number: 104,
      radius: "empirical: 150 pm (estimated)"
    },
    history: {
      discovery: "Joint Institute for Nuclear Research and Lawrence Berkeley National Laboratory (1964, 1969)",
      named_by: "after Ernest Rutherford"
    },
    periodic_table: {
      group: "group 4",
      category: "transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "(+2), ( +3 ), +4 (parenthesized: prediction )"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3588c"
    },
    density: {
      stp: "7.52 g/cm 3",
      liquid: {
        mp: "7.16 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ rhombohedral"
    },
    sound: {
      speed: "2130 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 6 6s 2",
      resistivity: "( r.t. ) (α, poly) 0.940 µΩ·m",
      negativity: "Pauling scale: 1.17",
      ionisation: ["2nd: 1070 kJ/mol", "3rd: 2260 kJ/mol"],
      shells: [2, 8, 18, 24, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "440–600 MPa",
        vickers: "410–440 MPa"
      },
      shear: {
        modulus: "α form: 19.5 GPa"
      },
      compression: {
        bulk_modulus: "α form: 37.8 GPa"
      },
      strain: {
        poisson: "α form: 0.274"
      },
      stifness: {
        young: "α form: 49.7 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+1860.0·10 −6 cm 3 /mol (291 K)",
      ordering: "paramagnetic"
    },
    name: "samarium",
    thermodynamics: {
      molar_heat: "29.54 J/(mol·K)",
      enthalpy: "8.62 kJ/mol",
      conductivity: "13.3 W/(m·K)",
      boiling: "2173 K ​(1900 °C, ​3452 °F)",
      vaporization: "192 kJ/mol",
      expansion: "( r.t. ) (α, poly) 12.7 µm/(m·K)",
      phase: "solid",
      melting: "1345 K ​(1072 °C, ​1962 °F)"
    },
    identity: {
      pronunciation: "/ s ə ˈ m ɛər i ə m / ​ ( sə- MAIR -ee-əm )",
      cas: "7440-19-9"
    },
    atomic: {
      covalent_radius: "198±8 pm",
      weight: "150.36(2)",
      number: 62,
      radius: "empirical: 180 pm"
    },
    history: {
      discovery: "Lecoq de Boisbaudran (1879)",
      named_by: "after the mineral samarskite (itself named after Vassili Samarsky-Bykhovets )"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 , +4 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3588d"
    },
    density: {
      stp: "2.985 g/cm 3",
      liquid: {
        mp: "2.80 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 1 4s 2",
      resistivity: "α, poly: 562 nΩ·m (at r.t., calculated)",
      negativity: "Pauling scale: 1.36",
      ionisation: [],
      shells: [2, 8, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "736–1200 MPa"
      },
      shear: {
        modulus: "29.1 GPa"
      },
      compression: {
        bulk_modulus: "56.6 GPa"
      },
      strain: {
        poisson: "0.279"
      },
      stifness: {
        young: "74.4 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+315.0·10 −6 cm 3 /mol (292 K)",
      ordering: "paramagnetic"
    },
    name: "scandium",
    thermodynamics: {
      molar_heat: "25.52 J/(mol·K)",
      enthalpy: "14.1 kJ/mol",
      conductivity: "15.8 W/(m·K)",
      boiling: "3109 K ​(2836 °C, ​5136 °F)",
      vaporization: "332.7 kJ/mol",
      expansion: "α, poly: 10.2 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1814 K ​(1541 °C, ​2806 °F)"
    },
    identity: {
      pronunciation: "/ ˈ s k æ n d i ə m / ​ ( SKAN -dee-əm )",
      cas: "7440-20-2"
    },
    atomic: {
      covalent_radius: "170±7 pm",
      weight: "44.955 908 (5)",
      number: 21,
      vanderwaals: "211 pm",
      radius: "empirical: 162 pm"
    },
    history: {
      prediction: "Dmitri Mendeleev (1871)",
      discovery: "Lars Fredrik Nilson (1879)",
      named_by: "after Scandinavia"
    },
    periodic_table: {
      group: "group 3",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd67644df7dcbf3588e"
    },
    density: {
      stp: "35.0 g/cm 3 (predicted)"
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc) (predicted)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 4 7s 2",
      ionisation: ["1st: 757 kJ/mol", "2nd: 1733 kJ/mol", "3rd: 2484 kJ/mol"],
      shells: [2, 8, 18, 32, 32, 12, 2]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "269 (most stable isotope)"
    },
    name: "seaborgium",
    thermodynamics: {
      phase: "unknown phase (predicted)"
    },
    identity: {
      pronunciation: "/ s iː ˈ b ɔːr ɡ i ə m / ( listen ) ​ ( see- BOR -gee-əm )",
      cas: "54038-81-2"
    },
    atomic: {
      covalent_radius: "143 pm (estimated)",
      number: 106,
      radius: "empirical: 132 pm (predicted)"
    },
    history: {
      discovery: "Lawrence Berkeley National Laboratory (1974)",
      named_by: "after Glenn T. Seaborg"
    },
    periodic_table: {
      group: "group 6",
      category: "transition metal",
      period: 7,
      block: "d-block"
    },
    chemical: {
      oxydation_states: "0, (+3), ( +4 ), (+5), +6 (parenthesized: prediction )"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3588f"
    },
    density: {
      stp: "gray: 4.81 g/cm 3 alpha: 4.39 g/cm 3 vitreous: 4.28 g/cm 3",
      liquid: {
        mp: "3.99 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal"
    },
    sound: {
      speed: "3350 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 2 4p 4",
      negativity: "Pauling scale: 2.55",
      ionisation: ["2nd: 2045 kJ/mol"],
      shells: [2, 8, 18, 6]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "736 MPa",
        mohs: "2.0"
      },
      shear: {
        modulus: "3.7 GPa"
      },
      compression: {
        bulk_modulus: "8.3 GPa"
      },
      strain: {
        poisson: "0.33"
      },
      stifness: {
        young: "10 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−25.0·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "selenium",
    thermodynamics: {
      molar_heat: "25.363 J/(mol·K)",
      enthalpy: "gray: 6.69 kJ/mol",
      conductivity: "amorphous: 0.519 W/(m·K)",
      boiling: "958 K ​(685 °C, ​1265 °F)",
      critical: "1766 K, 27.2 MPa",
      expansion: "amorphous: 37 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "494 K ​(221 °C, ​430 °F)",
      vaporization: "95.48 kJ/mol"
    },
    identity: {
      pronunciation: "/ s ɪ ˈ l iː n i ə m / ​ ( sə- LEE -nee-əm )",
      cas: "7782-49-2"
    },
    atomic: {
      covalent_radius: "120±4 pm",
      weight: "78.971(8)",
      number: 34,
      vanderwaals: "190 pm",
      radius: "empirical: 120 pm"
    },
    history: {
      discovery: "Jöns Jakob Berzelius and Johann Gottlieb Gahn (1817)",
      named_by: "after Selene , Greek goddess of the moon"
    },
    periodic_table: {
      group: "group 16 (chalcogens)",
      category: "reactive nonmetal , sometimes considered a metalloid",
      period: 4,
      block: "p-block"
    },
    appearance: "black, red, and gray (not pictured) allotropes",
    chemical: {
      oxydation_states: "−2 , −1, +1, +2 , +3, +4 , +5, +6 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35890"
    },
    density: {
      stp: "2.3290 g/cm 3",
      liquid: {
        mp: "2.57 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered diamond-cubic"
    },
    sound: {
      speed: "8433 m/s (at 20 °C)"
    },
    electronic: {
      negativity: "Pauling scale: 1.90",
      shells: [2, 8, 4],
      configuration: "[ Ne ] 3s 2 3p 2",
      resistivity: "2.3 × 10 3 Ω·m (at 20 °C)",
      ionisation: [],
      bandgap: "1.12 eV (at 300 K)"
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        mohs: "6.5"
      },
      shear: {
        modulus: "51–80 GPa"
      },
      compression: {
        bulk_modulus: "97.6 GPa"
      },
      strain: {
        poisson: "0.064–0.28"
      },
      stifness: {
        young: "130–188 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−3.9·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "silicon",
    thermodynamics: {
      molar_heat: "19.789 J/(mol·K)",
      enthalpy: "50.21 kJ/mol",
      conductivity: "149 W/(m·K)",
      boiling: "3538 K ​(3265 °C, ​5909 °F)",
      vaporization: "383 kJ/mol",
      expansion: "2.6 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1687 K ​(1414 °C, ​2577 °F)"
    },
    identity: {
      pronunciation: "/ ˈ s ɪ l ɪ k ən / ​ ( SIL -ə-kən )",
      cas: "7440-21-3"
    },
    atomic: {
      covalent_radius: "111 pm",
      weight: "[ 28.084 , 28.086 ] conventional: 28.085",
      number: 14,
      vanderwaals: "210 pm",
      radius: "empirical: 111 pm"
    },
    history: {
      prediction: "Antoine Lavoisier (1787)",
      discovery: "Jöns Jacob Berzelius (1823)",
      named_by: "Thomas Thomson (1817)"
    },
    periodic_table: {
      group: "group 14 (carbon group)",
      category: "metalloid",
      period: 3,
      block: "p-block"
    },
    appearance: "crystalline, reflective with bluish-tinged faces",
    chemical: {
      oxydation_states: "−4 , −3, −2, −1, +1, +2, +3, +4 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35891"
    },
    density: {
      stp: "10.49 g/cm 3",
      liquid: {
        mp: "9.320 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centred cubic (fcc)"
    },
    sound: {
      speed: "2680 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 1",
      resistivity: "15.87 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.93",
      ionisation: ["2nd: 2070 kJ/mol", "3rd: 3361 kJ/mol"],
      shells: [2, 8, 18, 18, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "206–250 MPa",
        vickers: "251 MPa",
        mohs: "2.5"
      },
      shear: {
        modulus: "30 GPa"
      },
      compression: {
        bulk_modulus: "100 GPa"
      },
      strain: {
        poisson: "0.37"
      },
      stifness: {
        young: "83 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−19.5·10 −6 cm 3 /mol (296 K)",
      ordering: "diamagnetic"
    },
    name: "silver",
    thermodynamics: {
      molar_heat: "25.350 J/(mol·K)",
      enthalpy: "11.28 kJ/mol",
      conductivity: "429 W/(m·K)",
      boiling: "2435 K ​(2162 °C, ​3924 °F)",
      vaporization: "254 kJ/mol",
      expansion: "18.9 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1234.93 K ​(961.78 °C, ​1763.2 °F)",
      diffusivity: "174 mm 2 /s (at 300 K)"
    },
    identity: {
      cas: "7440-22-4"
    },
    atomic: {
      covalent_radius: "145±5 pm",
      weight: "107.8682(2)",
      number: 47,
      vanderwaals: "172 pm",
      radius: "empirical: 144 pm"
    },
    history: {
      discovery: "before 5000 BC"
    },
    periodic_table: {
      group: "group 11",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "lustrous white metal",
    chemical: {
      oxydation_states: "−2, −1, +1 , +2, +3 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35892"
    },
    density: {
      stp: "0.968 g/cm 3",
      liquid: {
        mp: "0.927 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "3200 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ne ] 3s 1",
      resistivity: "47.7 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.93",
      ionisation: ["2nd: 4562 kJ/mol"],
      shells: [2, 8, 1]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      shear: {
        modulus: "3.3 GPa"
      },
      compression: {
        bulk_modulus: "6.3 GPa"
      },
      hardness: {
        brinell: "0.69 MPa",
        mohs: "0.5"
      },
      stifness: {
        young: "10 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+16.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "sodium",
    thermodynamics: {
      molar_heat: "28.230 J/(mol·K)",
      enthalpy: "2.60 kJ/mol",
      conductivity: "142 W/(m·K)",
      boiling: "1156.090 K ​(882.940 °C, ​1621.292 °F)",
      critical: "2573 K, 35 MPa (extrapolated)",
      expansion: "71 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "370.944 K ​(97.794 °C, ​208.029 °F)",
      vaporization: "97.42 kJ/mol"
    },
    identity: {
      cas: "7440-23-5"
    },
    atomic: {
      covalent_radius: "166±9 pm",
      weight: "22.989 769 28 (2)",
      number: 11,
      vanderwaals: "227 pm",
      radius: "empirical: 186 pm"
    },
    history: {
      discovery: "Humphry Davy (1807)"
    },
    periodic_table: {
      group: "group 1 (alkali metals)",
      category: "alkali metal",
      period: 3,
      block: "s-block"
    },
    appearance: "silvery white metallic",
    chemical: {
      oxydation_states: "−1, +1 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35893"
    },
    density: {
      stp: "2.64 g/cm 3",
      liquid: {
        mp: "2.375 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    electronic: {
      configuration: "[ Kr ] 5s 2",
      resistivity: "132 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 0.95",
      ionisation: ["3rd: 4138 kJ/mol"],
      shells: [2, 8, 18, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        mohs: "1.5"
      },
      shear: {
        modulus: "6.03 GPa"
      },
      strain: {
        poisson: "0.28"
      },
      stifness: {
        young: "15.7 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−92.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "strontium",
    thermodynamics: {
      molar_heat: "26.4 J/(mol·K)",
      enthalpy: "7.43 kJ/mol",
      conductivity: "35.4 W/(m·K)",
      boiling: "1650 K ​(1377 °C, ​2511 °F)",
      vaporization: "141 kJ/mol",
      expansion: "22.5 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1050 K ​(777 °C, ​1431 °F)"
    },
    identity: {
      pronunciation: "/ ˈ s t r ɒ n ʃ i ə m , - t i ə m / ​ ( STRON -shee-əm, -⁠tee-əm )",
      cas: "7440-24-6"
    },
    atomic: {
      covalent_radius: "195±10 pm",
      weight: "87.62(1)",
      number: 38,
      vanderwaals: "249 pm",
      radius: "empirical: 215 pm"
    },
    history: {
      discovery: "William Cruickshank (1787)",
      named_by: "after the mineral strontianite , itself named after Strontian , Scotland",
      isolation: "Humphry Davy (1808)"
    },
    periodic_table: {
      group: "group 2 (alkaline earth metals)",
      category: "alkaline earth metal",
      period: 5,
      block: "s-block"
    },
    appearance: "silvery white metallic; with a pale yellow tint",
    chemical: {
      oxydation_states: "+1, +2 (a strongly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35894"
    },
    density: {
      stp: "alpha: 2.07 g/cm 3 beta: 1.96 g/cm 3 gamma: 1.92 g/cm 3",
      liquid: {
        mp: "1.819 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    electronic: {
      configuration: "[ Ne ] 3s 2 3p 4",
      resistivity: "2×10 15 Ω·m (at 20 °C) (amorphous)",
      negativity: "Pauling scale: 2.58",
      ionisation: ["2nd: 2252 kJ/mol", "3rd: 3357 kJ/mol"],
      shells: [2, 8, 6]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        mohs: "2.0"
      },
      compression: {
        bulk_modulus: "7.7 GPa"
      }
    },
    magnetism: {
      susceptibiity: "(α) −15.5·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "sulfur",
    thermodynamics: {
      molar_heat: "22.75 J/(mol·K)",
      enthalpy: "mono: 1.727 kJ/mol",
      conductivity: "0.205 W/(m·K) (amorphous)",
      boiling: "717.8 K ​(444.6 °C, ​832.3 °F)",
      critical: "1314 K, 20.7 MPa",
      phase: "solid",
      melting: "388.36 K ​(115.21 °C, ​239.38 °F)",
      vaporization: "mono: 45 kJ/mol"
    },
    identity: {
      name: {
        alternative: "sulphur (British spelling)"
      },
      cas: "7704-34-9"
    },
    atomic: {
      covalent_radius: "105±3 pm",
      weight: "[ 32.059 , 32.076 ] conventional: 32.06",
      number: 16,
      vanderwaals: "180 pm"
    },
    history: {
      recognised: "Antoine Lavoisier (1777)",
      discovery: "Chinese (before 2000 BCE)"
    },
    periodic_table: {
      group: "group 16 (chalcogens)",
      category: "reactive nonmetal",
      period: 3,
      block: "p-block"
    },
    appearance: "lemon yellow sintered microcrystals",
    chemical: {
      oxydation_states: "−2 , −1, +1 , +2 , +3, +4 , +5, +6 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35895"
    },
    density: {
      stp: "16.69 g/cm 3",
      liquid: {
        mp: "15 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ tetragonal β-Ta"
    },
    sound: {
      speed: "3400 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 3 6s 2",
      resistivity: "131 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.5",
      ionisation: ["1st: 761 kJ/mol", "2nd: 1500 kJ/mol"],
      shells: [2, 8, 18, 32, 11, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "440–3430 MPa",
        vickers: "870–1200 MPa",
        mohs: "6.5"
      },
      shear: {
        modulus: "69 GPa"
      },
      compression: {
        bulk_modulus: "200 GPa"
      },
      strain: {
        poisson: "0.34"
      },
      stifness: {
        young: "186 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+154.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "tantalum",
    thermodynamics: {
      molar_heat: "25.36 J/(mol·K)",
      enthalpy: "36.57 kJ/mol",
      conductivity: "57.5 W/(m·K)",
      boiling: "5731 K ​(5458 °C, ​9856 °F)",
      vaporization: "753 kJ/mol",
      expansion: "6.3 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "3290 K ​(3017 °C, ​5463 °F)"
    },
    identity: {
      pronunciation: "/ ˈ t æ n t əl ə m / ​ ( TAN -təl-əm )",
      cas: "7440-25-7"
    },
    atomic: {
      covalent_radius: "170±8 pm",
      weight: "180.947 88 (2)",
      number: 73,
      radius: "empirical: 146 pm"
    },
    history: {
      recognised: "Heinrich Rose (1844)",
      discovery: "Anders Gustaf Ekeberg (1802)"
    },
    periodic_table: {
      group: "group 5",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "gray blue",
    chemical: {
      oxydation_states: "−3, −1, +1, +2, +3, +4, +5 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35896"
    },
    density: {
      stp: "11 g/cm 3"
    },
    sound: {
      speed: "16,200 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 5 5s 2",
      resistivity: "200 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.9",
      ionisation: ["1st: 702 kJ/mol", "2nd: 1470 kJ/mol", "3rd: 2850 kJ/mol"],
      shells: [2, 8, 18, 13, 2]
    },
    availability: {
      surface: "from decay"
    },
    mechanical: {
      mass: "97 (most stable isotope)"
    },
    magnetism: {
      susceptibiity: "+270.0·10 −6 cm 3 /mol (298 K)",
      ordering: "Paramagnetic"
    },
    name: "technetium",
    thermodynamics: {
      molar_heat: "24.27 J/(mol·K)",
      enthalpy: "33.29 kJ/mol",
      conductivity: "50.6 W/(m·K)",
      boiling: "4538 K ​(4265 °C, ​7709 °F)",
      vaporization: "585.2 kJ/mol",
      expansion: "7.1 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "2430 K ​(2157 °C, ​3915 °F)"
    },
    identity: {
      pronunciation: "/ t ɛ k ˈ n iː ʃ i əm / ​ ( tek- NEE -shee-əm )",
      cas: "7440-26-8"
    },
    atomic: {
      covalent_radius: "147±7 pm",
      number: 43,
      radius: "empirical: 136 pm"
    },
    history: {
      prediction: "Dmitri Mendeleev (1871)",
      discovery: "Emilio Segrè and Carlo Perrier (1937)"
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    periodic_table: {
      group: "group 7",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "shiny gray metal",
    chemical: {
      oxydation_states: "−3, +1, +2, +3, +4 , +5, +6, +7 (a strongly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35897"
    },
    density: {
      stp: "6.24 g/cm 3",
      liquid: {
        mp: "5.70 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal"
    },
    sound: {
      speed: "2610 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2 5p 4",
      negativity: "Pauling scale: 2.1",
      ionisation: ["2nd: 1790 kJ/mol", "3rd: 2698 kJ/mol"],
      shells: [2, 8, 18, 18, 6]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      shear: {
        modulus: "16 GPa"
      },
      compression: {
        bulk_modulus: "65 GPa"
      },
      hardness: {
        brinell: "180–270 MPa",
        mohs: "2.25"
      },
      stifness: {
        young: "43 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−39.5·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "tellurium",
    thermodynamics: {
      molar_heat: "25.73 J/(mol·K)",
      enthalpy: "17.49 kJ/mol",
      conductivity: "1.97–3.38 W/(m·K)",
      boiling: "1261 K ​(988 °C, ​1810 °F)",
      vaporization: "114.1 kJ/mol",
      expansion: "18 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "722.66 K ​(449.51 °C, ​841.12 °F)"
    },
    identity: {
      pronunciation: "/ t ɪ ˈ lj ʊər i ə m / ​ ( tə- LEWR -ee-əm )",
      cas: "13494-80-9"
    },
    atomic: {
      covalent_radius: "138±4 pm",
      weight: "127.60(3)",
      number: 52,
      vanderwaals: "206 pm",
      radius: "empirical: 140 pm"
    },
    history: {
      discovery: "Franz-Joseph Müller von Reichenstein (1782)",
      named_by: "after Roman Tellus , deity of the Earth",
      isolation: "Martin Heinrich Klaproth"
    },
    periodic_table: {
      group: "group 16 (chalcogens)",
      category: "metalloid",
      period: 5,
      block: "p-block"
    },
    appearance: "silvery lustrous gray (crystalline), brown-black powder (amorphous)",
    chemical: {
      oxydation_states: "−2 , −1, +1, +2 , +3, +4 , +5, +6 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35898"
    },
    density: {
      stp: "7.1–7.3 g/cm 3 (extrapolated)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 14 6d 10 7s 2 7p 5 (predicted)",
      ionisation: [],
      shells: [2, 8, 18, 32, 32, 18, 7]
    },
    availability: {
      surface: "synthetic"
    },
    mechanical: {
      mass: "294 (most stable isotope)"
    },
    name: "tennessine",
    thermodynamics: {
      boiling: "883 K ​(610 °C, ​1130 °F) (predicted)",
      phase: "unknown phase (predicted)",
      melting: "623–823 K ​(350–550 °C, ​662–1022 °F) (predicted)"
    },
    identity: {
      pronunciation: "/ ˈ t ɛ n ɪ s iː n / ​ ( TEN -ə-seen )",
      cas: "54101-14-3"
    },
    atomic: {
      covalent_radius: "156–157 pm (extrapolated)",
      number: 117,
      radius: "empirical: 138 pm (predicted)"
    },
    history: {
      discovery: "Joint Institute for Nuclear Research , Lawrence Livermore National Laboratory , Vanderbilt University and Oak Ridge National Laboratory (2009)",
      named_by: "after Tennessee region"
    },
    periodic_table: {
      group: "group 17",
      category: "unknown chemical properties, but probably a post-transition metal",
      period: 7,
      block: "p-block"
    },
    appearance: "semimetallic (predicted)",
    chemical: {
      oxydation_states: "(−1), ( +1 ), ( +3 ), (+5) (predicted)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf35899"
    },
    density: {
      stp: "8.23 g/cm 3",
      liquid: {
        mp: "7.65 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "2620 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 9 6s 2",
      resistivity: "α, poly: 1.150 µΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.2 (?)",
      ionisation: ["2nd: 1110 kJ/mol", "3rd: 2114 kJ/mol"],
      shells: [2, 8, 18, 27, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "675–1200 MPa",
        vickers: "450–865 MPa"
      },
      shear: {
        modulus: "α form: 22.1 GPa"
      },
      compression: {
        bulk_modulus: "α form: 38.7 GPa"
      },
      strain: {
        poisson: "α form: 0.261"
      },
      stifness: {
        young: "α form: 55.7 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+146,000·10 −6 cm 3 /mol (273 K)",
      ordering: "paramagnetic at 300 K"
    },
    name: "terbium",
    thermodynamics: {
      molar_heat: "28.91 J/(mol·K)",
      enthalpy: "10.15 kJ/mol",
      conductivity: "11.1 W/(m·K)",
      boiling: "3396 K ​(3123 °C, ​5653 °F)",
      vaporization: "391 kJ/mol",
      expansion: "at r.t. α, poly: 10.3 µm/(m·K)",
      phase: "solid",
      melting: "1629 K ​(1356 °C, ​2473 °F)"
    },
    identity: {
      pronunciation: "/ ˈ t ɜːr b i ə m / ​ ( TUR -bee-əm )",
      cas: "7440-27-9"
    },
    atomic: {
      covalent_radius: "194±5 pm",
      weight: "158.925 354 (8)",
      number: 65,
      radius: "empirical: 177 pm"
    },
    history: {
      discovery: "Carl Gustaf Mosander (1843)",
      named_by: "after Ytterby (Sweden), where it was mined"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 , +4 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3589a"
    },
    density: {
      stp: "11.85 g/cm 3",
      liquid: {
        mp: "11.22 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "818 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 10 6s 2 6p 1",
      resistivity: "0.18 µΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.62",
      ionisation: ["2nd: 1971 kJ/mol", "3rd: 2878 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 3]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "26.5–44.7 MPa",
        mohs: "1.2"
      },
      shear: {
        modulus: "2.8 GPa"
      },
      compression: {
        bulk_modulus: "43 GPa"
      },
      strain: {
        poisson: "0.45"
      },
      stifness: {
        young: "8 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−50.9·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "thallium",
    thermodynamics: {
      molar_heat: "26.32 J/(mol·K)",
      enthalpy: "4.14 kJ/mol",
      conductivity: "46.1 W/(m·K)",
      boiling: "1746 K ​(1473 °C, ​2683 °F)",
      vaporization: "165 kJ/mol",
      expansion: "29.9 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "577 K ​(304 °C, ​579 °F)"
    },
    identity: {
      pronunciation: "/ ˈ θ æ l i ə m / ​ ( THAL -ee-əm )",
      cas: "7440-28-0"
    },
    atomic: {
      covalent_radius: "145±7 pm",
      weight: "[ 204.382 , 204.385 ] conventional: 204.38",
      number: 81,
      vanderwaals: "196 pm",
      radius: "empirical: 170 pm"
    },
    history: {
      discovery: "William Crookes (1861)",
      named_by: "after Greek thallos , green shoot or twig",
      isolation: "Claude-Auguste Lamy (1862)"
    },
    periodic_table: {
      group: "group 13 (boron group)",
      category: "post-transition metal",
      period: 6,
      block: "p-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "−5, −2, −1, +1 , +2, +3 (a mildly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3589b"
    },
    density: {
      stp: "11.7 g/cm 3"
    },
    crystallography: {
      structure: "​ face-centred cubic (fcc)"
    },
    sound: {
      speed: "2490 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Rn ] 6d 2 7s 2",
      resistivity: "157 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 1.3",
      ionisation: ["1st: 587 kJ/mol", "2nd: 1110 kJ/mol", "3rd: 1930 kJ/mol"],
      shells: [2, 8, 18, 32, 18, 10, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "390–1500 MPa",
        vickers: "295–685 MPa",
        mohs: "3.0"
      },
      shear: {
        modulus: "31 GPa"
      },
      compression: {
        bulk_modulus: "54 GPa"
      },
      strain: {
        poisson: "0.27"
      },
      stifness: {
        young: "79 GPa"
      }
    },
    magnetism: {
      susceptibiity: "132.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "thorium",
    thermodynamics: {
      molar_heat: "26.230 J/(mol·K)",
      enthalpy: "13.81 kJ/mol",
      conductivity: "54.0 W/(m·K)",
      boiling: "5061 K ​(4788 °C, ​8650 °F)",
      vaporization: "514 kJ/mol",
      expansion: "11.0 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2023 K ​(1750 °C, ​3182 °F)"
    },
    identity: {
      pronunciation: "/ ˈ θ ɔːr i ə m / ​ ( THOHR -ee-əm )",
      cas: "7440-29-1"
    },
    atomic: {
      covalent_radius: "206±6 pm",
      weight: "232.0377(4)",
      number: 90,
      radius: "empirical: 179.8 pm"
    },
    history: {
      discovery: "Jöns Jakob Berzelius (1829)",
      named_by: "after Thor , the Norse god of thunder"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery, often with black tarnish",
    chemical: {
      oxydation_states: "+1, +2, +3, +4 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3589c"
    },
    density: {
      stp: "9.32 g/cm 3",
      liquid: {
        mp: "8.56 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 13 6s 2",
      resistivity: "poly: 676 nΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.25",
      ionisation: ["2nd: 1160 kJ/mol", "3rd: 2285 kJ/mol"],
      shells: [2, 8, 18, 31, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "470–900 MPa",
        vickers: "470–650 MPa"
      },
      shear: {
        modulus: "30.5 GPa"
      },
      compression: {
        bulk_modulus: "44.5 GPa"
      },
      strain: {
        poisson: "0.213"
      },
      stifness: {
        young: "74.0 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+25,500·10 −6 cm 3 /mol (291 K)",
      ordering: "paramagnetic (at 300 K)"
    },
    name: "thulium",
    thermodynamics: {
      molar_heat: "27.03 J/(mol·K)",
      enthalpy: "16.84 kJ/mol",
      conductivity: "16.9 W/(m·K)",
      boiling: "2223 K ​(1950 °C, ​3542 °F)",
      vaporization: "191 kJ/mol",
      expansion: "poly: 13.3 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1818 K ​(1545 °C, ​2813 °F)"
    },
    identity: {
      pronunciation: "/ ˈ θj uː l i ə m / ​ ( THEW -lee-əm )",
      cas: "7440-30-4"
    },
    atomic: {
      covalent_radius: "190±10 pm",
      weight: "168.934 218 (6)",
      number: 69,
      radius: "empirical: 176 pm"
    },
    history: {
      discovery: "Per Teodor Cleve (1879)",
      named_by: "after Thule , a mythical region in Scandinavia"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery gray",
    chemical: {
      oxydation_states: "+2, +3 (a basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3589d"
    },
    density: {
      stp: "white, β: 7.265 g/cm 3 gray, α: 5.769 g/cm 3",
      liquid: {
        mp: "6.99 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered diamond-cubic gray (α)"
    },
    thermodynamics: {
      molar_heat: "white, β: 27.112 J/(mol·K)",
      enthalpy: "white, β: 7.03 kJ/mol",
      conductivity: "66.8 W/(m·K)",
      boiling: "2875 K ​(2602 °C, ​4716 °F)",
      vaporization: "white, β: 296.1 kJ/mol",
      expansion: "22.0 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "505.08 K ​(231.93 °C, ​449.47 °F)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2 5p 2",
      resistivity: "115 nΩ·m (at 0 °C)",
      negativity: "Pauling scale: 1.96",
      ionisation: [],
      shells: [2, 8, 18, 18, 4]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "50–440 MPa"
      },
      shear: {
        modulus: "18 GPa"
      },
      compression: {
        bulk_modulus: "58 GPa"
      },
      strain: {
        poisson: "0.36"
      },
      stifness: {
        young: "50 GPa"
      }
    },
    magnetism: {
      susceptibiity: "(white) +3.1·10 −6 cm 3 /mol (298 K)",
      ordering: "gray: diamagnetic white (β): paramagnetic"
    },
    name: "tin",
    allotropy: "alpha, α (gray) ; beta, β (white)",
    identity: {
      cas: "7440-31-5"
    },
    atomic: {
      covalent_radius: "139±4 pm",
      weight: "118.710(7)",
      number: 50,
      vanderwaals: "217 pm",
      radius: "empirical: 140 pm"
    },
    history: {
      discovery: "around 3500 BC"
    },
    periodic_table: {
      group: "group 14 (carbon group)",
      category: "post-transition metal",
      period: 5,
      block: "p-block"
    },
    sound: {
      speed: "2730 m/s (at r.t. ) (rolled)"
    },
    appearance: "silvery-white (beta, β) or gray (alpha, α)",
    chemical: {
      oxydation_states: "−4 , −3, −2, −1, +1, +2 , +3, +4 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3589e"
    },
    density: {
      stp: "4.506 g/cm 3",
      liquid: {
        mp: "4.11 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "5090 m/s (at r.t. )"
    },
    electronic: {
      configuration: "[ Ar ] 3d 2 4s 2",
      resistivity: "420 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.54",
      ionisation: [],
      shells: [2, 8, 10, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "716–2770 MPa",
        vickers: "830–3420 MPa",
        mohs: "6.0"
      },
      shear: {
        modulus: "44 GPa"
      },
      compression: {
        bulk_modulus: "110 GPa"
      },
      strain: {
        poisson: "0.32"
      },
      stifness: {
        young: "116 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+153.0·10 −6 cm 3 /mol (293 K)",
      ordering: "paramagnetic"
    },
    name: "titanium",
    thermodynamics: {
      molar_heat: "25.060 J/(mol·K)",
      enthalpy: "14.15 kJ/mol",
      conductivity: "21.9 W/(m·K)",
      boiling: "3560 K ​(3287 °C, ​5949 °F)",
      vaporization: "425 kJ/mol",
      expansion: "8.6 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1941 K ​(1668 °C, ​3034 °F)"
    },
    identity: {
      pronunciation: "/ t ɪ ˈ t eɪ n i ə m , t aɪ -/ ​ ( tih- TAY -nee-əm, ty- )",
      cas: "7440-32-6"
    },
    atomic: {
      covalent_radius: "160±8 pm",
      weight: "47.867(1)",
      number: 22,
      radius: "empirical: 147 pm"
    },
    history: {
      isolation: "Jöns Jakob Berzelius (1825)",
      discovery: "William Gregor (1791)",
      named_by: "Martin Heinrich Klaproth (1795)"
    },
    periodic_table: {
      group: "group 4",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "silvery grey-white metallic",
    chemical: {
      oxydation_states: "−2, −1, +1, +2, +3, +4 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf3589f"
    },
    density: {
      stp: "19.3 g/cm 3",
      liquid: {
        mp: "17.6 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "4620 m/s (at r.t. ) (annealed)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 5d 4 6s 2",
      resistivity: "52.8 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 2.36",
      ionisation: ["1st: 770 kJ/mol", "2nd: 1700 kJ/mol"],
      shells: [2, 8, 18, 32, 12, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "2000–4000 MPa",
        vickers: "3430–4600 MPa",
        mohs: "7.5"
      },
      shear: {
        modulus: "161 GPa"
      },
      compression: {
        bulk_modulus: "310 GPa"
      },
      strain: {
        poisson: "0.28"
      },
      stifness: {
        young: "411 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+59.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "tungsten",
    thermodynamics: {
      molar_heat: "24.27 J/(mol·K)",
      enthalpy: "52.31 kJ/mol",
      conductivity: "173 W/(m·K)",
      boiling: "6203 K ​(5930 °C, ​10706 °F)",
      vaporization: "774 kJ/mol",
      expansion: "4.5 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "3695 K ​(3422 °C, ​6192 °F)"
    },
    identity: {
      name: {
        alternative: "wolfram, pronounced: / ˈ w ʊ l f r əm / ( WUUL -frəm )"
      },
      pronunciation: "/ ˈ t ʌ ŋ s t ən / ​ ( TUNG -stən )",
      cas: "7440-33-7"
    },
    atomic: {
      covalent_radius: "162±7 pm",
      weight: "183.84(1)",
      number: 74,
      radius: "empirical: 139 pm"
    },
    history: {
      isolation: "Juan José Elhuyar and Fausto Elhuyar (1783)",
      discovery: "Carl Wilhelm Scheele (1781)",
      named_by: "Torbern Bergman (1781)"
    },
    periodic_table: {
      group: "group 6",
      category: "transition metal",
      period: 6,
      block: "d-block"
    },
    appearance: "grayish white, lustrous",
    chemical: {
      oxydation_states: "−4, −2, −1, 0, +1, +2, +3, +4 , +5, +6 (a mildly acidic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf358a0"
    },
    density: {
      stp: "19.1 g/cm 3",
      liquid: {
        mp: "17.3 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ orthorhombic"
    },
    sound: {
      speed: "3155 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Rn ] 5f 3 6d 1 7s 2",
      resistivity: "0.280 µΩ·m (at 0 °C)",
      negativity: "Pauling scale: 1.38",
      ionisation: ["2nd: 1420 kJ/mol"],
      shells: [2, 8, 18, 32, 21, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "2350–3850 MPa",
        vickers: "1960–2500 MPa"
      },
      shear: {
        modulus: "111 GPa"
      },
      compression: {
        bulk_modulus: "100 GPa"
      },
      strain: {
        poisson: "0.23"
      },
      stifness: {
        young: "208 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "uranium",
    thermodynamics: {
      molar_heat: "27.665 J/(mol·K)",
      enthalpy: "9.14 kJ/mol",
      conductivity: "27.5 W/(m·K)",
      boiling: "4404 K ​(4131 °C, ​7468 °F)",
      vaporization: "417.1 kJ/mol",
      expansion: "13.9 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "1405.3 K ​(1132.2 °C, ​2070 °F)"
    },
    identity: {
      pronunciation: "/ j ʊəˈr eɪ n i ə m / ​ ( ewr- AY -nee-əm )",
      cas: "7440-61-1"
    },
    atomic: {
      covalent_radius: "196±7 pm",
      weight: "238.028 91 (3)",
      number: 92,
      vanderwaals: "186 pm",
      radius: "empirical: 156 pm"
    },
    history: {
      discovery: "Martin Heinrich Klaproth (1789)",
      named_by: "after planet Uranus , itself named after Greek god of the sky Uranus",
      isolation: "Eugène-Melchior Péligot (1841)"
    },
    periodic_table: {
      group: "group n/a",
      category: "actinide",
      period: 7,
      block: "f-block"
    },
    appearance: "silvery gray metallic; corrodes to a spalling black oxide coat in air",
    chemical: {
      oxydation_states: "+1, +2, +3, +4, +5, +6 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf358a1"
    },
    density: {
      stp: "6.0 g/cm 3",
      liquid: {
        mp: "5.5 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ body-centered cubic (bcc)"
    },
    sound: {
      speed: "4560 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 3 4s 2",
      resistivity: "197 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.63",
      ionisation: ["2nd: 1414 kJ/mol", "3rd: 2830 kJ/mol"],
      shells: [2, 8, 11, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "600–742 MPa",
        vickers: "628–640 MPa",
        mohs: "6.7"
      },
      shear: {
        modulus: "47 GPa"
      },
      compression: {
        bulk_modulus: "160 GPa"
      },
      strain: {
        poisson: "0.37"
      },
      stifness: {
        young: "128 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+255.0·10 −6 cm 3 /mol (298 K)",
      ordering: "paramagnetic"
    },
    name: "vanadium",
    thermodynamics: {
      molar_heat: "24.89 J/(mol·K)",
      enthalpy: "21.5 kJ/mol",
      conductivity: "30.7 W/(m·K)",
      boiling: "3680 K ​(3407 °C, ​6165 °F)",
      vaporization: "444 kJ/mol",
      expansion: "8.4 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2183 K ​(1910 °C, ​3470 °F)"
    },
    identity: {
      pronunciation: "/ v ə ˈ n eɪ d i ə m / ​ ( və- NAY -dee-əm )",
      cas: "7440-62-2"
    },
    atomic: {
      covalent_radius: "153±8 pm",
      weight: "50.9415(1)",
      number: 23,
      radius: "empirical: 134 pm"
    },
    history: {
      isolation: "Nils Gabriel Sefström (1830)",
      discovery: "Andrés Manuel del Río (1801)",
      named_by: "Nils Gabriel Sefström (1830)"
    },
    periodic_table: {
      group: "group 5",
      category: "transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "blue-silver-grey metal",
    chemical: {
      oxydation_states: "−3, −1, +1, +2, +3, +4, +5 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf358a2"
    },
    density: {
      stp: "5.894 g/L",
      liquid: {
        bp: "2.942 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "gas: 178 m·s −1 liquid: 1090 m/s"
    },
    electronic: {
      configuration: "[ Kr ] 4d 10 5s 2 5p 6",
      negativity: "Pauling scale: 2.6",
      ionisation: [],
      shells: [2, 8, 18, 18, 8]
    },
    availability: {
      surface: "primordial"
    },
    magnetism: {
      susceptibiity: "−43.9·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "xenon",
    thermodynamics: {
      molar_heat: "21.01 J/(mol·K)",
      enthalpy: "2.27 kJ/mol",
      triple: "161.405 K, ​81.77 kPa",
      boiling: "165.051 K ​(−108.099 °C, ​−162.578 °F)",
      critical: "289.733 K, 5.842 MPa",
      conductivity: "5.65×10 −3 W/(m·K)",
      phase: "gas",
      melting: "161.40 K ​(−111.75 °C, ​−169.15 °F)",
      vaporization: "12.64 kJ/mol"
    },
    identity: {
      pronunciation: "/ ˈ z ɛ n ɒ n / ( ZEN -on ) / ˈ z iː n ɒ n / ( ZEE -non )",
      cas: "7440-63-3"
    },
    atomic: {
      covalent_radius: "140±9 pm",
      weight: "131.293(6)",
      number: 54,
      vanderwaals: "216 pm"
    },
    history: {
      discovery: "William Ramsay and Morris Travers (1898)"
    },
    periodic_table: {
      group: "group 18 (noble gases)",
      category: "noble gas",
      period: 5,
      block: "p-block"
    },
    appearance: "colorless gas, exhibiting a blue glow when placed in an electric field",
    chemical: {
      oxydation_states: "0 , +1, +2, +4, +6, +8 (rarely more than 0; a weakly acidic oxide )"
    }
  }, {
    _id: {
      $oid: "5dac5dd77644df7dcbf358a3"
    },
    density: {
      stp: "6.90 g/cm 3",
      liquid: {
        mp: "6.21 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ face-centered cubic (fcc)"
    },
    sound: {
      speed: "1590 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Xe ] 4f 14 6s 2",
      resistivity: "β, poly: 0.250 µΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.1 (?)",
      ionisation: ["3rd: 2417 kJ/mol"],
      shells: [2, 8, 18, 32, 8, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "340–440 MPa",
        vickers: "205–250 MPa"
      },
      shear: {
        modulus: "β form: 9.9 GPa"
      },
      compression: {
        bulk_modulus: "β form: 30.5 GPa"
      },
      strain: {
        poisson: "β form: 0.207"
      },
      stifness: {
        young: "β form: 23.9 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+249.0·10 −6 cm 3 /mol (2928 K)",
      ordering: "paramagnetic"
    },
    name: "ytterbium",
    thermodynamics: {
      molar_heat: "26.74 J/(mol·K)",
      enthalpy: "7.66 kJ/mol",
      conductivity: "38.5 W/(m·K)",
      boiling: "1469 K ​(1196 °C, ​2185 °F)",
      vaporization: "129 kJ/mol",
      expansion: "β, poly: 26.3 µm/(m·K) ( r.t. )",
      phase: "solid",
      melting: "1097 K ​(824 °C, ​1515 °F)"
    },
    identity: {
      pronunciation: "/ ɪ ˈ t ɜːr b i ə m / ​ ( i- TUR -bee-əm )",
      cas: "7440-64-4"
    },
    atomic: {
      covalent_radius: "187±8 pm",
      weight: "173.045(10)",
      number: 70,
      radius: "empirical: 176 pm"
    },
    history: {
      discovery: "Jean Charles Galissard de Marignac (1878)",
      named_by: "after Ytterby (Sweden), where it was mined",
      isolation: "Carl Auer von Welsbach (1906)"
    },
    periodic_table: {
      group: "group n/a",
      category: "lanthanide",
      period: 6,
      block: "f-block"
    },
    appearance: "silvery white; with a pale yellow tint",
    chemical: {
      oxydation_states: "+1, +2, +3 (a basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd87644df7dcbf358a4"
    },
    density: {
      stp: "4.472 g/cm 3",
      liquid: {
        mp: "4.24 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "3300 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 1 5s 2",
      resistivity: "α, poly: 596 nΩ·m (at r.t. )",
      negativity: "Pauling scale: 1.22",
      ionisation: ["1st: 600 kJ/mol", "2nd: 1180 kJ/mol", "3rd: 1980 kJ/mol"],
      shells: [2, 8, 18, 9, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "200–589 MPa"
      },
      shear: {
        modulus: "25.6 GPa"
      },
      compression: {
        bulk_modulus: "41.2 GPa"
      },
      strain: {
        poisson: "0.243"
      },
      stifness: {
        young: "63.5 GPa"
      }
    },
    magnetism: {
      susceptibiity: "+2.15·10 −6 cm 3 /mol (2928 K)",
      ordering: "paramagnetic"
    },
    name: "yttrium",
    thermodynamics: {
      molar_heat: "26.53 J/(mol·K)",
      enthalpy: "11.42 kJ/mol",
      conductivity: "17.2 W/(m·K)",
      boiling: "3203 K ​(2930 °C, ​5306 °F)",
      vaporization: "363 kJ/mol",
      expansion: "α, poly: 10.6 µm/(m·K) (at r.t. )",
      phase: "solid",
      melting: "1799 K ​(1526 °C, ​2779 °F)"
    },
    identity: {
      pronunciation: "/ ˈ ɪ t r i ə m / ​ ( IT -ree-əm )",
      cas: "7440-65-5"
    },
    atomic: {
      covalent_radius: "190±7 pm",
      weight: "88.905 84 (1)",
      number: 39,
      radius: "empirical: 180 pm"
    },
    history: {
      discovery: "Johan Gadolin (1794)",
      named_by: "after Ytterby (Sweden) and its mineral ytterbite (gadolinite)",
      isolation: "Heinrich Rose (1843)"
    },
    periodic_table: {
      group: "group 3",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "+1, +2, +3 (a weakly basic oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd87644df7dcbf358a5"
    },
    density: {
      stp: "7.14 g/cm 3",
      liquid: {
        mp: "6.57 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "3850 m/s (at r.t. ) (rolled)"
    },
    electronic: {
      configuration: "[ Ar ] 3d 10 4s 2",
      resistivity: "59.0 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.65",
      ionisation: ["3rd: 3833 kJ/mol"],
      shells: [2, 8, 18, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "327–412 MPa",
        mohs: "2.5"
      },
      shear: {
        modulus: "43 GPa"
      },
      compression: {
        bulk_modulus: "70 GPa"
      },
      strain: {
        poisson: "0.25"
      },
      stifness: {
        young: "108 GPa"
      }
    },
    magnetism: {
      susceptibiity: "−11.4·10 −6 cm 3 /mol (298 K)",
      ordering: "diamagnetic"
    },
    name: "zinc",
    thermodynamics: {
      molar_heat: "25.470 J/(mol·K)",
      enthalpy: "7.32 kJ/mol",
      conductivity: "116 W/(m·K)",
      boiling: "1180 K ​(907 °C, ​1665 °F)",
      vaporization: "115 kJ/mol",
      expansion: "30.2 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "692.68 K ​(419.53 °C, ​787.15 °F)"
    },
    identity: {
      cas: "7440-66-6"
    },
    atomic: {
      covalent_radius: "122±4 pm",
      weight: "65.38(2)",
      number: 30,
      vanderwaals: "139 pm",
      radius: "empirical: 134 pm"
    },
    history: {
      recognised: "Rasaratna Samuccaya (800)",
      isolation: "Andreas Sigismund Marggraf (1746)",
      discovery: "Indian metallurgists (before 1000 BCE )"
    },
    periodic_table: {
      group: "group 12",
      category: "post-transition metal , alternatively considered a transition metal",
      period: 4,
      block: "d-block"
    },
    appearance: "silver-gray",
    chemical: {
      oxydation_states: "−2, 0, +1, +2 (an amphoteric oxide)"
    }
  }, {
    _id: {
      $oid: "5dac5dd87644df7dcbf358a6"
    },
    density: {
      stp: "6.52 g/cm 3",
      liquid: {
        mp: "5.8 g/cm 3"
      }
    },
    crystallography: {
      structure: "​ hexagonal close-packed (hcp)"
    },
    sound: {
      speed: "3800 m/s (at 20 °C)"
    },
    electronic: {
      configuration: "[ Kr ] 4d 2 5s 2",
      resistivity: "421 nΩ·m (at 20 °C)",
      negativity: "Pauling scale: 1.33",
      ionisation: ["2nd: 1270 kJ/mol", "3rd: 2218 kJ/mol"],
      shells: [2, 8, 18, 10, 2]
    },
    availability: {
      surface: "primordial"
    },
    mechanical: {
      hardness: {
        brinell: "638–1880 MPa",
        vickers: "820–1800 MPa",
        mohs: "5.0"
      },
      shear: {
        modulus: "33 GPa"
      },
      compression: {
        bulk_modulus: "91.1 GPa"
      },
      strain: {
        poisson: "0.34"
      },
      stifness: {
        young: "88 GPa"
      }
    },
    magnetism: {
      ordering: "paramagnetic"
    },
    name: "zirconium",
    thermodynamics: {
      molar_heat: "25.36 J/(mol·K)",
      enthalpy: "14 kJ/mol",
      conductivity: "22.6 W/(m·K)",
      boiling: "4650 K ​(4377 °C, ​7911 °F)",
      vaporization: "591 kJ/mol",
      expansion: "5.7 µm/(m·K) (at 25 °C)",
      phase: "solid",
      melting: "2128 K ​(1855 °C, ​3371 °F)"
    },
    identity: {
      pronunciation: "/ z ər ˈ k oʊ n i ə m / ​ ( zər- KOH -nee-əm )",
      cas: "7440-67-7"
    },
    atomic: {
      covalent_radius: "175±7 pm",
      weight: "91.224(2)",
      number: 40,
      radius: "empirical: 160 pm"
    },
    history: {
      discovery: "Martin Heinrich Klaproth (1789)",
      named_by: "after zircon , zargun زرگون meaning \"gold-colored\".",
      isolation: "Jöns Jakob Berzelius (1824)"
    },
    periodic_table: {
      group: "group 4",
      category: "transition metal",
      period: 5,
      block: "d-block"
    },
    appearance: "silvery white",
    chemical: {
      oxydation_states: "−2, +1, +2, +3, +4 (an amphoteric oxide)"
    }
  }];
  var app = new App({
    target: document.body,
    props: {
      elements: elements
    }
  });
  return app;
}();
},{}],"C:/Users/steph/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50660" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/steph/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","build/bundle.js"], null)
//# sourceMappingURL=/bundle.e7ceceb9.js.map