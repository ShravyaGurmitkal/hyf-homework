let userName = '';
const todoList = [];
const mathOperators = ['%','-','/','+','*'];

function getReply (command) {
    if(command !== undefined && command.trim().length !== 0) {
        command = command.trim().toLowerCase();  
        if (command.includes('my name') && !command.includes('my name?')) {
            const commandArray = command.split(' ');
            const nameIndex = commandArray.indexOf('name');
            (commandArray[nameIndex + 1] !== 'is') ? userName = commandArray[nameIndex + 1] : userName = commandArray[nameIndex + 2];
            return `Nice to meet you ${userName}`
        } else if(command.includes('my name?')) {
            return (userName.length !== 0) ? `Your name is ${userName}` : `Not yet mentioned`;
        } else if ((/add [\w\s]+ to my todo/).test(command)) {
            const todoIndex = command.indexOf('add') + 'add'.length;
            const myTodo = command.slice(todoIndex, command.indexOf('to my todo')).trim();
            if (!todoList.includes(myTodo)) {
                todoList.push(myTodo);
                return `${myTodo} added to your todo`
            } 
            return `${myTodo} already present in your todoList`
        } else if ((/remove [\w\s]+ from my todo/).test(command)) {
            const todoIndex = command.indexOf('remove') + 'remove'.length;
            const removeFromTodo = command.slice(todoIndex, command.indexOf('from my todo')).trim();
            if(todoList.includes(removeFromTodo)) {
                todoList.splice(todoList.indexOf(removeFromTodo), 1);
                return `Removed ${removeFromTodo} from your todo`
            }
            return `${removeFromTodo} is not present in todoList`
        } else if (command.includes('my todo?')) {
            return `You have ${todoList.length} todos:\n${todoList.join('\n')} ` 
        } else if (command.includes('what day') || command.includes('today?')) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const today = new Date();
           return `${today.getDate()}. of ${months[today.getMonth()]} ${today.getFullYear()}`
        } else if ((/\d[+*%/-]\d/g).test(command.split(" ").join(''))) {
            const operationString = command.split(" ").join('').match(/\d[.\d]*[+*/%-]\d[.\d]*/g)[0];
            const operator  =  mathOperators.find(operator => operationString.includes(operator));
            const number1 = Number(operationString.split(operator)[0]);
            const number2 = Number(operationString.split(operator)[1]);
            let operation;    
            switch (operator) {
                case '+':
                    operation = number1 + number2;
                    break;
                case '-':
                    operation = number1 - number2;
                    break;
                case '%':
                    operation = number1 % number2;
                    break;
                case '/':
                    operation = number1 / number2;
                    break;
                case '*':
                    operation = number1 * number2;
                    break;
                default:
                    break;
            }

            return `Your result for ${number1} ${operator} ${number2} is ${+operation.toFixed(3)}`;
        } else if ((/set[a]*timer/).test(command.split(" ").join(''))) {
            const timerValue = command.match(/\d[.\d]*/)[0];
            const timerString = command.split(" ").join('').match(/minutes|hours|seconds|milliseconds/)[0];
            let milliseconds = timerValue;
            if (timerString === 'seconds'){
                milliseconds = timerValue * 1000;
            } else if (timerString === 'minutes'){
                milliseconds = timerValue * 60 * 1000;
            } else if (timerString === 'hours'){
                milliseconds = timerValue * 60 * 60 * 1000;
            } 
            const setTimer = setTimeout(function() {
                console.log(`Timer done for ${timerValue} ${timerString}`);
            }, milliseconds);

            return `Timer set for ${timerValue} ${timerString}`
        } else {
            return 'Invalid command! Please check the command you have typed.'
        }

    } else {
        return "Command shouldn't be empty and should pass any command to get reply";
    } 
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add reading book to my todo"));
console.log(getReply("Add cooking to my todo"));
console.log(getReply("Add reading book to my todo"));
console.log(getReply('What is on my todo?'))
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('remove cleaning from my todo'))
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 33 + 3'))
console.log(getReply('what is 33 / 3'))
console.log(getReply('4 * 12.2'));
console.log(getReply('what is 23 % 2'))
console.log(getReply('what is the value of 4.8 - 3?'));
console.log(getReply('Set a timer for 5.45 seconds'));
// console.log(getReply('Set a timer for 5 hours'));
console.log(getReply('Set a timer for 0.1 minutes'));
console.log(getReply('Set a timer for 20000 milliseconds'));
console.log(getReply('check one '));
console.log(getReply());
console.log(getReply('       '));