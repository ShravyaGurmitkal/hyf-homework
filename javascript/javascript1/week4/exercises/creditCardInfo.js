// this function works if cardnumber is given without spaces and checked only 3 card types
function getCardInfo(creditCardNumber){
    //creditCardNumber.toString().match(/^4\d{15}$/)
    if (/^4\d{15}$/.test(creditCardNumber)) {
        return 'visa';
    } else if (/^5[0-5]\d{14}$/.test(creditCardNumber)) {
        return 'MasterCard';
    } else if (/^3\d{14}$/.test(creditCardNumber)) {
        return 'AmericanExpress';
    } else if (/^\d{0,}$/.test(creditCardNumber)) {
        return 'Any other card type';
    }
    return 'Invalid card number'
}

console.log(getCardInfo(4781321334789876)); // 'visa'
console.log(getCardInfo(5281321334789876)); // 'MasterCard'
console.log(getCardInfo(328132133478987));  // 'AmericanExpress'
console.log(getCardInfo(478132133478987)); // 'Any other card type'
console.log(getCardInfo('528132133478976*a0')); // 'Invalid card number'