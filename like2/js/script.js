$(document).ready(function(){
  $('.test').slick({
    centerMode: true,
    slidesToShow: 3,
    infinite: true,
    speed: 300,
    arrow: true,
    prevArrow: '<div class="slider-arrow-left"><img src="img/Arrow-left.png"></div>',
    nextArrow: '<div class="slider-arrow-right"><img src="img/Arrow-right.png"></div>'
  });

});


$(".buy-menu__btn1").click(function () { 
  $(".buy-like").removeClass("none");
  $(".buy-massage").addClass("none");
  $(".buy-menu__line1").removeClass("none");
  $(".buy-menu__line2").addClass("none");
});
$(".buy-menu__btn2").click(function () { 
  $(".buy-massage").removeClass("none");
  $(".buy-like").addClass("none");
  $(".buy-menu__line2").removeClass("none");
  $(".buy-menu__line1").addClass("none");
});
