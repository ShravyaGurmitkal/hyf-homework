const notes = [];

//Save a note
function saveNote(content, id) {
  // write some code here
  notes.push({
      content,
      id,
  })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Washing", 3)

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//Get a note
function getNote(id) {
    // your code here
    return (id !== undefined && typeof id === 'number') ? notes.find((note) => note.id === id) : "id should be a number and it shouldn't be empty";
}
  
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Log out notes
function logOutNotesFormatted() {
    // your code here
    notes.forEach(note => {
       console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`) 
    });
}
  
logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry


//Unique feature to pin the important note to top in the notes using id 
function toPinImpNotes(id) {
    if (id !== undefined && typeof id === 'number') {
        const impNote = notes.find(note => note.id === id) //finding the important note and storing to another variable
        notes.splice(notes.indexOf(impNote),1); //removing the impNote from the notes
        notes.unshift(impNote); //now adding the impNote at first
        console.log(notes);
    }
}

toPinImpNotes(2);