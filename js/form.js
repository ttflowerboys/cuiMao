function SaveServerCallBack() {
    if (isCallBackClick)
        return !1;
    if ($.trim($("#callBackMemberCode").val()) == "")
        return art.zxMsg.alertWarning("请输入会员账号", function() {
            $("#callBackMemberCode").focus()
        }),
        !1;
    if ($.trim($("#callBackTroubleType").val()) == "")
        return art.zxMsg.alertWarning("请选择问题类型", function() {
            $("#callBackTroubleType").focus()
        }),
        !1;
    if ($.trim($("#callBackPhoneNum").val()) == "")
        return art.zxMsg.alertWarning("请输入手机号码", function() {
            $("#callBackPhoneNum").focus()
        }),
        !1;
    if (!/^1[3|4|5|7|8][0-9]{9}$/.test($.trim($("#callBackPhoneNum").val())))
        return alert("请填写正确的手机号码"),
        $("#callBackPhoneNum").focus(),
        !1;
    isCallBackClick = !0;
    $.ajax({
        url: "/Help/SaveCallBack",
        type: "post",
        data: {
            username: $.trim($("#callBackMemberCode").val()),
            tel: $.trim($("#callBackPhoneNum").val()),
            TroubleType: $("#callBackTroubleType").val(),
            TroubleText: $("#callBackTroubleType").find("option:selected").text(),
            __RequestVerificationToken: $("input[type='hidden'][name='__RequestVerificationToken']").val()
        },
        success: function(n) {
            isCallBackClick = !1;
            n == "" ? art.zxMsg.alertSucce("提交成功，我们将在周一至周六14:00-18:00期间与您联系", function() {
                $(".sidebar-box").click()
            }) : art.zxMsg.alertWarning(n)
        },
        error: function() {
            isCallBackClick = !1
        }
    })
}
function verifyEmail(n) {
    return !($.trim(n).length == 0 || !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(n))
}
function verifyDate(n) {
    return !($.trim(n).length == 0 || !/^(\d{4})([-])(\d{2})([-])(\d{2})/.test(n))
}
function sliaonow() {
    var r = document.location.hostname.split("."), i, t, n;
    r[1] == "0000" ? (i = $.trim($("#myUserNameByKefu").text()),
    window.open("http://cs.zx-live.com/?token=b1bff3d21620e58557a8d1daf1fd0666&into=true&userId=" + i, "newwindow", "height=660,width=490,top=0,left=0,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no")) : (t = "svidname",
    n = getCookie(t),
    n == "" && (n = randomString(22),
    setCookie(t, n, 365)),
    window.open('https://lpcdn.lpsnmedia.net/le_unified_window/8.2.0.0-release_1705/index.html?lpUnifiedWindowConfig={"accountId":"22488558","env":"prod","external":true,"secureStorageType":"indexedDB","engConf":{"async":false,"scid":"1","cid":336929451,"eid":340083951,"lang":"zh-CN","svid":"' + n + '","ssid":"zq_EsSGARLOkUeXfMxuBLw.5834b38ef1d5ad2ebd013d85862b478356650c1e","lewid":340082751}}', "newwindow", "height=660,width=490,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no"))
}
function setCookie(n, t, i) {
    var r = new Date, u;
    r.setTime(r.getTime() + i * 864e5);
    u = "expires=" + r.toUTCString();
    document.cookie = n + "=" + t + "; " + u
}
function getCookie(n) {
    for (var r = n + "=", u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " "; )
            t = t.substring(1);
        if (t.indexOf(r) != -1)
            return t.substring(r.length, t.length)
    }
    return ""
}
function clearCookie(n) {
    setCookie(n, "", -1)
}
function checkCookie() {
    var n = getCookie("username");
    n != "" ? alert("Welcome again " + n) : (n = prompt("Please enter your name:", ""),
    n != "" && n != null && setCookie("username", n, 365))
}
function randomString(n) {
    n = n || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
      , u = t.length
      , r = "";
    for (i = 0; i < n; i++)
        r += t.charAt(Math.floor(Math.random() * u));
    return r
}
function platclose() {
    $(".close").click(function() {
        $("#zxcbox").remove()
    })
}
function Showbox(n) {
    var t = "";
    $.post(n, {}, function(n) {
        t = n;
        $("#zxcbox").remove();
        $("body").append(t);
        $zxcbox = $("#zxcbox");
        $zxcbox = $("#zxcbox");
        $zxcbox.css({
            left: ($(window).width() - $zxcbox.outerWidth()) / 2 + 120
        });
        $zxcbox.css({
            top: ($(window).height() - $zxcbox.outerHeight()) / 2
        });
        $(window).resize(function() {
            $zxcbox.css({
                left: ($(window).width() - $zxcbox.outerWidth()) / 2 + 120
            });
            $zxcbox.css({
                top: ($(window).height() - $zxcbox.outerHeight()) / 2
            })
        });
        $(window).scroll(function() {
            $zxcbox.css({
                left: ($(window).width() - $zxcbox.outerWidth()) / 2 + 120
            });
            $zxcbox.css({
                top: ($(window).height() - $zxcbox.outerHeight()) / 2
            })
        });
        $zxcbox.css("display", "block");
        platclose()
    })
}
function ShowBoxCenter(n) {
    var t = "";
    $.post(n, {}, function(n) {
        t = n;
        $("#zxcbox").remove();
        $("body").append(t);
        $zxcbox = $("#zxcbox");
        $zxcbox.css({
            left: ($(window).width() - $zxcbox.outerWidth()) / 2
        });
        $zxcbox.css({
            top: ($(window).height() - $zxcbox.outerHeight()) / 2
        });
        $(window).resize(function() {
            $zxcbox.css({
                left: ($(window).width() - $zxcbox.outerWidth()) / 2
            });
            $zxcbox.css({
                top: ($(window).height() - $zxcbox.outerHeight()) / 2
            })
        });
        $(window).scroll(function() {
            $zxcbox.css({
                left: ($(window).width() - $zxcbox.outerWidth()) / 2
            });
            $zxcbox.css({
                top: ($(window).height() - $zxcbox.outerHeight()) / 2
            })
        });
        $zxcbox.css("display", "block");
        platclose()
    })
}
function AddBack() {
    if ($("#divtranBack").length == 0)
        $("body").append("<div id='divtranBack' style='width:100%;height:100%;position:absolute;left:0px;top:0px;filter:alpha(Opacity=60);-moz-opacity:0.2;opacity:0.2;background-color:black;z-index:2;'><\/div>")
}
function RemoveBack() {
    $("#divtranBack").remove()
}
function beginLogin() {
    var t = $("#UserName").val(), n;
    if ($.trim(t).length == 0)
        return art.zxMsg.alertWarning("请输入用户名", function() {
            $("#UserName").focus()
        }),
        !1;
    if (n = $.trim($("#PassWord").val()),
    n.length == 0)
        return art.zxMsg.alertWarning("请输入密码", function() {
            $("#PassWord").focus()
        }),
        !1;
    if (n.length < 6)
        return art.zxMsg.alertWarning("密码位数不能小于6位", function() {
            $("#PassWord").focus()
        }),
        !1;
    if ($("#LoginBtn").attr("disabled", "disabled").html("登录中..."),
    islogin)
        return !1;
    islogin = !0;
    $.ajax({
        url: "/Home/Login",
        type: "post",
        data: {
            userName: t,
            passsWord: n,
            __RequestVerificationToken: $("input[type='hidden'][name='__RequestVerificationToken']").val()
        },
        success: function(n) {
            n == "success" ? (LoginState($.trim($("#UserName").val())),
            LoginSuccess()) : art.zxMsg.alertWarning(n);
            islogin = !1;
            $("#LoginBtn").removeAttr("disabled").html("登录")
        },
        error: function() {
            islogin = !1;
            $("#LoginBtn").removeAttr("disabled").html("登录")
        }
    })
}
function LoginState(n) {
    ShowMsg();
    $("#loginAfter").show();
    $("#loginDiv").hide();
    $("#loginAfter em").text(n);
    $("body").data("login", "true")
}
function LoginSuccess() {}
function ExitSuccess() {}
function exit() {
    return art.zxMsg.alertQuestion("您确定退出吗？").button({
        name: "确定",
        callback: function() {
            $.post("/Home/Logout", {
                act: "exit",
                m: Math.random()
            }, function(n) {
                n == "success" ? ($("body").removeData("login"),
                ExitSuccess(),
                $("#UserName").val(""),
                $("#PassWord").val(""),
                $("#loginAfter").hide(),
                $("#loginDiv").show()) : art.zxMsg.alertWarning(n)
            })
        }
    }),
    !1
}
function ShowMsg() {
    $.ajax({
        url: "/Message/GetEjectMessage",
        type: "post",
        data: {
            __RequestVerificationToken: $("input[type='hidden'][name='__RequestVerificationToken']").val()
        },
        success: function(n) {
            parseInt(n) > 0 && ShowBoxCenter("/Message/MessageDetail/" + n)
        },
        error: function() {}
    })
}
var isCallBackClick, islogin;
!function() {
    "use strict";
    function f(n) {
        n.fn.swiper = function(t) {
            var r;
            return n(this).each(function() {
                var n = new i(this,t);
                r || (r = n)
            }),
            r
        }
    }
    var n, i = function(r, u) {
        function k(n) {
            return Math.floor(n)
        }
        function ut() {
            var n = f.params.autoplay
              , t = f.slides.eq(f.activeIndex);
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || f.params.autoplay);
            f.autoplayTimeoutId = setTimeout(function() {
                f.params.loop ? (f.fixLoop(),
                f._slideNext(),
                f.emit("onAutoplay", f)) : f.isEnd ? u.autoplayStopOnLast ? f.stopAutoplay() : (f._slideTo(0),
                f.emit("onAutoplay", f)) : (f._slideNext(),
                f.emit("onAutoplay", f))
            }, n)
        }
        function ft(t, i) {
            var r = n(t.target), u;
            if (!r.is(i))
                if ("string" == typeof i)
                    r = r.parents(i);
                else if (i.nodeType)
                    return r.parents().each(function(n, t) {
                        t === i && (u = i)
                    }),
                    u ? i : void 0;
            if (0 !== r.length)
                return r[0]
        }
        function et(n, t) {
            t = t || {};
            var r = window.MutationObserver || window.WebkitMutationObserver
              , i = new r(function(n) {
                n.forEach(function(n) {
                    f.onResize(!0);
                    f.emit("onObserverUpdate", f, n)
                })
            }
            );
            i.observe(n, {
                attributes: "undefined" == typeof t.attributes || t.attributes,
                childList: "undefined" == typeof t.childList || t.childList,
                characterData: "undefined" == typeof t.characterData || t.characterData
            });
            f.observers.push(i)
        }
        function yt(n) {
            var t, o, s, e, r;
            if ((n.originalEvent && (n = n.originalEvent),
            t = n.keyCode || n.charCode,
            !f.params.allowSwipeToNext && (f.isHorizontal() && 39 === t || !f.isHorizontal() && 40 === t)) || !f.params.allowSwipeToPrev && (f.isHorizontal() && 37 === t || !f.isHorizontal() && 38 === t))
                return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    if (o = !1,
                    f.container.parents("." + f.params.slideClass).length > 0 && 0 === f.container.parents("." + f.params.slideActiveClass).length)
                        return;
                    var u = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , h = window.innerWidth
                      , c = window.innerHeight
                      , i = f.container.offset();
                    for (f.rtl && (i.left = i.left - f.container[0].scrollLeft),
                    s = [[i.left, i.top], [i.left + f.width, i.top], [i.left, i.top + f.height], [i.left + f.width, i.top + f.height]],
                    e = 0; e < s.length; e++)
                        r = s[e],
                        r[0] >= u.left && r[0] <= u.left + h && r[1] >= u.top && r[1] <= u.top + c && (o = !0);
                    if (!o)
                        return
                }
                f.isHorizontal() ? (37 !== t && 39 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                (39 === t && !f.rtl || 37 === t && f.rtl) && f.slideNext(),
                (37 === t && !f.rtl || 39 === t && f.rtl) && f.slidePrev()) : (38 !== t && 40 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                40 === t && f.slideNext(),
                38 === t && f.slidePrev())
            }
        }
        function kt() {
            var t = "onwheel", n = t in document, i;
            return n || (i = document.createElement("div"),
            i.setAttribute(t, "return;"),
            n = "function" == typeof i[t]),
            !n && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (n = document.implementation.hasFeature("Events.wheel", "3.0")),
            n
        }
        function pt(n) {
            n.originalEvent && (n = n.originalEvent);
            var i = 0
              , u = f.rtl ? -1 : 1
              , t = dt(n);
            if (f.params.mousewheelForceToAxis)
                if (f.isHorizontal()) {
                    if (!(Math.abs(t.pixelX) > Math.abs(t.pixelY)))
                        return;
                    i = t.pixelX * u
                } else {
                    if (!(Math.abs(t.pixelY) > Math.abs(t.pixelX)))
                        return;
                    i = t.pixelY
                }
            else
                i = Math.abs(t.pixelX) > Math.abs(t.pixelY) ? -t.pixelX * u : -t.pixelY;
            if (0 !== i) {
                if (f.params.mousewheelInvert && (i = -i),
                f.params.freeMode) {
                    var r = f.getWrapperTranslate() + i * f.params.mousewheelSensitivity
                      , e = f.isBeginning
                      , o = f.isEnd;
                    if (r >= f.minTranslate() && (r = f.minTranslate()),
                    r <= f.maxTranslate() && (r = f.maxTranslate()),
                    f.setWrapperTransition(0),
                    f.setWrapperTranslate(r),
                    f.updateProgress(),
                    f.updateActiveIndex(),
                    (!e && f.isBeginning || !o && f.isEnd) && f.updateClasses(),
                    f.params.freeModeSticky ? (clearTimeout(f.mousewheel.timeout),
                    f.mousewheel.timeout = setTimeout(function() {
                        f.slideReset()
                    }, 300)) : f.params.lazyLoading && f.lazy && f.lazy.load(),
                    f.emit("onScroll", f, n),
                    f.params.autoplay && f.params.autoplayDisableOnInteraction && f.stopAutoplay(),
                    0 === r || r === f.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - f.mousewheel.lastScrollTime > 60)
                        if (i < 0)
                            if (f.isEnd && !f.params.loop || f.animating) {
                                if (f.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                f.slideNext(),
                                f.emit("onScroll", f, n);
                        else if (f.isBeginning && !f.params.loop || f.animating) {
                            if (f.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            f.slidePrev(),
                            f.emit("onScroll", f, n);
                    f.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                !1
            }
        }
        function dt(n) {
            var f = 10
              , e = 40
              , o = 800
              , u = 0
              , t = 0
              , i = 0
              , r = 0;
            return "detail"in n && (t = n.detail),
            "wheelDelta"in n && (t = -n.wheelDelta / 120),
            "wheelDeltaY"in n && (t = -n.wheelDeltaY / 120),
            "wheelDeltaX"in n && (u = -n.wheelDeltaX / 120),
            "axis"in n && n.axis === n.HORIZONTAL_AXIS && (u = t,
            t = 0),
            i = u * f,
            r = t * f,
            "deltaY"in n && (r = n.deltaY),
            "deltaX"in n && (i = n.deltaX),
            (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= e,
            r *= e) : (i *= o,
            r *= o)),
            i && !u && (u = i < 1 ? -1 : 1),
            r && !t && (t = r < 1 ? -1 : 1),
            {
                spinX: u,
                spinY: t,
                pixelX: i,
                pixelY: r
            }
        }
        function wt(t, i) {
            t = n(t);
            var e, r, u, o = f.rtl ? -1 : 1;
            e = t.attr("data-swiper-parallax") || "0";
            r = t.attr("data-swiper-parallax-x");
            u = t.attr("data-swiper-parallax-y");
            r || u ? (r = r || "0",
            u = u || "0") : f.isHorizontal() ? (r = e,
            u = "0") : (u = e,
            r = "0");
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * o + "%" : r * i * o + "px";
            u = u.indexOf("%") >= 0 ? parseInt(u, 10) * i + "%" : u * i + "px";
            t.transform("translate3d(" + r + ", " + u + ",0px)")
        }
        function ot(n) {
            return 0 !== n.indexOf("on") && (n = n[0] !== n[0].toUpperCase() ? "on" + n[0].toUpperCase() + n.substring(1) : "on" + n),
            n
        }
        var y, bt, p, o, st, h, d, f, ht, b, rt, at, vt;
        if (!(this instanceof i))
            return new i(r,u);
        y = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        };
        bt = u && u.virtualTranslate;
        u = u || {};
        p = {};
        for (o in u)
            if ("object" != typeof u[o] || null === u[o] || u[o].nodeType || u[o] === window || u[o] === document || "undefined" != typeof Dom7 && u[o]instanceof Dom7 || "undefined" != typeof jQuery && u[o]instanceof jQuery)
                p[o] = u[o];
            else {
                p[o] = {};
                for (st in u[o])
                    p[o][st] = u[o][st]
            }
        for (h in y)
            if ("undefined" == typeof u[h])
                u[h] = y[h];
            else if ("object" == typeof u[h])
                for (d in y[h])
                    "undefined" == typeof u[h][d] && (u[h][d] = y[h][d]);
        if (f = this,
        f.params = u,
        f.originalParams = p,
        f.classNames = [],
        "undefined" != typeof n && "undefined" != typeof Dom7 && (n = Dom7),
        ("undefined" != typeof n || (n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (f.$ = n,
        f.currentBreakpoint = void 0,
        f.getActiveBreakpoint = function() {
            var n, i, t, r;
            if (!f.params.breakpoints)
                return !1;
            i = !1;
            t = [];
            for (n in f.params.breakpoints)
                f.params.breakpoints.hasOwnProperty(n) && t.push(n);
            for (t.sort(function(n, t) {
                return parseInt(n, 10) > parseInt(t, 10)
            }),
            r = 0; r < t.length; r++)
                n = t[r],
                n >= window.innerWidth && !i && (i = n);
            return i || "max"
        }
        ,
        f.setBreakpoint = function() {
            var n = f.getActiveBreakpoint(), t, r, i;
            if (n && f.currentBreakpoint !== n) {
                t = n in f.params.breakpoints ? f.params.breakpoints[n] : f.originalParams;
                r = f.params.loop && t.slidesPerView !== f.params.slidesPerView;
                for (i in t)
                    f.params[i] = t[i];
                f.currentBreakpoint = n;
                r && f.destroyLoop && f.reLoop(!0)
            }
        }
        ,
        f.params.breakpoints && f.setBreakpoint(),
        f.container = n(r),
        0 !== f.container.length)) {
            if (f.container.length > 1)
                return ht = [],
                f.container.each(function() {
                    ht.push(new i(this,u))
                }),
                ht;
            f.container[0].swiper = f;
            f.container.data("swiper", f);
            f.classNames.push(f.params.containerModifierClass + f.params.direction);
            f.params.freeMode && f.classNames.push(f.params.containerModifierClass + "free-mode");
            f.support.flexbox || (f.classNames.push(f.params.containerModifierClass + "no-flexbox"),
            f.params.slidesPerColumn = 1);
            f.params.autoHeight && f.classNames.push(f.params.containerModifierClass + "autoheight");
            (f.params.parallax || f.params.watchSlidesVisibility) && (f.params.watchSlidesProgress = !0);
            f.params.touchReleaseOnEdges && (f.params.resistanceRatio = 0);
            ["cube", "coverflow", "flip"].indexOf(f.params.effect) >= 0 && (f.support.transforms3d ? (f.params.watchSlidesProgress = !0,
            f.classNames.push(f.params.containerModifierClass + "3d")) : f.params.effect = "slide");
            "slide" !== f.params.effect && f.classNames.push(f.params.containerModifierClass + f.params.effect);
            "cube" === f.params.effect && (f.params.resistanceRatio = 0,
            f.params.slidesPerView = 1,
            f.params.slidesPerColumn = 1,
            f.params.slidesPerGroup = 1,
            f.params.centeredSlides = !1,
            f.params.spaceBetween = 0,
            f.params.virtualTranslate = !0,
            f.params.setWrapperSize = !1);
            "fade" !== f.params.effect && "flip" !== f.params.effect || (f.params.slidesPerView = 1,
            f.params.slidesPerColumn = 1,
            f.params.slidesPerGroup = 1,
            f.params.watchSlidesProgress = !0,
            f.params.spaceBetween = 0,
            f.params.setWrapperSize = !1,
            "undefined" == typeof bt && (f.params.virtualTranslate = !0));
            f.params.grabCursor && f.support.touch && (f.params.grabCursor = !1);
            f.wrapper = f.container.children("." + f.params.wrapperClass);
            f.params.pagination && (f.paginationContainer = n(f.params.pagination),
            f.params.uniqueNavElements && "string" == typeof f.params.pagination && f.paginationContainer.length > 1 && 1 === f.container.find(f.params.pagination).length && (f.paginationContainer = f.container.find(f.params.pagination)),
            "bullets" === f.params.paginationType && f.params.paginationClickable ? f.paginationContainer.addClass(f.params.paginationModifierClass + "clickable") : f.params.paginationClickable = !1,
            f.paginationContainer.addClass(f.params.paginationModifierClass + f.params.paginationType));
            (f.params.nextButton || f.params.prevButton) && (f.params.nextButton && (f.nextButton = n(f.params.nextButton),
            f.params.uniqueNavElements && "string" == typeof f.params.nextButton && f.nextButton.length > 1 && 1 === f.container.find(f.params.nextButton).length && (f.nextButton = f.container.find(f.params.nextButton))),
            f.params.prevButton && (f.prevButton = n(f.params.prevButton),
            f.params.uniqueNavElements && "string" == typeof f.params.prevButton && f.prevButton.length > 1 && 1 === f.container.find(f.params.prevButton).length && (f.prevButton = f.container.find(f.params.prevButton))));
            f.isHorizontal = function() {
                return "horizontal" === f.params.direction
            }
            ;
            f.rtl = f.isHorizontal() && ("rtl" === f.container[0].dir.toLowerCase() || "rtl" === f.container.css("direction"));
            f.rtl && f.classNames.push(f.params.containerModifierClass + "rtl");
            f.rtl && (f.wrongRTL = "-webkit-box" === f.wrapper.css("display"));
            f.params.slidesPerColumn > 1 && f.classNames.push(f.params.containerModifierClass + "multirow");
            f.device.android && f.classNames.push(f.params.containerModifierClass + "android");
            f.container.addClass(f.classNames.join(" "));
            f.translate = 0;
            f.progress = 0;
            f.velocity = 0;
            f.lockSwipeToNext = function() {
                f.params.allowSwipeToNext = !1;
                f.params.allowSwipeToPrev === !1 && f.params.grabCursor && f.unsetGrabCursor()
            }
            ;
            f.lockSwipeToPrev = function() {
                f.params.allowSwipeToPrev = !1;
                f.params.allowSwipeToNext === !1 && f.params.grabCursor && f.unsetGrabCursor()
            }
            ;
            f.lockSwipes = function() {
                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !1;
                f.params.grabCursor && f.unsetGrabCursor()
            }
            ;
            f.unlockSwipeToNext = function() {
                f.params.allowSwipeToNext = !0;
                f.params.allowSwipeToPrev === !0 && f.params.grabCursor && f.setGrabCursor()
            }
            ;
            f.unlockSwipeToPrev = function() {
                f.params.allowSwipeToPrev = !0;
                f.params.allowSwipeToNext === !0 && f.params.grabCursor && f.setGrabCursor()
            }
            ;
            f.unlockSwipes = function() {
                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !0;
                f.params.grabCursor && f.setGrabCursor()
            }
            ;
            f.setGrabCursor = function(n) {
                f.container[0].style.cursor = "move";
                f.container[0].style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
                f.container[0].style.cursor = n ? "-moz-grabbin" : "-moz-grab";
                f.container[0].style.cursor = n ? "grabbing" : "grab"
            }
            ;
            f.unsetGrabCursor = function() {
                f.container[0].style.cursor = ""
            }
            ;
            f.params.grabCursor && f.setGrabCursor();
            f.imagesToLoad = [];
            f.imagesLoaded = 0;
            f.loadImage = function(n, t, i, r, u, f) {
                function o() {
                    f && f()
                }
                var e;
                n.complete && u ? o() : t ? (e = new window.Image,
                e.onload = o,
                e.onerror = o,
                r && (e.sizes = r),
                i && (e.srcset = i),
                t && (e.src = t)) : o()
            }
            ;
            f.preloadImages = function() {
                function t() {
                    "undefined" != typeof f && null !== f && (void 0 !== f.imagesLoaded && f.imagesLoaded++,
                    f.imagesLoaded === f.imagesToLoad.length && (f.params.updateOnImagesReady && f.update(),
                    f.emit("onImagesReady", f)))
                }
                f.imagesToLoad = f.container.find("img");
                for (var n = 0; n < f.imagesToLoad.length; n++)
                    f.loadImage(f.imagesToLoad[n], f.imagesToLoad[n].currentSrc || f.imagesToLoad[n].getAttribute("src"), f.imagesToLoad[n].srcset || f.imagesToLoad[n].getAttribute("srcset"), f.imagesToLoad[n].sizes || f.imagesToLoad[n].getAttribute("sizes"), !0, t)
            }
            ;
            f.autoplayTimeoutId = void 0;
            f.autoplaying = !1;
            f.autoplayPaused = !1;
            f.startAutoplay = function() {
                return "undefined" == typeof f.autoplayTimeoutId && !!f.params.autoplay && !f.autoplaying && (f.autoplaying = !0,
                f.emit("onAutoplayStart", f),
                void ut())
            }
            ;
            f.stopAutoplay = function() {
                f.autoplayTimeoutId && (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId),
                f.autoplaying = !1,
                f.autoplayTimeoutId = void 0,
                f.emit("onAutoplayStop", f))
            }
            ;
            f.pauseAutoplay = function(n) {
                f.autoplayPaused || (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId),
                f.autoplayPaused = !0,
                0 === n ? (f.autoplayPaused = !1,
                ut()) : f.wrapper.transitionEnd(function() {
                    f && (f.autoplayPaused = !1,
                    f.autoplaying ? ut() : f.stopAutoplay())
                }))
            }
            ;
            f.minTranslate = function() {
                return -f.snapGrid[0]
            }
            ;
            f.maxTranslate = function() {
                return -f.snapGrid[f.snapGrid.length - 1]
            }
            ;
            f.updateAutoHeight = function() {
                var n = [], i = 0, r, u;
                if ("auto" !== f.params.slidesPerView && f.params.slidesPerView > 1)
                    for (t = 0; t < Math.ceil(f.params.slidesPerView); t++) {
                        if (r = f.activeIndex + t,
                        r > f.slides.length)
                            break;
                        n.push(f.slides.eq(r)[0])
                    }
                else
                    n.push(f.slides.eq(f.activeIndex)[0]);
                for (t = 0; t < n.length; t++)
                    "undefined" != typeof n[t] && (u = n[t].offsetHeight,
                    i = u > i ? u : i);
                i && f.wrapper.css("height", i + "px")
            }
            ;
            f.updateContainerSize = function() {
                var n, t;
                n = "undefined" != typeof f.params.width ? f.params.width : f.container[0].clientWidth;
                t = "undefined" != typeof f.params.height ? f.params.height : f.container[0].clientHeight;
                0 === n && f.isHorizontal() || 0 === t && !f.isHorizontal() || (n = n - parseInt(f.container.css("padding-left"), 10) - parseInt(f.container.css("padding-right"), 10),
                t = t - parseInt(f.container.css("padding-top"), 10) - parseInt(f.container.css("padding-bottom"), 10),
                f.width = n,
                f.height = t,
                f.size = f.isHorizontal() ? f.width : f.height)
            }
            ;
            f.updateSlidesSize = function() {
                var o, h, c, e, u, l;
                f.slides = f.wrapper.children("." + f.params.slideClass);
                f.snapGrid = [];
                f.slidesGrid = [];
                f.slidesSizesGrid = [];
                var n, i = f.params.spaceBetween, r = -f.params.slidesOffsetBefore, y = 0, v = 0;
                if ("undefined" != typeof f.size) {
                    "string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * f.size);
                    f.virtualSize = -i;
                    f.rtl ? f.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : f.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    f.params.slidesPerColumn > 1 && (o = Math.floor(f.slides.length / f.params.slidesPerColumn) === f.slides.length / f.params.slidesPerColumn ? f.slides.length : Math.ceil(f.slides.length / f.params.slidesPerColumn) * f.params.slidesPerColumn,
                    "auto" !== f.params.slidesPerView && "row" === f.params.slidesPerColumnFill && (o = Math.max(o, f.params.slidesPerView * f.params.slidesPerColumn)));
                    var t, s = f.params.slidesPerColumn, a = o / s, p = a - (f.params.slidesPerColumn * a - f.slides.length);
                    for (n = 0; n < f.slides.length; n++)
                        t = 0,
                        h = f.slides.eq(n),
                        f.params.slidesPerColumn > 1 && ("column" === f.params.slidesPerColumnFill ? (e = Math.floor(n / s),
                        u = n - e * s,
                        (e > p || e === p && u === s - 1) && ++u >= s && (u = 0,
                        e++),
                        c = e + u * o / s,
                        h.css({
                            "-webkit-box-ordinal-group": c,
                            "-moz-box-ordinal-group": c,
                            "-ms-flex-order": c,
                            "-webkit-order": c,
                            order: c
                        })) : (u = Math.floor(n / a),
                        e = n - u * a),
                        h.css("margin-" + (f.isHorizontal() ? "top" : "left"), 0 !== u && f.params.spaceBetween && f.params.spaceBetween + "px").attr("data-swiper-column", e).attr("data-swiper-row", u)),
                        "none" !== h.css("display") && ("auto" === f.params.slidesPerView ? (t = f.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0),
                        f.params.roundLengths && (t = k(t))) : (t = (f.size - (f.params.slidesPerView - 1) * i) / f.params.slidesPerView,
                        f.params.roundLengths && (t = k(t)),
                        f.isHorizontal() ? f.slides[n].style.width = t + "px" : f.slides[n].style.height = t + "px"),
                        f.slides[n].swiperSlideSize = t,
                        f.slidesSizesGrid.push(t),
                        f.params.centeredSlides ? (r = r + t / 2 + y / 2 + i,
                        0 === n && (r = r - f.size / 2 - i),
                        Math.abs(r) < .001 && (r = 0),
                        v % f.params.slidesPerGroup == 0 && f.snapGrid.push(r),
                        f.slidesGrid.push(r)) : (v % f.params.slidesPerGroup == 0 && f.snapGrid.push(r),
                        f.slidesGrid.push(r),
                        r = r + t + i),
                        f.virtualSize += t + i,
                        y = t,
                        v++);
                    if (f.virtualSize = Math.max(f.virtualSize, f.size) + f.params.slidesOffsetAfter,
                    f.rtl && f.wrongRTL && ("slide" === f.params.effect || "coverflow" === f.params.effect) && f.wrapper.css({
                        width: f.virtualSize + f.params.spaceBetween + "px"
                    }),
                    f.support.flexbox && !f.params.setWrapperSize || (f.isHorizontal() ? f.wrapper.css({
                        width: f.virtualSize + f.params.spaceBetween + "px"
                    }) : f.wrapper.css({
                        height: f.virtualSize + f.params.spaceBetween + "px"
                    })),
                    f.params.slidesPerColumn > 1 && (f.virtualSize = (t + f.params.spaceBetween) * o,
                    f.virtualSize = Math.ceil(f.virtualSize / f.params.slidesPerColumn) - f.params.spaceBetween,
                    f.isHorizontal() ? f.wrapper.css({
                        width: f.virtualSize + f.params.spaceBetween + "px"
                    }) : f.wrapper.css({
                        height: f.virtualSize + f.params.spaceBetween + "px"
                    }),
                    f.params.centeredSlides)) {
                        for (l = [],
                        n = 0; n < f.snapGrid.length; n++)
                            f.snapGrid[n] < f.virtualSize + f.snapGrid[0] && l.push(f.snapGrid[n]);
                        f.snapGrid = l
                    }
                    if (!f.params.centeredSlides) {
                        for (l = [],
                        n = 0; n < f.snapGrid.length; n++)
                            f.snapGrid[n] <= f.virtualSize - f.size && l.push(f.snapGrid[n]);
                        f.snapGrid = l;
                        Math.floor(f.virtualSize - f.size) - Math.floor(f.snapGrid[f.snapGrid.length - 1]) > 1 && f.snapGrid.push(f.virtualSize - f.size)
                    }
                    0 === f.snapGrid.length && (f.snapGrid = [0]);
                    0 !== f.params.spaceBetween && (f.isHorizontal() ? f.rtl ? f.slides.css({
                        marginLeft: i + "px"
                    }) : f.slides.css({
                        marginRight: i + "px"
                    }) : f.slides.css({
                        marginBottom: i + "px"
                    }));
                    f.params.watchSlidesProgress && f.updateSlidesOffset()
                }
            }
            ;
            f.updateSlidesOffset = function() {
                for (var n = 0; n < f.slides.length; n++)
                    f.slides[n].swiperSlideOffset = f.isHorizontal() ? f.slides[n].offsetLeft : f.slides[n].offsetTop
            }
            ;
            f.updateSlidesProgress = function(n) {
                var r, t, i, e;
                if ("undefined" == typeof n && (n = f.translate || 0),
                0 !== f.slides.length)
                    for ("undefined" == typeof f.slides[0].swiperSlideOffset && f.updateSlidesOffset(),
                    r = -n,
                    f.rtl && (r = n),
                    f.slides.removeClass(f.params.slideVisibleClass),
                    t = 0; t < f.slides.length; t++) {
                        if (i = f.slides[t],
                        e = (r + (f.params.centeredSlides ? f.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + f.params.spaceBetween),
                        f.params.watchSlidesVisibility) {
                            var u = -(r - i.swiperSlideOffset)
                              , o = u + f.slidesSizesGrid[t]
                              , s = u >= 0 && u < f.size || o > 0 && o <= f.size || u <= 0 && o >= f.size;
                            s && f.slides.eq(t).addClass(f.params.slideVisibleClass)
                        }
                        i.progress = f.rtl ? -e : e
                    }
            }
            ;
            f.updateProgress = function(n) {
                "undefined" == typeof n && (n = f.translate || 0);
                var t = f.maxTranslate() - f.minTranslate()
                  , i = f.isBeginning
                  , r = f.isEnd;
                0 === t ? (f.progress = 0,
                f.isBeginning = f.isEnd = !0) : (f.progress = (n - f.minTranslate()) / t,
                f.isBeginning = f.progress <= 0,
                f.isEnd = f.progress >= 1);
                f.isBeginning && !i && f.emit("onReachBeginning", f);
                f.isEnd && !r && f.emit("onReachEnd", f);
                f.params.watchSlidesProgress && f.updateSlidesProgress(n);
                f.emit("onProgress", f, f.progress)
            }
            ;
            f.updateActiveIndex = function() {
                for (var t, r, i = f.rtl ? f.translate : -f.translate, n = 0; n < f.slidesGrid.length; n++)
                    "undefined" != typeof f.slidesGrid[n + 1] ? i >= f.slidesGrid[n] && i < f.slidesGrid[n + 1] - (f.slidesGrid[n + 1] - f.slidesGrid[n]) / 2 ? t = n : i >= f.slidesGrid[n] && i < f.slidesGrid[n + 1] && (t = n + 1) : i >= f.slidesGrid[n] && (t = n);
                f.params.normalizeSlideIndex && (t < 0 || "undefined" == typeof t) && (t = 0);
                r = Math.floor(t / f.params.slidesPerGroup);
                r >= f.snapGrid.length && (r = f.snapGrid.length - 1);
                t !== f.activeIndex && (f.snapIndex = r,
                f.previousIndex = f.activeIndex,
                f.activeIndex = t,
                f.updateClasses(),
                f.updateRealIndex())
            }
            ;
            f.updateRealIndex = function() {
                f.realIndex = f.slides.eq(f.activeIndex).attr("data-swiper-slide-index") || f.activeIndex
            }
            ;
            f.updateClasses = function() {
                var o, i, r, t, e;
                if (f.slides.removeClass(f.params.slideActiveClass + " " + f.params.slideNextClass + " " + f.params.slidePrevClass + " " + f.params.slideDuplicateActiveClass + " " + f.params.slideDuplicateNextClass + " " + f.params.slideDuplicatePrevClass),
                o = f.slides.eq(f.activeIndex),
                o.addClass(f.params.slideActiveClass),
                u.loop && (o.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children("." + f.params.slideClass + ":not(." + f.params.slideDuplicateClass + ')[data-swiper-slide-index="' + f.realIndex + '"]').addClass(f.params.slideDuplicateActiveClass) : f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + f.realIndex + '"]').addClass(f.params.slideDuplicateActiveClass)),
                i = o.next("." + f.params.slideClass).addClass(f.params.slideNextClass),
                f.params.loop && 0 === i.length && (i = f.slides.eq(0),
                i.addClass(f.params.slideNextClass)),
                r = o.prev("." + f.params.slideClass).addClass(f.params.slidePrevClass),
                f.params.loop && 0 === r.length && (r = f.slides.eq(-1),
                r.addClass(f.params.slidePrevClass)),
                u.loop && (i.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children("." + f.params.slideClass + ":not(." + f.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicateNextClass) : f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicateNextClass),
                r.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children("." + f.params.slideClass + ":not(." + f.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicatePrevClass) : f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicatePrevClass)),
                f.paginationContainer && f.paginationContainer.length > 0) {
                    if (e = f.params.loop ? Math.ceil((f.slides.length - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length,
                    f.params.loop ? (t = Math.ceil((f.activeIndex - f.loopedSlides) / f.params.slidesPerGroup),
                    t > f.slides.length - 1 - 2 * f.loopedSlides && (t -= f.slides.length - 2 * f.loopedSlides),
                    t > e - 1 && (t -= e),
                    t < 0 && "bullets" !== f.params.paginationType && (t = e + t)) : t = "undefined" != typeof f.snapIndex ? f.snapIndex : f.activeIndex || 0,
                    "bullets" === f.params.paginationType && f.bullets && f.bullets.length > 0 && (f.bullets.removeClass(f.params.bulletActiveClass),
                    f.paginationContainer.length > 1 ? f.bullets.each(function() {
                        n(this).index() === t && n(this).addClass(f.params.bulletActiveClass)
                    }) : f.bullets.eq(t).addClass(f.params.bulletActiveClass)),
                    "fraction" === f.params.paginationType && (f.paginationContainer.find("." + f.params.paginationCurrentClass).text(t + 1),
                    f.paginationContainer.find("." + f.params.paginationTotalClass).text(e)),
                    "progress" === f.params.paginationType) {
                        var s = (t + 1) / e
                          , h = s
                          , c = 1;
                        f.isHorizontal() || (c = s,
                        h = 1);
                        f.paginationContainer.find("." + f.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + c + ")").transition(f.params.speed)
                    }
                    "custom" === f.params.paginationType && f.params.paginationCustomRender && (f.paginationContainer.html(f.params.paginationCustomRender(f, t + 1, e)),
                    f.emit("onPaginationRendered", f, f.paginationContainer[0]))
                }
                f.params.loop || (f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.isBeginning ? (f.prevButton.addClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.disable(f.prevButton)) : (f.prevButton.removeClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.enable(f.prevButton))),
                f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.isEnd ? (f.nextButton.addClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.disable(f.nextButton)) : (f.nextButton.removeClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.enable(f.nextButton))))
            }
            ;
            f.updatePagination = function() {
                var n, i, t;
                if (f.params.pagination && f.paginationContainer && f.paginationContainer.length > 0) {
                    if (n = "",
                    "bullets" === f.params.paginationType) {
                        for (i = f.params.loop ? Math.ceil((f.slides.length - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length,
                        t = 0; t < i; t++)
                            n += f.params.paginationBulletRender ? f.params.paginationBulletRender(f, t, f.params.bulletClass) : "<" + f.params.paginationElement + ' class="' + f.params.bulletClass + '"><\/' + f.params.paginationElement + ">";
                        f.paginationContainer.html(n);
                        f.bullets = f.paginationContainer.find("." + f.params.bulletClass);
                        f.params.paginationClickable && f.params.a11y && f.a11y && f.a11y.initPagination()
                    }
                    "fraction" === f.params.paginationType && (n = f.params.paginationFractionRender ? f.params.paginationFractionRender(f, f.params.paginationCurrentClass, f.params.paginationTotalClass) : '<span class="' + f.params.paginationCurrentClass + '"><\/span> / <span class="' + f.params.paginationTotalClass + '"><\/span>',
                    f.paginationContainer.html(n));
                    "progress" === f.params.paginationType && (n = f.params.paginationProgressRender ? f.params.paginationProgressRender(f, f.params.paginationProgressbarClass) : '<span class="' + f.params.paginationProgressbarClass + '"><\/span>',
                    f.paginationContainer.html(n));
                    "custom" !== f.params.paginationType && f.emit("onPaginationRendered", f, f.paginationContainer[0])
                }
            }
            ;
            f.update = function(n) {
                function t() {
                    f.rtl ? -f.translate : f.translate;
                    r = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate());
                    f.setWrapperTranslate(r);
                    f.updateActiveIndex();
                    f.updateClasses()
                }
                if (f.updateContainerSize(),
                f.updateSlidesSize(),
                f.updateProgress(),
                f.updatePagination(),
                f.updateClasses(),
                f.params.scrollbar && f.scrollbar && f.scrollbar.set(),
                n) {
                    var i, r;
                    f.controller && f.controller.spline && (f.controller.spline = void 0);
                    f.params.freeMode ? (t(),
                    f.params.autoHeight && f.updateAutoHeight()) : (i = ("auto" === f.params.slidesPerView || f.params.slidesPerView > 1) && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0),
                    i || t())
                } else
                    f.params.autoHeight && f.updateAutoHeight()
            }
            ;
            f.onResize = function(n) {
                var i, r, t, u;
                f.params.breakpoints && f.setBreakpoint();
                i = f.params.allowSwipeToPrev;
                r = f.params.allowSwipeToNext;
                f.params.allowSwipeToPrev = f.params.allowSwipeToNext = !0;
                f.updateContainerSize();
                f.updateSlidesSize();
                ("auto" === f.params.slidesPerView || f.params.freeMode || n) && f.updatePagination();
                f.params.scrollbar && f.scrollbar && f.scrollbar.set();
                f.controller && f.controller.spline && (f.controller.spline = void 0);
                t = !1;
                f.params.freeMode ? (u = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate()),
                f.setWrapperTranslate(u),
                f.updateActiveIndex(),
                f.updateClasses(),
                f.params.autoHeight && f.updateAutoHeight()) : (f.updateClasses(),
                t = ("auto" === f.params.slidesPerView || f.params.slidesPerView > 1) && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0));
                f.params.lazyLoading && !t && f.lazy && f.lazy.load();
                f.params.allowSwipeToPrev = i;
                f.params.allowSwipeToNext = r
            }
            ;
            f.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            };
            window.navigator.pointerEnabled ? f.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (f.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            });
            f.touchEvents = {
                start: f.support.touch || !f.params.simulateTouch ? "touchstart" : f.touchEventsDesktop.start,
                move: f.support.touch || !f.params.simulateTouch ? "touchmove" : f.touchEventsDesktop.move,
                end: f.support.touch || !f.params.simulateTouch ? "touchend" : f.touchEventsDesktop.end
            };
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === f.params.touchEventsTarget ? f.container : f.wrapper).addClass("swiper-wp8-" + f.params.direction);
            f.initEvents = function(n) {
                var r = n ? "off" : "on", t = n ? "removeEventListener" : "addEventListener", i = "container" === f.params.touchEventsTarget ? f.container[0] : f.wrapper[0], s = f.support.touch ? i : document, e = !!f.params.nested, o;
                f.browser.ie ? (i[t](f.touchEvents.start, f.onTouchStart, !1),
                s[t](f.touchEvents.move, f.onTouchMove, e),
                s[t](f.touchEvents.end, f.onTouchEnd, !1)) : (f.support.touch && (o = !("touchstart" !== f.touchEvents.start || !f.support.passiveListener || !f.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                i[t](f.touchEvents.start, f.onTouchStart, o),
                i[t](f.touchEvents.move, f.onTouchMove, e),
                i[t](f.touchEvents.end, f.onTouchEnd, o)),
                (u.simulateTouch && !f.device.ios && !f.device.android || u.simulateTouch && !f.support.touch && f.device.ios) && (i[t]("mousedown", f.onTouchStart, !1),
                document[t]("mousemove", f.onTouchMove, e),
                document[t]("mouseup", f.onTouchEnd, !1)));
                window[t]("resize", f.onResize);
                f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.nextButton[r]("click", f.onClickNext),
                f.params.a11y && f.a11y && f.nextButton[r]("keydown", f.a11y.onEnterKey));
                f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.prevButton[r]("click", f.onClickPrev),
                f.params.a11y && f.a11y && f.prevButton[r]("keydown", f.a11y.onEnterKey));
                f.params.pagination && f.params.paginationClickable && (f.paginationContainer[r]("click", "." + f.params.bulletClass, f.onClickIndex),
                f.params.a11y && f.a11y && f.paginationContainer[r]("keydown", "." + f.params.bulletClass, f.a11y.onEnterKey));
                (f.params.preventClicks || f.params.preventClicksPropagation) && i[t]("click", f.preventClicks, !0)
            }
            ;
            f.attachEvents = function() {
                f.initEvents()
            }
            ;
            f.detachEvents = function() {
                f.initEvents(!0)
            }
            ;
            f.allowClick = !0;
            f.preventClicks = function(n) {
                f.allowClick || (f.params.preventClicks && n.preventDefault(),
                f.params.preventClicksPropagation && f.animating && (n.stopPropagation(),
                n.stopImmediatePropagation()))
            }
            ;
            f.onClickNext = function(n) {
                n.preventDefault();
                f.isEnd && !f.params.loop || f.slideNext()
            }
            ;
            f.onClickPrev = function(n) {
                n.preventDefault();
                f.isBeginning && !f.params.loop || f.slidePrev()
            }
            ;
            f.onClickIndex = function(t) {
                t.preventDefault();
                var i = n(this).index() * f.params.slidesPerGroup;
                f.params.loop && (i += f.loopedSlides);
                f.slideTo(i)
            }
            ;
            f.updateClickedSlide = function(t) {
                var r = ft(t, "." + f.params.slideClass), o = !1, u, e, i;
                if (r)
                    for (u = 0; u < f.slides.length; u++)
                        f.slides[u] === r && (o = !0);
                if (!r || !o)
                    return f.clickedSlide = void 0,
                    void (f.clickedIndex = void 0);
                if (f.clickedSlide = r,
                f.clickedIndex = n(r).index(),
                f.params.slideToClickedSlide && void 0 !== f.clickedIndex && f.clickedIndex !== f.activeIndex)
                    if (i = f.clickedIndex,
                    f.params.loop) {
                        if (f.animating)
                            return;
                        e = n(f.clickedSlide).attr("data-swiper-slide-index");
                        f.params.centeredSlides ? i < f.loopedSlides - f.params.slidesPerView / 2 || i > f.slides.length - f.loopedSlides + f.params.slidesPerView / 2 ? (f.fixLoop(),
                        i = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + f.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            f.slideTo(i)
                        }, 0)) : f.slideTo(i) : i > f.slides.length - f.params.slidesPerView ? (f.fixLoop(),
                        i = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + f.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            f.slideTo(i)
                        }, 0)) : f.slideTo(i)
                    } else
                        f.slideTo(i)
            }
            ;
            var c, l, g, nt, v, e, s, tt, w, it, ct = "input, select, textarea, button, video", lt = Date.now(), a = [];
            f.animating = !1;
            f.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            f.onTouchStart = function(t) {
                var i, u, r;
                if (t.originalEvent && (t = t.originalEvent),
                b = "touchstart" === t.type,
                b || !("which"in t) || 3 !== t.which) {
                    if (f.params.noSwiping && ft(t, "." + f.params.noSwipingClass))
                        return void (f.allowClick = !0);
                    (!f.params.swipeHandler || ft(t, f.params.swipeHandler)) && (i = f.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    u = f.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    f.device.ios && f.params.iOSEdgeSwipeDetection && i <= f.params.iOSEdgeSwipeThreshold || ((c = !0,
                    l = !1,
                    g = !0,
                    v = void 0,
                    rt = void 0,
                    f.touches.startX = i,
                    f.touches.startY = u,
                    nt = Date.now(),
                    f.allowClick = !0,
                    f.updateContainerSize(),
                    f.swipeDirection = void 0,
                    f.params.threshold > 0 && (tt = !1),
                    "touchstart" !== t.type) && (r = !0,
                    n(t.target).is(ct) && (r = !1),
                    document.activeElement && n(document.activeElement).is(ct) && document.activeElement.blur(),
                    r && t.preventDefault()),
                    f.emit("onTouchStart", f, t)))
                }
            }
            ;
            f.onTouchMove = function(t) {
                var o, i, r;
                if (t.originalEvent && (t = t.originalEvent),
                !b || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper)
                        return f.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        void (f.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (f.params.onlyExternal)
                        return f.allowClick = !1,
                        void (c && (f.touches.startX = f.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        f.touches.startY = f.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        nt = Date.now()));
                    if (b && f.params.touchReleaseOnEdges && !f.params.loop)
                        if (f.isHorizontal()) {
                            if (f.touches.currentX < f.touches.startX && f.translate <= f.maxTranslate() || f.touches.currentX > f.touches.startX && f.translate >= f.minTranslate())
                                return
                        } else if (f.touches.currentY < f.touches.startY && f.translate <= f.maxTranslate() || f.touches.currentY > f.touches.startY && f.translate >= f.minTranslate())
                            return;
                    if (b && document.activeElement && t.target === document.activeElement && n(t.target).is(ct))
                        return l = !0,
                        void (f.allowClick = !1);
                    if ((g && f.emit("onTouchMove", f, t),
                    !(t.targetTouches && t.targetTouches.length > 1)) && ((f.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    f.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    "undefined" == typeof v) && (f.isHorizontal() && f.touches.currentY === f.touches.startY || !f.isHorizontal() && f.touches.currentX !== f.touches.startX ? v = !1 : (o = 180 * Math.atan2(Math.abs(f.touches.currentY - f.touches.startY), Math.abs(f.touches.currentX - f.touches.startX)) / Math.PI,
                    v = f.isHorizontal() ? o > f.params.touchAngle : 90 - o > f.params.touchAngle)),
                    v && f.emit("onTouchMoveOpposite", f, t),
                    "undefined" == typeof rt && f.browser.ieTouch && (f.touches.currentX === f.touches.startX && f.touches.currentY === f.touches.startY || (rt = !0)),
                    c)) {
                        if (v)
                            return void (c = !1);
                        if (rt || !f.browser.ieTouch) {
                            if (f.allowClick = !1,
                            f.emit("onSliderMove", f, t),
                            t.preventDefault(),
                            f.params.touchMoveStopPropagation && !f.params.nested && t.stopPropagation(),
                            l || (u.loop && f.fixLoop(),
                            s = f.getWrapperTranslate(),
                            f.setWrapperTransition(0),
                            f.animating && f.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                            f.params.autoplay && f.autoplaying && (f.params.autoplayDisableOnInteraction ? f.stopAutoplay() : f.pauseAutoplay()),
                            it = !1,
                            !f.params.grabCursor || f.params.allowSwipeToNext !== !0 && f.params.allowSwipeToPrev !== !0 || f.setGrabCursor(!0)),
                            l = !0,
                            i = f.touches.diff = f.isHorizontal() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY,
                            i *= f.params.touchRatio,
                            f.rtl && (i = -i),
                            f.swipeDirection = i > 0 ? "prev" : "next",
                            e = i + s,
                            r = !0,
                            i > 0 && e > f.minTranslate() ? (r = !1,
                            f.params.resistance && (e = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + s + i, f.params.resistanceRatio))) : i < 0 && e < f.maxTranslate() && (r = !1,
                            f.params.resistance && (e = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - s - i, f.params.resistanceRatio))),
                            r && (t.preventedByNestedSwiper = !0),
                            !f.params.allowSwipeToNext && "next" === f.swipeDirection && e < s && (e = s),
                            !f.params.allowSwipeToPrev && "prev" === f.swipeDirection && e > s && (e = s),
                            f.params.threshold > 0) {
                                if (!(Math.abs(i) > f.params.threshold || tt))
                                    return void (e = s);
                                if (!tt)
                                    return tt = !0,
                                    f.touches.startX = f.touches.currentX,
                                    f.touches.startY = f.touches.currentY,
                                    e = s,
                                    void (f.touches.diff = f.isHorizontal() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY)
                            }
                            f.params.followFinger && ((f.params.freeMode || f.params.watchSlidesProgress) && f.updateActiveIndex(),
                            f.params.freeMode && (0 === a.length && a.push({
                                position: f.touches[f.isHorizontal() ? "startX" : "startY"],
                                time: nt
                            }),
                            a.push({
                                position: f.touches[f.isHorizontal() ? "currentX" : "currentY"],
                                time: (new window.Date).getTime()
                            })),
                            f.updateProgress(e),
                            f.setWrapperTranslate(e))
                        }
                    }
                }
            }
            ;
            f.onTouchEnd = function(t) {
                var b, v, o, d, tt, y, p, h, r, u, rt, ft;
                if (t.originalEvent && (t = t.originalEvent),
                g && f.emit("onTouchEnd", f, t),
                g = !1,
                c) {
                    if (f.params.grabCursor && l && c && (f.params.allowSwipeToNext === !0 || f.params.allowSwipeToPrev === !0) && f.setGrabCursor(!1),
                    b = Date.now(),
                    v = b - nt,
                    f.allowClick && (f.updateClickedSlide(t),
                    f.emit("onTap", f, t),
                    v < 300 && b - lt > 300 && (w && clearTimeout(w),
                    w = setTimeout(function() {
                        f && (f.params.paginationHide && f.paginationContainer.length > 0 && !n(t.target).hasClass(f.params.bulletClass) && f.paginationContainer.toggleClass(f.params.paginationHiddenClass),
                        f.emit("onClick", f, t))
                    }, 300)),
                    v < 300 && b - lt < 300 && (w && clearTimeout(w),
                    f.emit("onDoubleTap", f, t))),
                    lt = Date.now(),
                    setTimeout(function() {
                        f && (f.allowClick = !0)
                    }, 0),
                    !c || !l || !f.swipeDirection || 0 === f.touches.diff || e === s)
                        return void (c = l = !1);
                    if (c = l = !1,
                    o = f.params.followFinger ? f.rtl ? f.translate : -f.translate : -e,
                    f.params.freeMode) {
                        if (o < -f.minTranslate())
                            return void f.slideTo(f.activeIndex);
                        if (o > -f.maxTranslate())
                            return void (f.slides.length < f.snapGrid.length ? f.slideTo(f.snapGrid.length - 1) : f.slideTo(f.slides.length - 1));
                        if (f.params.freeModeMomentum) {
                            if (a.length > 1) {
                                var ut = a.pop()
                                  , et = a.pop()
                                  , st = ut.position - et.position
                                  , ot = ut.time - et.time;
                                f.velocity = st / ot;
                                f.velocity = f.velocity / 2;
                                Math.abs(f.velocity) < f.params.freeModeMinimumVelocity && (f.velocity = 0);
                                (ot > 150 || (new window.Date).getTime() - ut.time > 300) && (f.velocity = 0)
                            } else
                                f.velocity = 0;
                            f.velocity = f.velocity * f.params.freeModeMomentumVelocityRatio;
                            a.length = 0;
                            var k = 1e3 * f.params.freeModeMomentumRatio
                              , ht = f.velocity * k
                              , i = f.translate + ht;
                            if (f.rtl && (i = -i),
                            tt = !1,
                            y = 20 * Math.abs(f.velocity) * f.params.freeModeMomentumBounceRatio,
                            i < f.maxTranslate())
                                f.params.freeModeMomentumBounce ? (i + f.maxTranslate() < -y && (i = f.maxTranslate() - y),
                                d = f.maxTranslate(),
                                tt = !0,
                                it = !0) : i = f.maxTranslate();
                            else if (i > f.minTranslate())
                                f.params.freeModeMomentumBounce ? (i - f.minTranslate() > y && (i = f.minTranslate() + y),
                                d = f.minTranslate(),
                                tt = !0,
                                it = !0) : i = f.minTranslate();
                            else if (f.params.freeModeSticky) {
                                for (h = 0,
                                h = 0; h < f.snapGrid.length; h += 1)
                                    if (f.snapGrid[h] > -i) {
                                        p = h;
                                        break
                                    }
                                i = Math.abs(f.snapGrid[p] - i) < Math.abs(f.snapGrid[p - 1] - i) || "next" === f.swipeDirection ? f.snapGrid[p] : f.snapGrid[p - 1];
                                f.rtl || (i = -i)
                            }
                            if (0 !== f.velocity)
                                k = f.rtl ? Math.abs((-i - f.translate) / f.velocity) : Math.abs((i - f.translate) / f.velocity);
                            else if (f.params.freeModeSticky)
                                return void f.slideReset();
                            f.params.freeModeMomentumBounce && tt ? (f.updateProgress(d),
                            f.setWrapperTransition(k),
                            f.setWrapperTranslate(i),
                            f.onTransitionStart(),
                            f.animating = !0,
                            f.wrapper.transitionEnd(function() {
                                f && it && (f.emit("onMomentumBounce", f),
                                f.setWrapperTransition(f.params.speed),
                                f.setWrapperTranslate(d),
                                f.wrapper.transitionEnd(function() {
                                    f && f.onTransitionEnd()
                                }))
                            })) : f.velocity ? (f.updateProgress(i),
                            f.setWrapperTransition(k),
                            f.setWrapperTranslate(i),
                            f.onTransitionStart(),
                            f.animating || (f.animating = !0,
                            f.wrapper.transitionEnd(function() {
                                f && f.onTransitionEnd()
                            }))) : f.updateProgress(i);
                            f.updateActiveIndex()
                        }
                        return void ((!f.params.freeModeMomentum || v >= f.params.longSwipesMs) && (f.updateProgress(),
                        f.updateActiveIndex()))
                    }
                    for (u = 0,
                    rt = f.slidesSizesGrid[0],
                    r = 0; r < f.slidesGrid.length; r += f.params.slidesPerGroup)
                        "undefined" != typeof f.slidesGrid[r + f.params.slidesPerGroup] ? o >= f.slidesGrid[r] && o < f.slidesGrid[r + f.params.slidesPerGroup] && (u = r,
                        rt = f.slidesGrid[r + f.params.slidesPerGroup] - f.slidesGrid[r]) : o >= f.slidesGrid[r] && (u = r,
                        rt = f.slidesGrid[f.slidesGrid.length - 1] - f.slidesGrid[f.slidesGrid.length - 2]);
                    if (ft = (o - f.slidesGrid[u]) / rt,
                    v > f.params.longSwipesMs) {
                        if (!f.params.longSwipes)
                            return void f.slideTo(f.activeIndex);
                        "next" === f.swipeDirection && (ft >= f.params.longSwipesRatio ? f.slideTo(u + f.params.slidesPerGroup) : f.slideTo(u));
                        "prev" === f.swipeDirection && (ft > 1 - f.params.longSwipesRatio ? f.slideTo(u + f.params.slidesPerGroup) : f.slideTo(u))
                    } else {
                        if (!f.params.shortSwipes)
                            return void f.slideTo(f.activeIndex);
                        "next" === f.swipeDirection && f.slideTo(u + f.params.slidesPerGroup);
                        "prev" === f.swipeDirection && f.slideTo(u)
                    }
                }
            }
            ;
            f._slideTo = function(n, t) {
                return f.slideTo(n, t, !0, !0)
            }
            ;
            f.slideTo = function(n, t, i, r) {
                var u, e;
                if ("undefined" == typeof i && (i = !0),
                "undefined" == typeof n && (n = 0),
                n < 0 && (n = 0),
                f.snapIndex = Math.floor(n / f.params.slidesPerGroup),
                f.snapIndex >= f.snapGrid.length && (f.snapIndex = f.snapGrid.length - 1),
                u = -f.snapGrid[f.snapIndex],
                f.params.autoplay && f.autoplaying && (r || !f.params.autoplayDisableOnInteraction ? f.pauseAutoplay(t) : f.stopAutoplay()),
                f.updateProgress(u),
                f.params.normalizeSlideIndex)
                    for (e = 0; e < f.slidesGrid.length; e++)
                        -Math.floor(100 * u) >= Math.floor(100 * f.slidesGrid[e]) && (n = e);
                return !(!f.params.allowSwipeToNext && u < f.translate && u < f.minTranslate()) && !(!f.params.allowSwipeToPrev && u > f.translate && u > f.maxTranslate() && (f.activeIndex || 0) !== n) && ("undefined" == typeof t && (t = f.params.speed),
                f.previousIndex = f.activeIndex || 0,
                f.activeIndex = n,
                f.updateRealIndex(),
                f.rtl && -u === f.translate || !f.rtl && u === f.translate ? (f.params.autoHeight && f.updateAutoHeight(),
                f.updateClasses(),
                "slide" !== f.params.effect && f.setWrapperTranslate(u),
                !1) : (f.updateClasses(),
                f.onTransitionStart(i),
                0 === t || f.browser.lteIE9 ? (f.setWrapperTranslate(u),
                f.setWrapperTransition(0),
                f.onTransitionEnd(i)) : (f.setWrapperTranslate(u),
                f.setWrapperTransition(t),
                f.animating || (f.animating = !0,
                f.wrapper.transitionEnd(function() {
                    f && f.onTransitionEnd(i)
                }))),
                !0))
            }
            ;
            f.onTransitionStart = function(n) {
                "undefined" == typeof n && (n = !0);
                f.params.autoHeight && f.updateAutoHeight();
                f.lazy && f.lazy.onTransitionStart();
                n && (f.emit("onTransitionStart", f),
                f.activeIndex !== f.previousIndex && (f.emit("onSlideChangeStart", f),
                f.activeIndex > f.previousIndex ? f.emit("onSlideNextStart", f) : f.emit("onSlidePrevStart", f)))
            }
            ;
            f.onTransitionEnd = function(n) {
                f.animating = !1;
                f.setWrapperTransition(0);
                "undefined" == typeof n && (n = !0);
                f.lazy && f.lazy.onTransitionEnd();
                n && (f.emit("onTransitionEnd", f),
                f.activeIndex !== f.previousIndex && (f.emit("onSlideChangeEnd", f),
                f.activeIndex > f.previousIndex ? f.emit("onSlideNextEnd", f) : f.emit("onSlidePrevEnd", f)));
                f.params.history && f.history && f.history.setHistory(f.params.history, f.activeIndex);
                f.params.hashnav && f.hashnav && f.hashnav.setHash()
            }
            ;
            f.slideNext = function(n, t, i) {
                return f.params.loop ? f.animating ? !1 : (f.fixLoop(),
                f.container[0].clientLeft,
                f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, n, i)) : f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, n, i)
            }
            ;
            f._slideNext = function(n) {
                return f.slideNext(!0, n, !0)
            }
            ;
            f.slidePrev = function(n, t, i) {
                return f.params.loop ? f.animating ? !1 : (f.fixLoop(),
                f.container[0].clientLeft,
                f.slideTo(f.activeIndex - 1, t, n, i)) : f.slideTo(f.activeIndex - 1, t, n, i)
            }
            ;
            f._slidePrev = function(n) {
                return f.slidePrev(!0, n, !0)
            }
            ;
            f.slideReset = function(n, t) {
                return f.slideTo(f.activeIndex, t, n)
            }
            ;
            f.disableTouchControl = function() {
                return f.params.onlyExternal = !0,
                !0
            }
            ;
            f.enableTouchControl = function() {
                return f.params.onlyExternal = !1,
                !0
            }
            ;
            f.setWrapperTransition = function(n, t) {
                f.wrapper.transition(n);
                "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTransition(n);
                f.params.parallax && f.parallax && f.parallax.setTransition(n);
                f.params.scrollbar && f.scrollbar && f.scrollbar.setTransition(n);
                f.params.control && f.controller && f.controller.setTransition(n, t);
                f.emit("onSetTransition", f, n)
            }
            ;
            f.setWrapperTranslate = function(n, t, i) {
                var r = 0, u = 0, o, e;
                f.isHorizontal() ? r = f.rtl ? -n : n : u = n;
                f.params.roundLengths && (r = k(r),
                u = k(u));
                f.params.virtualTranslate || (f.support.transforms3d ? f.wrapper.transform("translate3d(" + r + "px, " + u + "px, 0px)") : f.wrapper.transform("translate(" + r + "px, " + u + "px)"));
                f.translate = f.isHorizontal() ? r : u;
                e = f.maxTranslate() - f.minTranslate();
                o = 0 === e ? 0 : (n - f.minTranslate()) / e;
                o !== f.progress && f.updateProgress(n);
                t && f.updateActiveIndex();
                "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTranslate(f.translate);
                f.params.parallax && f.parallax && f.parallax.setTranslate(f.translate);
                f.params.scrollbar && f.scrollbar && f.scrollbar.setTranslate(f.translate);
                f.params.control && f.controller && f.controller.setTranslate(f.translate, i);
                f.emit("onSetTranslate", f, f.translate)
            }
            ;
            f.getTranslate = function(n, t) {
                var u, i, r, e;
                return "undefined" == typeof t && (t = "x"),
                f.params.virtualTranslate ? f.rtl ? -f.translate : f.translate : (r = window.getComputedStyle(n, null),
                window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map(function(n) {
                    return n.replace(",", ".")
                }).join(", ")),
                e = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                u = e.toString().split(",")),
                "x" === t && (i = window.WebKitCSSMatrix ? e.m41 : 16 === u.length ? parseFloat(u[12]) : parseFloat(u[4])),
                "y" === t && (i = window.WebKitCSSMatrix ? e.m42 : 16 === u.length ? parseFloat(u[13]) : parseFloat(u[5])),
                f.rtl && i && (i = -i),
                i || 0)
            }
            ;
            f.getWrapperTranslate = function(n) {
                return "undefined" == typeof n && (n = f.isHorizontal() ? "x" : "y"),
                f.getTranslate(f.wrapper[0], n)
            }
            ;
            f.observers = [];
            f.initObservers = function() {
                if (f.params.observeParents)
                    for (var t = f.container.parents(), n = 0; n < t.length; n++)
                        et(t[n]);
                et(f.container[0], {
                    childList: !1
                });
                et(f.wrapper[0], {
                    attributes: !1
                })
            }
            ;
            f.disconnectObservers = function() {
                for (var n = 0; n < f.observers.length; n++)
                    f.observers[n].disconnect();
                f.observers = []
            }
            ;
            f.createLoop = function() {
                var i, t, r, u;
                for (f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove(),
                i = f.wrapper.children("." + f.params.slideClass),
                "auto" !== f.params.slidesPerView || f.params.loopedSlides || (f.params.loopedSlides = i.length),
                f.loopedSlides = parseInt(f.params.loopedSlides || f.params.slidesPerView, 10),
                f.loopedSlides = f.loopedSlides + f.params.loopAdditionalSlides,
                f.loopedSlides > i.length && (f.loopedSlides = i.length),
                r = [],
                u = [],
                i.each(function(t, e) {
                    var o = n(this);
                    t < f.loopedSlides && u.push(e);
                    t < i.length && t >= i.length - f.loopedSlides && r.push(e);
                    o.attr("data-swiper-slide-index", t)
                }),
                t = 0; t < u.length; t++)
                    f.wrapper.append(n(u[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass));
                for (t = r.length - 1; t >= 0; t--)
                    f.wrapper.prepend(n(r[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass))
            }
            ;
            f.destroyLoop = function() {
                f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove();
                f.slides.removeAttr("data-swiper-slide-index")
            }
            ;
            f.reLoop = function(n) {
                var t = f.activeIndex - f.loopedSlides;
                f.destroyLoop();
                f.createLoop();
                f.updateSlidesSize();
                n && f.slideTo(t + f.loopedSlides, 0, !1)
            }
            ;
            f.fixLoop = function() {
                var n;
                f.activeIndex < f.loopedSlides ? (n = f.slides.length - 3 * f.loopedSlides + f.activeIndex,
                n += f.loopedSlides,
                f.slideTo(n, 0, !1, !0)) : ("auto" === f.params.slidesPerView && f.activeIndex >= 2 * f.loopedSlides || f.activeIndex > f.slides.length - 2 * f.params.slidesPerView) && (n = -f.slides.length + f.activeIndex + f.loopedSlides,
                n += f.loopedSlides,
                f.slideTo(n, 0, !1, !0))
            }
            ;
            f.appendSlide = function(n) {
                if (f.params.loop && f.destroyLoop(),
                "object" == typeof n && n.length)
                    for (var t = 0; t < n.length; t++)
                        n[t] && f.wrapper.append(n[t]);
                else
                    f.wrapper.append(n);
                f.params.loop && f.createLoop();
                f.params.observer && f.support.observer || f.update(!0)
            }
            ;
            f.prependSlide = function(n) {
                var i, t;
                if (f.params.loop && f.destroyLoop(),
                i = f.activeIndex + 1,
                "object" == typeof n && n.length) {
                    for (t = 0; t < n.length; t++)
                        n[t] && f.wrapper.prepend(n[t]);
                    i = f.activeIndex + n.length
                } else
                    f.wrapper.prepend(n);
                f.params.loop && f.createLoop();
                f.params.observer && f.support.observer || f.update(!0);
                f.slideTo(i, 0, !1)
            }
            ;
            f.removeSlide = function(n) {
                var i, t, r;
                if (f.params.loop && (f.destroyLoop(),
                f.slides = f.wrapper.children("." + f.params.slideClass)),
                t = f.activeIndex,
                "object" == typeof n && n.length) {
                    for (r = 0; r < n.length; r++)
                        i = n[r],
                        f.slides[i] && f.slides.eq(i).remove(),
                        i < t && t--;
                    t = Math.max(t, 0)
                } else
                    i = n,
                    f.slides[i] && f.slides.eq(i).remove(),
                    i < t && t--,
                    t = Math.max(t, 0);
                f.params.loop && f.createLoop();
                f.params.observer && f.support.observer || f.update(!0);
                f.params.loop ? f.slideTo(t + f.loopedSlides, 0, !1) : f.slideTo(t, 0, !1)
            }
            ;
            f.removeAllSlides = function() {
                for (var t = [], n = 0; n < f.slides.length; n++)
                    t.push(n);
                f.removeSlide(t)
            }
            ;
            f.effects = {
                fade: {
                    setTranslate: function() {
                        for (var r, u, n = 0; n < f.slides.length; n++) {
                            var t = f.slides.eq(n)
                              , e = t[0].swiperSlideOffset
                              , i = -e;
                            f.params.virtualTranslate || (i -= f.translate);
                            r = 0;
                            f.isHorizontal() || (r = i,
                            i = 0);
                            u = f.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: u
                            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(n) {
                        if (f.slides.transition(n),
                        f.params.virtualTranslate && 0 !== n) {
                            var t = !1;
                            f.slides.transitionEnd(function() {
                                if (!t && f) {
                                    t = !0;
                                    f.animating = !1;
                                    for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < i.length; n++)
                                        f.wrapper.trigger(i[n])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t, i, r, u, o = 0; o < f.slides.length; o++) {
                            t = f.slides.eq(o);
                            i = t[0].progress;
                            f.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                            var l = t[0].swiperSlideOffset
                              , a = -180 * i
                              , e = a
                              , h = 0
                              , s = -l
                              , c = 0;
                            (f.isHorizontal() ? f.rtl && (e = -e) : (c = s,
                            s = 0,
                            h = -e,
                            e = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(i)) + f.slides.length,
                            f.params.flip.slideShadows) && (r = f.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            u = f.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            t.append(r)),
                            0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            t.append(u)),
                            r.length && (r[0].style.opacity = Math.max(-i, 0)),
                            u.length && (u[0].style.opacity = Math.max(i, 0)));
                            t.transform("translate3d(" + s + "px, " + c + "px, 0px) rotateX(" + h + "deg) rotateY(" + e + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (f.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        f.params.virtualTranslate && 0 !== t) {
                            var i = !1;
                            f.slides.eq(f.activeIndex).transitionEnd(function() {
                                if (!i && f && n(this).hasClass(f.params.slideActiveClass)) {
                                    i = !0;
                                    f.animating = !1;
                                    for (var r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < r.length; t++)
                                        f.wrapper.trigger(r[t])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, e = 0, i, y, h, c, b;
                        for (f.params.cube.shadow && (f.isHorizontal() ? (t = f.wrapper.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        f.wrapper.append(t)),
                        t.css({
                            height: f.width + "px"
                        })) : (t = f.container.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        f.container.append(t)))),
                        i = 0; i < f.slides.length; i++) {
                            var u = f.slides.eq(i)
                              , o = 90 * i
                              , l = Math.floor(o / 360);
                            f.rtl && (o = -o,
                            l = Math.floor(-o / 360));
                            var s = Math.max(Math.min(u[0].progress, 1), -1)
                              , r = 0
                              , v = 0
                              , a = 0;
                            i % 4 == 0 ? (r = 4 * -l * f.size,
                            a = 0) : (i - 1) % 4 == 0 ? (r = 0,
                            a = 4 * -l * f.size) : (i - 2) % 4 == 0 ? (r = f.size + 4 * l * f.size,
                            a = f.size) : (i - 3) % 4 == 0 && (r = -f.size,
                            a = 3 * f.size + 4 * f.size * l);
                            f.rtl && (r = -r);
                            f.isHorizontal() || (v = r,
                            r = 0);
                            y = "rotateX(" + (f.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (f.isHorizontal() ? o : 0) + "deg) translate3d(" + r + "px, " + v + "px, " + a + "px)";
                            (s <= 1 && s > -1 && (e = 90 * i + 90 * s,
                            f.rtl && (e = 90 * -i - 90 * s)),
                            u.transform(y),
                            f.params.cube.slideShadows) && (h = f.isHorizontal() ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                            c = f.isHorizontal() ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom"),
                            0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            u.append(h)),
                            0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            u.append(c)),
                            h.length && (h[0].style.opacity = Math.max(-s, 0)),
                            c.length && (c[0].style.opacity = Math.max(s, 0)))
                        }
                        if (f.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + f.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + f.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + f.size / 2 + "px",
                            "transform-origin": "50% 50% -" + f.size / 2 + "px"
                        }),
                        f.params.cube.shadow)
                            if (f.isHorizontal())
                                t.transform("translate3d(0px, " + (f.width / 2 + f.params.cube.shadowOffset) + "px, " + -f.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.params.cube.shadowScale + ")");
                            else {
                                var p = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90)
                                  , k = 1.5 - (Math.sin(2 * p * Math.PI / 360) / 2 + Math.cos(2 * p * Math.PI / 360) / 2)
                                  , d = f.params.cube.shadowScale
                                  , w = f.params.cube.shadowScale / k
                                  , g = f.params.cube.shadowOffset;
                                t.transform("scale3d(" + d + ", 1, " + w + ") translate3d(0px, " + (f.height / 2 + g) + "px, " + -f.height / 2 / w + "px) rotateX(-90deg)")
                            }
                        b = f.isSafari || f.isUiWebView ? -f.size / 2 : 0;
                        f.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (f.isHorizontal() ? 0 : e) + "deg) rotateY(" + (f.isHorizontal() ? -e : 0) + "deg)")
                    },
                    setTransition: function(n) {
                        f.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
                        f.params.cube.shadow && !f.isHorizontal() && f.container.find(".swiper-cube-shadow").transition(n)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var w, r, u, b, a = f.translate, v = f.isHorizontal() ? -a + f.width / 2 : -a + f.height / 2, y = f.isHorizontal() ? f.params.coverflow.rotate : -f.params.coverflow.rotate, k = f.params.coverflow.depth, e = 0, d = f.slides.length; e < d; e++) {
                            var i = f.slides.eq(e)
                              , p = f.slidesSizesGrid[e]
                              , g = i[0].swiperSlideOffset
                              , t = (v - g - p / 2) / p * f.params.coverflow.modifier
                              , o = f.isHorizontal() ? y * t : 0
                              , s = f.isHorizontal() ? 0 : y * t
                              , h = -k * Math.abs(t)
                              , c = f.isHorizontal() ? 0 : f.params.coverflow.stretch * t
                              , l = f.isHorizontal() ? f.params.coverflow.stretch * t : 0;
                            Math.abs(l) < .001 && (l = 0);
                            Math.abs(c) < .001 && (c = 0);
                            Math.abs(h) < .001 && (h = 0);
                            Math.abs(o) < .001 && (o = 0);
                            Math.abs(s) < .001 && (s = 0);
                            w = "translate3d(" + l + "px," + c + "px," + h + "px)  rotateX(" + s + "deg) rotateY(" + o + "deg)";
                            (i.transform(w),
                            i[0].style.zIndex = -Math.abs(Math.round(t)) + 1,
                            f.params.coverflow.slideShadows) && (r = f.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                            u = f.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            i.append(r)),
                            0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            i.append(u)),
                            r.length && (r[0].style.opacity = t > 0 ? t : 0),
                            u.length && (u[0].style.opacity = -t > 0 ? -t : 0))
                        }
                        f.browser.ie && (b = f.wrapper[0].style,
                        b.perspectiveOrigin = v + "px 50%")
                    },
                    setTransition: function(n) {
                        f.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
                    }
                }
            };
            f.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, i) {
                    if ("undefined" != typeof t && ("undefined" == typeof i && (i = !0),
                    0 !== f.slides.length)) {
                        var r = f.slides.eq(t)
                          , u = r.find("." + f.params.lazyLoadingClass + ":not(." + f.params.lazyStatusLoadedClass + "):not(." + f.params.lazyStatusLoadingClass + ")");
                        !r.hasClass(f.params.lazyLoadingClass) || r.hasClass(f.params.lazyStatusLoadedClass) || r.hasClass(f.params.lazyStatusLoadingClass) || (u = u.add(r[0]));
                        0 !== u.length && u.each(function() {
                            var t = n(this);
                            t.addClass(f.params.lazyStatusLoadingClass);
                            var u = t.attr("data-background")
                              , e = t.attr("data-src")
                              , o = t.attr("data-srcset")
                              , s = t.attr("data-sizes");
                            f.loadImage(t[0], e || u, o, s, !1, function() {
                                var n, h, c;
                                (u ? (t.css("background-image", 'url("' + u + '")'),
                                t.removeAttr("data-background")) : (o && (t.attr("srcset", o),
                                t.removeAttr("data-srcset")),
                                s && (t.attr("sizes", s),
                                t.removeAttr("data-sizes")),
                                e && (t.attr("src", e),
                                t.removeAttr("data-src"))),
                                t.addClass(f.params.lazyStatusLoadedClass).removeClass(f.params.lazyStatusLoadingClass),
                                r.find("." + f.params.lazyPreloaderClass + ", ." + f.params.preloaderClass).remove(),
                                f.params.loop && i) && (n = r.attr("data-swiper-slide-index"),
                                r.hasClass(f.params.slideDuplicateClass) ? (h = f.wrapper.children('[data-swiper-slide-index="' + n + '"]:not(.' + f.params.slideDuplicateClass + ")"),
                                f.lazy.loadImageInSlide(h.index(), !1)) : (c = f.wrapper.children("." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'),
                                f.lazy.loadImageInSlide(c.index(), !1)));
                                f.emit("onLazyImageReady", f, r[0], t[0])
                            });
                            f.emit("onLazyImageLoad", f, r[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t, i = f.params.slidesPerView, u, e;
                    if ("auto" === i && (i = 0),
                    f.lazy.initialImageLoaded || (f.lazy.initialImageLoaded = !0),
                    f.params.watchSlidesVisibility)
                        f.wrapper.children("." + f.params.slideVisibleClass).each(function() {
                            f.lazy.loadImageInSlide(n(this).index())
                        });
                    else if (i > 1)
                        for (t = f.activeIndex; t < f.activeIndex + i; t++)
                            f.slides[t] && f.lazy.loadImageInSlide(t);
                    else
                        f.lazy.loadImageInSlide(f.activeIndex);
                    if (f.params.lazyLoadingInPrevNext)
                        if (i > 1 || f.params.lazyLoadingInPrevNextAmount && f.params.lazyLoadingInPrevNextAmount > 1) {
                            var o = f.params.lazyLoadingInPrevNextAmount
                              , r = i
                              , s = Math.min(f.activeIndex + r + Math.max(o, r), f.slides.length)
                              , h = Math.max(f.activeIndex - Math.max(r, o), 0);
                            for (t = f.activeIndex + i; t < s; t++)
                                f.slides[t] && f.lazy.loadImageInSlide(t);
                            for (t = h; t < f.activeIndex; t++)
                                f.slides[t] && f.lazy.loadImageInSlide(t)
                        } else
                            u = f.wrapper.children("." + f.params.slideNextClass),
                            u.length > 0 && f.lazy.loadImageInSlide(u.index()),
                            e = f.wrapper.children("." + f.params.slidePrevClass),
                            e.length > 0 && f.lazy.loadImageInSlide(e.index())
                },
                onTransitionStart: function() {
                    f.params.lazyLoading && (f.params.lazyLoadingOnTransitionStart || !f.params.lazyLoadingOnTransitionStart && !f.lazy.initialImageLoaded) && f.lazy.load()
                },
                onTransitionEnd: function() {
                    f.params.lazyLoading && !f.params.lazyLoadingOnTransitionStart && f.lazy.load()
                }
            };
            f.scrollbar = {
                isTouched: !1,
                setDragPosition: function(n) {
                    var i = f.scrollbar
                      , e = f.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY
                      , t = e - i.track.offset()[f.isHorizontal() ? "left" : "top"] - i.dragSize / 2
                      , r = -f.minTranslate() * i.moveDivider
                      , u = -f.maxTranslate() * i.moveDivider;
                    t < r ? t = r : t > u && (t = u);
                    t = -t / i.moveDivider;
                    f.updateProgress(t);
                    f.setWrapperTranslate(t, !0)
                },
                dragStart: function(n) {
                    var t = f.scrollbar;
                    t.isTouched = !0;
                    n.preventDefault();
                    n.stopPropagation();
                    t.setDragPosition(n);
                    clearTimeout(t.dragTimeout);
                    t.track.transition(0);
                    f.params.scrollbarHide && t.track.css("opacity", 1);
                    f.wrapper.transition(100);
                    t.drag.transition(100);
                    f.emit("onScrollbarDragStart", f)
                },
                dragMove: function(n) {
                    var t = f.scrollbar;
                    t.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                    t.setDragPosition(n),
                    f.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    f.emit("onScrollbarDragMove", f))
                },
                dragEnd: function() {
                    var n = f.scrollbar;
                    n.isTouched && (n.isTouched = !1,
                    f.params.scrollbarHide && (clearTimeout(n.dragTimeout),
                    n.dragTimeout = setTimeout(function() {
                        n.track.css("opacity", 0);
                        n.track.transition(400)
                    }, 1e3)),
                    f.emit("onScrollbarDragEnd", f),
                    f.params.scrollbarSnapOnRelease && f.slideReset())
                },
                draggableEvents: function() {
                    return f.params.simulateTouch !== !1 || f.support.touch ? f.touchEvents : f.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var t = f.scrollbar
                      , i = f.support.touch ? t.track : document;
                    n(t.track).on(t.draggableEvents.start, t.dragStart);
                    n(i).on(t.draggableEvents.move, t.dragMove);
                    n(i).on(t.draggableEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = f.scrollbar
                      , i = f.support.touch ? t.track : document;
                    n(t.track).off(f.draggableEvents.start, t.dragStart);
                    n(i).off(f.draggableEvents.move, t.dragMove);
                    n(i).off(f.draggableEvents.end, t.dragEnd)
                },
                set: function() {
                    if (f.params.scrollbar) {
                        var t = f.scrollbar;
                        t.track = n(f.params.scrollbar);
                        f.params.uniqueNavElements && "string" == typeof f.params.scrollbar && t.track.length > 1 && 1 === f.container.find(f.params.scrollbar).length && (t.track = f.container.find(f.params.scrollbar));
                        t.drag = t.track.find(".swiper-scrollbar-drag");
                        0 === t.drag.length && (t.drag = n('<div class="swiper-scrollbar-drag"><\/div>'),
                        t.track.append(t.drag));
                        t.drag[0].style.width = "";
                        t.drag[0].style.height = "";
                        t.trackSize = f.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight;
                        t.divider = f.size / f.virtualSize;
                        t.moveDivider = t.divider * (t.trackSize / f.size);
                        t.dragSize = t.trackSize * t.divider;
                        f.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px";
                        t.track[0].style.display = t.divider >= 1 ? "none" : "";
                        f.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (f.params.scrollbar) {
                        var t, n = f.scrollbar, i = (f.translate || 0,
                        n.dragSize);
                        t = (n.trackSize - n.dragSize) * f.progress;
                        f.rtl && f.isHorizontal() ? (t = -t,
                        t > 0 ? (i = n.dragSize - t,
                        t = 0) : -t + n.dragSize > n.trackSize && (i = n.trackSize + t)) : t < 0 ? (i = n.dragSize + t,
                        t = 0) : t + n.dragSize > n.trackSize && (i = n.trackSize - t);
                        f.isHorizontal() ? (f.support.transforms3d ? n.drag.transform("translate3d(" + t + "px, 0, 0)") : n.drag.transform("translateX(" + t + "px)"),
                        n.drag[0].style.width = i + "px") : (f.support.transforms3d ? n.drag.transform("translate3d(0px, " + t + "px, 0)") : n.drag.transform("translateY(" + t + "px)"),
                        n.drag[0].style.height = i + "px");
                        f.params.scrollbarHide && (clearTimeout(n.timeout),
                        n.track[0].style.opacity = 1,
                        n.timeout = setTimeout(function() {
                            n.track[0].style.opacity = 0;
                            n.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(n) {
                    f.params.scrollbar && f.scrollbar.drag.transition(n)
                }
            };
            f.controller = {
                LinearSpline: function(n, t) {
                    var i, r, u;
                    this.x = n;
                    this.y = t;
                    this.lastIndex = n.length - 1;
                    this.x.length;
                    this.interpolate = function(n) {
                        return n ? (r = u(this.x, n),
                        i = r - 1,
                        (n - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }
                    ;
                    u = function() {
                        var n, t, i;
                        return function(r, u) {
                            for (t = -1,
                            n = r.length; n - t > 1; )
                                r[i = n + t >> 1] <= u ? t = i : n = i;
                            return n
                        }
                    }()
                },
                getInterpolateFunction: function(n) {
                    f.controller.spline || (f.controller.spline = f.params.loop ? new f.controller.LinearSpline(f.slidesGrid,n.slidesGrid) : new f.controller.LinearSpline(f.snapGrid,n.snapGrid))
                },
                setTranslate: function(n, t) {
                    function o(t) {
                        n = t.rtl && "horizontal" === t.params.direction ? -f.translate : f.translate;
                        "slide" === f.params.controlBy && (f.controller.getInterpolateFunction(t),
                        u = -f.controller.spline.interpolate(-n));
                        u && "container" !== f.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (f.maxTranslate() - f.minTranslate()),
                        u = (n - f.minTranslate()) * s + t.minTranslate());
                        f.params.controlInverse && (u = t.maxTranslate() - u);
                        t.updateProgress(u);
                        t.setWrapperTranslate(u, !1, f);
                        t.updateActiveIndex()
                    }
                    var s, u, r = f.params.control, e;
                    if (f.isArray(r))
                        for (e = 0; e < r.length; e++)
                            r[e] !== t && r[e]instanceof i && o(r[e]);
                    else
                        r instanceof i && t !== r && o(r)
                },
                setTransition: function(n, t) {
                    function e(t) {
                        t.setWrapperTransition(n, f);
                        0 !== n && (t.onTransitionStart(),
                        t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === f.params.controlBy && t.fixLoop(),
                            t.onTransitionEnd())
                        }))
                    }
                    var u, r = f.params.control;
                    if (f.isArray(r))
                        for (u = 0; u < r.length; u++)
                            r[u] !== t && r[u]instanceof i && e(r[u]);
                    else
                        r instanceof i && t !== r && e(r)
                }
            };
            f.hashnav = {
                onHashCange: function() {
                    var n = document.location.hash.replace("#", "")
                      , t = f.slides.eq(f.activeIndex).attr("data-hash");
                    n !== t && f.slideTo(f.wrapper.children("." + f.params.slideClass + '[data-hash="' + n + '"]').index())
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on";
                    n(window)[i]("hashchange", f.hashnav.onHashCange)
                },
                setHash: function() {
                    if (f.hashnav.initialized && f.params.hashnav)
                        if (f.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + f.slides.eq(f.activeIndex).attr("data-hash") || "");
                        else {
                            var n = f.slides.eq(f.activeIndex)
                              , t = n.attr("data-hash") || n.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    var t, n, r, u;
                    if (f.params.hashnav && !f.params.history && (f.hashnav.initialized = !0,
                    t = document.location.hash.replace("#", ""),
                    t)) {
                        for (var i = 0, e = f.slides.length; i < e; i++)
                            n = f.slides.eq(i),
                            r = n.attr("data-hash") || n.attr("data-history"),
                            r !== t || n.hasClass(f.params.slideDuplicateClass) || (u = n.index(),
                            f.slideTo(u, 0, f.params.runCallbacksOnInit, !0));
                        f.params.hashnavWatchState && f.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    f.params.hashnavWatchState && f.hashnav.attachEvents(!0)
                }
            };
            f.history = {
                init: function() {
                    if (f.params.history) {
                        if (!window.history || !window.history.pushState)
                            return f.params.history = !1,
                            void (f.params.hashnav = !0);
                        f.history.initialized = !0;
                        this.paths = this.getPathValues();
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, f.params.runCallbacksOnInit),
                        f.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    f.history.paths = f.history.getPathValues();
                    f.history.scrollToSlide(f.params.speed, f.history.paths.value, !1)
                },
                getPathValues: function() {
                    var n = window.location.pathname.slice(1).split("/")
                      , t = n.length
                      , i = n[t - 2]
                      , r = n[t - 1];
                    return {
                        key: i,
                        value: r
                    }
                },
                setHistory: function(n, t) {
                    if (f.history.initialized && f.params.history) {
                        var r = f.slides.eq(t)
                          , i = this.slugify(r.attr("data-history"));
                        window.location.pathname.includes(n) || (i = n + "/" + i);
                        f.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                    }
                },
                slugify: function(n) {
                    return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(n, t, i) {
                    var r, e, u, o, s;
                    if (t)
                        for (r = 0,
                        e = f.slides.length; r < e; r++)
                            u = f.slides.eq(r),
                            o = this.slugify(u.attr("data-history")),
                            o !== t || u.hasClass(f.params.slideDuplicateClass) || (s = u.index(),
                            f.slideTo(s, n, i));
                    else
                        f.slideTo(0, n, i)
                }
            };
            f.disableKeyboardControl = function() {
                f.params.keyboardControl = !1;
                n(document).off("keydown", yt)
            }
            ;
            f.enableKeyboardControl = function() {
                f.params.keyboardControl = !0;
                n(document).on("keydown", yt)
            }
            ;
            f.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            };
            f.params.mousewheelControl && (f.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : kt() ? "wheel" : "mousewheel");
            f.disableMousewheelControl = function() {
                if (!f.mousewheel.event)
                    return !1;
                var t = f.container;
                return "container" !== f.params.mousewheelEventsTarged && (t = n(f.params.mousewheelEventsTarged)),
                t.off(f.mousewheel.event, pt),
                !0
            }
            ;
            f.enableMousewheelControl = function() {
                if (!f.mousewheel.event)
                    return !1;
                var t = f.container;
                return "container" !== f.params.mousewheelEventsTarged && (t = n(f.params.mousewheelEventsTarged)),
                t.on(f.mousewheel.event, pt),
                !0
            }
            ;
            f.parallax = {
                setTranslate: function() {
                    f.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        wt(this, f.progress)
                    });
                    f.slides.each(function() {
                        var t = n(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var n = Math.min(Math.max(t[0].progress, -1), 1);
                            wt(this, n)
                        })
                    })
                },
                setTransition: function(t) {
                    "undefined" == typeof t && (t = f.params.speed);
                    f.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = n(this)
                          , r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0);
                        i.transition(r)
                    })
                }
            };
            f.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: f.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(n) {
                    if (n.targetTouches.length < 2)
                        return 1;
                    var t = n.targetTouches[0].pageX
                      , i = n.targetTouches[0].pageY
                      , r = n.targetTouches[1].pageX
                      , u = n.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
                },
                onGestureStart: function(t) {
                    var i = f.zoom;
                    if (!f.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                    }
                    return i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = n(this),
                    0 === i.gesture.slide.length && (i.gesture.slide = f.slides.eq(f.activeIndex)),
                    i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                    i.gesture.imageWrap = i.gesture.image.parent("." + f.params.zoomContainerClass),
                    i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || f.params.zoomMax,
                    0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0),
                    void (i.isScaling = !0)) : void (i.gesture.image = void 0)
                },
                onGestureChange: function(n) {
                    var t = f.zoom;
                    if (!f.support.gestures) {
                        if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2)
                            return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(n)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (t.scale = f.support.gestures ? n.scale * t.currentScale : t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                    t.scale < f.params.zoomMin && (t.scale = f.params.zoomMin + 1 - Math.pow(f.params.zoomMin - t.scale + 1, .5)),
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(n) {
                    var t = f.zoom;
                    !f.support.gestures && ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), f.params.zoomMin),
                    t.gesture.image.transition(f.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    t.currentScale = t.scale,
                    t.isScaling = !1,
                    1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(n, t) {
                    var i = n.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === n.device.os && t.preventDefault(),
                    i.image.isTouched = !0,
                    i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(n) {
                    var t = f.zoom, i, r;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (f.allowClick = !1,
                    t.image.isTouched && t.gesture.slide) && (t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                    t.image.height = t.gesture.image[0].offsetHeight,
                    t.image.startX = f.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                    t.image.startY = f.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                    t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                    t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                    t.gesture.imageWrap.transition(0)),
                    i = t.image.width * t.scale,
                    r = t.image.height * t.scale,
                    !(i < t.gesture.slideWidth && r < t.gesture.slideHeight))) {
                        if ((t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                        t.image.maxX = -t.image.minX,
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0),
                        t.image.maxY = -t.image.minY,
                        t.image.touchesCurrent.x = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                        t.image.touchesCurrent.y = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY,
                        !t.image.isMoved && !t.isScaling) && (f.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x || !f.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y))
                            return void (t.image.isTouched = !1);
                        n.preventDefault();
                        n.stopPropagation();
                        t.image.isMoved = !0;
                        t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX;
                        t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY;
                        t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8));
                        t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8));
                        t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8));
                        t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8));
                        t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x);
                        t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y);
                        t.velocity.prevTime || (t.velocity.prevTime = Date.now());
                        t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2;
                        t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2;
                        Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0);
                        Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0);
                        t.velocity.prevPositionX = t.image.touchesCurrent.x;
                        t.velocity.prevPositionY = t.image.touchesCurrent.y;
                        t.velocity.prevTime = Date.now();
                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTouchEnd: function(n) {
                    var t = n.zoom, e, o, s;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved)
                            return t.image.isTouched = !1,
                            void (t.image.isMoved = !1);
                        t.image.isTouched = !1;
                        t.image.isMoved = !1;
                        var i = 300
                          , r = 300
                          , h = t.velocity.x * i
                          , u = t.image.currentX + h
                          , c = t.velocity.y * r
                          , f = t.image.currentY + c;
                        0 !== t.velocity.x && (i = Math.abs((u - t.image.currentX) / t.velocity.x));
                        0 !== t.velocity.y && (r = Math.abs((f - t.image.currentY) / t.velocity.y));
                        e = Math.max(i, r);
                        t.image.currentX = u;
                        t.image.currentY = f;
                        o = t.image.width * t.scale;
                        s = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - o / 2, 0);
                        t.image.maxX = -t.image.minX;
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - s / 2, 0);
                        t.image.maxY = -t.image.minY;
                        t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX);
                        t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY);
                        t.gesture.imageWrap.transition(e).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(n) {
                    var t = n.zoom;
                    t.gesture.slide && n.previousIndex !== n.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                    t.scale = t.currentScale = 1)
                },
                toggleZoom: function(t, i) {
                    var r = t.zoom, s, h, y, p, w, b, u, f, k, d, g, nt, e, o, c, l, a, v;
                    (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex),
                    r.gesture.image = r.gesture.slide.find("img, svg, canvas"),
                    r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)),
                    r.gesture.image && 0 !== r.gesture.image.length) && ("undefined" == typeof r.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX,
                    h = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = r.image.touchesStart.x,
                    h = r.image.touchesStart.y),
                    r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1,
                    r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                    i ? (a = r.gesture.slide[0].offsetWidth,
                    v = r.gesture.slide[0].offsetHeight,
                    y = r.gesture.slide.offset().left,
                    p = r.gesture.slide.offset().top,
                    w = y + a / 2 - s,
                    b = p + v / 2 - h,
                    k = r.gesture.image[0].offsetWidth,
                    d = r.gesture.image[0].offsetHeight,
                    g = k * r.scale,
                    nt = d * r.scale,
                    e = Math.min(a / 2 - g / 2, 0),
                    o = Math.min(v / 2 - nt / 2, 0),
                    c = -e,
                    l = -o,
                    u = w * r.scale,
                    f = b * r.scale,
                    u < e && (u = e),
                    u > c && (u = c),
                    f < o && (f = o),
                    f > l && (f = l)) : (u = 0,
                    f = 0),
                    r.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")")))
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on", r;
                    f.params.zoom && (r = (f.slides,
                    !("touchstart" !== f.touchEvents.start || !f.support.passiveListener || !f.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }),
                    f.support.gestures ? (f.slides[i]("gesturestart", f.zoom.onGestureStart, r),
                    f.slides[i]("gesturechange", f.zoom.onGestureChange, r),
                    f.slides[i]("gestureend", f.zoom.onGestureEnd, r)) : "touchstart" === f.touchEvents.start && (f.slides[i](f.touchEvents.start, f.zoom.onGestureStart, r),
                    f.slides[i](f.touchEvents.move, f.zoom.onGestureChange, r),
                    f.slides[i](f.touchEvents.end, f.zoom.onGestureEnd, r)),
                    f[i]("touchStart", f.zoom.onTouchStart),
                    f.slides.each(function(t, r) {
                        n(r).find("." + f.params.zoomContainerClass).length > 0 && n(r)[i](f.touchEvents.move, f.zoom.onTouchMove)
                    }),
                    f[i]("touchEnd", f.zoom.onTouchEnd),
                    f[i]("transitionEnd", f.zoom.onTransitionEnd),
                    f.params.zoomToggle && f.on("doubleTap", f.zoom.toggleZoom))
                },
                init: function() {
                    f.zoom.attachEvents()
                },
                destroy: function() {
                    f.zoom.attachEvents(!0)
                }
            };
            f._plugins = [];
            for (at in f.plugins)
                vt = f.plugins[at](f, f.params[at]),
                vt && f._plugins.push(vt);
            return f.callPlugins = function(n) {
                for (var t = 0; t < f._plugins.length; t++)
                    n in f._plugins[t] && f._plugins[t][n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            f.emitterEventListeners = {},
            f.emit = function(n) {
                f.params[n] && f.params[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (f.emitterEventListeners[n])
                    for (t = 0; t < f.emitterEventListeners[n].length; t++)
                        f.emitterEventListeners[n][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                f.callPlugins && f.callPlugins(n, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            f.on = function(n, t) {
                return n = ot(n),
                f.emitterEventListeners[n] || (f.emitterEventListeners[n] = []),
                f.emitterEventListeners[n].push(t),
                f
            }
            ,
            f.off = function(n, t) {
                var i;
                if (n = ot(n),
                "undefined" == typeof t)
                    return f.emitterEventListeners[n] = [],
                    f;
                if (f.emitterEventListeners[n] && 0 !== f.emitterEventListeners[n].length) {
                    for (i = 0; i < f.emitterEventListeners[n].length; i++)
                        f.emitterEventListeners[n][i] === t && f.emitterEventListeners[n].splice(i, 1);
                    return f
                }
            }
            ,
            f.once = function(n, t) {
                n = ot(n);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                    f.off(n, i)
                };
                return f.on(n, i),
                f
            }
            ,
            f.a11y = {
                makeFocusable: function(n) {
                    return n.attr("tabIndex", "0"),
                    n
                },
                addRole: function(n, t) {
                    return n.attr("role", t),
                    n
                },
                addLabel: function(n, t) {
                    return n.attr("aria-label", t),
                    n
                },
                disable: function(n) {
                    return n.attr("aria-disabled", !0),
                    n
                },
                enable: function(n) {
                    return n.attr("aria-disabled", !1),
                    n
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (n(t.target).is(f.params.nextButton) ? (f.onClickNext(t),
                    f.isEnd ? f.a11y.notify(f.params.lastSlideMessage) : f.a11y.notify(f.params.nextSlideMessage)) : n(t.target).is(f.params.prevButton) && (f.onClickPrev(t),
                    f.isBeginning ? f.a11y.notify(f.params.firstSlideMessage) : f.a11y.notify(f.params.prevSlideMessage)),
                    n(t.target).is("." + f.params.bulletClass) && n(t.target)[0].click())
                },
                liveRegion: n('<span class="' + f.params.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>'),
                notify: function(n) {
                    var t = f.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(n))
                },
                init: function() {
                    f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.a11y.makeFocusable(f.nextButton),
                    f.a11y.addRole(f.nextButton, "button"),
                    f.a11y.addLabel(f.nextButton, f.params.nextSlideMessage));
                    f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.a11y.makeFocusable(f.prevButton),
                    f.a11y.addRole(f.prevButton, "button"),
                    f.a11y.addLabel(f.prevButton, f.params.prevSlideMessage));
                    n(f.container).append(f.a11y.liveRegion)
                },
                initPagination: function() {
                    f.params.pagination && f.params.paginationClickable && f.bullets && f.bullets.length && f.bullets.each(function() {
                        var t = n(this);
                        f.a11y.makeFocusable(t);
                        f.a11y.addRole(t, "button");
                        f.a11y.addLabel(t, f.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    f.a11y.liveRegion && f.a11y.liveRegion.length > 0 && f.a11y.liveRegion.remove()
                }
            },
            f.init = function() {
                f.params.loop && f.createLoop();
                f.updateContainerSize();
                f.updateSlidesSize();
                f.updatePagination();
                f.params.scrollbar && f.scrollbar && (f.scrollbar.set(),
                f.params.scrollbarDraggable && f.scrollbar.enableDraggable());
                "slide" !== f.params.effect && f.effects[f.params.effect] && (f.params.loop || f.updateProgress(),
                f.effects[f.params.effect].setTranslate());
                f.params.loop ? f.slideTo(f.params.initialSlide + f.loopedSlides, 0, f.params.runCallbacksOnInit) : (f.slideTo(f.params.initialSlide, 0, f.params.runCallbacksOnInit),
                0 === f.params.initialSlide && (f.parallax && f.params.parallax && f.parallax.setTranslate(),
                f.lazy && f.params.lazyLoading && (f.lazy.load(),
                f.lazy.initialImageLoaded = !0)));
                f.attachEvents();
                f.params.observer && f.support.observer && f.initObservers();
                f.params.preloadImages && !f.params.lazyLoading && f.preloadImages();
                f.params.zoom && f.zoom && f.zoom.init();
                f.params.autoplay && f.startAutoplay();
                f.params.keyboardControl && f.enableKeyboardControl && f.enableKeyboardControl();
                f.params.mousewheelControl && f.enableMousewheelControl && f.enableMousewheelControl();
                f.params.hashnavReplaceState && (f.params.replaceState = f.params.hashnavReplaceState);
                f.params.history && f.history && f.history.init();
                f.params.hashnav && f.hashnav && f.hashnav.init();
                f.params.a11y && f.a11y && f.a11y.init();
                f.emit("onInit", f)
            }
            ,
            f.cleanupStyles = function() {
                f.container.removeClass(f.classNames.join(" ")).removeAttr("style");
                f.wrapper.removeAttr("style");
                f.slides && f.slides.length && f.slides.removeClass([f.params.slideVisibleClass, f.params.slideActiveClass, f.params.slideNextClass, f.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
                f.paginationContainer && f.paginationContainer.length && f.paginationContainer.removeClass(f.params.paginationHiddenClass);
                f.bullets && f.bullets.length && f.bullets.removeClass(f.params.bulletActiveClass);
                f.params.prevButton && n(f.params.prevButton).removeClass(f.params.buttonDisabledClass);
                f.params.nextButton && n(f.params.nextButton).removeClass(f.params.buttonDisabledClass);
                f.params.scrollbar && f.scrollbar && (f.scrollbar.track && f.scrollbar.track.length && f.scrollbar.track.removeAttr("style"),
                f.scrollbar.drag && f.scrollbar.drag.length && f.scrollbar.drag.removeAttr("style"))
            }
            ,
            f.destroy = function(n, t) {
                f.detachEvents();
                f.stopAutoplay();
                f.params.scrollbar && f.scrollbar && f.params.scrollbarDraggable && f.scrollbar.disableDraggable();
                f.params.loop && f.destroyLoop();
                t && f.cleanupStyles();
                f.disconnectObservers();
                f.params.zoom && f.zoom && f.zoom.destroy();
                f.params.keyboardControl && f.disableKeyboardControl && f.disableKeyboardControl();
                f.params.mousewheelControl && f.disableMousewheelControl && f.disableMousewheelControl();
                f.params.a11y && f.a11y && f.a11y.destroy();
                f.params.history && !f.params.replaceState && window.removeEventListener("popstate", f.history.setHistoryPopState);
                f.params.hashnav && f.hashnav && f.hashnav.destroy();
                f.emit("onDestroy");
                n !== !1 && (f = null)
            }
            ,
            f.init(),
            f
        }
    }, u, t, r;
    for (i.prototype = {
        isSafari: function() {
            var n = navigator.userAgent.toLowerCase();
            return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(n) {
            return "[object Array]" === Object.prototype.toString.apply(n)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var n = document.createElement("div");
                return n.innerHTML = "<!--[if lte IE 9]><i><\/i><![endif]-->",
                1 === n.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var n = navigator.userAgent
              , i = n.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = n.match(/(iPad).*OS\s([\d_]+)/)
              , r = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , u = !t && n.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || u || r,
                android: i
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var n = document.createElement("div").style;
                return "webkitPerspective"in n || "MozPerspective"in n || "OPerspective"in n || "MsPerspective"in n || "perspective"in n
            }(),
            flexbox: function() {
                for (var i = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                    if (t[n]in i)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var n = !1, t;
                try {
                    t = Object.defineProperty({}, "passive", {
                        get: function() {
                            n = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (n) {}
                return n
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    },
    u = ["jQuery", "Zepto", "Dom7"],
    t = 0; t < u.length; t++)
        window[u[t]] && f(window[u[t]]);
    r = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7;
    r && ("transitionEnd"in r.fn || (r.fn.transitionEnd = function(n) {
        function r(f) {
            if (f.target === this)
                for (n.call(this, f),
                t = 0; t < i.length; t++)
                    u.off(i[t], r)
        }
        var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], u = this;
        if (n)
            for (t = 0; t < i.length; t++)
                u.on(i[t], r);
        return this
    }
    ),
    "transform"in r.fn || (r.fn.transform = function(n) {
        for (var t, i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n;
        return this
    }
    ),
    "transition"in r.fn || (r.fn.transition = function(n) {
        var i, t;
        for ("string" != typeof n && (n += "ms"),
        i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n;
        return this
    }
    ),
    "outerWidth"in r.fn || (r.fn.outerWidth = function(n) {
        return this.length > 0 ? n ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    ));
    window.Swiper = i
}();
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
$(function() {
    var n = navigator.userAgent
      , t = n.indexOf("MSIE") >= 0;
    t ? ($("body").addClass("overflow").append("<div id='Browser'><div class='main'><ul><li class='360'><a target='_blank' href='http://chrome.360.cn/'>360<\/a><\/li><li class='chrome'><a target='_blank' href='http://www.google.cn/chrome/browser/desktop/index.html'>chrome<\/a><\/li><li class='firefox'><a target='_blank' href='http://www.firefox.com.cn/download/'>firefox<\/a><\/li><li class='opera'><a target='_blank' href='http://www.opera.com/zh-cn/'>opera<\/a><\/li><li class='ie10+'><a target='_blank' href='http://windows.microsoft.com/zh-cn/internet-explorer/download-ie/'>ie10+<\/a><\/li><li class='safari'><a target='_blank' href='http://www.apple.com/cn/safari/'>safari<\/a><\/li><\/ul><\/div><\/div>"),
    $("#Browser").show()) : $("#Browser").hide()
});
$(function() {
    var n = {
        versions: function() {
            var n = navigator.userAgent
              , t = navigator.appVersion;
            return {
                trident: n.indexOf("Trident") > -1,
                presto: n.indexOf("Presto") > -1,
                webKit: n.indexOf("AppleWebKit") > -1,
                gecko: n.indexOf("Gecko") > -1 && n.indexOf("KHTML") == -1,
                mobile: !!n.match(/AppleWebKit.*Mobile.*/) || !!n.match(/AppleWebKit/),
                ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
                iPhone: n.indexOf("iPhone") > -1 || n.indexOf("Mac") > -1,
                iPad: n.indexOf("iPad") > -1,
                webApp: n.indexOf("Safari") == -1
            }
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (n.versions.ios || n.versions.iPhone || n.versions.iPad || n.versions.android)
        return !1;
    $(document).ready(function() {
        var i = "#navigation li"
          , r = "Drop-down"
          , t = "#drop-down-menu"
          , n = "on"
          , u = new Swiper("#rmd-sports-menu",{
            autoplay: 1,
            autoplayDisableOnInteraction: !1,
            speed: 5e3,
            freeMode: !0,
            slidesPerView: 4,
            slidesPerGroup: 1,
            simulateTouch: !1,
            loop: !0
        });
        $(i).hover(function() {
            var u = $(this), f;
            if ($(i).removeClass(n),
            u.hasClass(r))
                f = u.attr("data-nav"),
                $(t).find(".main").css("visibility", "hidden").removeClass(n),
                $("#drop" + f).css("visibility", "visible").addClass(n),
                $(t).add(u).addClass(n);
            else
                return $(t).removeClass(n),
                !1
        }, function() {
            $("nav").mouseleave(function() {
                $(t).add(i).removeClass(n);
                $(t).find(".main").css("visibility", "hidden").removeClass(n)
            })
        });
        $(".SlotJackpot").each(function() {
            var t = $(this).find(".jackpot").find("input[name='jackpot']")
              , i = $(this).find(".jackpot").attr("id");
            if (!(parseFloat(t.val()) * 100 < 1e4))
                var r = t.val() * 100 - 1e4
                  , n = 0
                  , u = setInterval(function() {
                    var f, e, t;
                    if (n += 1,
                    n >= 10001)
                        return clearInterval(u),
                        !1;
                    for (f = String(r + n).split(""),
                    e = $("#" + i).find("dd:not('.point')"),
                    t = 0; t <= f.length - 1; t++)
                        e.eq(e.length - 1 - t).text(f[f.length - 1 - t])
                }, 1)
        })
    })
});

$(function() {
    function l(n, t, i, r, f) {
        var e = "<div class='code'><span><h1>方式一<\/h1><p>扫一扫二维码下载<\/p><img src=./images/Pop-up/" + i + "><\/span><span><h1>方式二<\/h1><p>手机浏览器打开<a href=http://" + r + ">" + r + "<\/a><\/p><\/span><em>*建议使用UC浏览器扫码功能扫描二维码进行下载，不建议使用微信、QQ扫码器。<\/em><\/div>"
          , o = "<div class='swiper-container' id='app-ios-tutorial'><div class='swiper-wrapper'><div class='swiper-slide frist'><div class='btn tutorialNext'><span>安装教程<\/span><i><\/i><em><\/em><\/div><\/div><div class='swiper-slide' style='background-image:url(./images/Pop-up/" + f + "); background-position:0 0x'><div class='btn btn2 tutorialback' ><span>上一步<\/span><i><\/i><em><\/em><\/div><div class='btn btn2 tutorialNext'><span>下一步<\/span><i><\/i><em><\/em><\/div><\/div><div class='swiper-slide' style='background-image:url(./images/Pop-up/" + f + "); background-position:0 -410px'><div class='btn btn2 tutorialback' ><span>上一步<\/span><i><\/i><em><\/em><\/div><div class='btn btn2 tutorialNext'><span>下一步<\/span><i><\/i><em><\/em><\/div><\/div><div class='swiper-slide' style='background-image:url(./images/Pop-up/" + f + "); background-position:0 -820px'><div class='btn btn2 tutorialback' ><span>上一步<\/span><i><\/i><em><\/em><\/div><div class='btn btn2 tutorialNext'><span>下一步<\/span><i><\/i><em><\/em><\/div><\/div><div class='swiper-slide' style='background-image:url(./images/Pop-up/" + f + "); background-position:0 -1230px'><div class='btn btn2 tutorialback' ><span>上一步<\/span><i><\/i><em><\/em><\/div><div class='btn btn2 tutorialhome'><span>返回<\/span><i><\/i><em><\/em><\/div><\/div> <\/div><div class='swiper-pagination'><\/div><\/div>";
        if (n == "app" || n == "ag" || n == "bb" || n == "ob" || n == "gg")
            return n == "be" && (e = "<div class='code'><span><h1>方式一<\/h1><p>扫一扫二维码下载<\/p><img src=./images/Pop-up/" + i + "><\/span><span><h1>方式二<\/h1><p>手机浏览器打开<a href=http://" + r + ">" + r + "<\/a><\/p><\/span><em title='前缀不区分大小写' style='color:#0088fe;font-size:14px'>注:BE手机版登录需要先登录网页版游戏，登录名需要加前缀ZXC。<\/em><\/div>"),
            t == "ios" ? ($(u).append(o).find(".frist").append(e),
            a()) : $(u).append(e),
            !1;
        $(u).append(e)
    }
    function e(n, t) {
        $(u).html("");
        n == "app" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);

        n == "ag" && (t == "ios" && (appdata = ["ag-iphone.png", "www.whhbet.com/m", "ios_install.jpg"]), t == "android" && (appdata = ["ag-Android.png", "wwwwhhbet.com/m", ""]), t == "html5" && (appdata = ["h5_qr.png", "mwww.whhbet.com/m", ""]));
        n == "bb" && (t == "ios" && (appdata = ["BBIN-iphone.png", "www.whhbet.com/m", "ios_install.jpg"]), t == "html5" && (appdata = ["h5_qr.png", "wwwwhhbet.com/m", ""]));
        n == "ob" && (t == "ios" && (appdata = ["ob-iphone.png", "www.whhbet.com/m", "ios_install.jpg"]), t == "android" && (appdata = ["ob-Android.png", "wwwwhhbet.com/m", ""]), t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]));
        n == "hg" && (t == "android" && (appdata = ["hg-Android.png", "www.whhbet.com/m", ""]), t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]));
        n == "ds" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);
        n == "og" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);
        n == "sa" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);

        n == "gg" && (t == "ios" && (appdata = ["gg-iphone.png", "www.whhbet.com/m", "ios_install.jpg"]), t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]));
        n == "pt" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);
        n == "mg" && (t == "android" && (appdata = ["mg-Android.png", "www.whhbet.com/m", ""]), t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]));
        n == "hb" && (t == "html5" && (appdata = ["h5_qr.png", "m.whhbet.com/m", ""]));
        n == "mw" && t == "android" && (appdata = ["mw-Android.png", "www.whhbet.com/m", ""]);
        n == "ttg" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);

        n == "sb" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);
        n == "crown" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);

        n == "hc" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);
        n == "ig" && t == "html5" && (appdata = ["h5_qr.png", "www.whhbet.com/m", ""]);

        var i = appdata[0]  // 二维码
          , r = appdata[1]  // 链接地址
          , f = appdata[2]; // 安装图片
        l(n, t, i, r, f)
    }
    function a() {
        var n = new Swiper(h,{
            pagination: c,
            paginationClickable: !0
        });
        $(document).on("click", ".tutorialNext", function() {
            n.slideNext()
        });
        $(document).on("click", ".tutorialback", function() {
            n.slidePrev()
        });
        $(document).on("click", ".tutorialhome", function() {
            n.slideTo(0, 1e3, !1)
        })
    }
    var r = "#appdownload"
      , f = ".pop-up"
      , o = "#close-appdownload"
      , s = "#appdownload .pop-up"
      , i = "#appdownload .pop-up .hd h1"
      , t = "#appdownload .nav-main ul"
      , u = "#appdownload .pop-up .bd"
      , h = "#app-ios-tutorial"
      , c = "#app-ios-tutorial .swiper-pagination"
      , n = ["<li class='ios' data-app='ios'><span><em><\/em><\/span><\/li>", "<li class='android' data-app='android'><span><em><\/em><\/span><\/li>", "<li class='html5' data-app='html5'><span><em><\/em><\/span><\/li>"];
    $(document).ready(function() {
        $("body").append("<div id='appdownload'><div class='main'><div class='pop-up'><div class='hd'><h1><\/h1><i id='close-appdownload'>×<\/i><\/div><div class='nav'><div class='nav-main'><ul><\/ul><\/div><\/div><div class='bd'><\/div><\/div><\/div><\/div>")
    });
    $(".AppDown").click(function() {
        var u = $(this).attr("data-product")
          , o = $(this).attr("data-app");
        $("body").addClass("overflow");
        $(r).attr("data-product", u);
        $(r).show(0, function() {
            $(this).find(f).addClass("on");
            u == "app" && ($(t).append(n[2]), $(i).text("万濠手机版"));

            u == "ag" && ($(t).append(n[0] + n[1] + n[2]), $(i).text("AG真人"));
            u == "bb" && ($(t).append(n[0] + n[2]), $(i).text("BB真人"));
            u == "ob" && ($(t).append(n[0] + n[1] + n[2]), $(i).text("欧博真人"));
            u == "hg" && ($(t).append(n[1] + n[2]), $(i).text("HG真人"));
            u == "ds" && ($(t).append(n[2]), $(i).text("DS真人"));
            u == "og" && ($(t).append(n[2]), $(i).text("OG真人"));
            u == "sa" && ($(t).append(n[2]), $(i).text("SA彩票"));

            u == "gg" && ($(t).append(n[0] + n[2]), $(i).text("GG电子"));
            u == "pt" && ($(t).append(n[2]), $(i).text("PT电子"));
            u == "mg" && ($(t).append(n[1] + n[2]), $(i).text("MG电子"));
            u == "hb" && ($(t).append(n[2]), $(i).text("HB电子"));
            u == "mw" && ($(t).append(n[1]), $(i).text("MW电子"));
            u == "ttg" && ($(t).append(n[2]), $(i).text("TTG电子"));

            u == "sb" && ($(t).append(n[2]), $(i).text("沙巴体育"));
            u == "crown" && ($(t).append(n[2]), $(i).text("皇冠体育"));

            u == "hc" && ($(t).append(n[2]), $(i).text("濠彩彩票"));
            u == "ig" && ($(t).append(n[2]), $(i).text("IG彩票"));

            $(t).find("." + o).addClass("on");
            e(u, o)
        })
    });
    $(document).on("click", "#appdownload .nav-main ul li", function() {
        var n = $(r).attr("data-product")
          , t = $(this).attr("data-app");
        $("#appdownload .nav-main ul li").removeClass("on");
        $(this).addClass("on");
        e(n, t)
    });
    $(document).on("click", r, function(n) {
        function h() {
            $(r).find(f).removeClass("on");
            setTimeout(function() {
                $("body").removeClass("overflow");
                $(r).hide();
                $(t).html("");
                $(i).text("");
                $(u).html("")
            }, 400)
        }
        var e = $(n.target);
        if (e.closest(o).length > 0)
            h();
        else {
            if (e.closest(s).length > 0)
                return !1;
            h()
        }
    })
});

