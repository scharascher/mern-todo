const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        index: {
            unique: true
        }
    },
    password: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

// hash the password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
