let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    let navbar = document.querySelector(".navbar");
        navbar.classList.toggle("change");
        menu.classList.toggle("change");
})