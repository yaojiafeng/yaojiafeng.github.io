
$(document).ready(function () {
    let signUp = true;
    //头部切换状态
    $('.header a').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        if (signUp == true) {
            $('form .form-header span')[0].setAttribute("class", "active");
            $('form .form-header span')[2].removeAttribute("class", "active");
            $('form .sign-btn button').html('Sign In')
            signUp = false;
        } else {
            $('form .form-header span')[2].setAttribute("class", "active");
            $('form .form-header span')[0].removeAttribute("class", "active");
            $('form .sign-btn button').html('Sign Up')
            signUp = true;
        }
    })
    //input username password 
    // $('form div input').focus(function () {
    //     $(this).css('border-bottom', '1px solid #ccc')
    // })
    // $('form div input').blur(function () {
    //     $(this).css('border-bottom', 'none')
    // })
    //agree input
    $('.agree input').click(function () {
        $('.agree img').css('display', 'block')
    })
    $('.agree img').click(function () {
        $('.agree input')[0].checked = false;
        $('.agree img').css('display', 'none');

    })
    //swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            loop: true,
            clickable: true
        },
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    });
    console.log(swiper)

});



