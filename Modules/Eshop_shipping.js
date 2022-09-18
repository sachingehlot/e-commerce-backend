const connection = require("./DbConnection");
const mongoose = require("mongoose");

const Eshop_shipping = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    city:{
        type:Varchar2,
        required:true,
    },
    lankmark:{
        type:Varchar3,
        required:true,
    },
    name:{
        type:Varchar4,
        required:true,
    },
    phone:{
        type:Varchar5,
        required:true,
    },
    state:{
        type:Varchar6,
        required:true,   
    },
    street:{
        type:Varchar7,
        required:true,
    },
    zipcode:{
        type:Varchar8,
        required:true,    
    },
    user_id:{
        type:Varchar9,
        required:true,    
    },
   

})

const Shipping_address = mongoose.model("shipping_address",Eshop_shipping);
module.exports = Shipping_address ;