const express = require('express');
const path = require('path');
const { saveNote, getTodayNotes } = require('./notes.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/save-note', (req, res) =>{
    const noteText = req.query.text;
    if (noteText) {
        const savedPath = saveNote(noteText);
        res.json({ success: true, path: savedPath });
    } else {
        res.json({ success: false, message: 'No note text provided' });
    }
})
app.get('/api/notes/today', (req, res) => {
    const notes = getTodayNotes();
    res.json({ notes });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});