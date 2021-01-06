$(document).ready(function () {
    new WOW().init();
    ///////////nav以下//////////// 
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
})