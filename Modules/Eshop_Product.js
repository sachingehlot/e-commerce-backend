const connection = require("./DbConnection");
const mongoose = require("mongoose");

const Eshop_Product = new mongoose.Schema({
    product_id:{
        type:Number,
        required:true,
    },
    avaliable_items:{
        type:Number,
        required:true,
    },
    categary:{
        type:Varchar2,
        required:true,
    },
    created:{
        type:Data,
        required:true,
    },
    discripation:{
        type:Varchar2,
        required:true,
    },
    imgs_url:{
        type:Varchar2,
        required:true,   
    },
    manufacturer:{
        type:Varchar2,
        required:true,    
    },
    name:{
        type:Varchar2,
        required:true,    
    },
    price:{
        type:Double,
        required:true,
    },
    updated:{
        type:Date,
        required:true,
    },


})

const Product = mongoose.model("Product",Eshop_Product);
module.exports = product ;