$(function(){
    $(".header-main__open").click(function(){
        $(".menu").addClass("menu-active")
    })

    $(".header-main__close").click(function(){
        $(".menu").removeClass("menu-active")
    })

    $('.completed-slider').slick({
        arrows: false,
        dots: true,
    });

    $('.responds__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.price__parrent').overlayScrollbars({
        overflowBehavior : x,
    });
});