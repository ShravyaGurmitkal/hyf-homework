//Age-ify (A future age calculator)
const yearOfBirth = 1995;
let yearFuture = 2030;
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);



//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears; 

if(shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`);
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}



//Housey pricey (A house price estimator)
let housePrice;
let houseDepth;
let houseHeight;
let houseWidth;
let volumeInMeters;
let gardenSizeInM2;
let priceDifference;
const petersHouseCost = 2500000;
const juliaHouseCost = 1000000;

//calculating the price of Peter house
houseDepth = 10;
houseHeight = 10;
houseWidth = 8;
volumeInMeters = houseDepth * houseHeight * houseWidth;
gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
priceDifference = Math.abs(housePrice - petersHouseCost);

if (housePrice > petersHouseCost) {
    console.log(`Peter is paying too much amount ${priceDifference} for the house`);
} else if (housePrice < petersHouseCost) {
    console.log(`Peter is paying too little amount ${priceDifference} for the house`)
} else {
    console.log(`Peter is paying correct amount ${housePrice}for the house`)
}

//calculating the price of Julia house
houseDepth = 11;
houseHeight = 8;
houseWidth = 5;
volumeInMeters = houseDepth * houseHeight * houseWidth;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
priceDifference = Math.abs(housePrice - juliaHouseCost);

if (housePrice > juliaHouseCost) {
    console.log(`Julia is paying too much amount ${priceDifference} for the house`);
} else if (housePrice < juliaHouseCost) {
    console.log(`Julia is paying too little amount ${priceDifference} for the house`)
} else {
    console.log(`Julia is paying correct amount ${housePrice} for the house`)
}



//Ez Namey (Startup name generator) Optional
const firstWords = ['Easy','Corporate','Awesome','Smart','Best','High','Relation','Telecom','Stock','Capital'];
const secondWords = ['Technologies','Corporation','Communications','Corp','Systems','Engineering','Group','Business','Tech','Company'];
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);