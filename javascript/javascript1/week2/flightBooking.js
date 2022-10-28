//function that returns a fullname
function getFullname(firstname, surname) {
    return ('"' + firstname + " " + surname + '"');
}

let fullname1 =  getFullname('Benjamin', 'Hughes'); 
let fullname2 = getFullname('Hanne', 'Larsen');

console.log(`Full_Name1 : ${fullname1}`);
console.log(`Full_Name2 : ${fullname2}`);

//Formal fullname
//When useFormalName is not given then it considers as undefined and goes to the else part as in if we considered useFormalName as true.
function getFullname(firstname, surname, useFormalName) {
    if (useFormalName) {
        return ('"' + 'Lord' + " " + firstname + " " + surname + '"');
    } 
    return ('"' + firstname + " " + surname + '"');
}
/*
//commented this block of code as this is calling getFullname(firstname, surname, useFormalName, gender) function and in the below functon call we didn't pass the gender so it is the inappropriate results.
//If below function calls the function with parameters getFullname(firstname, surname, useFormalName) then it will provide the correct results.
fullname1 =  getFullname('Benjamin', 'Hughes', true);
fullname2 = getFullname('Hanne', 'Larsen', false);

console.log(`Full_Name1 : ${fullname1}`);
console.log(`Full_Name2 : ${fullname2}`);
*/

/* Same on the flight website we should give the user a possibility to select the gender(Male/ Female) using radio buttons.
   So, if the gender is male then we will address him formally as 'Lord' else if the gender is female we address her as 'Lady'.
   Now we should change getFullname function as getFullname(firstname, surname, useFormalName, gender)*/

function getFullname(firstname, surname, useFormalName, gender) {
    if (useFormalName) {
        if (gender === 'male'){
            return ('"' + 'Lord' + " " + firstname + " " + surname + '"');
        }
        return ('"' + 'Lady' + " " + firstname + " " + surname + '"');
    } 
    return ('"' + firstname + " " + surname + '"');
}

fullname1 =  getFullname('Benjamin', 'Hughes', true, 'male');
fullname2 = getFullname('Hanne', 'Larsen', true, 'female');

console.log(`Full_Name1 : ${fullname1}`);
console.log(`Full_Name2 : ${fullname2}`);