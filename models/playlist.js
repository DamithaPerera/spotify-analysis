const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    href: {
        type: String,
        required: true,
    },
    owner: {
        id: {
            type: String,
            required: true
        },
        name: String
    },
    tracks: {
        total: Number
    },
    images: [{
        url: String,
        width: Number,
        height: Number
    }]
}, {
    timestamps: true
});

const Playlist = mongoose.model('playlist', playlistSchema);

module.exports = Playlist;
