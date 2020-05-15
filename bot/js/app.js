$(document).ready(function() {
    $('.experts-slider').slick({
        infinite: true,
        speed: 700,
        showSlide: 1,
        prevArrow: $('.experts-slider-arrows .arrow-left'),
        nextArrow: $('.experts-slider-arrows .arrow-right')
    });
    $('.video-reviews-slider').slick({
        infinite: true,
        speed: 700,
        showSlide: 1,
        prevArrow: $('.video-reviews-arrows .arrow-left'),
        nextArrow: $('.video-reviews-arrows .arrow-right')
    });


    $("a[href*=#]").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });


    // var options = [
    //   "img/sert01.jpg",
    //   "img/sert02.jpg",
    // ];

    // var current = 0;

    // var label = document.querySelector('.sertmodal-img');

    // var arrow_left = document.querySelector('.sertmodal-arrow-left');
    // var arrow_right = document.querySelector('.sertmodal-arrow-right');

    // arrow_left.addEventListener('click', moveNext);

    // arrow_right.addEventListener('click', moveNext);

    // function moveNext() {
    //   console.log(label.attributes.src);

    // if (current < options.length - 1) {
    //   current++;
    //   label.setAttribute("src", options[current]);
    // } else {
    //   current = 0;
    //   label.setAttribute("src", options[current]);
    // }
    // }
});


var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}


function timerLeft(year, month, day) {
    setInterval(function() {
        var daysLeft = document.getElementById('timer-v-days'),
            daysText = document.getElementById('timer-v-days__text'),
            hoursLeft = document.getElementById('timer-v-hours'),
            hoursText = document.getElementById('timer-v-hours__text'),
            minutesLeft = document.getElementById('timer-v-minutes'),
            minutesText = document.getElementById('timer-v-minutes__text'),
            secLeft = document.getElementById('timer-v-seconds'),
            secText = document.getElementById('timer-v-seconds__text'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year, month, day),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            secToDays = Math.floor(sec / 86400),
            hoursNumber = Math.floor(secToDays / 24),
            minutesNumber = Math.floor(secToMinutes / 60),
            secondsNumber = secToMinutes % 60;
        daysText.innerHTML = decOfNum(secToDays, ['день', 'дня', 'дней']);
        hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']);
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']);
        secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд']);
        daysLeft.innerHTML = secToDays;
        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secLeft.innerHTML = secondsNumber;
    }, 1000)
};

timerLeft(2020, 04, 21);
// год, месяц, число
// Указывать месяц на 1 меньше чем нужно