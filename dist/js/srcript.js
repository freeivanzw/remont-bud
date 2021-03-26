$(function(){
    $(".header-main__open").click(function(){
        $(".menu").addClass("menu-active"),
        $(".menu__active-shadow").addClass("menu__active-shadow-show")

    });

    $(".header-main__close").click(function(){
        $(".menu").removeClass("menu-active"),
        $(".menu__active-shadow").removeClass("menu__active-shadow-show")
    });

    $(".menu__active-shadow").click(function(){
        $(".menu").removeClass("menu-active"),
        $(".menu__active-shadow").removeClass("menu__active-shadow-show")
    });

    

    $(".header-body__btn").click(function(){
        $(".menu__form").addClass("menu__form-active")
        
    });

    $(".menu__close").click(function(){
        $(".menu__form").removeClass("menu__form-active")
        
    });


    $(".calculation__details").click(function(){
        $(".calculation__show").toggleClass("calculation__show-active")
    });

    var elem = $('.header-main');
    var doc = $(document);
    function scrolled() {
        var threshold = doc.scrollTop() > 50;
        elem.toggleClass('heder-scrolled', threshold);
    }
    $(window).on({ scroll: scrolled });

    $('.completed-slider').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
            }
            },{
                breakpoint: 1236,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
            }
            }
        ],
        mobileFirst: true,
    });

    $('.responds__inner').slick({
        arrows: false,
        dots: true,
        
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: false,
            }
            },{
                breakpoint: 1236,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    arrows: true,
            }
            }
        ],
        mobileFirst: true,
    });

    $('#example').overlayScrollbars({ });

    
});