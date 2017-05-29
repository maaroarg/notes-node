'use strict';
const fs = require('fs');
console.log('Starting notes');

var addNote = (title,body) => {
  var notes = [];
  var note = {
      title,
      body
  };

  try{
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  }catch(e){

  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Listing all notes');
};

var getNote = (title) => {
  console.log('Reading note');
};

var remove  = (title) => {
  console.log('Remove note',title);
};

module.exports = {
  addNote, //addNote : addNote (Siempre y cuando tengan el mismo nombre ES6)
  getAll,
  getNote,
  remove
};
