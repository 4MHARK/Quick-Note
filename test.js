const { saveNote } = require('./notes.js');

const savedPath = saveNote("Test note from our function!");
console.log("Note saved at:", savedPath);