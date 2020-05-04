const mongoose = require('mongoose');

const Raw = mongoose.Schema({
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('raws', Raw);