$(window).bind("load", function() {
    $(".mainPage").fadeOut();
    $(".loader").fadeOut(1100);
    setTimeout(function() {
        $(".mainPage").fadeTo(1200, 1);
    }, 1000);
    var delay = 6000;
    setTimeout(function() {
        ! function() {
            var t;
            if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void(window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"], t.factory = function(e) {
                return function() {
                    var n;
                    return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
                };
            }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
            }), t.load = function(t) {
                var e, n, o, i;
                e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "#" + i + "/" + t + ".js", n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
            });
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('n4ea4kgt5tgx');
    }, delay);
    var wHeight = $(window).height(),
        wWidth = $(window).width(),
        homeH = $('#home').height(),
        greenBoxH = $('.greenBox').height(),
        hpImgLH = $('.hp-img-left').height(),
        hpImgLW = $('.hp-img-left').width(),
        hpImgRH = $('.hp-img-right').height(),
        hpImgRW = $('.hp-img-right').width(),
        delayAnm = 3500,
        lastScrollTop = 0,
        delta = 5,
        navbarHeight = $('.navigation').outerHeight();
    setTimeout(function() {
        $("body").removeClass("preload no_scroll");
    }, delayAnm);
    $('.layout').css('min-height', wHeight);
    $('.greenBox').css({
        'margin-top': -greenBoxH / 2
    });
    $('.zebra').css({
        'height': greenBoxH + 100
    });
    $('.hp-img-left').css({
        'margin-top': -hpImgLH / 2 + 22,
        'margin-left': -hpImgLW / 2 + 16
    });
    $('.hp-img-right').css({
        'margin-top': -hpImgRH / 2 + 22,
        'margin-left': -hpImgRW / 2 - 16
    });
    $('.work-content').css('height', hpImgLH);
    $('.hp-area').css({
        'height': hpImgRH
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() == 0) {
            $('.navigation').css("background-color", "transparent");
        } else {
            $('.navigation').css("background-color", "#212123");
        }
    });
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 0);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('.navigation').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.navigation').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
    $(document).on('click', ".lines-button", function() {
        $('#overlay').show();
        $('#mainMenu').fadeIn(500);
        $('.lines-button').addClass('close');
        $('body').addClass('no_scroll');
        $('.navigation').css("background-color", "transparent");
    });
    $(document).on('click', ".lines-button.close", function() {
        $('#overlay').hide();
        $('#mainMenu').fadeOut(500);
        $('.lines-button').removeClass('close');
        $('body').removeClass('no_scroll');
        $('.navigation').css("background-color", "#212123");
    });
    $(window).scroll(function(e) {
        if ($(window).width() > 100) {
            $('.portfolioBG, .medictrustBG, .hondaBG').css({
                'top': +($(this).scrollTop() / 2) + "px",
            });
        }
    });
    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop(),
            beOtwork = $('#home').height() + $('.highlight-wrap').height() + $('.listportfolio').height() + $('.appDesc').height(),
            otherH = $('.other-work').height();
        if (scroll > beOtwork - 200 && scroll <= beOtwork + otherH - 200) {
            $('.next-box, .next-img, .next-text').removeClass('fadeInRight').addClass('fadeOutRight');
            $('.prev-box, .prev-img, .prev-text').removeClass('fadeInLeft').addClass('fadeOutLeft');
        } else {
            $('.next-box, .next-img, .next-text').removeClass('fadeOutRight').addClass('fadeInRight');
            $('.prev-box, .prev-img, .prev-text').removeClass('fadeOutLeft').addClass('fadeInLeft');
        }
    });
    $(window).resize(function() {
        var wHeight = $(window).height(),
            wWidth = $(window).width(),
            homeH = $('#home').height(),
            greenBoxH = $('.greenBox').height(),
            hpImgLH = $('.hp-img-left').height(),
            hpImgLW = $('.hp-img-left').width(),
            hpImgRH = $('.hp-img-right').height(),
            hpImgRW = $('.hp-img-right').width(),
            titleh2W = $('.pageTitle h2').width(),
            homeH = $('#home').height(),
            beOtwork = $('#home').height() + $('.highlight-wrap').height() + $('.listportfolio').height();
        $('.layout').css('min-height', wHeight);
        $('.opening_text').css('height', homeH);
        $('.zebra').css({
            'height': greenBoxH + 100
        });
        $('.hp-img-left').css({
            'margin-top': -hpImgLH / 2 + 22,
            'margin-left': -hpImgLW / 2 + 16
        });
        $('.hp-img-right').css({
            'margin-top': -hpImgRH / 2 + 22,
            'margin-left': -hpImgRW / 2 - 16
        });
        $('.hp-area').css({
            'height': hpImgRH
        });
    });
    $(".PerspektifBG").find("img").perspectiveEffectOnMouseOver();
})