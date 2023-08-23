/**********************
	Header js
/**********************/
$(document).ready(function () {
	"use strict";

	$("body").prepend('<a href="#main-cnt" class="skip-main-cnt" tabindex="1" aria-label="Navigate to main content" title="Skip to main content">Skip to main content</a> <a href="#footer" class="skip-footer" aria-label="Navigate to footer" title="Skip to footer">Skip to footer</a>');

	/* ------------- Path Name checking for header ---------------*/
	var pathName = window.location.pathname.toLowerCase();
	var pageUrl = 'others';
	// if (pathName === '/content/infosys-web/en.html' || pathName === '/' || pathName === '/jp' || pathName === '/jp/' || pathName === '/cn' || pathName === '/cn/' || pathName === '/mx' || pathName === '/mx/' || pathName === '/de' || pathName === '/de/' || pathName === '/content/infosys-web/en/australia.html' || pathName === '/australia.html') {
	// 	pageUrl = 'home';
	// }

	/* ------------- Scroll Fixed second Header Industries ---------------*/
	var num = $(this).scrollTop() !== 0; /*$('header').offset().top;*/
	$(window).bind('scroll', function () {
		if (pageUrl !== 'home') {
			if ($(window).scrollTop() > num) {
				$('.hero-list').addClass('hero-list1');
				$('.listmenu').css('z-index', '9999');
				//$('.hero-list1 .trigger-share .social-share > li').css('opacity','0');
                $('.social-share > li').removeClass('slideout social-share-icon');
				$('.scrollbg-show').addClass('show-strip');
				$('#logo, .insteplogocolor').attr('fill', '#007cc3');
				$('.iki-logo').attr('fill', '#007cc3');
				$('.iki-line').attr('stroke', '#6e6f72');
				$('.iki-logo-grey').attr('fill', '#6e6f72');
			} else {
				num = $(this).scrollTop() !== 0;
				$('.hero-list').removeClass('hero-list1');
				$('.listmenu').css('z-index', '9');
				//$('.hero-list1 .trigger-share .social-share > li').removeAttr('style');
                $('.social-share > li').removeClass('slideout social-share-icon');
				$('.scrollbg-show').removeClass('show-strip');
				$('#logo, .insteplogocolor').attr('fill', '#fff');
				$('.iki-logo').attr('fill', '#ffffff');
				$('.iki-line').attr('stroke', '#ffffff');
				$('.iki-logo-grey').attr('fill', '#ffffff');
			}
		}
	});

	/* ------------- SCROLL UP FUNCTION HOME Pages ---------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('.scroll-up').fadeIn(700);
			$('.header-menu').fadeOut(700);
			$('.user-icon').css({ 'opacity': '0', 'z-index': '0' });
		} else {
			$('.scroll-up').fadeOut(700);
			$('.header-menu').fadeIn(700);
			$('.user-icon').css({ 'opacity': '1', 'z-index': '9999' });
		}

		// Scroll ProgressBar indicator
		if (pageUrl !== 'home') {
			var _document_height = $(document).height(),
				_window_height = $(window).height(),
				_scroll_top = $(window).scrollTop(),
				_w = 0;
			_w = _scroll_top * 100 / (_document_height - _window_height);
			$('.progressbar').find('> div').width(_w + '%');
		}
	});

	$('.scroll-up').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
	});
	
	/* ------------- WAYPOINT PART ---------------*/
	//change menu icon background and logo color
	if ($("#do_more").length) {
		var waypoint = new Waypoint({
			element: document.getElementById('do_more'),
			handler: function () {
				$('.menu-bg').toggleClass('reverseMenu');
				$('.btn--search').toggleClass('search-toggle-bg');
				$('.stick-left-nav-ul > li').toggleClass('darkText');
				$('#logo').attr('fill', function (index, attr) {
					return attr === '#007cc3' ? '#fff' : '#007cc3';
				});
				$('.burger > .icon-bar1').toggleClass('icon-bar11');
				$('.burger > .icon-bar2').toggleClass('icon-bar21');
				$('.burger > .icon-bar3').toggleClass('icon-bar31');
			}
		});
	}
		
	/* -------------------- Dynamic Bind Sub-Header Start ----------------------- */
	var subHeaderLength = $('.header-menu ul.navbar-nav ul.dropdown-menu').children().length;
	
	if(subHeaderLength > 0) {
		for(var i=0; i<1; i++) {
			var subHeaderTitle = $('.header-menu ul.navbar-nav ul.dropdown-menu').children()[i];
			var subHeaderSubTitle = $(subHeaderTitle).children().children();
			var subHeaderSubTitleCount = Math.ceil((($(subHeaderSubTitle).length) - 1) / 3);
			var bindSubHeader = "";
			
			for(var j=0; j<$(subHeaderSubTitle).length; j++) {
				if(j==0) {
					bindSubHeader += "<ul class='col-md-4'><li class='dropdown-header'>" + $(subHeaderSubTitle)[j].textContent + "</li><li class='nav-divider'></li>";
				} else {
					bindSubHeader += "<ul class='col-md-4'><li class='dropdown-header'>&nbsp;</li><li class='nav-divider'></li>";
				}
				
				for(var k=0; k<subHeaderSubTitleCount; k++) {
					j++;
					if((($(subHeaderSubTitle).length) - 1) >= j) {
						bindSubHeader += "<li><a href='#' title='" + $(subHeaderSubTitle)[j].textContent + "'>" + $(subHeaderSubTitle)[j].textContent + "</a></li>";
					} else {
						break;
					}
				}
				if((($(subHeaderSubTitle).length) - 1) >= j) {
					j--;
					bindSubHeader += "</ul>";
				} else {
					bindSubHeader += "</ul>";
					break;
				}
			}
			$('.header-menu ul.navbar-nav ul.dropdown-menu').children()[i].innerHTML = "";
			$('.header-menu ul.navbar-nav ul.dropdown-menu').children()[i].innerHTML = bindSubHeader;			
		}
	}
	/* -------------------- Dynamic Bind Sub-Header End ------------------------- */
	
	/* ------------- Equal Height Success stories Part ---------------*/
	setTagPositionHeight();

	$(window).resize(function () {
		setTagPositionHeight();
	});

	function setTagPositionHeight() {
		$('.equal-bg, .item-list').each(function () {
			$(this).find('.tag-postion').css('top', $(this).find('.get-image-height').height());
		});
	}

	/* ------------- Mega Dropdown animation ---------------*/
	$(document).on("mouseenter", ".dropdown", function () {
		$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).fadeIn("800");
		$(this).toggleClass('open');
		$('ul.hidden-list').css('opacity', '0');
	});
	$(document).on("mouseleave", ".dropdown", function () {
		$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).hide();
		$(this).toggleClass('open');
		$('ul.hidden-list').css('opacity', '1');
	});
	
	//on Click BreadCrumb link
	$(document).on('click', '.hero-list > ol > li.mega-dropdown', function (e) {
		e.stopPropagation();
	});
	
	/*************** Index start ***************/
	$(window).scroll(function () {
		var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		//Active menu
		if (windowPos >= 100) {
			$('section.scroll-section').each(function (i) {
				if ($(this).position().top <= windowPos - 0) {
					$('.sticky-left-nav li.nav-active').removeClass('nav-active mb50');
					$('.sticky-left-nav li').eq(i).addClass('nav-active mb50');
				}
			});
		} else {
			$('.stick-left-nav-ul li.nav-active-menu').removeClass('nav-active-menu');
		}
		
		/* check footer offset for left sticky nav */
		checkFooterOffset();
	});
	
	// onload Menu Active
	if ($(window).scrollTop() > 100) {
		var txx = $(window).scrollTop() + 1;
		window.scrollTo(0, txx);
	}
	
	/* This part causes smooth scrolling on nav click */
	$("nav.sticky-left-nav a").click(function (evn) {
		evn.preventDefault();
		$(this).parent().addClass("nav-active");
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 10
		}, 500);
	});

	/* left navigation hover effects */
	$(document).on('mouseenter', '.sticky-left-nav li', function () {
		if (!$(this).hasClass('mb50')) {
			$(this).addClass('nav-active');
		}
	});
	$(document).on('mouseleave', '.sticky-left-nav li', function () {
		if (!$(this).hasClass('mb50')) {
			$(this).removeClass('nav-active');
		}
	});
	
	/* do more expand/collapse effect */
	$(document).on('click', '.expandHead', function () {
		var expandID = $(this).data('id');
		$(expandID).fadeIn();
		$(expandID).addClass('expandWrpr').removeClass('contractWrpr');
		$('.closeWrpr').addClass('closeWrprAnim');
	});
	$(document).on('click', '.closeWrpr', function () {
		$('.expandableDiv').removeClass('expandWrpr').addClass('contractWrpr');
		$('.expandableDiv').fadeOut();
		$('.closeWrpr').removeClass('closeWrprAnim');
	});

	//Contact Us Expand
	$(document).on('click', '.expand', function () {
		var expand = $(this).data('id');
		$(expand).fadeIn();
	});
	$(document).on('click', '.closeWrpr1', function () {
		$(this).parent().fadeOut();
	});

	/*Index End*/

	/* ------------- initiate counter Home Page ---------------*/
	if ($(".initiate-counter").length) {
		new Waypoint({
			element: document.getElementsByClassName('initiate-counter'),
			handler: function () {
				if (!$('.add-counter').hasClass('counter')) {
					$('.add-counter').addClass('counter');
					setTimeout(function () {
						initiateCounter();
					}, 2000);
				}
			},
			offset: 'bottom-in-view'
		});
	}

	/* initiateCounter function definition */
	function initiateCounter() {
		/* counter up initiation */
		$('.counter').each(function () {
			var target = this;
			var endVal = parseFloat($(this).attr('data-endVal'));
			var theAnimation = new CountUp(target, 0, endVal, 0, 2);
			if (endVal % 1 !== 0) {
				theAnimation = new CountUp(target, 0, endVal, 2, 2);
			}
			theAnimation.start();
		});
	}

	/* check footer's offset value and change left-navigation's position */
	function checkFooterOffset() {
        if($('.sticky-left-nav').length > 0) {
            if ($('.sticky-left-nav').offset().top + $('.sticky-left-nav').height() >= $('footer').offset().top - 10)
            {
                $('.sticky-left-nav').addClass('bottom-menu').removeClass('top-menu');
            }
    
            if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
                $('.sticky-left-nav').addClass('top-menu').removeClass('bottom-menu');
            }
        }         
	}

	if ($(".home_promo_banner").length) {
		var waypoint1 = new Waypoint({
			element: document.getElementsByClassName('home_promo_banner'),
			handler: function () {
				$("header .container > .navbar-header,.container > .header-menu").toggleClass('hidden-xs hidden-sm hidden-md hidden-lg');
				$("header .container").toggleClass('mt45');
			}
		});
	}
	//END
});

	
/* ------------- Path Name checking for user-icon start ---------------*/
var pathName = window.location.pathname.toLowerCase();
var pageUrl = 'others';
// if (pathName === '/content/infosys-web/en.html' || pathName === '/' || pathName === '/jp' || pathName === '/jp/' || pathName === '/cn' || pathName === '/cn/' || pathName === '/mx' || pathName === '/mx/' || pathName === '/de' || pathName === '/de/') {
// 	pageUrl = 'home';
// }
/* ------------- Path Name checking for user-icon end ---------------*/


