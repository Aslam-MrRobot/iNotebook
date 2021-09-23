const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type:String
    },
    discription:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.new
    }
  });

module.exports = mongoose.model('notes',NotesSchema)