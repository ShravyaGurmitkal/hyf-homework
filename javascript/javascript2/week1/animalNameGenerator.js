spiritAnimals = ['The Black Wolf','Brown Bear','Grizzly Fox','Panda Bear','Wild Eagle','The Fullmoon Wolf','The Crying Butterfly','Witty Fox','Killer Whale','Dark Wild Cat'];

const getSpiritInput = document.querySelector('#inputname')
const spiritName = document.querySelector('#spritname');

//When user wants spirit name using button click
const getspiritbutton = document.querySelector('#getSpirit');
getspiritbutton.addEventListener('click',function(){
    if(document.getElementById('buttonClick').checked) {
        getSpiritName(spiritAnimals);
    } 
});

//when the user hovers the input field
getSpiritInput.addEventListener('mouseover', function() {
    if(document.getElementById('inputHovers').checked) {
        getSpiritName(spiritAnimals);
    } 
});

//when text is written in the input field
getSpiritInput.addEventListener('input', function() {
    if(document.getElementById('inputText').checked) {
        getSpiritName(spiritAnimals);
    } 
});

function getSpiritName(spiritAnimals) {
    const inputNameText = getSpiritInput.value.trim();
    (inputNameText.length === 0)? spiritName.innerHTML = 'Please, specify your name to get the Spirit Name' : spiritName.innerHTML = inputNameText + '-' + spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
}

//Function that changes the spirit name when user clicks the button
const changespiritbutton = document.querySelector('#changeSpirit');
changespiritbutton.addEventListener('click',changeSpiritName);
function changeSpiritName() {
   newSpiritAnimals = spiritAnimals.filter(animal => animal !== spiritName.innerHTML.split('-')[1]);
   getSpiritName(newSpiritAnimals);
}