$("input[name='iki']:checked").val();

$(document).on('click','#btn-search',function(){
    document.querySelector('.main-wrap').classList.add('main-wrap--hide');
    $('body').css('overflow-y', 'hidden');
    $('.progressbar, .hero-list').css('display', 'none');
    $('body').find('.menu-bg').css('display', 'none');
    $('body').find('.burger').css('display', 'none');
    $('.search__color').find('.search').css('width', '100%');
    document.querySelector('.search').classList.add('search--open');
    $('.burger-search-wrapper.navbar-fixed-top').css('z-index', '0'); // For hiding burger text when open search
    $('.navbar.navbar-default.navbar-fixed-top').css('z-index', '2'); // For showing header text when open search
    $('.user-icon').css({ 'opacity': '0', 'z-index': '0' });
    setTimeout(function() {
        document.querySelector('.search .search__input').focus();
    }, 500);
})
$(document).on('click','#btn-search-close',function(){
    document.querySelector('.main-wrap').classList.remove('main-wrap--hide');
    $('body').css('overflow-y', 'scroll');
    $('.progressbar, .hero-list').css('display', 'block');
    $('body').find('.menu-bg').css('display', 'block');
    $('body').find('.burger').css('display', 'block');
    $('.search__color').find('.search').css('width', 'auto');
    document.querySelector('.search').classList.remove('search--open');
    $('.navbar.navbar-default.navbar-fixed-top, .burger-search-wrapper.navbar-fixed-top').css('z-index', '2'); // For Showing header and burger text when close search
    if((pageUrl == "home" && $(window).scrollTop() != 0) || (pageUrl != "home" && $(window).scrollTop() != 0)) {
        $('.user-icon').css({ 'opacity': '0', 'z-index': '0' });
    } else {
        $('.user-icon').css({ 'opacity': '1', 'z-index': '9999' });
    }
    document.querySelector('.search .search__input').blur();
    document.querySelector('.search .search__input').value = '';
})

