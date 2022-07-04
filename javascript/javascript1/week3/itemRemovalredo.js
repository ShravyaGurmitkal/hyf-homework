const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

const nameToRemove = "Ahmad";

// Write some code here

//Used while because if it contains same name more times, so that it can remove all the values with that name in the array.
while (names.includes(nameToRemove)) {
    names.splice(names.indexOf(nameToRemove),1);
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']