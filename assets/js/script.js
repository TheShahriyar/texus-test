(function($) {
  "use strict";

  //when dom is ready
  $(document).ready(function() {

    // on scroll Navbar Fixed and back to top show
    // $(window).on('scroll', function() {
    //   if($(window).width() > 600){
    //     if ($(window).scrollTop() > 600) {
    //         $('#header').addClass('navbar-fixed-top');
    //         $('#back-to-top').addClass('reveal');
    //     } else {
    //         $('#header').removeClass('navbar-fixed-top');
    //         $('#back-to-top').removeClass('reveal');
    //     }
    //   }
    // });


    var swiper = new Swiper(".banner-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper2 = new Swiper(".gallerySlider", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


        




  });
  //dom ready end


})(jQuery);