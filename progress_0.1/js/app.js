$(document).ready(function(){
  $('.works-slider').slick({
  slidesToShow: 4,
  arrows: true,
  prevArrow: $('.works-slider-arrows-left'),
  nextArrow: $('.works-slider-arrows-right'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
      }
    }
  ]
  });
  $('.tech-slider').slick({
  slidesToShow: 1,
  arrows: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.tech-preslider-arrows-left'),
  nextArrow: $('.tech-preslider-arrows-right')
  });
});