const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Highscore Schema
const highScoreSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    },
    gamemode: {
        type: String,
        required: true,
    },
});

module.exports = Highscore = mongoose.model('Highscore', highScoreSchema);