/*var animationbtn = document.getElementById('btn_home')
animationbtn.addEventListener("mouseover",function(){

    animationbtn.style.backgroundColor = "#2cc1ff";
    animationbtn.style.top = "5";
    
});

animationbtn.addEventListener("mouseleave",function(){

    animationbtn.style.backgroundColor = "#A0EE99";
    animationbtn.style.top = "0";
    
});*/
const titreSpans = document.querySelectorAll('h1');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    TL.play();
})
