$(document).ready(function () {
    const owl = $(".slider .owl-carousel").owlCarousel({
        items: 1,
        dotsData: true,
        autoPlay: true,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        loop: true,
        responsive: {
            0: {
                dotsData: false,
                nav: true,
            },
            768: {
                dotsData: true,
            }
        }
    });
    $('.slider .owl-dot').on('click', function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
        $('.owl-dot').removeClass('active');
        $(this).addClass('active');
    })
    const owl1 = $(".products .owl-carousel").owlCarousel({
        items: 4,
        dots: false,
        margin: 20,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            }
        }
    });
    $('.our-hotels .next').on('click', function () {
        owl1.trigger('next.owl.carousel');
    });

    $('.our-hotels .prev').on('click', function () {
        owl1.trigger('prev.owl.carousel');
    });
    const owl2 = $(".posts .owl-carousel").owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        margin: 20,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
    const owl3 = $(".mega-menu .menu-blogs .owl-carousel").owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        margin: 20,
        loop: true,
    });
});