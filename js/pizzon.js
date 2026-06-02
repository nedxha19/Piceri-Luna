
// ***** Preloader ***** //
$(window).on("load", function() {
    $('#preloader').delay(2500).fadeOut(500, function() {
        // Failsafe: force hidden after animation regardless of CSS overrides
        $(this).hide().css({ visibility: 'hidden', pointerEvents: 'none' });
    });
    // Hard fallback: if load event is slow, force hide after 6s
    setTimeout(function() {
        var $pre = $('#preloader');
        if ($pre.is(':visible')) {
            $pre.hide().css({ visibility: 'hidden', pointerEvents: 'none' });
        }
    }, 6000);
});

var w = 0;
$(function() {
    "use strict";

    $(document).ready(function(){

        // ***** Sticky Header ***** //
        $(window).scroll(function(){
            if ($(this).scrollTop() > 0) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });


        // ***** Menu Toggle Start ***** //
        $(".menu-toggle,.sidemenu-close").click(function(){
            $(".menu").slideToggle();
            $(".dropdown-content").slideUp(200);
            $(".opener").removeClass("active");
        });

        $(".opener").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".dropdown-content")
                    .slideUp(200);
            } else {
                $(".opener").removeClass("active");
                $(this).addClass("active");
                $(".dropdown-content").slideUp(200);
                $(this)
                    .siblings(".dropdown-content")
                    .slideDown(300);
                }
        });


        // ***** Search Header Start ***** //
        $(".icon-menu ul li.search > a, .search-form button.close, .search-overlay").on("click", function(){
            $(".search-popup").toggleClass("open");
            $(".search-input").focus();
        });
        

        // ***** Cart Header Start ***** //
        $(".icon-menu > ul > li.cart-slide > a, .cart-header .close, .cart-drawer .bg-overlay").on("click", function(){
            $(".cart-drawer").toggleClass("open");
        });

        
        // ***** Shop Sidebar ***** //
        $(".filter-btn a, .shop-header .close, .shop-sidebar .bg-overlay").on("click", function(){
            $(".shop-sidebar").toggleClass("open");
        });


        // ***** Container Spasing Start ***** //
        container_spacer();
        bannerround();
        jQuery('.left-padding, .right-padding').css('opacity', 1);
        

        $(window).resize(function(){
            /*----- Container Spasing Start -----*/
            container_spacer();
            /*----- Container Spasing End -----*/

            /*----- Main Div Top Padding Start -----*/
            bannerround();
            /*----- Main Div Top Padding End -----*/
        });


        // ***** Contact Form SMS Start ***** //
        $('.contactfrm').on('submit',function(e){
            e.preventDefault();
            $('.contactfrmmsg').slideDown('slow');
        });
        

        // ***** Tabing ***** //
        $('.tab-link li a').on('click', function(){
            var target = $(this).attr('data-tab');
            $('.tab-link li a').removeClass('active');
            $(this).addClass('active');
            $("#"+target).fadeIn(1200).siblings(".tab-panel").hide();
            return false;
        });


        // ***** Price Rang bar Start ***** //
        if ($(".range-slider").length > 0) {
            const settings={
                fill: '#fbb200',
                background: '#e4ded9'
            }

            const sliders = document.querySelectorAll('.range-slider');
            Array.prototype.forEach.call(sliders,(slider)=>{
                slider.querySelector('input').addEventListener('input', (event)=>{
                    slider.querySelector('span').innerHTML = event.target.value;
                    applyFill(event.target);
                });
                applyFill(slider.querySelector('input'));
            });

            function applyFill(slider) {
                const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
                const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
                slider.style.background = bg;
            }
        }


        // ***** Cart plus min Start ***** //
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
        

        // ***** Our Menu Slider Start ***** //
        if ($(".menu-slider").length > 0 && !$(".menu-slider[data-luna-dynamic]").length){
            $('.menu-slider').owlCarousel({
                loop:true,
                nav: true,
                dots: false,
                items: 4,
                margin: 40,
                // autoplay:true,
                smartSpeed: 900,
                autoplayTimeout:5000,
                autoplaySpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    1300: {
                        items: 4,
                    },
                    992: {
                        items: 3,
                    },
                    768: {
                        items: 2,
                    },
                    600: {
                        items: 2,
                        nav: false,
                        dots: true,
                    },
                }
            });
        }
        

        // ***** Testimonials Slider Start ***** //
        if ($(".testimonials-slider").length > 0){
            var svgPrev = '<span aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></span>';
            var svgNext = '<span aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>';

            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 4,
                margin: 28,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplaySpeed: 900,
                mouseDrag: true,
                touchDrag: true,
                pullDrag: true,
                freeDrag: false,
                navText: [svgPrev, svgNext],
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        margin: 16,
                    },
                    700: {
                        items: 2,
                        nav: false,
                        dots: true,
                        margin: 20,
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        dots: false,
                    },
                    1300: {
                        items: 4,
                        nav: true,
                        dots: false,
                    },
                }
            });
        }    
    
    });


    // ***** Container Spasing Start ***** //
    function container_spacer(){
        var win = jQuery(window).width();
        var con = jQuery('.container').width();
        var total = (win - con) / 2;

        jQuery('.left-padding').css('padding-left', total);
        jQuery('.right-padding').css('padding-right', total);
    }


    // ***** Slider Round ***** //
    function bannerround(){
        var bannerround = jQuery('.slider-round').width();
        if (bannerround) {
            jQuery('.slider-round').css('height', bannerround);
        }
    }
    
});















