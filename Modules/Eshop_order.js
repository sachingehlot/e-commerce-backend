const connection = require("./DbConnection");
const mongoose = require("mongoose");

const Eshop_order = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    amount:{
        type:Double,
        required:true,
    },
    order_data:{
        type:Data,
        required:true,
    },
    Product_Product_id:{
        type:Number,
        required:true,
    },

    Shipping_address:{
        type:String,
        required:true,   
    },
    
   

})

const order = mongoose.model("order", Eshop_order);
module.exports = order;