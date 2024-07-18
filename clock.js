 //declaring variables
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=> {
    let date = new Date();
    hour.innerHTML = (date.getHours()<10?"0":"")+ date.getHours();
    min.innerHTML = (date.getMinutes()<10?"0":"")+ date.getMinutes();
    sec.innerHTML = (date.getSeconds()<10?"0":"")+ date.getSeconds();
},1000)


