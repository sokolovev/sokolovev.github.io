$(document).ready(function () {
  $('.works-slider').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow: $('.works-slider-arrows-left'),
    nextArrow: $('.works-slider-arrows-right'),
    responsive: [{
        breakpoint: 1146,
        settings: {
          centerMode: true,
          centerPadding: '300px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 946,
        settings: {
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
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


  $('.newslider-img1').on('init reInit afterChange', function (event, slick, currentSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    i = (currentSlide ? currentSlide : 0) + 1;
    $('.newslider-nav-counter-blue1').text(i);
    $('.newslider-nav-counter-gray1').text('/ ' + slick.slideCount);
  });
  $('.newslider-img1').slick({
    slidesToShow: 1,
    cennterMode: true,
    arrows: true,
    cssEase: 'linear',
    prevArrow: $('.newslider-nav-arrows-left'),
    nextArrow: $('.newslider-nav-arrows-right'),
  });


  $('.newslider-img2').on('init reInit afterChange', function (event, slick, currentSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    i = (currentSlide ? currentSlide : 0) + 1;
    $('.newslider-nav-counter-blue2').text(i);
    $('.newslider-nav-counter-gray2').text('/ ' + slick.slideCount);
  });
  $('.newslider-img2').slick({
    slidesToShow: 1,
    cennterMode: true,
    arrows: true,
    cssEase: 'linear',
    prevArrow: $('.newslider-nav-arrows-left2'),
    nextArrow: $('.newslider-nav-arrows-right2'),
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
  $("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
    });

  $('.requestcall').on("click", function() {
    $('.callmodal-wrapper').removeClass('dn')
    $('.callmodal-wrapper').addClass('df')
  });
  $('.callmodal-x').on("click", function() {
    $('.callmodal-wrapper').addClass('dn')
    $('.callmodal-wrapper').removeClass('df')
  });
  $(".maskphone").mask("+7 (999) 999-99-99");


  $('.sertmodal-active').on("click", function() {
    $('.sertmodal-wrapper').removeClass('dn')
    $('.sertmodal-wrapper').addClass('df')
  });
  $('.sertmodal-nav-x').on("click", function() {
    $('.sertmodal-wrapper').addClass('dn')
    $('.sertmodal-wrapper').removeClass('df')
  });
  $('.header-logo-mobile-menu').on("click", function() {
    $('.mobile-menu ul').toggleClass('df')
    $('.mobile-menu ul').toggleClass('h200')
    $('.mobile-menu').toggleClass('df')
  });
  $('.mobile-menu ul a').on("click", function() {
    $('.mobile-menu ul').toggleClass('df')
    $('.mobile-menu ul').toggleClass('h200')
    $('.mobile-menu').toggleClass('df')
  });

  
});

var options = [
  "img/sert01.jpg",
  "img/sert02.jpg",
];

var current = 0;

var label = document.querySelector('.sertmodal-img');

var arrow_left = document.querySelector('.sertmodal-arrow-left');
var arrow_right = document.querySelector('.sertmodal-arrow-right');

arrow_left.addEventListener('click', moveNext);

arrow_right.addEventListener('click', moveNext);

function moveNext() {
  console.log(label.attributes.src);
  
if (current < options.length - 1) {
  current++;
  label.setAttribute("src", options[current]);
} else {
  current = 0;
  label.setAttribute("src", options[current]);
}
}