const mongoose = require('mongoose');
const User = require('./user.model');

const typeSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   userId: {
       type: mongoose.Types.ObjectId,
       ref: User
   }
});

const TodoTypeModel = mongoose.model('TodoType', typeSchema);

module.exports = TodoTypeModel;
