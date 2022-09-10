(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [26], {
        "4sub": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("q1tI"),
                c = n("sN0J"),
                o = n("xvhg"),
                r = n("wEEd"),
                a = n("vOnD"),
                s = n("YEJx"),
                l = n("ulPZ"),
                u = n("tRls"),
                d = n("nKUr"),
                O = Object(a.default)(u.Box).withConfig({
                    displayName: "CauseBannerToggle__Transition",
                    componentId: "sc-1sjeyjw-0"
                })(["transform:rotate(", "deg);cursor:pointer;transition:transform 0.2s 0.2s ease-in-out;"], Object(s.b)("isOpen", 0, 180)),
                j = function(e) {
                    var t = e.isOpen,
                        n = e.isActive,
                        i = e.handleClose;
                    return Object(d.jsx)(O, {
                        isOpen: t,
                        onClick: function() {
                            return (t || n) && i()
                        },
                        "data-testid": "CauseBannerToggle",
                        children: Object(d.jsx)(u.Icon, {
                            viewBox: "0 0 20 20",
                            display: "block",
                            size: "md",
                            color: "palette.slate6",
                            children: n ? Object(d.jsx)("path", {
                                d: "M12 10.59l5-4.95 1.41 1.41-4.95 5 4.9 4.95L17 18.36l-5-4.95-4.95 4.95L5.64 17l5-4.95-5-5 1.41-1.41z"
                            }) : Object(d.jsx)("path", {
                                d: "M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                            })
                        })
                    })
                },
                b = Object(r.a)(u.Box),
                h = Object(a.default)(u.Box).withConfig({
                    displayName: "CauseBannerContainer__Container",
                    componentId: "sc-95w0g7-0"
                })(["cursor:", ";"], Object(s.b)("isOpen", "default", "pointer")),
                p = function(e) {
                    var t = e.onOpen,
                        n = e.onClose,
                        i = e.isOpen,
                        c = e.isActive,
                        a = e.openContent,
                        s = e.closedContent,
                        O = e.activeContent,
                        p = Object(l.useMeasure)(),
                        x = Object(o.a)(p, 2),
                        f = x[0],
                        g = x[1].height,
                        C = Object(r.b)({
                            height: g
                        }),
                        v = function(e) {
                            return Object(r.b)({
                                opacity: e ? 1 : 0,
                                display: e ? "initial" : "none"
                            })
                        };
                    return Object(d.jsx)(h, {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "auto",
                        backgroundColor: "palette.black",
                        color: "palette.white",
                        zIndex: 1e3,
                        isOpen: i,
                        onClick: i ? void 0 : t,
                        "data-testid": "cause-banner",
                        children: Object(d.jsx)(b, {
                            style: C,
                            children: Object(d.jsx)(u.Box, {
                                ref: f,
                                children: Object(d.jsxs)(u.Box, {
                                    padding: c ? 0 : "x4",
                                    children: [Object(d.jsx)(u.Box, {
                                        position: "absolute",
                                        right: "x4",
                                        top: "x4",
                                        children: Object(d.jsx)(j, {
                                            isOpen: i,
                                            isActive: c,
                                            handleClose: n
                                        })
                                    }), Object(d.jsx)(b, {
                                        style: v(i),
                                        children: a
                                    }), Object(d.jsx)(b, {
                                        style: v(!i && !c),
                                        children: s
                                    }), Object(d.jsx)(b, {
                                        style: v(c),
                                        children: c && O
                                    })]
                                })
                            })
                        })
                    })
                },
                x = n("9Koi"),
                f = Object(a.default)(u.Box).withConfig({
                    displayName: "CauseLogo",
                    componentId: "sc-6oj1am-0"
                })(["background-image:url(", ");background-repeat:round;border-radius:50%;width:", ";height:", ";"], (function(e) {
                    return function(e) {
                        switch (e) {
                            case "GOFUNDME_GIVINGTREE_2020":
                                return "https://linktr.ee/_next/static/logo-assets/logo-gofundme-green.gif";
                            case "BLM":
                            default:
                                return "https://linktr.ee/_next/static/logo-assets/logo-heart-bw.gif"
                        }
                    }(e.cause)
                }), Object(s.e)("space.x12"), Object(s.e)("space.x12")),
                g = n("cpVT"),
                C = n("dhJC"),
                v = ["inactive"];

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        Object(g.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var E, _ = function(e) {
                    var t = e.inactive,
                        n = Object(C.a)(e, v);
                    return Object(d.jsx)(u.Button, w(w({}, n), {}, {
                        as: "a",
                        height: "x10",
                        fullWidth: !0,
                        borderRadius: "x3",
                        color: "palette.black",
                        backgroundColor: "palette.white",
                        pointerEvents: t ? "none" : "auto"
                    }))
                },
                B = {
                    BLM: {
                        url: "https://linktr.ee/action",
                        username: "action"
                    },
                    GOFUNDME_GIVINGTREE_2020: {
                        url: "https://linktr.ee/givingtree",
                        username: "givingtree"
                    },
                    ANTIWAR: {
                        url: "https://linktr.ee/withukraine",
                        username: "withukraine"
                    }
                },
                y = function(e) {
                    return "".concat(B[e].url, "?").concat("utm_campaign=cause_banner_open&utm_medium=linktree_profile")
                },
                k = function(e) {
                    var t = e.cause,
                        n = e.isPreview,
                        i = e.onCtaClick,
                        c = Object(x.a)("CauseBanner").t;
                    return Object(d.jsxs)(u.Flex, {
                        margin: "0 auto",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "profileContainer",
                        "data-testid": "CauseBannerContentOpen",
                        children: [Object(d.jsx)(f, {
                            cause: t
                        }), Object(d.jsxs)(u.Box, {
                            paddingX: "x4",
                            maxWidth: "358px",
                            marginTop: "x2",
                            marginBottom: "x5",
                            children: [Object(d.jsx)(u.Box, {
                                marginBottom: "x2",
                                children: Object(d.jsx)(u.Heading, {
                                    textAlign: "center",
                                    level: "h6",
                                    children: c("title.".concat(t))
                                })
                            }), Object(d.jsx)(u.Text, {
                                textAlign: "center",
                                level: "p5",
                                children: c("description.".concat(t))
                            })]
                        }), Object(d.jsx)(_, {
                            href: y(t),
                            onClick: i,
                            inactive: n,
                            children: c("cta.".concat(t))
                        })]
                    })
                },
                A = function(e) {
                    var t = e.cause,
                        n = Object(x.a)("CauseBanner").t;
                    return Object(d.jsx)(u.Heading, {
                        textAlign: "center",
                        level: "h6",
                        "data-testid": "CauseBannerContentClosed",
                        children: n("title.".concat(t))
                    })
                },
                D = function(e) {
                    var t = e.cause;
                    return Object(d.jsx)(u.Box, {
                        height: "100vh",
                        children: Object(d.jsx)("iframe", {
                            src: y(t),
                            width: "100%",
                            height: "100%"
                        })
                    })
                };
            ! function(e) {
                e.CLOSED = "closed", e.OPEN = "open", e.ACTIVE = "active"
            }(E || (E = {}));
            t.default = function(e) {
                var t = e.username,
                    n = e.cause,
                    o = e.isPreview,
                    r = e.isMinimized,
                    a = void 0 !== r && r,
                    s = e.onBannerMinimize,
                    l = e.onBannerMaximize,
                    u = e.onCtaOpen,
                    O = e.onCtaClose;
                if (!Object(c.c)(n)) return null;
                var j = Object(i.useState)(E.OPEN),
                    b = j[0],
                    h = j[1];
                Object(i.useEffect)((function() {
                    a && x()
                }), [a]);
                var x = function() {
                    b === E.ACTIVE ? (O && O(), window.location.hash = "") : s && s(), h(E.CLOSED)
                };
                return window.addEventListener("hashchange", (function() {
                    "#banner_open" !== window.location.hash && h(E.OPEN), "#banner_open" === window.location.hash && h(E.ACTIVE)
                })), Object(d.jsx)(p, {
                    isOpen: b === E.OPEN,
                    isActive: b === E.ACTIVE,
                    onOpen: function() {
                        l && l(), h(E.OPEN)
                    },
                    onClose: x,
                    openContent: Object(d.jsx)(k, {
                        cause: n,
                        isPreview: o,
                        onCtaClick: function(e) {
                            e.preventDefault(), u && u(), B[n].username === t ? window.location.href = y(n) : (h(E.ACTIVE), window.location.hash = "banner_open")
                        }
                    }),
                    closedContent: Object(d.jsx)(A, {
                        cause: n
                    }),
                    activeContent: Object(d.jsx)(D, {
                        cause: n
                    })
                })
            }
        }
    }
]);