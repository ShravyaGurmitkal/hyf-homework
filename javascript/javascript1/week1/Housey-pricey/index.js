let housePrice;
let depth;
let height;
let width;
let volumeInMeters;
let gardenSizeInM2;
const petersHouseCost = 2500000;
const juliaHouseCost = 1000000;

//calculating the price of Peter house
depth = 10;
height = 10;
width = 8;
volumeInMeters = depth * height * width;
gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > petersHouseCost) {
    console.log("Peter is paying too much for the house");
} else if (housePrice < petersHouseCost) {
    console.log("Peter is paying too little for the house")
} else {
    console.log("Peter is paying correct amount for the house")
}

//calculating the price of Julia house
depth = 11;
height = 8;
width = 5;
volumeInMeters = depth * height * width;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > juliaHouseCost) {
    console.log("Julia is paying too much for the house");
} else if (housePrice < juliaHouseCost) {
    console.log("Julia is paying too little for the house")
} else {
    console.log("Julia is paying correct amount for the house")
}