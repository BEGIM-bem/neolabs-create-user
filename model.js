const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 10
    },
    phone: {
        type: String,
        default: ''
    }
});

exports.UserModel = mongoose.model('user', userSchema);