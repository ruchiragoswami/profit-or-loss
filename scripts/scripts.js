let initialPrice = document.querySelector("#initialPrice");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#currentPrice");
let tellMe = document.querySelector("#btn-tell");
let displayOutput = document.querySelector("#displayOutput");


// function extractValues(input1, input2, input3) {
//     let input1  = input1.value ;
//     let input2 = input2.value;
//     let input3 = input3.value ; 
//     console.log (input1, input2, input3); 
//     return (input1, input2, input3);
   
// } 
// extractValues(initialPrice, quantity, currentPrice);

 function calculateProfitOrLoss(initialPrice, currentPrice, quantity)  {
    //  console.log("hello " + initialPrice + " " + currentPrice + " " + quantity); 

    let costPrice = initialPrice * quantity;
    let sellingPrice = currentPrice * quantity; 

    if (sellingPrice > costPrice) {
        let profit = sellingPrice - costPrice;       
        let profitPercent = (profit/costPrice)*100; 

        console.log(profit + " is profit made and percentage profit is " + profitPercent );
    } else if (sellingPrice < costPrice) {
        let loss = costPrice - sellingPrice;
        let lossPercent = (loss/costPrice)*100; 

        console.log("Aww... Loss is " + loss + ". loss percentage is " + lossPercent); 
    }




   

 }

 

function clickHandler() {   

    // console.log("No worries" + initialPrice.value+ " quantity " + quantity.value + " currentPrice is : " + currentPrice.value);
   
calculateProfitOrLoss(initialPrice.value, currentPrice.value, quantity.value); 



}







tellMe.addEventListener("click", clickHandler)