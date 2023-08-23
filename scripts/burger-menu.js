$(function() {
    "use strict";
    function s() {
        $(".circle").addClass("expand"),
        $(".burger").addClass("open"),
        $(".icon-bar1, .icon-bar2, .icon-bar3").addClass("collapse"),
        $(".menu").fadeIn(),
        $(".burger").attr("aria-expanded", "true"),
        setTimeout(function() {
            $(".icon-bar2").hide(),
            $(".icon-bar1").addClass("rotate30"),
            $(".icon-bar3").addClass("rotate150")
        }, 70),
        setTimeout(function() {
            $(".icon-bar1").addClass("rotate45"),
            $(".icon-bar3").addClass("rotate135")
        }, 120)
    }
    function e() {
        $(".burger").removeClass("open"),
        $(".icon-bar1").removeClass("rotate45").addClass("rotate30"),
        $(".icon-bar3").removeClass("rotate135").addClass("rotate150"),
        $(".circle").removeClass("expand"),
        $(".menu").fadeOut(),
        $(".burger").attr("aria-expanded", "false"),
        setTimeout(function() {
            $(".icon-bar1").removeClass("rotate30"),
            $(".icon-bar3").removeClass("rotate150")
        }, 50),
        setTimeout(function() {
            $(".icon-bar2").show(),
            $(".icon-bar1, .icon-bar2, .icon-bar3").removeClass("collapse")
        }, 70)
    }
    var a = window.location.pathname.toLowerCase()
      , i = "others";
    // "/content/infosys-web/en.html" !== a && "/" !== a && "/jp" !== a && "/jp/" !== a && "/cn" !== a && "/cn/" !== a && "/mx" !== a && "/mx/" !== a && "/de" !== a && "/de/" !== a && "/content/infosys-web/en/australia.html" !== a && "/australia.html" !== a || (i = "home");
    var n = 0 !== $(this).scrollTop();
    $(window).bind("scroll", function() {
        "home" !== i && ($(window).scrollTop() > n ? ($(".scrollbg-show").addClass("show-strip"),
        $(".menu-bg").addClass("reverseMenu"),
        $(".burger > .icon-bar1").addClass("icon-bar11"),
        $(".burger > .icon-bar2").addClass("icon-bar21"),
        $(".burger > .icon-bar3").addClass("icon-bar31"),
        $(".hidden-list").addClass("visible-list"),
        $(".menu-bg, .burger").css("margin-top", "12px"),
        $(".search__color").find(".search-icon").css("top", "20px"),
        $(".search__color").find(".btn1").css("color", "#000")) : (n = 0 !== $(this).scrollTop(),
        $(".scrollbg-show").removeClass("show-strip"),
        $(".menu-bg").removeClass("reverseMenu"),
        $(".burger > .icon-bar1").removeClass("icon-bar11"),
        $(".burger > .icon-bar2").removeClass("icon-bar21"),
        $(".burger > .icon-bar3").removeClass("icon-bar31"),
        $(".hidden-list").removeClass("visible-list"),
        $(".menu-bg, .burger").css("margin-top", "35px"),
        $(".search__color").find(".search-icon").css("top", "47px"),
        $(".search__color").find(".btn1").css("color", "#fff")))
    }),
    $(document).on("click", ".burger", function() {
        $(".search-wrap.search-icon").css("z-index", "0"),
        $(this).hasClass("open") ? ($("html, body").removeClass("hidden-scroll"),
        $(".fix-menu").removeClass("opacity-zero"),
        $(".circle").removeClass("bg-trans"),
        $(".listmenu").css("z-index", "9999"),
        $(".progressbar,.hero-list1").css("display", "block"),
        $(".listmenu .hero-list").css("display", "block"),
        $(".search-icon").attr("style", "z-index: 9999 !important"),
        $(".user-icon").css({
            opacity: "1",
            "z-index": "9999"
        }),
        $(".circle").css({
            opacity: "0",
            visibility: "hidden"
        }),
        $(".navbar-default.navbar-fixed-top.show-strip").length > 0 ? $(".search-icon").css("top", "20px") : $(".search-icon").css("top", "47px"),
        e()) : ($("html, body").addClass("hidden-scroll"),
        $(".listmenu").css("z-index", "2"),
        $(".progressbar,.hero-list1").css("display", "none"),
        $(".listmenu .hero-list").css("display", "none"),
        $(".search-icon").attr("style", "z-index: 0 !important"),
        $(".user-icon").css({
            opacity: "0",
            "z-index": "0"
        }),
        $(".circle").css({
            opacity: "0",
            visibility: "hidden"
        }),
        s())
    }),
    $(document).on("mouseover", ".burger", function() {
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("mouseover", ".hover-menu-hide", function() {
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".fix-menu").addClass("opacity-zero"),
        $(".circle").addClass("bg-trans")
    }),
    $(document).on("mouseleave", ".hover-menu-hide", function() {
        $(".fix-menu").removeClass("opacity-zero"),
        $(".circle").removeClass("bg-trans")
    }),
    $(window).width() < 1025 ? ($(document).on("click", ".visible1024-cross", function() {
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("click", ".nyn", function() {
        $(".nyn-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("click", ".industries", function() {
        $(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("click", ".services", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("click", ".platforms", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("click", ".iki-text", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css({
            display: "none"
        }),
        $(".iki-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("click", ".about-txt", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    })) : ($(document).on("mouseover", ".nyn", function() {
        $(".nyn-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("mouseover", ".industries", function() {
        $(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("mouseover", ".services", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("mouseover", ".platforms", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("mouseover", ".iki-text", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css({
            display: "none"
        }),
        $(".iki-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    }),
    $(document).on("mouseover", ".about-txt", function() {
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({
            display: "block",
            visibility: "visible",
            "animation-name": ""
        }),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none")
    })),
    $("#LinkUpdateProfile").click(function(s) {
        s.preventDefault(),
        window.location.href = $("#UpdateProfileUrl").attr("href")
    }),
    $("#LinkSignOut").click(function(s) {
        s.preventDefault(),
        window.location.href = $("#SignOutPrefixUrl").attr("href") + $("#SignOutPostfixUrl").attr("href")
    })
}),
$(document).ready(function() {
    $("#sml_ht_home_banner, #L2_home_banner, #hero_slider").prepend('<div id="main-cnt"> </div>'),
    $("body").on("keydown", function(s) {
        9 == s.which && $(".wow").css("visibility", "visible")
    }),
    $("#k, #btn-search-close").attr("tabindex", "-1")
}),
$("#btn-search-close").click(function() {
    $("#k, #btn-search-close").attr("tabindex", "-1"),
    $(".search-icon .btn1").focus()
}),
$("#btn-search").click(function() {
    $("#k, #btn-search-close").removeAttr("tabindex")
});

/*
$( document ).ready(function() {
	prpath = window.location.pathname;
	if(prpath.indexOf("/content/infosys-web/en/newsroom/press-releases/", 0) == 0){
     $("h1").parent().prepend('<div class="listen-controls"><span>Listen</span><button type="button" id="listen-start" class="listen-buttons-icon"><i class="fa fa-play" aria-hidden="true"></i></button><button type="button" id="listen-resume" class="listen-buttons-icon"><i class="fa fa-play" aria-hidden="true"></i></button><button type="button" id="listen-pause" class="listen-buttons-icon"><i class="fa fa-pause" aria-hidden="true"></i></button><button type="button" id="listen-cancel" class="listen-buttons-icon"><i class="fa fa-times" aria-hidden="true"></i></button></div>');
	
	$("head").append("<link rel='stylesheet' href='/content/dam/infosys-web/burger-menu/en/css/listen-controls.css' type='text/css'>");
		
		
		//Text to Speech
 const msg = new SpeechSynthesisUtterance();
let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();
};

        document.querySelector("#listen-start").addEventListener("click", () => {
            document.querySelector('#listen-pause').style.display = 'block';
            document.querySelector('#listen-cancel').style.display = 'block';
            var test = document.getElementById('press_releases').textContent;
		msg.rate = 1.4;
		//	msg.voice = voices[2];
			msg.text = test;
            window.speechSynthesis.speak(msg);
            document.querySelector('#listen-start').style.display = 'none';
        });

        document.querySelector("#listen-pause").addEventListener("click", () => {
            // Pause the speechSynthesis instance
            document.querySelector('#listen-resume').style.display = 'block';
            window.speechSynthesis.pause();
            document.querySelector('#listen-pause').style.display = 'none';
        });

        document.querySelector("#listen-resume").addEventListener("click", () => {
            // Resume the paused speechSynthesis instance
            document.querySelector('#listen-pause').style.display = 'block';
            window.speechSynthesis.resume();
            document.querySelector('#listen-resume').style.display = 'none';

        });

        document.querySelector("#listen-cancel").addEventListener("click", () => {
            // Cancel the speechSynthesis instance
            document.querySelector('#listen-pause').style.display = 'none';
            document.querySelector('#listen-cancel').style.display = 'none';
            document.querySelector('#listen-resume').style.display = 'none';
            window.speechSynthesis.cancel();
            document.querySelector('#listen-start').style.display = 'block';
        });

        window.onbeforeunload = function() {
            document.querySelector('#listen-pause').style.display = 'none';
            document.querySelector('#listen-cancel').style.display = 'none';
            document.querySelector('#listen-resume').style.display = 'none';
            window.speechSynthesis.cancel();
            document.querySelector('#listen-start').style.display = 'block';
        }
}
});
*/
