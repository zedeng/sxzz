$(document).ready(function () {
    var windowHight = $(window).height() - 45;
    $('.left-nav').css('height', windowHight);
    $('.right-content').css('height', windowHight);


    $(".left-nav div").click(function () {
        $(".actived-item").removeClass('actived-item');
        $(this).addClass("actived-item");
    });
});


$(window).resize(function () {
    var windowHight2 = $(window).height() - 45;
    $('.left-nav').css('height', windowHight2);
    $('.right-content').css('height', windowHight2)
});