const connection = require("./DbConnection");
const mongoose = require("mongoose");

const Eshop_user = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    created:{
        type:Data,
        required:true,
    },
    email:{
        type:varchar2,
        required:true,
    },
    first_name:{
        type:varchar2,
        required:true,
    },
    last_name:{
        type:varchar2,
        required:true,
    },
    password:{
        type:varchar2,
        required:true,
    },
    phone_number:{
        type:varchar2,
        required:true,
    },
    role:{
        type:varchar2,
        required:true,
    },
    updated:{
        type:Date,
        required:true,
    },
    user_name:{
        type:varchar2,
        required:true,   
    },
    
   

})

const user = mongoose.model("order", Eshop_user);
module.exports = user;