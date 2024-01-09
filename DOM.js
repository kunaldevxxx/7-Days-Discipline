//DO YOU UNDERSTAND DOM?
//SO CAN YOU PLEASE DEFINE ME WHAT IS THE DIFFRENCE B/W EVENT BUBBLING AND EVENT CAPTURING ?
//EVENT BUBBLING :- like we have 3 divs and i have click 1 child div, child class dont have listner so event go to its parent if parent also dont have it so it goes to its parent and goes on
//EVENT CAPTURING :- like we click on any child in this chiild listner dont run its parent listener will and run till child reached 
document.querySelector(".parent")
.addEventListener("click",function(){
    alert("hello");
},true);
document.querySelector(".child")
.addEventListener("click",function(){
    alert("hello 2");
});