(function($) {


    'use strict';

    /* ==========================================================================
                     When document is ready, do
   ========================================================================== */
    $(document).ready(function() {

        // Owl Slider
        // Offical website: http://owlgraphic.com/owlcarousel/
        if (typeof $.fn.owlCarousel !== 'undefined') {


            
            // freelancer template
            var owl7 = $("#freelancer-works-carousel");
            var owl8 = $("#freelancer-clients");
            
            

             owl8.owlCarousel({
               items: 4,
               navigation : false,
               
            });
            

            /* ==============================================================================================================
                Since we're using different owl carousel configurations for different breakpoints, 
                we've decided against using CSS to re-style the nav icons and better leave it for Owl Carousel 
                to handle the responsiveness part
             ============================================================================================================== */

            if (viewportSize.getWidth() > 768) {

                // app testimonial carousel
                owl7.owlCarousel({
                    items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                    navigation: false, // Display "next" and "prev" buttons.
                    singleItem: true, // Display only one item
                    mouseDrag: false,
                    transitionStyle : "fade"
                });
            } else {
                // app testimonial carousel
                owl7.owlCarousel({
                    items: 1, // This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                    navigation: false, // Display "next" and "prev" buttons.
                    pagination: true, // no pagination
                    singleItem: true, // Display only one item
                    mouseDrag: false,
                    transitionStyle : "fade"
                });
            }

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
                    cfname: "Oops! This field is required.",
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


        /* ==========================================================================
           When the window is scrolled, do
           ========================================================================== */

        $(window).scroll(function() {



        });
    });

})(window.jQuery);

//non jQuery plugins below