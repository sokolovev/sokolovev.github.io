
$(document).ready(function() {

  $( ".selectmenu" ).selectmenu();

  $('.mediPlayer').mediaPlayer();

  $('.open-menu,.close-nav-button,nav li a').click(function(){
    $('.menu-navigation').toggle();
  });


  $('nav li a[href*="#"],a.jumpup[href*="#"]').on('click', function (e) {
    e.preventDefault();
  
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600, 'linear');
  });

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('#float-nav').addClass("menu_fixed");
    }
    else{
        $('#float-nav').removeClass("menu_fixed");
    }
});
$(function () {
  $('.acc-header').click(function() {
    $(this).toggleClass('in').next().slideToggle();
    $('.acc-header').not(this).removeClass('in').next().slideUp();
  });
  $('.acc-sect2').hover(function () { 
    $('.acc-header1').addClass('border-bottom-0');
  });
  $('.acc-sect2').mouseleave(function () { 
    $('.acc-header1').removeClass('border-bottom-0');
  });
  $('.acc-sect3').hover(function () { 
    $('.acc-header2').addClass('border-bottom-0');
  });
  $('.acc-sect3').mouseleave(function () { 
    $('.acc-header2').removeClass('border-bottom-0');
  });
  $('.acc-sect4').hover(function () { 
    $('.acc-header3').addClass('border-bottom-0');
  });
  $('.acc-sect4').mouseleave(function () { 
    $('.acc-header3').removeClass('border-bottom-0');
  });
});
