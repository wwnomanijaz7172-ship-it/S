const mongoose=require("mongoose");


const postschema= new mongoose.Schema({
      
        type:String,
        name:String,
        company:String,
        price:Number,
        generation:String 
      })
const postapi=mongoose.model(`postapi`,postschema,`postapi`);
module.exports=postapi;