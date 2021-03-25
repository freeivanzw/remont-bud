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
    });

    $('.responds__inner').slick({
        arrows: false,
        dots: true,
    });

    $('#example').overlayScrollbars({ });

    
});