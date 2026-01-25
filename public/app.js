window.onload = function () {
    loadNotes();
}

function loadNotes() {
    fetch('/api/notes/today')
        .then(response => response.json())
        .then(data => {
            const notesContainer = document.getElementById('notes-container');
            const notes = data.notes;
            
            if (notes.length === 0) {
                notesContainer.innerHTML = '<p>No notes today!</p>';
                return;
            }
            
            let html = '';
            notes.forEach(note => {
                html += `<div class="note">${note}</div>`;
            });
            
            notesContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}