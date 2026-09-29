const express=require("express");
const mongoose=require("mongoose");
const routes=require('./getroutes');

const app=express();
app.use(express.json());//midleware//

mongoose.connect('mongodb://localhost:27017/local');

app.use('/',routes);

app.listen(3100,()=>{
 console.log("server is running on port 3100")   
})