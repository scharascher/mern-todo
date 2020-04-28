const mongoose = require('mongoose');
const User = require('./user.model');
const Type = require('./type.model');

const exerciseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Type,
    },
    description: {
        type: String,
        required: true,
    },
    importance: {
        type: Number,
        enum: [0, 1, 2]
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
