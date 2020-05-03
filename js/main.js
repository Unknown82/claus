$(function () {

    // Menu opener hamburger
    $('.menu-open, .menu a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });


    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });



    // Fixed navigation

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
    });

    // Всплывающее окно

    $('.parallax-btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    // Большой слайдер
    
    $('.big-slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });

    // Большой слайдер
    
    $('.car-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-alt-circle-right"></i></button>',
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },   
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    
});