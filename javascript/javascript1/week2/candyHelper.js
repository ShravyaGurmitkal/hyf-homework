const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    let candyPrice;
    switch (candyType) {
        case 'sweet':
            candyPrice = weight * 0.5;
            break;
        case 'chocolate':
            candyPrice = weight * 0.7;
            break;
        case 'toffee':
            candyPrice = weight * 1.1;
            break;
        case 'chewing-gum':
            candyPrice = weight * 0.03;
            break;
        default:
            break;
    }
    boughtCandyPrices.push(candyPrice);
}

const amountToSpend =  Math.random() * 100;

function canBuyMoreCandy(amountHad) {
    let totalPrice = 0;
    // for (let i = 0; i < boughtCandyPrices.length; i++) {
    //     totalPrice += boughtCandyPrices[i];
    // }
    let i = 0;
    while (i < boughtCandyPrices.length) {
        totalPrice += boughtCandyPrices[i]
        i++;
    }
    console.log(`Amount to spend = ${amountToSpend}\nTotal price of bought candy's = ${totalPrice}`)
    if (amountHad > totalPrice) {
        return true;
    }
    return false;
}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("chewing-gum", 15)

if (boughtCandyPrices.length > 0) {
    if (canBuyMoreCandy(amountToSpend)) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}