let initialPrice = document.querySelector("#initialPrice");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#currentPrice");
let tellMe = document.querySelector("#btn-tell");
let displayOutput = document.querySelector("#displayOutput");


function calculateProfitOrLoss(initialPrice, currentPrice, quantity) {

    let costPrice = initialPrice * quantity;
    let sellingPrice = currentPrice * quantity;

    if (sellingPrice > costPrice) {
        let profit = sellingPrice - costPrice;
        let profitPercent = (profit / costPrice) * 100;
        profitPercent = profitPercent.toFixed(2);

        displayOutput.style.color = "#86f114";
        displayOutput.innerText = `Yay! You made  a profit of  ${profit} & profit percentage is ${profitPercent}%`;

    } else if (sellingPrice < costPrice) {
        let loss = costPrice - sellingPrice;
        let lossPercent = (loss / costPrice) * 100;
        lossPercent = lossPercent.toFixed(2);

        displayOutput.style.color = "#f57ec7";
        displayOutput.innerText = `Awww... Loss is ${loss} & loss percentage is ${lossPercent}% `;

    } else {
        displayOutput.innerText = `Break-even! No profit, No loss`;
        displayOutput.style.color = "#F1B814";
    }
}


function clickHandler() {
    let iniPri = initialPrice.value;
    let qty = quantity.value;
    let currPri = currentPrice.value;

    if (iniPri <= 0 || currPri <= 0 || qty <= 0) {
        displayOutput.innerText = "Please verify the numbers again!";
        // stocks can reach upto 0, but trading is not possible at or below 0
    } else {
        calculateProfitOrLoss(iniPri, currPri, qty);
    }
}

tellMe.addEventListener("click", clickHandler);