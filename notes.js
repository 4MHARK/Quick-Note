const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, 'notes-data');

if (!fs.existsSync(NOTES_DIR)) {
    fs.mkdirSync(NOTES_DIR, {
        recursive: true
    });
    console.log('Created notes-data directory');
}

function saveNote(text) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    const day = today.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    const hour = today.getHours().toString().padStart(2, '0');
    const minute = today.getMinutes().toString().padStart(2, '0');
    const timeString = `${hour}-${minute}`;
    const filePath = path.join(NOTES_DIR, dateString + '.md');
    const noteEntry = `[${hour}:${minute}] ${text}\n`;
    const fileContent = fs.appendFileSync(filePath, noteEntry, 'utf8');
    console.log(`Note saved to ${filePath}`);

    return filePath;
}

function getTodayNotes() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    const day = today.getDate().toString().padStart(2, '0');
    const filePath = path.join(NOTES_DIR, `${year}-${month}-${day}.md`);

    if (fs.existsSync(filePath)) {
         const fileContent = fs.readFileSync(filePath, 'utf8');
        return fileContent.split('\n').filter(line => line.trim() !== '');
    }
    return [];

}




module.exports = {
    saveNote,
    getTodayNotes,
};