function getClothesToWear(temperature) {
    if (temperature <= 0) {
        return "Thermal Wear";
    } else if (temperature <= 15) {
        return "Winter Wear";
    }
    return "shorts and a t-shirt";
}

const clothesToWear = getClothesToWear(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
console.log(getClothesToWear(-2));
console.log(getClothesToWear(7));