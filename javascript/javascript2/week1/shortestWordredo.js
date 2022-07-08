const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords) {
    return danishWords.find(word => word.length === Math.min(...(danishWords.map(word => word.length))));
}

console.log(getShortestWord(danishWords)); // returns 'ø'