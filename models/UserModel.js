//UserModel.js
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);