window.onload = function() {
    $(function () {
        // маски телефонов
        $("input[type='tel']").mask("+7 (999) 999-9999");

        $(".box").on("mousedown", function (e) {
            const gate = $(this).children("div");
            $(this).children(".locker").hide();
            for (var i = 0; i < gate.length; i++) {
                if ($(gate[i]).hasClass("ovrl-left")) {
                    $(gate[i]).toggleClass("move-right");
                }
                if ($(gate[i]).hasClass("ovrl-right")) {
                    $(gate[i]).toggleClass("move-left");
                }
            }
            // removes the click event after reveling the image
            $(this).off();
        });
    });
    $(function(){
        $('iframe[name="landing"]').attr('src','/portfolio/index.html')
    });

    $("button[type='submit']").click(
        function(){
            let name = $(this).attr('data-form');
            return buttonForm(name);

        }
    );
    function buttonForm(nameForm){
        let form = 'form'+nameForm;
        let phone = 'phone'+nameForm;
        if($("#"+phone).val()) {
            sendAjaxForm('result_form', form, 'ajax_form.php');
            return false;
        }
        else {
            alert('Номер телефона введен не правильно');
            return false;
        }
    }
    function sendAjaxForm(result_form, ajax_form, url) {
        $.ajax({
            url:     url, //url страницы (action_ajax_form.php)
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                result = $.parseJSON(response);
                if(result == 200)
                    alert('Данные отправлены');
                else
                    alert('Ошибка на сервере, попробуйте позднее');
            },
            error: function(response) { // Данные не отправлены
                $('#result_form').html('Ошибка. Данные не отправлены.');
            }
        });
    }
    // scroll по якорям
    $("a[href^='#']").click(function(){
        let _href = $(this).attr("href");
        console.log($.fn.jquery);
        let y = $(_href).offset().top - 66;
        $("html, body").animate({scrollTop: y+"px"});
        $('#navCollapse').trigger('click');
        return false;
    });

    //Увеличение цифр
    var timeout = 1,
        counters = $('.counter');
    counters.each(function(){
        var that = $(this),
            num = that.html();
        that.html(0);
        that.attr('data-num',num);
    });
    $(window).on('scroll', function(){
        var scrolltop = $(this).scrollTop(),
            wh = $(this).height();
        counters.each(function(){
            var that = $(this);
            if (!that.data('start') && scrolltop >= that.offset().top - wh) {
                that.attr('data-start', true);
                var i = 1,
                    num = that.data('num'),
                    step = Math.round(100 * timeout / num),
                    int = setInterval(function(){
                        if (i <= num) {
                            that.html(i);
                        }
                        else {
                            clearInterval(int);
                        }
                        i++;
                    },step);
            }
        });
    });

    var el = $('.boundle>div:first-child');

    $(window).scroll(function(){
        if ( $(this).scrollTop() >= el.offset().top - $(this).height()) {
            el.addClass('bounceIn');
        }
    });
    var price1 = $('#price1');
    var price2 = $('#price2');
    var price3 = $('#price3');
    var price4 = $('#price4');

    $(window).scroll(function(){
        if ( $(this).scrollTop() >= price1.offset().top - $(this).height()) {
            price1.addClass('bounceIn');
            price1.removeClass('d-none');
            setTimeout(function () {
                price2.addClass('bounceIn');
                price2.removeClass('d-none');
            },500)
            setTimeout(function () {
                price3.addClass('bounceIn');
                price3.removeClass('d-none');
            },1000)
            setTimeout(function () {
                price4.addClass('bounceIn');
                price4.removeClass('d-none');
            },1500)
        }
    });

};