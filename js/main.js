$(document).ready(function () {
    function t() {
        var t = $(".header"),
            a = $(window).scrollTop(),
            e = $(".nav a");
        a > 100 ? (t.css("box-shadow", "0 0 12px rgba(0,0,0,0.1)"), e.removeClass("active")) : t.css("box-shadow", "none"), a >= 100 ? $(".section").each(function (t) {
            $(this).position().top <= a + 80 && (e.removeClass("active"), e.eq(t).addClass("active"))
        }) : (e.removeClass("active"), e.filter(":first").addClass("active"))
    }

    function a(t) {
        $(t).fadeIn(), $(".overlay").css("display", "flex"), $(".modal .close").on("click", function (t) {
            t.preventDefault(), $(".overlay, .modal").fadeOut()
        })
    }
    t(), $(window).scroll(function () {
        t()
    }), $(".nav a").on("click", function (t) {
        t.preventDefault();
        var a = $(this).attr("href"),
            e = $(a).offset().top - 70;
        return $("body,html").animate({
            scrollTop: e
        }, 800), !1
    }), $(".cta_btn a, .header_wrap .btn").on("click", function (t) {
        t.preventDefault(), a($(".contactus"))
    }), $(".work_content img").each(function () {
        var t = $(this).data("title"),
            e = $(this).data("desc"),
            n = $(this).attr("src"),
            o = $(this).data("category"),
            i = $(".project_profile");
        $(this).on("click", function () {
            a(i), i.find("img").attr("src", n), i.find(".sub_title").text(o), i.find("h3").text(t), i.find("p").text(e)
        })
    })
});