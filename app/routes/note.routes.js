module.exports = (app) => {
    const data = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/save', data.create);

    // Retrieve all Notes
    app.get('/notes', data.findAll);
}