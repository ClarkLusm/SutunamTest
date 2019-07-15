$(document).ready(function () {
    $('.toggle-menu__btn').on('click', function () {
        $(this).toggleClass('opening');
        $('body').toggleClass('menu-open');
        $('.mega-menu').toggleClass('open');
    })
    $('.mega-menu .menu-title').on('click', function () {
        $(this).next().toggle('slide')
    })
})