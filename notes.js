'use strict';
console.log('Starting notes');

var addNote = (title,body) => {
  console.log('Adding Note',title,body);
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
