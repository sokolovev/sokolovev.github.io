$(document).ready(function () {
  var clock;
  clock = $(".clock").FlipClock({
    clockFace : "DailyCounter",
    language : "ru",
    autoStart : false,
    callbacks : {
      stop : function() {
        $('.massage').html('Время прошло');
      }
    }
  });

  var dt = "May 21 2019 20:22:48";
  var first = new Date(dt);
  var last = Date.now();
  var remaining = first - last;
  remaining /=1000;

  clock.setTime(remaining);
  clock.setCountdown(true);
  clock.start(); 

  var btn = $('.content-text__button'),
      modal = $('.wrapper'),
      modalb = $('.modal')

  btn.click(function () { 
    modal.addClass('active');
  });
  modalb.click(function (event) { 
    event.stopPropagation();
  });
  modal.click(function () { 
    modal.removeClass('active');
  });


});

