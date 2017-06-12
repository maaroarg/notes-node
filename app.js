'use strict';

//Dependecies
const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

//My own modules
const notes = require('./notes');

//Help command const
const titleCommand = {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    };

const bodyCommand = {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    };

//Catch arguments from command line
const argv = yargs
  .command('add','Add new note',{
    title: titleCommand,
    body: bodyCommand
  })
  .command('list','List all notes')
  .command('read','Get a note',{
    title: titleCommand
  })
  .command('remove','Remove a note', {
    title : titleCommand
  })
  .help()
  .argv;
var command = argv._[0];

//console.log('Command:', command);
//console.log('Yargs',argv);

//Select the right action
if (command == 'add'){

  var note = notes.addNote( argv.title, argv.body );

  if( note ){
    console.log( 'Note added OK!' );
    notes.logNote(note);
  }else{
    console.log( 'Title already in use!' );
  }

} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach( (note) => notes.logNote(note));
} else if (command === 'read') {

  var note  = notes.getNote(argv.title);
  if ( note ) {
    console.log( 'Note found!' );
    notes.logNote(note);
  }
  else {
    console.log(`Note ${argv.title} not found :(`);
  }
  
} else if (command === 'remove') {

  var ret = notes.removeNote(argv.title);
  var message = ret ? 'Note removed!' : 'Note not found :(';
  console.log(message);

} else{
  console.log('Unrecognized command. Hint! node app.js command --arguments=data');
}
