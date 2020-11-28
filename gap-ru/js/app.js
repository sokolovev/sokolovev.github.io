$(".tab-content").not(":first").hide();
$(".program-tabs-top .tab").click(function() {
	$(".program-tabs-top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


function parallax(event){
  this.querySelectorAll('.invitation-parallax-img').forEach(pils => {
    let speed = pils.getAttribute('data-speed');
    pils.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000}px)`
  });
}
document.querySelector('#invitation').addEventListener('mousemove', parallax)

$('.acquaintance-slider').slick({
  slidesToShow: 1,
  arrows: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.acquaintance-slider-nav-arrow-left'),
  nextArrow: $('.acquaintance-slider-nav-arrow-right'),
  dots: true
});


$('.reviews-slider').on('init reInit afterChange', function (event, slick, currentSlide) {
  i = (currentSlide ? currentSlide : 0) + 1;
  if(i < 10){
    i = "0" + i;
  }
  if(slick.slideCount < 10){
    $('.reviews-count').text(i + '/0' + slick.slideCount);
  } else{
    $('.reviews-count').text(i + '/' + slick.slideCount);
  }
});


$('.reviews-slider').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 5,
  arrows: true,
  prevArrow: $('.reviews-arrow-left'),
  nextArrow: $('.reviews-arrow-right'),
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        centerPadding: '190px',
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        centerPadding: '120px',
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        centerPadding: '70px',
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        centerPadding: '30px',
      }
    }
  ]
});
 
$('.cases-slider').slick({
  centerMode: true,
  centerPadding: '15%',
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        centerPadding: '10%'
      }
    },
    {
      breakpoint: 900,
      settings: {
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 470,
      settings: {
        centerPadding: '15px'
      }    
    },
    {
      breakpoint: 420,
      settings: {
        centerPadding: '45px'
      }
    },
    {
      breakpoint: 376,
      settings: {
        centerPadding: '40px'
      }
    },
    {
      breakpoint: 330,
      settings: {
        centerPadding: '15px'
      }
    }
  ]
});

$("a[href*=#]").on("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
  scrollTop: $(anchor.attr('href')).offset().top
  }, 777);
  e.preventDefault();
  return false;
  });
  
$('.more').click(function() {
  if($(this).prev().hasClass("packages-tab-active")){
    $(this).prev().removeClass('packages-tab-active')
    $(this).text("ПОДРОБНЕЕ")
    $(this).removeClass('more-active')
  } else{
    $(this).prev().addClass('packages-tab-active')
    $(this).text("СВЕРНУТЬ")
    $(this).addClass('more-active')
  }
});

$('.header-nav').on("click", function() {
  $('.nav-menu-wrapper').removeClass('dn')
  $('.nav-menu-wrapper').addClass('db')
});
$('.nav-menu-close').on("click", function() {
  $('.nav-menu-wrapper').addClass('dn')
  $('.nav-menu-wrapper').removeClass('db')
});
$('.nav-menu-list a').on("click", function() {
  $('.nav-menu-wrapper').addClass('dn')
  $('.nav-menu-wrapper').removeClass('db')
});
$('.main-video-button-play').on("click", function() {
  $('.video-wrapper').removeClass('dn')
  $('.video video').get(0).play()
});

$('.video-wrapper .video img').on("click", function() {
  $('.video-wrapper').addClass('dn')
  $('.video video').get(0).pause()
});