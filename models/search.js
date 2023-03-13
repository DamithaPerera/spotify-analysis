const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner: String,
}, {
    timestamps: true
});

const Search = mongoose.model('search', searchSchema);

module.exports = Search;