isCallBackClick = !1;
$(function() {
    $.fn.numeral = function() {
        $(this).css("ime-mode", "disabled");
        this.bind("keypress", function() {
            ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 46 || /\.\d\d\$/.test($(this).val())) && (event.returnValue = !1)
        });
        this.bind("keydown", function() {
            window.event.keyCode == 13 && (window.event.keyCode = 9)
        });
        this.bind("keyup", function() {
            /^((\d+)(\.\d{0,2})?)?$/.test(this.value) ? this.oldValue = this.value : this.value = this.oldValue
        })
    }
    ;
    $.fn.OnlyInputNumber = function() {
        $(this).css("ime-mode", "disabled");
        this.bind("keypress", function() {
            (event.keyCode < 48 || event.keyCode > 57) && (event.returnValue = !1)
        });
        this.bind("keydown", function() {
            window.event.keyCode == 13 && (window.event.keyCode = 9)
        });
        this.bind("keyup", function() {
            this.value = this.value.replace(/\D/g, "")
        })
    }
    ;
    $.fn.PlatSelect = function() {
        var n = $(this)
          , t = $(n).attr("id") + "_sele";
        n.focus(function() {
            $("#" + t).css("display", "block")
        });
        $("#" + t).find("dd").click(function() {
            n.val($.trim($(this).html()));
            $("#" + t).css("display", "none")
        })
    }
    ;
    $.fn.Center = function() {
        var n = $(this);
        $(n).css({
            left: ($(window).width() - $(n).outerWidth()) / 2
        });
        $(n).css({
            top: ($(window).height() - $(n).outerHeight()) / 2
        });
        $(window).resize(function() {
            $(n).css({
                left: ($(window).width() - $(n).outerWidth()) / 2
            });
            $(n).css({
                top: ($(window).height() - $(n).outerHeight()) / 2
            })
        });
        $(window).scroll(function() {
            $(n).css({
                left: ($(window).width() - $(n).outerWidth()) / 2
            });
            $(n).css({
                top: ($(window).height() - $(n).outerHeight()) / 2
            })
        })
    }
    ;
    $.fn.InputTip = function(n, t) {
        var i = $(this)
          , r = i.next();
        t == null && (t = n);
        r.attr("class").indexOf("page-tips") != -1 ? r.addClass("page-tips-err").html(n) : i.after('<span class="page-tips page-tips-err">' + c + "<\/span>");
        i.keydown(function() {
            r.removeClass("page-tips-err").html(t);
            i.unbind("keypress");
            i.unbind("keydown")
        })
    }
    ;
    art.zxMsg = {
        alertBoxLoad: function() {
            return art.dialog({
                id: "art_msg",
                title: "拼命处理中...",
                opacity: .2,
                fixed: !0,
                drag: !1,
                resize: !1,
                lock: !0
            })
        },
        alert: function(n) {
            return this.alertBox("消息", n, "")
        },
        alertBox: function(n, t, i, r) {
            return art.dialog({
                id: "art_msg",
                title: n,
                content: t,
                opacity: .2,
                fixed: !0,
                drag: !1,
                resize: !1,
                ok: !0,
                top: "50%",
                lock: !0,
                icon: i,
                okValue: "确定",
                ok: function() {
                    r != null && r != "" && r()
                }
            })
        },
        alertSucce: function(n, t) {
            return this.alertBox("消息", n, "succeed", t)
        },
        alertWarning: function(n, t) {
            return this.alertBox("消息", n, "warning", t)
        },
        alertQuestion: function(n) {
            return this.alertBox("消息", n, "question").button({
                name: "取消"
            })
        }
    }
});
$(function() {
    function n(n) {
        var i = n.indexOf("?");
        i == -1 && (n = n + "?");
        n = n + "&rand" + Math.random();
        t(n)
    }
    function t(n) {
        var t = "";
        $.post(n, {}, function(n) {
            t = n;
            var i = $("#zxcbox");
            zxcbox.remove();
            $("body").append(t);
            i = $("#zxcbox");
            i.css({
                left: ($(window).width() - i.outerWidth()) / 2
            });
            i.css({
                top: ($(window).height() - i.outerHeight()) / 2 + 40
            });
            $(window).resize(function() {
                i.css({
                    left: ($(window).width() - i.outerWidth()) / 2
                });
                i.css({
                    top: ($(window).height() - i.outerHeight()) / 2
                })
            });
            $(window).scroll(function() {
                i.css({
                    left: ($(window).width() - i.outerWidth()) / 2
                });
                i.css({
                    top: ($(window).height() - i.outerHeight()) / 2
                })
            });
            i.css("display", "block")
        })
    }
    $.fn.platbox = function() {
        $(this).click(function() {
            return n($(this).attr("href")),
            !1
        })
    }
    ;
    $("a[rel*=platbox]").platbox()
});
$(function() {
    $("header .top #UserName,header .top #PassWord").keydown(function(n) {
        if (n.keyCode == 13)
            return beginLogin(),
            !1
    });
    $("#LoginBtn").click(beginLogin)
});
islogin = !1
