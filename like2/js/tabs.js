$(document).ready(function(){
  $('.tab-name').click(function (){
    $(this).toggleClass('in').next().slideToggle();
    $('.tab-name').not(this).removeClass('in').next().slideUp();
  });

});