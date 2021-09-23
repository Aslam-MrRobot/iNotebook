const mongoose = require('mongoose')
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:Number,
        required:true
    }
  });

module.exports = mongoose.model('user',UsersSchema)