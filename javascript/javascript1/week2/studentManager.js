const class07Students = [];

function addStudentToClass(studentName) {
  // You write code here
    if (studentName.trim().length !== 0) {
        if (class07Students.length < 6 || studentName === 'Queen Margrethe II'){
            if (!class07Students.includes(studentName)) {
                class07Students.push(studentName);
            } else {
                console.log(`${studentName} is already in the class`);
            }
        } else {
            console.log(`Cannot add more students to class 07`);
        } 
    } else {
        console.log(`Student name shouldn't be an empty string or only spaces`)
    }
}

function getNumberOfStudents() {
  // You write code here
  console.log(class07Students)
  return class07Students.length;
}

addStudentToClass(' ')
addStudentToClass('Shravya')
addStudentToClass('Vaishnavi')
addStudentToClass('Akshitha')
addStudentToClass('Akshitha')
addStudentToClass('Manjula')
addStudentToClass('Vinod')
addStudentToClass('Ravi')
addStudentToClass('Queen Margrethe II')
addStudentToClass('kumar')
addStudentToClass('')

console.log(`Number of students in the class : ${getNumberOfStudents()}`);