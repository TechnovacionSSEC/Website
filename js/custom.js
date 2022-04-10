
(function($) {
  
    // 'use strict';
    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    // Hero Slider
   
    // Back to Top
    if ( $( '.back-to-top' ).length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        });
    }

    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 1500;
        function hidePreloader() {
        var preloader = $('.neon-loader');
        preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
        });


        $(document).ready(function() {
  
            setTimeout(function() {
              $('#ctn-preloader').addClass('loaded');
              // Una vez haya terminado el preloader aparezca el scroll
              $('body').removeClass('no-scroll-y');
          
              if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(1000).queue(function() {
                  $(this).remove();
                });
              }
            }, 2000);
            
          }); 
})(jQuery);