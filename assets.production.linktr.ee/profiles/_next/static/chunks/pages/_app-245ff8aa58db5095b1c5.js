_N_E = (window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [20], {
        "22d7": function(e, t, n) {},
        "74v/": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("hUgY")
            }])
        },
        8: function(e, t, n) {
            n("74v/"), e.exports = n("nOHt")
        },
        A0Hy: function(e, t, n) {
            "use strict";
            n("q1tI");
            var r = n("g4pe"),
                i = n.n(r),
                o = n("tRls"),
                a = n("yEjR"),
                c = n("ZJoe"),
                s = n("nKUr");
            t.a = function(e) {
                var t = e.title,
                    n = e.username,
                    r = e.children;
                return Object(s.jsxs)(s.Fragment, {
                    children: [Object(s.jsxs)(i.a, {
                        children: [Object(s.jsx)(a.b, {}), Object(s.jsx)(a.c, {
                            googleOptimize: !0
                        }), n && Object(s.jsx)(c.a, {}), Object(s.jsx)("title", {
                            children: t
                        })]
                    }), Object(s.jsx)(o.ThemeProvider, {
                        theme: o.theme,
                        children: r
                    })]
                })
            }
        },
        LixI: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return u
            }));
            var r = n("rg98"),
                i = n("vJKn"),
                o = n.n(i),
                a = n("q1tI"),
                c = n("Nhdc"),
                s = n("nKUr");

            function u(e) {
                var t = e.url,
                    i = e.statusCode,
                    u = Object(a.useState)(""),
                    l = u[0],
                    d = u[1];
                switch (Object(a.useEffect)((function() {
                    Object(r.a)(o.a.mark((function e() {
                        var r;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.e(130).then(n.bind(null, "dbQI"));
                                case 2:
                                    r = e.sent.default, d(r(t, !0));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [t]), i) {
                    case 404:
                        return Object(s.jsx)(c.d, {
                            pageTitle: "Linktree | Page Not Found",
                            message: "The page you\u2019re looking for doesn\u2019t exist.",
                            username: l.length ? l : null,
                            cta: {
                                preface: "Want this to be your username?",
                                title: "Create your Linktree now.",
                                url: "https://linktr.ee/register?utm_source=linktree_profile&utm_medium=profile&utm_campaign=404_Page&utm_content=campaign&utm_term=CTA".concat(l ? "&username=".concat(l) : "")
                            }
                        });
                    default:
                        return Object(s.jsx)(c.d, {
                            pageTitle: "Linktree",
                            message: "Linktree is currently undergoing maintenance. Back soon!",
                            cta: {
                                title: "Get updates",
                                url: "https://systems.linktr.ee/"
                            }
                        })
                }
            }
            u.getInitialProps = function(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t ? t.statusCode : n ? n.statusCode : 404
                }
            }
        },
        hUgY: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return y
            })), n.d(t, "reportWebVitals", (function() {
                return C
            }));
            var r, i = n("cpVT"),
                o = (n("q1tI"), n("LixI")),
                a = n("vOnD"),
                c = n("tRls"),
                s = n("YAiP"),
                u = n("A0Hy"),
                l = n("eu+l"),
                d = n("nKUr"),
                f = Object(a.default)(c.Flex).withConfig({
                    displayName: "UnverifiedProfilePage__GradientOverlayFlex",
                    componentId: "sc-lvc4dl-0"
                })(["background:linear-gradient(180deg,transparent 0,transparent 1%,hsla(0,0%,100%,0.96) 45%,#fff 50%);"]),
                p = function(e) {
                    var t = e.metaTitle,
                        n = e.username;
                    return Object(d.jsxs)(d.Fragment, {
                        children: [Object(d.jsx)(l.a, {}), Object(d.jsx)(u.a, {
                            username: n,
                            title: t,
                            children: Object(d.jsxs)(c.Box, {
                                height: "100%",
                                minHeight: "100vh",
                                width: "100%",
                                position: "relative",
                                children: [Object(d.jsxs)(c.Flex, {
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                    paddingX: "x3",
                                    flex: 1,
                                    overflow: "auto",
                                    minHeight: "100vh",
                                    children: [Object(d.jsxs)(c.Flex, {
                                        maxWidth: "profileContainer",
                                        margin: "0 auto",
                                        width: "100%",
                                        flexDirection: "column",
                                        minHeight: "min-content",
                                        children: [Object(d.jsx)(c.Box, {
                                            height: "x24",
                                            width: "x24",
                                            borderRadius: "100%",
                                            backgroundColor: "palette.blueGrey3",
                                            marginTop: "x9",
                                            marginBottom: "x21",
                                            alignSelf: "center"
                                        }), [1, 2, 3, 4].map((function(e) {
                                            return Object(d.jsx)(c.Box, {
                                                marginBottom: "x4",
                                                height: "x15",
                                                backgroundColor: "palette.blueGrey3"
                                            }, e)
                                        }))]
                                    }), Object(d.jsx)(c.Box, {
                                        margin: "0 auto",
                                        zIndex: "2",
                                        paddingTop: "x3",
                                        paddingBottom: "20px",
                                        children: Object(d.jsx)(s.a, {
                                            height: "20px",
                                            title: "Linktree",
                                            description: ""
                                        })
                                    })]
                                }), Object(d.jsx)(f, {
                                    justifyContent: "center",
                                    alignContent: "center",
                                    flexDirection: "column",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: "1",
                                    children: Object(d.jsx)(c.Box, {
                                        maxWidth: "500px",
                                        margin: "0 auto",
                                        children: Object(d.jsx)(c.Heading, {
                                            level: "h4",
                                            textAlign: "center",
                                            fontFamily: "primary",
                                            fontWeight: "bold",
                                            color: "palette.slate13",
                                            "data-testid": "UnverifiedProfileMessage",
                                            children: "This profile is not yet verified. Please check back soon."
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                j = n("mOvS"),
                g = n.n(j),
                b = g()().publicRuntimeConfig,
                m = n("sN0J"),
                h = n("dabP");
            n("22d7"), n("qPqd");

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _ = g()().publicRuntimeConfig,
                v = parseFloat(_.DD_SAMPLE_RATE),
                w = {
                    clientToken: null !== (r = _.DD_CLIENT_TOKEN) && void 0 !== r ? r : "",
                    site: h.datadogSite.US,
                    sampleRate: v || 100,
                    env: _.STAGE,
                    service: _.SERVICE,
                    forwardErrorsToLogs: !0
                };

            function y(e) {
                var t, n = e.Component,
                    r = e.pageProps;
                return (t = r).statusCode && t.statusCode >= 400 ? Object(d.jsx)(o.default, {
                    url: r.url,
                    statusCode: r.statusCode
                }) : function(e) {
                    return e.status && "unverified" === e.status
                }(r) ? Object(d.jsx)(p, O({}, r)) : Object(d.jsx)(n, O({}, r))
            }

            function C(e) {
                var t = e.name,
                    n = e.label,
                    r = e.value,
                    i = e.startTime;
                "true" !== _.WEB_VITALS || "web-vital" !== n && "custom" !== n || function(e, t, n) {
                    var r;
                    window.DD_LOGS && window.DD_LOGS.logger.info("profiles.web_vitals.".concat(null !== (r = {
                        FCP: "first_contentful_paint",
                        LCP: "largest_contentful_paint",
                        CLS: "cumulative_layout_shift",
                        FID: "first_input_delay",
                        TTFB: "time_to_first_byte"
                    }[e]) && void 0 !== r ? r : e), {
                        startTime: t,
                        stage: b.STAGE,
                        value: Math.round("CLS" === e ? 1e3 * n : n)
                    })
                }(t, i, r)
            }
            Object(m.w)(w, _.STAGE)
        },
        qPqd: function(e, t, n) {}
    },
    [
        [8, 2, 1, 3, 5, 0, 4, 13]
    ]
]);