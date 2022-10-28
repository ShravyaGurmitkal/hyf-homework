function getWhatclothesToWear(temperature) {
    if (temperature <= 0) {
        return "Thermal Wear";
    } else if (temperature <= 10) {
        return "Winter Wear";
    }
    return "shorts and a t-shirt";
}

const clothesToWear = getWhatclothesToWear(18);
console.log(clothesToWear); 