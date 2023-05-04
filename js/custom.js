$(function(){
  
  // property
  var containerEl = document.querySelector('.property_main');

  var mixer = mixitup(containerEl);
// about
new VenoBox({
  selector: ".my-link"
});

   //testimonial
   $('.test_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',

  });


   //banner_slider
//    $('.banner_slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 3000,
//     speed:2500,
//     arrows:false,
//     autoplay: true,
//     fade:true,
//     dots: true,
//     fade:true,
    
// });




// new WOW().init();

    // counterup
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1500,
    // });

    // new WOW().init();


    //project 
    // $('.project_main').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplaySpeed: 1500,
    //     speed:1500,
    //     arrows: false,
    //     responsive: [
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 922,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 1200,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       }

    //     ]
    // });

// brand part

    //  $('.brand_main').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     arrows: false,
    //     responsive: [
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 922,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //       {
    //         breakpoint: 1200,
    //         settings: {
    //           slidesToShow: 4,
    //         }
    //       }

    //     ]
    //   });

      //banner_sun 
  //   $('.banner3_slider').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     speed:1500,
  //     autoplaySpeed: 1500,
  //     autoplay: true,
  //     arrows: false,
  // });
    // // blog 
    // $('.blog_main').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     arrows: false,
       

    //   });


      // bact_to_top

      // $('.bact_to_top'). click (function(){
      //   $('html, body'). animate ({scrollTop:0}, 1000)
      // });

      // $(window).scroll(function(){
      //   var scrolling = $(this). scrollTop();
      //   if(scrolling > 200){
      //     $('.bact_to_top').fadeIn(500);
      //   }
      //   else{
      //     $('.bact_to_top').fadeOut(500);
      //   }
      //   if(scrolling > 200){
      //     $('.nav_main').addClass('background');
      //   }
      //   else{
      //     $('.nav_main').removeClass('background');
      //   }

      // });

});