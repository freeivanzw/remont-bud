$(function(){
    $(".header-main__open").click(function(){
        $(".menu").addClass("menu-active")
    })

    $(".header-main__close").click(function(){
        $(".menu").removeClass("menu-active")
    })
});