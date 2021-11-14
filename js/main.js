
$(document).ready(function(){
  $('#stickyNav').fadeOut()

    // HOMEPAGE MULTIMEDIA CAROUSEL

    $('#homeMultimediaCarousel').slick({
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        responsive: [
           
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
         
        ]
      
      

    });


    
    // HOMEPAGE PHOTOSTODAY CAROUSEL

    $('#homePhotosTodayCarousel').slick({
        autoplay:true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:'<button class="text-light bg-transparent border-0 position-absolute top-50 start-0 translate-middle-y" style="z-index:1;"><i class="fi-xnslxl-chevron-solid"></i></button>',
        nextArrow:'<button class="text-light bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y" style="z-index:1;"><i class="fi-xnsrxl-chevron-solid"></i></button>',
      

    });

    // HOME BRANDS CAROUSEL
    $('#homeBrandsCarousel').slick({
      dots:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows:false,
      responsive: [
           
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
       
      ]
    
    

  });

    // SINGLE PAGE CAROUSEL

    $('#singlePageCarousel').slick({
        autoplay:true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        responsive: [
           
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
           
          ]
       
    });


  });



// STICKY NAVBAR
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#stickyNav').fadeIn();
  } else {
    $('#stickyNav').fadeOut();
  }
});
      