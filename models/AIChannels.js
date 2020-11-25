const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AnalogInputChannelsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = AnalogInputChannel = mongoose.model('analoginputs', AnalogInputChannelsSchema);
