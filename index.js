let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    let navbar = document.querySelector(".navbar");
        navbar.classList.toggle("change");
        menu.classList.toggle("change");
})

// section2
let btn = document.querySelector(".button i");
let bar = document.querySelector(".bar");
let video = document.querySelector(".video")

let playpause = ()=>{
    if(video.paused){
        video.play();
        btn.className = "far fa-pause-circle";
        video.style.opacity = .8;

    }else{
        video.pause();
        btn.className = "far fa-play-circle"
        video.style.opacity = .3;
    }
    
}

btn.addEventListener("click",()=>{
    playpause();
})

video.addEventListener("timeupdate",()=>{
    const videowidth = video.currentTime/video.duration;
    bar.style.width = `${videowidth * 100}%`;
    if(video.ended){
        btn.className = "far fa-play-circle"
        video.style.opacity = .3;
    }
})

// swipperjs
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });