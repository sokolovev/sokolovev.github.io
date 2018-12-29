$(document).ready(function(){
  $('.button-modal').on("click", function(){
    $('.overlay').show();
  });
  $('.popup-close').on("click", function(){
    $('.overlay').hide();
  });
});

$(document).ready(function(){
  var menu_btn = $('.header-menu');
  var menu = $('.menu');
  var menu_active = $('.menu-active');

  menu_btn.click(function(){
    menu.toggleClass('menu-active');
  });
  menu_active.click(function(){
    menu.toggleClass('menu-active');

  });
});
var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.4;  // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}
