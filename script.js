const btn = document.querySelector(".next");
const card1 = document.querySelector(".card1")
const cards = document.getElementsByClassName("another__card")
let n = Math.trunc(Math.random(0, 1)*3)
btn.addEventListener("click", function(){
    // card1.style.display = "none"
    cards[n].style.display = "block"
})
