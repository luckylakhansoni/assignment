const Note = require('../models/note.model.js');
var request = require("request");
var fs = require('fs');



// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.url) {
        return res.status(400).send({
            message: "content can not be empty"
        });
    }
    request({uri: req.body.url}, 
    function(error, response, body) {
        const note = new Note({ 
        content: body
    });
    note.save()
    .then(data => {
        res.send(body);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
  });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

