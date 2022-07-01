function getFullname(firstname, surname) {
    return ('"' + firstname + " " + surname + '"');
}

let fullname1 =  getFullname('Benjamin', 'Hughes'); 
let fullname2 = getFullname('Shravya', 'Gurmitkal');

console.log(fullname1);
console.log(fullname2);


//with formalname
function getFullname(firstname, surname, useFormalName) {
    if(useFormalName){
        return ('"' + 'Lord' + " " + firstname + " " + surname + '"');
    }
    return ('"' + firstname + " " + surname + '"');
}

console.log(getFullname("Benjamin", "Hughes", true)); // returns "Lord Benjamin Hughes"`
console.log(getFullname("Benjamin", "Hughes", false));


//with gender
function getFullname(firstname, surname, useFormalName, gender) {
    if (useFormalName) {
        if (gender === 'male'){
            return ('"' + 'Lord' + " " + firstname + " " + surname + '"');
        }
        return ('"' + 'Lady' + " " + firstname + " " + surname + '"');
    } 
    return ('"' + firstname + " " + surname + '"');
}

console.log(getFullname("Benjamin", "Hughes", true, 'male')); // returns "Lord Benjamin Hughes"`
console.log(getFullname('Shravya', 'Gurmitkal', true, 'female'));