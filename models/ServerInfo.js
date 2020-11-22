const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ServerInfoSchema = new Schema({
    serverName: {
        type: String,
        required: true,
    },
    serverLocation: {
        type: String,
        required: true
    }
});

module.exports = ServerInfo = mongoose.model('serverInfo', ServerInfoSchema);
