const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    firstPwChange: {
        type: Boolean,
        required: true
    }
});

module.exports = User = mongoose.model('users', UserSchema);