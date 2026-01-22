window.onload = function () {
    loadNotes();
}

function loadNotes() {
    fetch('/api/notes/today')
        .then(response => response.json())
        .then(data => {
            data.notes.forEach(note => {
                const getElement = document.getElementById('notes-container');
                const notes = data.notes;
                if (notes.length === 0) {
                    notesContainer.innerHTML = `<p> No Notes Logged in Today</p>`;
                    return;
                }

                let html = '';
                for(let i = 0; i < notes.length; i++) {
                    html += `<div class = "note"> + note[i] + </div>`;
                }

            })
           
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
