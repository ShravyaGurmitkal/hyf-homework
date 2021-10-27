const firstWords = ['Easy','Corporate','Awesome','Smart','Best','High','Relation','Telecom','Stock','Capital'];
const secondWords = ['Technologies','Corporation','Communications','Corp','Systems','Engineering','Group','Business','Tech','Company'];
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);