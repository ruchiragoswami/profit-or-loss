let initialPrice = document.querySelector("#initialPrice");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#currentPrice");
let tellMe = document.querySelector("#btn-tell");
let displayOutput = document.querySelector("#displayOutput");







// initialPrice= initialPrice.value; 
// quantity = quantity.value;
// currentPrice = currentPrice.value; 

// console.log("given inputs are " + initialPrice.value + quantity.value + currentPrice.value);


// function extractValues(input1, input2, input3) {
//     let input1  = input1.value ;
//     let input2 = input2.value;
//     let input3 = input3.value ; 
//     console.log (input1, input2, input3); 
//     return (input1, input2, input3);

// } 
// extractValues(initialPrice, quantity, currentPrice);

// function zeroNegValidate(param1, param2, param3) {
//     if (param1 <= 0 || param2 <=0 || param3 <0) {
//         displayOutput.innerText = "Please check the input numbers again! Must be positive";
//         console.log("you are tricking me. negatives added")
//     } else {
//         console.log("no negatives added"); 
//     }
// }



function calculateProfitOrLoss(initialPrice, currentPrice, quantity) {

    let costPrice = initialPrice * quantity;
    let sellingPrice = currentPrice * quantity;

    if (sellingPrice > costPrice) {
        let profit = sellingPrice - costPrice;
        let profitPercent = (profit / costPrice) * 100;
        profitPercent = profitPercent.toFixed(2);

        // console.log(profit + " is profit made and percentage profit is " + profitPercent );

        displayOutput.style.color = "green";
        displayOutput.innerText = `Yay! You made  a profit of  ${profit} & profit percentage is ${profitPercent}%`;

    } else if (sellingPrice < costPrice) {
        let loss = costPrice - sellingPrice;
        let lossPercent = (loss / costPrice) * 100;
        lossPercent = lossPercent.toFixed(2);

        // console.log("Aww... Loss is " + loss + ". loss percentage is " + lossPercent); 

        displayOutput.style.color = "red";
        displayOutput.innerText = `Awww... Loss is ${loss} & loss percentage is ${lossPercent}% `;

    } else if (sellingPrice = costPrice) {

        displayOutput.innerText = `Break-even! No profit, No loss`;
        displayOutput.style.color = "blue";
    } else {
        displayOutput.style.color = "firebrick";
        displayOutput.innerText = `Please enter valid numbers in all the input fields.`
    }
}



function clickHandler() {
    // trying.innerText = "H2 is " + iniPri  + ", " + qty + ", " + currPri ;

    let iniPri = initialPrice.value;
    let qty = quantity.value;
    let currPri= currentPrice.value; 

    if (iniPri <= 0 || currPri <= 0 || qty <= 0) {
        displayOutput.innerText = "Stock Trading at 0 is not possible. Please verify the numbers again!";
        console.log("you are tricking me. negatives added")
    } else {
        console.log("no negatives added");
        calculateProfitOrLoss(iniPri, currPri, qty);
    }


}







tellMe.addEventListener("click", clickHandler);