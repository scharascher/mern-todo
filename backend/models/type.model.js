const mongoose = require('mongoose');

const importanceSchema = new mongoose.Schema({
   importance: {
       type: Number,
       required: true,
       index: {
           unique: true
       }
   }
});

const Importance = mongoose.model('Importance', importanceSchema);

module.exports = Importance;
