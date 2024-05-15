/* ================================== toggle style ================*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style-switcher in scroll
window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})  
 /* ================================== theme colors ================*/ 
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors){
    alternateStyle.forEach((style) =>{
        if(colors == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}
/*================================= theme dark & light ==============*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})