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

while (names.includes(nameToRemove)) {
    names.splice(names.indexOf(nameToRemove),1);
}

console.log(names);