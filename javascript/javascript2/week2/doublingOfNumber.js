let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

//Using filter and map
const filterNewNumbers = numbers.filter(
    num => num % 2 !== 0
).map(
    oddNum => oddNum * 2
);

console.log("The doubled numbers using map and filter are", filterNewNumbers);