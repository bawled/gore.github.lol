(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3], {
        sK8x: function(t, e, r) {
            "use strict";
            (function(t, n) {
                r.d(e, "a", (function() {
                    return fn
                }));
                var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};

                function i(t, e) {
                    return t(e = {
                        exports: {}
                    }, e.exports), e.exports
                }
                var s = i((function(t) {
                        var e, r;
                        e = o, r = function() {
                            function t(t) {
                                var e = [];
                                if (0 === t.length) return "";
                                if ("string" != typeof t[0]) throw new TypeError("Url must be a string. Received " + t[0]);
                                if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
                                    var r = t.shift();
                                    t[0] = r + t[0]
                                }
                                t[0].match(/^file:\/\/\//) ? t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://");
                                for (var n = 0; n < t.length; n++) {
                                    var o = t[n];
                                    if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
                                    "" !== o && (n > 0 && (o = o.replace(/^[\/]+/, "")), o = n < t.length - 1 ? o.replace(/[\/]+$/, "") : o.replace(/[\/]+$/, "/"), e.push(o))
                                }
                                var i = e.join("/"),
                                    s = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                                return s.shift() + (s.length > 0 ? "?" : "") + s.join("&")
                            }
                            return function() {
                                return t("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
                            }
                        }, t.exports ? t.exports = r() : e.urljoin = r()
                    })),
                    a = o.Symbol,
                    u = "Function.prototype.bind called on incompatible ",
                    p = Array.prototype.slice,
                    c = Object.prototype.toString,
                    l = Function.prototype.bind || function(t) {
                        var e = this;
                        if ("function" != typeof e || "[object Function]" !== c.call(e)) throw new TypeError(u + e);
                        for (var r, n = p.call(arguments, 1), o = function() {
                                if (this instanceof r) {
                                    var o = e.apply(this, n.concat(p.call(arguments)));
                                    return Object(o) === o ? o : this
                                }
                                return e.apply(t, n.concat(p.call(arguments)))
                            }, i = Math.max(0, e.length - n.length), s = [], a = 0; a < i; a++) s.push("$" + a);
                        if (r = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), e.prototype) {
                            var l = function() {};
                            l.prototype = e.prototype, r.prototype = new l, l.prototype = null
                        }
                        return r
                    },
                    h = l.call(Function.call, Object.prototype.hasOwnProperty),
                    f = SyntaxError,
                    d = Function,
                    y = TypeError,
                    m = function(t) {
                        try {
                            return d('"use strict"; return (' + t + ").constructor;")()
                        } catch (mr) {}
                    },
                    g = Object.getOwnPropertyDescriptor;
                if (g) try {
                    g({}, "")
                } catch (mr) {
                    g = null
                }
                var v = function() {
                        throw new y
                    },
                    b = g ? function() {
                        try {
                            return v
                        } catch (t) {
                            try {
                                return g(arguments, "callee").get
                            } catch (e) {
                                return v
                            }
                        }
                    }() : v,
                    w = "function" == typeof a && "function" == typeof Symbol && "symbol" == typeof a("foo") && "symbol" == typeof Symbol("bar") && function() {
                        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                        if ("symbol" == typeof Symbol.iterator) return !0;
                        var t = {},
                            e = Symbol("test"),
                            r = Object(e);
                        if ("string" == typeof e) return !1;
                        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                        for (e in t[e] = 42, t) return !1;
                        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                        var n = Object.getOwnPropertySymbols(t);
                        if (1 !== n.length || n[0] !== e) return !1;
                        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                        if ("function" == typeof Object.getOwnPropertyDescriptor) {
                            var o = Object.getOwnPropertyDescriptor(t, e);
                            if (42 !== o.value || !0 !== o.enumerable) return !1
                        }
                        return !0
                    }(),
                    _ = Object.getPrototypeOf || function(t) {
                        return t.__proto__
                    },
                    O = {},
                    T = "undefined" == typeof Uint8Array ? void 0 : _(Uint8Array),
                    k = {
                        "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
                        "%ArrayIteratorPrototype%": w ? _([][Symbol.iterator]()) : void 0,
                        "%AsyncFromSyncIteratorPrototype%": void 0,
                        "%AsyncFunction%": O,
                        "%AsyncGenerator%": O,
                        "%AsyncGeneratorFunction%": O,
                        "%AsyncIteratorPrototype%": O,
                        "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
                        "%Boolean%": Boolean,
                        "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": Error,
                        "%eval%": eval,
                        "%EvalError%": EvalError,
                        "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
                        "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
                        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
                        "%Function%": d,
                        "%GeneratorFunction%": O,
                        "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
                        "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
                        "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%": w ? _(_([][Symbol.iterator]())) : void 0,
                        "%JSON%": "object" == typeof JSON ? JSON : void 0,
                        "%Map%": "undefined" == typeof Map ? void 0 : Map,
                        "%MapIteratorPrototype%": "undefined" != typeof Map && w ? _((new Map)[Symbol.iterator]()) : void 0,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
                        "%RangeError%": RangeError,
                        "%ReferenceError%": ReferenceError,
                        "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? void 0 : Set,
                        "%SetIteratorPrototype%": "undefined" != typeof Set && w ? _((new Set)[Symbol.iterator]()) : void 0,
                        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%": w ? _("" [Symbol.iterator]()) : void 0,
                        "%Symbol%": w ? Symbol : void 0,
                        "%SyntaxError%": f,
                        "%ThrowTypeError%": b,
                        "%TypedArray%": T,
                        "%TypeError%": y,
                        "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
                        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
                        "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
                        "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
                        "%URIError%": URIError,
                        "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
                        "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
                        "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
                    },
                    S = {
                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                        "%ArrayPrototype%": ["Array", "prototype"],
                        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                        "%BooleanPrototype%": ["Boolean", "prototype"],
                        "%DataViewPrototype%": ["DataView", "prototype"],
                        "%DatePrototype%": ["Date", "prototype"],
                        "%ErrorPrototype%": ["Error", "prototype"],
                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                        "%FunctionPrototype%": ["Function", "prototype"],
                        "%Generator%": ["GeneratorFunction", "prototype"],
                        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                        "%JSONParse%": ["JSON", "parse"],
                        "%JSONStringify%": ["JSON", "stringify"],
                        "%MapPrototype%": ["Map", "prototype"],
                        "%NumberPrototype%": ["Number", "prototype"],
                        "%ObjectPrototype%": ["Object", "prototype"],
                        "%ObjProto_toString%": ["Object", "prototype", "toString"],
                        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                        "%PromisePrototype%": ["Promise", "prototype"],
                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                        "%Promise_all%": ["Promise", "all"],
                        "%Promise_reject%": ["Promise", "reject"],
                        "%Promise_resolve%": ["Promise", "resolve"],
                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                        "%RegExpPrototype%": ["RegExp", "prototype"],
                        "%SetPrototype%": ["Set", "prototype"],
                        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                        "%StringPrototype%": ["String", "prototype"],
                        "%SymbolPrototype%": ["Symbol", "prototype"],
                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                        "%URIErrorPrototype%": ["URIError", "prototype"],
                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                        "%WeakSetPrototype%": ["WeakSet", "prototype"]
                    },
                    A = l.call(Function.call, Array.prototype.concat),
                    j = l.call(Function.apply, Array.prototype.splice),
                    x = l.call(Function.call, String.prototype.replace),
                    E = l.call(Function.call, String.prototype.slice),
                    C = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                    D = /\\(\\)?/g,
                    I = function(t) {
                        var e = E(t, 0, 1),
                            r = E(t, -1);
                        if ("%" === e && "%" !== r) throw new f("invalid intrinsic syntax, expected closing `%`");
                        if ("%" === r && "%" !== e) throw new f("invalid intrinsic syntax, expected opening `%`");
                        var n = [];
                        return x(t, C, (function(t, e, r, o) {
                            n[n.length] = r ? x(o, D, "$1") : e || t
                        })), n
                    },
                    P = function(t, e) {
                        var r, n = t;
                        if (h(S, n) && (n = "%" + (r = S[n])[0] + "%"), h(k, n)) {
                            var o = k[n];
                            if (o === O && (o = function t(e) {
                                    var r;
                                    if ("%AsyncFunction%" === e) r = m("async function () {}");
                                    else if ("%GeneratorFunction%" === e) r = m("function* () {}");
                                    else if ("%AsyncGeneratorFunction%" === e) r = m("async function* () {}");
                                    else if ("%AsyncGenerator%" === e) {
                                        var n = t("%AsyncGeneratorFunction%");
                                        n && (r = n.prototype)
                                    } else if ("%AsyncIteratorPrototype%" === e) {
                                        var o = t("%AsyncGenerator%");
                                        o && (r = _(o.prototype))
                                    }
                                    return k[e] = r, r
                                }(n)), void 0 === o && !e) throw new y("intrinsic " + t + " exists, but is not available. Please file an issue!");
                            return {
                                alias: r,
                                name: n,
                                value: o
                            }
                        }
                        throw new f("intrinsic " + t + " does not exist!")
                    },
                    R = function(t, e) {
                        if ("string" != typeof t || 0 === t.length) throw new y("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof e) throw new y('"allowMissing" argument must be a boolean');
                        var r = I(t),
                            n = r.length > 0 ? r[0] : "",
                            o = P("%" + n + "%", e),
                            i = o.name,
                            s = o.value,
                            a = !1,
                            u = o.alias;
                        u && (n = u[0], j(r, A([0, 1], u)));
                        for (var p = 1, c = !0; p < r.length; p += 1) {
                            var l = r[p],
                                d = E(l, 0, 1),
                                m = E(l, -1);
                            if (('"' === d || "'" === d || "`" === d || '"' === m || "'" === m || "`" === m) && d !== m) throw new f("property names with quotes must have matching quotes");
                            if ("constructor" !== l && c || (a = !0), h(k, i = "%" + (n += "." + l) + "%")) s = k[i];
                            else if (null != s) {
                                if (!(l in s)) {
                                    if (!e) throw new y("base intrinsic for " + t + " exists, but the property is not available.");
                                    return
                                }
                                if (g && p + 1 >= r.length) {
                                    var v = g(s, l);
                                    s = (c = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : s[l]
                                } else c = h(s, l), s = s[l];
                                c && !a && (k[i] = s)
                            }
                        }
                        return s
                    },
                    q = i((function(t) {
                        var e = R("%Function.prototype.apply%"),
                            r = R("%Function.prototype.call%"),
                            n = R("%Reflect.apply%", !0) || l.call(r, e),
                            o = R("%Object.getOwnPropertyDescriptor%", !0),
                            i = R("%Object.defineProperty%", !0),
                            s = R("%Math.max%");
                        if (i) try {
                            i({}, "a", {
                                value: 1
                            })
                        } catch (mr) {
                            i = null
                        }
                        t.exports = function(t) {
                            var e = n(l, r, arguments);
                            if (o && i) {
                                var a = o(e, "length");
                                a.configurable && i(e, "length", {
                                    value: 1 + s(0, t.length - (arguments.length - 1))
                                })
                            }
                            return e
                        };
                        var a = function() {
                            return n(l, e, arguments)
                        };
                        i ? i(t.exports, "apply", {
                            value: a
                        }) : t.exports.apply = a
                    })),
                    U = (q.apply, q(R("String.prototype.indexOf"))),
                    M = function(t, e) {
                        var r = R(t, !!e);
                        return "function" == typeof r && U(t, ".prototype.") > -1 ? q(r) : r
                    },
                    L = function(t) {
                        return t && t.default || t
                    }(Object.freeze({
                        __proto__: null,
                        default: {}
                    })),
                    B = "function" == typeof Map && Map.prototype,
                    N = Object.getOwnPropertyDescriptor && B ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                    H = B && N && "function" == typeof N.get ? N.get : null,
                    F = B && Map.prototype.forEach,
                    W = "function" == typeof Set && Set.prototype,
                    z = Object.getOwnPropertyDescriptor && W ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                    V = W && z && "function" == typeof z.get ? z.get : null,
                    J = W && Set.prototype.forEach,
                    $ = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                    G = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                    X = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                    Q = Boolean.prototype.valueOf,
                    Z = Object.prototype.toString,
                    K = Function.prototype.toString,
                    Y = String.prototype.match,
                    tt = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                    et = Object.getOwnPropertySymbols,
                    rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                    nt = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                    ot = Object.prototype.propertyIsEnumerable,
                    it = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
                        return t.__proto__
                    } : null),
                    st = L.custom,
                    at = st && ft(st) ? st : null,
                    ut = "function" == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null,
                    pt = function t(e, r, n, o) {
                        var i = r || {};
                        if (yt(i, "quoteStyle") && "single" !== i.quoteStyle && "double" !== i.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                        if (yt(i, "maxStringLength") && ("number" == typeof i.maxStringLength ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : null !== i.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                        var s = !yt(i, "customInspect") || i.customInspect;
                        if ("boolean" != typeof s && "symbol" !== s) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                        if (yt(i, "indent") && null !== i.indent && "\t" !== i.indent && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
                        if (void 0 === e) return "undefined";
                        if (null === e) return "null";
                        if ("boolean" == typeof e) return e ? "true" : "false";
                        if ("string" == typeof e) return function t(e, r) {
                            if (e.length > r.maxStringLength) {
                                var n = e.length - r.maxStringLength,
                                    o = "... " + n + " more character" + (n > 1 ? "s" : "");
                                return t(e.slice(0, r.maxStringLength), r) + o
                            }
                            return ct(e.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, vt), "single", r)
                        }(e, i);
                        if ("number" == typeof e) return 0 === e ? 1 / 0 / e > 0 ? "0" : "-0" : String(e);
                        if ("bigint" == typeof e) return String(e) + "n";
                        var a = void 0 === i.depth ? 5 : i.depth;
                        if (void 0 === n && (n = 0), n >= a && a > 0 && "object" == typeof e) return ht(e) ? "[Array]" : "[Object]";
                        var u = function(t, e) {
                            var r;
                            if ("\t" === t.indent) r = "\t";
                            else {
                                if (!("number" == typeof t.indent && t.indent > 0)) return null;
                                r = Array(t.indent + 1).join(" ")
                            }
                            return {
                                base: r,
                                prev: Array(e + 1).join(r)
                            }
                        }(i, n);
                        if (void 0 === o) o = [];
                        else if (gt(o, e) >= 0) return "[Circular]";

                        function p(e, r, s) {
                            if (r && (o = o.slice()).push(r), s) {
                                var a = {
                                    depth: i.depth
                                };
                                return yt(i, "quoteStyle") && (a.quoteStyle = i.quoteStyle), t(e, a, n + 1, o)
                            }
                            return t(e, i, n + 1, o)
                        }
                        if ("function" == typeof e) {
                            var c = function(t) {
                                    if (t.name) return t.name;
                                    var e = Y.call(K.call(t), /^function\s*([\w$]+)/);
                                    return e ? e[1] : null
                                }(e),
                                l = Tt(e, p);
                            return "[Function" + (c ? ": " + c : " (anonymous)") + "]" + (l.length > 0 ? " { " + l.join(", ") + " }" : "")
                        }
                        if (ft(e)) {
                            var h = nt ? String(e).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : rt.call(e);
                            return "object" != typeof e || nt ? h : bt(h)
                        }
                        if (function(t) {
                                return !(!t || "object" != typeof t) && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)
                            }(e)) {
                            for (var f = "<" + String(e.nodeName).toLowerCase(), d = e.attributes || [], y = 0; y < d.length; y++) f += " " + d[y].name + "=" + ct(lt(d[y].value), "double", i);
                            return f += ">", e.childNodes && e.childNodes.length && (f += "..."), f + "</" + String(e.nodeName).toLowerCase() + ">"
                        }
                        if (ht(e)) {
                            if (0 === e.length) return "[]";
                            var m = Tt(e, p);
                            return u && ! function(t) {
                                for (var e = 0; e < t.length; e++)
                                    if (gt(t[e], "\n") >= 0) return !1;
                                return !0
                            }(m) ? "[" + Ot(m, u) + "]" : "[ " + m.join(", ") + " ]"
                        }
                        if (function(t) {
                                return !("[object Error]" !== mt(t) || ut && "object" == typeof t && ut in t)
                            }(e)) {
                            var g = Tt(e, p);
                            return 0 === g.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + g.join(", ") + " }"
                        }
                        if ("object" == typeof e && s) {
                            if (at && "function" == typeof e[at]) return e[at]();
                            if ("symbol" !== s && "function" == typeof e.inspect) return e.inspect()
                        }
                        if (function(t) {
                                if (!H || !t || "object" != typeof t) return !1;
                                try {
                                    H.call(t);
                                    try {
                                        V.call(t)
                                    } catch (f) {
                                        return !0
                                    }
                                    return t instanceof Map
                                } catch (mr) {}
                                return !1
                            }(e)) {
                            var v = [];
                            return F.call(e, (function(t, r) {
                                v.push(p(r, e, !0) + " => " + p(t, e))
                            })), _t("Map", H.call(e), v, u)
                        }
                        if (function(t) {
                                if (!V || !t || "object" != typeof t) return !1;
                                try {
                                    V.call(t);
                                    try {
                                        H.call(t)
                                    } catch (Cr) {
                                        return !0
                                    }
                                    return t instanceof Set
                                } catch (mr) {}
                                return !1
                            }(e)) {
                            var b = [];
                            return J.call(e, (function(t) {
                                b.push(p(t, e))
                            })), _t("Set", V.call(e), b, u)
                        }
                        if (function(t) {
                                if (!$ || !t || "object" != typeof t) return !1;
                                try {
                                    $.call(t, $);
                                    try {
                                        G.call(t, G)
                                    } catch (f) {
                                        return !0
                                    }
                                    return t instanceof WeakMap
                                } catch (mr) {}
                                return !1
                            }(e)) return wt("WeakMap");
                        if (function(t) {
                                if (!G || !t || "object" != typeof t) return !1;
                                try {
                                    G.call(t, G);
                                    try {
                                        $.call(t, $)
                                    } catch (f) {
                                        return !0
                                    }
                                    return t instanceof WeakSet
                                } catch (mr) {}
                                return !1
                            }(e)) return wt("WeakSet");
                        if (function(t) {
                                if (!X || !t || "object" != typeof t) return !1;
                                try {
                                    return X.call(t), !0
                                } catch (mr) {}
                                return !1
                            }(e)) return wt("WeakRef");
                        if (function(t) {
                                return !("[object Number]" !== mt(t) || ut && "object" == typeof t && ut in t)
                            }(e)) return bt(p(Number(e)));
                        if (function(t) {
                                if (!t || "object" != typeof t || !tt) return !1;
                                try {
                                    return tt.call(t), !0
                                } catch (mr) {}
                                return !1
                            }(e)) return bt(p(tt.call(e)));
                        if (function(t) {
                                return !("[object Boolean]" !== mt(t) || ut && "object" == typeof t && ut in t)
                            }(e)) return bt(Q.call(e));
                        if (function(t) {
                                return !("[object String]" !== mt(t) || ut && "object" == typeof t && ut in t)
                            }(e)) return bt(p(String(e)));
                        if (! function(t) {
                                return !("[object Date]" !== mt(t) || ut && "object" == typeof t && ut in t)
                            }(e) && ! function(t) {
                                return !("[object RegExp]" !== mt(t) || ut && "object" == typeof t && ut in t)
                            }(e)) {
                            var w = Tt(e, p),
                                _ = it ? it(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                                O = e instanceof Object ? "" : "null prototype",
                                T = !_ && ut && Object(e) === e && ut in e ? mt(e).slice(8, -1) : O ? "Object" : "",
                                k = (_ || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (T || O ? "[" + [].concat(T || [], O || []).join(": ") + "] " : "");
                            return 0 === w.length ? k + "{}" : u ? k + "{" + Ot(w, u) + "}" : k + "{ " + w.join(", ") + " }"
                        }
                        return String(e)
                    };

                function ct(t, e, r) {
                    var n = "double" === (r.quoteStyle || e) ? '"' : "'";
                    return n + t + n
                }

                function lt(t) {
                    return String(t).replace(/"/g, "&quot;")
                }

                function ht(t) {
                    return !("[object Array]" !== mt(t) || ut && "object" == typeof t && ut in t)
                }

                function ft(t) {
                    if (nt) return t && "object" == typeof t && t instanceof Symbol;
                    if ("symbol" == typeof t) return !0;
                    if (!t || "object" != typeof t || !rt) return !1;
                    try {
                        return rt.call(t), !0
                    } catch (mr) {}
                    return !1
                }
                var dt = Object.prototype.hasOwnProperty || function(t) {
                    return t in this
                };

                function yt(t, e) {
                    return dt.call(t, e)
                }

                function mt(t) {
                    return Z.call(t)
                }

                function gt(t, e) {
                    if (t.indexOf) return t.indexOf(e);
                    for (var r = 0, n = t.length; r < n; r++)
                        if (t[r] === e) return r;
                    return -1
                }

                function vt(t) {
                    var e = t.charCodeAt(0),
                        r = {
                            8: "b",
                            9: "t",
                            10: "n",
                            12: "f",
                            13: "r"
                        }[e];
                    return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + e.toString(16).toUpperCase()
                }

                function bt(t) {
                    return "Object(" + t + ")"
                }

                function wt(t) {
                    return t + " { ? }"
                }

                function _t(t, e, r, n) {
                    return t + " (" + e + ") {" + (n ? Ot(r, n) : r.join(", ")) + "}"
                }

                function Ot(t, e) {
                    if (0 === t.length) return "";
                    var r = "\n" + e.prev + e.base;
                    return r + t.join("," + r) + "\n" + e.prev
                }

                function Tt(t, e) {
                    var r = ht(t),
                        n = [];
                    if (r) {
                        n.length = t.length;
                        for (var o = 0; o < t.length; o++) n[o] = yt(t, o) ? e(t[o], t) : ""
                    }
                    var i, s = "function" == typeof et ? et(t) : [];
                    if (nt) {
                        i = {};
                        for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a]
                    }
                    for (var u in t) yt(t, u) && (r && String(Number(u)) === u && u < t.length || nt && i["$" + u] instanceof Symbol || (/[^\w$]/.test(u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
                    if ("function" == typeof et)
                        for (var p = 0; p < s.length; p++) ot.call(t, s[p]) && n.push("[" + e(s[p]) + "]: " + e(t[s[p]], t));
                    return n
                }
                var kt = R("%TypeError%"),
                    St = R("%WeakMap%", !0),
                    At = R("%Map%", !0),
                    jt = M("WeakMap.prototype.get", !0),
                    xt = M("WeakMap.prototype.set", !0),
                    Et = M("WeakMap.prototype.has", !0),
                    Ct = M("Map.prototype.get", !0),
                    Dt = M("Map.prototype.set", !0),
                    It = M("Map.prototype.has", !0),
                    Pt = function(t, e) {
                        for (var r, n = t; null !== (r = n.next); n = r)
                            if (r.key === e) return n.next = r.next, r.next = t.next, t.next = r, r
                    },
                    Rt = function() {
                        var t, e, r, n = {
                            assert: function(t) {
                                if (!n.has(t)) throw new kt("Side channel does not contain " + pt(t))
                            },
                            get: function(n) {
                                if (St && n && ("object" == typeof n || "function" == typeof n)) {
                                    if (t) return jt(t, n)
                                } else if (At) {
                                    if (e) return Ct(e, n)
                                } else if (r) return function(t, e) {
                                    var r = Pt(t, e);
                                    return r && r.value
                                }(r, n)
                            },
                            has: function(n) {
                                if (St && n && ("object" == typeof n || "function" == typeof n)) {
                                    if (t) return Et(t, n)
                                } else if (At) {
                                    if (e) return It(e, n)
                                } else if (r) return function(t, e) {
                                    return !!Pt(t, e)
                                }(r, n);
                                return !1
                            },
                            set: function(n, o) {
                                St && n && ("object" == typeof n || "function" == typeof n) ? (t || (t = new St), xt(t, n, o)) : At ? (e || (e = new At), Dt(e, n, o)) : (r || (r = {
                                    key: {},
                                    next: null
                                }), function(t, e, r) {
                                    var n = Pt(t, e);
                                    n ? n.value = r : t.next = {
                                        key: e,
                                        next: t.next,
                                        value: r
                                    }
                                }(r, n, o))
                            }
                        };
                        return n
                    },
                    qt = String.prototype.replace,
                    Ut = /%20/g,
                    Mt = "RFC3986",
                    Lt = {
                        default: Mt,
                        formatters: {
                            RFC1738: function(t) {
                                return qt.call(t, Ut, "+")
                            },
                            RFC3986: function(t) {
                                return String(t)
                            }
                        },
                        RFC1738: "RFC1738",
                        RFC3986: Mt
                    },
                    Bt = Object.prototype.hasOwnProperty,
                    Nt = Array.isArray,
                    Ht = function() {
                        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
                        return t
                    }(),
                    Ft = function(t, e) {
                        for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) void 0 !== t[n] && (r[n] = t[n]);
                        return r
                    },
                    Wt = {
                        arrayToObject: Ft,
                        assign: function(t, e) {
                            return Object.keys(e).reduce((function(t, r) {
                                return t[r] = e[r], t
                            }), t)
                        },
                        combine: function(t, e) {
                            return [].concat(t, e)
                        },
                        compact: function(t) {
                            for (var e = [{
                                    obj: {
                                        o: t
                                    },
                                    prop: "o"
                                }], r = [], n = 0; n < e.length; ++n)
                                for (var o = e[n], i = o.obj[o.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
                                    var u = s[a],
                                        p = i[u];
                                    "object" == typeof p && null !== p && -1 === r.indexOf(p) && (e.push({
                                        obj: i,
                                        prop: u
                                    }), r.push(p))
                                }
                            return function(t) {
                                for (; t.length > 1;) {
                                    var e = t.pop(),
                                        r = e.obj[e.prop];
                                    if (Nt(r)) {
                                        for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                                        e.obj[e.prop] = n
                                    }
                                }
                            }(e), t
                        },
                        decode: function(t, e, r) {
                            var n = t.replace(/\+/g, " ");
                            if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                            try {
                                return decodeURIComponent(n)
                            } catch (mr) {
                                return n
                            }
                        },
                        encode: function(t, e, r, n, o) {
                            if (0 === t.length) return t;
                            var i = t;
                            if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === r) return escape(i).replace(/%u[0-9a-f]{4}/gi, (function(t) {
                                return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
                            }));
                            for (var s = "", a = 0; a < i.length; ++a) {
                                var u = i.charCodeAt(a);
                                45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === Lt.RFC1738 && (40 === u || 41 === u) ? s += i.charAt(a) : u < 128 ? s += Ht[u] : u < 2048 ? s += Ht[192 | u >> 6] + Ht[128 | 63 & u] : u < 55296 || u >= 57344 ? s += Ht[224 | u >> 12] + Ht[128 | u >> 6 & 63] + Ht[128 | 63 & u] : (a += 1, u = 65536 + ((1023 & u) << 10 | 1023 & i.charCodeAt(a)), s += Ht[240 | u >> 18] + Ht[128 | u >> 12 & 63] + Ht[128 | u >> 6 & 63] + Ht[128 | 63 & u])
                            }
                            return s
                        },
                        isBuffer: function(t) {
                            return !(!t || "object" != typeof t) && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
                        },
                        isRegExp: function(t) {
                            return "[object RegExp]" === Object.prototype.toString.call(t)
                        },
                        maybeMap: function(t, e) {
                            if (Nt(t)) {
                                for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
                                return r
                            }
                            return e(t)
                        },
                        merge: function t(e, r, n) {
                            if (!r) return e;
                            if ("object" != typeof r) {
                                if (Nt(e)) e.push(r);
                                else {
                                    if (!e || "object" != typeof e) return [e, r];
                                    (n && (n.plainObjects || n.allowPrototypes) || !Bt.call(Object.prototype, r)) && (e[r] = !0)
                                }
                                return e
                            }
                            if (!e || "object" != typeof e) return [e].concat(r);
                            var o = e;
                            return Nt(e) && !Nt(r) && (o = Ft(e, n)), Nt(e) && Nt(r) ? (r.forEach((function(r, o) {
                                if (Bt.call(e, o)) {
                                    var i = e[o];
                                    i && "object" == typeof i && r && "object" == typeof r ? e[o] = t(i, r, n) : e.push(r)
                                } else e[o] = r
                            })), e) : Object.keys(r).reduce((function(e, o) {
                                var i = r[o];
                                return Bt.call(e, o) ? e[o] = t(e[o], i, n) : e[o] = i, e
                            }), o)
                        }
                    },
                    zt = Object.prototype.hasOwnProperty,
                    Vt = {
                        brackets: function(t) {
                            return t + "[]"
                        },
                        comma: "comma",
                        indices: function(t, e) {
                            return t + "[" + e + "]"
                        },
                        repeat: function(t) {
                            return t
                        }
                    },
                    Jt = Array.isArray,
                    $t = Array.prototype.push,
                    Gt = function(t, e) {
                        $t.apply(t, Jt(e) ? e : [e])
                    },
                    Xt = Date.prototype.toISOString,
                    Qt = Lt.default,
                    Zt = {
                        addQueryPrefix: !1,
                        allowDots: !1,
                        charset: "utf-8",
                        charsetSentinel: !1,
                        delimiter: "&",
                        encode: !0,
                        encoder: Wt.encode,
                        encodeValuesOnly: !1,
                        format: Qt,
                        formatter: Lt.formatters[Qt],
                        indices: !1,
                        serializeDate: function(t) {
                            return Xt.call(t)
                        },
                        skipNulls: !1,
                        strictNullHandling: !1
                    },
                    Kt = function t(e, r, n, o, i, s, a, u, p, c, l, h, f, d, y) {
                        var m = e;
                        if (y.has(e)) throw new RangeError("Cyclic object value");
                        if ("function" == typeof a ? m = a(r, m) : m instanceof Date ? m = c(m) : "comma" === n && Jt(m) && (m = Wt.maybeMap(m, (function(t) {
                                return t instanceof Date ? c(t) : t
                            }))), null === m) {
                            if (o) return s && !f ? s(r, Zt.encoder, d, "key", l) : r;
                            m = ""
                        }
                        if (function(t) {
                                return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "symbol" == typeof t || "bigint" == typeof t
                            }(m) || Wt.isBuffer(m)) return s ? [h(f ? r : s(r, Zt.encoder, d, "key", l)) + "=" + h(s(m, Zt.encoder, d, "value", l))] : [h(r) + "=" + h(String(m))];
                        var g, v = [];
                        if (void 0 === m) return v;
                        if ("comma" === n && Jt(m)) g = [{
                            value: m.length > 0 ? m.join(",") || null : void 0
                        }];
                        else if (Jt(a)) g = a;
                        else {
                            var b = Object.keys(m);
                            g = u ? b.sort(u) : b
                        }
                        for (var w = 0; w < g.length; ++w) {
                            var _ = g[w],
                                O = "object" == typeof _ && void 0 !== _.value ? _.value : m[_];
                            if (!i || null !== O) {
                                var T = Jt(m) ? "function" == typeof n ? n(r, _) : r : r + (p ? "." + _ : "[" + _ + "]");
                                y.set(e, !0);
                                var k = Rt();
                                Gt(v, t(O, T, n, o, i, s, a, u, p, c, l, h, f, d, k))
                            }
                        }
                        return v
                    },
                    Yt = Object.prototype.hasOwnProperty,
                    te = Array.isArray,
                    ee = {
                        allowDots: !1,
                        allowPrototypes: !1,
                        allowSparse: !1,
                        arrayLimit: 20,
                        charset: "utf-8",
                        charsetSentinel: !1,
                        comma: !1,
                        decoder: Wt.decode,
                        delimiter: "&",
                        depth: 5,
                        ignoreQueryPrefix: !1,
                        interpretNumericEntities: !1,
                        parameterLimit: 1e3,
                        parseArrays: !0,
                        plainObjects: !1,
                        strictNullHandling: !1
                    },
                    re = function(t) {
                        return t.replace(/&#(\d+);/g, (function(t, e) {
                            return String.fromCharCode(parseInt(e, 10))
                        }))
                    },
                    ne = function(t, e) {
                        return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
                    },
                    oe = function(t, e, r, n) {
                        if (t) {
                            var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                                i = /(\[[^[\]]*])/g,
                                s = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
                                a = s ? o.slice(0, s.index) : o,
                                u = [];
                            if (a) {
                                if (!r.plainObjects && Yt.call(Object.prototype, a) && !r.allowPrototypes) return;
                                u.push(a)
                            }
                            for (var p = 0; r.depth > 0 && null !== (s = i.exec(o)) && p < r.depth;) {
                                if (p += 1, !r.plainObjects && Yt.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) return;
                                u.push(s[1])
                            }
                            return s && u.push("[" + o.slice(s.index) + "]"),
                                function(t, e, r, n) {
                                    for (var o = n ? e : ne(e, r), i = t.length - 1; i >= 0; --i) {
                                        var s, a = t[i];
                                        if ("[]" === a && r.parseArrays) s = [].concat(o);
                                        else {
                                            s = r.plainObjects ? Object.create(null) : {};
                                            var u = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                                p = parseInt(u, 10);
                                            r.parseArrays || "" !== u ? !isNaN(p) && a !== u && String(p) === u && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (s = [])[p] = o : s[u] = o : s = {
                                                0: o
                                            }
                                        }
                                        o = s
                                    }
                                    return o
                                }(u, e, r, n)
                        }
                    },
                    ie = function(t, e) {
                        var r, n = t,
                            o = function(t) {
                                if (!t) return Zt;
                                if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                                var e = t.charset || Zt.charset;
                                if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                                var r = Lt.default;
                                if (void 0 !== t.format) {
                                    if (!zt.call(Lt.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                                    r = t.format
                                }
                                var n = Lt.formatters[r],
                                    o = Zt.filter;
                                return ("function" == typeof t.filter || Jt(t.filter)) && (o = t.filter), {
                                    addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : Zt.addQueryPrefix,
                                    allowDots: void 0 === t.allowDots ? Zt.allowDots : !!t.allowDots,
                                    charset: e,
                                    charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : Zt.charsetSentinel,
                                    delimiter: void 0 === t.delimiter ? Zt.delimiter : t.delimiter,
                                    encode: "boolean" == typeof t.encode ? t.encode : Zt.encode,
                                    encoder: "function" == typeof t.encoder ? t.encoder : Zt.encoder,
                                    encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : Zt.encodeValuesOnly,
                                    filter: o,
                                    format: r,
                                    formatter: n,
                                    serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : Zt.serializeDate,
                                    skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : Zt.skipNulls,
                                    sort: "function" == typeof t.sort ? t.sort : null,
                                    strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : Zt.strictNullHandling
                                }
                            }(e);
                        "function" == typeof o.filter ? n = (0, o.filter)("", n) : Jt(o.filter) && (r = o.filter);
                        var i, s = [];
                        if ("object" != typeof n || null === n) return "";
                        i = e && e.arrayFormat in Vt ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
                        var a = Vt[i];
                        r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
                        for (var u = Rt(), p = 0; p < r.length; ++p) {
                            var c = r[p];
                            o.skipNulls && null === n[c] || Gt(s, Kt(n[c], c, a, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, u))
                        }
                        var l = s.join(o.delimiter),
                            h = !0 === o.addQueryPrefix ? "?" : "";
                        return o.charsetSentinel && ("iso-8859-1" === o.charset ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), l.length > 0 ? h + l : ""
                    },
                    se = i((function(t) {
                        function e(t) {
                            if (t) return function(t) {
                                for (var r in e.prototype) t[r] = e.prototype[r];
                                return t
                            }(t)
                        }
                        t.exports = e, e.prototype.on = e.prototype.addEventListener = function(t, e) {
                            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
                        }, e.prototype.once = function(t, e) {
                            function r() {
                                this.off(t, r), e.apply(this, arguments)
                            }
                            return r.fn = e, this.on(t, r), this
                        }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(t, e) {
                            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                            var r, n = this._callbacks["$" + t];
                            if (!n) return this;
                            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                            for (var o = 0; o < n.length; o++)
                                if ((r = n[o]) === e || r.fn === e) {
                                    n.splice(o, 1);
                                    break
                                }
                            return 0 === n.length && delete this._callbacks["$" + t], this
                        }, e.prototype.emit = function(t) {
                            this._callbacks = this._callbacks || {};
                            for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                            if (r) {
                                n = 0;
                                for (var o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e)
                            }
                            return this
                        }, e.prototype.listeners = function(t) {
                            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
                        }, e.prototype.hasListeners = function(t) {
                            return !!this.listeners(t).length
                        }
                    })),
                    ae = ce;
                ce.default = ce, ce.stable = he, ce.stableStringify = he;
                var ue = [],
                    pe = [];

                function ce(t, e, r) {
                    var n;
                    for (function t(e, r, n, o) {
                            var i;
                            if ("object" == typeof e && null !== e) {
                                for (i = 0; i < n.length; i++)
                                    if (n[i] === e) {
                                        var s = Object.getOwnPropertyDescriptor(o, r);
                                        return void(void 0 !== s.get ? s.configurable ? (Object.defineProperty(o, r, {
                                            value: "[Circular]"
                                        }), ue.push([o, r, e, s])) : pe.push([e, r]) : (o[r] = "[Circular]", ue.push([o, r, e])))
                                    }
                                if (n.push(e), Array.isArray(e))
                                    for (i = 0; i < e.length; i++) t(e[i], i, n, e);
                                else {
                                    var a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) {
                                        var u = a[i];
                                        t(e[u], u, n, e)
                                    }
                                }
                                n.pop()
                            }
                        }(t, "", [], void 0), n = 0 === pe.length ? JSON.stringify(t, e, r) : JSON.stringify(t, fe(e), r); 0 !== ue.length;) {
                        var o = ue.pop();
                        4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
                    }
                    return n
                }

                function le(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                }

                function he(t, e, r) {
                    var n, o = function t(e, r, n, o) {
                        var i;
                        if ("object" == typeof e && null !== e) {
                            for (i = 0; i < n.length; i++)
                                if (n[i] === e) {
                                    var s = Object.getOwnPropertyDescriptor(o, r);
                                    return void(void 0 !== s.get ? s.configurable ? (Object.defineProperty(o, r, {
                                        value: "[Circular]"
                                    }), ue.push([o, r, e, s])) : pe.push([e, r]) : (o[r] = "[Circular]", ue.push([o, r, e])))
                                }
                            if ("function" == typeof e.toJSON) return;
                            if (n.push(e), Array.isArray(e))
                                for (i = 0; i < e.length; i++) t(e[i], i, n, e);
                            else {
                                var a = {},
                                    u = Object.keys(e).sort(le);
                                for (i = 0; i < u.length; i++) {
                                    var p = u[i];
                                    t(e[p], p, n, e), a[p] = e[p]
                                }
                                if (void 0 === o) return a;
                                ue.push([o, r, e]), o[r] = a
                            }
                            n.pop()
                        }
                    }(t, "", [], void 0) || t;
                    for (n = 0 === pe.length ? JSON.stringify(o, e, r) : JSON.stringify(o, fe(e), r); 0 !== ue.length;) {
                        var i = ue.pop();
                        4 === i.length ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2]
                    }
                    return n
                }

                function fe(t) {
                    return t = void 0 !== t ? t : function(t, e) {
                            return e
                        },
                        function(e, r) {
                            if (pe.length > 0)
                                for (var n = 0; n < pe.length; n++) {
                                    var o = pe[n];
                                    if (o[1] === e && o[0] === r) {
                                        r = "[Circular]", pe.splice(n, 1);
                                        break
                                    }
                                }
                            return t.call(this, e, r)
                        }
                }

                function de(t) {
                    return (de = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                var ye = function(t) {
                    return null !== t && "object" === de(t)
                };

                function me(t) {
                    return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                var ge = ve;

                function ve(t) {
                    if (t) return function(t) {
                        for (var e in ve.prototype) Object.prototype.hasOwnProperty.call(ve.prototype, e) && (t[e] = ve.prototype[e]);
                        return t
                    }(t)
                }
                ve.prototype.clearTimeout = function() {
                    return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
                }, ve.prototype.parse = function(t) {
                    return this._parser = t, this
                }, ve.prototype.responseType = function(t) {
                    return this._responseType = t, this
                }, ve.prototype.serialize = function(t) {
                    return this._serializer = t, this
                }, ve.prototype.timeout = function(t) {
                    if (!t || "object" !== me(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;
                    for (var e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
                            case "deadline":
                                this._timeout = t.deadline;
                                break;
                            case "response":
                                this._responseTimeout = t.response;
                                break;
                            case "upload":
                                this._uploadTimeout = t.upload;
                                break;
                            default:
                                console.warn("Unknown timeout option", e)
                        }
                    return this
                }, ve.prototype.retry = function(t, e) {
                    return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
                };
                var be = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
                ve.prototype._shouldRetry = function(t, e) {
                    if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
                    if (this._retryCallback) try {
                        var r = this._retryCallback(t, e);
                        if (!0 === r) return !0;
                        if (!1 === r) return !1
                    } catch (n) {
                        console.error(n)
                    }
                    if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
                    if (t) {
                        if (t.code && be.includes(t.code)) return !0;
                        if (t.timeout && "ECONNABORTED" === t.code) return !0;
                        if (t.crossDomain) return !0
                    }
                    return !1
                }, ve.prototype._retry = function() {
                    return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
                }, ve.prototype.then = function(t, e) {
                    var r = this;
                    if (!this._fullfilledPromise) {
                        var n = this;
                        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise((function(t, e) {
                            n.on("abort", (function() {
                                if (!(r._maxRetries && r._maxRetries > r._retries))
                                    if (r.timedout && r.timedoutError) e(r.timedoutError);
                                    else {
                                        var t = new Error("Aborted");
                                        t.code = "ABORTED", t.status = r.status, t.method = r.method, t.url = r.url, e(t)
                                    }
                            })), n.end((function(r, n) {
                                r ? e(r) : t(n)
                            }))
                        }))
                    }
                    return this._fullfilledPromise.then(t, e)
                }, ve.prototype.catch = function(t) {
                    return this.then(void 0, t)
                }, ve.prototype.use = function(t) {
                    return t(this), this
                }, ve.prototype.ok = function(t) {
                    if ("function" != typeof t) throw new Error("Callback required");
                    return this._okCallback = t, this
                }, ve.prototype._isResponseOK = function(t) {
                    return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
                }, ve.prototype.get = function(t) {
                    return this._header[t.toLowerCase()]
                }, ve.prototype.getHeader = ve.prototype.get, ve.prototype.set = function(t, e) {
                    if (ye(t)) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
                        return this
                    }
                    return this._header[t.toLowerCase()] = e, this.header[t] = e, this
                }, ve.prototype.unset = function(t) {
                    return delete this._header[t.toLowerCase()], delete this.header[t], this
                }, ve.prototype.field = function(t, e) {
                    if (null == t) throw new Error(".field(name, val) name can not be empty");
                    if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
                    if (ye(t)) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
                        return this
                    }
                    if (Array.isArray(e)) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(t, e[n]);
                        return this
                    }
                    if (null == e) throw new Error(".field(name, val) val can not be empty");
                    return "boolean" == typeof e && (e = String(e)), this._getFormData().append(t, e), this
                }, ve.prototype.abort = function() {
                    return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this
                }, ve.prototype._auth = function(t, e, r, n) {
                    switch (r.type) {
                        case "basic":
                            this.set("Authorization", "Basic ".concat(n("".concat(t, ":").concat(e))));
                            break;
                        case "auto":
                            this.username = t, this.password = e;
                            break;
                        case "bearer":
                            this.set("Authorization", "Bearer ".concat(t))
                    }
                    return this
                }, ve.prototype.withCredentials = function(t) {
                    return void 0 === t && (t = !0), this._withCredentials = t, this
                }, ve.prototype.redirects = function(t) {
                    return this._maxRedirects = t, this
                }, ve.prototype.maxResponseSize = function(t) {
                    if ("number" != typeof t) throw new TypeError("Invalid argument");
                    return this._maxResponseSize = t, this
                }, ve.prototype.toJSON = function() {
                    return {
                        method: this.method,
                        url: this.url,
                        data: this._data,
                        headers: this._header
                    }
                }, ve.prototype.send = function(t) {
                    var e = ye(t),
                        r = this._header["content-type"];
                    if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
                    if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
                    else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
                    if (e && ye(this._data))
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (this._data[n] = t[n]);
                    else "string" == typeof t ? (r || this.type("form"), r = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === r ? this._data ? "".concat(this._data, "&").concat(t) : t : (this._data || "") + t) : this._data = t;
                    return !e || this._isHost(t) || r || this.type("json"), this
                }, ve.prototype.sortQuery = function(t) {
                    return this._sort = void 0 === t || t, this
                }, ve.prototype._finalizeQueryString = function() {
                    var t = this._query.join("&");
                    if (t && (this.url += (this.url.includes("?") ? "&" : "?") + t), this._query.length = 0, this._sort) {
                        var e = this.url.indexOf("?");
                        if (e >= 0) {
                            var r = this.url.slice(e + 1).split("&");
                            "function" == typeof this._sort ? r.sort(this._sort) : r.sort(), this.url = this.url.slice(0, e) + "?" + r.join("&")
                        }
                    }
                }, ve.prototype._appendQueryString = function() {
                    console.warn("Unsupported")
                }, ve.prototype._timeoutError = function(t, e, r) {
                    if (!this._aborted) {
                        var n = new Error("".concat(t + e, "ms exceeded"));
                        n.timeout = e, n.code = "ECONNABORTED", n.errno = r, this.timedout = !0, this.timedoutError = n, this.abort(), this.callback(n)
                    }
                }, ve.prototype._setTimeouts = function() {
                    var t = this;
                    this._timeout && !this._timer && (this._timer = setTimeout((function() {
                        t._timeoutError("Timeout of ", t._timeout, "ETIME")
                    }), this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout((function() {
                        t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
                    }), this._responseTimeout))
                };
                var we = _e;

                function _e(t) {
                    if (t) return function(t) {
                        for (var e in _e.prototype) Object.prototype.hasOwnProperty.call(_e.prototype, e) && (t[e] = _e.prototype[e]);
                        return t
                    }(t)
                }

                function Oe(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }

                function Te() {
                    this._defaults = []
                }
                _e.prototype.get = function(t) {
                    return this.header[t.toLowerCase()]
                }, _e.prototype._setHeaderProperties = function(t) {
                    var e = t["content-type"] || "";
                    this.type = e.split(/ *; */).shift();
                    var r = function(t) {
                        return t.split(/ *; */).reduce((function(t, e) {
                            var r = e.split(/ *= */),
                                n = r.shift(),
                                o = r.shift();
                            return n && o && (t[n] = o), t
                        }), {})
                    }(e);
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (this[n] = r[n]);
                    this.links = {};
                    try {
                        t.link && (this.links = function(t) {
                            return t.split(/ *, */).reduce((function(t, e) {
                                var r = e.split(/ *; */),
                                    n = r[0].slice(1, -1);
                                return t[r[1].split(/ *= */)[1].slice(1, -1)] = n, t
                            }), {})
                        }(t.link))
                    } catch (o) {}
                }, _e.prototype._setStatusProperties = function(t) {
                    var e = t / 100 | 0;
                    this.statusCode = t, this.status = this.statusCode, this.statusType = e, this.info = 1 === e, this.ok = 2 === e, this.redirect = 3 === e, this.clientError = 4 === e, this.serverError = 5 === e, this.error = (4 === e || 5 === e) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t
                }, ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach((function(t) {
                    Te.prototype[t] = function() {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return this._defaults.push({
                            fn: t,
                            args: r
                        }), this
                    }
                })), Te.prototype._setDefaults = function(t) {
                    this._defaults.forEach((function(e) {
                        t[e.fn].apply(t, function(t) {
                            return function(t) {
                                if (Array.isArray(t)) return Oe(t)
                            }(t) || function(t) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                            }(t) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return Oe(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Oe(t, e) : void 0
                                }
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(e.args))
                    }))
                };
                for (var ke = Te, Se = i((function(t, e) {
                        function r(t) {
                            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var n;

                        function o() {}
                        "undefined" != typeof window ? n = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), n = void 0) : n = self, t.exports = function(t, r) {
                            return "function" == typeof r ? new e.Request("GET", t).end(r) : 1 === arguments.length ? new e.Request("GET", t) : new e.Request(t, r)
                        };
                        var i = e = t.exports;
                        e.Request = h, i.getXHR = function() {
                            if (n.XMLHttpRequest && (!n.location || "file:" !== n.location.protocol || !n.ActiveXObject)) return new XMLHttpRequest;
                            try {
                                return new ActiveXObject("Microsoft.XMLHTTP")
                            } catch (t) {}
                            try {
                                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                            } catch (e) {}
                            try {
                                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                            } catch (r) {}
                            try {
                                return new ActiveXObject("Msxml2.XMLHTTP")
                            } catch (o) {}
                            throw new Error("Browser-only version of superagent could not find XHR")
                        };
                        var s = "".trim ? function(t) {
                            return t.trim()
                        } : function(t) {
                            return t.replace(/(^\s*|\s*$)/g, "")
                        };

                        function a(t) {
                            if (!ye(t)) return t;
                            var e = [];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && u(e, r, t[r]);
                            return e.join("&")
                        }

                        function u(t, e, r) {
                            if (void 0 !== r)
                                if (null !== r)
                                    if (Array.isArray(r)) r.forEach((function(r) {
                                        u(t, e, r)
                                    }));
                                    else if (ye(r))
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && u(t, "".concat(e, "[").concat(n, "]"), r[n]);
                            else t.push(encodeURI(e) + "=" + encodeURIComponent(r));
                            else t.push(encodeURI(e))
                        }

                        function p(t) {
                            for (var e, r, n = {}, o = t.split("&"), i = 0, s = o.length; i < s; ++i) - 1 === (r = (e = o[i]).indexOf("=")) ? n[decodeURIComponent(e)] = "" : n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1));
                            return n
                        }

                        function c(t) {
                            return /[/+]json($|[^-\w])/.test(t)
                        }

                        function l(t) {
                            this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
                            var e = this.xhr.status;
                            1223 === e && (e = 204), this._setStatusProperties(e), this.headers = function(t) {
                                for (var e, r, n, o, i = t.split(/\r?\n/), a = {}, u = 0, p = i.length; u < p; ++u) - 1 !== (e = (r = i[u]).indexOf(":")) && (n = r.slice(0, e).toLowerCase(), o = s(r.slice(e + 1)), a[n] = o);
                                return a
                            }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
                        }

                        function h(t, e) {
                            var r = this;
                            this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", (function() {
                                var t, e = null,
                                    n = null;
                                try {
                                    n = new l(r)
                                } catch (o) {
                                    return (e = new Error("Parser is unable to parse the response")).parse = !0, e.original = o, r.xhr ? (e.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response, e.status = r.xhr.status ? r.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), r.callback(e)
                                }
                                r.emit("response", n);
                                try {
                                    r._isResponseOK(n) || (t = new Error(n.statusText || n.text || "Unsuccessful HTTP response"))
                                } catch (o) {
                                    t = o
                                }
                                t ? (t.original = e, t.response = n, t.status = n.status, r.callback(t, n)) : r.callback(null, n)
                            }))
                        }

                        function f(t, e, r) {
                            var n = i("DELETE", t);
                            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                        }
                        i.serializeObject = a, i.parseString = p, i.types = {
                            html: "text/html",
                            json: "application/json",
                            xml: "text/xml",
                            urlencoded: "application/x-www-form-urlencoded",
                            form: "application/x-www-form-urlencoded",
                            "form-data": "application/x-www-form-urlencoded"
                        }, i.serialize = {
                            "application/x-www-form-urlencoded": a,
                            "application/json": ae
                        }, i.parse = {
                            "application/x-www-form-urlencoded": p,
                            "application/json": JSON.parse
                        }, we(l.prototype), l.prototype._parseBody = function(t) {
                            var e = i.parse[this.type];
                            return this.req._parser ? this.req._parser(this, t) : (!e && c(this.type) && (e = i.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null)
                        }, l.prototype.toError = function() {
                            var t = this.req,
                                e = t.method,
                                r = t.url,
                                n = "cannot ".concat(e, " ").concat(r, " (").concat(this.status, ")"),
                                o = new Error(n);
                            return o.status = this.status, o.method = e, o.url = r, o
                        }, i.Response = l, se(h.prototype), ge(h.prototype), h.prototype.type = function(t) {
                            return this.set("Content-Type", i.types[t] || t), this
                        }, h.prototype.accept = function(t) {
                            return this.set("Accept", i.types[t] || t), this
                        }, h.prototype.auth = function(t, e, n) {
                            1 === arguments.length && (e = ""), "object" === r(e) && null !== e && (n = e, e = ""), n || (n = {
                                type: "function" == typeof btoa ? "basic" : "auto"
                            });
                            var o = function(t) {
                                if ("function" == typeof btoa) return btoa(t);
                                throw new Error("Cannot use basic auth, btoa is not a function")
                            };
                            return this._auth(t, e, n, o)
                        }, h.prototype.query = function(t) {
                            return "string" != typeof t && (t = a(t)), t && this._query.push(t), this
                        }, h.prototype.attach = function(t, e, r) {
                            if (e) {
                                if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                                this._getFormData().append(t, e, r || e.name)
                            }
                            return this
                        }, h.prototype._getFormData = function() {
                            return this._formData || (this._formData = new n.FormData), this._formData
                        }, h.prototype.callback = function(t, e) {
                            if (this._shouldRetry(t, e)) return this._retry();
                            var r = this._callback;
                            this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), r(t, e)
                        }, h.prototype.crossDomainError = function() {
                            var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
                            t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
                        }, h.prototype.agent = function() {
                            return console.warn("This is not supported in browser version of superagent"), this
                        }, h.prototype.ca = h.prototype.agent, h.prototype.buffer = h.prototype.ca, h.prototype.write = function() {
                            throw new Error("Streaming is not supported in browser version of superagent")
                        }, h.prototype.pipe = h.prototype.write, h.prototype._isHost = function(t) {
                            return t && "object" === r(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
                        }, h.prototype.end = function(t) {
                            this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || o, this._finalizeQueryString(), this._end()
                        }, h.prototype._setUploadTimeout = function() {
                            var t = this;
                            this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout((function() {
                                t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
                            }), this._uploadTimeout))
                        }, h.prototype._end = function() {
                            if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
                            var t = this;
                            this.xhr = i.getXHR();
                            var e = this.xhr,
                                r = this._formData || this._data;
                            this._setTimeouts(), e.onreadystatechange = function() {
                                var r = e.readyState;
                                if (r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === r) {
                                    var n;
                                    try {
                                        n = e.status
                                    } catch (o) {
                                        n = 0
                                    }
                                    if (!n) {
                                        if (t.timedout || t._aborted) return;
                                        return t.crossDomainError()
                                    }
                                    t.emit("end")
                                }
                            };
                            var n = function(e, r) {
                                r.total > 0 && (r.percent = r.loaded / r.total * 100, 100 === r.percent && clearTimeout(t._uploadTimeoutTimer)), r.direction = e, t.emit("progress", r)
                            };
                            if (this.hasListeners("progress")) try {
                                e.addEventListener("progress", n.bind(null, "download")), e.upload && e.upload.addEventListener("progress", n.bind(null, "upload"))
                            } catch (u) {}
                            e.upload && this._setUploadTimeout();
                            try {
                                this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
                            } catch (p) {
                                return this.callback(p)
                            }
                            if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof r && !this._isHost(r)) {
                                var o = this._header["content-type"],
                                    s = this._serializer || i.serialize[o ? o.split(";")[0] : ""];
                                !s && c(o) && (s = i.serialize["application/json"]), s && (r = s(r))
                            }
                            for (var a in this.header) null !== this.header[a] && Object.prototype.hasOwnProperty.call(this.header, a) && e.setRequestHeader(a, this.header[a]);
                            this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 === r ? null : r)
                        }, i.agent = function() {
                            return new ke
                        }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach((function(t) {
                            ke.prototype[t.toLowerCase()] = function(e, r) {
                                var n = new i.Request(t, e);
                                return this._setDefaults(n), r && n.end(r), n
                            }
                        })), ke.prototype.del = ke.prototype.delete, i.get = function(t, e, r) {
                            var n = i("GET", t);
                            return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
                        }, i.head = function(t, e, r) {
                            var n = i("HEAD", t);
                            return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
                        }, i.options = function(t, e, r) {
                            var n = i("OPTIONS", t);
                            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                        }, i.del = f, i.delete = f, i.patch = function(t, e, r) {
                            var n = i("PATCH", t);
                            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                        }, i.post = function(t, e, r) {
                            var n = i("POST", t);
                            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                        }, i.put = function(t, e, r) {
                            var n = i("PUT", t);
                            return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
                        }
                    })), Ae = (Se.Request, []), je = [], xe = ("undefined" != typeof Uint8Array && Uint8Array, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), Ee = 0, Ce = xe.length; Ee < Ce; ++Ee) Ae[Ee] = xe[Ee], je[xe.charCodeAt(Ee)] = Ee;

                function De(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("=");
                    return -1 === r && e, [r, r === e ? 0 : 4 - r % 4]
                }

                function Ie(t, e, r) {
                    for (var n, o, i = [], s = e; s < r; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), i.push(Ae[(o = n) >> 18 & 63] + Ae[o >> 12 & 63] + Ae[o >> 6 & 63] + Ae[63 & o]);
                    return i.join("")
                }
                je["-".charCodeAt(0)] = 62, je["_".charCodeAt(0)] = 63;
                var Pe = function(t) {
                        for (var e, r = t.length, n = r % 3, o = [], i = 0, s = r - n; i < s; i += 16383) o.push(Ie(t, i, i + 16383 > s ? s : i + 16383));
                        return 1 === n ? (e = t[r - 1], o.push(Ae[e >> 2] + Ae[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], o.push(Ae[e >> 10] + Ae[e >> 4 & 63] + Ae[e << 2 & 63] + "=")), o.join("")
                    },
                    Re = function(t) {
                        return Pe(function(t) {
                            for (var e = new Array(t.length), r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                            return e
                        }(t)).replace(/\+/g, "-").replace(/\//g, "_")
                    },
                    qe = {
                        raw: "9.19.0"
                    },
                    Ue = Object.prototype.toString;

                function Me(t, e, r, n) {
                    if (r = "array" === r ? "object" : r, t && typeof t[e] !== r) throw new Error(n)
                }

                function Le(t, e, r) {
                    if (typeof t !== e) throw new Error(r)
                }

                function Be(t, e, r) {
                    if (-1 === e.indexOf(t)) throw new Error(r)
                }
                var Ne = {
                    check: function(t, e, r) {
                        if (e.optional && !t || Le(t, e.type, e.message), "object" === e.type && r)
                            for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                                var i = n[o];
                                r[i].optional && !t[i] || r[i].condition && !r[i].condition(t) || (Me(t, i, r[i].type, r[i].message), r[i].values && Be(t[i], r[i].values, r[i].value_message))
                            }
                    },
                    attribute: Me,
                    variable: Le,
                    value: Be,
                    isArray: function(t) {
                        return this.supportsIsArray() ? Array.isArray(t) : "[object Array]" === Ue.call(t)
                    },
                    supportsIsArray: function() {
                        return null != Array.isArray
                    }
                };

                function He(t) {
                    if (null == t) throw new TypeError("Cannot convert first argument to object");
                    for (var e = Object(t), r = 1; r < arguments.length; r++) {
                        var n = arguments[r];
                        if (null != n)
                            for (var o = Object.keys(Object(n)), i = 0, s = o.length; i < s; i++) {
                                var a = o[i],
                                    u = Object.getOwnPropertyDescriptor(n, a);
                                void 0 !== u && u.enumerable && (e[a] = n[a])
                            }
                    }
                    return e
                }
                var Fe = function() {
                    return Object.assign ? Object.assign : He
                };

                function We(t, e) {
                    return e.reduce((function(e, r) {
                        return t[r] && (e[r] = t[r]), e
                    }), {})
                }

                function ze(t) {
                    var e = [];
                    for (var r in t) e.push(t[r]);
                    return e
                }

                function Ve() {
                    var t = ze(arguments);
                    return t.unshift({}), Fe().apply(void 0, t)
                }

                function Je(t) {
                    var e = t.match(/^(https?:|file:|chrome-extension:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
                    return e && {
                        href: t,
                        protocol: e[1],
                        host: e[2],
                        hostname: e[3],
                        port: e[4],
                        pathname: e[5],
                        search: e[6],
                        hash: e[7]
                    }
                }

                function $e(t, e) {
                    var r = Ve(t);
                    return t[e] && (r[e] = t[e].trim()), r
                }
                var Ge = {
                    toSnakeCase: function t(e, r) {
                        return "object" != typeof e || Ne.isArray(e) || null === e ? e : (r = r || [], Object.keys(e).reduce((function(n, o) {
                            return n[-1 === r.indexOf(o) ? function(t) {
                                for (var e, r = "", n = 0, o = !0, i = !0; n < t.length;) e = t.charCodeAt(n), !i && e >= 65 && e <= 90 || !o && e >= 48 && e <= 57 ? (r += "_", r += t[n].toLowerCase()) : r += t[n].toLowerCase(), o = e >= 48 && e <= 57, i = e >= 65 && e <= 90, n++;
                                return r
                            }(o) : o] = t(e[o]), n
                        }), {}))
                    },
                    toCamelCase: function t(e, r, n) {
                        return "object" != typeof e || Ne.isArray(e) || null === e ? e : (r = r || [], n = n || {}, Object.keys(e).reduce((function(o, i) {
                            var s, a = -1 === r.indexOf(i) ? (s = i.split("_")).reduce((function(t, e) {
                                return t + e.charAt(0).toUpperCase() + e.slice(1)
                            }), s.shift()) : i;
                            return o[a] = t(e[a] || e[i], [], n), n.keepOriginal && (o[i] = t(e[i], [], n)), o
                        }), {}))
                    },
                    blacklist: function(t, e) {
                        return Object.keys(t).reduce((function(r, n) {
                            return -1 === e.indexOf(n) && (r[n] = t[n]), r
                        }), {})
                    },
                    merge: function(t, e) {
                        return {
                            base: e ? We(t, e) : t,
                            with: function(t, e) {
                                return t = e ? We(t, e) : t, Ve(this.base, t)
                            }
                        }
                    },
                    pick: We,
                    getKeysNotIn: function(t, e) {
                        var r = [];
                        for (var n in t) - 1 === e.indexOf(n) && r.push(n);
                        return r
                    },
                    extend: Ve,
                    getOriginFromUrl: function(t) {
                        if (t) {
                            var e = Je(t);
                            if (!e) return null;
                            var r = e.protocol + "//" + e.hostname;
                            return e.port && (r += ":" + e.port), r
                        }
                    },
                    getLocationFromUrl: Je,
                    trimUserDetails: function(t) {
                        return function(t, e) {
                            return ["username", "email", "phoneNumber"].reduce($e, t)
                        }(t)
                    },
                    updatePropertyOn: function t(e, r, n) {
                        "string" == typeof r && (r = r.split("."));
                        var o = r[0];
                        e.hasOwnProperty(o) && (1 === r.length ? e[o] = n : t(e[o], r.slice(1), n))
                    }
                };

                function Xe(t) {
                    this.request = t, this.method = t.method, this.url = t.url, this.body = t._data, this.headers = t._header
                }

                function Qe(t) {
                    this.request = t
                }

                function Ze(t) {
                    this._sendTelemetry = !1 !== t._sendTelemetry || t._sendTelemetry, this._telemetryInfo = t._telemetryInfo || null, this._timesToRetryFailedRequests = t._timesToRetryFailedRequests, this.headers = t.headers || {}, this._universalLoginPage = t.universalLoginPage
                }

                function Ke() {
                    return window
                }
                Xe.prototype.abort = function() {
                    this.request.abort()
                }, Xe.prototype.getMethod = function() {
                    return this.method
                }, Xe.prototype.getBody = function() {
                    return this.body
                }, Xe.prototype.getUrl = function() {
                    return this.url
                }, Xe.prototype.getHeaders = function() {
                    return this.headers
                }, Qe.prototype.set = function(t, e) {
                    return this.request = this.request.set(t, e), this
                }, Qe.prototype.send = function(t) {
                    return this.request = this.request.send(Ge.trimUserDetails(t)), this
                }, Qe.prototype.withCredentials = function() {
                    return this.request = this.request.withCredentials(), this
                }, Qe.prototype.end = function(t) {
                    return this.request.end(t), new Xe(this.request)
                }, Ze.prototype.setCommonConfiguration = function(t, e) {
                    if (e = e || {}, this._timesToRetryFailedRequests > 0 && (t = t.retry(this._timesToRetryFailedRequests)), e.noHeaders) return t;
                    var r = this.headers;
                    t = t.set("Content-Type", "application/json"), e.xRequestLanguage && (t = t.set("X-Request-Language", e.xRequestLanguage));
                    for (var n = Object.keys(this.headers), o = 0; o < n.length; o++) t = t.set(n[o], r[n[o]]);
                    return this._sendTelemetry && (t = t.set("Auth0-Client", this.getTelemetryData())), t
                }, Ze.prototype.getTelemetryData = function() {
                    var t = this._universalLoginPage ? "auth0.js-ulp" : "auth0.js",
                        e = {
                            name: t,
                            version: qe.raw
                        };
                    this._telemetryInfo && ((e = Ge.extend({}, this._telemetryInfo)).env = Ge.extend({}, this._telemetryInfo.env), e.env[t] = qe.raw);
                    var r = JSON.stringify(e);
                    return Re(r)
                }, Ze.prototype.get = function(t, e) {
                    return new Qe(this.setCommonConfiguration(Se.get(t), e))
                }, Ze.prototype.post = function(t, e) {
                    return new Qe(this.setCommonConfiguration(Se.post(t), e))
                }, Ze.prototype.patch = function(t, e) {
                    return new Qe(this.setCommonConfiguration(Se.patch(t), e))
                };
                var Ye = {
                    redirect: function(t) {
                        Ke().location = t
                    },
                    getDocument: function() {
                        return Ke().document
                    },
                    getWindow: Ke,
                    getOrigin: function() {
                        var t = Ke().location,
                            e = t.origin;
                        return e || (e = Ge.getOriginFromUrl(t.href)), e
                    }
                };

                function tr() {}
                tr.prototype.getItem = function() {
                    return null
                }, tr.prototype.removeItem = function() {}, tr.prototype.setItem = function() {};
                var er = i((function(t, e) {
                    var r;
                    r = function() {
                        function t() {
                            for (var t = 0, e = {}; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) e[n] = r[n]
                            }
                            return e
                        }

                        function e(t) {
                            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                        }
                        return function r(n) {
                            function o() {}

                            function i(e, r, i) {
                                if ("undefined" != typeof document) {
                                    "number" == typeof(i = t({
                                        path: "/"
                                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                                    try {
                                        var s = JSON.stringify(r);
                                        /^[\{\[]/.test(s) && (r = s)
                                    } catch (mr) {}
                                    r = n.write ? n.write(r, e) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                    var a = "";
                                    for (var u in i) i[u] && (a += "; " + u, !0 !== i[u] && (a += "=" + i[u].split(";")[0]));
                                    return document.cookie = e + "=" + r + a
                                }
                            }

                            function s(t, r) {
                                if ("undefined" != typeof document) {
                                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], s = 0; s < i.length; s++) {
                                        var a = i[s].split("="),
                                            u = a.slice(1).join("=");
                                        r || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                                        try {
                                            var p = e(a[0]);
                                            if (u = (n.read || n)(u, p) || e(u), r) try {
                                                u = JSON.parse(u)
                                            } catch (mr) {}
                                            if (o[p] = u, t === p) break
                                        } catch (mr) {}
                                    }
                                    return t ? o[t] : o
                                }
                            }
                            return o.set = i, o.get = function(t) {
                                return s(t, !1)
                            }, o.getJSON = function(t) {
                                return s(t, !0)
                            }, o.remove = function(e, r) {
                                i(e, "", t(r, {
                                    expires: -1
                                }))
                            }, o.defaults = {}, o.withConverter = r, o
                        }((function() {}))
                    }, t.exports = r()
                }));

                function rr(t) {
                    return "_" + t + "_compat"
                }

                function nr(t) {
                    this._options = t || {}
                }

                function or(t) {
                    this.disableWarnings = t.disableWarnings
                }

                function ir(t) {
                    if (this.warn = new or({}), this.storage = new nr(t), !0 === t.__tryLocalStorageFirst) try {
                        var e = Ye.getWindow().localStorage;
                        e && (this.storage = e)
                    } catch (mr) {
                        this.warn.warning(mr), this.warn.warning("Can't use localStorage. Using CookieStorage instead.")
                    }
                }

                function sr(t) {
                    this.handler = new ir(t)
                }

                function ar(t) {
                    this.storage = new sr(t)
                }

                function ur(t, e) {
                    return {
                        error: t,
                        errorDescription: e
                    }
                }
                nr.prototype.getItem = function(t) {
                    return er.get(t) || er.get(rr(t))
                }, nr.prototype.removeItem = function(t) {
                    er.remove(t), er.remove(rr(t))
                }, nr.prototype.setItem = function(t, e, r) {
                    var n = Ge.extend({
                        expires: 1
                    }, r);
                    if ("https:" === Ye.getWindow().location.protocol && (n.secure = !0, n.sameSite = "none", this._options.legacySameSiteCookie)) {
                        var o = Ge.blacklist(n, ["sameSite"]);
                        er.set(rr(t), e, o)
                    }
                    er.set(t, e, n)
                }, or.prototype.warning = function(t) {
                    this.disableWarnings || console.warn(t)
                }, ir.prototype.failover = function() {
                    this.storage instanceof tr ? this.warn.warning("DummyStorage: ignore failover") : this.storage instanceof nr ? (this.warn.warning("CookieStorage: failing over DummyStorage"), this.storage = new tr) : (this.warn.warning("LocalStorage: failing over CookieStorage"), this.storage = new nr)
                }, ir.prototype.getItem = function(t) {
                    try {
                        return this.storage.getItem(t)
                    } catch (mr) {
                        return this.warn.warning(mr), this.failover(), this.getItem(t)
                    }
                }, ir.prototype.removeItem = function(t) {
                    try {
                        return this.storage.removeItem(t)
                    } catch (mr) {
                        return this.warn.warning(mr), this.failover(), this.removeItem(t)
                    }
                }, ir.prototype.setItem = function(t, e, r) {
                    try {
                        return this.storage.setItem(t, e, r)
                    } catch (mr) {
                        return this.warn.warning(mr), this.failover(), this.setItem(t, e, r)
                    }
                }, sr.prototype.getItem = function(t) {
                    var e = this.handler.getItem(t);
                    try {
                        return JSON.parse(e)
                    } catch (Mr) {
                        return e
                    }
                }, sr.prototype.removeItem = function(t) {
                    return this.handler.removeItem(t)
                }, sr.prototype.setItem = function(t, e, r) {
                    var n = JSON.stringify(e);
                    return this.handler.setItem(t, n, r)
                }, ar.prototype.set = function(t, e) {
                    var r = {
                        lastUsedConnection: t,
                        lastUsedSub: e
                    };
                    this.storage.setItem("auth0.ssodata", JSON.stringify(r))
                }, ar.prototype.get = function() {
                    var t = this.storage.getItem("auth0.ssodata");
                    if (t) return JSON.parse(t)
                };
                var pr = {
                    buildResponse: ur,
                    invalidToken: function(t) {
                        return ur("invalid_token", t)
                    }
                };

                function cr(t, e) {
                    return (e = e || {}).ignoreCasing = !!e.ignoreCasing && e.ignoreCasing,
                        function(r, n) {
                            var o;
                            return r || n ? (!r && n.err && (r = n.err, n = null), !r && n.error && (r = n, n = null), r ? (o = {
                                original: r
                            }, Ge.updatePropertyOn(o, "original.response.req._data.password", "*****"), r.response && r.response.statusCode && (o.statusCode = r.response.statusCode), r.response && r.response.statusText && (o.statusText = r.response.statusText), r.response && r.response.body && (r = r.response.body), r.err && (r = r.err), o.code = r.code || r.error || r.error_code || r.status || null, o.description = r.errorDescription || r.error_description || r.description || r.error || r.details || r.err || null, e.forceLegacyError && (o.error = o.code, o.error_description = o.description), r.error_codes && r.error_details && (o.errorDetails = {
                                codes: r.error_codes,
                                details: r.error_details
                            }), r.name && (o.name = r.name), r.policy && (o.policy = r.policy), t(o)) : !n.type || "text/html" !== n.type && "text/plain" !== n.type ? e.ignoreCasing ? t(null, n.body || n) : t(null, Ge.toCamelCase(n.body || n, [], {
                                keepOriginal: e.keepOriginalCasing
                            })) : t(null, n.text)) : t(pr.buildResponse("generic_error", "Something went wrong"))
                        }
                }
                var lr = ["realm", "audience", "otp", "client_id", "client_secret", "redirect_uri", "scope", "code", "grant_type", "username", "password", "refresh_token", "assertion", "client_assertion", "client_assertion_type", "code_verifier"],
                    hr = ["connection", "connection_scope", "auth0Client", "owp", "device", "realm", "organization", "invitation", "protocol", "_csrf", "_intstate", "login_ticket", "client_id", "response_type", "response_mode", "redirect_uri", "audience", "scope", "state", "nonce", "display", "prompt", "screen_hint", "max_age", "ui_locales", "claims_locales", "id_token_hint", "login_hint", "acr_values", "claims", "registration", "request", "request_uri", "code_challenge", "code_challenge_method", "access_type", "display"],
                    fr = function(t, e) {
                        return Ge.pick(e, lr)
                    },
                    dr = function(t, e) {
                        var r = Ge.getKeysNotIn(e, hr);
                        return r.length > 0 && t.warning("Following parameters are not allowed on the `/authorize` endpoint: [" + r.join(",") + "]"), e
                    },
                    yr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};

                function mr(t) {
                    var e = {
                        exports: {}
                    };
                    return t(e, e.exports), e.exports
                }
                var gr = mr((function(t, e) {
                        t.exports = function() {
                            function t(t) {
                                return "function" == typeof t
                            }
                            var e = Array.isArray ? Array.isArray : function(t) {
                                    return "[object Array]" === Object.prototype.toString.call(t)
                                },
                                r = 0,
                                o = void 0,
                                i = void 0,
                                s = function(t, e) {
                                    f[r] = t, f[r + 1] = e, 2 === (r += 2) && (i ? i(d) : b())
                                },
                                a = "undefined" != typeof window ? window : void 0,
                                u = a || {},
                                p = u.MutationObserver || u.WebKitMutationObserver,
                                c = "undefined" == typeof self && "undefined" != typeof n && "[object process]" === {}.toString.call(n),
                                l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                            function h() {
                                var t = setTimeout;
                                return function() {
                                    return t(d, 1)
                                }
                            }
                            var f = new Array(1e3);

                            function d() {
                                for (var t = 0; t < r; t += 2)(0, f[t])(f[t + 1]), f[t] = void 0, f[t + 1] = void 0;
                                r = 0
                            }
                            var y, m, g, v, b = void 0;

                            function w(t, e) {
                                var r = this,
                                    n = new this.constructor(T);
                                void 0 === n[O] && R(n);
                                var o = r._state;
                                if (o) {
                                    var i = arguments[o - 1];
                                    s((function() {
                                        return I(o, n, i, r._result)
                                    }))
                                } else C(r, n, t, e);
                                return n
                            }

                            function _(t) {
                                if (t && "object" == typeof t && t.constructor === this) return t;
                                var e = new this(T);
                                return A(e, t), e
                            }
                            b = c ? function() {
                                return n.nextTick(d)
                            } : p ? (m = 0, g = new p(d), v = document.createTextNode(""), g.observe(v, {
                                characterData: !0
                            }), function() {
                                v.data = m = ++m % 2
                            }) : l ? ((y = new MessageChannel).port1.onmessage = d, function() {
                                return y.port2.postMessage(0)
                            }) : void 0 === a ? function() {
                                try {
                                    var t = Function("return this")().require("vertx");
                                    return void 0 !== (o = t.runOnLoop || t.runOnContext) ? function() {
                                        o(d)
                                    } : h()
                                } catch (t) {
                                    return h()
                                }
                            }() : h();
                            var O = Math.random().toString(36).substring(2);

                            function T() {}
                            var k = void 0;

                            function S(e, r, n) {
                                r.constructor === e.constructor && n === w && r.constructor.resolve === _ ? function(t, e) {
                                    1 === e._state ? x(t, e._result) : 2 === e._state ? E(t, e._result) : C(e, void 0, (function(e) {
                                        return A(t, e)
                                    }), (function(e) {
                                        return E(t, e)
                                    }))
                                }(e, r) : void 0 === n ? x(e, r) : t(n) ? function(t, e, r) {
                                    s((function(t) {
                                        var n = !1,
                                            o = function(r, o, i, s) {
                                                try {
                                                    r.call(o, (function(r) {
                                                        n || (n = !0, e !== r ? A(t, r) : x(t, r))
                                                    }), (function(e) {
                                                        n || (n = !0, E(t, e))
                                                    }))
                                                } catch (t) {
                                                    return t
                                                }
                                            }(r, e);
                                        !n && o && (n = !0, E(t, o))
                                    }), t)
                                }(e, r, n) : x(e, r)
                            }

                            function A(t, e) {
                                if (t === e) E(t, new TypeError("You cannot resolve a promise with itself"));
                                else if (o = typeof(n = e), null === n || "object" !== o && "function" !== o) x(t, e);
                                else {
                                    var r = void 0;
                                    try {
                                        r = e.then
                                    } catch (e) {
                                        return void E(t, e)
                                    }
                                    S(t, e, r)
                                }
                                var n, o
                            }

                            function j(t) {
                                t._onerror && t._onerror(t._result), D(t)
                            }

                            function x(t, e) {
                                t._state === k && (t._result = e, t._state = 1, 0 !== t._subscribers.length && s(D, t))
                            }

                            function E(t, e) {
                                t._state === k && (t._state = 2, t._result = e, s(j, t))
                            }

                            function C(t, e, r, n) {
                                var o = t._subscribers,
                                    i = o.length;
                                t._onerror = null, o[i] = e, o[i + 1] = r, o[i + 2] = n, 0 === i && t._state && s(D, t)
                            }

                            function D(t) {
                                var e = t._subscribers,
                                    r = t._state;
                                if (0 !== e.length) {
                                    for (var n = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) o = e[s + r], (n = e[s]) ? I(r, n, o, i) : o(i);
                                    t._subscribers.length = 0
                                }
                            }

                            function I(e, r, n, o) {
                                var i = t(n),
                                    s = void 0,
                                    a = void 0,
                                    u = !0;
                                if (i) {
                                    try {
                                        s = n(o)
                                    } catch (e) {
                                        u = !1, a = e
                                    }
                                    if (r === s) return void E(r, new TypeError("A promises callback cannot return that same promise."))
                                } else s = o;
                                r._state !== k || (i && u ? A(r, s) : !1 === u ? E(r, a) : 1 === e ? x(r, s) : 2 === e && E(r, s))
                            }
                            var P = 0;

                            function R(t) {
                                t[O] = P++, t._state = void 0, t._result = void 0, t._subscribers = []
                            }
                            var q = function() {
                                    function t(t, r) {
                                        this._instanceConstructor = t, this.promise = new t(T), this.promise[O] || R(this.promise), e(r) ? (this.length = r.length, this._remaining = r.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(r), 0 === this._remaining && x(this.promise, this._result))) : E(this.promise, new Error("Array Methods must be provided an Array"))
                                    }
                                    return t.prototype._enumerate = function(t) {
                                        for (var e = 0; this._state === k && e < t.length; e++) this._eachEntry(t[e], e)
                                    }, t.prototype._eachEntry = function(t, e) {
                                        var r = this._instanceConstructor,
                                            n = r.resolve;
                                        if (n === _) {
                                            var o = void 0,
                                                i = void 0,
                                                s = !1;
                                            try {
                                                o = t.then
                                            } catch (t) {
                                                s = !0, i = t
                                            }
                                            if (o === w && t._state !== k) this._settledAt(t._state, e, t._result);
                                            else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                                            else if (r === U) {
                                                var a = new r(T);
                                                s ? E(a, i) : S(a, t, o), this._willSettleAt(a, e)
                                            } else this._willSettleAt(new r((function(e) {
                                                return e(t)
                                            })), e)
                                        } else this._willSettleAt(n(t), e)
                                    }, t.prototype._settledAt = function(t, e, r) {
                                        var n = this.promise;
                                        n._state === k && (this._remaining--, 2 === t ? E(n, r) : this._result[e] = r), 0 === this._remaining && x(n, this._result)
                                    }, t.prototype._willSettleAt = function(t, e) {
                                        var r = this;
                                        C(t, void 0, (function(t) {
                                            return r._settledAt(1, e, t)
                                        }), (function(t) {
                                            return r._settledAt(2, e, t)
                                        }))
                                    }, t
                                }(),
                                U = function() {
                                    function e(t) {
                                        this[O] = P++, this._result = this._state = void 0, this._subscribers = [], T !== t && ("function" != typeof t && function() {
                                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                        }(), this instanceof e ? function(t, e) {
                                            try {
                                                e((function(e) {
                                                    A(t, e)
                                                }), (function(e) {
                                                    E(t, e)
                                                }))
                                            } catch (e) {
                                                E(t, e)
                                            }
                                        }(this, t) : function() {
                                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                        }())
                                    }
                                    return e.prototype.catch = function(t) {
                                        return this.then(null, t)
                                    }, e.prototype.finally = function(e) {
                                        var r = this,
                                            n = r.constructor;
                                        return t(e) ? r.then((function(t) {
                                            return n.resolve(e()).then((function() {
                                                return t
                                            }))
                                        }), (function(t) {
                                            return n.resolve(e()).then((function() {
                                                throw t
                                            }))
                                        })) : r.then(e, e)
                                    }, e
                                }();
                            return U.prototype.then = w, U.all = function(t) {
                                return new q(this, t).promise
                            }, U.race = function(t) {
                                var r = this;
                                return e(t) ? new r((function(e, n) {
                                    for (var o = t.length, i = 0; i < o; i++) r.resolve(t[i]).then(e, n)
                                })) : new r((function(t, e) {
                                    return e(new TypeError("You must pass an array to race."))
                                }))
                            }, U.resolve = _, U.reject = function(t) {
                                var e = new this(T);
                                return E(e, t), e
                            }, U._setScheduler = function(t) {
                                i = t
                            }, U._setAsap = function(t) {
                                s = t
                            }, U._asap = s, U.polyfill = function() {
                                var t = void 0;
                                if (void 0 !== yr) t = yr;
                                else if ("undefined" != typeof self) t = self;
                                else try {
                                    t = Function("return this")()
                                } catch (yr) {
                                    throw new Error("polyfill failed because global object is unavailable in this environment")
                                }
                                var e = t.Promise;
                                if (e) {
                                    var r = null;
                                    try {
                                        r = Object.prototype.toString.call(e.resolve())
                                    } catch (yr) {}
                                    if ("[object Promise]" === r && !e.cast) return
                                }
                                t.Promise = U
                            }, U.Promise = U, U
                        }()
                    })),
                    vr = {
                        __proto__: null,
                        default: {}
                    },
                    br = mr((function(t, e) {
                        var r;
                        t.exports = r = r || function(t, e) {
                            var r;
                            if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== yr && yr.crypto && (r = yr.crypto), !r) try {
                                r = vr
                            } catch (yr) {}
                            var n = function() {
                                    if (r) {
                                        if ("function" == typeof r.getRandomValues) try {
                                            return r.getRandomValues(new Uint32Array(1))[0]
                                        } catch (yr) {}
                                        if ("function" == typeof r.randomBytes) try {
                                            return r.randomBytes(4).readInt32LE()
                                        } catch (yr) {}
                                    }
                                    throw new Error("Native crypto module could not be used to get secure random number.")
                                },
                                o = Object.create || function() {
                                    function t() {}
                                    return function(e) {
                                        var r;
                                        return t.prototype = e, r = new t, t.prototype = null, r
                                    }
                                }(),
                                i = {},
                                s = i.lib = {},
                                a = s.Base = {
                                    extend: function(t) {
                                        var e = o(this);
                                        return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                            e.$super.init.apply(this, arguments)
                                        }), e.init.prototype = e, e.$super = this, e
                                    },
                                    create: function() {
                                        var t = this.extend();
                                        return t.init.apply(t, arguments), t
                                    },
                                    init: function() {},
                                    mixIn: function(t) {
                                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                                    },
                                    clone: function() {
                                        return this.init.prototype.extend(this)
                                    }
                                },
                                u = s.WordArray = a.extend({
                                    init: function(t, e) {
                                        t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
                                    },
                                    toString: function(t) {
                                        return (t || c).stringify(this)
                                    },
                                    concat: function(t) {
                                        var e = this.words,
                                            r = t.words,
                                            n = this.sigBytes,
                                            o = t.sigBytes;
                                        if (this.clamp(), n % 4)
                                            for (var i = 0; i < o; i++) e[n + i >>> 2] |= (r[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (n + i) % 4 * 8;
                                        else
                                            for (var s = 0; s < o; s += 4) e[n + s >>> 2] = r[s >>> 2];
                                        return this.sigBytes += o, this
                                    },
                                    clamp: function() {
                                        var e = this.words,
                                            r = this.sigBytes;
                                        e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4)
                                    },
                                    clone: function() {
                                        var t = a.clone.call(this);
                                        return t.words = this.words.slice(0), t
                                    },
                                    random: function(t) {
                                        for (var e = [], r = 0; r < t; r += 4) e.push(n());
                                        return new u.init(e, t)
                                    }
                                }),
                                p = i.enc = {},
                                c = p.Hex = {
                                    stringify: function(t) {
                                        for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) {
                                            var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                            n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16))
                                        }
                                        return n.join("")
                                    },
                                    parse: function(t) {
                                        for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                                        return new u.init(r, e / 2)
                                    }
                                },
                                l = p.Latin1 = {
                                    stringify: function(t) {
                                        for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) n.push(String.fromCharCode(e[o >>> 2] >>> 24 - o % 4 * 8 & 255));
                                        return n.join("")
                                    },
                                    parse: function(t) {
                                        for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                                        return new u.init(r, e)
                                    }
                                },
                                h = p.Utf8 = {
                                    stringify: function(t) {
                                        try {
                                            return decodeURIComponent(escape(l.stringify(t)))
                                        } catch (t) {
                                            throw new Error("Malformed UTF-8 data")
                                        }
                                    },
                                    parse: function(t) {
                                        return l.parse(unescape(encodeURIComponent(t)))
                                    }
                                },
                                f = s.BufferedBlockAlgorithm = a.extend({
                                    reset: function() {
                                        this._data = new u.init, this._nDataBytes = 0
                                    },
                                    _append: function(t) {
                                        "string" == typeof t && (t = h.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                                    },
                                    _process: function(e) {
                                        var r, n = this._data,
                                            o = n.words,
                                            i = n.sigBytes,
                                            s = this.blockSize,
                                            a = i / (4 * s),
                                            p = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s,
                                            c = t.min(4 * p, i);
                                        if (p) {
                                            for (var l = 0; l < p; l += s) this._doProcessBlock(o, l);
                                            r = o.splice(0, p), n.sigBytes -= c
                                        }
                                        return new u.init(r, c)
                                    },
                                    clone: function() {
                                        var t = a.clone.call(this);
                                        return t._data = this._data.clone(), t
                                    },
                                    _minBufferSize: 0
                                });
                            s.Hasher = f.extend({
                                cfg: a.extend(),
                                init: function(t) {
                                    this.cfg = this.cfg.extend(t), this.reset()
                                },
                                reset: function() {
                                    f.reset.call(this), this._doReset()
                                },
                                update: function(t) {
                                    return this._append(t), this._process(), this
                                },
                                finalize: function(t) {
                                    return t && this._append(t), this._doFinalize()
                                },
                                blockSize: 16,
                                _createHelper: function(t) {
                                    return function(e, r) {
                                        return new t.init(r).finalize(e)
                                    }
                                },
                                _createHmacHelper: function(t) {
                                    return function(e, r) {
                                        return new d.HMAC.init(t, r).finalize(e)
                                    }
                                }
                            });
                            var d = i.algo = {};
                            return i
                        }(Math)
                    })),
                    wr = mr((function(t, e) {
                        var r;
                        t.exports = (r = br, function(t) {
                            var e = r,
                                n = e.lib,
                                o = n.WordArray,
                                i = n.Hasher,
                                s = e.algo,
                                a = [],
                                u = [];
                            ! function() {
                                function e(e) {
                                    for (var r = t.sqrt(e), n = 2; n <= r; n++)
                                        if (!(e % n)) return !1;
                                    return !0
                                }

                                function r(t) {
                                    return 4294967296 * (t - (0 | t)) | 0
                                }
                                for (var n = 2, o = 0; o < 64;) e(n) && (o < 8 && (a[o] = r(t.pow(n, .5))), u[o] = r(t.pow(n, 1 / 3)), o++), n++
                            }();
                            var p = [],
                                c = s.SHA256 = i.extend({
                                    _doReset: function() {
                                        this._hash = new o.init(a.slice(0))
                                    },
                                    _doProcessBlock: function(t, e) {
                                        for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], s = r[3], a = r[4], c = r[5], l = r[6], h = r[7], f = 0; f < 64; f++) {
                                            if (f < 16) p[f] = 0 | t[e + f];
                                            else {
                                                var d = p[f - 15],
                                                    y = p[f - 2];
                                                p[f] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + p[f - 7] + ((y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10) + p[f - 16]
                                            }
                                            var m = n & o ^ n & i ^ o & i,
                                                g = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & l) + u[f] + p[f];
                                            h = l, l = c, c = a, a = s + g | 0, s = i, i = o, o = n, n = g + (((n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)) + m) | 0
                                        }
                                        r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + s | 0, r[4] = r[4] + a | 0, r[5] = r[5] + c | 0, r[6] = r[6] + l | 0, r[7] = r[7] + h | 0
                                    },
                                    _doFinalize: function() {
                                        var e = this._data,
                                            r = e.words,
                                            n = 8 * this._nDataBytes,
                                            o = 8 * e.sigBytes;
                                        return r[o >>> 5] |= 128 << 24 - o % 32, r[14 + (o + 64 >>> 9 << 4)] = t.floor(n / 4294967296), r[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash
                                    },
                                    clone: function() {
                                        var t = i.clone.call(this);
                                        return t._hash = this._hash.clone(), t
                                    }
                                });
                            e.SHA256 = i._createHelper(c), e.HmacSHA256 = i._createHmacHelper(c)
                        }(Math), r.SHA256)
                    })),
                    _r = mr((function(t, e) {
                        var r, n;
                        t.exports = (n = (r = br).lib.WordArray, r.enc.Base64 = {
                            stringify: function(t) {
                                var e = t.words,
                                    r = t.sigBytes,
                                    n = this._map;
                                t.clamp();
                                for (var o = [], i = 0; i < r; i += 3)
                                    for (var s = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < r; a++) o.push(n.charAt(s >>> 6 * (3 - a) & 63));
                                var u = n.charAt(64);
                                if (u)
                                    for (; o.length % 4;) o.push(u);
                                return o.join("")
                            },
                            parse: function(t) {
                                var e = t.length,
                                    r = this._map,
                                    o = this._reverseMap;
                                if (!o) {
                                    o = this._reverseMap = [];
                                    for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i
                                }
                                var s = r.charAt(64);
                                if (s) {
                                    var a = t.indexOf(s); - 1 !== a && (e = a)
                                }
                                return function(t, e, r) {
                                    for (var o = [], i = 0, s = 0; s < e; s++)
                                        if (s % 4) {
                                            var a = r[t.charCodeAt(s - 1)] << s % 4 * 2,
                                                u = r[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                                            o[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++
                                        }
                                    return n.create(o, i)
                                }(t, e, o)
                            },
                            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }, r.enc.Base64)
                    })),
                    Or = mr((function(t, e) {
                        t.exports = br.enc.Hex
                    })),
                    Tr = mr((function(t, e) {
                        (function() {
                            var e;

                            function r(t, e, r) {
                                null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : this.fromString(t, null == e && "string" != typeof t ? 256 : e))
                            }

                            function n() {
                                return new r(null)
                            }
                            var o = "undefined" != typeof navigator;
                            o && "Microsoft Internet Explorer" == navigator.appName ? (r.prototype.am = function(t, e, r, n, o, i) {
                                for (var s = 32767 & e, a = e >> 15; --i >= 0;) {
                                    var u = 32767 & this[t],
                                        p = this[t++] >> 15,
                                        c = a * u + p * s;
                                    o = ((u = s * u + ((32767 & c) << 15) + r[n] + (1073741823 & o)) >>> 30) + (c >>> 15) + a * p + (o >>> 30), r[n++] = 1073741823 & u
                                }
                                return o
                            }, e = 30) : o && "Netscape" != navigator.appName ? (r.prototype.am = function(t, e, r, n, o, i) {
                                for (; --i >= 0;) {
                                    var s = e * this[t++] + r[n] + o;
                                    o = Math.floor(s / 67108864), r[n++] = 67108863 & s
                                }
                                return o
                            }, e = 26) : (r.prototype.am = function(t, e, r, n, o, i) {
                                for (var s = 16383 & e, a = e >> 14; --i >= 0;) {
                                    var u = 16383 & this[t],
                                        p = this[t++] >> 14,
                                        c = a * u + p * s;
                                    o = ((u = s * u + ((16383 & c) << 14) + r[n] + o) >> 28) + (c >> 14) + a * p, r[n++] = 268435455 & u
                                }
                                return o
                            }, e = 28), r.prototype.DB = e, r.prototype.DM = (1 << e) - 1, r.prototype.DV = 1 << e, r.prototype.FV = Math.pow(2, 52), r.prototype.F1 = 52 - e, r.prototype.F2 = 2 * e - 52;
                            var i, s, a = new Array;
                            for (i = "0".charCodeAt(0), s = 0; s <= 9; ++s) a[i++] = s;
                            for (i = "a".charCodeAt(0), s = 10; s < 36; ++s) a[i++] = s;
                            for (i = "A".charCodeAt(0), s = 10; s < 36; ++s) a[i++] = s;

                            function u(t) {
                                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                            }

                            function p(t, e) {
                                var r = a[t.charCodeAt(e)];
                                return null == r ? -1 : r
                            }

                            function c(t) {
                                var e = n();
                                return e.fromInt(t), e
                            }

                            function l(t) {
                                var e, r = 1;
                                return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
                            }

                            function h(t) {
                                this.m = t
                            }

                            function f(t) {
                                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                            }

                            function d(t, e) {
                                return t & e
                            }

                            function y(t, e) {
                                return t | e
                            }

                            function m(t, e) {
                                return t ^ e
                            }

                            function g(t, e) {
                                return t & ~e
                            }

                            function v(t) {
                                if (0 == t) return -1;
                                var e = 0;
                                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
                            }

                            function b(t) {
                                for (var e = 0; 0 != t;) t &= t - 1, ++e;
                                return e
                            }

                            function w() {}

                            function _(t) {
                                return t
                            }

                            function O(t) {
                                this.r2 = n(), this.q3 = n(), r.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
                            }
                            h.prototype.convert = function(t) {
                                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                            }, h.prototype.revert = function(t) {
                                return t
                            }, h.prototype.reduce = function(t) {
                                t.divRemTo(this.m, null, t)
                            }, h.prototype.mulTo = function(t, e, r) {
                                t.multiplyTo(e, r), this.reduce(r)
                            }, h.prototype.sqrTo = function(t, e) {
                                t.squareTo(e), this.reduce(e)
                            }, f.prototype.convert = function(t) {
                                var e = n();
                                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(r.ZERO) > 0 && this.m.subTo(e, e), e
                            }, f.prototype.revert = function(t) {
                                var e = n();
                                return t.copyTo(e), this.reduce(e), e
                            }, f.prototype.reduce = function(t) {
                                for (; t.t <= this.mt2;) t[t.t++] = 0;
                                for (var e = 0; e < this.m.t; ++e) {
                                    var r = 32767 & t[e],
                                        n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                                    for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
                                }
                                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                            }, f.prototype.mulTo = function(t, e, r) {
                                t.multiplyTo(e, r), this.reduce(r)
                            }, f.prototype.sqrTo = function(t, e) {
                                t.squareTo(e), this.reduce(e)
                            }, r.prototype.copyTo = function(t) {
                                for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                                t.t = this.t, t.s = this.s
                            }, r.prototype.fromInt = function(t) {
                                this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                            }, r.prototype.fromString = function(t, e) {
                                var n;
                                if (16 == e) n = 4;
                                else if (8 == e) n = 3;
                                else if (256 == e) n = 8;
                                else if (2 == e) n = 1;
                                else if (32 == e) n = 5;
                                else {
                                    if (4 != e) return void this.fromRadix(t, e);
                                    n = 2
                                }
                                this.t = 0, this.s = 0;
                                for (var o = t.length, i = !1, s = 0; --o >= 0;) {
                                    var a = 8 == n ? 255 & t[o] : p(t, o);
                                    a < 0 ? "-" == t.charAt(o) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += n) >= this.DB && (s -= this.DB))
                                }
                                8 == n && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && r.ZERO.subTo(this, this)
                            }, r.prototype.clamp = function() {
                                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
                            }, r.prototype.dlShiftTo = function(t, e) {
                                var r;
                                for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                                for (r = t - 1; r >= 0; --r) e[r] = 0;
                                e.t = this.t + t, e.s = this.s
                            }, r.prototype.drShiftTo = function(t, e) {
                                for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                                e.t = Math.max(this.t - t, 0), e.s = this.s
                            }, r.prototype.lShiftTo = function(t, e) {
                                var r, n = t % this.DB,
                                    o = this.DB - n,
                                    i = (1 << o) - 1,
                                    s = Math.floor(t / this.DB),
                                    a = this.s << n & this.DM;
                                for (r = this.t - 1; r >= 0; --r) e[r + s + 1] = this[r] >> o | a, a = (this[r] & i) << n;
                                for (r = s - 1; r >= 0; --r) e[r] = 0;
                                e[s] = a, e.t = this.t + s + 1, e.s = this.s, e.clamp()
                            }, r.prototype.rShiftTo = function(t, e) {
                                e.s = this.s;
                                var r = Math.floor(t / this.DB);
                                if (r >= this.t) e.t = 0;
                                else {
                                    var n = t % this.DB,
                                        o = this.DB - n,
                                        i = (1 << n) - 1;
                                    e[0] = this[r] >> n;
                                    for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & i) << o, e[s - r] = this[s] >> n;
                                    n > 0 && (e[this.t - r - 1] |= (this.s & i) << o), e.t = this.t - r, e.clamp()
                                }
                            }, r.prototype.subTo = function(t, e) {
                                for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
                                if (t.t < this.t) {
                                    for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                                    n += this.s
                                } else {
                                    for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
                                    n -= t.s
                                }
                                e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : n > 0 && (e[r++] = n), e.t = r, e.clamp()
                            }, r.prototype.multiplyTo = function(t, e) {
                                var n = this.abs(),
                                    o = t.abs(),
                                    i = n.t;
                                for (e.t = i + o.t; --i >= 0;) e[i] = 0;
                                for (i = 0; i < o.t; ++i) e[i + n.t] = n.am(0, o[i], e, i, 0, n.t);
                                e.s = 0, e.clamp(), this.s != t.s && r.ZERO.subTo(e, e)
                            }, r.prototype.squareTo = function(t) {
                                for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
                                for (r = 0; r < e.t - 1; ++r) {
                                    var n = e.am(r, e[r], t, 2 * r, 0, 1);
                                    (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                                }
                                t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
                            }, r.prototype.divRemTo = function(t, e, o) {
                                var i = t.abs();
                                if (!(i.t <= 0)) {
                                    var s = this.abs();
                                    if (s.t < i.t) return null != e && e.fromInt(0), void(null != o && this.copyTo(o));
                                    null == o && (o = n());
                                    var a = n(),
                                        u = this.s,
                                        p = t.s,
                                        c = this.DB - l(i[i.t - 1]);
                                    c > 0 ? (i.lShiftTo(c, a), s.lShiftTo(c, o)) : (i.copyTo(a), s.copyTo(o));
                                    var h = a.t,
                                        f = a[h - 1];
                                    if (0 != f) {
                                        var d = f * (1 << this.F1) + (h > 1 ? a[h - 2] >> this.F2 : 0),
                                            y = this.FV / d,
                                            m = (1 << this.F1) / d,
                                            g = 1 << this.F2,
                                            v = o.t,
                                            b = v - h,
                                            w = null == e ? n() : e;
                                        for (a.dlShiftTo(b, w), o.compareTo(w) >= 0 && (o[o.t++] = 1, o.subTo(w, o)), r.ONE.dlShiftTo(h, w), w.subTo(a, a); a.t < h;) a[a.t++] = 0;
                                        for (; --b >= 0;) {
                                            var _ = o[--v] == f ? this.DM : Math.floor(o[v] * y + (o[v - 1] + g) * m);
                                            if ((o[v] += a.am(0, _, o, b, 0, h)) < _)
                                                for (a.dlShiftTo(b, w), o.subTo(w, o); o[v] < --_;) o.subTo(w, o)
                                        }
                                        null != e && (o.drShiftTo(h, e), u != p && r.ZERO.subTo(e, e)), o.t = h, o.clamp(), c > 0 && o.rShiftTo(c, o), u < 0 && r.ZERO.subTo(o, o)
                                    }
                                }
                            }, r.prototype.invDigit = function() {
                                if (this.t < 1) return 0;
                                var t = this[0];
                                if (0 == (1 & t)) return 0;
                                var e = 3 & t;
                                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                            }, r.prototype.isEven = function() {
                                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                            }, r.prototype.exp = function(t, e) {
                                if (t > 4294967295 || t < 1) return r.ONE;
                                var o = n(),
                                    i = n(),
                                    s = e.convert(this),
                                    a = l(t) - 1;
                                for (s.copyTo(o); --a >= 0;)
                                    if (e.sqrTo(o, i), (t & 1 << a) > 0) e.mulTo(i, s, o);
                                    else {
                                        var u = o;
                                        o = i, i = u
                                    }
                                return e.revert(o)
                            }, r.prototype.toString = function(t) {
                                if (this.s < 0) return "-" + this.negate().toString(t);
                                var e;
                                if (16 == t) e = 4;
                                else if (8 == t) e = 3;
                                else if (2 == t) e = 1;
                                else if (32 == t) e = 5;
                                else {
                                    if (4 != t) return this.toRadix(t);
                                    e = 2
                                }
                                var r, n = (1 << e) - 1,
                                    o = !1,
                                    i = "",
                                    s = this.t,
                                    a = this.DB - s * this.DB % e;
                                if (s-- > 0)
                                    for (a < this.DB && (r = this[s] >> a) > 0 && (o = !0, i = u(r)); s >= 0;) a < e ? (r = (this[s] & (1 << a) - 1) << e - a, r |= this[--s] >> (a += this.DB - e)) : (r = this[s] >> (a -= e) & n, a <= 0 && (a += this.DB, --s)), r > 0 && (o = !0), o && (i += u(r));
                                return o ? i : "0"
                            }, r.prototype.negate = function() {
                                var t = n();
                                return r.ZERO.subTo(this, t), t
                            }, r.prototype.abs = function() {
                                return this.s < 0 ? this.negate() : this
                            }, r.prototype.compareTo = function(t) {
                                var e = this.s - t.s;
                                if (0 != e) return e;
                                var r = this.t;
                                if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                                for (; --r >= 0;)
                                    if (0 != (e = this[r] - t[r])) return e;
                                return 0
                            }, r.prototype.bitLength = function() {
                                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
                            }, r.prototype.mod = function(t) {
                                var e = n();
                                return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(r.ZERO) > 0 && t.subTo(e, e), e
                            }, r.prototype.modPowInt = function(t, e) {
                                var r;
                                return r = t < 256 || e.isEven() ? new h(e) : new f(e), this.exp(t, r)
                            }, r.ZERO = c(0), r.ONE = c(1), w.prototype.convert = _, w.prototype.revert = _, w.prototype.mulTo = function(t, e, r) {
                                t.multiplyTo(e, r)
                            }, w.prototype.sqrTo = function(t, e) {
                                t.squareTo(e)
                            }, O.prototype.convert = function(t) {
                                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                                if (t.compareTo(this.m) < 0) return t;
                                var e = n();
                                return t.copyTo(e), this.reduce(e), e
                            }, O.prototype.revert = function(t) {
                                return t
                            }, O.prototype.reduce = function(t) {
                                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
                            }, O.prototype.mulTo = function(t, e, r) {
                                t.multiplyTo(e, r), this.reduce(r)
                            }, O.prototype.sqrTo = function(t, e) {
                                t.squareTo(e), this.reduce(e)
                            };
                            var T, k, S, A = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                                j = (1 << 26) / A[A.length - 1];

                            function x() {
                                var t;
                                t = (new Date).getTime(), k[S++] ^= 255 & t, k[S++] ^= t >> 8 & 255, k[S++] ^= t >> 16 & 255, k[S++] ^= t >> 24 & 255, S >= q && (S -= q)
                            }
                            if (r.prototype.chunkSize = function(t) {
                                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                                }, r.prototype.toRadix = function(t) {
                                    if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                                    var e = this.chunkSize(t),
                                        r = Math.pow(t, e),
                                        o = c(r),
                                        i = n(),
                                        s = n(),
                                        a = "";
                                    for (this.divRemTo(o, i, s); i.signum() > 0;) a = (r + s.intValue()).toString(t).substr(1) + a, i.divRemTo(o, i, s);
                                    return s.intValue().toString(t) + a
                                }, r.prototype.fromRadix = function(t, e) {
                                    this.fromInt(0), null == e && (e = 10);
                                    for (var n = this.chunkSize(e), o = Math.pow(e, n), i = !1, s = 0, a = 0, u = 0; u < t.length; ++u) {
                                        var c = p(t, u);
                                        c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (i = !0) : (a = e * a + c, ++s >= n && (this.dMultiply(o), this.dAddOffset(a, 0), s = 0, a = 0))
                                    }
                                    s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), i && r.ZERO.subTo(this, this)
                                }, r.prototype.fromNumber = function(t, e, n) {
                                    if ("number" == typeof e)
                                        if (t < 2) this.fromInt(1);
                                        else
                                            for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(r.ONE.shiftLeft(t - 1), y, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(r.ONE.shiftLeft(t - 1), this);
                                    else {
                                        var o = new Array,
                                            i = 7 & t;
                                        o.length = 1 + (t >> 3), e.nextBytes(o), i > 0 ? o[0] &= (1 << i) - 1 : o[0] = 0, this.fromString(o, 256)
                                    }
                                }, r.prototype.bitwiseTo = function(t, e, r) {
                                    var n, o, i = Math.min(t.t, this.t);
                                    for (n = 0; n < i; ++n) r[n] = e(this[n], t[n]);
                                    if (t.t < this.t) {
                                        for (o = t.s & this.DM, n = i; n < this.t; ++n) r[n] = e(this[n], o);
                                        r.t = this.t
                                    } else {
                                        for (o = this.s & this.DM, n = i; n < t.t; ++n) r[n] = e(o, t[n]);
                                        r.t = t.t
                                    }
                                    r.s = e(this.s, t.s), r.clamp()
                                }, r.prototype.changeBit = function(t, e) {
                                    var n = r.ONE.shiftLeft(t);
                                    return this.bitwiseTo(n, e, n), n
                                }, r.prototype.addTo = function(t, e) {
                                    for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] + t[r], e[r++] = n & this.DM, n >>= this.DB;
                                    if (t.t < this.t) {
                                        for (n += t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                                        n += this.s
                                    } else {
                                        for (n += this.s; r < t.t;) n += t[r], e[r++] = n & this.DM, n >>= this.DB;
                                        n += t.s
                                    }
                                    e.s = n < 0 ? -1 : 0, n > 0 ? e[r++] = n : n < -1 && (e[r++] = this.DV + n), e.t = r, e.clamp()
                                }, r.prototype.dMultiply = function(t) {
                                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                                }, r.prototype.dAddOffset = function(t, e) {
                                    if (0 != t) {
                                        for (; this.t <= e;) this[this.t++] = 0;
                                        for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                                    }
                                }, r.prototype.multiplyLowerTo = function(t, e, r) {
                                    var n, o = Math.min(this.t + t.t, e);
                                    for (r.s = 0, r.t = o; o > 0;) r[--o] = 0;
                                    for (n = r.t - this.t; o < n; ++o) r[o + this.t] = this.am(0, t[o], r, o, 0, this.t);
                                    for (n = Math.min(t.t, e); o < n; ++o) this.am(0, t[o], r, o, 0, e - o);
                                    r.clamp()
                                }, r.prototype.multiplyUpperTo = function(t, e, r) {
                                    --e;
                                    var n = r.t = this.t + t.t - e;
                                    for (r.s = 0; --n >= 0;) r[n] = 0;
                                    for (n = Math.max(e - this.t, 0); n < t.t; ++n) r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
                                    r.clamp(), r.drShiftTo(1, r)
                                }, r.prototype.modInt = function(t) {
                                    if (t <= 0) return 0;
                                    var e = this.DV % t,
                                        r = this.s < 0 ? t - 1 : 0;
                                    if (this.t > 0)
                                        if (0 == e) r = this[0] % t;
                                        else
                                            for (var n = this.t - 1; n >= 0; --n) r = (e * r + this[n]) % t;
                                    return r
                                }, r.prototype.millerRabin = function(t) {
                                    var e = this.subtract(r.ONE),
                                        o = e.getLowestSetBit();
                                    if (o <= 0) return !1;
                                    var i = e.shiftRight(o);
                                    (t = t + 1 >> 1) > A.length && (t = A.length);
                                    for (var s = n(), a = 0; a < t; ++a) {
                                        s.fromInt(A[Math.floor(Math.random() * A.length)]);
                                        var u = s.modPow(i, this);
                                        if (0 != u.compareTo(r.ONE) && 0 != u.compareTo(e)) {
                                            for (var p = 1; p++ < o && 0 != u.compareTo(e);)
                                                if (0 == (u = u.modPowInt(2, this)).compareTo(r.ONE)) return !1;
                                            if (0 != u.compareTo(e)) return !1
                                        }
                                    }
                                    return !0
                                }, r.prototype.clone = function() {
                                    var t = n();
                                    return this.copyTo(t), t
                                }, r.prototype.intValue = function() {
                                    if (this.s < 0) {
                                        if (1 == this.t) return this[0] - this.DV;
                                        if (0 == this.t) return -1
                                    } else {
                                        if (1 == this.t) return this[0];
                                        if (0 == this.t) return 0
                                    }
                                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                                }, r.prototype.byteValue = function() {
                                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                                }, r.prototype.shortValue = function() {
                                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                                }, r.prototype.signum = function() {
                                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                                }, r.prototype.toByteArray = function() {
                                    var t = this.t,
                                        e = new Array;
                                    e[0] = this.s;
                                    var r, n = this.DB - t * this.DB % 8,
                                        o = 0;
                                    if (t-- > 0)
                                        for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[o++] = r | this.s << this.DB - n); t >= 0;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == o && (128 & this.s) != (128 & r) && ++o, (o > 0 || r != this.s) && (e[o++] = r);
                                    return e
                                }, r.prototype.equals = function(t) {
                                    return 0 == this.compareTo(t)
                                }, r.prototype.min = function(t) {
                                    return this.compareTo(t) < 0 ? this : t
                                }, r.prototype.max = function(t) {
                                    return this.compareTo(t) > 0 ? this : t
                                }, r.prototype.and = function(t) {
                                    var e = n();
                                    return this.bitwiseTo(t, d, e), e
                                }, r.prototype.or = function(t) {
                                    var e = n();
                                    return this.bitwiseTo(t, y, e), e
                                }, r.prototype.xor = function(t) {
                                    var e = n();
                                    return this.bitwiseTo(t, m, e), e
                                }, r.prototype.andNot = function(t) {
                                    var e = n();
                                    return this.bitwiseTo(t, g, e), e
                                }, r.prototype.not = function() {
                                    for (var t = n(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                                    return t.t = this.t, t.s = ~this.s, t
                                }, r.prototype.shiftLeft = function(t) {
                                    var e = n();
                                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                                }, r.prototype.shiftRight = function(t) {
                                    var e = n();
                                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                                }, r.prototype.getLowestSetBit = function() {
                                    for (var t = 0; t < this.t; ++t)
                                        if (0 != this[t]) return t * this.DB + v(this[t]);
                                    return this.s < 0 ? this.t * this.DB : -1
                                }, r.prototype.bitCount = function() {
                                    for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += b(this[r] ^ e);
                                    return t
                                }, r.prototype.testBit = function(t) {
                                    var e = Math.floor(t / this.DB);
                                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                                }, r.prototype.setBit = function(t) {
                                    return this.changeBit(t, y)
                                }, r.prototype.clearBit = function(t) {
                                    return this.changeBit(t, g)
                                }, r.prototype.flipBit = function(t) {
                                    return this.changeBit(t, m)
                                }, r.prototype.add = function(t) {
                                    var e = n();
                                    return this.addTo(t, e), e
                                }, r.prototype.subtract = function(t) {
                                    var e = n();
                                    return this.subTo(t, e), e
                                }, r.prototype.multiply = function(t) {
                                    var e = n();
                                    return this.multiplyTo(t, e), e
                                }, r.prototype.divide = function(t) {
                                    var e = n();
                                    return this.divRemTo(t, e, null), e
                                }, r.prototype.remainder = function(t) {
                                    var e = n();
                                    return this.divRemTo(t, null, e), e
                                }, r.prototype.divideAndRemainder = function(t) {
                                    var e = n(),
                                        r = n();
                                    return this.divRemTo(t, e, r), new Array(e, r)
                                }, r.prototype.modPow = function(t, e) {
                                    var r, o, i = t.bitLength(),
                                        s = c(1);
                                    if (i <= 0) return s;
                                    r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, o = i < 8 ? new h(e) : e.isEven() ? new O(e) : new f(e);
                                    var a = new Array,
                                        u = 3,
                                        p = r - 1,
                                        d = (1 << r) - 1;
                                    if (a[1] = o.convert(this), r > 1) {
                                        var y = n();
                                        for (o.sqrTo(a[1], y); u <= d;) a[u] = n(), o.mulTo(y, a[u - 2], a[u]), u += 2
                                    }
                                    var m, g, v = t.t - 1,
                                        b = !0,
                                        w = n();
                                    for (i = l(t[v]) - 1; v >= 0;) {
                                        for (i >= p ? m = t[v] >> i - p & d : (m = (t[v] & (1 << i + 1) - 1) << p - i, v > 0 && (m |= t[v - 1] >> this.DB + i - p)), u = r; 0 == (1 & m);) m >>= 1, --u;
                                        if ((i -= u) < 0 && (i += this.DB, --v), b) a[m].copyTo(s), b = !1;
                                        else {
                                            for (; u > 1;) o.sqrTo(s, w), o.sqrTo(w, s), u -= 2;
                                            u > 0 ? o.sqrTo(s, w) : (g = s, s = w, w = g), o.mulTo(w, a[m], s)
                                        }
                                        for (; v >= 0 && 0 == (t[v] & 1 << i);) o.sqrTo(s, w), g = s, s = w, w = g, --i < 0 && (i = this.DB - 1, --v)
                                    }
                                    return o.revert(s)
                                }, r.prototype.modInverse = function(t) {
                                    var e = t.isEven();
                                    if (this.isEven() && e || 0 == t.signum()) return r.ZERO;
                                    for (var n = t.clone(), o = this.clone(), i = c(1), s = c(0), a = c(0), u = c(1); 0 != n.signum();) {
                                        for (; n.isEven();) n.rShiftTo(1, n), e ? (i.isEven() && s.isEven() || (i.addTo(this, i), s.subTo(t, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                                        for (; o.isEven();) o.rShiftTo(1, o), e ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(t, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
                                        n.compareTo(o) >= 0 ? (n.subTo(o, n), e && i.subTo(a, i), s.subTo(u, s)) : (o.subTo(n, o), e && a.subTo(i, a), u.subTo(s, u))
                                    }
                                    return 0 != o.compareTo(r.ONE) ? r.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
                                }, r.prototype.pow = function(t) {
                                    return this.exp(t, new w)
                                }, r.prototype.gcd = function(t) {
                                    var e = this.s < 0 ? this.negate() : this.clone(),
                                        r = t.s < 0 ? t.negate() : t.clone();
                                    if (e.compareTo(r) < 0) {
                                        var n = e;
                                        e = r, r = n
                                    }
                                    var o = e.getLowestSetBit(),
                                        i = r.getLowestSetBit();
                                    if (i < 0) return e;
                                    for (o < i && (i = o), i > 0 && (e.rShiftTo(i, e), r.rShiftTo(i, r)); e.signum() > 0;)(o = e.getLowestSetBit()) > 0 && e.rShiftTo(o, e), (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r), e.compareTo(r) >= 0 ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
                                    return i > 0 && r.lShiftTo(i, r), r
                                }, r.prototype.isProbablePrime = function(t) {
                                    var e, r = this.abs();
                                    if (1 == r.t && r[0] <= A[A.length - 1]) {
                                        for (e = 0; e < A.length; ++e)
                                            if (r[0] == A[e]) return !0;
                                        return !1
                                    }
                                    if (r.isEven()) return !1;
                                    for (e = 1; e < A.length;) {
                                        for (var n = A[e], o = e + 1; o < A.length && n < j;) n *= A[o++];
                                        for (n = r.modInt(n); e < o;)
                                            if (n % A[e++] == 0) return !1
                                    }
                                    return r.millerRabin(t)
                                }, r.prototype.square = function() {
                                    var t = n();
                                    return this.squareTo(t), t
                                }, r.prototype.Barrett = O, null == k) {
                                var E;
                                if (k = new Array, S = 0, "undefined" != typeof window && window.crypto)
                                    if (window.crypto.getRandomValues) {
                                        var C = new Uint8Array(32);
                                        for (window.crypto.getRandomValues(C), E = 0; E < 32; ++E) k[S++] = C[E]
                                    } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                                    var D = window.crypto.random(32);
                                    for (E = 0; E < D.length; ++E) k[S++] = 255 & D.charCodeAt(E)
                                }
                                for (; S < q;) E = Math.floor(65536 * Math.random()), k[S++] = E >>> 8, k[S++] = 255 & E;
                                S = 0, x()
                            }

                            function I() {
                                if (null == T) {
                                    for (x(), (T = new R).init(k), S = 0; S < k.length; ++S) k[S] = 0;
                                    S = 0
                                }
                                return T.next()
                            }

                            function P() {}

                            function R() {
                                this.i = 0, this.j = 0, this.S = new Array
                            }
                            P.prototype.nextBytes = function(t) {
                                var e;
                                for (e = 0; e < t.length; ++e) t[e] = I()
                            }, R.prototype.init = function(t) {
                                var e, r, n;
                                for (e = 0; e < 256; ++e) this.S[e] = e;
                                for (r = 0, e = 0; e < 256; ++e) n = this.S[e], this.S[e] = this.S[r = r + this.S[e] + t[e % t.length] & 255], this.S[r] = n;
                                this.i = 0, this.j = 0
                            }, R.prototype.next = function() {
                                var t;
                                return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
                            };
                            var q = 256;
                            t.exports = {
                                default: r,
                                BigInteger: r,
                                SecureRandom: P
                            }
                        }).call(yr)
                    })),
                    kr = {
                        sha1: "3021300906052b0e03021a05000414",
                        sha224: "302d300d06096086480165030402040500041c",
                        sha256: "3031300d060960864801650304020105000420",
                        sha384: "3041300d060960864801650304020205000430",
                        sha512: "3051300d060960864801650304020305000440",
                        md2: "3020300c06082a864886f70d020205000410",
                        md5: "3020300c06082a864886f70d020505000410",
                        ripemd160: "3021300906052b2403020105000414"
                    },
                    Sr = {
                        sha256: wr
                    };

                function Ar(t, e) {
                    if (this.n = null, this.e = 0, !(null != t && null != e && t.length > 0 && e.length > 0)) throw new Error("Invalid key data");
                    this.n = new Tr.BigInteger(t, 16), this.e = parseInt(e, 16)
                }
                Ar.prototype.verify = function(t, e) {
                    e = e.replace(/[^0-9a-f]|[\s\n]]/gi, "");
                    var r = new Tr.BigInteger(e, 16);
                    if (r.bitLength() > this.n.bitLength()) throw new Error("Signature does not match with the key modulus.");
                    var n = function(t) {
                        for (var e in kr) {
                            var r = kr[e],
                                n = r.length;
                            if (t.substring(0, n) === r) return {
                                alg: e,
                                hash: t.substring(n)
                            }
                        }
                        return []
                    }(r.modPowInt(this.e, this.n).toString(16).replace(/^1f+00/, ""));
                    if (0 === n.length) return !1;
                    if (!Sr.hasOwnProperty(n.alg)) throw new Error("Hashing algorithm is not supported.");
                    var o = Sr[n.alg](t).toString();
                    return n.hash === o
                };
                for (var jr = [], xr = [], Er = "undefined" != typeof Uint8Array ? Uint8Array : Array, Cr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dr = 0, Ir = Cr.length; Dr < Ir; ++Dr) jr[Dr] = Cr[Dr], xr[Cr.charCodeAt(Dr)] = Dr;
                xr["-".charCodeAt(0)] = 62, xr["_".charCodeAt(0)] = 63;
                var Pr = function(t) {
                    var e, r, n = function(t) {
                            var e = t.length;
                            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                            var r = t.indexOf("=");
                            return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
                        }(t),
                        o = n[0],
                        i = n[1],
                        s = new Er(function(t, e, r) {
                            return 3 * (e + r) / 4 - r
                        }(0, o, i)),
                        a = 0,
                        u = i > 0 ? o - 4 : o;
                    for (r = 0; r < u; r += 4) e = xr[t.charCodeAt(r)] << 18 | xr[t.charCodeAt(r + 1)] << 12 | xr[t.charCodeAt(r + 2)] << 6 | xr[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
                    return 2 === i && (e = xr[t.charCodeAt(r)] << 2 | xr[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e), 1 === i && (e = xr[t.charCodeAt(r)] << 10 | xr[t.charCodeAt(r + 1)] << 4 | xr[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e), s
                };

                function Rr(t) {
                    var e = t.length % 4;
                    return 0 === e ? t : t + new Array(4 - e + 1).join("=")
                }

                function qr(t) {
                    return t = Rr(t).replace(/\-/g, "+").replace(/_/g, "/"), decodeURIComponent(function(t) {
                        for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                        return e
                    }(Pr(t)).split("").map((function(t) {
                        return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
                    })).join(""))
                }

                function Ur(t) {
                    return function(t) {
                        for (var e = "", r = 0; r < t.length; r++) {
                            var n = t[r].toString(16);
                            e += 2 === n.length ? n : "0" + n
                        }
                        return e
                    }(Pr(Rr(t)))
                }
                var Mr = mr((function(t) {
                    var e, r;
                    e = yr, r = function() {
                        function t(t) {
                            var e = [];
                            if (0 === t.length) return "";
                            if ("string" != typeof t[0]) throw new TypeError("Url must be a string. Received " + t[0]);
                            if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
                                var r = t.shift();
                                t[0] = r + t[0]
                            }
                            t[0] = t[0].match(/^file:\/\/\//) ? t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0].replace(/^([^/:]+):\/*/, "$1://");
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
                                "" !== o && (n > 0 && (o = o.replace(/^[\/]+/, "")), o = o.replace(/[\/]+$/, n < t.length - 1 ? "" : "/"), e.push(o))
                            }
                            var i = e.join("/"),
                                s = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                            return s.shift() + (s.length > 0 ? "?" : "") + s.join("&")
                        }
                        return function() {
                            return t("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
                        }
                    }, t.exports ? t.exports = r() : e.urljoin = r()
                }));

                function Lr(t, e) {
                    return e = e || {}, new Promise((function(r, n) {
                        var o = new XMLHttpRequest,
                            i = [],
                            s = [],
                            a = {},
                            u = function() {
                                return {
                                    ok: 2 == (o.status / 100 | 0),
                                    statusText: o.statusText,
                                    status: o.status,
                                    url: o.responseURL,
                                    text: function() {
                                        return Promise.resolve(o.responseText)
                                    },
                                    json: function() {
                                        return Promise.resolve(o.responseText).then(JSON.parse)
                                    },
                                    blob: function() {
                                        return Promise.resolve(new Blob([o.response]))
                                    },
                                    clone: u,
                                    headers: {
                                        keys: function() {
                                            return i
                                        },
                                        entries: function() {
                                            return s
                                        },
                                        get: function(t) {
                                            return a[t.toLowerCase()]
                                        },
                                        has: function(t) {
                                            return t.toLowerCase() in a
                                        }
                                    }
                                }
                            };
                        for (var p in o.open(e.method || "get", t, !0), o.onload = function() {
                                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, r) {
                                    i.push(e = e.toLowerCase()), s.push([e, r]), a[e] = a[e] ? a[e] + "," + r : r
                                })), r(u())
                            }, o.onerror = n, o.withCredentials = "include" == e.credentials, e.headers) o.setRequestHeader(p, e.headers[p]);
                        o.send(e.body || null)
                    }))
                }

                function Br(t) {
                    if (t.ok) return t.json();
                    var e = new Error(t.statusText);
                    return e.response = t, Promise.reject(e)
                }

                function Nr(t) {
                    this.name = "ConfigurationError", this.message = t || ""
                }

                function Hr(t) {
                    this.name = "TokenValidationError", this.message = t || ""
                }
                Nr.prototype = Error.prototype, Hr.prototype = Error.prototype;
                var Fr = function() {
                    function t() {}
                    var e = t.prototype;
                    return e.get = function() {
                        return null
                    }, e.has = function() {
                        return null
                    }, e.set = function() {
                        return null
                    }, t
                }();
                gr.polyfill();
                var Wr = function(t) {
                        return "number" == typeof t
                    },
                    zr = function() {
                        return new Date
                    };

                function Vr(t) {
                    var e = t || {};
                    if (this.jwksCache = e.jwksCache || new Fr, this.expectedAlg = e.expectedAlg || "RS256", this.issuer = e.issuer, this.audience = e.audience, this.leeway = 0 === e.leeway ? 0 : e.leeway || 60, this.jwksURI = e.jwksURI, this.maxAge = e.maxAge, this.__clock = "function" == typeof e.__clock ? e.__clock : zr, this.leeway < 0 || this.leeway > 300) throw new Nr("The leeway should be positive and lower than five minutes.");
                    if ("RS256" !== this.expectedAlg) throw new Nr('Signature algorithm of "' + this.expectedAlg + '" is not supported. Expected the ID token to be signed with "RS256".')
                }

                function Jr(t, e) {
                    this.plugins = e;
                    for (var r = 0; r < this.plugins.length; r++) {
                        if (this.plugins[r].version !== qe.raw) {
                            var n = "";
                            throw this.plugins[r].constructor && this.plugins[r].constructor.name && (n = this.plugins[r].constructor.name), new Error("Plugin " + n + " version (" + this.plugins[r].version + ") is not compatible with the SDK version (" + qe.raw + ")")
                        }
                        this.plugins[r].setWebAuth(t)
                    }
                }
                Vr.prototype.verify = function(t, e, r) {
                    if (!r && e && "function" == typeof e && (r = e, e = void 0), !t) return r(new Hr("ID token is required but missing"), null);
                    var n = this.decode(t);
                    if (n instanceof Error) return r(new Hr("ID token could not be decoded"), null);
                    var o = n.encoded.header + "." + n.encoded.payload,
                        i = Ur(n.encoded.signature),
                        s = n.header.alg,
                        a = n.header.kid,
                        u = n.payload.aud,
                        p = n.payload.sub,
                        c = n.payload.iss,
                        l = n.payload.exp,
                        h = n.payload.nbf,
                        f = n.payload.iat,
                        d = n.payload.azp,
                        y = n.payload.auth_time,
                        m = n.payload.nonce,
                        g = this.__clock(),
                        v = this;
                    if (v.expectedAlg !== s) return r(new Hr('Signature algorithm of "' + s + '" is not supported. Expected the ID token to be signed with "RS256".'), null);
                    this.getRsaVerifier(c, a, (function(t, s) {
                        if (t) return r(t, null);
                        if (!s.verify(o, i)) return r(new Hr("Invalid ID token signature."), null);
                        if (!c || "string" != typeof c) return r(new Hr("Issuer (iss) claim must be a string present in the ID token"), null);
                        if (v.issuer !== c) return r(new Hr('Issuer (iss) claim mismatch in the ID token, expected "' + v.issuer + '", found "' + c + '"'), null);
                        if (!p || "string" != typeof p) return r(new Hr("Subject (sub) claim must be a string present in the ID token"), null);
                        if (!u || "string" != typeof u && !Array.isArray(u)) return r(new Hr("Audience (aud) claim must be a string or array of strings present in the ID token"), null);
                        if (Array.isArray(u) && !u.includes(v.audience)) return r(new Hr('Audience (aud) claim mismatch in the ID token; expected "' + v.audience + '" but was not one of "' + u.join(", ") + '"'), null);
                        if ("string" == typeof u && v.audience !== u) return r(new Hr('Audience (aud) claim mismatch in the ID token; expected "' + v.audience + '" but found "' + u + '"'), null);
                        if (e) {
                            if (!m || "string" != typeof m) return r(new Hr("Nonce (nonce) claim must be a string present in the ID token"), null);
                            if (m !== e) return r(new Hr('Nonce (nonce) claim value mismatch in the ID token; expected "' + e + '", found "' + m + '"'), null)
                        }
                        if (Array.isArray(u) && u.length > 1) {
                            if (!d || "string" != typeof d) return r(new Hr("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"), null);
                            if (d !== v.audience) return r(new Hr('Authorized Party (azp) claim mismatch in the ID token; expected "' + v.audience + '", found "' + d + '"'), null)
                        }
                        if (!l || !Wr(l)) return r(new Hr("Expiration Time (exp) claim must be a number present in the ID token"), null);
                        if (!f || !Wr(f)) return r(new Hr("Issued At (iat) claim must be a number present in the ID token"), null);
                        var a = l + v.leeway,
                            b = new Date(0);
                        if (b.setUTCSeconds(a), g > b) return r(new Hr('Expiration Time (exp) claim error in the ID token; current time "' + g + '" is after expiration time "' + b + '"'), null);
                        if (h && Wr(h)) {
                            var w = h - v.leeway,
                                _ = new Date(0);
                            if (_.setUTCSeconds(w), g < _) return r(new Hr('Not Before Time (nbf) claim error in the ID token; current time "' + g + '" is before the not before time "' + _ + '"'), null)
                        }
                        if (v.maxAge) {
                            if (!y || !Wr(y)) return r(new Hr("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"), null);
                            var O = y + v.maxAge + v.leeway,
                                T = new Date(0);
                            if (T.setUTCSeconds(O), g > T) return r(new Hr('Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time "' + g + '" is after last auth time at "' + T + '"'), null)
                        }
                        return r(null, n.payload)
                    }))
                }, Vr.prototype.getRsaVerifier = function(t, e, r) {
                    var n = this,
                        o = t + e;
                    Promise.resolve(this.jwksCache.has(o)).then((function(r) {
                        return r ? n.jwksCache.get(o) : (i = {
                            jwksURI: n.jwksURI,
                            iss: t,
                            kid: e
                        }, ("undefined" == typeof fetch ? Lr : fetch)(i.jwksURI || Mr(i.iss, ".well-known", "jwks.json")).then(Br).then((function(t) {
                            var e, r, n, o = null;
                            for (e = 0; e < t.keys.length && null === o; e++)(r = t.keys[e]).kid === i.kid && (o = r);
                            if (!o) throw new Error('Could not find a public key for Key ID (kid) "' + i.kid + '"');
                            return {
                                modulus: Ur((n = o).n),
                                exp: Ur(n.e)
                            }
                        })).catch((function(t) {
                            throw t
                        })));
                        var i
                    })).then((function(t) {
                        if (!t || !t.modulus || !t.exp) throw new Error("Empty keyInfo in response");
                        return Promise.resolve(n.jwksCache.set(o, t)).then((function() {
                            r && r(null, new Ar(t.modulus, t.exp))
                        }))
                    })).catch((function(t) {
                        r && r(t)
                    }))
                }, Vr.prototype.decode = function(t) {
                    var e, r, n = t.split(".");
                    if (3 !== n.length) return new Hr("Cannot decode a malformed JWT");
                    try {
                        e = JSON.parse(qr(n[0])), r = JSON.parse(qr(n[1]))
                    } catch (t) {
                        return new Hr("Token header or payload is not valid JSON")
                    }
                    return {
                        header: e,
                        payload: r,
                        encoded: {
                            header: n[0],
                            payload: n[1],
                            signature: n[2]
                        }
                    }
                }, Vr.prototype.validateAccessToken = function(t, e, r, n) {
                    if (this.expectedAlg !== e) return n(new Hr('Signature algorithm of "' + e + '" is not supported. Expected "' + this.expectedAlg + '"'));
                    var o, i = wr(t),
                        s = Or.stringify(i),
                        a = s.substring(0, s.length / 2),
                        u = Or.parse(a),
                        p = _r.stringify(u);
                    return n((o = {
                        "+": "-",
                        "/": "_",
                        "=": ""
                    }, p.replace(/[+/=]/g, (function(t) {
                        return o[t]
                    })) !== r ? new Hr("Invalid access_token") : null))
                }, Jr.prototype.get = function(t) {
                    for (var e = 0; e < this.plugins.length; e++)
                        if (this.plugins[e].supports(t)) return this.plugins[e].init();
                    return null
                };
                var $r = function(t) {
                    var e = new Uint8Array(t),
                        r = [],
                        n = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",
                        o = Ye.getWindow().crypto || Ye.getWindow().msCrypto;
                    if (!o) return null;
                    for (var i = o.getRandomValues(e), s = 0; s < i.length; s++) r.push(n[i[s] % n.length]);
                    return r.join("")
                };

                function Gr(t) {
                    var e = t.transaction || {};
                    this.namespace = e.namespace || "com.auth0.auth.", this.keyLength = e.keyLength || 32, this.stateExpiration = t.stateExpiration ? t.stateExpiration / 60 / 24 : 1 / 48, this.storage = new sr(t), this.options = t
                }

                function Xr(t) {
                    if (this.url = t.url, this.callback = t.callback, this.timeout = t.timeout || 6e4, this.timeoutCallback = t.timeoutCallback || null, this.eventListenerType = t.eventListenerType || "message", this.iframe = null, this.timeoutHandle = null, this._destroyTimeout = null, this.transientMessageEventListener = null, this.proxyEventListener = null, this.eventValidator = t.eventValidator || {
                            isValid: function() {
                                return !0
                            }
                        }, "function" != typeof this.callback) throw new Error("options.callback must be a function")
                }

                function Qr(t) {
                    this.webAuth = t, this.warn = new or(t.baseOptions)
                }

                function Zr(t, e) {
                    this.webAuth = t, this.baseOptions = e, this.request = new Ze(e), this.webMessageHandler = new Qr(t), this.storage = new sr(e)
                }

                function Kr(t, e) {
                    return ["co/verifier", encodeURIComponent(t), encodeURIComponent(e)].join("/")
                }

                function Yr(t, e) {
                    this.webAuth = t, this.baseOptions = e, this.crossOriginAuthentication = new Zr(t, this.baseOptions), this.warn = new or({
                        disableWarnings: !!e._disableDeprecationWarnings
                    })
                }
                Gr.prototype.process = function(t) {
                    if (!t.responseType) throw new Error("responseType is required");
                    var e = t.realm || t.connection,
                        r = -1 !== t.responseType.indexOf("id_token"),
                        n = this.generateTransaction(t.appState, t.state, t.nonce, e, r, t.organization);
                    return t.state || (t.state = n.state), r && !t.nonce && (t.nonce = n.nonce), t
                }, Gr.prototype.generateTransaction = function(t, e, r, n, o, i) {
                    if (e = e || $r(this.keyLength), r = r || (o ? $r(this.keyLength) : null), Ye.getWindow().location.host !== this.options.domain) {
                        var s = {
                            nonce: r,
                            appState: t,
                            state: e,
                            lastUsedConnection: n
                        };
                        i && (s.organization = i), this.storage.setItem(this.namespace + e, s, {
                            expires: this.stateExpiration
                        })
                    }
                    return {
                        state: e,
                        nonce: r
                    }
                }, Gr.prototype.getStoredTransaction = function(t) {
                    var e;
                    return e = this.storage.getItem(this.namespace + t), this.clearTransaction(t), e
                }, Gr.prototype.clearTransaction = function(t) {
                    this.storage.removeItem(this.namespace + t)
                }, Xr.prototype.init = function() {
                    var t = this,
                        e = Ye.getWindow();
                    switch (this.iframe = e.document.createElement("iframe"), this.iframe.style.display = "none", this.proxyEventListener = function(e) {
                        t.eventListener(e)
                    }, this.eventListenerType) {
                        case "message":
                            this.eventSourceObject = e;
                            break;
                        case "load":
                            this.eventSourceObject = this.iframe;
                            break;
                        default:
                            throw new Error("Unsupported event listener type: " + this.eventListenerType)
                    }
                    this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, !1), e.document.body.appendChild(this.iframe), this.iframe.src = this.url, this.timeoutHandle = setTimeout((function() {
                        t.timeoutHandler()
                    }), this.timeout)
                }, Xr.prototype.eventListener = function(t) {
                    var e = {
                        event: t,
                        sourceObject: this.eventSourceObject
                    };
                    this.eventValidator.isValid(e) && (this.destroy(), this.callback(e))
                }, Xr.prototype.timeoutHandler = function() {
                    this.destroy(), this.timeoutCallback && this.timeoutCallback()
                }, Xr.prototype.destroy = function() {
                    var t = this;
                    clearTimeout(this.timeoutHandle), this._destroyTimeout = setTimeout((function() {
                        t.eventSourceObject.removeEventListener(t.eventListenerType, t.proxyEventListener, !1), t.iframe.parentNode && t.iframe.parentNode.removeChild(t.iframe)
                    }), 0)
                }, Qr.prototype.run = function(t, e) {
                    var r = this;
                    t.responseMode = "web_message", t.prompt = "none";
                    var n = Ye.getOrigin(),
                        o = Ge.getOriginFromUrl(t.redirectUri);
                    if (o && n !== o) return e({
                        error: "origin_mismatch",
                        error_description: "The redirectUri's origin (" + o + ") should match the window's origin (" + n + ")."
                    });
                    ! function(t, e, r) {
                        new Xr({
                            url: t,
                            eventListenerType: "message",
                            callback: function(t) {
                                r(null, t)
                            },
                            timeout: e.timeout,
                            eventValidator: {
                                isValid: function(t) {
                                    return !(!t.event.data || "authorization_response" !== t.event.data.type || e.state !== t.event.data.response.state)
                                }
                            },
                            timeoutCallback: function() {
                                r({
                                    error: "timeout",
                                    error_description: "Timeout during executing web_message communication",
                                    state: e.state
                                })
                            }
                        }).init()
                    }(this.webAuth.client.buildAuthorizeUrl(t), t, (function(n, o) {
                        var i = n;
                        if (!n && o.event.data.response.error && (i = o.event.data.response), !i) {
                            var s = o.event.data.response;
                            return r.webAuth.validateAuthenticationResponse(t, s, e)
                        }
                        return "consent_required" === i.error && "localhost" === Ye.getWindow().location.hostname && r.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"), r.webAuth.transactionManager.clearTransaction(i.state), e(Ge.pick(i, ["error", "error_description"]))
                    }))
                }, Zr.prototype.login = function(t, e) {
                    var r = this,
                        n = s(this.baseOptions.rootUrl, "/co/authenticate");
                    t.username = t.username || t.email, delete t.email;
                    var o = {
                        client_id: t.clientID || this.baseOptions.clientID,
                        username: t.username
                    };
                    t.password && (o.password = t.password), t.otp && (o.otp = t.otp);
                    var i = t.realm || this.baseOptions.realm;
                    if (i) {
                        var a = t.credentialType || this.baseOptions.credentialType || "http://auth0.com/oauth/grant-type/password-realm";
                        o.realm = i, o.credential_type = a
                    } else o.credential_type = "password";
                    this.request.post(n).withCredentials().send(o).end((function(n, o) {
                        if (n) {
                            var i = n.response && n.response.body || {
                                error: "request_error",
                                error_description: JSON.stringify(n)
                            };
                            return cr(e, {
                                forceLegacyError: !0
                            })(i)
                        }

                        function s() {
                            var n = !0 === t.popup;
                            t = Ge.blacklist(t, ["password", "credentialType", "otp", "popup", "onRedirecting"]);
                            var i = Ge.merge(t).with({
                                    loginTicket: o.body.login_ticket
                                }),
                                s = Kr(r.baseOptions.rootUrl, o.body.co_id);
                            r.storage.setItem(s, o.body.co_verifier, {
                                expires: 1 / 96
                            }), n ? r.webMessageHandler.run(i, cr(e, {
                                forceLegacyError: !0
                            })) : r.webAuth.authorize(i)
                        }
                        "function" == typeof t.onRedirecting ? t.onRedirecting(s) : s()
                    }))
                }, Zr.prototype.callback = function() {
                    var t = decodeURIComponent(function(t) {
                            var e = ("&" + Ye.getWindow().location.hash.substring(1)).split("&origin=");
                            if (2 === e.length) return e.pop().split("&").shift()
                        }()),
                        e = Ye.getWindow(),
                        r = this;
                    e.addEventListener("message", (function(t) {
                        if ("co_verifier_request" === t.data.type) {
                            var e = Kr(t.origin, t.data.request.id),
                                n = function(t, e) {
                                    try {
                                        var r = t.getItem(e);
                                        return t.removeItem(e), r || ""
                                    } catch (mr) {
                                        return ""
                                    }
                                }(r.storage, e);
                            t.source.postMessage({
                                type: "co_verifier_response",
                                response: {
                                    verifier: n
                                }
                            }, t.origin)
                        }
                    })), e.parent.postMessage({
                        type: "ready"
                    }, t)
                }, Yr.prototype.loginWithCredentials = function(t, e) {
                    t.realm = t.realm || t.connection, delete t.connection, this.crossOriginAuthentication.login(t, e)
                }, Yr.prototype.signupAndLogin = function(t, e) {
                    var r = this;
                    return this.webAuth.client.dbConnection.signup(t, (function(n) {
                        return n ? e(n) : (t.realm = t.realm || t.connection, delete t.connection, r.webAuth.login(t, e))
                    }))
                };
                var tn = i((function(t) {
                        var e = function() {
                            function t(t, e, r) {
                                t.attachEvent ? t.attachEvent("on" + e, r) : t.addEventListener && t.addEventListener(e, r, !1)
                            }

                            function e(t, e, r) {
                                t.detachEvent ? t.detachEvent("on" + e, r) : t.removeEventListener && t.removeEventListener(e, r, !1)
                            }

                            function r(t) {
                                /^https?:\/\//.test(t) || (t = window.location.href);
                                var e = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(t);
                                return e ? e[1] : t
                            }
                            var n = function() {
                                if ("undefined" == typeof navigator) return !1;
                                var t = -1,
                                    e = navigator.userAgent;
                                return "Microsoft Internet Explorer" === navigator.appName ? null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1)) : e.indexOf("Trident") > -1 && null !== new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1)), t >= 8
                            }();
                            return "undefined" != typeof window && window.JSON && window.JSON.stringify && window.JSON.parse && window.postMessage ? {
                                open: function(o, i) {
                                    if (!i) throw "missing required callback argument";
                                    var s, a;
                                    o.url || (s = "missing required 'url' parameter"), o.relay_url || (s = "missing required 'relay_url' parameter"), s && setTimeout((function() {
                                        i(s)
                                    }), 0), o.window_name || (o.window_name = null), o.window_features && ! function() {
                                        try {
                                            var t = navigator.userAgent;
                                            return -1 != t.indexOf("Fennec/") || -1 != t.indexOf("Firefox/") && -1 != t.indexOf("Android")
                                        } catch (mr) {}
                                        return !1
                                    }() || (o.window_features = void 0);
                                    var u, p = o.origin || r(o.url);
                                    if (p !== r(o.relay_url)) return setTimeout((function() {
                                        i("invalid arguments: origin of url and relay_url must match")
                                    }), 0);
                                    n && ((a = document.createElement("iframe")).setAttribute("src", o.relay_url), a.style.display = "none", a.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(a), u = a.contentWindow);
                                    var c = o.popup || window.open(o.url, o.window_name, o.window_features);
                                    o.popup && (c.location.href = o.url), u || (u = c);
                                    var l = setInterval((function() {
                                            c && c.closed && (f(), i && (i("User closed the popup window"), i = null))
                                        }), 500),
                                        h = JSON.stringify({
                                            a: "request",
                                            d: o.params
                                        });

                                    function f() {
                                        if (a && document.body.removeChild(a), a = void 0, l && (l = clearInterval(l)), e(window, "message", d), e(window, "unload", f), c) try {
                                            c.close()
                                        } catch (t) {
                                            u.postMessage("die", p)
                                        }
                                        c = u = void 0
                                    }

                                    function d(t) {
                                        if (t.origin === p) {
                                            try {
                                                var e = JSON.parse(t.data)
                                            } catch (s) {
                                                if (i) return i(s);
                                                throw s
                                            }
                                            "ready" === e.a ? u.postMessage(h, p) : "error" === e.a ? (f(), i && (i(e.d), i = null)) : "response" === e.a && (f(), i && (i(null, e.d), i = null))
                                        }
                                    }
                                    return t(window, "unload", f), t(window, "message", d), {
                                        originalPopup: c,
                                        close: f,
                                        focus: function() {
                                            if (c) try {
                                                c.focus()
                                            } catch (mr) {}
                                        }
                                    }
                                },
                                onOpen: function(r) {
                                    var o = "*",
                                        i = n ? function() {
                                            for (var t = window.opener.frames, e = t.length - 1; e >= 0; e--) try {
                                                if (t[e].location.protocol === window.location.protocol && t[e].location.host === window.location.host && "__winchan_relay_frame" === t[e].name) return t[e]
                                            } catch (mr) {}
                                        }() : window.opener;
                                    if (!i) throw "can't find relay frame";

                                    function s(t) {
                                        t = JSON.stringify(t), n ? i.doPost(t, o) : i.postMessage(t, o)
                                    }

                                    function a(t) {
                                        if ("die" === t.data) try {
                                            window.close()
                                        } catch (e) {}
                                    }
                                    t(n ? i : window, "message", (function t(n) {
                                        var i;
                                        try {
                                            i = JSON.parse(n.data)
                                        } catch (a) {}
                                        i && "request" === i.a && (e(window, "message", t), o = n.origin, r && setTimeout((function() {
                                            r(o, i.d, (function(t) {
                                                r = void 0, s({
                                                    a: "response",
                                                    d: t
                                                })
                                            }))
                                        }), 0))
                                    })), t(n ? i : window, "message", a);
                                    try {
                                        s({
                                            a: "ready"
                                        })
                                    } catch (mr) {
                                        t(i, "load", (function(t) {
                                            s({
                                                a: "ready"
                                            })
                                        }))
                                    }
                                    var u = function() {
                                        try {
                                            e(n ? i : window, "message", a)
                                        } catch (t) {}
                                        r && s({
                                            a: "error",
                                            d: "client closed window"
                                        }), r = void 0;
                                        try {
                                            window.close()
                                        } catch (mr) {}
                                    };
                                    return t(window, "unload", u), {
                                        detach: function() {
                                            e(window, "unload", u)
                                        }
                                    }
                                }
                            } : {
                                open: function(t, e, r, n) {
                                    setTimeout((function() {
                                        n("unsupported browser")
                                    }), 0)
                                },
                                onOpen: function(t) {
                                    setTimeout((function() {
                                        t("unsupported browser")
                                    }), 0)
                                }
                            }
                        }();
                        t.exports && (t.exports = e)
                    })),
                    en = function(t) {
                        /^https?:\/\//.test(t) || (t = window.location.href);
                        var e = /^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(t);
                        return e ? e[1] : t
                    };

                function rn() {
                    this._current_popup = null
                }

                function nn(t, e) {
                    this.baseOptions = e, this.baseOptions.popupOrigin = e.popupOrigin, this.client = t.client, this.webAuth = t, this.transactionManager = new Gr(this.baseOptions), this.crossOriginAuthentication = new Zr(t, this.baseOptions), this.warn = new or({
                        disableWarnings: !!e._disableDeprecationWarnings
                    })
                }

                function on(t) {
                    this.authenticationUrl = t.authenticationUrl, this.timeout = t.timeout || 6e4, this.handler = null, this.postMessageDataType = t.postMessageDataType || !1, this.postMessageOrigin = t.postMessageOrigin || Ye.getWindow().location.origin || Ye.getWindow().location.protocol + "//" + Ye.getWindow().location.hostname + (Ye.getWindow().location.port ? ":" + Ye.getWindow().location.port : "")
                }

                function sn(t) {
                    this.baseOptions = t, this.request = new Ze(t), this.transactionManager = new Gr(this.baseOptions)
                }

                function an(t, e) {
                    this.baseOptions = e, this.client = t, this.baseOptions.universalLoginPage = !0, this.request = new Ze(this.baseOptions), this.warn = new or({
                        disableWarnings: !!e._disableDeprecationWarnings
                    })
                }
                rn.prototype.calculatePosition = function(t) {
                    var e = t.width || 500,
                        r = t.height || 600,
                        n = Ye.getWindow(),
                        o = void 0 !== n.screenX ? n.screenX : n.screenLeft,
                        i = void 0 !== n.screenY ? n.screenY : n.screenTop,
                        s = void 0 !== n.outerWidth ? n.outerWidth : n.document.body.clientWidth,
                        a = void 0 !== n.outerHeight ? n.outerHeight : n.document.body.clientHeight;
                    return {
                        width: e,
                        height: r,
                        left: t.left || o + (s - e) / 2,
                        top: t.top || i + (a - r) / 2
                    }
                }, rn.prototype.preload = function(t) {
                    var e = this,
                        r = Ye.getWindow(),
                        n = this.calculatePosition(t.popupOptions || {}),
                        o = Ge.merge(n).with(t.popupOptions),
                        i = t.url || "about:blank",
                        s = ie(o, {
                            encode: !1,
                            delimiter: ","
                        });
                    return this._current_popup && !this._current_popup.closed || (this._current_popup = r.open(i, "auth0_signup_popup", s), this._current_popup.kill = function() {
                        this.close(), e._current_popup = null
                    }), this._current_popup
                }, rn.prototype.load = function(t, e, r, n) {
                    var o = this,
                        i = this.calculatePosition(r.popupOptions || {}),
                        s = Ge.merge(i).with(r.popupOptions),
                        a = Ge.merge({
                            url: t,
                            relay_url: e,
                            window_features: ie(s, {
                                delimiter: ",",
                                encode: !1
                            }),
                            popup: this._current_popup
                        }).with(r),
                        u = tn.open(a, (function(t, e) {
                            if (!t || "SyntaxError" !== t.name) return o._current_popup = null, n(t, e)
                        }));
                    return u.focus(), u
                }, nn.prototype.buildPopupHandler = function() {
                    var t = this.baseOptions.plugins.get("popup.getPopupHandler");
                    return t ? t.getPopupHandler() : new rn
                }, nn.prototype.preload = function(t) {
                    t = t || {};
                    var e = this.buildPopupHandler();
                    return e.preload(t), e
                }, nn.prototype.getPopupHandler = function(t, e) {
                    return t.popupHandler ? t.popupHandler : e ? this.preload(t) : this.buildPopupHandler()
                }, nn.prototype.callback = function(t) {
                    var e = this,
                        r = Ye.getWindow(),
                        n = (t = t || {}).popupOrigin || this.baseOptions.popupOrigin || Ye.getOrigin();
                    r.opener ? tn.onOpen((function(r, o, i) {
                        if (r !== n) return i({
                            error: "origin_mismatch",
                            error_description: "The popup's origin (" + r + ") should match the `popupOrigin` parameter (" + n + ")."
                        });
                        e.webAuth.parseHash(t || {}, (function(t, e) {
                            return i(t || e)
                        }))
                    })) : r.doPost = function(t) {
                        r.parent && r.parent.postMessage(t, n)
                    }
                }, nn.prototype.authorize = function(t, e) {
                    var r, n, o = {},
                        i = this.baseOptions.plugins.get("popup.authorize"),
                        a = Ge.merge(this.baseOptions, ["clientID", "scope", "domain", "audience", "tenant", "responseType", "redirectUri", "_csrf", "state", "_intstate", "nonce", "organization", "invitation"]).with(Ge.blacklist(t, ["popupHandler"]));
                    return Ne.check(a, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        responseType: {
                            type: "string",
                            message: "responseType option is required"
                        }
                    }), n = s(this.baseOptions.rootUrl, "relay.html"), t.owp ? a.owp = !0 : (o.origin = en(a.redirectUri), n = a.redirectUri), t.popupOptions && (o.popupOptions = Ge.pick(t.popupOptions, ["width", "height", "top", "left"])), i && (a = i.processParams(a)), (a = this.transactionManager.process(a)).scope = a.scope || "openid profile email", delete a.domain, r = this.client.buildAuthorizeUrl(a), this.getPopupHandler(t).load(r, n, o, cr(e, {
                        keepOriginalCasing: !0
                    }))
                }, nn.prototype.loginWithCredentials = function(t, e) {
                    t.realm = t.realm || t.connection, t.popup = !0, t = Ge.merge(this.baseOptions, ["redirectUri", "responseType", "state", "nonce"]).with(Ge.blacklist(t, ["popupHandler", "connection"])), t = this.transactionManager.process(t), this.crossOriginAuthentication.login(t, e)
                }, nn.prototype.passwordlessVerify = function(t, e) {
                    var r = this;
                    return this.client.passwordless.verify(Ge.blacklist(t, ["popupHandler"]), (function(n) {
                        if (n) return e(n);
                        t.username = t.phoneNumber || t.email, t.password = t.verificationCode, delete t.email, delete t.phoneNumber, delete t.verificationCode, delete t.type, r.client.loginWithResourceOwner(t, e)
                    }))
                }, nn.prototype.signupAndLogin = function(t, e) {
                    var r = this;
                    return this.client.dbConnection.signup(t, (function(n) {
                        if (n) return e(n);
                        r.loginWithCredentials(t, e)
                    }))
                }, on.create = function(t) {
                    return new on(t)
                }, on.prototype.login = function(t, e) {
                    this.handler = new Xr({
                        auth0: this.auth0,
                        url: this.authenticationUrl,
                        eventListenerType: t ? "message" : "load",
                        callback: this.getCallbackHandler(e, t),
                        timeout: this.timeout,
                        eventValidator: this.getEventValidator(),
                        timeoutCallback: function() {
                            e(null, "#error=timeout&error_description=Timeout+during+authentication+renew.")
                        },
                        usePostMessage: t || !1
                    }), this.handler.init()
                }, on.prototype.getEventValidator = function() {
                    var t = this;
                    return {
                        isValid: function(e) {
                            switch (e.event.type) {
                                case "message":
                                    return e.event.origin === t.postMessageOrigin && e.event.source === t.handler.iframe.contentWindow && (!1 === t.postMessageDataType || e.event.data.type && e.event.data.type === t.postMessageDataType);
                                case "load":
                                    if ("about:" === e.sourceObject.contentWindow.location.protocol) return !1;
                                default:
                                    return !0
                            }
                        }
                    }
                }, on.prototype.getCallbackHandler = function(t, e) {
                    return function(r) {
                        var n;
                        n = e ? "object" == typeof r.event.data && r.event.data.hash ? r.event.data.hash : r.event.data : r.sourceObject.contentWindow.location.hash, t(null, n)
                    }
                }, sn.prototype.login = function(t, e) {
                    var r, n;
                    return r = s(this.baseOptions.rootUrl, "usernamepassword", "login"), t.username = t.username || t.email, t = Ge.blacklist(t, ["email", "onRedirecting"]), n = Ge.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience"]).with(t), n = this.transactionManager.process(n), n = Ge.toSnakeCase(n, ["auth0Client"]), this.request.post(r).send(n).end(cr(e))
                }, sn.prototype.callback = function(t) {
                    var e, r = Ye.getDocument();
                    (e = r.createElement("div")).innerHTML = t, r.body.appendChild(e).children[0].submit()
                }, an.prototype.login = function(t, e) {
                    if (Ye.getWindow().location.host !== this.baseOptions.domain) throw new Error("This method is meant to be used only inside the Universal Login Page.");
                    var r, n = Ge.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t);
                    return Ne.check(n, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        responseType: {
                            type: "string",
                            message: "responseType option is required"
                        }
                    }), (r = new sn(this.baseOptions)).login(n, (function(n, o) {
                        if (n) return e(n);

                        function i() {
                            r.callback(o)
                        }
                        if ("function" == typeof t.onRedirecting) return t.onRedirecting((function() {
                            i()
                        }));
                        i()
                    }))
                }, an.prototype.signupAndLogin = function(t, e) {
                    var r = this;
                    return r.client.client.dbConnection.signup(t, (function(n) {
                        return n ? e(n) : r.login(t, e)
                    }))
                }, an.prototype.getSSOData = function(t, e) {
                    var r, n = "";
                    return "function" == typeof t && (e = t, t = !1), Ne.check(t, {
                        type: "boolean",
                        message: "withActiveDirectories parameter is not valid"
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), t && (n = "?" + ie({
                        ldaps: 1,
                        client_id: this.baseOptions.clientID
                    })), r = s(this.baseOptions.rootUrl, "user", "ssodata", n), this.request.get(r, {
                        noHeaders: !0
                    }).withCredentials().end(cr(e))
                };
                var un = function() {},
                    pn = {
                        lang: "en",
                        templates: {
                            auth0: function(t) {
                                var e = "code" === t.type ? "Enter the code shown above" : "Solve the formula shown above";
                                return '<div class="captcha-challenge">\n  <img src="' + t.image + '" />\n  <button type="button" class="captcha-reload">\u21ba</button>\n</div>\n<input type="text" name="captcha"\n  class="form-control captcha-control"\n  placeholder="' + e + '" />'
                            },
                            recaptcha_v2: function() {
                                return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />'
                            },
                            recaptcha_enterprise: function() {
                                return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />'
                            },
                            error: function() {
                                return '<div class="error" style="color: red;">Error getting the bot detection challenge. Please contact the system administrator.</div>'
                            }
                        }
                    };

                function cn(t) {
                    switch (t) {
                        case "recaptcha_v2":
                            return window.grecaptcha;
                        case "recaptcha_enterprise":
                            return window.grecaptcha.enterprise;
                        default:
                            throw new Error("Unknown captcha provider")
                    }
                }
                var ln = function(t, e, r, n) {
                    function o(n) {
                        n = n || un, t.getChallenge((function(t, i) {
                            return t ? (e.innerHTML = r.templates.error(t), n(t)) : i.required ? (e.style.display = "", "auth0" === i.provider ? function(t, e, r, n) {
                                t.innerHTML = e.templates[r.provider](r), t.querySelector(".captcha-reload").addEventListener("click", (function(t) {
                                    t.preventDefault(), n()
                                }))
                            }(e, r, i, o) : "recaptcha_v2" !== i.provider && "recaptcha_enterprise" !== i.provider || function(t, e, r) {
                                var n = t.hasAttribute("data-wid") && t.getAttribute("data-wid");

                                function o(e) {
                                    t.querySelector('input[name="captcha"]').value = e || ""
                                }
                                if (n) return o(), void cn(r.provider).reset(n);
                                t.innerHTML = e.templates[r.provider](r);
                                var i = t.querySelector(".recaptcha");
                                ! function(t, e, r) {
                                    var n = "recaptchaCallback_" + Math.floor(1000001 * Math.random());
                                    window[n] = function() {
                                        delete window[n], r()
                                    };
                                    var o = window.document.createElement("script");
                                    o.src = function(t, e, r) {
                                        switch (t) {
                                            case "recaptcha_v2":
                                                return "https://www.recaptcha.net/recaptcha/api.js?hl=" + e + "&onload=" + r;
                                            case "recaptcha_enterprise":
                                                return "https://www.recaptcha.net/recaptcha/enterprise.js?render=explicit&hl=" + e + "&onload=" + r;
                                            default:
                                                throw new Error("Unknown captcha provider")
                                        }
                                    }(e.provider, e.lang, n), o.async = !0, window.document.body.appendChild(o)
                                }(0, {
                                    lang: e.lang,
                                    provider: r.provider
                                }, (function() {
                                    var e = cn(r.provider);
                                    n = e.render(i, {
                                        callback: o,
                                        "expired-callback": function() {
                                            o()
                                        },
                                        "error-callback": function() {
                                            o()
                                        },
                                        sitekey: r.siteKey
                                    }), t.setAttribute("data-wid", n)
                                }))
                            }(e, r, i), void n()) : (e.style.display = "none", void(e.innerHTML = ""))
                        }))
                    }
                    return r = Ge.merge(pn).with(r || {}), o(n), {
                        reload: o,
                        getValue: function() {
                            var t = e.querySelector('input[name="captcha"]');
                            if (t) return t.value
                        }
                    }
                };

                function hn() {
                    return new Date
                }

                function fn(t) {
                    Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        domain: {
                            type: "string",
                            message: "domain option is required"
                        },
                        clientID: {
                            type: "string",
                            message: "clientID option is required"
                        },
                        responseType: {
                            optional: !0,
                            type: "string",
                            message: "responseType is not valid"
                        },
                        responseMode: {
                            optional: !0,
                            type: "string",
                            message: "responseMode is not valid"
                        },
                        redirectUri: {
                            optional: !0,
                            type: "string",
                            message: "redirectUri is not valid"
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope is not valid"
                        },
                        audience: {
                            optional: !0,
                            type: "string",
                            message: "audience is not valid"
                        },
                        popupOrigin: {
                            optional: !0,
                            type: "string",
                            message: "popupOrigin is not valid"
                        },
                        leeway: {
                            optional: !0,
                            type: "number",
                            message: "leeway is not valid"
                        },
                        plugins: {
                            optional: !0,
                            type: "array",
                            message: "plugins is not valid"
                        },
                        maxAge: {
                            optional: !0,
                            type: "number",
                            message: "maxAge is not valid"
                        },
                        stateExpiration: {
                            optional: !0,
                            type: "number",
                            message: "stateExpiration is not valid"
                        },
                        legacySameSiteCookie: {
                            optional: !0,
                            type: "boolean",
                            message: "legacySameSiteCookie option is not valid"
                        },
                        _disableDeprecationWarnings: {
                            optional: !0,
                            type: "boolean",
                            message: "_disableDeprecationWarnings option is not valid"
                        },
                        _sendTelemetry: {
                            optional: !0,
                            type: "boolean",
                            message: "_sendTelemetry option is not valid"
                        },
                        _telemetryInfo: {
                            optional: !0,
                            type: "object",
                            message: "_telemetryInfo option is not valid"
                        },
                        _timesToRetryFailedRequests: {
                            optional: !0,
                            type: "number",
                            message: "_timesToRetryFailedRequests option is not valid"
                        }
                    }), t.overrides && Ne.check(t.overrides, {
                        type: "object",
                        message: "overrides option is not valid"
                    }, {
                        __tenant: {
                            optional: !0,
                            type: "string",
                            message: "__tenant option is required"
                        },
                        __token_issuer: {
                            optional: !0,
                            type: "string",
                            message: "__token_issuer option is required"
                        },
                        __jwks_uri: {
                            optional: !0,
                            type: "string",
                            message: "__jwks_uri is required"
                        }
                    }), this.baseOptions = t, this.baseOptions.plugins = new Jr(this, this.baseOptions.plugins || []), this.baseOptions._sendTelemetry = !1 !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions._timesToRetryFailedRequests = t._timesToRetryFailedRequests ? parseInt(t._timesToRetryFailedRequests) : 0, this.baseOptions.tenant = this.baseOptions.overrides && this.baseOptions.overrides.__tenant || this.baseOptions.domain.split(".")[0], this.baseOptions.token_issuer = this.baseOptions.overrides && this.baseOptions.overrides.__token_issuer || "https://" + this.baseOptions.domain + "/", this.baseOptions.jwksURI = this.baseOptions.overrides && this.baseOptions.overrides.__jwks_uri, !1 !== t.legacySameSiteCookie && (this.baseOptions.legacySameSiteCookie = !0), this.transactionManager = new Gr(this.baseOptions), this.client = new mn(this.baseOptions), this.redirect = new Yr(this, this.baseOptions), this.popup = new nn(this, this.baseOptions), this.crossOriginAuthentication = new Zr(this, this.baseOptions), this.webMessageHandler = new Qr(this), this._universalLogin = new an(this, this.baseOptions), this.ssodataStorage = new ar(this.baseOptions)
                }

                function dn(t, e) {
                    this.baseOptions = e, this.request = t
                }

                function yn(t, e) {
                    this.baseOptions = e, this.request = t
                }

                function mn(t, e) {
                    2 === arguments.length ? this.auth0 = t : e = t, Ne.check(e, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        domain: {
                            type: "string",
                            message: "domain option is required"
                        },
                        clientID: {
                            type: "string",
                            message: "clientID option is required"
                        },
                        responseType: {
                            optional: !0,
                            type: "string",
                            message: "responseType is not valid"
                        },
                        responseMode: {
                            optional: !0,
                            type: "string",
                            message: "responseMode is not valid"
                        },
                        redirectUri: {
                            optional: !0,
                            type: "string",
                            message: "redirectUri is not valid"
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope is not valid"
                        },
                        audience: {
                            optional: !0,
                            type: "string",
                            message: "audience is not valid"
                        },
                        _disableDeprecationWarnings: {
                            optional: !0,
                            type: "boolean",
                            message: "_disableDeprecationWarnings option is not valid"
                        },
                        _sendTelemetry: {
                            optional: !0,
                            type: "boolean",
                            message: "_sendTelemetry option is not valid"
                        },
                        _telemetryInfo: {
                            optional: !0,
                            type: "object",
                            message: "_telemetryInfo option is not valid"
                        }
                    }), this.baseOptions = e, this.baseOptions._sendTelemetry = !1 !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions.rootUrl = this.baseOptions.domain && 0 === this.baseOptions.domain.toLowerCase().indexOf("http") ? this.baseOptions.domain : "https://" + this.baseOptions.domain, this.request = new Ze(this.baseOptions), this.passwordless = new dn(this.request, this.baseOptions), this.dbConnection = new yn(this.request, this.baseOptions), this.warn = new or({
                        disableWarnings: !!e._disableDeprecationWarnings
                    }), this.ssodataStorage = new ar(this.baseOptions)
                }

                function gn(t) {
                    Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        domain: {
                            type: "string",
                            message: "domain option is required"
                        },
                        token: {
                            type: "string",
                            message: "token option is required"
                        },
                        _sendTelemetry: {
                            optional: !0,
                            type: "boolean",
                            message: "_sendTelemetry option is not valid"
                        },
                        _telemetryInfo: {
                            optional: !0,
                            type: "object",
                            message: "_telemetryInfo option is not valid"
                        }
                    }), this.baseOptions = t, this.baseOptions.headers = {
                        Authorization: "Bearer " + this.baseOptions.token
                    }, this.request = new Ze(this.baseOptions), this.baseOptions.rootUrl = s("https://" + this.baseOptions.domain, "api", "v2")
                }
                fn.prototype.parseHash = function(t, e) {
                    var r, n;
                    e || "function" != typeof t ? t = t || {} : (e = t, t = {});
                    var o = void 0 === t.hash ? Ye.getWindow().location.hash : t.hash;
                    if ((r = function(t, e) {
                            var r = function(t) {
                                if (!t) return ee;
                                if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
                                if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                                var e = void 0 === t.charset ? ee.charset : t.charset;
                                return {
                                    allowDots: void 0 === t.allowDots ? ee.allowDots : !!t.allowDots,
                                    allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : ee.allowPrototypes,
                                    allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : ee.allowSparse,
                                    arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : ee.arrayLimit,
                                    charset: e,
                                    charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : ee.charsetSentinel,
                                    comma: "boolean" == typeof t.comma ? t.comma : ee.comma,
                                    decoder: "function" == typeof t.decoder ? t.decoder : ee.decoder,
                                    delimiter: "string" == typeof t.delimiter || Wt.isRegExp(t.delimiter) ? t.delimiter : ee.delimiter,
                                    depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : ee.depth,
                                    ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                                    interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : ee.interpretNumericEntities,
                                    parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : ee.parameterLimit,
                                    parseArrays: !1 !== t.parseArrays,
                                    plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : ee.plainObjects,
                                    strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : ee.strictNullHandling
                                }
                            }(e);
                            if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};
                            for (var n = "string" == typeof t ? function(t, e) {
                                    var r, n = {},
                                        o = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                                        i = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                                        s = o.split(e.delimiter, i),
                                        a = -1,
                                        u = e.charset;
                                    if (e.charsetSentinel)
                                        for (r = 0; r < s.length; ++r) 0 === s[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === s[r] ? u = "utf-8" : "utf8=%26%2310003%3B" === s[r] && (u = "iso-8859-1"), a = r, r = s.length);
                                    for (r = 0; r < s.length; ++r)
                                        if (r !== a) {
                                            var p, c, l = s[r],
                                                h = l.indexOf("]="),
                                                f = -1 === h ? l.indexOf("=") : h + 1; - 1 === f ? (p = e.decoder(l, ee.decoder, u, "key"), c = e.strictNullHandling ? null : "") : (p = e.decoder(l.slice(0, f), ee.decoder, u, "key"), c = Wt.maybeMap(ne(l.slice(f + 1), e), (function(t) {
                                                return e.decoder(t, ee.decoder, u, "value")
                                            }))), c && e.interpretNumericEntities && "iso-8859-1" === u && (c = re(c)), l.indexOf("[]=") > -1 && (c = te(c) ? [c] : c), Yt.call(n, p) ? n[p] = Wt.combine(n[p], c) : n[p] = c
                                        }
                                    return n
                                }(t, r) : t, o = r.plainObjects ? Object.create(null) : {}, i = Object.keys(n), s = 0; s < i.length; ++s) {
                                var a = i[s],
                                    u = oe(a, n[a], r, "string" == typeof t);
                                o = Wt.merge(o, u, r)
                            }
                            return !0 === r.allowSparse ? o : Wt.compact(o)
                        }(o = o.replace(/^#?\/?/, ""))).hasOwnProperty("error")) return n = pr.buildResponse(r.error, r.error_description), r.state && (n.state = r.state), e(n);
                    if (!r.hasOwnProperty("access_token") && !r.hasOwnProperty("id_token") && !r.hasOwnProperty("refresh_token")) return e(null, null);
                    var i = (this.baseOptions.responseType || t.responseType || "").split(" ");
                    return i.length > 0 && -1 !== i.indexOf("token") && !r.hasOwnProperty("access_token") ? e(pr.buildResponse("invalid_hash", "response_type contains `token`, but the parsed hash does not contain an `access_token` property")) : i.length > 0 && -1 !== i.indexOf("id_token") && !r.hasOwnProperty("id_token") ? e(pr.buildResponse("invalid_hash", "response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")) : this.validateAuthenticationResponse(t, r, e)
                }, fn.prototype.validateAuthenticationResponse = function(t, e, r) {
                    var n = this;
                    t.__enableIdPInitiatedLogin = t.__enableIdPInitiatedLogin || t.__enableImpersonation;
                    var o = e.state,
                        i = this.transactionManager.getStoredTransaction(o),
                        s = t.state || i && i.state || null,
                        a = s === o;
                    if ((o || s || !t.__enableIdPInitiatedLogin) && !a) return r({
                        error: "invalid_token",
                        errorDescription: "`state` does not match."
                    });
                    var u = t.nonce || i && i.nonce || null,
                        p = i && i.organization,
                        c = t.state || i && i.appState || null,
                        l = function(t, o) {
                            return t ? r(t) : (i && i.lastUsedConnection && (o && (s = o.sub), n.ssodataStorage.set(i.lastUsedConnection, s)), r(null, function(t, e, r) {
                                return {
                                    accessToken: t.access_token || null,
                                    idToken: t.id_token || null,
                                    idTokenPayload: r || null,
                                    appState: e || null,
                                    refreshToken: t.refresh_token || null,
                                    state: t.state || null,
                                    expiresIn: t.expires_in ? parseInt(t.expires_in, 10) : null,
                                    tokenType: t.token_type || null,
                                    scope: t.scope || null
                                }
                            }(e, c, o)));
                            var s
                        };
                    return e.id_token ? this.validateToken(e.id_token, u, (function(t, r) {
                        if (!t) {
                            if (p) {
                                if (!r.org_id) return l(pr.invalidToken("Organization Id (org_id) claim must be a string present in the ID token"));
                                if (r.org_id !== p) return l(pr.invalidToken('Organization Id (org_id) claim value mismatch in the ID token; expected "' + p + '", found "' + r.org_id + '"'))
                            }
                            return e.access_token && r.at_hash ? (new Vr).validateAccessToken(e.access_token, "RS256", r.at_hash, (function(t) {
                                return t ? l(pr.invalidToken(t.message)) : l(null, r)
                            })) : l(null, r)
                        }
                        if ("invalid_token" !== t.error || t.errorDescription && t.errorDescription.indexOf("Nonce (nonce) claim value mismatch in the ID token") > -1) return l(t);
                        var o = (new Vr).decode(e.id_token);
                        return "HS256" !== o.header.alg ? l(t) : (o.payload.nonce || null) !== u ? l({
                            error: "invalid_token",
                            errorDescription: 'Nonce (nonce) claim value mismatch in the ID token; expected "' + u + '", found "' + o.payload.nonce + '"'
                        }) : e.access_token ? n.client.userInfo(e.access_token, (function(t, e) {
                            return t ? l(t) : l(null, e)
                        })) : l({
                            error: "invalid_token",
                            description: "The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can\u2019t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token"
                        })
                    })) : l(null, null)
                }, fn.prototype.validateToken = function(t, e, r) {
                    new Vr({
                        issuer: this.baseOptions.token_issuer,
                        jwksURI: this.baseOptions.jwksURI,
                        audience: this.baseOptions.clientID,
                        leeway: this.baseOptions.leeway || 60,
                        maxAge: this.baseOptions.maxAge,
                        __clock: this.baseOptions.__clock || hn
                    }).verify(t, e, (function(t, e) {
                        if (t) return r(pr.invalidToken(t.message));
                        r(null, e)
                    }))
                }, fn.prototype.renewAuth = function(t, e) {
                    var r = !!t.usePostMessage,
                        n = t.postMessageDataType || !1,
                        o = t.postMessageOrigin || Ye.getWindow().origin,
                        i = t.timeout,
                        s = this,
                        a = Ge.merge(this.baseOptions, ["clientID", "redirectUri", "responseType", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t);
                    a.responseType = a.responseType || "token", a.responseMode = a.responseMode || "fragment", a = this.transactionManager.process(a), Ne.check(a, {
                        type: "object",
                        message: "options parameter is not valid"
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), a.prompt = "none", a = Ge.blacklist(a, ["usePostMessage", "tenant", "postMessageDataType", "postMessageOrigin"]), on.create({
                        authenticationUrl: this.client.buildAuthorizeUrl(a),
                        postMessageDataType: n,
                        postMessageOrigin: o,
                        timeout: i
                    }).login(r, (function(t, r) {
                        if ("object" == typeof r) return e(t, r);
                        s.parseHash({
                            hash: r
                        }, e)
                    }))
                }, fn.prototype.checkSession = function(t, e) {
                    var r = Ge.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t);
                    return "code" === r.responseType ? e({
                        error: "error",
                        error_description: "responseType can't be `code`"
                    }) : (t.nonce || (r = this.transactionManager.process(r)), r.redirectUri ? (Ne.check(r, {
                        type: "object",
                        message: "options parameter is not valid"
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = Ge.blacklist(r, ["usePostMessage", "tenant", "postMessageDataType"]), void this.webMessageHandler.run(r, cr(e, {
                        forceLegacyError: !0,
                        ignoreCasing: !0
                    }))) : e({
                        error: "error",
                        error_description: "redirectUri can't be empty"
                    }))
                }, fn.prototype.changePassword = function(t, e) {
                    return this.client.dbConnection.changePassword(t, e)
                }, fn.prototype.passwordlessStart = function(t, e) {
                    var r = Ge.merge(this.baseOptions, ["responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(t.authParams);
                    return t.authParams = this.transactionManager.process(r), this.client.passwordless.start(t, e)
                }, fn.prototype.signup = function(t, e) {
                    return this.client.dbConnection.signup(t, e)
                }, fn.prototype.authorize = function(t) {
                    var e = Ge.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "organization", "invitation"]).with(t);
                    Ne.check(e, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        responseType: {
                            type: "string",
                            message: "responseType option is required"
                        }
                    }), (e = this.transactionManager.process(e)).scope = e.scope || "openid profile email", Ye.redirect(this.client.buildAuthorizeUrl(e))
                }, fn.prototype.signupAndAuthorize = function(t, e) {
                    var r = this;
                    return this.client.dbConnection.signup(Ge.blacklist(t, ["popupHandler"]), (function(n) {
                        if (n) return e(n);
                        t.realm = t.connection, t.username || (t.username = t.email), r.client.login(t, e)
                    }))
                }, fn.prototype.login = function(t, e) {
                    var r = Ge.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting", "organization", "invitation"]).with(t);
                    r = this.transactionManager.process(r), Ye.getWindow().location.host === this.baseOptions.domain ? (r.connection = r.realm, delete r.realm, this._universalLogin.login(r, e)) : this.crossOriginAuthentication.login(r, e)
                }, fn.prototype.passwordlessLogin = function(t, e) {
                    var r = Ge.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting"]).with(t);
                    if (r = this.transactionManager.process(r), Ye.getWindow().location.host === this.baseOptions.domain) this.passwordlessVerify(r, e);
                    else {
                        var n = Ge.extend({
                            credentialType: "http://auth0.com/oauth/grant-type/passwordless/otp",
                            realm: r.connection,
                            username: r.email || r.phoneNumber,
                            otp: r.verificationCode
                        }, Ge.blacklist(r, ["connection", "email", "phoneNumber", "verificationCode"]));
                        this.crossOriginAuthentication.login(n, e)
                    }
                }, fn.prototype.crossOriginAuthenticationCallback = function() {
                    this.crossOriginVerification()
                }, fn.prototype.crossOriginVerification = function() {
                    this.crossOriginAuthentication.callback()
                }, fn.prototype.logout = function(t) {
                    Ye.redirect(this.client.buildLogoutUrl(t))
                }, fn.prototype.passwordlessVerify = function(t, e) {
                    var r = this,
                        n = Ge.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting"]).with(t);
                    return Ne.check(n, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        responseType: {
                            type: "string",
                            message: "responseType option is required"
                        }
                    }), n = this.transactionManager.process(n), this.client.passwordless.verify(n, (function(o) {
                        if (o) return e(o);

                        function i() {
                            Ye.redirect(r.client.passwordless.buildVerifyUrl(n))
                        }
                        if ("function" == typeof t.onRedirecting) return t.onRedirecting((function() {
                            i()
                        }));
                        i()
                    }))
                }, fn.prototype.renderCaptcha = function(t, e, r) {
                    return ln(this.client, t, e, r)
                }, dn.prototype.buildVerifyUrl = function(t) {
                    var e, r;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        connection: {
                            type: "string",
                            message: "connection option is required"
                        },
                        verificationCode: {
                            type: "string",
                            message: "verificationCode option is required"
                        },
                        phoneNumber: {
                            optional: !1,
                            type: "string",
                            message: "phoneNumber option is required",
                            condition: function(t) {
                                return !t.email
                            }
                        },
                        email: {
                            optional: !1,
                            type: "string",
                            message: "email option is required",
                            condition: function(t) {
                                return !t.phoneNumber
                            }
                        }
                    }), e = Ge.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "protocol", "nonce"]).with(t), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e = Ge.toSnakeCase(e, ["auth0Client"]), r = ie(e), s(this.baseOptions.rootUrl, "passwordless", "verify_redirect", "?" + r)
                }, dn.prototype.start = function(t, e) {
                    var r, n;
                    Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        connection: {
                            type: "string",
                            message: "connection option is required"
                        },
                        send: {
                            type: "string",
                            message: "send option is required",
                            values: ["link", "code"],
                            value_message: "send is not valid ([link, code])"
                        },
                        phoneNumber: {
                            optional: !0,
                            type: "string",
                            message: "phoneNumber option is required",
                            condition: function(t) {
                                return "code" === t.send || !t.email
                            }
                        },
                        email: {
                            optional: !0,
                            type: "string",
                            message: "email option is required",
                            condition: function(t) {
                                return "link" === t.send || !t.phoneNumber
                            }
                        },
                        authParams: {
                            optional: !0,
                            type: "object",
                            message: "authParams option is required"
                        }
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "passwordless", "start");
                    var o = t.xRequestLanguage;
                    delete t.xRequestLanguage, (n = Ge.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope"]).with(t)).scope && (n.authParams = n.authParams || {}, n.authParams.scope = n.authParams.scope || n.scope), n.redirectUri && (n.authParams = n.authParams || {}, n.authParams.redirect_uri = n.authParams.redirectUri || n.redirectUri), n.responseType && (n.authParams = n.authParams || {}, n.authParams.response_type = n.authParams.responseType || n.responseType), delete n.redirectUri, delete n.responseType, delete n.scope, n = Ge.toSnakeCase(n, ["auth0Client", "authParams"]);
                    var i = o ? {
                        xRequestLanguage: o
                    } : void 0;
                    return this.request.post(r, i).send(n).end(cr(e))
                }, dn.prototype.verify = function(t, e) {
                    var r, n;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        connection: {
                            type: "string",
                            message: "connection option is required"
                        },
                        verificationCode: {
                            type: "string",
                            message: "verificationCode option is required"
                        },
                        phoneNumber: {
                            optional: !1,
                            type: "string",
                            message: "phoneNumber option is required",
                            condition: function(t) {
                                return !t.email
                            }
                        },
                        email: {
                            optional: !1,
                            type: "string",
                            message: "email option is required",
                            condition: function(t) {
                                return !t.phoneNumber
                            }
                        }
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), n = Ge.pick(t, ["connection", "verificationCode", "phoneNumber", "email", "auth0Client", "clientID"]), n = Ge.toSnakeCase(n, ["auth0Client"]), r = s(this.baseOptions.rootUrl, "passwordless", "verify"), this.request.post(r).send(n).end(cr(e))
                }, yn.prototype.signup = function(t, e) {
                    var r, n, o;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        connection: {
                            type: "string",
                            message: "connection option is required"
                        },
                        email: {
                            type: "string",
                            message: "email option is required"
                        },
                        password: {
                            type: "string",
                            message: "password option is required"
                        }
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "dbconnections", "signup"), o = (n = Ge.merge(this.baseOptions, ["clientID", "state"]).with(t)).user_metadata || n.userMetadata, n = Ge.blacklist(n, ["scope", "userMetadata", "user_metadata"]), n = Ge.toSnakeCase(n, ["auth0Client"]), o && (n.user_metadata = o), this.request.post(r).send(n).end(cr(e))
                }, yn.prototype.changePassword = function(t, e) {
                    var r, n;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        connection: {
                            type: "string",
                            message: "connection option is required"
                        },
                        email: {
                            type: "string",
                            message: "email option is required"
                        }
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "dbconnections", "change_password"), n = Ge.merge(this.baseOptions, ["clientID"]).with(t, ["email", "connection"]), n = Ge.toSnakeCase(n, ["auth0Client"]), this.request.post(r).send(n).end(cr(e))
                }, mn.prototype.buildAuthorizeUrl = function(t) {
                    var e, r;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }), e = Ge.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience"]).with(t), Ne.check(e, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        clientID: {
                            type: "string",
                            message: "clientID option is required"
                        },
                        redirectUri: {
                            optional: !0,
                            type: "string",
                            message: "redirectUri option is required"
                        },
                        responseType: {
                            type: "string",
                            message: "responseType option is required"
                        },
                        nonce: {
                            type: "string",
                            message: "nonce option is required",
                            condition: function(t) {
                                return -1 === t.responseType.indexOf("code") && -1 !== t.responseType.indexOf("id_token")
                            }
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope option is required"
                        },
                        audience: {
                            optional: !0,
                            type: "string",
                            message: "audience option is required"
                        }
                    }), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e.connection_scope && Ne.isArray(e.connection_scope) && (e.connection_scope = e.connection_scope.join(",")), e = Ge.blacklist(e, ["username", "popupOptions", "domain", "tenant", "timeout", "appState"]), e = Ge.toSnakeCase(e, ["auth0Client"]), e = dr(this.warn, e), r = ie(e), s(this.baseOptions.rootUrl, "authorize", "?" + r)
                }, mn.prototype.buildLogoutUrl = function(t) {
                    var e, r;
                    return Ne.check(t, {
                        optional: !0,
                        type: "object",
                        message: "options parameter is not valid"
                    }), e = Ge.merge(this.baseOptions, ["clientID"]).with(t || {}), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e = Ge.toSnakeCase(e, ["auth0Client", "returnTo"]), r = ie(Ge.blacklist(e, ["federated"])), t && void 0 !== t.federated && !1 !== t.federated && "false" !== t.federated && (r += "&federated"), s(this.baseOptions.rootUrl, "v2", "logout", "?" + r)
                }, mn.prototype.loginWithDefaultDirectory = function(t, e) {
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        username: {
                            type: "string",
                            message: "username option is required"
                        },
                        password: {
                            type: "string",
                            message: "password option is required"
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope option is required"
                        },
                        audience: {
                            optional: !0,
                            type: "string",
                            message: "audience option is required"
                        }
                    }), t.grantType = "password", this.oauthToken(t, e)
                }, mn.prototype.login = function(t, e) {
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        username: {
                            type: "string",
                            message: "username option is required"
                        },
                        password: {
                            type: "string",
                            message: "password option is required"
                        },
                        realm: {
                            type: "string",
                            message: "realm option is required"
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope option is required"
                        },
                        audience: {
                            optional: !0,
                            type: "string",
                            message: "audience option is required"
                        }
                    }), t.grantType = "http://auth0.com/oauth/grant-type/password-realm", this.oauthToken(t, e)
                }, mn.prototype.oauthToken = function(t, e) {
                    var r, n;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "oauth", "token"), n = Ge.merge(this.baseOptions, ["clientID", "scope", "audience"]).with(t), Ne.check(n, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        clientID: {
                            type: "string",
                            message: "clientID option is required"
                        },
                        grantType: {
                            type: "string",
                            message: "grantType option is required"
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope option is required"
                        },
                        audience: {
                            optional: !0,
                            type: "string",
                            message: "audience option is required"
                        }
                    }), n = Ge.toSnakeCase(n, ["auth0Client"]), n = fr(this.warn, n), this.request.post(r).send(n).end(cr(e))
                }, mn.prototype.loginWithResourceOwner = function(t, e) {
                    var r, n;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        username: {
                            type: "string",
                            message: "username option is required"
                        },
                        password: {
                            type: "string",
                            message: "password option is required"
                        },
                        connection: {
                            type: "string",
                            message: "connection option is required"
                        },
                        scope: {
                            optional: !0,
                            type: "string",
                            message: "scope option is required"
                        }
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "oauth", "ro"), n = Ge.merge(this.baseOptions, ["clientID", "scope"]).with(t, ["username", "password", "scope", "connection", "device"]), (n = Ge.toSnakeCase(n, ["auth0Client"])).grant_type = n.grant_type || "password", this.request.post(r).send(n).end(cr(e))
                }, mn.prototype.getSSOData = function(t, e) {
                    if (this.auth0 || (this.auth0 = new fn(this.baseOptions)), Ye.getWindow().location.host === this.baseOptions.domain) return this.auth0._universalLogin.getSSOData(t, e);
                    "function" == typeof t && (e = t), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    });
                    var r = this.baseOptions.clientID,
                        n = this.ssodataStorage.get() || {};
                    this.auth0.checkSession({
                        responseType: "token id_token",
                        scope: "openid profile email",
                        connection: n.lastUsedConnection,
                        timeout: 5e3
                    }, (function(t, o) {
                        return t ? "login_required" === t.error ? e(null, {
                            sso: !1
                        }) : ("consent_required" === t.error && (t.error_description = "Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."), e(t, {
                            sso: !1
                        })) : n.lastUsedSub && n.lastUsedSub !== o.idTokenPayload.sub ? e(t, {
                            sso: !1
                        }) : e(null, {
                            lastUsedConnection: {
                                name: n.lastUsedConnection
                            },
                            lastUsedUserID: o.idTokenPayload.sub,
                            lastUsedUsername: o.idTokenPayload.email || o.idTokenPayload.name,
                            lastUsedClientID: r,
                            sessionClients: [r],
                            sso: !0
                        })
                    }))
                }, mn.prototype.userInfo = function(t, e) {
                    var r;
                    return Ne.check(t, {
                        type: "string",
                        message: "accessToken parameter is not valid"
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "userinfo"), this.request.get(r).set("Authorization", "Bearer " + t).end(cr(e, {
                        ignoreCasing: !0
                    }))
                }, mn.prototype.getChallenge = function(t) {
                    if (Ne.check(t, {
                            type: "function",
                            message: "cb parameter is not valid"
                        }), !this.baseOptions.state) return t();
                    var e = s(this.baseOptions.rootUrl, "usernamepassword", "challenge");
                    return this.request.post(e).send({
                        state: this.baseOptions.state
                    }).end(cr(t, {
                        ignoreCasing: !0
                    }))
                }, mn.prototype.delegation = function(t, e) {
                    var r, n;
                    return Ne.check(t, {
                        type: "object",
                        message: "options parameter is not valid"
                    }, {
                        grant_type: {
                            type: "string",
                            message: "grant_type option is required"
                        }
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "delegation"), n = Ge.merge(this.baseOptions, ["clientID"]).with(t), n = Ge.toSnakeCase(n, ["auth0Client"]), this.request.post(r).send(n).end(cr(e))
                }, mn.prototype.getUserCountry = function(t) {
                    var e;
                    return Ne.check(t, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), e = s(this.baseOptions.rootUrl, "user", "geoloc", "country"), this.request.get(e).end(cr(t))
                }, gn.prototype.getUser = function(t, e) {
                    var r;
                    return Ne.check(t, {
                        type: "string",
                        message: "userId parameter is not valid"
                    }), Ne.check(e, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), r = s(this.baseOptions.rootUrl, "users", t), this.request.get(r).end(cr(e, {
                        ignoreCasing: !0
                    }))
                }, gn.prototype.patchUserMetadata = function(t, e, r) {
                    var n;
                    return Ne.check(t, {
                        type: "string",
                        message: "userId parameter is not valid"
                    }), Ne.check(e, {
                        type: "object",
                        message: "userMetadata parameter is not valid"
                    }), Ne.check(r, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), n = s(this.baseOptions.rootUrl, "users", t), this.request.patch(n).send({
                        user_metadata: e
                    }).end(cr(r, {
                        ignoreCasing: !0
                    }))
                }, gn.prototype.patchUserAttributes = function(t, e, r) {
                    var n;
                    return Ne.check(t, {
                        type: "string",
                        message: "userId parameter is not valid"
                    }), Ne.check(e, {
                        type: "object",
                        message: "user parameter is not valid"
                    }), Ne.check(r, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), n = s(this.baseOptions.rootUrl, "users", t), this.request.patch(n).send(e).end(cr(r, {
                        ignoreCasing: !0
                    }))
                }, gn.prototype.linkUser = function(t, e, r) {
                    var n;
                    return Ne.check(t, {
                        type: "string",
                        message: "userId parameter is not valid"
                    }), Ne.check(e, {
                        type: "string",
                        message: "secondaryUserToken parameter is not valid"
                    }), Ne.check(r, {
                        type: "function",
                        message: "cb parameter is not valid"
                    }), n = s(this.baseOptions.rootUrl, "users", t, "identities"), this.request.post(n).send({
                        link_with: e
                    }).end(cr(r, {
                        ignoreCasing: !0
                    }))
                }
            }).call(this, r("ntbh"), r("8oxB"))
        }
    }
]);