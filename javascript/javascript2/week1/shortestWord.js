const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords) {
    //return danishWords.find(str => str.length === Math.min(...(danishWords.map(str => str.length))));
    return danishWords.sort(function(a,b) {
        return a.length - b.length;
    })[0];
}

console.log(getShortestWord(danishWords)); // returns 'ø'