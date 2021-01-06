$(document).ready(function () {
    new WOW().init();
    $('.jelly-ic').hover (function(){
        $(this).addClass('animate__animated animate__rubberBand hover-slime');
    });
    $('.jelly-ic').mouseleave (function(){
        $(this).removeClass('animate__animated animate__rubberBand hover-slime');
    });

    /////////////////////

    $('.lk01').mouseenter (function(){
        $('#ca').addClass('choose');
        $('#nw01').css('font-weight','bold');
    });
    $('.lk01').mouseleave (function(){
        $('#ca').removeClass('choose');
        $('#nw01').css('font-weight','normal');
    });

    $('.lk02').mouseenter (function(){
        $('#cb').addClass('choose');
        $('#nw02').css('font-weight','bold');
    });
    $('.lk02').mouseleave (function(){
        $('#cb').removeClass('choose');
        $('#nw02').css('font-weight','normal');
    });

    $('.lk03').mouseenter (function(){
        $('#cc').addClass('choose');
        $('#nw03').css('font-weight','bold');
    });
    $('.lk03').mouseleave (function(){
        $('#cc').removeClass('choose');
        $('#nw03').css('font-weight','normal');
    });
    
});