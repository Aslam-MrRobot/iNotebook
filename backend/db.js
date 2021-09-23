const mongoose = require('mongoose')

const mongooseURL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongooseURL, ()=>{
        console.log("mongo is connected")
    })
}

module.exports = connectToMongo;