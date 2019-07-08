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
    // $().mouseover(function () { 
    //   var a = this
    //   console.log(a);
    //   a.addClass('active');
    // });
var a = document.querySelectorAll('.block1-wrapper .block1-icons a img')
var b = document.querySelector('.block1-wrapper .block1-logo img')
var c = document.querySelector('.block1-wrapper .block1-tell')
for (i = 0; i<a.length; i++){
  a[i].addEventListener('mouseover', function(){
    this.classList.add('activeqwe1')
  })
  a[i].addEventListener('mouseleave', function(){
    this.classList.remove('activeqwe1')
  })
}
b.addEventListener('mouseover', function(){
  this.classList.add('activeqwe2')
})
b.addEventListener('mouseleave', function(){
  this.classList.remove('activeqwe2')
})
c.addEventListener('mouseover', function(){
  this.classList.add('activeqwe2')
})
c.addEventListener('mouseleave', function(){
  this.classList.remove('activeqwe2')
})