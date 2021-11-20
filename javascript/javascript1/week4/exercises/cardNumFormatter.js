function formatCreditCardNumber(cardNumber) {
    (typeof cardNumber !== 'string') ? copycardNumber = cardNumber.toString() : copycardNumber = cardNumber;
    let formatted = '';
    while (copycardNumber.length != 0) {
        formatted += " " + copycardNumber.slice(0,4);
        copycardNumber = copycardNumber.slice(4, copycardNumber.length);
    }
    
    return {
        original: Number(cardNumber),
        formatted: formatted.trim(),
    };
}


const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/