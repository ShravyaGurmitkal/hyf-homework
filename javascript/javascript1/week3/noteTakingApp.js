//Save a note
const notes = [];

function saveNote(content, id) {
    notes.push({
        content,
        id,
    });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Cooking", 3);
console.log(notes);

//Get a note
function getNote(id) {
    if (id === undefined || typeof id !== 'number') {
        return "id shouldn't be empty and it should be a number";
    }
    return notes.find(note => note.id === id);
}
  
const firstNote = getNote(3);
console.log(firstNote); 

//Log out notes
function logOutNotesFormatted() {
    for (const note of notes) {
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`)
    }
}
  
logOutNotesFormatted();