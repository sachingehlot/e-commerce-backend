const mongoose = require("mongoose");

 require("dotenv").config();

const uri = process.env.URI;


const connection = mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true})
.then(()=> 
{console.log(`Database is Connected`)})
.catch((err)=>
 {console.log(`Database is not connected!!!! ${err}`)})

module.exports = connection;