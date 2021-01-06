$(document).ready(function () {
    new WOW().init();
    $('.jelly-ic').hover (function(){
        $(this).addClass('animate__animated animate__rubberBand hover-slime');
    });
    $('.jelly-ic').mouseleave (function(){
        $(this).removeClass('animate__animated animate__rubberBand hover-slime');
    });

    
});