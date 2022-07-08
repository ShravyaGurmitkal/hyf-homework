let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

//above program using map and filter
newNumbers = numbers.filter(number => number % 2 !== 0).map(oddNumber => oddNumber * 2);
console.log(`Using filter and map The doubled numbers are ${newNumbers}`)