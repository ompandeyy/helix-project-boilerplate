// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './scripts.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');


import('./burger-menu.js')
import('./clientlib-base.js')

// add more delayed functionality here
function loadOwlSlider() {
	"use strict";
	
    // slider list carousel
	var slider_length = $("#slider_list_carousel").find('.item').length;
	//alert(slider_length);		
	$("#slider_list_carousel").owlCarousel({
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: slider_length > 1 ? true : false,
				nav: slider_length > 1 ? true : false,
				touchDrag: slider_length > 1 ? true : false,
				mouseDrag: slider_length > 1 ? true : false,
				loop: slider_length > 1 ? true : false
			},
			600: {
				items: 2,
				dots: slider_length > 1 ? true : false,
				nav: slider_length > 1 ? true : false,
				touchDrag: slider_length > 1 ? true : false,
				mouseDrag: slider_length > 1 ? true : false,
				loop: slider_length > 1 ? true : false
			},
			768: {
				items: 3,
				dots: slider_length > 3 ? true : false,
				nav: slider_length > 3 ? true : false,
				touchDrag: slider_length > 3 ? true : false,
				mouseDrag: slider_length > 3 ? true : false,
				loop: slider_length > 3 ? true : false
			},
			1025: {
				items: 4,
				dots: slider_length > 4 ? false : false,
				nav: slider_length > 4 ? true : false,
				touchDrag: slider_length > 4 ? true : false,
				mouseDrag: slider_length > 4 ? true : false,
				loop: slider_length > 4 ? true : false
			}
		}
	});


    //hero banner Slider
    var hero_slider_length = $("#hero_slider_carousel").find('.item').length;
    //alert(hero_slider_length);		
    $("#hero_slider_carousel").owlCarousel({
        dots: hero_slider_length > 1 ? true : false,
        nav: hero_slider_length > 1 ? false : false,
        touchDrag: hero_slider_length > 1 ? true : false,
        mouseDrag: hero_slider_length > 1 ? true : false,
        loop: hero_slider_length > 1 ? true : false,
        autoplay: hero_slider_length > 1 ? 3000 : false,
        autoplayHoverPause: hero_slider_length > 1 ? true : false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}
loadOwlSlider()