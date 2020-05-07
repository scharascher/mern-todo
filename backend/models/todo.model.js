const mongoose = require('mongoose');
const User = require('./user.model');
const Type = require('./todoType.model');

const todoSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true,
        },
        typeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Type,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        priority: {
            type: Number,
            enum: [0, 1, 2],
        },
        duration: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
