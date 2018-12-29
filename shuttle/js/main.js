 
      $(function()
      {
        $('#f1').change(function() {
              var field = $('#f1:checked').val();
              console.log(field);
              $('.vilet').attr('disabled', 'disabled');
              $('.vilet').removeAttr('disabled');
              $('.dis').removeClass('disabled');
          });
      });


      $('.on').change(function(){
          if($(this).is(":checked")) {
              $('#bron').addClass('black');
              $('#bron').removeClass('white');
          } else {
              $('#bron').removeClass('black');
              $('#bron').addClass('white');
          }
      });

       $('.off').change(function(){
          if($(this).is(":checked")) {
              $('#bron').addClass('white');
              $('#bron').removeClass('black');
          } else {
              $('#bron').removeClass('black');
              $('#bron').addClass('white');
          }
      });



       $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

$('.next').click(function(e) {
    e.preventDefault();
    $('.white .block').addClass('hd');
    $('.black .block').addClass('hd');
    $('.white .block001').addClass('active');
    $('.black .block001').addClass('active');
});


$('.form001').submit(function(event) {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "send.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    
    $('.all').addClass('hd');
    $('.good').addClass('active');

  });
  return false;
});

  $(function()
{
  $('#f2').change(function() {
      var field = $('#f2:checked').val();
      console.log(field);
      $('.vilet').attr('disabled', 'disabled');
      $('.dis').addClass('disabled');
    });
});

$('.regular').slick({
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  slidesToShow: 3,
  focusOnSelect: true,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});




$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  // focusOnSelect: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: false,
        // dots: false,
        focusOnSelect: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        // dots: false,
        focusOnSelect: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        // dots: false,
        focusOnSelect: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }

  ]
});

$('.viplabel1').click(function() {
  $('.on').prop('checked', false);
  $('.off').prop('checked', true);
  $('#bron').removeClass('black');
  $('#bron').addClass('white');
});

$('.viplabel2').click(function() {
  $('.on').prop('checked', true);
  $('.off').prop('checked', false);
  $('#bron').removeClass('white');
  $('#bron').addClass('black');
});

$('.languague-btn').on("click", function(){
  $('.droplang').toggleClass('droplang_active');
});

