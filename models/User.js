const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email : {
        type : String
    },
    password :{
        type : String,
    },
    refresh_token:{
        type : String,
    },
    orders : {
        type: Array,
    },
    createAt : {
        type: Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Users', UserSchema)