
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
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
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
        if (store != null && typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
    }
    function set_store_value(store, ret, value = ret) {
        store.set(value);
        return ret;
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
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
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
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
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
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                info.blocks[i] = null;
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
                if (!info.hasCatch) {
                    throw error;
                }
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function outro_and_destroy_block(block, lookup) {
        transition_out(block, 1, 1, () => {
            lookup.delete(block.key);
        });
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                block.p(child_ctx, dirty);
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
        const keys = new Set();
        for (let i = 0; i < list.length; i++) {
            const key = get_key(get_context(ctx, list, i));
            if (keys.has(key)) {
                throw new Error(`Cannot have duplicate keys in a keyed each`);
            }
            keys.add(key);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
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
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.26.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe
        };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = [];
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (let i = 0; i < subscribers.length; i += 1) {
                        const s = subscribers[i];
                        s[1]();
                        subscriber_queue.push(s, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.push(subscriber);
            if (subscribers.length === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                const index = subscribers.indexOf(subscriber);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
                if (subscribers.length === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    let elementsById = writable({});

        let selectedElement = writable(0);
        let hoveredElement = writable(0);


        let addedFilters = writable([]);


        const notDisplayedProperties = readable(["_id", "name", 'symbol', 'filtered']);






        const filters = { "name" : function (elementValue, filterValue) {
                            return elementValue.indexOf(filterValue) === -1;
                            },
                        "periodic_table" : {
                            "group" : function (elementValue, filterValue) {
                                return elementValue != filterValue;
                            }
                        }
        };

        let filterFunction = readable(filters);

        function getMass(element) {
              if ("mechanical" in element && "mass" in element.mechanical) {
                return parseInt(element.mechanical.mass);
              }
              return "?";
        }

    /* src\Element.svelte generated by Svelte v3.26.0 */
    const file = "src\\Element.svelte";

    function create_fragment(ctx) {
    	let button;
    	let span0;
    	let t0;
    	let t1;
    	let strong;
    	let t2;
    	let t3;
    	let span1;
    	let t4;
    	let t5;
    	let span2;
    	let t6;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			span0 = element("span");
    			t0 = text(/*protons*/ ctx[0]);
    			t1 = space();
    			strong = element("strong");
    			t2 = text(/*symbol*/ ctx[1]);
    			t3 = space();
    			span1 = element("span");
    			t4 = text(/*name*/ ctx[2]);
    			t5 = space();
    			span2 = element("span");
    			t6 = text(/*mass*/ ctx[3]);
    			attr_dev(span0, "class", "protons svelte-1o2k6jh");
    			add_location(span0, file, 23, 4, 619);
    			attr_dev(strong, "class", "svelte-1o2k6jh");
    			add_location(strong, file, 24, 4, 662);
    			attr_dev(span1, "class", "name svelte-1o2k6jh");
    			add_location(span1, file, 25, 4, 692);
    			attr_dev(span2, "class", "mass svelte-1o2k6jh");
    			add_location(span2, file, 26, 4, 729);
    			attr_dev(button, "class", "svelte-1o2k6jh");
    			toggle_class(button, "selected", /*selected*/ ctx[6]);
    			toggle_class(button, "filtered", /*$elementsById*/ ctx[7][/*id*/ ctx[4]].filtered);
    			add_location(button, file, 22, 0, 485);
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
    			/*button_binding*/ ctx[11](button);

    			if (!mounted) {
    				dispose = [
    					listen_dev(button, "click", /*onclick*/ ctx[8], false, false, false),
    					listen_dev(button, "mouseover", /*onhover*/ ctx[9], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*protons*/ 1) set_data_dev(t0, /*protons*/ ctx[0]);
    			if (dirty & /*symbol*/ 2) set_data_dev(t2, /*symbol*/ ctx[1]);
    			if (dirty & /*name*/ 4) set_data_dev(t4, /*name*/ ctx[2]);
    			if (dirty & /*mass*/ 8) set_data_dev(t6, /*mass*/ ctx[3]);

    			if (dirty & /*selected*/ 64) {
    				toggle_class(button, "selected", /*selected*/ ctx[6]);
    			}

    			if (dirty & /*$elementsById, id*/ 144) {
    				toggle_class(button, "filtered", /*$elementsById*/ ctx[7][/*id*/ ctx[4]].filtered);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			/*button_binding*/ ctx[11](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let $selectedElement;
    	let $elementsById;
    	validate_store(selectedElement, "selectedElement");
    	component_subscribe($$self, selectedElement, $$value => $$invalidate(12, $selectedElement = $$value));
    	validate_store(elementsById, "elementsById");
    	component_subscribe($$self, elementsById, $$value => $$invalidate(7, $elementsById = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Element", slots, []);
    	let { protons = "" } = $$props;
    	let { symbol = "" } = $$props;
    	let { name = "" } = $$props;
    	let { mass = "" } = $$props;
    	let { id = "unset" } = $$props;
    	let { filtered = false } = $$props;

    	function onclick(event) {
    		selectedElement.set(id);
    	}

    	function onhover(event) {
    		hoveredElement.set(id);
    	}

    	let current;
    	const writable_props = ["protons", "symbol", "name", "mass", "id", "filtered"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Element> was created with unknown prop '${key}'`);
    	});

    	function button_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			current = $$value;
    			$$invalidate(5, current);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("protons" in $$props) $$invalidate(0, protons = $$props.protons);
    		if ("symbol" in $$props) $$invalidate(1, symbol = $$props.symbol);
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("mass" in $$props) $$invalidate(3, mass = $$props.mass);
    		if ("id" in $$props) $$invalidate(4, id = $$props.id);
    		if ("filtered" in $$props) $$invalidate(10, filtered = $$props.filtered);
    	};

    	$$self.$capture_state = () => ({
    		elementsById,
    		selectedElement,
    		hoveredElement,
    		protons,
    		symbol,
    		name,
    		mass,
    		id,
    		filtered,
    		onclick,
    		onhover,
    		current,
    		selected,
    		$selectedElement,
    		$elementsById
    	});

    	$$self.$inject_state = $$props => {
    		if ("protons" in $$props) $$invalidate(0, protons = $$props.protons);
    		if ("symbol" in $$props) $$invalidate(1, symbol = $$props.symbol);
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("mass" in $$props) $$invalidate(3, mass = $$props.mass);
    		if ("id" in $$props) $$invalidate(4, id = $$props.id);
    		if ("filtered" in $$props) $$invalidate(10, filtered = $$props.filtered);
    		if ("current" in $$props) $$invalidate(5, current = $$props.current);
    		if ("selected" in $$props) $$invalidate(6, selected = $$props.selected);
    	};

    	let selected;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*id, $selectedElement*/ 4112) {
    			 $$invalidate(6, selected = id === $selectedElement);
    		}
    	};

    	return [
    		protons,
    		symbol,
    		name,
    		mass,
    		id,
    		current,
    		selected,
    		$elementsById,
    		onclick,
    		onhover,
    		filtered,
    		button_binding
    	];
    }

    class Element extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			protons: 0,
    			symbol: 1,
    			name: 2,
    			mass: 3,
    			id: 4,
    			filtered: 10
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Element",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get protons() {
    		throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set protons(value) {
    		throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get symbol() {
    		throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set symbol(value) {
    		throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get name() {
    		throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get mass() {
    		throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set mass(value) {
    		throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get filtered() {
    		throw new Error("<Element>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set filtered(value) {
    		throw new Error("<Element>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Table.svelte generated by Svelte v3.26.0 */
    const file$1 = "src\\Table.svelte";

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	child_ctx[6] = i;
    	return child_ctx;
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	child_ctx[3] = i;
    	return child_ctx;
    }

    // (14:12) {:else}
    function create_else_block(ctx) {
    	let element_1;
    	let current;

    	element_1 = new Element({
    			props: {
    				protons: /*element*/ ctx[4].atomic.number,
    				symbol: /*element*/ ctx[4].symbol || /*element*/ ctx[4].name.substring(0, 2),
    				name: /*element*/ ctx[4].name,
    				mass: getMass(/*element*/ ctx[4]),
    				id: /*element*/ ctx[4]._id["$oid"],
    				filtered: /*element*/ ctx[4].filtered
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(element_1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(element_1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const element_1_changes = {};
    			if (dirty & /*elements*/ 1) element_1_changes.protons = /*element*/ ctx[4].atomic.number;
    			if (dirty & /*elements*/ 1) element_1_changes.symbol = /*element*/ ctx[4].symbol || /*element*/ ctx[4].name.substring(0, 2);
    			if (dirty & /*elements*/ 1) element_1_changes.name = /*element*/ ctx[4].name;
    			if (dirty & /*elements*/ 1) element_1_changes.mass = getMass(/*element*/ ctx[4]);
    			if (dirty & /*elements*/ 1) element_1_changes.id = /*element*/ ctx[4]._id["$oid"];
    			if (dirty & /*elements*/ 1) element_1_changes.filtered = /*element*/ ctx[4].filtered;
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
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(14:12) {:else}",
    		ctx
    	});

    	return block;
    }

    // (12:12) {#if element === undefined}
    function create_if_block(ctx) {
    	let section;

    	const block = {
    		c: function create() {
    			section = element("section");
    			attr_dev(section, "class", "empty svelte-gh6p52");
    			add_location(section, file$1, 12, 16, 278);
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
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(12:12) {#if element === undefined}",
    		ctx
    	});

    	return block;
    }

    // (11:8) {#each row as element, i ("id" + r + i)}
    function create_each_block_1(key_1, ctx) {
    	let first;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*element*/ ctx[4] === undefined) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
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
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
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
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(11:8) {#each row as element, i (\\\"id\\\" + r + i)}",
    		ctx
    	});

    	return block;
    }

    // (10:4) {#each elements as row, r}
    function create_each_block(ctx) {
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let each_1_anchor;
    	let current;
    	let each_value_1 = /*row*/ ctx[1];
    	validate_each_argument(each_value_1);
    	const get_key = ctx => "id" + /*r*/ ctx[3] + /*i*/ ctx[6];
    	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		let child_ctx = get_each_context_1(ctx, each_value_1, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*elements, undefined, getMass*/ 1) {
    				const each_value_1 = /*row*/ ctx[1];
    				validate_each_argument(each_value_1);
    				group_outros();
    				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d(detaching);
    			}

    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(10:4) {#each elements as row, r}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div;
    	let current;
    	let each_value = /*elements*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", "svelte-gh6p52");
    			add_location(div, file$1, 8, 0, 136);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*elements, undefined, getMass*/ 1) {
    				each_value = /*elements*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Table", slots, []);
    	let { elements = [] } = $$props;
    	const writable_props = ["elements"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Table> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("elements" in $$props) $$invalidate(0, elements = $$props.elements);
    	};

    	$$self.$capture_state = () => ({ Element, getMass, elements });

    	$$self.$inject_state = $$props => {
    		if ("elements" in $$props) $$invalidate(0, elements = $$props.elements);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [elements];
    }

    class Table extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { elements: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Table",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get elements() {
    		throw new Error("<Table>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set elements(value) {
    		throw new Error("<Table>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Filter.svelte generated by Svelte v3.26.0 */
    const file$2 = "src\\Filter.svelte";

    function create_fragment$2(ctx) {
    	let div;
    	let label;
    	let t0;
    	let input;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			label = element("label");
    			t0 = text(/*name*/ ctx[1]);
    			input = element("input");
    			button = element("button");
    			button.textContent = "filter";
    			attr_dev(input, "class", "svelte-1e4cdj6");
    			add_location(input, file$2, 53, 17, 1439);
    			add_location(button, file$2, 53, 69, 1491);
    			attr_dev(label, "class", "svelte-1e4cdj6");
    			add_location(label, file$2, 53, 4, 1426);
    			add_location(div, file$2, 52, 0, 1416);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, label);
    			append_dev(label, t0);
    			append_dev(label, input);
    			set_input_value(input, /*value*/ ctx[0]);
    			append_dev(label, button);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[4]),
    					listen_dev(input, "keydown", /*keyListener*/ ctx[2], false, false, false),
    					listen_dev(button, "click", /*filterTable*/ ctx[3], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*name*/ 2) set_data_dev(t0, /*name*/ ctx[1]);

    			if (dirty & /*value*/ 1 && input.value !== /*value*/ ctx[0]) {
    				set_input_value(input, /*value*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function getProperty(element, name) {
    	let path = name.split(".");

    	if (path.length === 1 && path[0] in element) {
    		return element[path[0]];
    	} else {
    		let index = 0;
    		let target = element;

    		while (path[index] in target) {
    			target = target[path[index++]];
    		}

    		return target[path[index - 1]];
    	}
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let $filterFunction;
    	let $elementsById;
    	validate_store(filterFunction, "filterFunction");
    	component_subscribe($$self, filterFunction, $$value => $$invalidate(5, $filterFunction = $$value));
    	validate_store(elementsById, "elementsById");
    	component_subscribe($$self, elementsById, $$value => $$invalidate(6, $elementsById = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Filter", slots, []);
    	let { name } = $$props;
    	let { value } = $$props;

    	function keyListener(event) {
    		// console.log(event);
    		event.keyCode === 13 && filterTable();
    	}

    	function checkPropertyName(name) {
    		let path = name.split(".");

    		if (path.length === 1 && path[0] in $filterFunction) {
    			return true;
    		} else {
    			let index = 0;
    			let target = $filterFunction;

    			while (path[index] in target) {
    				target = target[path[index++]];
    			}

    			return index === path.length - 1;
    		}
    	}

    	function filterTable() {
    		if (!checkPropertyName(name)) {
    			alert("there's no filter available for '" + name + "'' yet");
    		} else {
    			for (let id in $elementsById) {
    				set_store_value(elementsById, $elementsById[id]["filtered"] = $filterFunction[name](getProperty($elementsById[id], name), value), $elementsById);
    			}
    		}
    	}

    	const writable_props = ["name", "value"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Filter> was created with unknown prop '${key}'`);
    	});

    	function input_input_handler() {
    		value = this.value;
    		$$invalidate(0, value);
    	}

    	$$self.$$set = $$props => {
    		if ("name" in $$props) $$invalidate(1, name = $$props.name);
    		if ("value" in $$props) $$invalidate(0, value = $$props.value);
    	};

    	$$self.$capture_state = () => ({
    		elementsById,
    		filterFunction,
    		name,
    		value,
    		keyListener,
    		checkPropertyName,
    		getProperty,
    		filterTable,
    		$filterFunction,
    		$elementsById
    	});

    	$$self.$inject_state = $$props => {
    		if ("name" in $$props) $$invalidate(1, name = $$props.name);
    		if ("value" in $$props) $$invalidate(0, value = $$props.value);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [value, name, keyListener, filterTable, input_input_handler];
    }

    class Filter extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { name: 1, value: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Filter",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*name*/ ctx[1] === undefined && !("name" in props)) {
    			console.warn("<Filter> was created without expected prop 'name'");
    		}

    		if (/*value*/ ctx[0] === undefined && !("value" in props)) {
    			console.warn("<Filter> was created without expected prop 'value'");
    		}
    	}

    	get name() {
    		throw new Error("<Filter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Filter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get value() {
    		throw new Error("<Filter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<Filter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\TableFilters.svelte generated by Svelte v3.26.0 */
    const file$3 = "src\\TableFilters.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (13:4) {#each $addedFilters as f}
    function create_each_block$1(ctx) {
    	let filter;
    	let current;

    	filter = new Filter({
    			props: {
    				name: /*f*/ ctx[1].name,
    				value: /*f*/ ctx[1].value
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(filter.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(filter, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const filter_changes = {};
    			if (dirty & /*$addedFilters*/ 1) filter_changes.name = /*f*/ ctx[1].name;
    			if (dirty & /*$addedFilters*/ 1) filter_changes.value = /*f*/ ctx[1].value;
    			filter.$set(filter_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(filter.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(filter.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(filter, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(13:4) {#each $addedFilters as f}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let aside;
    	let h2;
    	let t1;
    	let br;
    	let t2;
    	let filter;
    	let t3;
    	let current;

    	filter = new Filter({
    			props: { name: "name", value: "" },
    			$$inline: true
    		});

    	let each_value = /*$addedFilters*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			aside = element("aside");
    			h2 = element("h2");
    			h2.textContent = "Use filter(s) to highlight element(s) with specific property";
    			t1 = space();
    			br = element("br");
    			t2 = space();
    			create_component(filter.$$.fragment);
    			t3 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(h2, "class", "svelte-1c7jpof");
    			add_location(h2, file$3, 9, 0, 120);
    			add_location(br, file$3, 10, 0, 190);
    			attr_dev(aside, "class", "svelte-1c7jpof");
    			add_location(aside, file$3, 8, 0, 112);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, aside, anchor);
    			append_dev(aside, h2);
    			append_dev(aside, t1);
    			append_dev(aside, br);
    			append_dev(aside, t2);
    			mount_component(filter, aside, null);
    			append_dev(aside, t3);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(aside, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*$addedFilters*/ 1) {
    				each_value = /*$addedFilters*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(aside, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(filter.$$.fragment, local);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(filter.$$.fragment, local);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(aside);
    			destroy_component(filter);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let $addedFilters;
    	validate_store(addedFilters, "addedFilters");
    	component_subscribe($$self, addedFilters, $$value => $$invalidate(0, $addedFilters = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("TableFilters", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TableFilters> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ addedFilters, Filter, $addedFilters });
    	return [$addedFilters];
    }

    class TableFilters extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TableFilters",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src\PropList.svelte generated by Svelte v3.26.0 */

    const { Object: Object_1, console: console_1 } = globals;
    const file$4 = "src\\PropList.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	return child_ctx;
    }

    // (18:0) {#if Object.keys(list).length }
    function create_if_block$1(ctx) {
    	let ul;
    	let current;
    	let each_value = Object.keys(/*list*/ ctx[0]).sort();
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(ul, "class", "svelte-1rrahve");
    			add_location(ul, file$4, 18, 4, 549);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, ul, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*list, Object, parentProp, filterOnClick, spanClicked, toggleSpan*/ 31) {
    				each_value = Object.keys(/*list*/ ctx[0]).sort();
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(ul, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(ul);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(18:0) {#if Object.keys(list).length }",
    		ctx
    	});

    	return block;
    }

    // (25:12) {:else}
    function create_else_block$1(ctx) {
    	let span;
    	let t0_value = /*list*/ ctx[0][/*prop*/ ctx[7]] + "";
    	let t0;
    	let t1;
    	let if_block_anchor;
    	let if_block = /*prop*/ ctx[7] !== "appearance" && create_if_block_2(ctx);

    	const block = {
    		c: function create() {
    			span = element("span");
    			t0 = text(t0_value);
    			t1 = space();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(span, "class", "svelte-1rrahve");
    			toggle_class(span, "toggled", /*spanClicked*/ ctx[2]);
    			add_location(span, file$4, 25, 16, 845);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t0);
    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*list*/ 1 && t0_value !== (t0_value = /*list*/ ctx[0][/*prop*/ ctx[7]] + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*spanClicked*/ 4) {
    				toggle_class(span, "toggled", /*spanClicked*/ ctx[2]);
    			}

    			if (/*prop*/ ctx[7] !== "appearance") {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_2(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (detaching) detach_dev(t1);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(25:12) {:else}",
    		ctx
    	});

    	return block;
    }

    // (23:12) {#if typeof list[prop] === 'object'}
    function create_if_block_1(ctx) {
    	let proplist;
    	let current;

    	proplist = new PropList({
    			props: {
    				list: /*list*/ ctx[0][/*prop*/ ctx[7]],
    				parentProp: `${/*parentProp*/ ctx[1]}.${/*prop*/ ctx[7]}`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(proplist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(proplist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const proplist_changes = {};
    			if (dirty & /*list*/ 1) proplist_changes.list = /*list*/ ctx[0][/*prop*/ ctx[7]];
    			if (dirty & /*parentProp, list*/ 3) proplist_changes.parentProp = `${/*parentProp*/ ctx[1]}.${/*prop*/ ctx[7]}`;
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
    			destroy_component(proplist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(23:12) {#if typeof list[prop] === 'object'}",
    		ctx
    	});

    	return block;
    }

    // (27:16) {#if prop !== "appearance"}
    function create_if_block_2(ctx) {
    	let button;
    	let t;
    	let button_title_value;
    	let mounted;
    	let dispose;

    	function click_handler(...args) {
    		return /*click_handler*/ ctx[5](/*prop*/ ctx[7], ...args);
    	}

    	const block = {
    		c: function create() {
    			button = element("button");
    			t = text("");
    			attr_dev(button, "title", button_title_value = "filter by '" + /*prop*/ ctx[7] + "'");
    			attr_dev(button, "class", "filter svelte-1rrahve");
    			add_location(button, file$4, 27, 20, 963);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, t);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", click_handler, false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty & /*list*/ 1 && button_title_value !== (button_title_value = "filter by '" + /*prop*/ ctx[7] + "'")) {
    				attr_dev(button, "title", button_title_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(27:16) {#if prop !== \\\"appearance\\\"}",
    		ctx
    	});

    	return block;
    }

    // (20:8) {#each Object.keys(list).sort() as prop}
    function create_each_block$2(ctx) {
    	let li;
    	let strong;
    	let t0_value = /*prop*/ ctx[7] + "";
    	let t0;
    	let t1;
    	let current_block_type_index;
    	let if_block;
    	let t2;
    	let current;
    	let mounted;
    	let dispose;
    	const if_block_creators = [create_if_block_1, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (typeof /*list*/ ctx[0][/*prop*/ ctx[7]] === "object") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			li = element("li");
    			strong = element("strong");
    			t0 = text(t0_value);
    			t1 = space();
    			if_block.c();
    			t2 = space();
    			attr_dev(strong, "class", "svelte-1rrahve");
    			add_location(strong, file$4, 21, 12, 628);
    			attr_dev(li, "class", "svelte-1rrahve");
    			add_location(li, file$4, 20, 8, 611);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, strong);
    			append_dev(strong, t0);
    			append_dev(li, t1);
    			if_blocks[current_block_type_index].m(li, null);
    			append_dev(li, t2);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(strong, "click", /*toggleSpan*/ ctx[4], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*list*/ 1) && t0_value !== (t0_value = /*prop*/ ctx[7] + "")) set_data_dev(t0, t0_value);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(li, t2);
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
    			if (detaching) detach_dev(li);
    			if_blocks[current_block_type_index].d();
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(20:8) {#each Object.keys(list).sort() as prop}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let show_if = Object.keys(/*list*/ ctx[0]).length;
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$1(ctx);

    	const block = {
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
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*list*/ 1) show_if = Object.keys(/*list*/ ctx[0]).length;

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty & /*list*/ 1) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
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
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let $addedFilters;
    	validate_store(addedFilters, "addedFilters");
    	component_subscribe($$self, addedFilters, $$value => $$invalidate(6, $addedFilters = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PropList", slots, []);
    	let { list = {} } = $$props;
    	let { parentProp = "" } = $$props;

    	function filterOnClick(propertyName, propValue) {
    		let fullnameProp = `${parentProp}.${propertyName}`.replace(/^\./gm, "");

    		// alert(fullnameProp)
    		set_store_value(addedFilters, $addedFilters[$addedFilters.length] = { "name": fullnameProp, "value": propValue }, $addedFilters);
    	}

    	let spanClicked = false;

    	function toggleSpan() {
    		console.log("toggle");
    		$$invalidate(2, spanClicked = !spanClicked);
    	}

    	const writable_props = ["list", "parentProp"];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<PropList> was created with unknown prop '${key}'`);
    	});

    	const click_handler = prop => filterOnClick(prop, list[prop]);

    	$$self.$$set = $$props => {
    		if ("list" in $$props) $$invalidate(0, list = $$props.list);
    		if ("parentProp" in $$props) $$invalidate(1, parentProp = $$props.parentProp);
    	};

    	$$self.$capture_state = () => ({
    		addedFilters,
    		list,
    		parentProp,
    		filterOnClick,
    		spanClicked,
    		toggleSpan,
    		$addedFilters
    	});

    	$$self.$inject_state = $$props => {
    		if ("list" in $$props) $$invalidate(0, list = $$props.list);
    		if ("parentProp" in $$props) $$invalidate(1, parentProp = $$props.parentProp);
    		if ("spanClicked" in $$props) $$invalidate(2, spanClicked = $$props.spanClicked);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [list, parentProp, spanClicked, filterOnClick, toggleSpan, click_handler];
    }

    class PropList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { list: 0, parentProp: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PropList",
    			options,
    			id: create_fragment$4.name
    		});
    	}

    	get list() {
    		throw new Error("<PropList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set list(value) {
    		throw new Error("<PropList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get parentProp() {
    		throw new Error("<PropList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set parentProp(value) {
    		throw new Error("<PropList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\ElementInfo.svelte generated by Svelte v3.26.0 */

    const { Object: Object_1$1 } = globals;
    const file$5 = "src\\ElementInfo.svelte";

    // (23:4) {:else}
    function create_else_block$2(ctx) {
    	let article;
    	let span0;
    	let t0_value = /*element*/ ctx[0].atomic.number + "";
    	let t0;
    	let t1;
    	let strong;
    	let t2_value = (/*element*/ ctx[0].symbol || /*element*/ ctx[0].name.substring(0, 2)) + "";
    	let t2;
    	let t3;
    	let span1;
    	let t4_value = /*element*/ ctx[0].name + "";
    	let t4;
    	let t5;
    	let span2;
    	let t6_value = getMass(/*element*/ ctx[0]) + "";
    	let t6;
    	let t7;
    	let section;
    	let proplist;
    	let current;

    	proplist = new PropList({
    			props: {
    				list: /*elementFiltered*/ ctx[2](/*element*/ ctx[0])
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			article = element("article");
    			span0 = element("span");
    			t0 = text(t0_value);
    			t1 = space();
    			strong = element("strong");
    			t2 = text(t2_value);
    			t3 = space();
    			span1 = element("span");
    			t4 = text(t4_value);
    			t5 = space();
    			span2 = element("span");
    			t6 = text(t6_value);
    			t7 = space();
    			section = element("section");
    			create_component(proplist.$$.fragment);
    			attr_dev(span0, "class", "protons svelte-dbv2bh");
    			add_location(span0, file$5, 24, 12, 587);
    			attr_dev(strong, "class", "svelte-dbv2bh");
    			add_location(strong, file$5, 25, 12, 652);
    			attr_dev(span1, "class", "name svelte-dbv2bh");
    			add_location(span1, file$5, 26, 12, 729);
    			attr_dev(span2, "class", "mass svelte-dbv2bh");
    			add_location(span2, file$5, 27, 12, 782);
    			attr_dev(article, "class", "svelte-dbv2bh");
    			add_location(article, file$5, 23, 8, 565);
    			attr_dev(section, "class", "svelte-dbv2bh");
    			add_location(section, file$5, 29, 8, 854);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			append_dev(article, span0);
    			append_dev(span0, t0);
    			append_dev(article, t1);
    			append_dev(article, strong);
    			append_dev(strong, t2);
    			append_dev(article, t3);
    			append_dev(article, span1);
    			append_dev(span1, t4);
    			append_dev(article, t5);
    			append_dev(article, span2);
    			append_dev(span2, t6);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, section, anchor);
    			mount_component(proplist, section, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*element*/ 1) && t0_value !== (t0_value = /*element*/ ctx[0].atomic.number + "")) set_data_dev(t0, t0_value);
    			if ((!current || dirty & /*element*/ 1) && t2_value !== (t2_value = (/*element*/ ctx[0].symbol || /*element*/ ctx[0].name.substring(0, 2)) + "")) set_data_dev(t2, t2_value);
    			if ((!current || dirty & /*element*/ 1) && t4_value !== (t4_value = /*element*/ ctx[0].name + "")) set_data_dev(t4, t4_value);
    			if ((!current || dirty & /*element*/ 1) && t6_value !== (t6_value = getMass(/*element*/ ctx[0]) + "")) set_data_dev(t6, t6_value);
    			const proplist_changes = {};
    			if (dirty & /*element*/ 1) proplist_changes.list = /*elementFiltered*/ ctx[2](/*element*/ ctx[0]);
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
    			if (detaching) detach_dev(article);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(section);
    			destroy_component(proplist);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(23:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (21:4) {#if !Object.keys(element).length}
    function create_if_block$2(ctx) {
    	let h2;
    	let t;

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			t = text(/*placeholder*/ ctx[1]);
    			attr_dev(h2, "class", "svelte-dbv2bh");
    			add_location(h2, file$5, 21, 8, 522);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    			append_dev(h2, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*placeholder*/ 2) set_data_dev(t, /*placeholder*/ ctx[1]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(21:4) {#if !Object.keys(element).length}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let div;
    	let show_if;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	const if_block_creators = [create_if_block$2, create_else_block$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*element*/ 1) show_if = !!!Object.keys(/*element*/ ctx[0]).length;
    		if (show_if) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if_block.c();
    			attr_dev(div, "class", "svelte-dbv2bh");
    			toggle_class(div, "empty", !Object.keys(/*element*/ ctx[0]).length);
    			add_location(div, file$5, 18, 0, 410);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if_blocks[current_block_type_index].m(div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(div, null);
    			}

    			if (dirty & /*Object, element*/ 1) {
    				toggle_class(div, "empty", !Object.keys(/*element*/ ctx[0]).length);
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
    			if (detaching) detach_dev(div);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let $notDisplayedProperties;
    	validate_store(notDisplayedProperties, "notDisplayedProperties");
    	component_subscribe($$self, notDisplayedProperties, $$value => $$invalidate(3, $notDisplayedProperties = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ElementInfo", slots, []);
    	let { element = {} } = $$props;
    	let { placeholder = "" } = $$props;

    	function elementFiltered(element) {
    		let filtered = Object.assign({}, element);

    		$notDisplayedProperties.forEach(v => {
    			delete filtered[v];
    		});

    		return filtered;
    	}

    	const writable_props = ["element", "placeholder"];

    	Object_1$1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ElementInfo> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("element" in $$props) $$invalidate(0, element = $$props.element);
    		if ("placeholder" in $$props) $$invalidate(1, placeholder = $$props.placeholder);
    	};

    	$$self.$capture_state = () => ({
    		PropList,
    		getMass,
    		notDisplayedProperties,
    		element,
    		placeholder,
    		elementFiltered,
    		$notDisplayedProperties
    	});

    	$$self.$inject_state = $$props => {
    		if ("element" in $$props) $$invalidate(0, element = $$props.element);
    		if ("placeholder" in $$props) $$invalidate(1, placeholder = $$props.placeholder);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [element, placeholder, elementFiltered];
    }

    class ElementInfo extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { element: 0, placeholder: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ElementInfo",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get element() {
    		throw new Error("<ElementInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set element(value) {
    		throw new Error("<ElementInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get placeholder() {
    		throw new Error("<ElementInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set placeholder(value) {
    		throw new Error("<ElementInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\App.svelte generated by Svelte v3.26.0 */

    const { console: console_1$1 } = globals;
    const file$6 = "src\\App.svelte";

    // (67:4) {:catch error}
    function create_catch_block_1(ctx) {
    	let p;
    	let t0;
    	let t1_value = /*error*/ ctx[13].message + "";
    	let t1;

    	const block = {
    		c: function create() {
    			p = element("p");
    			t0 = text("We had a boohoo :    ");
    			t1 = text(t1_value);
    			add_location(p, file$6, 67, 8, 2267);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t0);
    			append_dev(p, t1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block_1.name,
    		type: "catch",
    		source: "(67:4) {:catch error}",
    		ctx
    	});

    	return block;
    }

    // (61:4) {:then response}
    function create_then_block(ctx) {
    	let await_block_anchor;
    	let promise;
    	let current;

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: false,
    		pending: create_pending_block_1,
    		then: create_then_block_1,
    		catch: create_catch_block,
    		value: 12,
    		blocks: [,,,]
    	};

    	handle_promise(promise = /*response*/ ctx[11].json(), info);

    	const block = {
    		c: function create() {
    			await_block_anchor = empty();
    			info.block.c();
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, await_block_anchor, anchor);
    			info.block.m(target, info.anchor = anchor);
    			info.mount = () => await_block_anchor.parentNode;
    			info.anchor = await_block_anchor;
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			{
    				const child_ctx = ctx.slice();
    				child_ctx[12] = info.resolved;
    				info.block.p(child_ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(info.block);
    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < 3; i += 1) {
    				const block = info.blocks[i];
    				transition_out(block);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(await_block_anchor);
    			info.block.d(detaching);
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(61:4) {:then response}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <script>     import { writable, readable }
    function create_catch_block(ctx) {
    	const block = {
    		c: noop,
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(1:0) <script>     import { writable, readable }",
    		ctx
    	});

    	return block;
    }

    // (64:8) {:then json}
    function create_then_block_1(ctx) {
    	let table;
    	let current;

    	table = new Table({
    			props: {
    				elements: /*readElements*/ ctx[4](/*json*/ ctx[12])
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(table.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(table, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(table.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(table.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(table, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block_1.name,
    		type: "then",
    		source: "(64:8) {:then json}",
    		ctx
    	});

    	return block;
    }

    // (62:32)              <p>...processing...</p>         {:then json}
    function create_pending_block_1(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "...processing...";
    			add_location(p, file$6, 62, 12, 2127);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block_1.name,
    		type: "pending",
    		source: "(62:32)              <p>...processing...</p>         {:then json}",
    		ctx
    	});

    	return block;
    }

    // (59:36)          <p>...downloading...</p>     {:then response}
    function create_pending_block(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "...downloading...";
    			add_location(p, file$6, 59, 8, 2036);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(59:36)          <p>...downloading...</p>     {:then response}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let main;
    	let header;
    	let h1;
    	let t0;
    	let sub;
    	let t2;
    	let button;
    	let span;
    	let b;
    	let t4;
    	let promise;
    	let t5;
    	let tablefilters;
    	let t6;
    	let section;
    	let elementinfo0;
    	let t7;
    	let elementinfo1;
    	let t8;
    	let footer;
    	let t9;
    	let a0;
    	let t11;
    	let a1;
    	let current;
    	let mounted;
    	let dispose;

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: true,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block_1,
    		value: 11,
    		error: 13,
    		blocks: [,,,]
    	};

    	handle_promise(promise = fetch("/elements.json"), info);
    	tablefilters = new TableFilters({ $$inline: true });

    	elementinfo0 = new ElementInfo({
    			props: {
    				element: /*$elementsById*/ ctx[0][/*$hoveredElement*/ ctx[1]],
    				placeholder: "the infos of the hovered element"
    			},
    			$$inline: true
    		});

    	elementinfo1 = new ElementInfo({
    			props: {
    				element: /*$elementsById*/ ctx[0][/*$selectedElement*/ ctx[2]] || {},
    				placeholder: "click an element to set as reference for comparison"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			main = element("main");
    			header = element("header");
    			h1 = element("h1");
    			t0 = text("Periodic Table of Elements ");
    			sub = element("sub");
    			sub.textContent = "(WIP)";
    			t2 = space();
    			button = element("button");
    			span = element("span");
    			b = element("b");
    			b.textContent = "o";
    			t4 = space();
    			info.block.c();
    			t5 = space();
    			create_component(tablefilters.$$.fragment);
    			t6 = space();
    			section = element("section");
    			create_component(elementinfo0.$$.fragment);
    			t7 = space();
    			create_component(elementinfo1.$$.fragment);
    			t8 = space();
    			footer = element("footer");
    			t9 = text("Made by ");
    			a0 = element("a");
    			a0.textContent = "Dallgoot";
    			t11 = text(" - Powered by ");
    			a1 = element("a");
    			a1.textContent = "Svelte";
    			add_location(sub, file$6, 55, 39, 1885);
    			attr_dev(h1, "class", "svelte-1plwuml");
    			add_location(h1, file$6, 55, 8, 1854);
    			attr_dev(b, "class", "svelte-1plwuml");
    			add_location(b, file$6, 56, 45, 1952);
    			attr_dev(span, "class", "svelte-1plwuml");
    			add_location(span, file$6, 56, 39, 1946);
    			attr_dev(button, "class", "svelte-1plwuml");
    			add_location(button, file$6, 56, 8, 1915);
    			attr_dev(header, "class", "svelte-1plwuml");
    			add_location(header, file$6, 54, 4, 1837);
    			attr_dev(main, "class", "svelte-1plwuml");
    			add_location(main, file$6, 53, 0, 1826);
    			attr_dev(section, "class", "svelte-1plwuml");
    			add_location(section, file$6, 71, 0, 2349);
    			attr_dev(a0, "href", "https://github.com/dallgoot");
    			attr_dev(a0, "target", "_blank");
    			attr_dev(a0, "class", "svelte-1plwuml");
    			add_location(a0, file$6, 75, 16, 2627);
    			attr_dev(a1, "href", "https://svelte.dev/");
    			attr_dev(a1, "target", "_blank");
    			attr_dev(a1, "class", "svelte-1plwuml");
    			add_location(a1, file$6, 75, 96, 2707);
    			attr_dev(footer, "class", "svelte-1plwuml");
    			add_location(footer, file$6, 75, 0, 2611);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, header);
    			append_dev(header, h1);
    			append_dev(h1, t0);
    			append_dev(h1, sub);
    			append_dev(header, t2);
    			append_dev(header, button);
    			append_dev(button, span);
    			append_dev(span, b);
    			append_dev(main, t4);
    			info.block.m(main, info.anchor = null);
    			info.mount = () => main;
    			info.anchor = null;
    			insert_dev(target, t5, anchor);
    			mount_component(tablefilters, target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, section, anchor);
    			mount_component(elementinfo0, section, null);
    			append_dev(section, t7);
    			mount_component(elementinfo1, section, null);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, footer, anchor);
    			append_dev(footer, t9);
    			append_dev(footer, a0);
    			append_dev(footer, t11);
    			append_dev(footer, a1);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*toggleTheme*/ ctx[3], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;

    			{
    				const child_ctx = ctx.slice();
    				child_ctx[11] = child_ctx[13] = info.resolved;
    				info.block.p(child_ctx, dirty);
    			}

    			const elementinfo0_changes = {};
    			if (dirty & /*$elementsById, $hoveredElement*/ 3) elementinfo0_changes.element = /*$elementsById*/ ctx[0][/*$hoveredElement*/ ctx[1]];
    			elementinfo0.$set(elementinfo0_changes);
    			const elementinfo1_changes = {};
    			if (dirty & /*$elementsById, $selectedElement*/ 5) elementinfo1_changes.element = /*$elementsById*/ ctx[0][/*$selectedElement*/ ctx[2]] || {};
    			elementinfo1.$set(elementinfo1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(info.block);
    			transition_in(tablefilters.$$.fragment, local);
    			transition_in(elementinfo0.$$.fragment, local);
    			transition_in(elementinfo1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < 3; i += 1) {
    				const block = info.blocks[i];
    				transition_out(block);
    			}

    			transition_out(tablefilters.$$.fragment, local);
    			transition_out(elementinfo0.$$.fragment, local);
    			transition_out(elementinfo1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			info.block.d();
    			info.token = null;
    			info = null;
    			if (detaching) detach_dev(t5);
    			destroy_component(tablefilters, detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(section);
    			destroy_component(elementinfo0);
    			destroy_component(elementinfo1);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(footer);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let $elementsById;
    	let $hoveredElement;
    	let $selectedElement;
    	validate_store(elementsById, "elementsById");
    	component_subscribe($$self, elementsById, $$value => $$invalidate(0, $elementsById = $$value));
    	validate_store(hoveredElement, "hoveredElement");
    	component_subscribe($$self, hoveredElement, $$value => $$invalidate(1, $hoveredElement = $$value));
    	validate_store(selectedElement, "selectedElement");
    	component_subscribe($$self, selectedElement, $$value => $$invalidate(2, $selectedElement = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	let darkTheme = false;
    	let tmpTable = [];
    	let tmpTableById = [];
    	const lanthanides = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
    	const actinides = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];

    	function toggleTheme() {
    		$$invalidate(5, darkTheme = !Boolean(darkTheme));
    	}

    	// Grid 18 columns * 7 rows   +  lanthanides/actinides : 15 * 2  (1 row of separation)
    	for (var i = 0; i <= 11; i++) {
    		tmpTable[i] = Array(18);
    	}

    	function readElements(json) {
    		for (let el of json) {
    			tmpTableById[el._id["$oid"]] = el;

    			if ("periodic_table" in el) {
    				let col = el.periodic_table.group;
    				let row = el.periodic_table.period;

    				if (el.atomic.number >= 58 && el.atomic.number <= 71) {
    					row = 9;
    					col = lanthanides.indexOf(el.atomic.number) + 4;
    				}

    				if (el.atomic.number >= 90 && el.atomic.number <= 103) {
    					row = 10;
    					col = actinides.indexOf(el.atomic.number) + 4;
    				}

    				el.filtered = false;
    				tmpTable[row - 1][col - 1] = el;
    			} else {
    				console.log(el.name + "has no periodic_table property !!!"); // console.log(el.name, el.periodic_table.period,"=", col, el.periodic_table.group);
    			}
    		}

    		return tmpTable;
    	}

    	set_store_value(elementsById, $elementsById = tmpTableById, $elementsById);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		writable,
    		readable,
    		elementsById,
    		hoveredElement,
    		selectedElement,
    		Table,
    		TableFilters,
    		ElementInfo,
    		darkTheme,
    		tmpTable,
    		tmpTableById,
    		lanthanides,
    		actinides,
    		toggleTheme,
    		i,
    		readElements,
    		$elementsById,
    		$hoveredElement,
    		$selectedElement
    	});

    	$$self.$inject_state = $$props => {
    		if ("darkTheme" in $$props) $$invalidate(5, darkTheme = $$props.darkTheme);
    		if ("tmpTable" in $$props) tmpTable = $$props.tmpTable;
    		if ("tmpTableById" in $$props) tmpTableById = $$props.tmpTableById;
    		if ("i" in $$props) i = $$props.i;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*darkTheme*/ 32) {
    			 document.body.classList.toggle("darkTheme", darkTheme);
    		}
    	};

    	return [$elementsById, $hoveredElement, $selectedElement, toggleTheme, readElements];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    	}
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
