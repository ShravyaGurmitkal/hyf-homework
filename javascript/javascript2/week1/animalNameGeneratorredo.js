spiritAnimals = ['The Black Wolf','Brown Bear','Grizzly Fox','Panda Bear','Wild Eagle','The Fullmoon Wolf','The Crying Butterfly','Witty Fox','Killer Whale','Dark Wild Cat'];

const inputField = document.getElementById('inputName');
const spiritNameH1 = document.getElementById('spiritName');

//when user wants spirit name using clicks button to get spirit animal name option
const getSpiritButton = document.getElementById('getSpirit');
getSpiritButton.addEventListener('click', function() {
    if(document.getElementById('buttonClick').checked) {
        getSpiritName();
    }
});

//when user wants spirit name using hovers over the input field option
inputField.addEventListener('mouseover', function() {
    if(document.getElementById('hoversInput').checked) {
        getSpiritName();
    }
});

//when user wants spirit name using the text written in input field option
inputField.addEventListener('change', function() {
    if(document.getElementById('inputText').checked) {
        getSpiritName();
    }
});

//when user wants new spirit animal name
const getNewSpiritButton = document.getElementById('getNewSpirit');
let newSpiritAnimals = [];
getNewSpiritButton.addEventListener('click', function() {
    newSpiritAnimals = spiritAnimals.filter(animal => animal !== spiritNameH1.innerHTML.split('-')[1]);
    getSpiritName();
})

//function to get the spirit animal name
function getSpiritName() {
    const inputValue = inputField.value.trim();
    if(inputValue.length !== 0) {
        (newSpiritAnimals.length === 0) ? spiritNameH1.innerHTML = inputValue + '-' + spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)]: spiritNameH1.innerHTML = inputValue + '-' + newSpiritAnimals[Math.floor(Math.random() * newSpiritAnimals.length)];
    } else {
        spiritNameH1.innerHTML = 'Please, specify your name to get the Spirit Name';
    }
}