$(document).on('keyup', function(ev) {
    if (ev.keyCode == 27) {
        document.querySelector('.main-wrap').classList.remove('main-wrap--hide');
        $('body').css('overflow-y', 'scroll');
        $('.progressbar, .hero-list').css('display', 'block');
        $('body').find('.menu-bg').css('display', 'block');
        $('body').find('.burger').css('display', 'block');
        $('.search__color').find('.search').css('width', 'auto');
        document.querySelector('.search').classList.remove('search--open');
        $('.navbar.navbar-default.navbar-fixed-top, .burger-search-wrapper.navbar-fixed-top').css('z-index', '2'); // For Showing header and burger text when close search
        if((pageUrl == "home" && $(window).scrollTop() != 0) || (pageUrl != "home" && $(window).scrollTop() != 0)) {
            $('.user-icon').css({ 'opacity': '0', 'z-index': '0' });
        } else {
            $('.user-icon').css({ 'opacity': '1', 'z-index': '9999' });
        }
        document.querySelector('.search .search__input').blur();
        document.querySelector('.search .search__input').value = '';
    }
});

$(document).ready(function () {
    var currentURL=window.location.href;
    if(currentURL.includes("iki")){
        $("#iki").show();
    }
    else{
		$("#iki").remove();
    }

});
/**********************
	Header js
/**********************/
$(document).ready(function () {

$("ol.rmv-breadcrum > li:last-child > a").attr("aria-current","page");
	"use strict";
	/* ------------- Social Share ---------------*/
	$(document).on("click", ".trigger-share", function () {//alert("1");
		$('ul.social-share > li').toggleClass('slideout social-share-icon');
		//$('.hero-list1 .trigger-share .social-share > li').css('opacity','1');
	});

	if ($(window).width() <= 767) {
         if($('#hero_slider_carousel').length) { $('.hero-list').hide();} 
		 }
		 
$(document).on("click", ".trigger-share", function () {
$('.trigger-share a').attr('aria-expanded', function(index, attr){
       return attr == 'true' ? "false" : 'true';
   });
   $(".social-share > li").removeAttr("style");
 });   
	$(document).on("click", ".trigger-share-pr", function () {
		$(this).closest(".social-tag").find(".social-share-pr > li").toggleClass('slideout social-share-icon');
	});

	/* ------------- Below js for Mobile Navigation ---------------*/
             if ($(window).width() <= 1024) {
                $('.dropdown-toggle').click(function () {
                    $(".mega-dropdown-menu").toggleClass("open");
                    $(".mega-dropdown-menu").removeAttr('style');
                });

                if($(".breadcrumb ol>li.mega-dropdown").length > 1){$(".breadcrumb ol>li.mega-dropdown").hide();}$($(".breadcrumb ol>li.mega-dropdown").get().reverse()).each(function() {if($('> ul', this).index() == 1 ){ $(this).show();return false;}});
				}


});

/* ------------- Country Selection Part ---------------*/
$(document).on("click", ".select-country, .option-country > ul > li", function () {
    $(".option-country").toggleClass("open-country");
    if ($(".option-country").hasClass("open-country")) {
        $(".down-arrow").addClass("up-arrow").removeClass("down-arrow");
    } else {
        $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
    }
});
$(document).on('click', 'body', function (e) {
    if (!$(e.target).is('.select-country > a')) {
        $('.option-country.open-country').removeClass('open-country');
        $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
    }
});