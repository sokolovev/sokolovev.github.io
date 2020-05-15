$(document).ready(function() {
    $('.reviews-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });

    $('.tab-head').click(function() {
        $(this).toggleClass('in').next().slideToggle();
        $('.tab-head').not(this).removeClass('in').next().slideUp();
    });
    $('.nav').click(function() {
        $('.nav-menu-wrapper').show()
    });
    $('.nav-menu-wrapper a').click(function() {
        $('.nav-menu-wrapper').hide()
    });

    $("a[href*=#]").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

    $('.main .button').click(function() {
        $(".popup-wpapper.promotion").addClass('df')
    });

    $('.plans-item1 .button').click(function() {
        $(".popup-wpapper.tariff1").addClass('df')
    });
    $('.plans-item2 .button').click(function() {
        $(".popup-wpapper.tariff2").addClass('df')
    });
    $('.plans-item3 .button').click(function() {
        $(".popup-wpapper.tariff3").addClass('df')
    });
    $('.plans-item4 .button').click(function() {
        $(".popup-wpapper.tariff4").addClass('df')
    });

    $('.faq .faq-left-card div img').click(function() {
        $(".popup-wpapper.call").addClass('df')
    });
    $('.nav-menu .button').click(function() {
        $(".popup-wpapper.call").addClass('df')
        $('.nav-menu-wrapper').hide()
    });
    $('.button-case1').click(function() {
        $(".case1-wpapper").addClass('df')
    });
    $('.button-case2').click(function() {
        $(".case2-wpapper").addClass('df')
    });
    $('.button-case3').click(function() {
        $(".case3-wpapper").addClass('df')
    });
    $('.steps .button').click(function() {
        $(".works-list-wrapper").addClass('df')
    });

    $('.popup-close').click(function() {
        $('.nav-menu-wrapper').hide()
        $(".popup-wpapper.promotion").removeClass('df')
        $(".popup-wpapper.tariff").removeClass('df')
        $(".popup-wpapper.call").removeClass('df')
        $(".case1-wpapper").removeClass('df')
        $(".case2-wpapper").removeClass('df')
        $(".case3-wpapper").removeClass('df')
        $(".works-list-wrapper").removeClass('df')
    });

});