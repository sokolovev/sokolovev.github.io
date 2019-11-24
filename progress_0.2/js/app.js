$(document).ready(function () {
  $('.works-slider').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow: $('.works-slider-arrows-left'),
    nextArrow: $('.works-slider-arrows-right'),
    responsive: [{
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

  $('.tech-slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    i = (currentSlide ? currentSlide : 0) + 1;
    $('.bignumber').text(i);
    $('.smallnumber').text('/ ' + slick.slideCount);
  });
  $('.tech-slider').slick({
    slidesToShow: 1,
    arrows: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.tech-preslider-arrows-left'),
    nextArrow: $('.tech-preslider-arrows-right'),
  });
  $('.newslider-img').slick({
    slidesToShow: 1,
    cennterMode: true,
    arrows: true,
    cssEase: 'linear',
    prevArrow: $('.newslider-nav-arrows-left'),
    nextArrow: $('.newslider-nav-arrows-right'),
  });


  $(".fadeimg").click(function () {
    var img = $(this); 
    var src = img.attr('src'); 
    $("body").append("<div class='popup'>" +
      "<div class='popup_bg'></div>" + 
      "<img src='" + src + "' class='popup_img' />" +
      "</div>");
    $(".popup").fadeIn(0); 
    $(".popup_bg").click(function () {
      $(".popup").fadeOut(0); 
      setTimeout(function () {
        $(".popup").remove(); 
      }, 0);
    });
    });
});