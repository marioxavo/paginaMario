(function($) {


    'use strict';

    /* ==========================================================================
                     When document is ready, do
   ========================================================================== */
    $(document).ready(function() {

        // Owl Slider
        // Offical website: http://owlgraphic.com/owlcarousel/
        if (typeof $.fn.owlCarousel !== 'undefined') {

            /* 
                Owl Carousel variable setting 
            */
            var owl2 = $("#recent-works");
            var owl3 = $("#testimonials-box");
            var owl4 = $("#app-testimonial-carousel");
            var owl5 = $("#twitter-carousel");
            
            // recent works 
            owl2.owlCarousel({
                items: 4, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                lazyLoad: true, // lazy load images
            });


            /* ==============================================================================================================
                Since we're using different owl carousel configurations for different breakpoints, 
                we've decided against using CSS to re-style the nav icons and better leave it for Owl Carousel 
                to handle the responsiveness part
             ============================================================================================================== */

            if (viewportSize.getWidth() > 768) {

                // testimonials box (featured testimonials)
                owl3.owlCarousel({
                    items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                    navigation: true, // Display "next" and "prev" buttons.
                    pagination: false, // no pagination
                    navigationText: [ // custom navigation text (instead of bullets). navigationText : false to disable arrows / bullets
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>"
                    ],
                    singleItem: true,
                });
            } else {

                // testimonials box (featured testimonials)
                owl3.owlCarousel({
                    items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                    navigation: false, // Display "next" and "prev" buttons.
                    pagination: true, // no pagination
                    singleItem: true,
                });

            }


            if (viewportSize.getWidth() > 768) {

                // app testimonial carousel
                owl4.owlCarousel({
                    items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                    navigation: true, // Display "next" and "prev" buttons.
                    pagination: false, // no pagination
                    navigationText: [ // custom navigation text (instead of bullets). navigationText : false to disable arrows / bullets
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>"
                    ],
                    singleItem: true, // Display only one item
                });
            } else {
                // app testimonial carousel
                owl4.owlCarousel({
                    items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                    navigation: false, // Display "next" and "prev" buttons.
                    pagination: true, // no pagination
                    singleItem: true, // Display only one item
                });
            }


            // twitter carousel (footer)
            owl5.owlCarousel({
                items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                singleItem: true, // Display only one item
            });

            /*
             *  Custom Owl Carousel Navigation Events
             *
             *   Trigger Owl Carousel specific events when clicking on next / prev buttons
             *
             *   @see  http://owlgraphic.com/owlcarousel/#customizing (Custom Events)
             */
            $(".next").on('click', function() {
                owl.trigger('owl.next');
            })
            $(".prev").on('click', function() {
                owl.trigger('owl.prev');
            })
        } // end


        // jQuery bxSlider
        // Official documentation: http://bxslider.com/

        if (typeof $.fn.bxSlider !== 'undefined') {

            $('.bxslider').bxSlider({
                mode: 'fade',
                auto: true,
                autoControls: false,
                pager: false,
                controls: false
            });
        } // end


        // jQuery Validate
        // Official documentation: http://jqueryvalidation.org/documentation/
        if (typeof $.fn.validate !== 'undefined') {

            /* Contact form validation */
            $('#contact-form').validate({
                rules: {
                    cfname: {
                        required: true,
                        minlength: 2
                    },
                    cfemail: {
                        required: true,
                        email: true
                    },

                    cfmessage: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    cfname: ">Oops! This field is required.",
                    cfemail: {
                        required: "Oops! This field is required.",
                        email: "Oops! This field is required."
                    },
                    cfmessage: "Oops! This field is required."
                }
            });
        } //end

        // prettyPhoto
        // Official documentation: http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/documentation
        if (typeof $.fn.prettyPhoto !== 'undefined') {

            $("a[data-gal^='prettyPhoto[pp_gal]']").prettyPhoto({
                slideshow: 5000,
                autoplay_slideshow: true,
                deeplinking: false
            });
            $("a[data-gal^='prettyPhoto']").prettyPhoto({
                slideshow: 5000,
                autoplay_slideshow: true,
                deeplinking: false
            });
        } //end

         new WOW().init();

        /* ==========================================================================
           When the window is scrolled, do
           ========================================================================== */

        $(window).scroll(function() {



        });
    });

})(window.jQuery);

//non jQuery plugins below