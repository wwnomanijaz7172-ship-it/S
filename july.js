const http =require("http");
const express =require ("express");
const app=express();

app.get("/",(req,res)=>{
return res.send("ye mera home page ha ");
});

app.get("/about",(req,res)=>{
    return res.send(` ${req.query.name},  ${req.query.age} `)
});
app.get("/contact",(req,res)=>{
    return res.send("ye mera contact page ha ")
})


const myserver=http.createServer(app);
myserver.listen(3005,()=>{
    console.log("sever running from port3005");
})