var typed = new Typed(".typing", {
    strings: ["Let's Calculate.", "Coding is fun.","Designed By Rikzil."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");


buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
    if(button.id == "clear"){
        display.innerText = '';

    }else if(button.id == "backSpace"){
        let str = display.innerText.toString();
        display.innerText = str.substr(0,str.length - 1);
    }else if(button.id != "" && button.id == "equal"){
        display.innerText = eval(display.innerText);
    }else if(button.id == "" && button.id == "equal"){
        display.innerText = "Empty!";
        setTimeout(() =>(display.innerText = ""),2000);
    }else{
        display.innerText += button.id;
    }
     
    })
})




