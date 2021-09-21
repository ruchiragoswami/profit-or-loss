let initialPrice = document.querySelector("#initialPrice");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#currentPrice");
let tellMe = document.querySelector("#btn-tell");
let displayOutput = document.querySelector("#displayOutput");



function clickHandler() {
     console.log(initialPrice.value + " quantity " + quantity.value + " currentPrice is : " + currentPrice.value);

}







tellMe.addEventListener("click", clickHandler)