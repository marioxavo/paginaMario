 (function($) {


 	'use strict';



 	/* ==========================================================================
   		Return viewport size (width / height)
   		@see https://github.com/tysonmatanich/viewportSize
   ========================================================================== */

 	window.viewportSize = {};
 	window.viewportSize.getWidth = function() {
 		return getSize("Width");
 	};

 	var getSize = function(Name) {
 		var size;
 		var name = Name.toLowerCase();
 		var document = window.document;
 		var documentElement = document.documentElement;
 		if (window["inner" + Name] === undefined) {
 			// IE6 & IE7 don't have window.innerWidth or innerHeight
 			size = documentElement["client" + Name];
 		} else if (window["inner" + Name] != documentElement["client" + Name]) {
 			// WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy
 			// Insert markup to test if a media query will match document.doumentElement["client" + Name]
 			var bodyElement = document.createElement("body");
 			bodyElement.id = "vpw-test-b";
 			bodyElement.style.cssText = "overflow:scroll";
 			var divElement = document.createElement("div");
 			divElement.id = "vpw-test-d";
 			divElement.style.cssText = "position:absolute;top:-1000px";
 			// Getting specific on the CSS selector so it won't get overridden easily
 			divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
 			bodyElement.appendChild(divElement);
 			documentElement.insertBefore(bodyElement, document.head);
 			if (divElement["offset" + Name] == 7) {
 				// Media query matches document.documentElement["client" + Name]
 				size = documentElement["client" + Name];
 			} else {
 				// Media query didn't match, use window["inner" + Name]
 				size = window["inner" + Name];
 			}
 			// Cleanup
 			documentElement.removeChild(bodyElement);
 		} else {
 			// Default to use window["inner" + Name]
 			size = window["inner" + Name];
 		}
 		return size;
 	};
 	/* ==========================================================================
   		ieViewportFix - fixes viewport problem in IE 10 SnapMode and IE Mobile 10
   ========================================================================== */

 	function ieViewportFix() {

 			var msViewportStyle = document.createElement("style");

 			msViewportStyle.appendChild(
 				document.createTextNode(
 					"@-ms-viewport { width: device-width; }"
 				)
 			);
 			if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

 				msViewportStyle.appendChild(
 					document.createTextNode(
 						"@-ms-viewport { width: auto !important; }"
 					)
 				);
 			}

 			document.getElementsByTagName("head")[0].
 			appendChild(msViewportStyle);
 		}
 		/*============================================================================================
  	 Function for adding / removing the CSS classes required for making the navbar shrink on scroll
   ================================================================================================== */

 	function initNavbar() {

 		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
 			shrinkOn = 1,
 			header = document.querySelector("header");
 		//expandNav = document.querySelector("#header-wrap .header");
 		if (distanceY > shrinkOn) {
 			classie.add(header, "smaller");
 			//classie.add(expandNav, "expandedNav");
 		} else {
 			if (classie.has(header, "smaller")) {
 				classie.remove(header, "smaller");
 				//classie.remove(expandNav, "expandedNav");
 			}
 		}

 	}

 	/* ==========================================================================
 			exists - Check if an element exists
 	========================================================================== */

 	function exists(e) {
 		return $(e).length > 0;
 	}

 	/* ==========================================================================
   		isTouchDevice - return true if it is a touch device
   	========================================================================== */

 	function isTouchDevice() {
 		return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
 	}

 	/* ==========================================================================
        Show menu links on hover 
     ========================================================================== */

 	 function showMenuOnHover() {


    //only expand menu on hover on screens bigger than 640px  
    if (viewportSize.getWidth() > 640) {
      $('#nav-expander').on('mouseenter', function() {
        $('.main-navigation').addClass('visible');
      });
      $('.home #header-wrap').on('mouseleave', function() {
        $('.main-navigation').removeClass('visible');
      });
    } else if (viewportSize.getWidth() <= 640) {
      //only expand menu on click on screens smaller than 640px 
      $('#nav-expander').on('click', function(e) {
        $('.offset-canvas-mobile').addClass('open-canvas');
        e.preventDefault();
      });
      $('.mobile-nav-close-btn').on('click', function() {
        $('.offset-canvas-mobile').removeClass('open-canvas');
      });
      $('.mobile-nav-holder a').on('click', function() {
        $('.offset-canvas-mobile').removeClass('open-canvas');
      });
    }
  }

 	/* ==========================================================================
        Smooth scrolling
     ========================================================================== */

 	function smoothScroll() {

 		$('a[href*=#]:not([href=#])').on('click', function() {

 			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
 				var target = $(this.hash);
 				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
 				if (target.length) {
 					$('html,body').animate({
 						scrollTop: target.offset().top
 					}, 1000);
 					return false;
 				}
 			}

 		});
 	}


 
 	/* ==========================================================================
        Remove anchors
     	========================================================================== */

 	function removeAnchors() {
 			$('#nav-expander, .arrow, .load-more, .faq-question a').on('click', function(e) {
 				e.preventDefault();
 			});
 		}
 		

 	/* ==========================================================================
 	                When document is ready, do
 	========================================================================== */
 	jQuery(document).ready(function($) {

 		ieViewportFix();
 		showMenuOnHover();
 		removeAnchors();
 		smoothScroll();
 	});

 	jQuery(window).scroll(function($) {

 		initNavbar();

 	});


 })(window.jQuery);
 // non jQuery functions go below