const mongoose = require('mongoose');
const env = require('dotenv');
const { CURSOR_FLAGS } = require('mongodb');
env.config();

mongoose.connect("mongodb+srv://hardiksawhney2:HY6y1rbbfvmTHV5F@cluster0.asseaca.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

    console.log("connected")
}).catch((error)=>{
console.log(error)

});


const schema = new mongoose.Schema({


    name:{

        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }
})

const collection  = new mongoose.model("users",schema);

module.exports = collection;