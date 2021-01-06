$(document).ready(function () {
    new WOW().init();
    $('.game-img').mouseenter (function(){
        $(this).addClass('animate__animated animate__rubberBand');
    });
    $('.game-img').hover (function(){
        $(this).addClass('hover-slime');
    });
    $('.game-img').mouseleave (function(){
        $(this).removeClass('animate__animated animate__rubberBand hover-slime');
    });
});