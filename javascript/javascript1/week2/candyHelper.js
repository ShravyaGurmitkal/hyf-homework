const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    switch (candyType) {
        case 'sweet':
            boughtCandyPrices.push(weight * 0.5);
            break;
        case 'chocolate':
            boughtCandyPrices.push(weight * 0.7);
            break;
        case 'toffee':
            boughtCandyPrices.push(weight * 1.1);
            break;
        case 'chewing-gum':
            boughtCandyPrices.push(weight * 0.03);
            break;
        default:
            break;
    }
}

const amountToSpend =  Math.random() * 100;
function canBuyMoreCandy(amountToSpend) {
    let totalPrice = 0;
    for(candyprice of boughtCandyPrices) {
        totalPrice += candyprice;
    }
    return (amountToSpend > totalPrice) ? true : false;
}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("chewing-gum", 15);

(canBuyMoreCandy(amountToSpend)) ? console.log("You can buy more, so please do!") : console.log("Enough candy for you!");