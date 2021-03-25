$(function(){
    $(".header-main__open").click(function(){
        $(".menu").addClass("menu-active")

    })

    $(".header-main__close").click(function(){
        $(".menu").removeClass("menu-active")
    })

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