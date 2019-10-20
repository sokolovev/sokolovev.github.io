
    $(document).ready(function(){
        // $('#banner .data-test').hide();
        $('#banner .data-test.active').show();
        var numberStep = 1;
        $("#main-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        $("input[name='phone']").mask("+7(999) 999-99-99");

        $('.banner-form .button').click(function () {
            var DataStep = $('.data-test .active')
        });

        $('.select').each(function() {
            var $this = $(this),
                selectOption = $this.find('option'),
                selectOptionLength = selectOption.length,
                selectedOption = selectOption.filter(':selected'),
                dur = 500;

            $this.hide();
            $this.wrap('<div class="select"></div>');
            $('<div>', {
                class: 'select__gap',
                text: $this.attr("title")
            }).insertAfter($this);

            var selectGap = $this.next('.select__gap'),
                caret = selectGap.find('.data-test');
            $('<ul>', {
                class: 'select__list',
                width: document.getElementById('questions-1').offsetWidth
            }).insertAfter(selectGap);


            var selectList = selectGap.next('.select__list');
            // Add li - option items
            for (var i = 0; i < selectOptionLength; i++) {
                $('<li>', {
                    class: 'select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                    .attr('data-value', selectOption.eq(i).val())
                    .appendTo(selectList);
            }
            var selectItem = selectList.find('li');

            selectList.slideUp(0);
            selectGap.on('click', function() {
                if (!$(this).hasClass('on')) {
                    $(this).addClass('on');
                    selectList.slideDown(dur);

                    selectItem.on('click', function() {
                        var chooseItem = $(this).attr('data-value');

                        $("option[value="+chooseItem+"]").parent().find('option').removeAttr("selected");

                        $("option[value="+chooseItem+"]").attr("selected", "selected");

                        $('select').val(chooseItem).selected = true;
                        selectGap.text($(this).find('span').text());


                        selectList.slideUp(dur);
                        selectGap.removeClass('on');
                    });

                } else {
                    $(this).removeClass('on');
                    selectList.slideUp(dur);
                }
            });
        });

        $('.fa-sync-alt').click(function () {
            
        });

        $('.next-test').click(function(event){
            event.preventDefault();
            var block = $('.data-test:visible');


            if (block.find('option:selected').attr('data-stepplus')){
                numberStep = block.find('option:selected').attr('data-stepplus');
                $('.data-test').hide();
                $('#questions-'+numberStep).show();
            } else ++numberStep;

            if (!document.getElementById('questions-'+numberStep)){
                $('.data-test, .next-test').hide();
                $('#last-test').show();
                $('.fa-sync-alt').hide();
            } else{
                $('.data-test').hide();
                $('#questions-'+numberStep).show();
            }

        });

        $('.next-ok').click(function (event) {
            event.preventDefault();
            $('.next-ok, .data-test').hide();
            $('#last-form').show();
        });

        $("#question-block").submit(function(event){
            event.preventDefault();
        });

        $( ".next-last" ).click(function(event) {
            // event.preventDefault();
            var StepForm = 1;
            $('body').find('.error').remove();
            $(this).parent().find('input').each(function(){
                if ($(this).hasClass('required') && !this.value){
                    StepForm = 0;
                    $(this).parent().parent().after('<p class="error">Заполните поля !</p>');
                    return false;
                }
            });
            if (StepForm) {
                $('body').find('.error').remove();
                $.ajax({
                    url: 'formblock.php',
                    type: 'POST',
                    data: $("#question-block").serialize(),
                    success: function (response) {
                        $('.data-test').hide();
                        $('#send-ok').show();
                    },
                    error: function (response) {
                        alert('Error');
                    }
                })
            }
        });

        $('#question-block .fa-sync-alt').click(function () {
            $('.data-test').hide();
            $('#questions-1').show();
        })

        $(".form_send").click(function(event){
            var StepForm = 1;
            event.preventDefault();
            $(this).parent().parent().parent().find('.error').remove();
            $(this).parent().parent().find('input').each(function(){
                    if ($(this).hasClass('required') && this.value == ''){
                        StepForm = 0;
                        $(this).parent().parent().after('<p class="error">Заполните поля !</p>');
                        return false;
                    }
                });

                if (StepForm){
                    $.ajax({
                        url: 'order_form.php',
                        type: 'POST',
                        data: $(this).parent().parent().serialize(),
                        success: function (response) {
                            $('.form-modal').modal('hide');
                            $('#order_ok').modal('show');
                        },
                        error: function (response) {
                            alert('ERROR')
                        }
                    })
                }
            });

        $(".form_no_modal").click(function(event) {
            var StepForm = 1;
            event.preventDefault();
            $(this).parent().parent().find('.error').remove();
            $(this).parent().parent().find('input').each(function(){
                if ($(this).hasClass('required') && this.value == ''){
                    StepForm = 0;
                    return false;
                }
            });

            if (StepForm) {
                $.ajax({
                    url: 'order_form.php',
                    type: 'POST',
                    data: $(this).parent().parent().serialize(),
                    success: function (response) {
                        $('#order_ok').modal('show');

                    },
                    error: function (response) {
                        alert('ERROR')
                    }
                })
            } else {
                $(this).after('<p class="error">Заполните поля !</p>');
            }
        });

        $(".footer_form_send").click(function(event) {
            var StepForm = 1;
            event.preventDefault();
            $(this).parent().find('.error').remove();
            $(this).parent().parent().find('input').each(function(){
                if ($(this).hasClass('required') && this.value == ''){
                    StepForm = 0;
                    return false;
                }
            });

            if (StepForm) {
                $.ajax({
                    url: 'order_form.php',
                    type: 'POST',
                    data: $(this).parent().serialize(),
                    success: function (response) {
                        $('#order_ok').modal('show');

                    },
                    error: function (response) {
                        alert('ERROR')
                    }
                })
            } else {
                $(this).before('<p class="error">Заполните поля !</p>');
            }
        });
    });


