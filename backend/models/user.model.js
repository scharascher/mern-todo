const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.plugin(passportLocalMongoose);
const User = mongoose.connection.model('User', userSchema);
module.exports = User;
