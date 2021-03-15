$('.cards').slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});