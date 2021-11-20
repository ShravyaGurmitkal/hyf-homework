function printNumbers() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else  if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

printNumbers();

function fizzBuzz(num1, num2) {
    (num2 % num1 === 0) ? console.log(`${num2} is multiple of ${num1}`) : console.log(`${num2} is not a multiple of ${num1}`)
}

fizzBuzz(4, 12)
