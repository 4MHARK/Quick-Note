const { saveNote, getTodayNotes } = require('./notes');
let userArgs = process.argv.slice(2);

if (userArgs[0] === "--web") {
    console.log("Opening QuickNote dashboard...");
    // Start server and open browser
    require('./server.js');
    return;
}

if (userArgs.length === 0) {
    console.log("Usage: qnote 'your note'");
    console.log("       qnote --list");
    
} else if (userArgs[0] === "--list") {
    const notes = getTodayNotes();
    if (notes.length === 0) {
        console.log("No notes today!");
    } else {
        console.log("Today's notes:");
        notes.forEach(note => console.log(note));
    }
    
} else {
    const noteText = userArgs.join(' ');
    saveNote(noteText);
    console.log("✓ Note saved!");
}