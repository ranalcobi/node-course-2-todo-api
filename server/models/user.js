var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        trim: true,
        requiered: true
    }
})

module.exports = {User}