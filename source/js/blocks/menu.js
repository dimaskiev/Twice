/*************************/
/* menu.js              */
/*************************/
$(document).ready(function() {
    var heightHeader = $('.slider-header-item').height();
    $('.menu-wrapper').css('height', heightHeader);
    if ($(window).width() <= '600')
        $('.menu-wrapper').css('height', '200px');

    $('.icon-menu').on('click', function(e) {
        e.preventDefault();
        $(document).find('.section-search').removeClass('active-search');
        $(document).find('.menu-wrapper').toggleClass('active-main-menu');
        if ($('.menu-wrapper').hasClass('active-main-menu')) {

            $('.menu-wrapper').css('height', '100vh');
        } else if ($(window).width() <= '600')
            $('.menu-wrapper').css('height', '200px');
        else $('.menu-wrapper').css('height', heightHeader);

    });
    $('.icon-search').on('click', function(e) {
        e.preventDefault();
        $(document).find('.menu-wrapper').removeClass('active-main-menu');
        $(document).find('.section-search').toggleClass('active-search');


    });
    $('.close-search').on('click', function(e) {
        e.preventDefault();

        $(document).find('.section-search').removeClass('active-search');


    });
});