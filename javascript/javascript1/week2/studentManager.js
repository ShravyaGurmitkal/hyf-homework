const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if(studentName.trim().length === 0) {
    console.log('You cannot add an empty string to a class');
  } else if(class07Students.length > 6 && studentName !== 'Queen') {
    console.log("Cannot add more students to class 07");
  } else if(class07Students.includes(studentName)) {
    console.log(`${studentName} Student is already in the class`);
  } else {
    class07Students.push(studentName);
    console.log(`${studentName} Student is added to the class07`)
  }
}

function getNumberOfStudents() {
  // You write code here
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
addStudentToClass('Queen')
addStudentToClass('kumar')
addStudentToClass('')

console.log(`number of students in the class07 ${getNumberOfStudents()}`);