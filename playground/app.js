const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

fs.writeFileSync('note.json',JSON.stringify(originalNote));
var note = JSON.parse(fs.readFileSync('note.json'));

console.log(typeof note);
console.log(note);
