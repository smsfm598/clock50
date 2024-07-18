const bgchanger1= document.querySelector(".background-changer1 input")
const bgchanger2 = document.querySelector(".background-changer2 input")
const clockchanger = document.querySelector(".clock-changer1 input")


const heroTag = document.querySelector(".hero")



bgchanger1.addEventListener("input", function(){
    heroTag.style.background = `linear-gradient(45deg, ${bgchanger1.value}, ${bgchanger2.value})`;
})

bgchanger2.addEventListener("input", function(){
    heroTag.style.background = `linear-gradient(45deg, ${bgchanger1.value}, ${bgchanger2.value})`;
})
clockchanger.addEventListener("input", function(){
    heroTag.style.color = clockchanger.value
})
