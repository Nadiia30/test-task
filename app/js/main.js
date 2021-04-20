$(function () {
    $('.menu-button').on('click',function(){
        $('.mobile-menu-container').toggleClass('active');
        $('.menu-button').toggleClass('active')
    })
    $('.about .about__text:eq(0)').fadeIn(500,function(){
        $(this).next().fadeIn(500,arguments.callee);
    })


})


gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  
    // desktop
    "(min-width:1440px)": function() {
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".top",
        scrub: true,
        pin:true,
        start: "top top",
        end: "+=600"
      },
      
})
tl.to('.top',{
    scale: 4
})
tl.to(".top__label", {
    yPercent:-200,
    
},"<");
tl.to("#top-title", {
    yPercent:-200,
},"<");

tl.to('.top__arrow',{
    yPercent:1000,
},"<");

tl.to('.about',{
    y:-1000
})

}
})