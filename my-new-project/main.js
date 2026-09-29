const express=require("express");
const mongoose=require("mongoose");
const updateroutes = require('./updateroutes');


const app=express();
app.use(express.json()); 


mongoose.connect('mongodb://localhost:27017/local');

app.use('/', updateroutes);

app.listen(3050,()=>{
    console.log("server is running on port s")
})