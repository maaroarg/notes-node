'use strict';
const fs = require('fs');

var addNote = ( title, body ) => {
  var notes = [];
  var note = {
      title,
      body
  };

  notes = _fetchNotes() ;

  //Controlo que no existan duplicados utilizando Array.filter
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    _saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return _fetchNotes();
};

var getNote = (title) => {
  var selectedNotes = [];
  var notes = _fetchNotes();
  selectedNotes = notes.filter( (note) => note.title === title);
  return selectedNotes[0];
};

var removeNote = (title) => {
  var notes = _fetchNotes();
  var filteredNotes = notes.filter( (note) => note.title !== title );
  _saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('----');
    console.log(`Title: ${ note.title }`);
    console.log(`Body: ${ note.body }`);
};

//Private Functions

var _fetchNotes = () => {
  //Leo el archivo de notas. Si no existe el catch captura el error y evita que el programa pinche
  try{
    return JSON.parse(fs.readFileSync('notes-data.json'));
  }catch(e){
    return [];
  }
};

var _saveNotes = ( notes ) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

module.exports = {
  addNote, //addNote : addNote (Siempre y cuando tengan el mismo nombre ES6)
  getAll,
  getNote,
  removeNote,
  logNote
};
