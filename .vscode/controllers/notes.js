const express = require('express');
const router = express.Router();

// Mock data
let notes = [
    { id: 1, title: 'Note 1', content: 'Content of Note 1' },
    { id: 2, title: 'Note 2', content: 'Content of Note 2' },
];

// Create a new note
router.post('/notes', (req, res) => {
    const { title, content } = req.body;
    const newNote = {
        id: notes.length + 1,
        title,
        content
    };
    notes.push(newNote);
    res.status(201).json(newNote);
});

// Get all notes
router.get('/notes', (req, res) => {
    res.status(200).json(notes);
});

// Get a single note by ID
router.get('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (note) {
        res.status(200).json(note);
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

// Update a note by ID
router.put('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (note) {
        const { title, content } = req.body;
        note.title = title;
        note.content = content;
        res.status(200).json(note);
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

// Delete a note by ID
router.delete('/notes/:id', (req, res) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        res.status(204).json();
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

module.exports = router;
