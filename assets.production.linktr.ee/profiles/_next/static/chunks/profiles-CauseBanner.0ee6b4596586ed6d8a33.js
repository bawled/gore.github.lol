(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [25], {
        jqSF: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, "trackEvent", (function() {
                return o
            }));
            i("q1tI");
            var r = i("c1rh"),
                t = i("dabP"),
                u = i("UeAw"),
                a = i("nKUr"),
                o = function(e, n, i) {
                    try {
                        return Object(u.a)(e, {
                            cause: i,
                            visitedAccountId: n.id,
                            visitedAccountUuid: n.uuid
                        }, [])
                    } catch (r) {
                        console.error("Failed to send ".concat(e, " event"), {
                            error: r
                        })
                    }
                };
            n.default = function(e) {
                var n = e.cause,
                    i = void 0 === n ? t.CauseTypes.BLM : n,
                    u = e.isMinimized,
                    c = e.account;
                return Object(a.jsx)(r.a, {
                    username: c.username,
                    cause: i,
                    isMinimized: u,
                    onBannerMaximize: function() {
                        return o("ProfileCauseBannerMaximized", c, i)
                    },
                    onBannerMinimize: function() {
                        return o("ProfileCauseBannerMinimized", c, i)
                    },
                    onCtaOpen: function() {
                        return o("ProfileCauseBannerCtaClicked", c, i)
                    },
                    onCtaClose: function() {
                        return o("ProfileCauseBannerClosed", c, i)
                    },
                    isPreview: !1
                })
            }
        }
    }
]);