
$(function () {
    $('.menu-button').on('click',function(){
        $('.mobile-menu-container').toggleClass('active');
        $('.menu-button').toggleClass('active')
    })
    
    $('.about .about__text:eq(0)').fadeIn(500,function(){
        $(this).next().fadeIn(500,arguments.callee);
    })
    
})

//scroll on click   
const smoothScroll = (h) => {
    let i = h || 0;
    if (i < 800) {
      setTimeout(() => {
        window.scrollTo(0, i);
        smoothScroll(i + 10);
      }, 10);
    }
  }
document.getElementById('scroll').addEventListener("click", ()=> smoothScroll());

    



//animation on scroll
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
                end: "bottom top",        
            },
        })
    .to('.top',{
        scale: 4,duration:1
     })
        
    .to(".top__label", {
        yPercent:-200,
        
    },"<")
    .to("#top-title", {
        yPercent:-200,
    },"<")

    .to('.top__arrow',{
        yPercent:1000,
    },"<")

    .to('.about',{
        y:-1200
    })
    
    .to('.top',{
        opacity:0,
        
    })
    gsap.utils.toArray('.about__text').forEach((el)=>{
        tl.from(el,{
            opacity:0
        },">")
    })
}
}) ;

