$(function () {
    $('.menu-button').on('click',function(){
        $('.mobile-menu-container').toggleClass('active');
        $('.menu-button').toggleClass('active')
    })
    $('.about .about__text:eq(0)').fadeIn(500,function(){
        $(this).next().fadeIn(500,arguments.callee);
    })

})