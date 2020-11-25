const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AnalogOutputChannelsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = AnalogOutputChannel = mongoose.model('analogoutputs', AnalogOutputChannelsSchema);
