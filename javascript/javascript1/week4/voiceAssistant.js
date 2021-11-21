let userName = '';
const todoList = [];
const mathOperators = ['%','-','/','+','*'];

function getReply (command) {
    if (command === undefined) {
        return 'Should pass any command to respond'
    } else if (command.trim().length === 0) {
        return `Command shouldn't be empty`;
    } else {
        command = command.trim().toLowerCase();
        if (command.includes('my name') && !command.includes('my name?')) {
            const commandArray = command.split(' ');
            const index = commandArray.indexOf('name');
            (commandArray[index + 1] === 'is') ? userName = commandArray[index + 2] : userName = commandArray[index + 1];
            return `Nice to meet to you ${userName}`;

        } else if (command.includes('my name?')) {
            if (userName.length === 0) {
                return 'Your name is not yet mentioned'
            }
            return `Your name is ${userName}`

        } else if ((/add [\w\s]+ to my todo/).test(command)) { //command.includes('add') && command.includes('to my todo')
            const index = command.indexOf('add') + 'add'.length;
            const myTodo = command.slice(index, command.indexOf('to my todo')).trim();
            if(todoList.includes(myTodo)) {
                return `${myTodo} is already present in your todo`
            }
            todoList.push(myTodo);
            return `${myTodo} added to your todo`;

        } else if ((/remove [\w\s]+ from my todo/).test(command)) {//command.includes('remove') && command.includes('from my todo')
            const index = command.indexOf('remove') + 'remove'.length;
            const removeFromTodo = command.slice(index, command.indexOf('from my todo')).trim();
            if(!todoList.includes(removeFromTodo)) {
                return `Can't remove ${removeFromTodo} as it is your new todo and not added in your todo list`;
            }
            todoList.splice(todoList.indexOf(removeFromTodo),1);
            return `Removed ${removeFromTodo} from my todo`;

        } else if (command.includes('my todo?')) {
            const todoString = todoList.join('\n');
            return `You have ${todoList.length} todos\n${todoString}`;

        } else if (command.includes('what day') || command.includes('today?')) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const today = new Date();
            return `${today.getDate()}. of ${months[today.getMonth()]} ${today.getFullYear()}`;

        } else if((/\d[+*/%-]\d/g).test(command.split(" ").join(''))) {
            const operationString = command.split(" ").join('').match(/\d[.\d]*[+*/%-]\d[.\d]*/g)[0];
            const operator = mathOperators.find(MathOperator => operationString.includes(MathOperator));
            const number1 = Number(operationString.slice(0,operationString.indexOf(operator))); //operationString.split(operator)[0]
            const number2 = Number(operationString.slice(operationString.indexOf(operator) + 1, operationString.length)); //operationString.split(operator)[1]
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
            return `Your result for ${number1} ${operator} ${number2} = ${+operation.toFixed(3)}`;

        } else if ((/set[a]*timer/g).test(command.split(" ").join(''))) {
            const timerString = command.split(" ").join('').match(/[\d][.\d]*minutes|[\d][.\d]*hours|[\d][.\d]*seconds/g)[0];
            const timeString = timerString.split(/[\d][.\d]*/g)[1];
            const timeValue = timerString.slice(0, timerString.indexOf(timeString))
            let milliseconds;
            if (timeString === 'hours') {
                milliseconds = timeValue * 60 * 60 * 1000;
            } else if (timeString === 'minutes') {
                milliseconds = timeValue * 60 * 1000;
            } else if (timeString === 'seconds') {
                milliseconds = timeValue * 1000;
            }

            const setTimer = setTimeout(function() {
               console.log(`Timer done for ${timerString}`);
            }, milliseconds);
            //clearTimeout(setTimer); //method stops the execution of the function specified in setTimeout()
            return `Waiting for timer to complete ${timerString}`;

        } else {
            return 'Invalid command! Please check the command you have typed.'
        }
    } 
}


console.log(getReply('  '));
console.log(getReply());
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply('What is on my todo?'));
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add reading book to my todo"));
console.log(getReply("Add cooking to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add dancing to my todo"));
console.log(getReply('What is on my todo?'))
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('remove cleaning from my todo'))
console.log(getReply('What is on my todo?'))
console.log(getReply('What day is it today?'))
console.log(getReply('what is 33 + 3'))
console.log(getReply('what is 33 / 3'))
console.log(getReply('4 * 12.2'));
console.log(getReply('what is 23 % 2'))
console.log(getReply('what is the value of 4.8 - 3?'));
console.log(getReply('Set a timer for 4 minutes'));
//console.log(getReply('Set a timer for 1 hours'));
console.log(getReply('Set a timer for 5 seconds'));
//console.log(getReply('what'));