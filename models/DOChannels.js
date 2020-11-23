const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DigitalOutputChannelsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    aliasOFF: {
        type: String,
        required: true
    },
    aliasON: {
        type: String,
        required: true
    },
    chNumber: {
        type: Number,
        required: true
    },

});

module.exports = DigitalOutputChannel = mongoose.model('digitaloutputs', DigitalOutputChannelsSchema);
