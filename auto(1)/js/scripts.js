$(document).ready(function() {
  $('#fullpage').fullpage({
  anchors:['firstSection', 'secondSection', 'thirdSection'],
  // menu: '.main-nav ul',
  });

  $('#menuBtn').click(function () { 
    $('#mainNav').show();
  });
  $('#mainNav a').click(function () { 
    $('#mainNav').hide();
  });
  $('.popup-close').click(function () { 
    $('.block3-popup-wrapper').hide();
  });

  $('#popupFade1').click(function () { 
    $('#popUp1').show();
  });
  $('#popupFade2').click(function () { 
    $('#popUp2').show();
  });
  $('#popupFade3').click(function () { 
    $('#popUp3').show();
  });
  $('#popupFade4').click(function () { 
    $('#popUp4').show();
  });
});
