(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [0], {
        "/GRZ": function(e, n) {
            e.exports = function(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        "03A+": function(e, n, t) {
            var r = t("JTzB"),
                o = t("ExA7"),
                a = Object.prototype,
                i = a.hasOwnProperty,
                u = a.propertyIsEnumerable,
                c = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return o(e) && i.call(e, "callee") && !u.call(e, "callee")
                };
            e.exports = c
        },
        "1kQO": function(e, n, t) {
            "use strict";
            t.d(n, "c", (function() {
                return r
            })), t.d(n, "d", (function() {
                return o
            })), t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return i
            }));
            var r = function(e) {
                    return e * (Math.random() < .5 ? -1 : 1)
                },
                o = function(e, n) {
                    return Math.random() * (n - e) + e
                },
                a = function(e) {
                    var n = Object.keys(e);
                    return e[n[n.length * Math.random() << 0]]
                },
                i = function(e) {
                    var n = e.min,
                        t = e.max;
                    return Math.floor(Math.random() * (t - n + 1) + n)
                }
        },
        "2gN3": function(e, n, t) {
            var r = t("Kz5y")["__core-js_shared__"];
            e.exports = r
        },
        "3Fdi": function(e, n) {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (n) {}
                    try {
                        return e + ""
                    } catch (n) {}
                }
                return ""
            }
        },
        "3jzF": function(e, n, t) {
            "use strict";
            var r;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.setConfig = function(e) {
                r = e
            }, n.default = void 0;
            n.default = function() {
                return r
            }
        },
        "3kUd": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                return new Promise((function(n) {
                    return setTimeout(n, e)
                }))
            };
            n.default = r
        },
        "48fX": function(e, n, t) {
            var r = t("qhzo");
            e.exports = function(e, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && r(e, n)
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        "5fIB": function(e, n, t) {
            var r = t("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        "65k2": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                return e.catch((function(e) {
                    return e
                }))
            };
            n.default = r
        },
        "6sVZ": function(e, n) {
            var t = Object.prototype;
            e.exports = function(e) {
                var n = e && e.constructor;
                return e === ("function" == typeof n && n.prototype || t)
            }
        },
        "7LJ6": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                if (e instanceof Error) throw e;
                return e
            };
            n.default = r
        },
        "7eYB": function(e, n) {
            e.exports = function(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        "8oxB": function(e, n) {
            var t, r, o = e.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" === typeof setTimeout ? setTimeout : a
                } catch (e) {
                    t = a
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    r = i
                }
            }();
            var c, s = [],
                l = !1,
                f = -1;

            function p() {
                l && c && (l = !1, c.length ? s = c.concat(s) : f = -1, s.length && d())
            }

            function d() {
                if (!l) {
                    var e = u(p);
                    l = !0;
                    for (var n = s.length; n;) {
                        for (c = s, s = []; ++f < n;) c && c[f].run();
                        f = -1, n = s.length
                    }
                    c = null, l = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (n) {
                                try {
                                    return r.call(null, e)
                                } catch (n) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function h(e, n) {
                this.fun = e, this.array = n
            }

            function y() {}
            o.nextTick = function(e) {
                var n = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                s.push(new h(e, n)), 1 !== s.length || l || u(d)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        A90E: function(e, n, t) {
            var r = t("6sVZ"),
                o = t("V6Ve"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return o(e);
                var n = [];
                for (var t in Object(e)) a.call(e, t) && "constructor" != t && n.push(t);
                return n
            }
        },
        AP2z: function(e, n, t) {
            var r = t("nmnc"),
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = o.toString,
                u = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var n = a.call(e, u),
                    t = e[u];
                try {
                    e[u] = void 0;
                    var r = !0
                } catch (c) {}
                var o = i.call(e);
                return r && (n ? e[u] = t : delete e[u]), o
            }
        },
        B8du: function(e, n) {
            e.exports = function() {
                return !1
            }
        },
        BCwL: function(e, n, t) {
            ! function(e) {
                "use strict";

                function n(e) {
                    return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
                }

                function t(e) {
                    return function t(r) {
                        return 0 === arguments.length || n(r) ? t : e.apply(this, arguments)
                    }
                }

                function r(e) {
                    return function r(o, a) {
                        switch (arguments.length) {
                            case 0:
                                return r;
                            case 1:
                                return n(o) ? r : t((function(n) {
                                    return e(o, n)
                                }));
                            default:
                                return n(o) && n(a) ? r : n(o) ? t((function(n) {
                                    return e(n, a)
                                })) : n(a) ? t((function(n) {
                                    return e(o, n)
                                })) : e(o, a)
                        }
                    }
                }
                var o = r((function(e, n) {
                    return +e + +n
                }));

                function a(e, n) {
                    var t, r = (e = e || []).length,
                        o = (n = n || []).length,
                        a = [];
                    for (t = 0; t < r;) a[a.length] = e[t], t += 1;
                    for (t = 0; t < o;) a[a.length] = n[t], t += 1;
                    return a
                }

                function i(e, n) {
                    switch (e) {
                        case 0:
                            return function() {
                                return n.apply(this, arguments)
                            };
                        case 1:
                            return function(e) {
                                return n.apply(this, arguments)
                            };
                        case 2:
                            return function(e, t) {
                                return n.apply(this, arguments)
                            };
                        case 3:
                            return function(e, t, r) {
                                return n.apply(this, arguments)
                            };
                        case 4:
                            return function(e, t, r, o) {
                                return n.apply(this, arguments)
                            };
                        case 5:
                            return function(e, t, r, o, a) {
                                return n.apply(this, arguments)
                            };
                        case 6:
                            return function(e, t, r, o, a, i) {
                                return n.apply(this, arguments)
                            };
                        case 7:
                            return function(e, t, r, o, a, i, u) {
                                return n.apply(this, arguments)
                            };
                        case 8:
                            return function(e, t, r, o, a, i, u, c) {
                                return n.apply(this, arguments)
                            };
                        case 9:
                            return function(e, t, r, o, a, i, u, c, s) {
                                return n.apply(this, arguments)
                            };
                        case 10:
                            return function(e, t, r, o, a, i, u, c, s, l) {
                                return n.apply(this, arguments)
                            };
                        default:
                            throw Error("First argument to _arity must be a non-negative integer no greater than ten")
                    }
                }

                function u(e, t, r) {
                    return function() {
                        for (var o = [], a = 0, c = e, s = 0; s < t.length || a < arguments.length;) {
                            var l;
                            t.length <= s || n(t[s]) && a < arguments.length ? (l = arguments[a], a += 1) : l = t[s], n(o[s] = l) || (c -= 1), s += 1
                        }
                        return 0 < c ? i(c, u(e, o, r)) : r.apply(this, o)
                    }
                }
                var c = r((function(e, n) {
                        return 1 === e ? t(n) : i(e, u(e, [], n))
                    })),
                    s = t((function(e) {
                        return c(e.length, (function() {
                            var n = 0,
                                t = arguments[0],
                                r = arguments[arguments.length - 1],
                                o = Array.prototype.slice.call(arguments, 0);
                            return o[0] = function() {
                                var e = t.apply(this, a(arguments, [n, r]));
                                return n += 1, e
                            }, e.apply(this, o)
                        }))
                    }));

                function l(e) {
                    return function o(a, i, u) {
                        switch (arguments.length) {
                            case 0:
                                return o;
                            case 1:
                                return n(a) ? o : r((function(n, t) {
                                    return e(a, n, t)
                                }));
                            case 2:
                                return n(a) && n(i) ? o : n(a) ? r((function(n, t) {
                                    return e(n, i, t)
                                })) : n(i) ? r((function(n, t) {
                                    return e(a, n, t)
                                })) : t((function(n) {
                                    return e(a, i, n)
                                }));
                            default:
                                return n(a) && n(i) && n(u) ? o : n(a) && n(i) ? r((function(n, t) {
                                    return e(n, t, u)
                                })) : n(a) && n(u) ? r((function(n, t) {
                                    return e(n, i, t)
                                })) : n(i) && n(u) ? r((function(n, t) {
                                    return e(a, n, t)
                                })) : n(a) ? t((function(n) {
                                    return e(n, i, u)
                                })) : n(i) ? t((function(n) {
                                    return e(a, n, u)
                                })) : n(u) ? t((function(n) {
                                    return e(a, i, n)
                                })) : e(a, i, u)
                        }
                    }
                }
                var f = l((function(e, n, t) {
                        if (t.length <= e || e < -t.length) return t;
                        var r = (e < 0 ? t.length : 0) + e,
                            o = a(t);
                        return o[r] = n(t[r]), o
                    })),
                    p = Array.isArray || function(e) {
                        return null != e && 0 <= e.length && "[object Array]" === Object.prototype.toString.call(e)
                    };

                function d(e) {
                    return null != e && "function" == typeof e["@@transducer/step"]
                }

                function h(e, n, t) {
                    return function() {
                        if (0 === arguments.length) return t();
                        var r = Array.prototype.slice.call(arguments, 0),
                            o = r.pop();
                        if (!p(o)) {
                            for (var a = 0; a < e.length;) {
                                if ("function" == typeof o[e[a]]) return o[e[a]].apply(o, r);
                                a += 1
                            }
                            if (d(o)) return n.apply(null, r)(o)
                        }
                        return t.apply(this, arguments)
                    }
                }

                function y(e) {
                    return e && e["@@transducer/reduced"] ? e : {
                        "@@transducer/value": e,
                        "@@transducer/reduced": !0
                    }
                }
                var m = {
                    init: function() {
                        return this.xf["@@transducer/init"]()
                    },
                    result: function(e) {
                        return this.xf["@@transducer/result"](e)
                    }
                };

                function g(e, n) {
                    this.xf = n, this.f = e, this.all = !0
                }
                g.prototype["@@transducer/init"] = m.init, g.prototype["@@transducer/result"] = function(e) {
                    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e)
                }, g.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) || (this.all = !1, e = y(this.xf["@@transducer/step"](e, !1))), e
                };
                var v = r(h(["all"], r((function(e, n) {
                        return new g(e, n)
                    })), (function(e, n) {
                        for (var t = 0; t < n.length;) {
                            if (!e(n[t])) return !1;
                            t += 1
                        }
                        return !0
                    }))),
                    F = r((function(e, n) {
                        return e < n ? n : e
                    }));

                function U(e, n) {
                    for (var t = 0, r = n.length, o = Array(r); t < r;) o[t] = e(n[t]), t += 1;
                    return o
                }

                function b(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                }
                var A = t((function(e) {
                    return !!p(e) || !!e && "object" == typeof e && !b(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || 0 < e.length && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1))
                }));

                function j(e) {
                    this.f = e
                }

                function E(e) {
                    return new j(e)
                }
                j.prototype["@@transducer/init"] = function() {
                    throw Error("init not implemented on XWrap")
                }, j.prototype["@@transducer/result"] = function(e) {
                    return e
                }, j.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(e, n)
                };
                var S = r((function(e, n) {
                    return i(e.length, (function() {
                        return e.apply(n, arguments)
                    }))
                }));

                function O(e, n, t) {
                    for (var r = t.next(); !r.done;) {
                        if ((n = e["@@transducer/step"](n, r.value)) && n["@@transducer/reduced"]) {
                            n = n["@@transducer/value"];
                            break
                        }
                        r = t.next()
                    }
                    return e["@@transducer/result"](n)
                }

                function x(e, n, t, r) {
                    return e["@@transducer/result"](t[r](S(e["@@transducer/step"], e), n))
                }
                var C = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";

                function w(e, n, t) {
                    if ("function" == typeof e && (e = E(e)), A(t)) return function(e, n, t) {
                        for (var r = 0, o = t.length; r < o;) {
                            if ((n = e["@@transducer/step"](n, t[r])) && n["@@transducer/reduced"]) {
                                n = n["@@transducer/value"];
                                break
                            }
                            r += 1
                        }
                        return e["@@transducer/result"](n)
                    }(e, n, t);
                    if ("function" == typeof t["fantasy-land/reduce"]) return x(e, n, t, "fantasy-land/reduce");
                    if (null != t[C]) return O(e, n, t[C]());
                    if ("function" == typeof t.next) return O(e, n, t);
                    if ("function" == typeof t.reduce) return x(e, n, t, "reduce");
                    throw new TypeError("reduce: list must be array or iterable")
                }

                function M(e, n) {
                    this.xf = n, this.f = e
                }
                M.prototype["@@transducer/init"] = m.init, M.prototype["@@transducer/result"] = m.result, M.prototype["@@transducer/step"] = function(e, n) {
                    return this.xf["@@transducer/step"](e, this.f(n))
                };
                var P = r((function(e, n) {
                    return new M(e, n)
                }));

                function N(e, n) {
                    return Object.prototype.hasOwnProperty.call(n, e)
                }

                function T(e, n) {
                    for (var t = 0; t < e.length;) {
                        if (e[t] === n) return !0;
                        t += 1
                    }
                    return !1
                }
                var D = Object.prototype.toString,
                    I = function() {
                        return "[object Arguments]" === D.call(arguments) ? function(e) {
                            return "[object Arguments]" === D.call(e)
                        } : function(e) {
                            return N("callee", e)
                        }
                    }(),
                    _ = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    B = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                    L = function() {
                        return arguments.propertyIsEnumerable("length")
                    }(),
                    R = t("function" != typeof Object.keys || L ? function(e) {
                        if (Object(e) !== e) return [];
                        var n, t, r = [],
                            o = L && I(e);
                        for (n in e) !N(n, e) || o && "length" === n || (r[r.length] = n);
                        if (_)
                            for (t = B.length - 1; 0 <= t;) N(n = B[t], e) && !T(r, n) && (r[r.length] = n), t -= 1;
                        return r
                    } : function(e) {
                        return Object(e) !== e ? [] : Object.keys(e)
                    }),
                    k = r(h(["fantasy-land/map", "map"], P, (function(e, n) {
                        switch (Object.prototype.toString.call(n)) {
                            case "[object Function]":
                                return c(n.length, (function() {
                                    return e.call(this, n.apply(this, arguments))
                                }));
                            case "[object Object]":
                                return w((function(t, r) {
                                    return t[r] = e(n[r]), t
                                }), {}, R(n));
                            default:
                                return U(e, n)
                        }
                    }))),
                    G = Number.isInteger || function(e) {
                        return e << 0 === e
                    },
                    K = r((function(e, n) {
                        var t = e < 0 ? n.length + e : e;
                        return b(n) ? n[0 | t] : n[t]
                    })),
                    V = r((function(e, n) {
                        return e.map((function(e) {
                            for (var t, r = n, o = 0; o < e.length;) {
                                if (null == r) return;
                                r = G(t = e[o]) ? K(t, r) : r[t], o += 1
                            }
                            return r
                        }))
                    })),
                    W = r((function(e, n) {
                        return V([e], n)[0]
                    })),
                    H = r((function(e, n) {
                        return W([e], n)
                    })),
                    q = r((function(e, n) {
                        return k(H(e), n)
                    })),
                    z = l(w),
                    Z = t((function(e) {
                        return c(z(F, 0, q("length", e)), (function() {
                            for (var n = 0, t = e.length; n < t;) {
                                if (!e[n].apply(this, arguments)) return !1;
                                n += 1
                            }
                            return !0
                        }))
                    })),
                    Y = t((function(e) {
                        return function() {
                            return e
                        }
                    })),
                    X = r((function(e, n) {
                        return e && n
                    }));

                function J(e, n) {
                    this.xf = n, this.f = e, this.any = !1
                }
                J.prototype["@@transducer/init"] = m.init, J.prototype["@@transducer/result"] = function(e) {
                    return this.any || (e = this.xf["@@transducer/step"](e, !1)), this.xf["@@transducer/result"](e)
                }, J.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) && (this.any = !0, e = y(this.xf["@@transducer/step"](e, !0))), e
                };
                var Q = r(h(["any"], r((function(e, n) {
                        return new J(e, n)
                    })), (function(e, n) {
                        for (var t = 0; t < n.length;) {
                            if (e(n[t])) return !0;
                            t += 1
                        }
                        return !1
                    }))),
                    $ = t((function(e) {
                        return c(z(F, 0, q("length", e)), (function() {
                            for (var n = 0, t = e.length; n < t;) {
                                if (e[n].apply(this, arguments)) return !0;
                                n += 1
                            }
                            return !1
                        }))
                    })),
                    ee = r((function(e, n) {
                        return "function" == typeof n["fantasy-land/ap"] ? n["fantasy-land/ap"](e) : "function" == typeof e.ap ? e.ap(n) : "function" == typeof e ? function(t) {
                            return e(t)(n(t))
                        } : w((function(e, t) {
                            return a(e, k(t, n))
                        }), [], e)
                    }));

                function ne(e, n) {
                    this.xf = n, this.pos = 0, this.full = !1, this.acc = Array(e)
                }
                ne.prototype["@@transducer/init"] = m.init, ne.prototype["@@transducer/result"] = function(e) {
                    return this.acc = null, this.xf["@@transducer/result"](e)
                }, ne.prototype["@@transducer/step"] = function(e, n) {
                    return this.store(n), this.full ? this.xf["@@transducer/step"](e, this.getCopy()) : e
                }, ne.prototype.store = function(e) {
                    this.acc[this.pos] = e, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
                }, ne.prototype.getCopy = function() {
                    return a(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos))
                };
                var te = r(h([], r((function(e, n) {
                        return new ne(e, n)
                    })), (function(e, n) {
                        for (var t = 0, r = n.length - (e - 1), o = Array(r < 0 ? 0 : r); t < r;) o[t] = Array.prototype.slice.call(n, t, t + e), t += 1;
                        return o
                    }))),
                    re = r((function(e, n) {
                        return a(n, [e])
                    })),
                    oe = r((function(e, n) {
                        return e.apply(this, n)
                    })),
                    ae = t((function(e) {
                        for (var n = R(e), t = n.length, r = [], o = 0; o < t;) r[o] = e[n[o]], o += 1;
                        return r
                    }));

                function ie(e, n) {
                    return R(n).reduce((function(t, r) {
                        return t[r] = e(n[r]), t
                    }), {})
                }
                var ue = t((function e(n) {
                        return n = ie((function(n) {
                            return "function" == typeof n ? n : e(n)
                        }), n), c(z(F, 0, q("length", ae(n))), (function() {
                            var e = arguments;
                            return ie((function(n) {
                                return oe(n, e)
                            }), n)
                        }))
                    })),
                    ce = r((function(e, n) {
                        return n(e)
                    })),
                    se = l((function(e, n, t) {
                        var r = e(n),
                            o = e(t);
                        return r < o ? -1 : o < r ? 1 : 0
                    })),
                    le = l((function(e, n, t) {
                        var r = {};
                        for (var o in t) r[o] = t[o];
                        return r[e] = n, r
                    })),
                    fe = t((function(e) {
                        return null == e
                    })),
                    pe = l((function e(n, t, r) {
                        if (0 === n.length) return t;
                        var o = n[0];
                        if (1 < n.length) {
                            var a = !fe(r) && N(o, r) ? r[o] : G(n[1]) ? [] : {};
                            t = e(Array.prototype.slice.call(n, 1), t, a)
                        }
                        if (G(o) && p(r)) {
                            var i = [].concat(r);
                            return i[o] = t, i
                        }
                        return le(o, t, r)
                    })),
                    de = r((function(e, n) {
                        switch (e) {
                            case 0:
                                return function() {
                                    return n.call(this)
                                };
                            case 1:
                                return function(e) {
                                    return n.call(this, e)
                                };
                            case 2:
                                return function(e, t) {
                                    return n.call(this, e, t)
                                };
                            case 3:
                                return function(e, t, r) {
                                    return n.call(this, e, t, r)
                                };
                            case 4:
                                return function(e, t, r, o) {
                                    return n.call(this, e, t, r, o)
                                };
                            case 5:
                                return function(e, t, r, o, a) {
                                    return n.call(this, e, t, r, o, a)
                                };
                            case 6:
                                return function(e, t, r, o, a, i) {
                                    return n.call(this, e, t, r, o, a, i)
                                };
                            case 7:
                                return function(e, t, r, o, a, i, u) {
                                    return n.call(this, e, t, r, o, a, i, u)
                                };
                            case 8:
                                return function(e, t, r, o, a, i, u, c) {
                                    return n.call(this, e, t, r, o, a, i, u, c)
                                };
                            case 9:
                                return function(e, t, r, o, a, i, u, c, s) {
                                    return n.call(this, e, t, r, o, a, i, u, c, s)
                                };
                            case 10:
                                return function(e, t, r, o, a, i, u, c, s, l) {
                                    return n.call(this, e, t, r, o, a, i, u, c, s, l)
                                };
                            default:
                                throw Error("First argument to nAry must be a non-negative integer no greater than ten")
                        }
                    })),
                    he = t((function(e) {
                        return de(2, e)
                    }));

                function ye(e) {
                    var n = Object.prototype.toString.call(e);
                    return "[object Function]" === n || "[object AsyncFunction]" === n || "[object GeneratorFunction]" === n || "[object AsyncGeneratorFunction]" === n
                }
                var me = r((function(e, n) {
                        var t = c(e, n);
                        return c(e, (function() {
                            return w(ee, k(t, arguments[0]), Array.prototype.slice.call(arguments, 1))
                        }))
                    })),
                    ge = t((function(e) {
                        return me(e.length, e)
                    })),
                    ve = r((function(e, n) {
                        return ye(e) ? function() {
                            return e.apply(this, arguments) && n.apply(this, arguments)
                        } : ge(X)(e, n)
                    })),
                    Fe = t((function(e) {
                        return c(e.length, e)
                    })),
                    Ue = Fe((function(e) {
                        return e.apply(this, Array.prototype.slice.call(arguments, 1))
                    }));

                function be(e) {
                    return function n(t) {
                        for (var r, o, a, i = [], u = 0, c = t.length; u < c;) {
                            if (A(t[u]))
                                for (a = 0, o = (r = e ? n(t[u]) : t[u]).length; a < o;) i[i.length] = r[a], a += 1;
                            else i[i.length] = t[u];
                            u += 1
                        }
                        return i
                    }
                }

                function Ae(e) {
                    var n = function(e) {
                        return {
                            "@@transducer/init": m.init,
                            "@@transducer/result": function(n) {
                                return e["@@transducer/result"](n)
                            },
                            "@@transducer/step": function(n, t) {
                                var r = e["@@transducer/step"](n, t);
                                return r["@@transducer/reduced"] ? function(e) {
                                    return {
                                        "@@transducer/value": e,
                                        "@@transducer/reduced": !0
                                    }
                                }(r) : r
                            }
                        }
                    }(e);
                    return {
                        "@@transducer/init": m.init,
                        "@@transducer/result": function(e) {
                            return n["@@transducer/result"](e)
                        },
                        "@@transducer/step": function(e, t) {
                            return A(t) ? w(n, e, t) : w(n, e, [t])
                        }
                    }
                }
                var je = r(h(["fantasy-land/chain", "chain"], r((function(e, n) {
                        return k(e, Ae(n))
                    })), (function(e, n) {
                        return "function" == typeof n ? function(t) {
                            return e(n(t))(t)
                        } : be(!1)(k(e, n))
                    }))),
                    Ee = l((function(e, n, t) {
                        if (n < e) throw Error("min must not be greater than max in clamp(min, max, value)");
                        return t < e ? e : n < t ? n : t
                    }));

                function Se(e) {
                    return RegExp(e.source, (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : ""))
                }
                var Oe = t((function(e) {
                    return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
                }));

                function xe(e, n, t, r) {
                    function o(o) {
                        for (var a = n.length, i = 0; i < a;) {
                            if (e === n[i]) return t[i];
                            i += 1
                        }
                        for (var u in n[i + 1] = e, t[i + 1] = o, e) o[u] = r ? xe(e[u], n, t, !0) : e[u];
                        return o
                    }
                    switch (Oe(e)) {
                        case "Object":
                            return o({});
                        case "Array":
                            return o([]);
                        case "Date":
                            return new Date(e.valueOf());
                        case "RegExp":
                            return Se(e);
                        default:
                            return e
                    }
                }
                var Ce = t((function(e) {
                        return null != e && "function" == typeof e.clone ? e.clone() : xe(e, [], [], !0)
                    })),
                    we = t((function(e) {
                        return function(n, t) {
                            return e(n, t) ? -1 : e(t, n) ? 1 : 0
                        }
                    })),
                    Me = t((function(e) {
                        return !e
                    })),
                    Pe = ge(Me);

                function Ne(e, n) {
                    return function() {
                        return n.call(this, e.apply(this, arguments))
                    }
                }

                function Te(e, n) {
                    return function() {
                        var t = arguments.length;
                        if (0 === t) return n();
                        var r = arguments[t - 1];
                        return p(r) || "function" != typeof r[e] ? n.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, t - 1))
                    }
                }
                var De = l(Te("slice", (function(e, n, t) {
                        return Array.prototype.slice.call(t, e, n)
                    }))),
                    Ie = t(Te("tail", De(1, 1 / 0)));

                function _e() {
                    if (0 === arguments.length) throw Error("pipe requires at least one argument");
                    return i(arguments[0].length, z(Ne, arguments[0], Ie(arguments)))
                }
                var Be = t((function(e) {
                    return b(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse()
                }));

                function Le() {
                    if (0 === arguments.length) throw Error("compose requires at least one argument");
                    return _e.apply(this, Be(arguments))
                }

                function Re() {
                    if (0 === arguments.length) throw Error("composeK requires at least one argument");
                    var e = Array.prototype.slice.call(arguments),
                        n = e.pop();
                    return Le(Le.apply(this, k(je, e)), n)
                }

                function ke(e, n) {
                    return function() {
                        var t = this;
                        return e.apply(t, arguments).then((function(e) {
                            return n.call(t, e)
                        }))
                    }
                }

                function Ge() {
                    if (0 === arguments.length) throw Error("pipeP requires at least one argument");
                    return i(arguments[0].length, z(ke, arguments[0], Ie(arguments)))
                }
                var Ke = K(0);

                function Ve(e) {
                    return e
                }
                var We = t(Ve),
                    He = r((function(e, n) {
                        if (n.length <= 0) return We;
                        var t = Ke(n),
                            r = Ie(n);
                        return i(t.length, (function() {
                            return w((function(n, t) {
                                return e.call(this, t, n)
                            }), t.apply(this, arguments), r)
                        }))
                    })),
                    qe = r((function(e, n) {
                        return He.call(this, e, Be(n))
                    }));

                function ze(e) {
                    for (var n, t = []; !(n = e.next()).done;) t.push(n.value);
                    return t
                }

                function Ze(e, n, t) {
                    for (var r = 0, o = t.length; r < o;) {
                        if (e(n, t[r])) return !0;
                        r += 1
                    }
                    return !1
                }
                var Ye = "function" == typeof Object.is ? Object.is : function(e, n) {
                    return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
                };

                function Xe(e, n, t, r) {
                    var o = ze(e);

                    function a(e, n) {
                        return Je(e, n, t.slice(), r.slice())
                    }
                    return !Ze((function(e, n) {
                        return !Ze(a, n, e)
                    }), ze(n), o)
                }

                function Je(e, n, t, r) {
                    if (Ye(e, n)) return !0;
                    var o = Oe(e);
                    if (o !== Oe(n)) return !1;
                    if (null == e || null == n) return !1;
                    if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof n["fantasy-land/equals"]) return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](n) && "function" == typeof n["fantasy-land/equals"] && n["fantasy-land/equals"](e);
                    if ("function" == typeof e.equals || "function" == typeof n.equals) return "function" == typeof e.equals && e.equals(n) && "function" == typeof n.equals && n.equals(e);
                    switch (o) {
                        case "Arguments":
                        case "Array":
                        case "Object":
                            if ("function" == typeof e.constructor && "Promise" === function(e) {
                                    var n = (e + "").match(/^function (\w*)/);
                                    return null == n ? "" : n[1]
                                }(e.constructor)) return e === n;
                            break;
                        case "Boolean":
                        case "Number":
                        case "String":
                            if (typeof e != typeof n || !Ye(e.valueOf(), n.valueOf())) return !1;
                            break;
                        case "Date":
                            if (!Ye(e.valueOf(), n.valueOf())) return !1;
                            break;
                        case "Error":
                            return e.name === n.name && e.message === n.message;
                        case "RegExp":
                            if (e.source !== n.source || e.global !== n.global || e.ignoreCase !== n.ignoreCase || e.multiline !== n.multiline || e.sticky !== n.sticky || e.unicode !== n.unicode) return !1
                    }
                    for (var a = t.length - 1; 0 <= a;) {
                        if (t[a] === e) return r[a] === n;
                        a -= 1
                    }
                    switch (o) {
                        case "Map":
                            return e.size === n.size && Xe(e.entries(), n.entries(), t.concat([e]), r.concat([n]));
                        case "Set":
                            return e.size === n.size && Xe(e.values(), n.values(), t.concat([e]), r.concat([n]));
                        case "Arguments":
                        case "Array":
                        case "Object":
                        case "Boolean":
                        case "Number":
                        case "String":
                        case "Date":
                        case "Error":
                        case "RegExp":
                        case "Int8Array":
                        case "Uint8Array":
                        case "Uint8ClampedArray":
                        case "Int16Array":
                        case "Uint16Array":
                        case "Int32Array":
                        case "Uint32Array":
                        case "Float32Array":
                        case "Float64Array":
                        case "ArrayBuffer":
                            break;
                        default:
                            return !1
                    }
                    var i = R(e);
                    if (i.length !== R(n).length) return !1;
                    var u = t.concat([e]),
                        c = r.concat([n]);
                    for (a = i.length - 1; 0 <= a;) {
                        var s = i[a];
                        if (!N(s, n) || !Je(n[s], e[s], u, c)) return !1;
                        a -= 1
                    }
                    return !0
                }
                var Qe = r((function(e, n) {
                    return Je(e, n, [], [])
                }));

                function $e(e, n, t) {
                    var r, o;
                    if ("function" == typeof e.indexOf) switch (typeof n) {
                        case "number":
                            if (0 === n) {
                                for (r = 1 / n; t < e.length;) {
                                    if (0 === (o = e[t]) && 1 / o == r) return t;
                                    t += 1
                                }
                                return -1
                            }
                            if (n == n) return e.indexOf(n, t);
                            for (; t < e.length;) {
                                if ("number" == typeof(o = e[t]) && o != o) return t;
                                t += 1
                            }
                            return -1;
                        case "string":
                        case "boolean":
                        case "function":
                        case "undefined":
                            return e.indexOf(n, t);
                        case "object":
                            if (null === n) return e.indexOf(n, t)
                    }
                    for (; t < e.length;) {
                        if (Qe(e[t], n)) return t;
                        t += 1
                    }
                    return -1
                }

                function en(e, n) {
                    return 0 <= $e(n, e, 0)
                }

                function nn(e) {
                    return '"' + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"'
                }

                function tn(e) {
                    return (e < 10 ? "0" : "") + e
                }
                var rn = "function" == typeof Date.prototype.toISOString ? function(e) {
                    return e.toISOString()
                } : function(e) {
                    return e.getUTCFullYear() + "-" + tn(1 + e.getUTCMonth()) + "-" + tn(e.getUTCDate()) + "T" + tn(e.getUTCHours()) + ":" + tn(e.getUTCMinutes()) + ":" + tn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                };

                function on(e) {
                    return function() {
                        return !e.apply(this, arguments)
                    }
                }

                function an(e, n) {
                    for (var t = 0, r = n.length, o = []; t < r;) e(n[t]) && (o[o.length] = n[t]), t += 1;
                    return o
                }

                function un(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                }

                function cn(e, n) {
                    this.xf = n, this.f = e
                }
                cn.prototype["@@transducer/init"] = m.init, cn.prototype["@@transducer/result"] = m.result, cn.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) ? this.xf["@@transducer/step"](e, n) : e
                };
                var sn = r(h(["filter"], r((function(e, n) {
                        return new cn(e, n)
                    })), (function(e, n) {
                        return un(n) ? w((function(t, r) {
                            return e(n[r]) && (t[r] = n[r]), t
                        }), {}, R(n)) : an(e, n)
                    }))),
                    ln = r((function(e, n) {
                        return sn(on(e), n)
                    }));

                function fn(e, n) {
                    function t(t) {
                        var r = n.concat([e]);
                        return en(t, r) ? "<Circular>" : fn(t, r)
                    }

                    function r(e, n) {
                        return U((function(n) {
                            return nn(n) + ": " + t(e[n])
                        }), n.slice().sort())
                    }
                    switch (Object.prototype.toString.call(e)) {
                        case "[object Arguments]":
                            return "(function() { return arguments; }(" + U(t, e).join(", ") + "))";
                        case "[object Array]":
                            return "[" + U(t, e).concat(r(e, ln((function(e) {
                                return /^\d+$/.test(e)
                            }), R(e)))).join(", ") + "]";
                        case "[object Boolean]":
                            return "object" == typeof e ? "new Boolean(" + t(e.valueOf()) + ")" : "" + e;
                        case "[object Date]":
                            return "new Date(" + (isNaN(e.valueOf()) ? t(NaN) : nn(rn(e))) + ")";
                        case "[object Null]":
                            return "null";
                        case "[object Number]":
                            return "object" == typeof e ? "new Number(" + t(e.valueOf()) + ")" : 1 / e == -1 / 0 ? "-0" : e.toString(10);
                        case "[object String]":
                            return "object" == typeof e ? "new String(" + t(e.valueOf()) + ")" : nn(e);
                        case "[object Undefined]":
                            return "undefined";
                        default:
                            if ("function" == typeof e.toString) {
                                var o = "" + e;
                                if ("[object Object]" != o) return o
                            }
                            return "{" + r(e, R(e)).join(", ") + "}"
                    }
                }
                var pn = t((function(e) {
                        return fn(e, [])
                    })),
                    dn = r((function(e, n) {
                        if (p(e)) {
                            if (p(n)) return e.concat(n);
                            throw new TypeError(pn(n) + " is not an array")
                        }
                        if (b(e)) {
                            if (b(n)) return e + n;
                            throw new TypeError(pn(n) + " is not a string")
                        }
                        if (null != e && ye(e["fantasy-land/concat"])) return e["fantasy-land/concat"](n);
                        if (null != e && ye(e.concat)) return e.concat(n);
                        throw new TypeError(pn(e) + ' does not have a method named "concat" or "fantasy-land/concat"')
                    })),
                    hn = t((function(e) {
                        return i(z(F, 0, k((function(e) {
                            return e[0].length
                        }), e)), (function() {
                            for (var n = 0; n < e.length;) {
                                if (e[n][0].apply(this, arguments)) return e[n][1].apply(this, arguments);
                                n += 1
                            }
                        }))
                    })),
                    yn = r((function(e, n) {
                        if (10 < e) throw Error("Constructor with greater than ten arguments");
                        return 0 === e ? function() {
                            return new n
                        } : Fe(de(e, (function(e, t, r, o, a, i, u, c, s, l) {
                            switch (arguments.length) {
                                case 1:
                                    return new n(e);
                                case 2:
                                    return new n(e, t);
                                case 3:
                                    return new n(e, t, r);
                                case 4:
                                    return new n(e, t, r, o);
                                case 5:
                                    return new n(e, t, r, o, a);
                                case 6:
                                    return new n(e, t, r, o, a, i);
                                case 7:
                                    return new n(e, t, r, o, a, i, u);
                                case 8:
                                    return new n(e, t, r, o, a, i, u, c);
                                case 9:
                                    return new n(e, t, r, o, a, i, u, c, s);
                                case 10:
                                    return new n(e, t, r, o, a, i, u, c, s, l)
                            }
                        })))
                    })),
                    mn = t((function(e) {
                        return yn(e.length, e)
                    })),
                    gn = r(en),
                    vn = r((function(e, n) {
                        return c(z(F, 0, q("length", n)), (function() {
                            var t = arguments,
                                r = this;
                            return e.apply(r, U((function(e) {
                                return e.apply(r, t)
                            }), n))
                        }))
                    }));

                function Fn(e, n, t, r) {
                    this.valueFn = e, this.valueAcc = n, this.keyFn = t, this.xf = r, this.inputs = {}
                }
                Fn.prototype["@@transducer/init"] = m.init, Fn.prototype["@@transducer/result"] = function(e) {
                    var n;
                    for (n in this.inputs)
                        if (N(n, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[n]))["@@transducer/reduced"]) {
                            e = e["@@transducer/value"];
                            break
                        }
                    return this.inputs = null, this.xf["@@transducer/result"](e)
                }, Fn.prototype["@@transducer/step"] = function(e, n) {
                    var t = this.keyFn(n);
                    return this.inputs[t] = this.inputs[t] || [t, this.valueAcc], this.inputs[t][1] = this.valueFn(this.inputs[t][1], n), e
                };
                var Un = u(4, [], h([], u(4, [], (function(e, n, t, r) {
                        return new Fn(e, n, t, r)
                    })), (function(e, n, t, r) {
                        return w((function(r, o) {
                            var a = t(o);
                            return r[a] = e(N(a, r) ? r[a] : xe(n, [], [], !1), o), r
                        }), {}, r)
                    }))),
                    bn = Un((function(e, n) {
                        return e + 1
                    }), 0),
                    An = o(-1),
                    jn = r((function(e, n) {
                        return null == n || n != n ? e : n
                    })),
                    En = l((function(e, n, t) {
                        var r = e(n),
                            o = e(t);
                        return o < r ? -1 : r < o ? 1 : 0
                    }));

                function Sn() {
                    this._nativeSet = "function" == typeof Set ? new Set : null, this._items = {}
                }

                function On(e, n, t) {
                    var r, o = typeof e;
                    switch (o) {
                        case "string":
                        case "number":
                            return 0 === e && 1 / e == -1 / 0 ? !!t._items["-0"] || (n && (t._items["-0"] = !0), !1) : null !== t._nativeSet ? n ? (r = t._nativeSet.size, t._nativeSet.add(e), t._nativeSet.size === r) : t._nativeSet.has(e) : o in t._items ? e in t._items[o] || (n && (t._items[o][e] = !0), !1) : (n && (t._items[o] = {}, t._items[o][e] = !0), !1);
                        case "boolean":
                            if (o in t._items) {
                                var a = e ? 1 : 0;
                                return !!t._items[o][a] || (n && (t._items[o][a] = !0), !1)
                            }
                            return n && (t._items[o] = e ? [!1, !0] : [!0, !1]), !1;
                        case "function":
                            return null !== t._nativeSet ? n ? (r = t._nativeSet.size, t._nativeSet.add(e), t._nativeSet.size === r) : t._nativeSet.has(e) : o in t._items ? !!en(e, t._items[o]) || (n && t._items[o].push(e), !1) : (n && (t._items[o] = [e]), !1);
                        case "undefined":
                            return !!t._items[o] || (n && (t._items[o] = !0), !1);
                        case "object":
                            if (null === e) return !!t._items.null || (n && (t._items.null = !0), !1);
                        default:
                            return (o = Object.prototype.toString.call(e)) in t._items ? !!en(e, t._items[o]) || (n && t._items[o].push(e), !1) : (n && (t._items[o] = [e]), !1)
                    }
                }
                Sn.prototype.add = function(e) {
                    return !On(e, !0, this)
                }, Sn.prototype.has = function(e) {
                    return On(e, !1, this)
                };
                var xn = r((function(e, n) {
                        for (var t = [], r = 0, o = e.length, a = n.length, i = new Sn, u = 0; u < a; u += 1) i.add(n[u]);
                        for (; r < o;) i.add(e[r]) && (t[t.length] = e[r]), r += 1;
                        return t
                    })),
                    Cn = l((function(e, n, t) {
                        for (var r = [], o = 0, a = n.length; o < a;) Ze(e, n[o], t) || Ze(e, n[o], r) || r.push(n[o]), o += 1;
                        return r
                    })),
                    wn = r((function(e, n) {
                        var t = {};
                        for (var r in n) t[r] = n[r];
                        return delete t[e], t
                    })),
                    Mn = l((function(e, n, t) {
                        var r = Array.prototype.slice.call(t, 0);
                        return r.splice(e, n), r
                    })),
                    Pn = l((function(e, n, t) {
                        return f(e, Y(n), t)
                    })),
                    Nn = r((function e(n, t) {
                        switch (n.length) {
                            case 0:
                                return t;
                            case 1:
                                return G(n[0]) && p(t) ? Mn(n[0], 1, t) : wn(n[0], t);
                            default:
                                var r = n[0],
                                    o = Array.prototype.slice.call(n, 1);
                                return null == t[r] ? t : G(r) && p(t) ? Pn(r, e(o, t[r]), t) : le(r, e(o, t[r]), t)
                        }
                    })),
                    Tn = r((function(e, n) {
                        return e / n
                    }));

                function Dn(e, n) {
                    this.xf = n, this.n = e
                }
                Dn.prototype["@@transducer/init"] = m.init, Dn.prototype["@@transducer/result"] = m.result, Dn.prototype["@@transducer/step"] = function(e, n) {
                    return 0 < this.n ? (this.n -= 1, e) : this.xf["@@transducer/step"](e, n)
                };
                var In = r(h(["drop"], r((function(e, n) {
                    return new Dn(e, n)
                })), (function(e, n) {
                    return De(Math.max(0, e), 1 / 0, n)
                })));

                function _n(e, n) {
                    this.xf = n, this.n = e, this.i = 0
                }
                _n.prototype["@@transducer/init"] = m.init, _n.prototype["@@transducer/result"] = m.result, _n.prototype["@@transducer/step"] = function(e, n) {
                    this.i += 1;
                    var t = 0 === this.n ? e : this.xf["@@transducer/step"](e, n);
                    return this.n < 0 || this.i < this.n ? t : y(t)
                };
                var Bn = r(h(["take"], r((function(e, n) {
                    return new _n(e, n)
                })), (function(e, n) {
                    return De(0, e < 0 ? 1 / 0 : e, n)
                })));

                function Ln(e, n) {
                    this.xf = n, this.pos = 0, this.full = !1, this.acc = Array(e)
                }
                Ln.prototype["@@transducer/init"] = m.init, Ln.prototype["@@transducer/result"] = function(e) {
                    return this.acc = null, this.xf["@@transducer/result"](e)
                }, Ln.prototype["@@transducer/step"] = function(e, n) {
                    return this.full && (e = this.xf["@@transducer/step"](e, this.acc[this.pos])), this.store(n), e
                }, Ln.prototype.store = function(e) {
                    this.acc[this.pos] = e, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
                };
                var Rn = r(h([], r((function(e, n) {
                    return new Ln(e, n)
                })), (function(e, n) {
                    return Bn(e < n.length ? n.length - e : 0, n)
                })));

                function kn(e, n) {
                    this.f = e, this.retained = [], this.xf = n
                }
                kn.prototype["@@transducer/init"] = m.init, kn.prototype["@@transducer/result"] = function(e) {
                    return this.retained = null, this.xf["@@transducer/result"](e)
                }, kn.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) ? this.retain(e, n) : this.flush(e, n)
                }, kn.prototype.flush = function(e, n) {
                    return e = w(this.xf["@@transducer/step"], e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, n)
                }, kn.prototype.retain = function(e, n) {
                    return this.retained.push(n), e
                };
                var Gn = r(h([], r((function(e, n) {
                    return new kn(e, n)
                })), (function(e, n) {
                    for (var t = n.length - 1; 0 <= t && e(n[t]);) t -= 1;
                    return De(0, t + 1, n)
                })));

                function Kn(e, n) {
                    this.xf = n, this.pred = e, this.lastValue = void 0, this.seenFirstValue = !1
                }
                Kn.prototype["@@transducer/init"] = m.init, Kn.prototype["@@transducer/result"] = m.result, Kn.prototype["@@transducer/step"] = function(e, n) {
                    var t = !1;
                    return this.seenFirstValue ? this.pred(this.lastValue, n) && (t = !0) : this.seenFirstValue = !0, this.lastValue = n, t ? e : this.xf["@@transducer/step"](e, n)
                };
                var Vn = r((function(e, n) {
                        return new Kn(e, n)
                    })),
                    Wn = K(-1),
                    Hn = r(h([], Vn, (function(e, n) {
                        var t = [],
                            r = 1,
                            o = n.length;
                        if (0 !== o)
                            for (t[0] = n[0]; r < o;) e(Wn(t), n[r]) || (t[t.length] = n[r]), r += 1;
                        return t
                    }))),
                    qn = t(h([], Vn(Qe), Hn(Qe)));

                function zn(e, n) {
                    this.xf = n, this.f = e
                }
                zn.prototype["@@transducer/init"] = m.init, zn.prototype["@@transducer/result"] = m.result, zn.prototype["@@transducer/step"] = function(e, n) {
                    if (this.f) {
                        if (this.f(n)) return e;
                        this.f = null
                    }
                    return this.xf["@@transducer/step"](e, n)
                };
                var Zn = r(h(["dropWhile"], r((function(e, n) {
                        return new zn(e, n)
                    })), (function(e, n) {
                        for (var t = 0, r = n.length; t < r && e(n[t]);) t += 1;
                        return De(t, 1 / 0, n)
                    }))),
                    Yn = r((function(e, n) {
                        return e || n
                    })),
                    Xn = r((function(e, n) {
                        return ye(e) ? function() {
                            return e.apply(this, arguments) || n.apply(this, arguments)
                        } : ge(Yn)(e, n)
                    })),
                    Jn = t((function(e) {
                        return null != e && "function" == typeof e["fantasy-land/empty"] ? e["fantasy-land/empty"]() : null != e && null != e.constructor && "function" == typeof e.constructor["fantasy-land/empty"] ? e.constructor["fantasy-land/empty"]() : null != e && "function" == typeof e.empty ? e.empty() : null != e && null != e.constructor && "function" == typeof e.constructor.empty ? e.constructor.empty() : p(e) ? [] : b(e) ? "" : un(e) ? {} : I(e) ? function() {
                            return arguments
                        }() : void 0
                    })),
                    Qn = r((function(e, n) {
                        return In(e < 0 ? 0 : n.length - e, n)
                    })),
                    $n = r((function(e, n) {
                        return Qe(Qn(e.length, n), e)
                    })),
                    et = l((function(e, n, t) {
                        return Qe(e(n), e(t))
                    })),
                    nt = l((function(e, n, t) {
                        return Qe(n[e], t[e])
                    })),
                    tt = r((function e(n, t) {
                        var r, o, a, i = t instanceof Array ? [] : {};
                        for (o in t) i[o] = "function" == (a = typeof(r = n[o])) ? r(t[o]) : r && "object" == a ? e(r, t[o]) : t[o];
                        return i
                    }));

                function rt(e, n) {
                    this.xf = n, this.f = e, this.found = !1
                }
                rt.prototype["@@transducer/init"] = m.init, rt.prototype["@@transducer/result"] = function(e) {
                    return this.found || (e = this.xf["@@transducer/step"](e, void 0)), this.xf["@@transducer/result"](e)
                }, rt.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) && (this.found = !0, e = y(this.xf["@@transducer/step"](e, n))), e
                };
                var ot = r(h(["find"], r((function(e, n) {
                    return new rt(e, n)
                })), (function(e, n) {
                    for (var t = 0, r = n.length; t < r;) {
                        if (e(n[t])) return n[t];
                        t += 1
                    }
                })));

                function at(e, n) {
                    this.xf = n, this.f = e, this.idx = -1, this.found = !1
                }
                at.prototype["@@transducer/init"] = m.init, at.prototype["@@transducer/result"] = function(e) {
                    return this.found || (e = this.xf["@@transducer/step"](e, -1)), this.xf["@@transducer/result"](e)
                }, at.prototype["@@transducer/step"] = function(e, n) {
                    return this.idx += 1, this.f(n) && (this.found = !0, e = y(this.xf["@@transducer/step"](e, this.idx))), e
                };
                var it = r(h([], r((function(e, n) {
                    return new at(e, n)
                })), (function(e, n) {
                    for (var t = 0, r = n.length; t < r;) {
                        if (e(n[t])) return t;
                        t += 1
                    }
                    return -1
                })));

                function ut(e, n) {
                    this.xf = n, this.f = e
                }
                ut.prototype["@@transducer/init"] = m.init, ut.prototype["@@transducer/result"] = function(e) {
                    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](e, this.last))
                }, ut.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) && (this.last = n), e
                };
                var ct = r(h([], r((function(e, n) {
                    return new ut(e, n)
                })), (function(e, n) {
                    for (var t = n.length - 1; 0 <= t;) {
                        if (e(n[t])) return n[t];
                        t -= 1
                    }
                })));

                function st(e, n) {
                    this.xf = n, this.f = e, this.idx = -1, this.lastIdx = -1
                }
                st.prototype["@@transducer/init"] = m.init, st.prototype["@@transducer/result"] = function(e) {
                    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](e, this.lastIdx))
                }, st.prototype["@@transducer/step"] = function(e, n) {
                    return this.idx += 1, this.f(n) && (this.lastIdx = this.idx), e
                };
                var lt = r(h([], r((function(e, n) {
                        return new st(e, n)
                    })), (function(e, n) {
                        for (var t = n.length - 1; 0 <= t;) {
                            if (e(n[t])) return t;
                            t -= 1
                        }
                        return -1
                    }))),
                    ft = t(be(!0)),
                    pt = t((function(e) {
                        return c(e.length, (function(n, t) {
                            var r = Array.prototype.slice.call(arguments, 0);
                            return r[0] = t, r[1] = n, e.apply(this, r)
                        }))
                    })),
                    dt = r(Te("forEach", (function(e, n) {
                        for (var t = n.length, r = 0; r < t;) e(n[r]), r += 1;
                        return n
                    }))),
                    ht = r((function(e, n) {
                        for (var t = R(n), r = 0; r < t.length;) {
                            var o = t[r];
                            e(n[o], o, n), r += 1
                        }
                        return n
                    })),
                    yt = t((function(e) {
                        for (var n = {}, t = 0; t < e.length;) n[e[t][0]] = e[t][1], t += 1;
                        return n
                    })),
                    mt = r(Te("groupBy", Un((function(e, n) {
                        return null == e && (e = []), e.push(n), e
                    }), null))),
                    gt = r((function(e, n) {
                        for (var t = [], r = 0, o = n.length; r < o;) {
                            for (var a = r + 1; a < o && e(n[a - 1], n[a]);) a += 1;
                            t.push(n.slice(r, a)), r = a
                        }
                        return t
                    })),
                    vt = r((function(e, n) {
                        return n < e
                    })),
                    Ft = r((function(e, n) {
                        return n <= e
                    })),
                    Ut = r((function(e, n) {
                        if (0 === e.length || fe(n)) return !1;
                        for (var t = n, r = 0; r < e.length;) {
                            if (fe(t) || !N(e[r], t)) return !1;
                            t = t[e[r]], r += 1
                        }
                        return !0
                    })),
                    bt = r((function(e, n) {
                        return Ut([e], n)
                    })),
                    At = r((function(e, n) {
                        return e in n
                    })),
                    jt = r(Ye),
                    Et = l((function(e, n, t) {
                        return c(Math.max(e.length, n.length, t.length), (function() {
                            return e.apply(this, arguments) ? n.apply(this, arguments) : t.apply(this, arguments)
                        }))
                    })),
                    St = o(1),
                    Ot = r(en),
                    xt = Un((function(e, n) {
                        return n
                    }), null),
                    Ct = r((function(e, n) {
                        return "function" != typeof n.indexOf || p(n) ? $e(n, e, 0) : n.indexOf(e)
                    })),
                    wt = De(0, -1),
                    Mt = l((function(e, n, t) {
                        return an((function(n) {
                            return Ze(e, n, t)
                        }), n)
                    })),
                    Pt = l((function(e, n, t) {
                        e = e < t.length && 0 <= e ? e : t.length;
                        var r = Array.prototype.slice.call(t, 0);
                        return r.splice(e, 0, n), r
                    })),
                    Nt = l((function(e, n, t) {
                        return [].concat(Array.prototype.slice.call(t, 0, e = e < t.length && 0 <= e ? e : t.length), n, Array.prototype.slice.call(t, e))
                    })),
                    Tt = r((function(e, n) {
                        for (var t, r, o = new Sn, a = [], i = 0; i < n.length;) t = e(r = n[i]), o.add(t) && a.push(r), i += 1;
                        return a
                    })),
                    Dt = Tt(We),
                    It = r((function(e, n) {
                        var t, r;
                        return r = n.length < e.length ? (t = e, n) : (t = n, e), Dt(an(pt(en)(t), r))
                    })),
                    _t = r(Te("intersperse", (function(e, n) {
                        for (var t = [], r = 0, o = n.length; r < o;) r === o - 1 ? t.push(n[r]) : t.push(n[r], e), r += 1;
                        return t
                    }))),
                    Bt = "function" == typeof Object.assign ? Object.assign : function(e) {
                        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                        for (var n = Object(e), t = 1, r = arguments.length; t < r;) {
                            var o = arguments[t];
                            if (null != o)
                                for (var a in o) N(a, o) && (n[a] = o[a]);
                            t += 1
                        }
                        return n
                    },
                    Lt = r((function(e, n) {
                        var t = {};
                        return t[e] = n, t
                    })),
                    Rt = {
                        "@@transducer/init": Array,
                        "@@transducer/step": function(e, n) {
                            return e.push(n), e
                        },
                        "@@transducer/result": Ve
                    },
                    kt = {
                        "@@transducer/init": String,
                        "@@transducer/step": function(e, n) {
                            return e + n
                        },
                        "@@transducer/result": Ve
                    },
                    Gt = {
                        "@@transducer/init": Object,
                        "@@transducer/step": function(e, n) {
                            return Bt(e, A(n) ? Lt(n[0], n[1]) : n)
                        },
                        "@@transducer/result": Ve
                    },
                    Kt = l((function(e, n, t) {
                        return d(e) ? w(n(e), e["@@transducer/init"](), t) : w(n(function(e) {
                            if (d(e)) return e;
                            if (A(e)) return Rt;
                            if ("string" == typeof e) return kt;
                            if ("object" == typeof e) return Gt;
                            throw Error("Cannot create transformer for " + e)
                        }(e)), xe(e, [], [], !1), t)
                    })),
                    Vt = t((function(e) {
                        for (var n = R(e), t = n.length, r = 0, o = {}; r < t;) {
                            var a = n[r],
                                i = e[a],
                                u = N(i, o) ? o[i] : o[i] = [];
                            u[u.length] = a, r += 1
                        }
                        return o
                    })),
                    Wt = t((function(e) {
                        for (var n = R(e), t = n.length, r = 0, o = {}; r < t;) {
                            var a = n[r];
                            o[e[a]] = a, r += 1
                        }
                        return o
                    })),
                    Ht = r((function(e, n) {
                        return c(e + 1, (function() {
                            var t = arguments[e];
                            if (null != t && ye(t[n])) return t[n].apply(t, Array.prototype.slice.call(arguments, 0, e));
                            throw new TypeError(pn(t) + ' does not have a method named "' + n + '"')
                        }))
                    })),
                    qt = r((function(e, n) {
                        return null != n && n.constructor === e || n instanceof e
                    })),
                    zt = t((function(e) {
                        return null != e && Qe(e, Jn(e))
                    })),
                    Zt = Ht(1, "join"),
                    Yt = t((function(e) {
                        return vn((function() {
                            return Array.prototype.slice.call(arguments, 0)
                        }), e)
                    })),
                    Xt = t((function(e) {
                        var n, t = [];
                        for (n in e) t[t.length] = n;
                        return t
                    })),
                    Jt = r((function(e, n) {
                        if ("function" != typeof n.lastIndexOf || p(n)) {
                            for (var t = n.length - 1; 0 <= t;) {
                                if (Qe(n[t], e)) return t;
                                t -= 1
                            }
                            return -1
                        }
                        return n.lastIndexOf(e)
                    }));

                function Qt(e) {
                    return "[object Number]" === Object.prototype.toString.call(e)
                }
                var $t = t((function(e) {
                        return null != e && Qt(e.length) ? e.length : NaN
                    })),
                    er = r((function(e, n) {
                        return function(t) {
                            return function(r) {
                                return k((function(e) {
                                    return n(e, r)
                                }), t(e(r)))
                            }
                        }
                    })),
                    nr = t((function(e) {
                        return er(K(e), Pn(e))
                    })),
                    tr = t((function(e) {
                        return er(W(e), pe(e))
                    })),
                    rr = t((function(e) {
                        return er(H(e), le(e))
                    })),
                    or = r((function(e, n) {
                        return e < n
                    })),
                    ar = r((function(e, n) {
                        return e <= n
                    })),
                    ir = l((function(e, n, t) {
                        for (var r = 0, o = t.length, a = [], i = [n]; r < o;) i = e(i[0], t[r]), a[r] = i[1], r += 1;
                        return [i[0], a]
                    })),
                    ur = l((function(e, n, t) {
                        for (var r = t.length - 1, o = [], a = [n]; 0 <= r;) a = e(a[0], t[r]), o[r] = a[1], r -= 1;
                        return [a[0], o]
                    })),
                    cr = r((function(e, n) {
                        return w((function(t, r) {
                            return t[r] = e(n[r], r, n), t
                        }), {}, R(n))
                    })),
                    sr = r((function(e, n) {
                        return n.match(e) || []
                    })),
                    lr = r((function(e, n) {
                        return G(e) ? !G(n) || n < 1 ? NaN : (e % n + n) % n : NaN
                    })),
                    fr = l((function(e, n, t) {
                        return e(t) > e(n) ? t : n
                    })),
                    pr = z(o, 0),
                    dr = t((function(e) {
                        return pr(e) / e.length
                    })),
                    hr = t((function(e) {
                        var n = e.length;
                        if (0 === n) return NaN;
                        var t = 2 - n % 2,
                            r = (n - t) / 2;
                        return dr(Array.prototype.slice.call(e, 0).sort((function(e, n) {
                            return e < n ? -1 : n < e ? 1 : 0
                        })).slice(r, r + t))
                    })),
                    yr = r((function(e, n) {
                        var t = {};
                        return i(n.length, (function() {
                            var r = e.apply(this, arguments);
                            return N(r, t) || (t[r] = n.apply(this, arguments)), t[r]
                        }))
                    })),
                    mr = r((function(e, n) {
                        return Bt({}, e, n)
                    })),
                    gr = t((function(e) {
                        return Bt.apply(null, [{}].concat(e))
                    })),
                    vr = l((function(e, n, t) {
                        var r, o = {};
                        for (r in n) N(r, n) && (o[r] = N(r, t) ? e(r, n[r], t[r]) : n[r]);
                        for (r in t) N(r, t) && !N(r, o) && (o[r] = t[r]);
                        return o
                    })),
                    Fr = l((function e(n, t, r) {
                        return vr((function(t, r, o) {
                            return un(r) && un(o) ? e(n, r, o) : n(t, r, o)
                        }), t, r)
                    })),
                    Ur = r((function(e, n) {
                        return Fr((function(e, n, t) {
                            return n
                        }), e, n)
                    })),
                    br = r((function(e, n) {
                        return Fr((function(e, n, t) {
                            return t
                        }), e, n)
                    })),
                    Ar = l((function(e, n, t) {
                        return Fr((function(n, t, r) {
                            return e(t, r)
                        }), n, t)
                    })),
                    jr = r((function(e, n) {
                        return Bt({}, n, e)
                    })),
                    Er = r((function(e, n) {
                        return Bt({}, e, n)
                    })),
                    Sr = l((function(e, n, t) {
                        return vr((function(n, t, r) {
                            return e(t, r)
                        }), n, t)
                    })),
                    Or = r((function(e, n) {
                        return n < e ? n : e
                    })),
                    xr = l((function(e, n, t) {
                        return e(t) < e(n) ? t : n
                    })),
                    Cr = r((function(e, n) {
                        return e % n
                    })),
                    wr = l((function(e, n, t) {
                        var r = t.length,
                            o = t.slice(),
                            a = e < 0 ? r + e : e,
                            i = n < 0 ? r + n : n,
                            u = o.splice(a, 1);
                        return a < 0 || t.length <= a || i < 0 || t.length <= i ? t : [].concat(o.slice(0, i)).concat(u).concat(o.slice(i, t.length))
                    })),
                    Mr = r((function(e, n) {
                        return e * n
                    })),
                    Pr = t((function(e) {
                        return -e
                    })),
                    Nr = r((function(e, n) {
                        return v(on(e), n)
                    })),
                    Tr = t((function(e) {
                        return c(e < 0 ? 1 : e + 1, (function() {
                            return K(e, arguments)
                        }))
                    })),
                    Dr = l((function(e, n, t) {
                        return e(n(t))
                    })),
                    Ir = t((function(e) {
                        return [e]
                    })),
                    _r = r((function(e, n) {
                        for (var t = {}, r = {}, o = 0, a = e.length; o < a;) o += r[e[o]] = 1;
                        for (var i in n) r.hasOwnProperty(i) || (t[i] = n[i]);
                        return t
                    })),
                    Br = t((function(e) {
                        var n, t = !1;
                        return i(e.length, (function() {
                            return t ? n : (t = !0, n = e.apply(this, arguments))
                        }))
                    }));

                function Lr(e, n) {
                    if (null == n || !ye(n.then)) throw new TypeError("`" + e + "` expected a Promise, received " + fn(n, []))
                }
                var Rr = r((function(e, n) {
                        return Lr("otherwise", n), n.then(null, e)
                    })),
                    kr = function(e) {
                        return {
                            value: e,
                            map: function(n) {
                                return kr(n(e))
                            }
                        }
                    },
                    Gr = l((function(e, n, t) {
                        return e((function(e) {
                            return kr(n(e))
                        }))(t).value
                    })),
                    Kr = r((function(e, n) {
                        return [e, n]
                    }));

                function Vr(e) {
                    return r((function(n, t) {
                        return i(Math.max(0, n.length - t.length), (function() {
                            return n.apply(this, e(t, arguments))
                        }))
                    }))
                }
                var Wr = Vr(a),
                    Hr = Vr(pt(a)),
                    qr = Yt([sn, ln]),
                    zr = l((function(e, n, t) {
                        return Qe(W(e, t), n)
                    })),
                    Zr = l((function(e, n, t) {
                        return jn(e, W(n, t))
                    })),
                    Yr = l((function(e, n, t) {
                        return e(W(n, t))
                    })),
                    Xr = r((function(e, n) {
                        for (var t = {}, r = 0; r < e.length;) e[r] in n && (t[e[r]] = n[e[r]]), r += 1;
                        return t
                    })),
                    Jr = r((function(e, n) {
                        for (var t = {}, r = 0, o = e.length; r < o;) {
                            var a = e[r];
                            t[a] = n[a], r += 1
                        }
                        return t
                    })),
                    Qr = r((function(e, n) {
                        var t = {};
                        for (var r in n) e(n[r], r, n) && (t[r] = n[r]);
                        return t
                    })),
                    $r = r((function(e, n) {
                        return a([e], n)
                    })),
                    eo = z(Mr, 1),
                    no = r((function(e, n) {
                        return c(n.length, (function() {
                            for (var t = [], r = 0; r < n.length;) t.push(n[r].call(this, arguments[r])), r += 1;
                            return e.apply(this, t.concat(Array.prototype.slice.call(arguments, n.length)))
                        }))
                    })),
                    to = no(U, [Jr, We]),
                    ro = l((function(e, n, t) {
                        return Qe(n, t[e])
                    })),
                    oo = l((function(e, n, t) {
                        return qt(e, t[n])
                    })),
                    ao = l((function(e, n, t) {
                        return Zr(e, [n], t)
                    })),
                    io = l((function(e, n, t) {
                        return e(t[n])
                    })),
                    uo = r((function(e, n) {
                        return e.map((function(e) {
                            return W([e], n)
                        }))
                    })),
                    co = r((function(e, n) {
                        if (!Qt(e) || !Qt(n)) throw new TypeError("Both arguments to range must be numbers");
                        for (var t = [], r = e; r < n;) t.push(r), r += 1;
                        return t
                    })),
                    so = l((function(e, n, t) {
                        for (var r = t.length - 1; 0 <= r;) n = e(t[r], n), r -= 1;
                        return n
                    })),
                    lo = u(4, [], (function(e, n, t, r) {
                        return w((function(t, r) {
                            return e(t, r) ? n(t, r) : y(t)
                        }), t, r)
                    })),
                    fo = t(y),
                    po = r((function(e, n) {
                        var t, r = +n,
                            o = 0;
                        if (r < 0 || isNaN(r)) throw new RangeError("n must be a non-negative number");
                        for (t = Array(r); o < r;) t[o] = e(o), o += 1;
                        return t
                    })),
                    ho = r((function(e, n) {
                        return po(Y(e), n)
                    })),
                    yo = l((function(e, n, t) {
                        return t.replace(e, n)
                    })),
                    mo = l((function(e, n, t) {
                        for (var r = 0, o = t.length, a = [n]; r < o;) n = e(n, t[r]), a[r + 1] = n, r += 1;
                        return a
                    })),
                    go = r((function(e, n) {
                        return "function" == typeof n.sequence ? n.sequence(e) : so((function(e, n) {
                            return ee(k($r, e), n)
                        }), e([]), n)
                    })),
                    vo = l((function(e, n, t) {
                        return Gr(e, Y(n), t)
                    })),
                    Fo = r((function(e, n) {
                        return Array.prototype.slice.call(n, 0).sort(e)
                    })),
                    Uo = r((function(e, n) {
                        return Array.prototype.slice.call(n, 0).sort((function(n, t) {
                            var r = e(n),
                                o = e(t);
                            return r < o ? -1 : o < r ? 1 : 0
                        }))
                    })),
                    bo = r((function(e, n) {
                        return Array.prototype.slice.call(n, 0).sort((function(n, t) {
                            for (var r = 0, o = 0; 0 === r && o < e.length;) r = e[o](n, t), o += 1;
                            return r
                        }))
                    })),
                    Ao = Ht(1, "split"),
                    jo = r((function(e, n) {
                        return [De(0, e, n), De(e, $t(n), n)]
                    })),
                    Eo = r((function(e, n) {
                        if (e <= 0) throw Error("First argument to splitEvery must be a positive integer");
                        for (var t = [], r = 0; r < n.length;) t.push(De(r, r += e, n));
                        return t
                    })),
                    So = r((function(e, n) {
                        for (var t = 0, r = n.length, o = []; t < r && !e(n[t]);) o.push(n[t]), t += 1;
                        return [o, Array.prototype.slice.call(n, t)]
                    })),
                    Oo = r((function(e, n) {
                        return Qe(Bn(e.length, n), e)
                    })),
                    xo = r((function(e, n) {
                        return +e - +n
                    })),
                    Co = r((function(e, n) {
                        return dn(xn(e, n), xn(n, e))
                    })),
                    wo = l((function(e, n, t) {
                        return dn(Cn(e, n, t), Cn(e, t, n))
                    })),
                    Mo = r((function(e, n) {
                        for (var t = n.length - 1; 0 <= t && e(n[t]);) t -= 1;
                        return De(t + 1, 1 / 0, n)
                    }));

                function Po(e, n) {
                    this.xf = n, this.f = e
                }
                Po.prototype["@@transducer/init"] = m.init, Po.prototype["@@transducer/result"] = m.result, Po.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n) ? this.xf["@@transducer/step"](e, n) : y(e)
                };
                var No = r(h(["takeWhile"], r((function(e, n) {
                    return new Po(e, n)
                })), (function(e, n) {
                    for (var t = 0, r = n.length; t < r && e(n[t]);) t += 1;
                    return De(0, t, n)
                })));

                function To(e, n) {
                    this.xf = n, this.f = e
                }
                To.prototype["@@transducer/init"] = m.init, To.prototype["@@transducer/result"] = m.result, To.prototype["@@transducer/step"] = function(e, n) {
                    return this.f(n), this.xf["@@transducer/step"](e, n)
                };
                var Do = r(h([], r((function(e, n) {
                    return new To(e, n)
                })), (function(e, n) {
                    return e(n), n
                })));

                function Io(e) {
                    return {
                        value: e,
                        "fantasy-land/map": function() {
                            return this
                        }
                    }
                }
                var _o = r((function(e, n) {
                        if (! function(e) {
                                return "[object RegExp]" === Object.prototype.toString.call(e)
                            }(e)) throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + pn(e));
                        return Se(e).test(n)
                    })),
                    Bo = r((function(e, n) {
                        return Lr("andThen", n), n.then(e)
                    })),
                    Lo = Ht(0, "toLowerCase"),
                    Ro = t((function(e) {
                        var n = [];
                        for (var t in e) N(t, e) && (n[n.length] = [t, e[t]]);
                        return n
                    })),
                    ko = t((function(e) {
                        var n = [];
                        for (var t in e) n[n.length] = [t, e[t]];
                        return n
                    })),
                    Go = Ht(0, "toUpperCase"),
                    Ko = c(4, (function(e, n, t, r) {
                        return w(e("function" == typeof n ? E(n) : n), t, r)
                    })),
                    Vo = t((function(e) {
                        for (var n = 0, t = []; n < e.length;) {
                            for (var r = e[n], o = 0; o < r.length;) void 0 === t[o] && (t[o] = []), t[o].push(r[o]), o += 1;
                            n += 1
                        }
                        return t
                    })),
                    Wo = l((function(e, n, t) {
                        return "function" == typeof t["fantasy-land/traverse"] ? t["fantasy-land/traverse"](n, e) : go(e, k(n, t))
                    })),
                    Ho = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
                    qo = "function" != typeof String.prototype.trim || Ho.trim() ? t((function(e) {
                        var n = RegExp("^[" + Ho + "][" + Ho + "]*"),
                            t = RegExp("[" + Ho + "][" + Ho + "]*$");
                        return e.replace(n, "").replace(t, "")
                    })) : t((function(e) {
                        return e.trim()
                    })),
                    zo = r((function(e, n) {
                        return i(e.length, (function() {
                            try {
                                return e.apply(this, arguments)
                            } catch (e) {
                                return n.apply(this, a([e], arguments))
                            }
                        }))
                    })),
                    Zo = t((function(e) {
                        return function() {
                            return e(Array.prototype.slice.call(arguments, 0))
                        }
                    })),
                    Yo = t((function(e) {
                        return de(1, e)
                    })),
                    Xo = r((function(e, n) {
                        return c(e, (function() {
                            for (var t, r = 1, o = n, a = 0; r <= e && "function" == typeof o;) o = o.apply(this, Array.prototype.slice.call(arguments, a, t = r === e ? arguments.length : a + o.length)), r += 1, a = t;
                            return o
                        }))
                    })),
                    Jo = r((function(e, n) {
                        for (var t = e(n), r = []; t && t.length;) r[r.length] = t[0], t = e(t[1]);
                        return r
                    })),
                    Qo = r(Le(Dt, a)),
                    $o = r((function(e, n) {
                        for (var t, r = 0, o = n.length, a = []; r < o;) Ze(e, t = n[r], a) || (a[a.length] = t), r += 1;
                        return a
                    })),
                    ea = l((function(e, n, t) {
                        return $o(e, a(n, t))
                    })),
                    na = l((function(e, n, t) {
                        return e(t) ? t : n(t)
                    })),
                    ta = je(Ve),
                    ra = l((function(e, n, t) {
                        for (var r = t; !e(r);) r = n(r);
                        return r
                    })),
                    oa = t((function(e) {
                        var n, t = [];
                        for (n in e) t[t.length] = e[n];
                        return t
                    })),
                    aa = r((function(e, n) {
                        return e(Io)(n).value
                    })),
                    ia = l((function(e, n, t) {
                        return e(t) ? n(t) : t
                    })),
                    ua = r((function(e, n) {
                        for (var t in e)
                            if (N(t, e) && !e[t](n[t])) return !1;
                        return !0
                    })),
                    ca = r((function(e, n) {
                        return ua(k(Qe, e), n)
                    })),
                    sa = r((function(e, n) {
                        return ln(pt(en)(e), n)
                    })),
                    la = r((function(e, n) {
                        return !!(!e ^ !n)
                    })),
                    fa = r((function(e, n) {
                        for (var t, r = 0, o = e.length, a = n.length, i = []; r < o;) {
                            for (t = 0; t < a;) i[i.length] = [e[r], n[t]], t += 1;
                            r += 1
                        }
                        return i
                    })),
                    pa = r((function(e, n) {
                        for (var t = [], r = 0, o = Math.min(e.length, n.length); r < o;) t[r] = [e[r], n[r]], r += 1;
                        return t
                    })),
                    da = r((function(e, n) {
                        for (var t = 0, r = Math.min(e.length, n.length), o = {}; t < r;) o[e[t]] = n[t], t += 1;
                        return o
                    })),
                    ha = l((function(e, n, t) {
                        for (var r = [], o = 0, a = Math.min(n.length, t.length); o < a;) r[o] = e(n[o], t[o]), o += 1;
                        return r
                    })),
                    ya = t((function(e) {
                        return c(e.length, (function() {
                            var n = arguments;
                            return function() {
                                return e.apply(this, n)
                            }
                        }))
                    }));
                e.F = function() {
                    return !1
                }, e.T = function() {
                    return !0
                }, e.__ = {
                    "@@functional/placeholder": !0
                }, e.add = o, e.addIndex = s, e.adjust = f, e.all = v, e.allPass = Z, e.always = Y, e.and = X, e.any = Q, e.anyPass = $, e.ap = ee, e.aperture = te, e.append = re, e.apply = oe, e.applySpec = ue, e.applyTo = ce, e.ascend = se, e.assoc = le, e.assocPath = pe, e.binary = he, e.bind = S, e.both = ve, e.call = Ue, e.chain = je, e.clamp = Ee, e.clone = Ce, e.comparator = we, e.complement = Pe, e.compose = Le, e.composeK = Re, e.composeP = function() {
                    if (0 === arguments.length) throw Error("composeP requires at least one argument");
                    return Ge.apply(this, Be(arguments))
                }, e.composeWith = qe, e.concat = dn, e.cond = hn, e.construct = mn, e.constructN = yn, e.contains = gn, e.converge = vn, e.countBy = bn, e.curry = Fe, e.curryN = c, e.dec = An, e.defaultTo = jn, e.descend = En, e.difference = xn, e.differenceWith = Cn, e.dissoc = wn, e.dissocPath = Nn, e.divide = Tn, e.drop = In, e.dropLast = Rn, e.dropLastWhile = Gn, e.dropRepeats = qn, e.dropRepeatsWith = Hn, e.dropWhile = Zn, e.either = Xn, e.empty = Jn, e.endsWith = $n, e.eqBy = et, e.eqProps = nt, e.equals = Qe, e.evolve = tt, e.filter = sn, e.find = ot, e.findIndex = it, e.findLast = ct, e.findLastIndex = lt, e.flatten = ft, e.flip = pt, e.forEach = dt, e.forEachObjIndexed = ht, e.fromPairs = yt, e.groupBy = mt, e.groupWith = gt, e.gt = vt, e.gte = Ft, e.has = bt, e.hasIn = At, e.hasPath = Ut, e.head = Ke, e.identical = jt, e.identity = We, e.ifElse = Et, e.inc = St, e.includes = Ot, e.indexBy = xt, e.indexOf = Ct, e.init = wt, e.innerJoin = Mt, e.insert = Pt, e.insertAll = Nt, e.intersection = It, e.intersperse = _t, e.into = Kt, e.invert = Vt, e.invertObj = Wt, e.invoker = Ht, e.is = qt, e.isEmpty = zt, e.isNil = fe, e.join = Zt, e.juxt = Yt, e.keys = R, e.keysIn = Xt, e.last = Wn, e.lastIndexOf = Jt, e.length = $t, e.lens = er, e.lensIndex = nr, e.lensPath = tr, e.lensProp = rr, e.lift = ge, e.liftN = me, e.lt = or, e.lte = ar, e.map = k, e.mapAccum = ir, e.mapAccumRight = ur, e.mapObjIndexed = cr, e.match = sr, e.mathMod = lr, e.max = F, e.maxBy = fr, e.mean = dr, e.median = hr, e.memoizeWith = yr, e.merge = mr, e.mergeAll = gr, e.mergeDeepLeft = Ur, e.mergeDeepRight = br, e.mergeDeepWith = Ar, e.mergeDeepWithKey = Fr, e.mergeLeft = jr, e.mergeRight = Er, e.mergeWith = Sr, e.mergeWithKey = vr, e.min = Or, e.minBy = xr, e.modulo = Cr, e.move = wr, e.multiply = Mr, e.nAry = de, e.negate = Pr, e.none = Nr, e.not = Me, e.nth = K, e.nthArg = Tr, e.o = Dr, e.objOf = Lt, e.of = Ir, e.omit = _r, e.once = Br, e.or = Yn, e.otherwise = Rr, e.over = Gr, e.pair = Kr, e.partial = Wr, e.partialRight = Hr, e.partition = qr, e.path = W, e.paths = V, e.pathEq = zr, e.pathOr = Zr, e.pathSatisfies = Yr, e.pick = Xr, e.pickAll = Jr, e.pickBy = Qr, e.pipe = _e, e.pipeK = function() {
                    if (0 === arguments.length) throw Error("pipeK requires at least one argument");
                    return Re.apply(this, Be(arguments))
                }, e.pipeP = Ge, e.pipeWith = He, e.pluck = q, e.prepend = $r, e.product = eo, e.project = to, e.prop = H, e.propEq = ro, e.propIs = oo, e.propOr = ao, e.propSatisfies = io, e.props = uo, e.range = co, e.reduce = z, e.reduceBy = Un, e.reduceRight = so, e.reduceWhile = lo, e.reduced = fo, e.reject = ln, e.remove = Mn, e.repeat = ho, e.replace = yo, e.reverse = Be, e.scan = mo, e.sequence = go, e.set = vo, e.slice = De, e.sort = Fo, e.sortBy = Uo, e.sortWith = bo, e.split = Ao, e.splitAt = jo, e.splitEvery = Eo, e.splitWhen = So, e.startsWith = Oo, e.subtract = xo, e.sum = pr, e.symmetricDifference = Co, e.symmetricDifferenceWith = wo, e.tail = Ie, e.take = Bn, e.takeLast = Qn, e.takeLastWhile = Mo, e.takeWhile = No, e.tap = Do, e.test = _o, e.andThen = Bo, e.times = po, e.toLower = Lo, e.toPairs = Ro, e.toPairsIn = ko, e.toString = pn, e.toUpper = Go, e.transduce = Ko, e.transpose = Vo, e.traverse = Wo, e.trim = qo, e.tryCatch = zo, e.type = Oe, e.unapply = Zo, e.unary = Yo, e.uncurryN = Xo, e.unfold = Jo, e.union = Qo, e.unionWith = ea, e.uniq = Dt, e.uniqBy = Tt, e.uniqWith = $o, e.unless = na, e.unnest = ta, e.until = ra, e.update = Pn, e.useWith = no, e.values = ae, e.valuesIn = oa, e.view = aa, e.when = ia, e.where = ua, e.whereEq = ca, e.without = sa, e.xor = la, e.xprod = fa, e.zip = pa, e.zipObj = da, e.zipWith = ha, e.thunkify = ya, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(n)
        },
        BdAR: function(e, n, t) {
            "use strict";
            var r = t("mPvQ"),
                o = t("/GRZ"),
                a = t("i2R6"),
                i = (t("qXWd"), t("48fX")),
                u = t("tCBg"),
                c = t("T0f4");

            function s(e) {
                var n = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = c(e);
                    if (n) {
                        var o = c(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return u(this, t)
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t("q1tI"),
                f = function(e) {
                    i(t, e);
                    var n = s(t);

                    function t(e) {
                        var a;
                        return o(this, t), (a = n.call(this, e)).emitChange = function() {
                            a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                    }
                    return a(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), t
                }(l.Component);
            n.default = f
        },
        Bnag: function(e, n) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        BwWR: function(e, n, t) {
            "use strict";
            var r = t("TqRt");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = r(t("J4zp")),
                a = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return Object.entries(e).filter((function(e) {
                        return (0, o.default)(e, 2)[1]
                    })).map((function(e) {
                        var n = (0, o.default)(e, 2),
                            t = n[0],
                            r = n[1];
                        return r.constructor === String ? r : t
                    })).concat(n).join(" ").trim()
                };
            n.default = a
        },
        "C+bE": function(e, n) {
            function t(n) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? (e.exports = t = function(e) {
                    return typeof e
                }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = t = function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.default = e.exports, e.exports.__esModule = !0), t(n)
            }
            e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        CM2u: function(e, n, t) {
            "use strict";
            var r;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.HeadManagerContext = void 0;
            var o = ((r = t("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            n.HeadManagerContext = o
        },
        Cpv8: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return c
            })), t.d(n, "a", (function() {
                return h
            })), t.d(n, "c", (function() {
                return y
            }));
            var r, o, a, i = t("cpVT"),
                u = t("xvhg");

            function c(e, n) {
                switch (e) {
                    case "AUDIOMACK_ALBUM":
                    case "AUDIOMACK_PLAYLIST":
                        return 400;
                    case "AUDIOMACK_SONG":
                        return 252;
                    case "SPOTIFY_ALBUM":
                    case "SPOTIFY_ARTIST":
                        return 392;
                    case "SOUNDCLOUD_ARTIST":
                    case "SOUNDCLOUD_PLAYLIST":
                        return 314;
                    case "SOUNDCLOUD_SONG":
                        return 359;
                    case "SPOTIFY_PLAYLIST":
                        return 380;
                    case "SPOTIFY_EPISODE":
                    case "SPOTIFY_SHOW":
                        return 232;
                    case "SPOTIFY_SONG":
                        return Math.min(480, 80 + n);
                    default:
                        return 152
                }
            }! function(e) {
                e.song = "song", e.album = "album"
            }(a || (a = {}));
            var s = function(e) {
                    switch (e) {
                        case "SOUNDCLOUD_PLAYLIST":
                        case "SPOTIFY_ALBUM":
                            return a.album;
                        case "SOUNDCLOUD_SONG":
                        case "SPOTIFY_SONG":
                            return a.song;
                        default:
                            return
                    }
                },
                l = function(e) {
                    return /https?:\/\/(.*\.)?(song|album|artist|playlist|pods)\.link/.test(e)
                },
                f = function(e) {
                    return e.split("/").slice(-1)[0]
                },
                p = (r = {}, Object(i.a)(r, a.song, "tracks"), Object(i.a)(r, a.album, "playlists"), r),
                d = (o = {}, Object(i.a)(o, a.song, "track"), Object(i.a)(o, a.album, "album"), o),
                h = function(e) {
                    var n = e.url,
                        t = e.linkType,
                        r = e.isSingle,
                        o = e.id;
                    switch (t) {
                        case "AUDIOMACK_ALBUM":
                        case "AUDIOMACK_PLAYLIST":
                        case "AUDIOMACK_SONG":
                            return function(e) {
                                var n = e.url.split("?"),
                                    t = Object(u.a)(n, 1)[0];
                                if (!l(t)) {
                                    var r = t.match(/audiomack\.com\/.+\/(album|song|playlist)\/.+/) || [],
                                        o = Object(u.a)(r, 2)[1];
                                    return o && (t = t.replace("/" + o, "").replace("audiomack.com", "audiomack.com/" + o)), (t = t.replace("audiomack.com", "audiomack.com/embed")) + "?background=1"
                                }
                            }({
                                url: n,
                                linkType: t
                            });
                        case "SOUNDCLOUD_ARTIST":
                        case "SOUNDCLOUD_PLAYLIST":
                        case "SOUNDCLOUD_SONG":
                            return function(e) {
                                var n = e.url,
                                    t = e.linkType;
                                if (l(n)) {
                                    var r = f(n),
                                        o = s(t);
                                    if (!r || !o) return;
                                    n = "https://api.soundcloud.com/".concat(p[o], "/").concat(r)
                                }
                                return "https://w.soundcloud.com/player/?url=" + encodeURIComponent(n) + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                            }({
                                url: n,
                                linkType: t
                            });
                        case "SPOTIFY_ALBUM":
                        case "SPOTIFY_ARTIST":
                        case "SPOTIFY_EPISODE":
                        case "SPOTIFY_PLAYLIST":
                        case "SPOTIFY_SHOW":
                        case "SPOTIFY_SONG":
                            return function(e) {
                                var n = e.url,
                                    t = e.linkType,
                                    r = e.isSingle,
                                    o = e.id;
                                if (n = n.split(/[?#]/)[0], /^spotify:(track|album|artist|playlist|show|episode):\w+/.test(n)) {
                                    var a = n.split(":"),
                                        i = Object(u.a)(a, 3),
                                        c = i[1],
                                        p = i[2];
                                    n = "https://open.spotify.com/embed/".concat(c, "/").concat(p)
                                }
                                if (l(n)) {
                                    var h = f(n),
                                        y = s(t);
                                    if (!h || !y) return;
                                    n = "https://open.spotify.com/embed/".concat(d[y], "/").concat(h)
                                }
                                return n.includes("embed/") || (n = (n = n.replace(/user\/\w+\//, "")).replace("spotify.com", "spotify.com/embed"), r && (n = "https://open.spotify.com/embed/track/".concat(o))), n
                            }({
                                url: n,
                                linkType: t,
                                isSingle: r,
                                id: o
                            });
                        default:
                            return
                    }
                },
                y = function(e) {
                    var n = e.thumbnailWidth,
                        t = e.thumbnailHeight,
                        r = 1;
                    return n && t && n !== t && (r = parseFloat((n / t).toFixed(2))), r
                }
        },
        Cwc5: function(e, n, t) {
            var r = t("NKxu"),
                o = t("Npjl");
            e.exports = function(e, n) {
                var t = o(e, n);
                return r(t) ? t : void 0
            }
        },
        DSRE: function(e, n, t) {
            (function(e) {
                var r = t("Kz5y"),
                    o = t("B8du"),
                    a = n && !n.nodeType && n,
                    i = a && "object" == typeof e && e && !e.nodeType && e,
                    u = i && i.exports === a ? r.Buffer : void 0,
                    c = (u ? u.isBuffer : void 0) || o;
                e.exports = c
            }).call(this, t("LY0y")(e))
        },
        DVum: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            n.default = {
                AF: "Africa",
                AN: "Antarctica",
                AS: "Asia",
                EU: "Europe",
                NA: "North America",
                OC: "Oceania",
                SA: "South America"
            }
        },
        "E+oP": function(e, n, t) {
            var r = t("A90E"),
                o = t("QqLw"),
                a = t("03A+"),
                i = t("Z0cm"),
                u = t("MMmD"),
                c = t("DSRE"),
                s = t("6sVZ"),
                l = t("c6wG"),
                f = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (null == e) return !0;
                if (u(e) && (i(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || l(e) || a(e))) return !e.length;
                var n = o(e);
                if ("[object Map]" == n || "[object Set]" == n) return !e.size;
                if (s(e)) return !r(e).length;
                for (var t in e)
                    if (f.call(e, t)) return !1;
                return !0
            }
        },
        E2jh: function(e, n, t) {
            var r = t("2gN3"),
                o = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!o && o in e
            }
        },
        EbDI: function(e, n) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        ExA7: function(e, n) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        FqS6: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t("BCwL"),
                o = function(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) t[o - 1] = arguments[o];
                    return r.pipe.apply(void 0, t)(e)
                };
            n.default = o
        },
        GoyQ: function(e, n) {
            e.exports = function(e) {
                var n = typeof e;
                return null != e && ("object" == n || "function" == n)
            }
        },
        HOxn: function(e, n, t) {
            var r = t("Cwc5")(t("Kz5y"), "Promise");
            e.exports = r
        },
        Ijbi: function(e, n, t) {
            var r = t("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        J4zp: function(e, n, t) {
            var r = t("wTVA"),
                o = t("m0LI"),
                a = t("ZhPi"),
                i = t("wkBT");
            e.exports = function(e, n) {
                return r(e) || o(e, n) || a(e, n) || i()
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        JTzB: function(e, n, t) {
            var r = t("NykK"),
                o = t("ExA7");
            e.exports = function(e) {
                return o(e) && "[object Arguments]" == r(e)
            }
        },
        KJNy: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t("BCwL"),
                o = (0, r.curry)((function(e, n, t) {
                    var o = (0, r.lensPath)(e.split("."));
                    return (0, r.set)(o, n, t)
                }));
            n.default = o
        },
        "KXE+": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e, n) {
                for (var t = [], r = 0; r < e.length;) t.push(e.slice(r, r += n));
                return t
            };
            n.default = r
        },
        KckH: function(e, n, t) {
            var r = t("7eYB");
            e.exports = function(e, n) {
                if (e) {
                    if ("string" === typeof e) return r(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, n) : void 0
                }
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        KfNM: function(e, n) {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        Kz5y: function(e, n, t) {
            var r = t("WFqU"),
                o = "object" == typeof self && self && self.Object === Object && self,
                a = r || o || Function("return this")();
            e.exports = a
        },
        LY0y: function(e, n) {
            (function(n) {
                e.exports = function() {
                    var e = {
                            880: function(e) {
                                e.exports = function(e) {
                                    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                                        enumerable: !0,
                                        get: function() {
                                            return e.l
                                        }
                                    }), Object.defineProperty(e, "id", {
                                        enumerable: !0,
                                        get: function() {
                                            return e.i
                                        }
                                    }), e.webpackPolyfill = 1), e
                                }
                            }
                        },
                        t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var o = t[n] = {
                                exports: {}
                            },
                            a = !0;
                        try {
                            e[n](o, o.exports, r), a = !1
                        } finally {
                            a && delete t[n]
                        }
                        return o.exports
                    }
                    return r.ab = n + "/", r(880)
                }()
            }).call(this, "/")
        },
        MMmD: function(e, n, t) {
            var r = t("lSCD"),
                o = t("shjB");
            e.exports = function(e) {
                return null != e && o(e.length) && !r(e)
            }
        },
        NKxu: function(e, n, t) {
            var r = t("lSCD"),
                o = t("E2jh"),
                a = t("GoyQ"),
                i = t("3Fdi"),
                u = /^\[object .+?Constructor\]$/,
                c = Function.prototype,
                s = Object.prototype,
                l = c.toString,
                f = s.hasOwnProperty,
                p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!a(e) || o(e)) && (r(e) ? p : u).test(i(e))
            }
        },
        NgYX: function(e, n, t) {
            "use strict";
            var r = t("TqRt");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = r(t("lSNA"));

            function a(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var i = (0, t("BCwL").curry)((function(e, n) {
                var t = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? a(Object(t), !0).forEach((function(n) {
                            (0, o.default)(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }({}, n);
                return delete t[e], t
            }));
            n.default = i
        },
        Npjl: function(e, n) {
            e.exports = function(e, n) {
                return null == e ? void 0 : e[n]
            }
        },
        NykK: function(e, n, t) {
            var r = t("nmnc"),
                o = t("AP2z"),
                a = t("KfNM"),
                i = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
            }
        },
        "Of+w": function(e, n, t) {
            var r = t("Cwc5")(t("Kz5y"), "WeakMap");
            e.exports = r
        },
        PBQd: function(e, n, t) {
            "use strict";
            var r = t("TqRt");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getLanguageByCode = n.getContinentByCode = n.getCountryByCode = void 0;
            var o = r(t("hJQ5")),
                a = r(t("xvI3")),
                i = r(t("DVum"));
            n.getCountryByCode = function(e) {
                return o.default[e] || null
            };
            n.getContinentByCode = function(e) {
                return i.default[e] || null
            };
            n.getLanguageByCode = function(e) {
                return a.default[e] || null
            }
        },
        PByC: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.displayShopifyMoneyAmountWithCode = n.convertShopifyMoneyToMajorUnit = n.isSharedCurrencySymbol = n.convertToStoredCurrency = n.convertToDisplayCurrencyValue = n.convertToDisplayCurrency = n.getCurrencySymbol = n.isDecimalCurrency = void 0;
            var r = {
                    AUD: "$",
                    BRL: "R$",
                    CAD: "$",
                    CHF: "fr. ",
                    CNY: "CN\xa5",
                    CZK: "K\u010d",
                    DKK: "kr",
                    EUR: "\u20ac",
                    HKD: "$",
                    HUF: "Ft",
                    GBP: "\xa3",
                    ILS: "\u20aa",
                    JPY: "\xa5",
                    MYR: "RM",
                    MXN: "$",
                    NZD: "$",
                    NOK: "kr",
                    PHP: "\u20b1",
                    PLN: "z\u0142",
                    RUB: "\u20bd",
                    SGD: "$",
                    SEK: "kr",
                    TWD: "NT$",
                    THB: "\u0e3f",
                    USD: "$"
                },
                o = ["JPY", "HUF", "TWD"],
                a = function(e) {
                    return !o.includes(e)
                };
            n.isDecimalCurrency = a;
            var i = function(e) {
                return r[e] || "$"
            };
            n.getCurrencySymbol = i;
            n.convertToDisplayCurrency = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD",
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Intl.NumberFormat().resolvedOptions().locale,
                    r = a(n) ? e / 100 : e,
                    o = "".concat(i(n)).concat(u(e, n).toFixed(e % 100 == 0 ? 0 : 2));
                return "en" != t.substr(0, 2) && Intl.NumberFormat.supportedLocalesOf([t], {
                    localeMatcher: "lookup"
                }).includes(t) ? new Intl.NumberFormat(t.substr(0, 2), {
                    style: "currency",
                    currency: n,
                    currencyDisplay: "narrowSymbol"
                }).format(r) : o
            };
            var u = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
                return a(n) ? e / 100 : e
            };
            n.convertToDisplayCurrencyValue = u;
            n.convertToStoredCurrency = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
                return a(n) ? 100 * e : e
            };
            n.isSharedCurrencySymbol = function(e) {
                return "$" === i(e)
            };
            var c = function(e, n) {
                var t = parseFloat(e);
                return a(n) ? t ? parseFloat(e) / 100 : 0 : t ? parseFloat(e) : 0
            };
            n.convertShopifyMoneyToMajorUnit = c;
            n.displayShopifyMoneyAmountWithCode = function(e) {
                var n, t, r = e.value,
                    o = e.currencyCode;
                if (!r || !o) return "";
                var a = "".concat(o, " ").concat(r);
                if (null === (n = Intl) || void 0 === n || !n.NumberFormat() || null === (t = Intl) || void 0 === t || !t.NumberFormat().resolvedOptions()) return a;
                var i = Intl.NumberFormat().resolvedOptions().locale,
                    u = c(r, o),
                    s = u % 1 === 0 ? 0 : 2;
                try {
                    return new Intl.NumberFormat(i, {
                        style: "currency",
                        currency: o,
                        currencyDisplay: "narrowSymbol",
                        minimumFractionDigits: s,
                        maximumFractionDigits: 2
                    }).format(u)
                } catch (l) {
                    return a
                }
            }
        },
        Qetd: function(e, n, t) {
            "use strict";
            var r = Object.assign.bind(Object);
            e.exports = r, e.exports.default = e.exports
        },
        QqLw: function(e, n, t) {
            var r = t("tadb"),
                o = t("ebwN"),
                a = t("HOxn"),
                i = t("yGk4"),
                u = t("Of+w"),
                c = t("NykK"),
                s = t("3Fdi"),
                l = "[object Map]",
                f = "[object Promise]",
                p = "[object Set]",
                d = "[object WeakMap]",
                h = "[object DataView]",
                y = s(r),
                m = s(o),
                g = s(a),
                v = s(i),
                F = s(u),
                U = c;
            (r && U(new r(new ArrayBuffer(1))) != h || o && U(new o) != l || a && U(a.resolve()) != f || i && U(new i) != p || u && U(new u) != d) && (U = function(e) {
                var n = c(e),
                    t = "[object Object]" == n ? e.constructor : void 0,
                    r = t ? s(t) : "";
                if (r) switch (r) {
                    case y:
                        return h;
                    case m:
                        return l;
                    case g:
                        return f;
                    case v:
                        return p;
                    case F:
                        return d
                }
                return n
            }), e.exports = U
        },
        RIqP: function(e, n, t) {
            var r = t("Ijbi"),
                o = t("EbDI"),
                a = t("ZhPi"),
                i = t("Bnag");
            e.exports = function(e) {
                return r(e) || o(e) || a(e) || i()
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        SUc9: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t("BCwL"),
                o = t("vpIL"),
                a = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.identity;
                    if (!n || "null" === n) throw new Error("Missing value for ".concat(e, " in configuration"));
                    return (0, o.setProp)(e, t(n))
                };
            n.default = a
        },
        T0f4: function(e, n) {
            function t(n) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, e.exports.default = e.exports, e.exports.__esModule = !0, t(n)
            }
            e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        TqRt: function(e, n) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        UkzX: function(e, n, t) {
            "use strict";
            var r;
            Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = n.ResponseStatus = void 0, n.ResponseStatus = r,
                function(e) {
                    e.INITIAL = "INITIAL", e.LOADING = "LOADING", e.SUCCESS = "SUCCESS", e.ERROR = "ERROR"
                }(r || (n.ResponseStatus = r = {}));
            var o = function(e, n) {
                    return e.some((function(e) {
                        return e === n
                    }))
                },
                a = function(e, n) {
                    return e.every((function(e) {
                        return e === n
                    }))
                },
                i = {
                    isLoading: function() {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        return o(n, r.LOADING)
                    },
                    hasError: function() {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        return o(n, r.ERROR)
                    },
                    isFetched: function() {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        return a(n, r.SUCCESS)
                    },
                    isInitial: function() {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        return o(n, r.INITIAL)
                    }
                };
            n.default = i
        },
        V6Ve: function(e, n, t) {
            var r = t("kekF")(Object.keys, Object);
            e.exports = r
        },
        Vphi: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function() {
                return "undefined" !== typeof window
            };
            n.default = r
        },
        WFqU: function(e, n, t) {
            (function(n) {
                var t = "object" == typeof n && n && n.Object === Object && n;
                e.exports = t
            }).call(this, t("ntbh"))
        },
        WkPL: function(e, n) {
            e.exports = function(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        XE8d: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                return "undefined" !== typeof e && null !== e
            };
            n.default = r
        },
        Z0cm: function(e, n) {
            var t = Array.isArray;
            e.exports = t
        },
        ZT1V: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            n.default = function(e) {
                var n = Array.isArray(e) ? e : [e],
                    t = Object.keys(n[0]),
                    r = n.map((function(e) {
                        return t.map((function(n) {
                            return JSON.stringify(e[n], (function(e, n) {
                                return n || ""
                            }))
                        })).join(",")
                    }));
                return r.unshift(t.join(",")), r.join("\r\n")
            }
        },
        ZUlk: function(e, n, t) {
            "use strict";
            var r = t("vpIL"),
                o = t("sK8x"),
                a = t("E+oP"),
                i = t.n(a);
            n.a = function(e) {
                var n, t;
                if (Object(r.isBrowser)() && !i()(e)) return "undefined" === typeof(null === (n = window) || void 0 === n ? void 0 : n.webAuth) && (window.webAuth = new o.a(e)), null === (t = window) || void 0 === t ? void 0 : t.webAuth
            }
        },
        ZhPi: function(e, n, t) {
            var r = t("WkPL");
            e.exports = function(e, n) {
                if (e) {
                    if ("string" === typeof e) return r(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, n) : void 0
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        "bZ/B": function(e, n, t) {
            "use strict";
            var r = t("TqRt");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = r(t("Vphi")),
                a = function(e) {
                    return (0, o.default)() && window.matchMedia("screen and (max-width: ".concat(e).concat(isNaN(e) ? "" : "px", ")")).matches
                };
            n.default = a
        },
        c6wG: function(e, n, t) {
            var r = t("dD9F"),
                o = t("sEf8"),
                a = t("mdPL"),
                i = a && a.isTypedArray,
                u = i ? o(i) : r;
            e.exports = u
        },
        cDf5: function(e, n) {
            function t(n) {
                return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        dD9F: function(e, n, t) {
            var r = t("NykK"),
                o = t("shjB"),
                a = t("ExA7"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
                return a(e) && o(e.length) && !!i[r(e)]
            }
        },
        dTAc: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isInAmpMode = i, n.useAmp = function() {
                return i(o.default.useContext(a.AmpStateContext))
            };
            var r, o = (r = t("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = t("r55Z");

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.ampFirst,
                    t = void 0 !== n && n,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    a = e.hasQuery,
                    i = void 0 !== a && a;
                return t || o && i
            }
        },
        ebwN: function(e, n, t) {
            var r = t("Cwc5")(t("Kz5y"), "Map");
            e.exports = r
        },
        hJQ5: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = {
                AD: {
                    code: "AD",
                    name: "Andorra",
                    native: "Andorra",
                    phone: "376",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["ca"],
                    emoji: "\ud83c\udde6\ud83c\udde9",
                    unicode: "U+1F1E6 U+1F1E9"
                },
                AE: {
                    code: "AE",
                    name: "United Arab Emirates",
                    native: "\u062f\u0648\u0644\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",
                    phone: "971",
                    continent: "AS",
                    currency: "AED",
                    languages: ["ar"],
                    emoji: "\ud83c\udde6\ud83c\uddea",
                    unicode: "U+1F1E6 U+1F1EA"
                },
                AF: {
                    code: "AF",
                    name: "Afghanistan",
                    native: "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
                    phone: "93",
                    continent: "AS",
                    currency: "AFN",
                    languages: ["ps", "uz", "tk"],
                    emoji: "\ud83c\udde6\ud83c\uddeb",
                    unicode: "U+1F1E6 U+1F1EB"
                },
                AG: {
                    code: "AG",
                    name: "Antigua and Barbuda",
                    native: "Antigua and Barbuda",
                    phone: "1268",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\udde6\ud83c\uddec",
                    unicode: "U+1F1E6 U+1F1EC"
                },
                AI: {
                    code: "AI",
                    name: "Anguilla",
                    native: "Anguilla",
                    phone: "1264",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\udde6\ud83c\uddee",
                    unicode: "U+1F1E6 U+1F1EE"
                },
                AL: {
                    code: "AL",
                    name: "Albania",
                    native: "Shqip\xebria",
                    phone: "355",
                    continent: "EU",
                    currency: "ALL",
                    languages: ["sq"],
                    emoji: "\ud83c\udde6\ud83c\uddf1",
                    unicode: "U+1F1E6 U+1F1F1"
                },
                AM: {
                    code: "AM",
                    name: "Armenia",
                    native: "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576",
                    phone: "374",
                    continent: "AS",
                    currency: "AMD",
                    languages: ["hy", "ru"],
                    emoji: "\ud83c\udde6\ud83c\uddf2",
                    unicode: "U+1F1E6 U+1F1F2"
                },
                AO: {
                    code: "AO",
                    name: "Angola",
                    native: "Angola",
                    phone: "244",
                    continent: "AF",
                    currency: "AOA",
                    languages: ["pt"],
                    emoji: "\ud83c\udde6\ud83c\uddf4",
                    unicode: "U+1F1E6 U+1F1F4"
                },
                AQ: {
                    code: "AQ",
                    name: "Antarctica",
                    native: "Antarctica",
                    phone: "672",
                    continent: "AN",
                    currency: "",
                    languages: [],
                    emoji: "\ud83c\udde6\ud83c\uddf6",
                    unicode: "U+1F1E6 U+1F1F6"
                },
                AR: {
                    code: "AR",
                    name: "Argentina",
                    native: "Argentina",
                    phone: "54",
                    continent: "SA",
                    currency: "ARS",
                    languages: ["es", "gn"],
                    emoji: "\ud83c\udde6\ud83c\uddf7",
                    unicode: "U+1F1E6 U+1F1F7"
                },
                AS: {
                    code: "AS",
                    name: "American Samoa",
                    native: "American Samoa",
                    phone: "1684",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en", "sm"],
                    emoji: "\ud83c\udde6\ud83c\uddf8",
                    unicode: "U+1F1E6 U+1F1F8"
                },
                AT: {
                    code: "AT",
                    name: "Austria",
                    native: "\xd6sterreich",
                    phone: "43",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["de"],
                    emoji: "\ud83c\udde6\ud83c\uddf9",
                    unicode: "U+1F1E6 U+1F1F9"
                },
                AU: {
                    code: "AU",
                    name: "Australia",
                    native: "Australia",
                    phone: "61",
                    continent: "OC",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\udde6\ud83c\uddfa",
                    unicode: "U+1F1E6 U+1F1FA"
                },
                AW: {
                    code: "AW",
                    name: "Aruba",
                    native: "Aruba",
                    phone: "297",
                    continent: "NA",
                    currency: "AWG",
                    languages: ["nl", "pa"],
                    emoji: "\ud83c\udde6\ud83c\uddfc",
                    unicode: "U+1F1E6 U+1F1FC"
                },
                AX: {
                    code: "AX",
                    name: "\xc5land",
                    native: "\xc5land",
                    phone: "358",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["sv"],
                    emoji: "\ud83c\udde6\ud83c\uddfd",
                    unicode: "U+1F1E6 U+1F1FD"
                },
                AZ: {
                    code: "AZ",
                    name: "Azerbaijan",
                    native: "Az\u0259rbaycan",
                    phone: "994",
                    continent: "AS",
                    currency: "AZN",
                    languages: ["az"],
                    emoji: "\ud83c\udde6\ud83c\uddff",
                    unicode: "U+1F1E6 U+1F1FF"
                },
                BA: {
                    code: "BA",
                    name: "Bosnia and Herzegovina",
                    native: "Bosna i Hercegovina",
                    phone: "387",
                    continent: "EU",
                    currency: "BAM",
                    languages: ["bs", "hr", "sr"],
                    emoji: "\ud83c\udde7\ud83c\udde6",
                    unicode: "U+1F1E7 U+1F1E6"
                },
                BB: {
                    code: "BB",
                    name: "Barbados",
                    native: "Barbados",
                    phone: "1246",
                    continent: "NA",
                    currency: "BBD",
                    languages: ["en"],
                    emoji: "\ud83c\udde7\ud83c\udde7",
                    unicode: "U+1F1E7 U+1F1E7"
                },
                BD: {
                    code: "BD",
                    name: "Bangladesh",
                    native: "Bangladesh",
                    phone: "880",
                    continent: "AS",
                    currency: "BDT",
                    languages: ["bn"],
                    emoji: "\ud83c\udde7\ud83c\udde9",
                    unicode: "U+1F1E7 U+1F1E9"
                },
                BE: {
                    code: "BE",
                    name: "Belgium",
                    native: "Belgi\xeb",
                    phone: "32",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["nl", "fr", "de"],
                    emoji: "\ud83c\udde7\ud83c\uddea",
                    unicode: "U+1F1E7 U+1F1EA"
                },
                BF: {
                    code: "BF",
                    name: "Burkina Faso",
                    native: "Burkina Faso",
                    phone: "226",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr", "ff"],
                    emoji: "\ud83c\udde7\ud83c\uddeb",
                    unicode: "U+1F1E7 U+1F1EB"
                },
                BG: {
                    code: "BG",
                    name: "Bulgaria",
                    native: "\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f",
                    phone: "359",
                    continent: "EU",
                    currency: "BGN",
                    languages: ["bg"],
                    emoji: "\ud83c\udde7\ud83c\uddec",
                    unicode: "U+1F1E7 U+1F1EC"
                },
                BH: {
                    code: "BH",
                    name: "Bahrain",
                    native: "\u200f\u0627\u0644\u0628\u062d\u0631\u064a\u0646",
                    phone: "973",
                    continent: "AS",
                    currency: "BHD",
                    languages: ["ar"],
                    emoji: "\ud83c\udde7\ud83c\udded",
                    unicode: "U+1F1E7 U+1F1ED"
                },
                BI: {
                    code: "BI",
                    name: "Burundi",
                    native: "Burundi",
                    phone: "257",
                    continent: "AF",
                    currency: "BIF",
                    languages: ["fr", "rn"],
                    emoji: "\ud83c\udde7\ud83c\uddee",
                    unicode: "U+1F1E7 U+1F1EE"
                },
                BJ: {
                    code: "BJ",
                    name: "Benin",
                    native: "B\xe9nin",
                    phone: "229",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr"],
                    emoji: "\ud83c\udde7\ud83c\uddef",
                    unicode: "U+1F1E7 U+1F1EF"
                },
                BL: {
                    code: "BL",
                    name: "Saint Barth\xe9lemy",
                    native: "Saint-Barth\xe9lemy",
                    phone: "590",
                    continent: "NA",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\udde7\ud83c\uddf1",
                    unicode: "U+1F1E7 U+1F1F1"
                },
                BM: {
                    code: "BM",
                    name: "Bermuda",
                    native: "Bermuda",
                    phone: "1441",
                    continent: "NA",
                    currency: "BMD",
                    languages: ["en"],
                    emoji: "\ud83c\udde7\ud83c\uddf2",
                    unicode: "U+1F1E7 U+1F1F2"
                },
                BN: {
                    code: "BN",
                    name: "Brunei",
                    native: "Negara Brunei Darussalam",
                    phone: "673",
                    continent: "AS",
                    currency: "BND",
                    languages: ["ms"],
                    emoji: "\ud83c\udde7\ud83c\uddf3",
                    unicode: "U+1F1E7 U+1F1F3"
                },
                BO: {
                    code: "BO",
                    name: "Bolivia",
                    native: "Bolivia",
                    phone: "591",
                    continent: "SA",
                    currency: "BOB,BOV",
                    languages: ["es", "ay", "qu"],
                    emoji: "\ud83c\udde7\ud83c\uddf4",
                    unicode: "U+1F1E7 U+1F1F4"
                },
                BQ: {
                    code: "BQ",
                    name: "Bonaire",
                    native: "Bonaire",
                    phone: "5997",
                    continent: "NA",
                    currency: "USD",
                    languages: ["nl"],
                    emoji: "\ud83c\udde7\ud83c\uddf6",
                    unicode: "U+1F1E7 U+1F1F6"
                },
                BR: {
                    code: "BR",
                    name: "Brazil",
                    native: "Brasil",
                    phone: "55",
                    continent: "SA",
                    currency: "BRL",
                    languages: ["pt"],
                    emoji: "\ud83c\udde7\ud83c\uddf7",
                    unicode: "U+1F1E7 U+1F1F7"
                },
                BS: {
                    code: "BS",
                    name: "Bahamas",
                    native: "Bahamas",
                    phone: "1242",
                    continent: "NA",
                    currency: "BSD",
                    languages: ["en"],
                    emoji: "\ud83c\udde7\ud83c\uddf8",
                    unicode: "U+1F1E7 U+1F1F8"
                },
                BT: {
                    code: "BT",
                    name: "Bhutan",
                    native: "\u02bcbrug-yul",
                    phone: "975",
                    continent: "AS",
                    currency: "BTN,INR",
                    languages: ["dz"],
                    emoji: "\ud83c\udde7\ud83c\uddf9",
                    unicode: "U+1F1E7 U+1F1F9"
                },
                BV: {
                    code: "BV",
                    name: "Bouvet Island",
                    native: "Bouvet\xf8ya",
                    phone: "47",
                    continent: "AN",
                    currency: "NOK",
                    languages: ["no", "nb", "nn"],
                    emoji: "\ud83c\udde7\ud83c\uddfb",
                    unicode: "U+1F1E7 U+1F1FB"
                },
                BW: {
                    code: "BW",
                    name: "Botswana",
                    native: "Botswana",
                    phone: "267",
                    continent: "AF",
                    currency: "BWP",
                    languages: ["en", "tn"],
                    emoji: "\ud83c\udde7\ud83c\uddfc",
                    unicode: "U+1F1E7 U+1F1FC"
                },
                BY: {
                    code: "BY",
                    name: "Belarus",
                    native: "\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c",
                    phone: "375",
                    continent: "EU",
                    currency: "BYN",
                    languages: ["be", "ru"],
                    emoji: "\ud83c\udde7\ud83c\uddfe",
                    unicode: "U+1F1E7 U+1F1FE"
                },
                BZ: {
                    code: "BZ",
                    name: "Belize",
                    native: "Belize",
                    phone: "501",
                    continent: "NA",
                    currency: "BZD",
                    languages: ["en", "es"],
                    emoji: "\ud83c\udde7\ud83c\uddff",
                    unicode: "U+1F1E7 U+1F1FF"
                },
                CA: {
                    code: "CA",
                    name: "Canada",
                    native: "Canada",
                    phone: "1",
                    continent: "NA",
                    currency: "CAD",
                    languages: ["en", "fr"],
                    emoji: "\ud83c\udde8\ud83c\udde6",
                    unicode: "U+1F1E8 U+1F1E6"
                },
                CC: {
                    code: "CC",
                    name: "Cocos [Keeling] Islands",
                    native: "Cocos (Keeling) Islands",
                    phone: "61",
                    continent: "AS",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\udde8\ud83c\udde8",
                    unicode: "U+1F1E8 U+1F1E8"
                },
                CD: {
                    code: "CD",
                    name: "Democratic Republic of the Congo",
                    native: "R\xe9publique d\xe9mocratique du Congo",
                    phone: "243",
                    continent: "AF",
                    currency: "CDF",
                    languages: ["fr", "ln", "kg", "sw", "lu"],
                    emoji: "\ud83c\udde8\ud83c\udde9",
                    unicode: "U+1F1E8 U+1F1E9"
                },
                CF: {
                    code: "CF",
                    name: "Central African Republic",
                    native: "K\xf6d\xf6r\xf6s\xease t\xee B\xeaafr\xeeka",
                    phone: "236",
                    continent: "AF",
                    currency: "XAF",
                    languages: ["fr", "sg"],
                    emoji: "\ud83c\udde8\ud83c\uddeb",
                    unicode: "U+1F1E8 U+1F1EB"
                },
                CG: {
                    code: "CG",
                    name: "Republic of the Congo",
                    native: "R\xe9publique du Congo",
                    phone: "242",
                    continent: "AF",
                    currency: "XAF",
                    languages: ["fr", "ln"],
                    emoji: "\ud83c\udde8\ud83c\uddec",
                    unicode: "U+1F1E8 U+1F1EC"
                },
                CH: {
                    code: "CH",
                    name: "Switzerland",
                    native: "Schweiz",
                    phone: "41",
                    continent: "EU",
                    currency: "CHE,CHF,CHW",
                    languages: ["de", "fr", "it"],
                    emoji: "\ud83c\udde8\ud83c\udded",
                    unicode: "U+1F1E8 U+1F1ED"
                },
                CI: {
                    code: "CI",
                    name: "Ivory Coast",
                    native: "C\xf4te d'Ivoire",
                    phone: "225",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr"],
                    emoji: "\ud83c\udde8\ud83c\uddee",
                    unicode: "U+1F1E8 U+1F1EE"
                },
                CK: {
                    code: "CK",
                    name: "Cook Islands",
                    native: "Cook Islands",
                    phone: "682",
                    continent: "OC",
                    currency: "NZD",
                    languages: ["en"],
                    emoji: "\ud83c\udde8\ud83c\uddf0",
                    unicode: "U+1F1E8 U+1F1F0"
                },
                CL: {
                    code: "CL",
                    name: "Chile",
                    native: "Chile",
                    phone: "56",
                    continent: "SA",
                    currency: "CLF,CLP",
                    languages: ["es"],
                    emoji: "\ud83c\udde8\ud83c\uddf1",
                    unicode: "U+1F1E8 U+1F1F1"
                },
                CM: {
                    code: "CM",
                    name: "Cameroon",
                    native: "Cameroon",
                    phone: "237",
                    continent: "AF",
                    currency: "XAF",
                    languages: ["en", "fr"],
                    emoji: "\ud83c\udde8\ud83c\uddf2",
                    unicode: "U+1F1E8 U+1F1F2"
                },
                CN: {
                    code: "CN",
                    name: "China",
                    native: "\u4e2d\u56fd",
                    phone: "86",
                    continent: "AS",
                    currency: "CNY",
                    languages: ["zh"],
                    emoji: "\ud83c\udde8\ud83c\uddf3",
                    unicode: "U+1F1E8 U+1F1F3"
                },
                CO: {
                    code: "CO",
                    name: "Colombia",
                    native: "Colombia",
                    phone: "57",
                    continent: "SA",
                    currency: "COP",
                    languages: ["es"],
                    emoji: "\ud83c\udde8\ud83c\uddf4",
                    unicode: "U+1F1E8 U+1F1F4"
                },
                CR: {
                    code: "CR",
                    name: "Costa Rica",
                    native: "Costa Rica",
                    phone: "506",
                    continent: "NA",
                    currency: "CRC",
                    languages: ["es"],
                    emoji: "\ud83c\udde8\ud83c\uddf7",
                    unicode: "U+1F1E8 U+1F1F7"
                },
                CU: {
                    code: "CU",
                    name: "Cuba",
                    native: "Cuba",
                    phone: "53",
                    continent: "NA",
                    currency: "CUC,CUP",
                    languages: ["es"],
                    emoji: "\ud83c\udde8\ud83c\uddfa",
                    unicode: "U+1F1E8 U+1F1FA"
                },
                CV: {
                    code: "CV",
                    name: "Cape Verde",
                    native: "Cabo Verde",
                    phone: "238",
                    continent: "AF",
                    currency: "CVE",
                    languages: ["pt"],
                    emoji: "\ud83c\udde8\ud83c\uddfb",
                    unicode: "U+1F1E8 U+1F1FB"
                },
                CW: {
                    code: "CW",
                    name: "Curacao",
                    native: "Cura\xe7ao",
                    phone: "5999",
                    continent: "NA",
                    currency: "ANG",
                    languages: ["nl", "pa", "en"],
                    emoji: "\ud83c\udde8\ud83c\uddfc",
                    unicode: "U+1F1E8 U+1F1FC"
                },
                CX: {
                    code: "CX",
                    name: "Christmas Island",
                    native: "Christmas Island",
                    phone: "61",
                    continent: "AS",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\udde8\ud83c\uddfd",
                    unicode: "U+1F1E8 U+1F1FD"
                },
                CY: {
                    code: "CY",
                    name: "Cyprus",
                    native: "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2",
                    phone: "357",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["el", "tr", "hy"],
                    emoji: "\ud83c\udde8\ud83c\uddfe",
                    unicode: "U+1F1E8 U+1F1FE"
                },
                CZ: {
                    code: "CZ",
                    name: "Czech Republic",
                    native: "\u010cesk\xe1 republika",
                    phone: "420",
                    continent: "EU",
                    currency: "CZK",
                    languages: ["cs", "sk"],
                    emoji: "\ud83c\udde8\ud83c\uddff",
                    unicode: "U+1F1E8 U+1F1FF"
                },
                DE: {
                    code: "DE",
                    name: "Germany",
                    native: "Deutschland",
                    phone: "49",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["de"],
                    emoji: "\ud83c\udde9\ud83c\uddea",
                    unicode: "U+1F1E9 U+1F1EA"
                },
                DJ: {
                    code: "DJ",
                    name: "Djibouti",
                    native: "Djibouti",
                    phone: "253",
                    continent: "AF",
                    currency: "DJF",
                    languages: ["fr", "ar"],
                    emoji: "\ud83c\udde9\ud83c\uddef",
                    unicode: "U+1F1E9 U+1F1EF"
                },
                DK: {
                    code: "DK",
                    name: "Denmark",
                    native: "Danmark",
                    phone: "45",
                    continent: "EU",
                    currency: "DKK",
                    languages: ["da"],
                    emoji: "\ud83c\udde9\ud83c\uddf0",
                    unicode: "U+1F1E9 U+1F1F0"
                },
                DM: {
                    code: "DM",
                    name: "Dominica",
                    native: "Dominica",
                    phone: "1767",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\udde9\ud83c\uddf2",
                    unicode: "U+1F1E9 U+1F1F2"
                },
                DO: {
                    code: "DO",
                    name: "Dominican Republic",
                    native: "Rep\xfablica Dominicana",
                    phone: "1809,1829,1849",
                    continent: "NA",
                    currency: "DOP",
                    languages: ["es"],
                    emoji: "\ud83c\udde9\ud83c\uddf4",
                    unicode: "U+1F1E9 U+1F1F4"
                },
                DZ: {
                    code: "DZ",
                    name: "Algeria",
                    native: "\u0627\u0644\u062c\u0632\u0627\u0626\u0631",
                    phone: "213",
                    continent: "AF",
                    currency: "DZD",
                    languages: ["ar"],
                    emoji: "\ud83c\udde9\ud83c\uddff",
                    unicode: "U+1F1E9 U+1F1FF"
                },
                EC: {
                    code: "EC",
                    name: "Ecuador",
                    native: "Ecuador",
                    phone: "593",
                    continent: "SA",
                    currency: "USD",
                    languages: ["es"],
                    emoji: "\ud83c\uddea\ud83c\udde8",
                    unicode: "U+1F1EA U+1F1E8"
                },
                EE: {
                    code: "EE",
                    name: "Estonia",
                    native: "Eesti",
                    phone: "372",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["et"],
                    emoji: "\ud83c\uddea\ud83c\uddea",
                    unicode: "U+1F1EA U+1F1EA"
                },
                EG: {
                    code: "EG",
                    name: "Egypt",
                    native: "\u0645\u0635\u0631\u200e",
                    phone: "20",
                    continent: "AF",
                    currency: "EGP",
                    languages: ["ar"],
                    emoji: "\ud83c\uddea\ud83c\uddec",
                    unicode: "U+1F1EA U+1F1EC"
                },
                EH: {
                    code: "EH",
                    name: "Western Sahara",
                    native: "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629",
                    phone: "212",
                    continent: "AF",
                    currency: "MAD,DZD,MRU",
                    languages: ["es"],
                    emoji: "\ud83c\uddea\ud83c\udded",
                    unicode: "U+1F1EA U+1F1ED"
                },
                ER: {
                    code: "ER",
                    name: "Eritrea",
                    native: "\u12a4\u122d\u1275\u122b",
                    phone: "291",
                    continent: "AF",
                    currency: "ERN",
                    languages: ["ti", "ar", "en"],
                    emoji: "\ud83c\uddea\ud83c\uddf7",
                    unicode: "U+1F1EA U+1F1F7"
                },
                ES: {
                    code: "ES",
                    name: "Spain",
                    native: "Espa\xf1a",
                    phone: "34",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["es", "eu", "ca", "gl", "oc"],
                    emoji: "\ud83c\uddea\ud83c\uddf8",
                    unicode: "U+1F1EA U+1F1F8"
                },
                ET: {
                    code: "ET",
                    name: "Ethiopia",
                    native: "\u12a2\u1275\u12ee\u1335\u12eb",
                    phone: "251",
                    continent: "AF",
                    currency: "ETB",
                    languages: ["am"],
                    emoji: "\ud83c\uddea\ud83c\uddf9",
                    unicode: "U+1F1EA U+1F1F9"
                },
                FI: {
                    code: "FI",
                    name: "Finland",
                    native: "Suomi",
                    phone: "358",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["fi", "sv"],
                    emoji: "\ud83c\uddeb\ud83c\uddee",
                    unicode: "U+1F1EB U+1F1EE"
                },
                FJ: {
                    code: "FJ",
                    name: "Fiji",
                    native: "Fiji",
                    phone: "679",
                    continent: "OC",
                    currency: "FJD",
                    languages: ["en", "fj", "hi", "ur"],
                    emoji: "\ud83c\uddeb\ud83c\uddef",
                    unicode: "U+1F1EB U+1F1EF"
                },
                FK: {
                    code: "FK",
                    name: "Falkland Islands",
                    native: "Falkland Islands",
                    phone: "500",
                    continent: "SA",
                    currency: "FKP",
                    languages: ["en"],
                    emoji: "\ud83c\uddeb\ud83c\uddf0",
                    unicode: "U+1F1EB U+1F1F0"
                },
                FM: {
                    code: "FM",
                    name: "Micronesia",
                    native: "Micronesia",
                    phone: "691",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddeb\ud83c\uddf2",
                    unicode: "U+1F1EB U+1F1F2"
                },
                FO: {
                    code: "FO",
                    name: "Faroe Islands",
                    native: "F\xf8royar",
                    phone: "298",
                    continent: "EU",
                    currency: "DKK",
                    languages: ["fo"],
                    emoji: "\ud83c\uddeb\ud83c\uddf4",
                    unicode: "U+1F1EB U+1F1F4"
                },
                FR: {
                    code: "FR",
                    name: "France",
                    native: "France",
                    phone: "33",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddeb\ud83c\uddf7",
                    unicode: "U+1F1EB U+1F1F7"
                },
                GA: {
                    code: "GA",
                    name: "Gabon",
                    native: "Gabon",
                    phone: "241",
                    continent: "AF",
                    currency: "XAF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddec\ud83c\udde6",
                    unicode: "U+1F1EC U+1F1E6"
                },
                GB: {
                    code: "GB",
                    name: "United Kingdom",
                    native: "United Kingdom",
                    phone: "44",
                    continent: "EU",
                    currency: "GBP",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\udde7",
                    unicode: "U+1F1EC U+1F1E7"
                },
                GD: {
                    code: "GD",
                    name: "Grenada",
                    native: "Grenada",
                    phone: "1473",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\udde9",
                    unicode: "U+1F1EC U+1F1E9"
                },
                GE: {
                    code: "GE",
                    name: "Georgia",
                    native: "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd",
                    phone: "995",
                    continent: "AS",
                    currency: "GEL",
                    languages: ["ka"],
                    emoji: "\ud83c\uddec\ud83c\uddea",
                    unicode: "U+1F1EC U+1F1EA"
                },
                GF: {
                    code: "GF",
                    name: "French Guiana",
                    native: "Guyane fran\xe7aise",
                    phone: "594",
                    continent: "SA",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddec\ud83c\uddeb",
                    unicode: "U+1F1EC U+1F1EB"
                },
                GG: {
                    code: "GG",
                    name: "Guernsey",
                    native: "Guernsey",
                    phone: "44",
                    continent: "EU",
                    currency: "GBP",
                    languages: ["en", "fr"],
                    emoji: "\ud83c\uddec\ud83c\uddec",
                    unicode: "U+1F1EC U+1F1EC"
                },
                GH: {
                    code: "GH",
                    name: "Ghana",
                    native: "Ghana",
                    phone: "233",
                    continent: "AF",
                    currency: "GHS",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\udded",
                    unicode: "U+1F1EC U+1F1ED"
                },
                GI: {
                    code: "GI",
                    name: "Gibraltar",
                    native: "Gibraltar",
                    phone: "350",
                    continent: "EU",
                    currency: "GIP",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\uddee",
                    unicode: "U+1F1EC U+1F1EE"
                },
                GL: {
                    code: "GL",
                    name: "Greenland",
                    native: "Kalaallit Nunaat",
                    phone: "299",
                    continent: "NA",
                    currency: "DKK",
                    languages: ["kl"],
                    emoji: "\ud83c\uddec\ud83c\uddf1",
                    unicode: "U+1F1EC U+1F1F1"
                },
                GM: {
                    code: "GM",
                    name: "Gambia",
                    native: "Gambia",
                    phone: "220",
                    continent: "AF",
                    currency: "GMD",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\uddf2",
                    unicode: "U+1F1EC U+1F1F2"
                },
                GN: {
                    code: "GN",
                    name: "Guinea",
                    native: "Guin\xe9e",
                    phone: "224",
                    continent: "AF",
                    currency: "GNF",
                    languages: ["fr", "ff"],
                    emoji: "\ud83c\uddec\ud83c\uddf3",
                    unicode: "U+1F1EC U+1F1F3"
                },
                GP: {
                    code: "GP",
                    name: "Guadeloupe",
                    native: "Guadeloupe",
                    phone: "590",
                    continent: "NA",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddec\ud83c\uddf5",
                    unicode: "U+1F1EC U+1F1F5"
                },
                GQ: {
                    code: "GQ",
                    name: "Equatorial Guinea",
                    native: "Guinea Ecuatorial",
                    phone: "240",
                    continent: "AF",
                    currency: "XAF",
                    languages: ["es", "fr"],
                    emoji: "\ud83c\uddec\ud83c\uddf6",
                    unicode: "U+1F1EC U+1F1F6"
                },
                GR: {
                    code: "GR",
                    name: "Greece",
                    native: "\u0395\u03bb\u03bb\u03ac\u03b4\u03b1",
                    phone: "30",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["el"],
                    emoji: "\ud83c\uddec\ud83c\uddf7",
                    unicode: "U+1F1EC U+1F1F7"
                },
                GS: {
                    code: "GS",
                    name: "South Georgia and the South Sandwich Islands",
                    native: "South Georgia",
                    phone: "500",
                    continent: "AN",
                    currency: "GBP",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\uddf8",
                    unicode: "U+1F1EC U+1F1F8"
                },
                GT: {
                    code: "GT",
                    name: "Guatemala",
                    native: "Guatemala",
                    phone: "502",
                    continent: "NA",
                    currency: "GTQ",
                    languages: ["es"],
                    emoji: "\ud83c\uddec\ud83c\uddf9",
                    unicode: "U+1F1EC U+1F1F9"
                },
                GU: {
                    code: "GU",
                    name: "Guam",
                    native: "Guam",
                    phone: "1671",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en", "ch", "es"],
                    emoji: "\ud83c\uddec\ud83c\uddfa",
                    unicode: "U+1F1EC U+1F1FA"
                },
                GW: {
                    code: "GW",
                    name: "Guinea-Bissau",
                    native: "Guin\xe9-Bissau",
                    phone: "245",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["pt"],
                    emoji: "\ud83c\uddec\ud83c\uddfc",
                    unicode: "U+1F1EC U+1F1FC"
                },
                GY: {
                    code: "GY",
                    name: "Guyana",
                    native: "Guyana",
                    phone: "592",
                    continent: "SA",
                    currency: "GYD",
                    languages: ["en"],
                    emoji: "\ud83c\uddec\ud83c\uddfe",
                    unicode: "U+1F1EC U+1F1FE"
                },
                HK: {
                    code: "HK",
                    name: "Hong Kong",
                    native: "\u9999\u6e2f",
                    phone: "852",
                    continent: "AS",
                    currency: "HKD",
                    languages: ["zh", "en"],
                    emoji: "\ud83c\udded\ud83c\uddf0",
                    unicode: "U+1F1ED U+1F1F0"
                },
                HM: {
                    code: "HM",
                    name: "Heard Island and McDonald Islands",
                    native: "Heard Island and McDonald Islands",
                    phone: "61",
                    continent: "AN",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\udded\ud83c\uddf2",
                    unicode: "U+1F1ED U+1F1F2"
                },
                HN: {
                    code: "HN",
                    name: "Honduras",
                    native: "Honduras",
                    phone: "504",
                    continent: "NA",
                    currency: "HNL",
                    languages: ["es"],
                    emoji: "\ud83c\udded\ud83c\uddf3",
                    unicode: "U+1F1ED U+1F1F3"
                },
                HR: {
                    code: "HR",
                    name: "Croatia",
                    native: "Hrvatska",
                    phone: "385",
                    continent: "EU",
                    currency: "HRK",
                    languages: ["hr"],
                    emoji: "\ud83c\udded\ud83c\uddf7",
                    unicode: "U+1F1ED U+1F1F7"
                },
                HT: {
                    code: "HT",
                    name: "Haiti",
                    native: "Ha\xefti",
                    phone: "509",
                    continent: "NA",
                    currency: "HTG,USD",
                    languages: ["fr", "ht"],
                    emoji: "\ud83c\udded\ud83c\uddf9",
                    unicode: "U+1F1ED U+1F1F9"
                },
                HU: {
                    code: "HU",
                    name: "Hungary",
                    native: "Magyarorsz\xe1g",
                    phone: "36",
                    continent: "EU",
                    currency: "HUF",
                    languages: ["hu"],
                    emoji: "\ud83c\udded\ud83c\uddfa",
                    unicode: "U+1F1ED U+1F1FA"
                },
                ID: {
                    code: "ID",
                    name: "Indonesia",
                    native: "Indonesia",
                    phone: "62",
                    continent: "AS",
                    currency: "IDR",
                    languages: ["id"],
                    emoji: "\ud83c\uddee\ud83c\udde9",
                    unicode: "U+1F1EE U+1F1E9"
                },
                IE: {
                    code: "IE",
                    name: "Ireland",
                    native: "\xc9ire",
                    phone: "353",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["ga", "en"],
                    emoji: "\ud83c\uddee\ud83c\uddea",
                    unicode: "U+1F1EE U+1F1EA"
                },
                IL: {
                    code: "IL",
                    name: "Israel",
                    native: "\u05d9\u05b4\u05e9\u05b0\u05c2\u05e8\u05b8\u05d0\u05b5\u05dc",
                    phone: "972",
                    continent: "AS",
                    currency: "ILS",
                    languages: ["he", "ar"],
                    emoji: "\ud83c\uddee\ud83c\uddf1",
                    unicode: "U+1F1EE U+1F1F1"
                },
                IM: {
                    code: "IM",
                    name: "Isle of Man",
                    native: "Isle of Man",
                    phone: "44",
                    continent: "EU",
                    currency: "GBP",
                    languages: ["en", "gv"],
                    emoji: "\ud83c\uddee\ud83c\uddf2",
                    unicode: "U+1F1EE U+1F1F2"
                },
                IN: {
                    code: "IN",
                    name: "India",
                    native: "\u092d\u093e\u0930\u0924",
                    phone: "91",
                    continent: "AS",
                    currency: "INR",
                    languages: ["hi", "en"],
                    emoji: "\ud83c\uddee\ud83c\uddf3",
                    unicode: "U+1F1EE U+1F1F3"
                },
                IO: {
                    code: "IO",
                    name: "British Indian Ocean Territory",
                    native: "British Indian Ocean Territory",
                    phone: "246",
                    continent: "AS",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddee\ud83c\uddf4",
                    unicode: "U+1F1EE U+1F1F4"
                },
                IQ: {
                    code: "IQ",
                    name: "Iraq",
                    native: "\u0627\u0644\u0639\u0631\u0627\u0642",
                    phone: "964",
                    continent: "AS",
                    currency: "IQD",
                    languages: ["ar", "ku"],
                    emoji: "\ud83c\uddee\ud83c\uddf6",
                    unicode: "U+1F1EE U+1F1F6"
                },
                IR: {
                    code: "IR",
                    name: "Iran",
                    native: "\u0627\u06cc\u0631\u0627\u0646",
                    phone: "98",
                    continent: "AS",
                    currency: "IRR",
                    languages: ["fa"],
                    emoji: "\ud83c\uddee\ud83c\uddf7",
                    unicode: "U+1F1EE U+1F1F7"
                },
                IS: {
                    code: "IS",
                    name: "Iceland",
                    native: "\xcdsland",
                    phone: "354",
                    continent: "EU",
                    currency: "ISK",
                    languages: ["is"],
                    emoji: "\ud83c\uddee\ud83c\uddf8",
                    unicode: "U+1F1EE U+1F1F8"
                },
                IT: {
                    code: "IT",
                    name: "Italy",
                    native: "Italia",
                    phone: "39",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["it"],
                    emoji: "\ud83c\uddee\ud83c\uddf9",
                    unicode: "U+1F1EE U+1F1F9"
                },
                JE: {
                    code: "JE",
                    name: "Jersey",
                    native: "Jersey",
                    phone: "44",
                    continent: "EU",
                    currency: "GBP",
                    languages: ["en", "fr"],
                    emoji: "\ud83c\uddef\ud83c\uddea",
                    unicode: "U+1F1EF U+1F1EA"
                },
                JM: {
                    code: "JM",
                    name: "Jamaica",
                    native: "Jamaica",
                    phone: "1876",
                    continent: "NA",
                    currency: "JMD",
                    languages: ["en"],
                    emoji: "\ud83c\uddef\ud83c\uddf2",
                    unicode: "U+1F1EF U+1F1F2"
                },
                JO: {
                    code: "JO",
                    name: "Jordan",
                    native: "\u0627\u0644\u0623\u0631\u062f\u0646",
                    phone: "962",
                    continent: "AS",
                    currency: "JOD",
                    languages: ["ar"],
                    emoji: "\ud83c\uddef\ud83c\uddf4",
                    unicode: "U+1F1EF U+1F1F4"
                },
                JP: {
                    code: "JP",
                    name: "Japan",
                    native: "\u65e5\u672c",
                    phone: "81",
                    continent: "AS",
                    currency: "JPY",
                    languages: ["ja"],
                    emoji: "\ud83c\uddef\ud83c\uddf5",
                    unicode: "U+1F1EF U+1F1F5"
                },
                KE: {
                    code: "KE",
                    name: "Kenya",
                    native: "Kenya",
                    phone: "254",
                    continent: "AF",
                    currency: "KES",
                    languages: ["en", "sw"],
                    emoji: "\ud83c\uddf0\ud83c\uddea",
                    unicode: "U+1F1F0 U+1F1EA"
                },
                KG: {
                    code: "KG",
                    name: "Kyrgyzstan",
                    native: "\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d",
                    phone: "996",
                    continent: "AS",
                    currency: "KGS",
                    languages: ["ky", "ru"],
                    emoji: "\ud83c\uddf0\ud83c\uddec",
                    unicode: "U+1F1F0 U+1F1EC"
                },
                KH: {
                    code: "KH",
                    name: "Cambodia",
                    native: "K\xe2mp\u016dch\xe9a",
                    phone: "855",
                    continent: "AS",
                    currency: "KHR",
                    languages: ["km"],
                    emoji: "\ud83c\uddf0\ud83c\udded",
                    unicode: "U+1F1F0 U+1F1ED"
                },
                KI: {
                    code: "KI",
                    name: "Kiribati",
                    native: "Kiribati",
                    phone: "686",
                    continent: "OC",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf0\ud83c\uddee",
                    unicode: "U+1F1F0 U+1F1EE"
                },
                KM: {
                    code: "KM",
                    name: "Comoros",
                    native: "Komori",
                    phone: "269",
                    continent: "AF",
                    currency: "KMF",
                    languages: ["ar", "fr"],
                    emoji: "\ud83c\uddf0\ud83c\uddf2",
                    unicode: "U+1F1F0 U+1F1F2"
                },
                KN: {
                    code: "KN",
                    name: "Saint Kitts and Nevis",
                    native: "Saint Kitts and Nevis",
                    phone: "1869",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf0\ud83c\uddf3",
                    unicode: "U+1F1F0 U+1F1F3"
                },
                KP: {
                    code: "KP",
                    name: "North Korea",
                    native: "\ubd81\ud55c",
                    phone: "850",
                    continent: "AS",
                    currency: "KPW",
                    languages: ["ko"],
                    emoji: "\ud83c\uddf0\ud83c\uddf5",
                    unicode: "U+1F1F0 U+1F1F5"
                },
                KR: {
                    code: "KR",
                    name: "South Korea",
                    native: "\ub300\ud55c\ubbfc\uad6d",
                    phone: "82",
                    continent: "AS",
                    currency: "KRW",
                    languages: ["ko"],
                    emoji: "\ud83c\uddf0\ud83c\uddf7",
                    unicode: "U+1F1F0 U+1F1F7"
                },
                KW: {
                    code: "KW",
                    name: "Kuwait",
                    native: "\u0627\u0644\u0643\u0648\u064a\u062a",
                    phone: "965",
                    continent: "AS",
                    currency: "KWD",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf0\ud83c\uddfc",
                    unicode: "U+1F1F0 U+1F1FC"
                },
                KY: {
                    code: "KY",
                    name: "Cayman Islands",
                    native: "Cayman Islands",
                    phone: "1345",
                    continent: "NA",
                    currency: "KYD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf0\ud83c\uddfe",
                    unicode: "U+1F1F0 U+1F1FE"
                },
                KZ: {
                    code: "KZ",
                    name: "Kazakhstan",
                    native: "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d",
                    phone: "76,77",
                    continent: "AS",
                    currency: "KZT",
                    languages: ["kk", "ru"],
                    emoji: "\ud83c\uddf0\ud83c\uddff",
                    unicode: "U+1F1F0 U+1F1FF"
                },
                LA: {
                    code: "LA",
                    name: "Laos",
                    native: "\u0eaa\u0e9b\u0e9b\u0ea5\u0eb2\u0ea7",
                    phone: "856",
                    continent: "AS",
                    currency: "LAK",
                    languages: ["lo"],
                    emoji: "\ud83c\uddf1\ud83c\udde6",
                    unicode: "U+1F1F1 U+1F1E6"
                },
                LB: {
                    code: "LB",
                    name: "Lebanon",
                    native: "\u0644\u0628\u0646\u0627\u0646",
                    phone: "961",
                    continent: "AS",
                    currency: "LBP",
                    languages: ["ar", "fr"],
                    emoji: "\ud83c\uddf1\ud83c\udde7",
                    unicode: "U+1F1F1 U+1F1E7"
                },
                LC: {
                    code: "LC",
                    name: "Saint Lucia",
                    native: "Saint Lucia",
                    phone: "1758",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf1\ud83c\udde8",
                    unicode: "U+1F1F1 U+1F1E8"
                },
                LI: {
                    code: "LI",
                    name: "Liechtenstein",
                    native: "Liechtenstein",
                    phone: "423",
                    continent: "EU",
                    currency: "CHF",
                    languages: ["de"],
                    emoji: "\ud83c\uddf1\ud83c\uddee",
                    unicode: "U+1F1F1 U+1F1EE"
                },
                LK: {
                    code: "LK",
                    name: "Sri Lanka",
                    native: "\u015br\u012b la\u1e43k\u0101va",
                    phone: "94",
                    continent: "AS",
                    currency: "LKR",
                    languages: ["si", "ta"],
                    emoji: "\ud83c\uddf1\ud83c\uddf0",
                    unicode: "U+1F1F1 U+1F1F0"
                },
                LR: {
                    code: "LR",
                    name: "Liberia",
                    native: "Liberia",
                    phone: "231",
                    continent: "AF",
                    currency: "LRD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf1\ud83c\uddf7",
                    unicode: "U+1F1F1 U+1F1F7"
                },
                LS: {
                    code: "LS",
                    name: "Lesotho",
                    native: "Lesotho",
                    phone: "266",
                    continent: "AF",
                    currency: "LSL,ZAR",
                    languages: ["en", "st"],
                    emoji: "\ud83c\uddf1\ud83c\uddf8",
                    unicode: "U+1F1F1 U+1F1F8"
                },
                LT: {
                    code: "LT",
                    name: "Lithuania",
                    native: "Lietuva",
                    phone: "370",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["lt"],
                    emoji: "\ud83c\uddf1\ud83c\uddf9",
                    unicode: "U+1F1F1 U+1F1F9"
                },
                LU: {
                    code: "LU",
                    name: "Luxembourg",
                    native: "Luxembourg",
                    phone: "352",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["fr", "de", "lb"],
                    emoji: "\ud83c\uddf1\ud83c\uddfa",
                    unicode: "U+1F1F1 U+1F1FA"
                },
                LV: {
                    code: "LV",
                    name: "Latvia",
                    native: "Latvija",
                    phone: "371",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["lv"],
                    emoji: "\ud83c\uddf1\ud83c\uddfb",
                    unicode: "U+1F1F1 U+1F1FB"
                },
                LY: {
                    code: "LY",
                    name: "Libya",
                    native: "\u200f\u0644\u064a\u0628\u064a\u0627",
                    phone: "218",
                    continent: "AF",
                    currency: "LYD",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf1\ud83c\uddfe",
                    unicode: "U+1F1F1 U+1F1FE"
                },
                MA: {
                    code: "MA",
                    name: "Morocco",
                    native: "\u0627\u0644\u0645\u063a\u0631\u0628",
                    phone: "212",
                    continent: "AF",
                    currency: "MAD",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf2\ud83c\udde6",
                    unicode: "U+1F1F2 U+1F1E6"
                },
                MC: {
                    code: "MC",
                    name: "Monaco",
                    native: "Monaco",
                    phone: "377",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf2\ud83c\udde8",
                    unicode: "U+1F1F2 U+1F1E8"
                },
                MD: {
                    code: "MD",
                    name: "Moldova",
                    native: "Moldova",
                    phone: "373",
                    continent: "EU",
                    currency: "MDL",
                    languages: ["ro"],
                    emoji: "\ud83c\uddf2\ud83c\udde9",
                    unicode: "U+1F1F2 U+1F1E9"
                },
                ME: {
                    code: "ME",
                    name: "Montenegro",
                    native: "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430",
                    phone: "382",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["sr", "bs", "sq", "hr"],
                    emoji: "\ud83c\uddf2\ud83c\uddea",
                    unicode: "U+1F1F2 U+1F1EA"
                },
                MF: {
                    code: "MF",
                    name: "Saint Martin",
                    native: "Saint-Martin",
                    phone: "590",
                    continent: "NA",
                    currency: "EUR",
                    languages: ["en", "fr", "nl"],
                    emoji: "\ud83c\uddf2\ud83c\uddeb",
                    unicode: "U+1F1F2 U+1F1EB"
                },
                MG: {
                    code: "MG",
                    name: "Madagascar",
                    native: "Madagasikara",
                    phone: "261",
                    continent: "AF",
                    currency: "MGA",
                    languages: ["fr", "mg"],
                    emoji: "\ud83c\uddf2\ud83c\uddec",
                    unicode: "U+1F1F2 U+1F1EC"
                },
                MH: {
                    code: "MH",
                    name: "Marshall Islands",
                    native: "M\u0327aje\u013c",
                    phone: "692",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en", "mh"],
                    emoji: "\ud83c\uddf2\ud83c\udded",
                    unicode: "U+1F1F2 U+1F1ED"
                },
                MK: {
                    code: "MK",
                    name: "North Macedonia",
                    native: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430",
                    phone: "389",
                    continent: "EU",
                    currency: "MKD",
                    languages: ["mk"],
                    emoji: "\ud83c\uddf2\ud83c\uddf0",
                    unicode: "U+1F1F2 U+1F1F0"
                },
                ML: {
                    code: "ML",
                    name: "Mali",
                    native: "Mali",
                    phone: "223",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf2\ud83c\uddf1",
                    unicode: "U+1F1F2 U+1F1F1"
                },
                MM: {
                    code: "MM",
                    name: "Myanmar [Burma]",
                    native: "\u1019\u103c\u1014\u103a\u1019\u102c",
                    phone: "95",
                    continent: "AS",
                    currency: "MMK",
                    languages: ["my"],
                    emoji: "\ud83c\uddf2\ud83c\uddf2",
                    unicode: "U+1F1F2 U+1F1F2"
                },
                MN: {
                    code: "MN",
                    name: "Mongolia",
                    native: "\u041c\u043e\u043d\u0433\u043e\u043b \u0443\u043b\u0441",
                    phone: "976",
                    continent: "AS",
                    currency: "MNT",
                    languages: ["mn"],
                    emoji: "\ud83c\uddf2\ud83c\uddf3",
                    unicode: "U+1F1F2 U+1F1F3"
                },
                MO: {
                    code: "MO",
                    name: "Macao",
                    native: "\u6fb3\u9580",
                    phone: "853",
                    continent: "AS",
                    currency: "MOP",
                    languages: ["zh", "pt"],
                    emoji: "\ud83c\uddf2\ud83c\uddf4",
                    unicode: "U+1F1F2 U+1F1F4"
                },
                MP: {
                    code: "MP",
                    name: "Northern Mariana Islands",
                    native: "Northern Mariana Islands",
                    phone: "1670",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en", "ch"],
                    emoji: "\ud83c\uddf2\ud83c\uddf5",
                    unicode: "U+1F1F2 U+1F1F5"
                },
                MQ: {
                    code: "MQ",
                    name: "Martinique",
                    native: "Martinique",
                    phone: "596",
                    continent: "NA",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf2\ud83c\uddf6",
                    unicode: "U+1F1F2 U+1F1F6"
                },
                MR: {
                    code: "MR",
                    name: "Mauritania",
                    native: "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627",
                    phone: "222",
                    continent: "AF",
                    currency: "MRU",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf2\ud83c\uddf7",
                    unicode: "U+1F1F2 U+1F1F7"
                },
                MS: {
                    code: "MS",
                    name: "Montserrat",
                    native: "Montserrat",
                    phone: "1664",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf2\ud83c\uddf8",
                    unicode: "U+1F1F2 U+1F1F8"
                },
                MT: {
                    code: "MT",
                    name: "Malta",
                    native: "Malta",
                    phone: "356",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["mt", "en"],
                    emoji: "\ud83c\uddf2\ud83c\uddf9",
                    unicode: "U+1F1F2 U+1F1F9"
                },
                MU: {
                    code: "MU",
                    name: "Mauritius",
                    native: "Maurice",
                    phone: "230",
                    continent: "AF",
                    currency: "MUR",
                    languages: ["en"],
                    emoji: "\ud83c\uddf2\ud83c\uddfa",
                    unicode: "U+1F1F2 U+1F1FA"
                },
                MV: {
                    code: "MV",
                    name: "Maldives",
                    native: "Maldives",
                    phone: "960",
                    continent: "AS",
                    currency: "MVR",
                    languages: ["dv"],
                    emoji: "\ud83c\uddf2\ud83c\uddfb",
                    unicode: "U+1F1F2 U+1F1FB"
                },
                MW: {
                    code: "MW",
                    name: "Malawi",
                    native: "Malawi",
                    phone: "265",
                    continent: "AF",
                    currency: "MWK",
                    languages: ["en", "ny"],
                    emoji: "\ud83c\uddf2\ud83c\uddfc",
                    unicode: "U+1F1F2 U+1F1FC"
                },
                MX: {
                    code: "MX",
                    name: "Mexico",
                    native: "M\xe9xico",
                    phone: "52",
                    continent: "NA",
                    currency: "MXN",
                    languages: ["es"],
                    emoji: "\ud83c\uddf2\ud83c\uddfd",
                    unicode: "U+1F1F2 U+1F1FD"
                },
                MY: {
                    code: "MY",
                    name: "Malaysia",
                    native: "Malaysia",
                    phone: "60",
                    continent: "AS",
                    currency: "MYR",
                    languages: ["ms"],
                    emoji: "\ud83c\uddf2\ud83c\uddfe",
                    unicode: "U+1F1F2 U+1F1FE"
                },
                MZ: {
                    code: "MZ",
                    name: "Mozambique",
                    native: "Mo\xe7ambique",
                    phone: "258",
                    continent: "AF",
                    currency: "MZN",
                    languages: ["pt"],
                    emoji: "\ud83c\uddf2\ud83c\uddff",
                    unicode: "U+1F1F2 U+1F1FF"
                },
                NA: {
                    code: "NA",
                    name: "Namibia",
                    native: "Namibia",
                    phone: "264",
                    continent: "AF",
                    currency: "NAD,ZAR",
                    languages: ["en", "af"],
                    emoji: "\ud83c\uddf3\ud83c\udde6",
                    unicode: "U+1F1F3 U+1F1E6"
                },
                NC: {
                    code: "NC",
                    name: "New Caledonia",
                    native: "Nouvelle-Cal\xe9donie",
                    phone: "687",
                    continent: "OC",
                    currency: "XPF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf3\ud83c\udde8",
                    unicode: "U+1F1F3 U+1F1E8"
                },
                NE: {
                    code: "NE",
                    name: "Niger",
                    native: "Niger",
                    phone: "227",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf3\ud83c\uddea",
                    unicode: "U+1F1F3 U+1F1EA"
                },
                NF: {
                    code: "NF",
                    name: "Norfolk Island",
                    native: "Norfolk Island",
                    phone: "672",
                    continent: "OC",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf3\ud83c\uddeb",
                    unicode: "U+1F1F3 U+1F1EB"
                },
                NG: {
                    code: "NG",
                    name: "Nigeria",
                    native: "Nigeria",
                    phone: "234",
                    continent: "AF",
                    currency: "NGN",
                    languages: ["en"],
                    emoji: "\ud83c\uddf3\ud83c\uddec",
                    unicode: "U+1F1F3 U+1F1EC"
                },
                NI: {
                    code: "NI",
                    name: "Nicaragua",
                    native: "Nicaragua",
                    phone: "505",
                    continent: "NA",
                    currency: "NIO",
                    languages: ["es"],
                    emoji: "\ud83c\uddf3\ud83c\uddee",
                    unicode: "U+1F1F3 U+1F1EE"
                },
                NL: {
                    code: "NL",
                    name: "Netherlands",
                    native: "Nederland",
                    phone: "31",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["nl"],
                    emoji: "\ud83c\uddf3\ud83c\uddf1",
                    unicode: "U+1F1F3 U+1F1F1"
                },
                NO: {
                    code: "NO",
                    name: "Norway",
                    native: "Norge",
                    phone: "47",
                    continent: "EU",
                    currency: "NOK",
                    languages: ["no", "nb", "nn"],
                    emoji: "\ud83c\uddf3\ud83c\uddf4",
                    unicode: "U+1F1F3 U+1F1F4"
                },
                NP: {
                    code: "NP",
                    name: "Nepal",
                    native: "\u0928\u092a\u0932",
                    phone: "977",
                    continent: "AS",
                    currency: "NPR",
                    languages: ["ne"],
                    emoji: "\ud83c\uddf3\ud83c\uddf5",
                    unicode: "U+1F1F3 U+1F1F5"
                },
                NR: {
                    code: "NR",
                    name: "Nauru",
                    native: "Nauru",
                    phone: "674",
                    continent: "OC",
                    currency: "AUD",
                    languages: ["en", "na"],
                    emoji: "\ud83c\uddf3\ud83c\uddf7",
                    unicode: "U+1F1F3 U+1F1F7"
                },
                NU: {
                    code: "NU",
                    name: "Niue",
                    native: "Niu\u0113",
                    phone: "683",
                    continent: "OC",
                    currency: "NZD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf3\ud83c\uddfa",
                    unicode: "U+1F1F3 U+1F1FA"
                },
                NZ: {
                    code: "NZ",
                    name: "New Zealand",
                    native: "New Zealand",
                    phone: "64",
                    continent: "OC",
                    currency: "NZD",
                    languages: ["en", "mi"],
                    emoji: "\ud83c\uddf3\ud83c\uddff",
                    unicode: "U+1F1F3 U+1F1FF"
                },
                OM: {
                    code: "OM",
                    name: "Oman",
                    native: "\u0639\u0645\u0627\u0646",
                    phone: "968",
                    continent: "AS",
                    currency: "OMR",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf4\ud83c\uddf2",
                    unicode: "U+1F1F4 U+1F1F2"
                },
                PA: {
                    code: "PA",
                    name: "Panama",
                    native: "Panam\xe1",
                    phone: "507",
                    continent: "NA",
                    currency: "PAB,USD",
                    languages: ["es"],
                    emoji: "\ud83c\uddf5\ud83c\udde6",
                    unicode: "U+1F1F5 U+1F1E6"
                },
                PE: {
                    code: "PE",
                    name: "Peru",
                    native: "Per\xfa",
                    phone: "51",
                    continent: "SA",
                    currency: "PEN",
                    languages: ["es"],
                    emoji: "\ud83c\uddf5\ud83c\uddea",
                    unicode: "U+1F1F5 U+1F1EA"
                },
                PF: {
                    code: "PF",
                    name: "French Polynesia",
                    native: "Polyn\xe9sie fran\xe7aise",
                    phone: "689",
                    continent: "OC",
                    currency: "XPF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf5\ud83c\uddeb",
                    unicode: "U+1F1F5 U+1F1EB"
                },
                PG: {
                    code: "PG",
                    name: "Papua New Guinea",
                    native: "Papua Niugini",
                    phone: "675",
                    continent: "OC",
                    currency: "PGK",
                    languages: ["en"],
                    emoji: "\ud83c\uddf5\ud83c\uddec",
                    unicode: "U+1F1F5 U+1F1EC"
                },
                PH: {
                    code: "PH",
                    name: "Philippines",
                    native: "Pilipinas",
                    phone: "63",
                    continent: "AS",
                    currency: "PHP",
                    languages: ["en"],
                    emoji: "\ud83c\uddf5\ud83c\udded",
                    unicode: "U+1F1F5 U+1F1ED"
                },
                PK: {
                    code: "PK",
                    name: "Pakistan",
                    native: "Pakistan",
                    phone: "92",
                    continent: "AS",
                    currency: "PKR",
                    languages: ["en", "ur"],
                    emoji: "\ud83c\uddf5\ud83c\uddf0",
                    unicode: "U+1F1F5 U+1F1F0"
                },
                PL: {
                    code: "PL",
                    name: "Poland",
                    native: "Polska",
                    phone: "48",
                    continent: "EU",
                    currency: "PLN",
                    languages: ["pl"],
                    emoji: "\ud83c\uddf5\ud83c\uddf1",
                    unicode: "U+1F1F5 U+1F1F1"
                },
                PM: {
                    code: "PM",
                    name: "Saint Pierre and Miquelon",
                    native: "Saint-Pierre-et-Miquelon",
                    phone: "508",
                    continent: "NA",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf5\ud83c\uddf2",
                    unicode: "U+1F1F5 U+1F1F2"
                },
                PN: {
                    code: "PN",
                    name: "Pitcairn Islands",
                    native: "Pitcairn Islands",
                    phone: "64",
                    continent: "OC",
                    currency: "NZD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf5\ud83c\uddf3",
                    unicode: "U+1F1F5 U+1F1F3"
                },
                PR: {
                    code: "PR",
                    name: "Puerto Rico",
                    native: "Puerto Rico",
                    phone: "1787,1939",
                    continent: "NA",
                    currency: "USD",
                    languages: ["es", "en"],
                    emoji: "\ud83c\uddf5\ud83c\uddf7",
                    unicode: "U+1F1F5 U+1F1F7"
                },
                PS: {
                    code: "PS",
                    name: "Palestine",
                    native: "\u0641\u0644\u0633\u0637\u064a\u0646",
                    phone: "970",
                    continent: "AS",
                    currency: "ILS",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf5\ud83c\uddf8",
                    unicode: "U+1F1F5 U+1F1F8"
                },
                PT: {
                    code: "PT",
                    name: "Portugal",
                    native: "Portugal",
                    phone: "351",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["pt"],
                    emoji: "\ud83c\uddf5\ud83c\uddf9",
                    unicode: "U+1F1F5 U+1F1F9"
                },
                PW: {
                    code: "PW",
                    name: "Palau",
                    native: "Palau",
                    phone: "680",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf5\ud83c\uddfc",
                    unicode: "U+1F1F5 U+1F1FC"
                },
                PY: {
                    code: "PY",
                    name: "Paraguay",
                    native: "Paraguay",
                    phone: "595",
                    continent: "SA",
                    currency: "PYG",
                    languages: ["es", "gn"],
                    emoji: "\ud83c\uddf5\ud83c\uddfe",
                    unicode: "U+1F1F5 U+1F1FE"
                },
                QA: {
                    code: "QA",
                    name: "Qatar",
                    native: "\u0642\u0637\u0631",
                    phone: "974",
                    continent: "AS",
                    currency: "QAR",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf6\ud83c\udde6",
                    unicode: "U+1F1F6 U+1F1E6"
                },
                RE: {
                    code: "RE",
                    name: "R\xe9union",
                    native: "La R\xe9union",
                    phone: "262",
                    continent: "AF",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf7\ud83c\uddea",
                    unicode: "U+1F1F7 U+1F1EA"
                },
                RO: {
                    code: "RO",
                    name: "Romania",
                    native: "Rom\xe2nia",
                    phone: "40",
                    continent: "EU",
                    currency: "RON",
                    languages: ["ro"],
                    emoji: "\ud83c\uddf7\ud83c\uddf4",
                    unicode: "U+1F1F7 U+1F1F4"
                },
                RS: {
                    code: "RS",
                    name: "Serbia",
                    native: "\u0421\u0440\u0431\u0438\u0458\u0430",
                    phone: "381",
                    continent: "EU",
                    currency: "RSD",
                    languages: ["sr"],
                    emoji: "\ud83c\uddf7\ud83c\uddf8",
                    unicode: "U+1F1F7 U+1F1F8"
                },
                RU: {
                    code: "RU",
                    name: "Russia",
                    native: "\u0420\u043e\u0441\u0441\u0438\u044f",
                    phone: "7",
                    continent: "EU",
                    currency: "RUB",
                    languages: ["ru"],
                    emoji: "\ud83c\uddf7\ud83c\uddfa",
                    unicode: "U+1F1F7 U+1F1FA"
                },
                RW: {
                    code: "RW",
                    name: "Rwanda",
                    native: "Rwanda",
                    phone: "250",
                    continent: "AF",
                    currency: "RWF",
                    languages: ["rw", "en", "fr"],
                    emoji: "\ud83c\uddf7\ud83c\uddfc",
                    unicode: "U+1F1F7 U+1F1FC"
                },
                SA: {
                    code: "SA",
                    name: "Saudi Arabia",
                    native: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
                    phone: "966",
                    continent: "AS",
                    currency: "SAR",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf8\ud83c\udde6",
                    unicode: "U+1F1F8 U+1F1E6"
                },
                SB: {
                    code: "SB",
                    name: "Solomon Islands",
                    native: "Solomon Islands",
                    phone: "677",
                    continent: "OC",
                    currency: "SBD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf8\ud83c\udde7",
                    unicode: "U+1F1F8 U+1F1E7"
                },
                SC: {
                    code: "SC",
                    name: "Seychelles",
                    native: "Seychelles",
                    phone: "248",
                    continent: "AF",
                    currency: "SCR",
                    languages: ["fr", "en"],
                    emoji: "\ud83c\uddf8\ud83c\udde8",
                    unicode: "U+1F1F8 U+1F1E8"
                },
                SD: {
                    code: "SD",
                    name: "Sudan",
                    native: "\u0627\u0644\u0633\u0648\u062f\u0627\u0646",
                    phone: "249",
                    continent: "AF",
                    currency: "SDG",
                    languages: ["ar", "en"],
                    emoji: "\ud83c\uddf8\ud83c\udde9",
                    unicode: "U+1F1F8 U+1F1E9"
                },
                SE: {
                    code: "SE",
                    name: "Sweden",
                    native: "Sverige",
                    phone: "46",
                    continent: "EU",
                    currency: "SEK",
                    languages: ["sv"],
                    emoji: "\ud83c\uddf8\ud83c\uddea",
                    unicode: "U+1F1F8 U+1F1EA"
                },
                SG: {
                    code: "SG",
                    name: "Singapore",
                    native: "Singapore",
                    phone: "65",
                    continent: "AS",
                    currency: "SGD",
                    languages: ["en", "ms", "ta", "zh"],
                    emoji: "\ud83c\uddf8\ud83c\uddec",
                    unicode: "U+1F1F8 U+1F1EC"
                },
                SH: {
                    code: "SH",
                    name: "Saint Helena",
                    native: "Saint Helena",
                    phone: "290",
                    continent: "AF",
                    currency: "SHP",
                    languages: ["en"],
                    emoji: "\ud83c\uddf8\ud83c\udded",
                    unicode: "U+1F1F8 U+1F1ED"
                },
                SI: {
                    code: "SI",
                    name: "Slovenia",
                    native: "Slovenija",
                    phone: "386",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["sl"],
                    emoji: "\ud83c\uddf8\ud83c\uddee",
                    unicode: "U+1F1F8 U+1F1EE"
                },
                SJ: {
                    code: "SJ",
                    name: "Svalbard and Jan Mayen",
                    native: "Svalbard og Jan Mayen",
                    phone: "4779",
                    continent: "EU",
                    currency: "NOK",
                    languages: ["no"],
                    emoji: "\ud83c\uddf8\ud83c\uddef",
                    unicode: "U+1F1F8 U+1F1EF"
                },
                SK: {
                    code: "SK",
                    name: "Slovakia",
                    native: "Slovensko",
                    phone: "421",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["sk"],
                    emoji: "\ud83c\uddf8\ud83c\uddf0",
                    unicode: "U+1F1F8 U+1F1F0"
                },
                SL: {
                    code: "SL",
                    name: "Sierra Leone",
                    native: "Sierra Leone",
                    phone: "232",
                    continent: "AF",
                    currency: "SLL",
                    languages: ["en"],
                    emoji: "\ud83c\uddf8\ud83c\uddf1",
                    unicode: "U+1F1F8 U+1F1F1"
                },
                SM: {
                    code: "SM",
                    name: "San Marino",
                    native: "San Marino",
                    phone: "378",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["it"],
                    emoji: "\ud83c\uddf8\ud83c\uddf2",
                    unicode: "U+1F1F8 U+1F1F2"
                },
                SN: {
                    code: "SN",
                    name: "Senegal",
                    native: "S\xe9n\xe9gal",
                    phone: "221",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf8\ud83c\uddf3",
                    unicode: "U+1F1F8 U+1F1F3"
                },
                SO: {
                    code: "SO",
                    name: "Somalia",
                    native: "Soomaaliya",
                    phone: "252",
                    continent: "AF",
                    currency: "SOS",
                    languages: ["so", "ar"],
                    emoji: "\ud83c\uddf8\ud83c\uddf4",
                    unicode: "U+1F1F8 U+1F1F4"
                },
                SR: {
                    code: "SR",
                    name: "Suriname",
                    native: "Suriname",
                    phone: "597",
                    continent: "SA",
                    currency: "SRD",
                    languages: ["nl"],
                    emoji: "\ud83c\uddf8\ud83c\uddf7",
                    unicode: "U+1F1F8 U+1F1F7"
                },
                SS: {
                    code: "SS",
                    name: "South Sudan",
                    native: "South Sudan",
                    phone: "211",
                    continent: "AF",
                    currency: "SSP",
                    languages: ["en"],
                    emoji: "\ud83c\uddf8\ud83c\uddf8",
                    unicode: "U+1F1F8 U+1F1F8"
                },
                ST: {
                    code: "ST",
                    name: "S\xe3o Tom\xe9 and Pr\xedncipe",
                    native: "S\xe3o Tom\xe9 e Pr\xedncipe",
                    phone: "239",
                    continent: "AF",
                    currency: "STN",
                    languages: ["pt"],
                    emoji: "\ud83c\uddf8\ud83c\uddf9",
                    unicode: "U+1F1F8 U+1F1F9"
                },
                SV: {
                    code: "SV",
                    name: "El Salvador",
                    native: "El Salvador",
                    phone: "503",
                    continent: "NA",
                    currency: "SVC,USD",
                    languages: ["es"],
                    emoji: "\ud83c\uddf8\ud83c\uddfb",
                    unicode: "U+1F1F8 U+1F1FB"
                },
                SX: {
                    code: "SX",
                    name: "Sint Maarten",
                    native: "Sint Maarten",
                    phone: "1721",
                    continent: "NA",
                    currency: "ANG",
                    languages: ["nl", "en"],
                    emoji: "\ud83c\uddf8\ud83c\uddfd",
                    unicode: "U+1F1F8 U+1F1FD"
                },
                SY: {
                    code: "SY",
                    name: "Syria",
                    native: "\u0633\u0648\u0631\u064a\u0627",
                    phone: "963",
                    continent: "AS",
                    currency: "SYP",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf8\ud83c\uddfe",
                    unicode: "U+1F1F8 U+1F1FE"
                },
                SZ: {
                    code: "SZ",
                    name: "Swaziland",
                    native: "Swaziland",
                    phone: "268",
                    continent: "AF",
                    currency: "SZL",
                    languages: ["en", "ss"],
                    emoji: "\ud83c\uddf8\ud83c\uddff",
                    unicode: "U+1F1F8 U+1F1FF"
                },
                TC: {
                    code: "TC",
                    name: "Turks and Caicos Islands",
                    native: "Turks and Caicos Islands",
                    phone: "1649",
                    continent: "NA",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf9\ud83c\udde8",
                    unicode: "U+1F1F9 U+1F1E8"
                },
                TD: {
                    code: "TD",
                    name: "Chad",
                    native: "Tchad",
                    phone: "235",
                    continent: "AF",
                    currency: "XAF",
                    languages: ["fr", "ar"],
                    emoji: "\ud83c\uddf9\ud83c\udde9",
                    unicode: "U+1F1F9 U+1F1E9"
                },
                TF: {
                    code: "TF",
                    name: "French Southern Territories",
                    native: "Territoire des Terres australes et antarctiques fr",
                    phone: "262",
                    continent: "AN",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf9\ud83c\uddeb",
                    unicode: "U+1F1F9 U+1F1EB"
                },
                TG: {
                    code: "TG",
                    name: "Togo",
                    native: "Togo",
                    phone: "228",
                    continent: "AF",
                    currency: "XOF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddf9\ud83c\uddec",
                    unicode: "U+1F1F9 U+1F1EC"
                },
                TH: {
                    code: "TH",
                    name: "Thailand",
                    native: "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22",
                    phone: "66",
                    continent: "AS",
                    currency: "THB",
                    languages: ["th"],
                    emoji: "\ud83c\uddf9\ud83c\udded",
                    unicode: "U+1F1F9 U+1F1ED"
                },
                TJ: {
                    code: "TJ",
                    name: "Tajikistan",
                    native: "\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d",
                    phone: "992",
                    continent: "AS",
                    currency: "TJS",
                    languages: ["tg", "ru"],
                    emoji: "\ud83c\uddf9\ud83c\uddef",
                    unicode: "U+1F1F9 U+1F1EF"
                },
                TK: {
                    code: "TK",
                    name: "Tokelau",
                    native: "Tokelau",
                    phone: "690",
                    continent: "OC",
                    currency: "NZD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf9\ud83c\uddf0",
                    unicode: "U+1F1F9 U+1F1F0"
                },
                TL: {
                    code: "TL",
                    name: "East Timor",
                    native: "Timor-Leste",
                    phone: "670",
                    continent: "OC",
                    currency: "USD",
                    languages: ["pt"],
                    emoji: "\ud83c\uddf9\ud83c\uddf1",
                    unicode: "U+1F1F9 U+1F1F1"
                },
                TM: {
                    code: "TM",
                    name: "Turkmenistan",
                    native: "T\xfcrkmenistan",
                    phone: "993",
                    continent: "AS",
                    currency: "TMT",
                    languages: ["tk", "ru"],
                    emoji: "\ud83c\uddf9\ud83c\uddf2",
                    unicode: "U+1F1F9 U+1F1F2"
                },
                TN: {
                    code: "TN",
                    name: "Tunisia",
                    native: "\u062a\u0648\u0646\u0633",
                    phone: "216",
                    continent: "AF",
                    currency: "TND",
                    languages: ["ar"],
                    emoji: "\ud83c\uddf9\ud83c\uddf3",
                    unicode: "U+1F1F9 U+1F1F3"
                },
                TO: {
                    code: "TO",
                    name: "Tonga",
                    native: "Tonga",
                    phone: "676",
                    continent: "OC",
                    currency: "TOP",
                    languages: ["en", "to"],
                    emoji: "\ud83c\uddf9\ud83c\uddf4",
                    unicode: "U+1F1F9 U+1F1F4"
                },
                TR: {
                    code: "TR",
                    name: "Turkey",
                    native: "T\xfcrkiye",
                    phone: "90",
                    continent: "AS",
                    currency: "TRY",
                    languages: ["tr"],
                    emoji: "\ud83c\uddf9\ud83c\uddf7",
                    unicode: "U+1F1F9 U+1F1F7"
                },
                TT: {
                    code: "TT",
                    name: "Trinidad and Tobago",
                    native: "Trinidad and Tobago",
                    phone: "1868",
                    continent: "NA",
                    currency: "TTD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf9\ud83c\uddf9",
                    unicode: "U+1F1F9 U+1F1F9"
                },
                TV: {
                    code: "TV",
                    name: "Tuvalu",
                    native: "Tuvalu",
                    phone: "688",
                    continent: "OC",
                    currency: "AUD",
                    languages: ["en"],
                    emoji: "\ud83c\uddf9\ud83c\uddfb",
                    unicode: "U+1F1F9 U+1F1FB"
                },
                TW: {
                    code: "TW",
                    name: "Taiwan",
                    native: "\u81fa\u7063",
                    phone: "886",
                    continent: "AS",
                    currency: "TWD",
                    languages: ["zh"],
                    emoji: "\ud83c\uddf9\ud83c\uddfc",
                    unicode: "U+1F1F9 U+1F1FC"
                },
                TZ: {
                    code: "TZ",
                    name: "Tanzania",
                    native: "Tanzania",
                    phone: "255",
                    continent: "AF",
                    currency: "TZS",
                    languages: ["sw", "en"],
                    emoji: "\ud83c\uddf9\ud83c\uddff",
                    unicode: "U+1F1F9 U+1F1FF"
                },
                UA: {
                    code: "UA",
                    name: "Ukraine",
                    native: "\u0423\u043a\u0440\u0430\u0457\u043d\u0430",
                    phone: "380",
                    continent: "EU",
                    currency: "UAH",
                    languages: ["uk"],
                    emoji: "\ud83c\uddfa\ud83c\udde6",
                    unicode: "U+1F1FA U+1F1E6"
                },
                UG: {
                    code: "UG",
                    name: "Uganda",
                    native: "Uganda",
                    phone: "256",
                    continent: "AF",
                    currency: "UGX",
                    languages: ["en", "sw"],
                    emoji: "\ud83c\uddfa\ud83c\uddec",
                    unicode: "U+1F1FA U+1F1EC"
                },
                UM: {
                    code: "UM",
                    name: "U.S. Minor Outlying Islands",
                    native: "United States Minor Outlying Islands",
                    phone: "1",
                    continent: "OC",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddfa\ud83c\uddf2",
                    unicode: "U+1F1FA U+1F1F2"
                },
                US: {
                    code: "US",
                    name: "United States",
                    native: "United States",
                    phone: "1",
                    continent: "NA",
                    currency: "USD,USN,USS",
                    languages: ["en"],
                    emoji: "\ud83c\uddfa\ud83c\uddf8",
                    unicode: "U+1F1FA U+1F1F8"
                },
                UY: {
                    code: "UY",
                    name: "Uruguay",
                    native: "Uruguay",
                    phone: "598",
                    continent: "SA",
                    currency: "UYI,UYU",
                    languages: ["es"],
                    emoji: "\ud83c\uddfa\ud83c\uddfe",
                    unicode: "U+1F1FA U+1F1FE"
                },
                UZ: {
                    code: "UZ",
                    name: "Uzbekistan",
                    native: "O\u2018zbekiston",
                    phone: "998",
                    continent: "AS",
                    currency: "UZS",
                    languages: ["uz", "ru"],
                    emoji: "\ud83c\uddfa\ud83c\uddff",
                    unicode: "U+1F1FA U+1F1FF"
                },
                VA: {
                    code: "VA",
                    name: "Vatican City",
                    native: "Vaticano",
                    phone: "379",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["it", "la"],
                    emoji: "\ud83c\uddfb\ud83c\udde6",
                    unicode: "U+1F1FB U+1F1E6"
                },
                VC: {
                    code: "VC",
                    name: "Saint Vincent and the Grenadines",
                    native: "Saint Vincent and the Grenadines",
                    phone: "1784",
                    continent: "NA",
                    currency: "XCD",
                    languages: ["en"],
                    emoji: "\ud83c\uddfb\ud83c\udde8",
                    unicode: "U+1F1FB U+1F1E8"
                },
                VE: {
                    code: "VE",
                    name: "Venezuela",
                    native: "Venezuela",
                    phone: "58",
                    continent: "SA",
                    currency: "VES",
                    languages: ["es"],
                    emoji: "\ud83c\uddfb\ud83c\uddea",
                    unicode: "U+1F1FB U+1F1EA"
                },
                VG: {
                    code: "VG",
                    name: "British Virgin Islands",
                    native: "British Virgin Islands",
                    phone: "1284",
                    continent: "NA",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddfb\ud83c\uddec",
                    unicode: "U+1F1FB U+1F1EC"
                },
                VI: {
                    code: "VI",
                    name: "U.S. Virgin Islands",
                    native: "United States Virgin Islands",
                    phone: "1340",
                    continent: "NA",
                    currency: "USD",
                    languages: ["en"],
                    emoji: "\ud83c\uddfb\ud83c\uddee",
                    unicode: "U+1F1FB U+1F1EE"
                },
                VN: {
                    code: "VN",
                    name: "Vietnam",
                    native: "Vi\u1ec7t Nam",
                    phone: "84",
                    continent: "AS",
                    currency: "VND",
                    languages: ["vi"],
                    emoji: "\ud83c\uddfb\ud83c\uddf3",
                    unicode: "U+1F1FB U+1F1F3"
                },
                VU: {
                    code: "VU",
                    name: "Vanuatu",
                    native: "Vanuatu",
                    phone: "678",
                    continent: "OC",
                    currency: "VUV",
                    languages: ["bi", "en", "fr"],
                    emoji: "\ud83c\uddfb\ud83c\uddfa",
                    unicode: "U+1F1FB U+1F1FA"
                },
                WF: {
                    code: "WF",
                    name: "Wallis and Futuna",
                    native: "Wallis et Futuna",
                    phone: "681",
                    continent: "OC",
                    currency: "XPF",
                    languages: ["fr"],
                    emoji: "\ud83c\uddfc\ud83c\uddeb",
                    unicode: "U+1F1FC U+1F1EB"
                },
                WS: {
                    code: "WS",
                    name: "Samoa",
                    native: "Samoa",
                    phone: "685",
                    continent: "OC",
                    currency: "WST",
                    languages: ["sm", "en"],
                    emoji: "\ud83c\uddfc\ud83c\uddf8",
                    unicode: "U+1F1FC U+1F1F8"
                },
                XK: {
                    code: "XK",
                    name: "Kosovo",
                    native: "Republika e Kosov\xebs",
                    phone: "377,381,383,386",
                    continent: "EU",
                    currency: "EUR",
                    languages: ["sq", "sr"],
                    emoji: "\ud83c\uddfd\ud83c\uddf0",
                    unicode: "U+1F1FD U+1F1F0"
                },
                YE: {
                    code: "YE",
                    name: "Yemen",
                    native: "\u0627\u0644\u064a\u064e\u0645\u064e\u0646",
                    phone: "967",
                    continent: "AS",
                    currency: "YER",
                    languages: ["ar"],
                    emoji: "\ud83c\uddfe\ud83c\uddea",
                    unicode: "U+1F1FE U+1F1EA"
                },
                YT: {
                    code: "YT",
                    name: "Mayotte",
                    native: "Mayotte",
                    phone: "262",
                    continent: "AF",
                    currency: "EUR",
                    languages: ["fr"],
                    emoji: "\ud83c\uddfe\ud83c\uddf9",
                    unicode: "U+1F1FE U+1F1F9"
                },
                ZA: {
                    code: "ZA",
                    name: "South Africa",
                    native: "South Africa",
                    phone: "27",
                    continent: "AF",
                    currency: "ZAR",
                    languages: ["af", "en", "nr", "st", "ss", "tn", "ts", "ve", "xh", "zu"],
                    emoji: "\ud83c\uddff\ud83c\udde6",
                    unicode: "U+1F1FF U+1F1E6"
                },
                ZM: {
                    code: "ZM",
                    name: "Zambia",
                    native: "Zambia",
                    phone: "260",
                    continent: "AF",
                    currency: "ZMW",
                    languages: ["en"],
                    emoji: "\ud83c\uddff\ud83c\uddf2",
                    unicode: "U+1F1FF U+1F1F2"
                },
                ZW: {
                    code: "ZW",
                    name: "Zimbabwe",
                    native: "Zimbabwe",
                    phone: "263",
                    continent: "AF",
                    currency: "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
                    languages: ["en", "sn", "nd"],
                    emoji: "\ud83c\uddff\ud83c\uddfc",
                    unicode: "U+1F1FF U+1F1FC"
                }
            };
            n.default = r
        },
        i2R6: function(e, n) {
            function t(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            e.exports = function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        kG2m: function(e, n) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        kekF: function(e, n) {
            e.exports = function(e, n) {
                return function(t) {
                    return e(n(t))
                }
            }
        },
        lHfL: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t("BCwL"),
                o = (0, r.curryN)(2, (function(e, n, t) {
                    return (0, r.path)(n.split("."), e) || t
                }));
            n.default = o
        },
        lSCD: function(e, n, t) {
            var r = t("NykK"),
                o = t("GoyQ");
            e.exports = function(e) {
                if (!o(e)) return !1;
                var n = r(e);
                return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
            }
        },
        lSNA: function(e, n) {
            e.exports = function(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        ls82: function(e, n, t) {
            var r = function(e) {
                "use strict";
                var n, t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = "function" === typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    i = o.asyncIterator || "@@asyncIterator",
                    u = o.toStringTag || "@@toStringTag";

                function c(e, n, t) {
                    return Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[n]
                }
                try {
                    c({}, "")
                } catch (P) {
                    c = function(e, n, t) {
                        return e[n] = t
                    }
                }

                function s(e, n, t, r) {
                    var o = n && n.prototype instanceof m ? n : m,
                        a = Object.create(o.prototype),
                        i = new C(r || []);
                    return a._invoke = function(e, n, t) {
                        var r = f;
                        return function(o, a) {
                            if (r === d) throw new Error("Generator is already running");
                            if (r === h) {
                                if ("throw" === o) throw a;
                                return M()
                            }
                            for (t.method = o, t.arg = a;;) {
                                var i = t.delegate;
                                if (i) {
                                    var u = S(i, t);
                                    if (u) {
                                        if (u === y) continue;
                                        return u
                                    }
                                }
                                if ("next" === t.method) t.sent = t._sent = t.arg;
                                else if ("throw" === t.method) {
                                    if (r === f) throw r = h, t.arg;
                                    t.dispatchException(t.arg)
                                } else "return" === t.method && t.abrupt("return", t.arg);
                                r = d;
                                var c = l(e, n, t);
                                if ("normal" === c.type) {
                                    if (r = t.done ? h : p, c.arg === y) continue;
                                    return {
                                        value: c.arg,
                                        done: t.done
                                    }
                                }
                                "throw" === c.type && (r = h, t.method = "throw", t.arg = c.arg)
                            }
                        }
                    }(e, t, i), a
                }

                function l(e, n, t) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(n, t)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                e.wrap = s;
                var f = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    h = "completed",
                    y = {};

                function m() {}

                function g() {}

                function v() {}
                var F = {};
                c(F, a, (function() {
                    return this
                }));
                var U = Object.getPrototypeOf,
                    b = U && U(U(w([])));
                b && b !== t && r.call(b, a) && (F = b);
                var A = v.prototype = m.prototype = Object.create(F);

                function j(e) {
                    ["next", "throw", "return"].forEach((function(n) {
                        c(e, n, (function(e) {
                            return this._invoke(n, e)
                        }))
                    }))
                }

                function E(e, n) {
                    function t(o, a, i, u) {
                        var c = l(e[o], e, a);
                        if ("throw" !== c.type) {
                            var s = c.arg,
                                f = s.value;
                            return f && "object" === typeof f && r.call(f, "__await") ? n.resolve(f.__await).then((function(e) {
                                t("next", e, i, u)
                            }), (function(e) {
                                t("throw", e, i, u)
                            })) : n.resolve(f).then((function(e) {
                                s.value = e, i(s)
                            }), (function(e) {
                                return t("throw", e, i, u)
                            }))
                        }
                        u(c.arg)
                    }
                    var o;
                    this._invoke = function(e, r) {
                        function a() {
                            return new n((function(n, o) {
                                t(e, r, n, o)
                            }))
                        }
                        return o = o ? o.then(a, a) : a()
                    }
                }

                function S(e, t) {
                    var r = e.iterator[t.method];
                    if (r === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = n, S(e, t), "throw" === t.method)) return y;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return y
                    }
                    var o = l(r, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, y;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, y) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
                }

                function O(e) {
                    var n = {
                        tryLoc: e[0]
                    };
                    1 in e && (n.catchLoc = e[1]), 2 in e && (n.finallyLoc = e[2], n.afterLoc = e[3]), this.tryEntries.push(n)
                }

                function x(e) {
                    var n = e.completion || {};
                    n.type = "normal", delete n.arg, e.completion = n
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function w(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function t() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = n, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: M
                    }
                }

                function M() {
                    return {
                        value: n,
                        done: !0
                    }
                }
                return g.prototype = v, c(A, "constructor", v), c(v, "constructor", g), g.displayName = c(v, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var n = "function" === typeof e && e.constructor;
                    return !!n && (n === g || "GeneratorFunction" === (n.displayName || n.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, c(e, u, "GeneratorFunction")), e.prototype = Object.create(A), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, j(E.prototype), c(E.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(n, t, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new E(s(n, t, r, o), a);
                    return e.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, j(A), c(A, u, "Generator"), c(A, a, (function() {
                    return this
                })), c(A, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var n = [];
                    for (var t in e) n.push(t);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e) return t.value = r, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = w, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function o(r, o) {
                            return u.type = "throw", u.arg = e, t.next = r, o && (t.method = "next", t.arg = n), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                u = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var c = r.call(i, "catchLoc"),
                                    s = r.call(i, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, n) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var o = this.tryEntries[t];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= n && n <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = n, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                    },
                    complete: function(e, n) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && n && (this.next = n), y
                    },
                    finish: function(e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var t = this.tryEntries[n];
                            if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), x(t), y
                        }
                    },
                    catch: function(e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var t = this.tryEntries[n];
                            if (t.tryLoc === e) {
                                var r = t.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    x(t)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: w(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), y
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = r
            } catch (o) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
            }
        },
        m0LI: function(e, n) {
            e.exports = function(e, n) {
                var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var r, o, a = [],
                        i = !0,
                        u = !1;
                    try {
                        for (t = t.call(e); !(i = (r = t.next()).done) && (a.push(r.value), !n || a.length !== n); i = !0);
                    } catch (c) {
                        u = !0, o = c
                    } finally {
                        try {
                            i || null == t.return || t.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return a
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        mLbm: function(e, n, t) {
            "use strict";
            var r = t("oI91");

            function o(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.defaultHead = f, n.default = void 0;
            var a, i = function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                                r.get || r.set ? Object.defineProperty(n, t, r) : n[t] = e[t]
                            }
                    return n.default = e, n
                }(t("q1tI")),
                u = (a = t("BdAR")) && a.__esModule ? a : {
                    default: a
                },
                c = t("r55Z"),
                s = t("CM2u"),
                l = t("dTAc");

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = [i.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || n.push(i.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), n
            }

            function p(e, n) {
                return "string" === typeof n || "number" === typeof n ? e : n.type === i.default.Fragment ? e.concat(i.default.Children.toArray(n.props.children).reduce((function(e, n) {
                    return "string" === typeof n || "number" === typeof n ? e : e.concat(n)
                }), [])) : e.concat(n)
            }
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, n) {
                return e.reduce((function(e, n) {
                    var t = i.default.Children.toArray(n.props.children);
                    return e.concat(t)
                }), []).reduce(p, []).reverse().concat(f(n.inAmpMode)).filter(function() {
                    var e = new Set,
                        n = new Set,
                        t = new Set,
                        r = {};
                    return function(o) {
                        var a = !0,
                            i = !1;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            i = !0;
                            var u = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(u) ? a = !1 : e.add(u)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                n.has(o.type) ? a = !1 : n.add(o.type);
                                break;
                            case "meta":
                                for (var c = 0, s = d.length; c < s; c++) {
                                    var l = d[c];
                                    if (o.props.hasOwnProperty(l))
                                        if ("charSet" === l) t.has(l) ? a = !1 : t.add(l);
                                        else {
                                            var f = o.props[l],
                                                p = r[l] || new Set;
                                            "name" === l && i || !p.has(f) ? (p.add(f), r[l] = p) : a = !1
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function(e, t) {
                    var a = e.key || t;
                    if (!n.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(n) {
                            return e.props.href.startsWith(n)
                        }))) {
                        var u = function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {};
                                n % 2 ? o(Object(t), !0).forEach((function(n) {
                                    r(e, n, t[n])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                }))
                            }
                            return e
                        }({}, e.props || {});
                        return u["data-href"] = u.href, u.href = void 0, u["data-optimized-fonts"] = !0, i.default.cloneElement(e, u)
                    }
                    return i.default.cloneElement(e, {
                        key: a
                    })
                }))
            }
            var y = function(e) {
                var n = e.children,
                    t = i.useContext(c.AmpStateContext),
                    r = i.useContext(s.HeadManagerContext);
                return i.default.createElement(u.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: l.isInAmpMode(t)
                }, n)
            };
            n.default = y
        },
        mMun: function(e, n, t) {
            "use strict";
            var r = t("TqRt");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = r(t("RIqP")),
                a = function e(n) {
                    var t;
                    return Array.isArray(n) ? (t = []).concat.apply(t, (0, o.default)(n.map(e))) : n
                };
            n.default = a
        },
        mPvQ: function(e, n, t) {
            var r = t("5fIB"),
                o = t("rlHP"),
                a = t("KckH"),
                i = t("kG2m");
            e.exports = function(e) {
                return r(e) || o(e) || a(e) || i()
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        mdPL: function(e, n, t) {
            (function(e) {
                var r = t("WFqU"),
                    o = n && !n.nodeType && n,
                    a = o && "object" == typeof e && e && !e.nodeType && e,
                    i = a && a.exports === o && r.process,
                    u = function() {
                        try {
                            var e = a && a.require && a.require("util").types;
                            return e || i && i.binding && i.binding("util")
                        } catch (n) {}
                    }();
                e.exports = u
            }).call(this, t("LY0y")(e))
        },
        nmnc: function(e, n, t) {
            var r = t("Kz5y").Symbol;
            e.exports = r
        },
        ntbh: function(e, n) {
            (function(n) {
                e.exports = function() {
                    var e = {
                            149: function(e) {
                                var n;
                                n = function() {
                                    return this
                                }();
                                try {
                                    n = n || new Function("return this")()
                                } catch (t) {
                                    "object" === typeof window && (n = window)
                                }
                                e.exports = n
                            }
                        },
                        t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var o = t[n] = {
                                exports: {}
                            },
                            a = !0;
                        try {
                            e[n](o, o.exports, r), a = !1
                        } finally {
                            a && delete t[n]
                        }
                        return o.exports
                    }
                    return r.ab = n + "/", r(149)
                }()
            }).call(this, "/")
        },
        oI91: function(e, n) {
            e.exports = function(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        qXWd: function(e, n) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        qhzo: function(e, n) {
            function t(n, r) {
                return e.exports = t = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                }, e.exports.default = e.exports, e.exports.__esModule = !0, t(n, r)
            }
            e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        r55Z: function(e, n, t) {
            "use strict";
            var r;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.AmpStateContext = void 0;
            var o = ((r = t("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            n.AmpStateContext = o
        },
        rg98: function(e, n, t) {
            "use strict";

            function r(e, n, t, r, o, a, i) {
                try {
                    var u = e[a](i),
                        c = u.value
                } catch (s) {
                    return void t(s)
                }
                u.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function o(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(o, a) {
                        var i = e.apply(n, t);

                        function u(e) {
                            r(i, o, a, u, c, "next", e)
                        }

                        function c(e) {
                            r(i, o, a, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            t.d(n, "a", (function() {
                return o
            }))
        },
        rlHP: function(e, n) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        sEf8: function(e, n) {
            e.exports = function(e) {
                return function(n) {
                    return e(n)
                }
            }
        },
        sFT9: function(e, n, t) {
            "use strict";
            var r;
            Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = n.hasError = n.isValidating = n.isValid = n.notValidating = n.ValidationState = void 0, n.ValidationState = r,
                function(e) {
                    e.INITIAL = "initial", e.VALIDATING = "validating", e.ERROR = "error", e.VALIDATED = "validated"
                }(r || (n.ValidationState = r = {}));
            var o = {
                    INITIAL: r.INITIAL,
                    VALIDATING: r.VALIDATING,
                    ERROR: r.ERROR,
                    VALIDATED: r.VALIDATED
                },
                a = function(e) {
                    return !e || e === o.INITIAL
                };
            n.notValidating = a;
            var i = function(e) {
                return e === o.VALIDATED
            };
            n.isValid = i;
            var u = function(e) {
                return e === o.VALIDATING
            };
            n.isValidating = u;
            var c = function(e) {
                return e === o.ERROR
            };
            n.hasError = c;
            var s = {
                states: o,
                notValidating: a,
                isValid: i,
                isValidating: u,
                hasError: c
            };
            n.default = s
        },
        sKRl: function(e, n, t) {
            "use strict";
            var r = t("TqRt");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = t("BCwL"),
                a = r(t("lHfL")),
                i = r(t("KJNy")),
                u = (0, o.curry)((function(e, n, t) {
                    var r = n;
                    n instanceof Function && (r = n((0, a.default)(t, e)));
                    return (0, i.default)(e, r, t)
                }));
            n.default = u
        },
        shjB: function(e, n) {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        tCBg: function(e, n, t) {
            var r = t("C+bE").default,
                o = t("qXWd");
            e.exports = function(e, n) {
                if (n && ("object" === r(n) || "function" === typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return o(e)
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        tadb: function(e, n, t) {
            var r = t("Cwc5")(t("Kz5y"), "DataView");
            e.exports = r
        },
        vJKn: function(e, n, t) {
            e.exports = t("ls82")
        },
        vpIL: function(e, n, t) {
            "use strict";
            var r = t("TqRt"),
                o = t("cDf5");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "chunkArray", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(n, "classNames", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(n, "exists", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(n, "flatten", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(n, "getCountryByCode", {
                enumerable: !0,
                get: function() {
                    return s.getCountryByCode
                }
            }), Object.defineProperty(n, "getContinentByCode", {
                enumerable: !0,
                get: function() {
                    return s.getContinentByCode
                }
            }), Object.defineProperty(n, "getLanguageByCode", {
                enumerable: !0,
                get: function() {
                    return s.getLanguageByCode
                }
            }), Object.defineProperty(n, "getCurrencySymbol", {
                enumerable: !0,
                get: function() {
                    return l.getCurrencySymbol
                }
            }), Object.defineProperty(n, "convertToDisplayCurrency", {
                enumerable: !0,
                get: function() {
                    return l.convertToDisplayCurrency
                }
            }), Object.defineProperty(n, "convertToStoredCurrency", {
                enumerable: !0,
                get: function() {
                    return l.convertToStoredCurrency
                }
            }), Object.defineProperty(n, "convertToDisplayCurrencyValue", {
                enumerable: !0,
                get: function() {
                    return l.convertToDisplayCurrencyValue
                }
            }), Object.defineProperty(n, "isSharedCurrencySymbol", {
                enumerable: !0,
                get: function() {
                    return l.isSharedCurrencySymbol
                }
            }), Object.defineProperty(n, "displayShopifyMoneyAmountWithCode", {
                enumerable: !0,
                get: function() {
                    return l.displayShopifyMoneyAmountWithCode
                }
            }), Object.defineProperty(n, "isBrowser", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(n, "isDevice", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(n, "objectToCsv", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(n, "pipeWith", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(n, "responseStatus", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(n, "ResponseStatus", {
                enumerable: !0,
                get: function() {
                    return y.ResponseStatus
                }
            }), Object.defineProperty(n, "returnIfRejected", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(n, "sleep", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(n, "throwIfError", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(n, "validation", {
                enumerable: !0,
                get: function() {
                    return F.default
                }
            }), Object.defineProperty(n, "deleteProp", {
                enumerable: !0,
                get: function() {
                    return U.default
                }
            }), Object.defineProperty(n, "getProp", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(n, "setProp", {
                enumerable: !0,
                get: function() {
                    return A.default
                }
            }), Object.defineProperty(n, "updateProp", {
                enumerable: !0,
                get: function() {
                    return j.default
                }
            }), Object.defineProperty(n, "setValue", {
                enumerable: !0,
                get: function() {
                    return E.default
                }
            });
            var a = r(t("KXE+")),
                i = r(t("BwWR")),
                u = r(t("XE8d")),
                c = r(t("mMun")),
                s = t("PBQd"),
                l = t("PByC"),
                f = r(t("Vphi")),
                p = r(t("bZ/B")),
                d = r(t("ZT1V")),
                h = r(t("FqS6")),
                y = function(e, n) {
                    if (!n && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = S(n);
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(t("UkzX")),
                m = r(t("65k2")),
                g = r(t("3kUd")),
                v = r(t("7LJ6")),
                F = r(t("sFT9")),
                U = r(t("NgYX")),
                b = r(t("lHfL")),
                A = r(t("KJNy")),
                j = r(t("sKRl")),
                E = r(t("SUc9"));

            function S(e) {
                if ("function" !== typeof WeakMap) return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (S = function(e) {
                    return e ? t : n
                })(e)
            }
        },
        wTVA: function(e, n) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        wkBT: function(e, n) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        xvI3: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = {
                af: {
                    name: "Afrikaans",
                    native: "Afrikaans"
                },
                am: {
                    name: "Amharic",
                    native: "\u12a0\u121b\u122d\u129b"
                },
                ar: {
                    name: "Arabic",
                    native: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                    rtl: 1
                },
                ay: {
                    name: "Aymara",
                    native: "Aymar"
                },
                az: {
                    name: "Azerbaijani",
                    native: "Az\u0259rbaycanca / \u0622\u0630\u0631\u0628\u0627\u064a\u062c\u0627\u0646"
                },
                be: {
                    name: "Belarusian",
                    native: "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"
                },
                bg: {
                    name: "Bulgarian",
                    native: "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"
                },
                bi: {
                    name: "Bislama",
                    native: "Bislama"
                },
                bn: {
                    name: "Bengali",
                    native: "\u09ac\u09be\u0982\u09b2\u09be"
                },
                bs: {
                    name: "Bosnian",
                    native: "Bosanski"
                },
                ca: {
                    name: "Catalan",
                    native: "Catal\xe0"
                },
                ch: {
                    name: "Chamorro",
                    native: "Chamoru"
                },
                cs: {
                    name: "Czech",
                    native: "\u010cesky"
                },
                da: {
                    name: "Danish",
                    native: "Dansk"
                },
                de: {
                    name: "German",
                    native: "Deutsch"
                },
                dv: {
                    name: "Divehi",
                    native: "\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0",
                    rtl: 1
                },
                dz: {
                    name: "Dzongkha",
                    native: "\u0f47\u0f7c\u0f44\u0f0b\u0f41"
                },
                el: {
                    name: "Greek",
                    native: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
                },
                en: {
                    name: "English",
                    native: "English"
                },
                es: {
                    name: "Spanish",
                    native: "Espa\xf1ol"
                },
                et: {
                    name: "Estonian",
                    native: "Eesti"
                },
                eu: {
                    name: "Basque",
                    native: "Euskara"
                },
                fa: {
                    name: "Persian",
                    native: "\u0641\u0627\u0631\u0633\u06cc",
                    rtl: 1
                },
                ff: {
                    name: "Peul",
                    native: "Fulfulde"
                },
                fi: {
                    name: "Finnish",
                    native: "Suomi"
                },
                fj: {
                    name: "Fijian",
                    native: "Na Vosa Vakaviti"
                },
                fo: {
                    name: "Faroese",
                    native: "F\xf8royskt"
                },
                fr: {
                    name: "French",
                    native: "Fran\xe7ais"
                },
                ga: {
                    name: "Irish",
                    native: "Gaeilge"
                },
                gl: {
                    name: "Galician",
                    native: "Galego"
                },
                gn: {
                    name: "Guarani",
                    native: "Ava\xf1e'\u1ebd"
                },
                gv: {
                    name: "Manx",
                    native: "Gaelg"
                },
                he: {
                    name: "Hebrew",
                    native: "\u05e2\u05d1\u05e8\u05d9\u05ea",
                    rtl: 1
                },
                hi: {
                    name: "Hindi",
                    native: "\u0939\u093f\u0928\u094d\u0926\u0940"
                },
                hr: {
                    name: "Croatian",
                    native: "Hrvatski"
                },
                ht: {
                    name: "Haitian",
                    native: "Kr\xe8yol ayisyen"
                },
                hu: {
                    name: "Hungarian",
                    native: "Magyar"
                },
                hy: {
                    name: "Armenian",
                    native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
                },
                id: {
                    name: "Indonesian",
                    native: "Bahasa Indonesia"
                },
                is: {
                    name: "Icelandic",
                    native: "\xcdslenska"
                },
                it: {
                    name: "Italian",
                    native: "Italiano"
                },
                ja: {
                    name: "Japanese",
                    native: "\u65e5\u672c\u8a9e"
                },
                ka: {
                    name: "Georgian",
                    native: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"
                },
                kg: {
                    name: "Kongo",
                    native: "KiKongo"
                },
                kk: {
                    name: "Kazakh",
                    native: "\u049a\u0430\u0437\u0430\u049b\u0448\u0430"
                },
                kl: {
                    name: "Greenlandic",
                    native: "Kalaallisut"
                },
                km: {
                    name: "Cambodian",
                    native: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a"
                },
                ko: {
                    name: "Korean",
                    native: "\ud55c\uad6d\uc5b4"
                },
                ku: {
                    name: "Kurdish",
                    native: "Kurd\xee / \u0643\u0648\u0631\u062f\u06cc",
                    rtl: 1
                },
                ky: {
                    name: "Kirghiz",
                    native: "K\u0131rg\u0131zca / \u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"
                },
                la: {
                    name: "Latin",
                    native: "Latina"
                },
                lb: {
                    name: "Luxembourgish",
                    native: "L\xebtzebuergesch"
                },
                ln: {
                    name: "Lingala",
                    native: "Ling\xe1la"
                },
                lo: {
                    name: "Laotian",
                    native: "\u0ea5\u0eb2\u0ea7 / Pha xa lao"
                },
                lt: {
                    name: "Lithuanian",
                    native: "Lietuvi\u0173"
                },
                lu: {
                    name: "Luba-Katanga",
                    native: "Tshiluba"
                },
                lv: {
                    name: "Latvian",
                    native: "Latvie\u0161u"
                },
                mg: {
                    name: "Malagasy",
                    native: "Malagasy"
                },
                mh: {
                    name: "Marshallese",
                    native: "Kajin Majel / Ebon"
                },
                mi: {
                    name: "Maori",
                    native: "M\u0101ori"
                },
                mk: {
                    name: "Macedonian",
                    native: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"
                },
                mn: {
                    name: "Mongolian",
                    native: "\u041c\u043e\u043d\u0433\u043e\u043b"
                },
                ms: {
                    name: "Malay",
                    native: "Bahasa Melayu"
                },
                mt: {
                    name: "Maltese",
                    native: "bil-Malti"
                },
                my: {
                    name: "Burmese",
                    native: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c"
                },
                na: {
                    name: "Nauruan",
                    native: "Dorerin Naoero"
                },
                nb: {
                    name: "Norwegian Bokm\xe5l",
                    native: "Norsk bokm\xe5l"
                },
                nd: {
                    name: "North Ndebele",
                    native: "Sindebele"
                },
                ne: {
                    name: "Nepali",
                    native: "\u0928\u0947\u092a\u093e\u0932\u0940"
                },
                nl: {
                    name: "Dutch",
                    native: "Nederlands"
                },
                nn: {
                    name: "Norwegian Nynorsk",
                    native: "Norsk nynorsk"
                },
                no: {
                    name: "Norwegian",
                    native: "Norsk"
                },
                nr: {
                    name: "South Ndebele",
                    native: "isiNdebele"
                },
                ny: {
                    name: "Chichewa",
                    native: "Chi-Chewa"
                },
                oc: {
                    name: "Occitan",
                    native: "Occitan"
                },
                pa: {
                    name: "Panjabi / Punjabi",
                    native: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40 / \u092a\u0902\u091c\u093e\u092c\u0940 / \u067e\u0646\u062c\u0627\u0628\u064a"
                },
                pl: {
                    name: "Polish",
                    native: "Polski"
                },
                ps: {
                    name: "Pashto",
                    native: "\u067e\u069a\u062a\u0648",
                    rtl: 1
                },
                pt: {
                    name: "Portuguese",
                    native: "Portugu\xeas"
                },
                qu: {
                    name: "Quechua",
                    native: "Runa Simi"
                },
                rn: {
                    name: "Kirundi",
                    native: "Kirundi"
                },
                ro: {
                    name: "Romanian",
                    native: "Rom\xe2n\u0103"
                },
                ru: {
                    name: "Russian",
                    native: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
                },
                rw: {
                    name: "Rwandi",
                    native: "Kinyarwandi"
                },
                sg: {
                    name: "Sango",
                    native: "S\xe4ng\xf6"
                },
                si: {
                    name: "Sinhalese",
                    native: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"
                },
                sk: {
                    name: "Slovak",
                    native: "Sloven\u010dina"
                },
                sl: {
                    name: "Slovenian",
                    native: "Sloven\u0161\u010dina"
                },
                sm: {
                    name: "Samoan",
                    native: "Gagana Samoa"
                },
                sn: {
                    name: "Shona",
                    native: "chiShona"
                },
                so: {
                    name: "Somalia",
                    native: "Soomaaliga"
                },
                sq: {
                    name: "Albanian",
                    native: "Shqip"
                },
                sr: {
                    name: "Serbian",
                    native: "\u0421\u0440\u043f\u0441\u043a\u0438"
                },
                ss: {
                    name: "Swati",
                    native: "SiSwati"
                },
                st: {
                    name: "Southern Sotho",
                    native: "Sesotho"
                },
                sv: {
                    name: "Swedish",
                    native: "Svenska"
                },
                sw: {
                    name: "Swahili",
                    native: "Kiswahili"
                },
                ta: {
                    name: "Tamil",
                    native: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"
                },
                tg: {
                    name: "Tajik",
                    native: "\u0422\u043e\u04b7\u0438\u043a\u04e3"
                },
                th: {
                    name: "Thai",
                    native: "\u0e44\u0e17\u0e22 / Phasa Thai"
                },
                ti: {
                    name: "Tigrinya",
                    native: "\u1275\u130d\u122d\u129b"
                },
                tk: {
                    name: "Turkmen",
                    native: "\u0422\u0443\u0440\u043a\u043c\u0435\u043d / \u062a\u0631\u0643\u0645\u0646"
                },
                tn: {
                    name: "Tswana",
                    native: "Setswana"
                },
                to: {
                    name: "Tonga",
                    native: "Lea Faka-Tonga"
                },
                tr: {
                    name: "Turkish",
                    native: "T\xfcrk\xe7e"
                },
                ts: {
                    name: "Tsonga",
                    native: "Xitsonga"
                },
                uk: {
                    name: "Ukrainian",
                    native: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
                },
                ur: {
                    name: "Urdu",
                    native: "\u0627\u0631\u062f\u0648",
                    rtl: 1
                },
                uz: {
                    name: "Uzbek",
                    native: "\u040e\u0437\u0431\u0435\u043a"
                },
                ve: {
                    name: "Venda",
                    native: "Tshiven\u1e13a"
                },
                vi: {
                    name: "Vietnamese",
                    native: "Ti\u1ebfng Vi\u1ec7t"
                },
                xh: {
                    name: "Xhosa",
                    native: "isiXhosa"
                },
                zh: {
                    name: "Chinese",
                    native: "\u4e2d\u6587"
                },
                zu: {
                    name: "Zulu",
                    native: "isiZulu"
                }
            };
            n.default = r
        },
        yGk4: function(e, n, t) {
            var r = t("Cwc5")(t("Kz5y"), "Set");
            e.exports = r
        }
    }
]);