$(function() {
    $('.new_box').slick({
        slide: 'div',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        prevArrow : $('.new_pre'), 
        nextArrow : $('.new_next')
    });


    // 일정시간 호버시 서브 메뉴 출현
    $('.gnb_women').hover(function() {
        $('.gnb').css('color', '#bbb');
        $(this).children('.gnb').css('color', '#000');
        timeoutId = setTimeout(function() {
            $('.sub_women').slideDown();
        }, 500);
    },function() {
        clearTimeout(timeoutId);
        $('.sub_women').slideUp();
        $('.gnb').css('color', '#000');
    });

    $('.gnb_men').hover(function() {
        $('.gnb').css('color', '#bbb');
        $(this).children('.gnb').css('color', '#000');
        timeoutId = setTimeout(function() {
            $('.sub_men').slideDown();
        }, 500);
    },function() {
        clearTimeout(timeoutId);
        $('.sub_men').slideUp();
        $('.gnb').css('color', '#000');
    });

    $('.gnb_kids').hover(function() {
        $('.gnb').css('color', '#bbb');
        $(this).children('.gnb').css('color', '#000');
        timeoutId = setTimeout(function() {
            $('.sub_kids').slideDown();
        }, 500);
    },function() {
        clearTimeout(timeoutId);
        $('.sub_kids').slideUp();
        $('.gnb').css('color', '#000');
    });

    $('.gnb_sports').hover(function() {
        $('.gnb').css('color', '#bbb');
        $(this).children('.gnb').css('color', '#000');
        timeoutId = setTimeout(function() {
            $('.sub_sports').slideDown();
        }, 500);
    },function() {
        clearTimeout(timeoutId);
        $('.sub_sports').slideUp();
        $('.gnb').css('color', '#000');
    });

    $('.gnb_col').hover(function() {
        $('.gnb').css('color', '#bbb');
        $(this).children('.gnb').css('color', '#000');
        timeoutId = setTimeout(function() {
            $('.sub_col').slideDown();
        }, 500);
    },function() {
        clearTimeout(timeoutId);
        $('.sub_col').slideUp();
        $('.gnb').css('color', '#000');
    });

    $('.gnb_sale').hover(function() {
        $('.gnb').css('color', '#bbb');
        $(this).children('.gnb').css('color', '#000');
        timeoutId = setTimeout(function() {
            $('.sub_sale').slideDown();
        }, 500);
    },function() {
        clearTimeout(timeoutId);
        $('.sub_sale').slideUp();
        $('.gnb').css('color', '#000');
    });


    // 버튼 클릭시 배경 변경
    $('button').click(function() {
        $('button').removeClass('on');
        $(this).addClass('on');
    })

    // 모든 이미지 숨기고 운동화만 보이게 함
    $('.best_img').hide();
    $('.shoes_img').show();

    // 버튼 클릭시 해당 요소만 보임
    $('.sneakers').click(function() {
        $('.best_img').hide();
        $('.shoes_img').fadeIn(500);
    })
    $('.kids').click(function() {
        $('.best_img').hide();
        $('.kids_img').fadeIn(500);
    })
    $('.bag').click(function() {
        $('.best_img').hide();
        $('.bag_img').fadeIn(500);
    })

    $('.col75_slide').slick({
        slide: 'div',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        prevArrow : $('.col75_pre'), 
        nextArrow : $('.col75_next')
    });
    $('.photo_slide').slick({
        slide: 'div',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        prevArrow : $('.photo_pre'), 
        nextArrow : $('.photo_next')
    });
})