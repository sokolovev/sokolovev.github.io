
var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;
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

var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}


function timerLeft(year,month,day) {
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
            dateFinish = new Date(year,month,day),
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

    },1000)
}

timerLeft(2019, 10, 01);
// год, месяц, число
// Указывать месяц на 1 меньше чем нужно





jQuery(function($){
  $("#phone1").mask("+7 (999) 99-99-999");
  $("#phone2").mask("+7 (999) 99-99-999");
  // $("#phone3").mask("+7 (999) 99-99-999");
});
$(document).ready(function() {

	//E-mail Ajax Send
	$("#form-action1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-button").hide();
			$(".success").show();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$("#form-action2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-button").hide();
			$(".success").show();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
