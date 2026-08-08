const {add,multiply}=require("./mew.js");
console.log("math is value for",multiply(10,20));
console.log("math is value for",add(10,20));


const fs=require('fs');

const read=fs.writeFileSync("./write.text","ye ha sync built in modules");
    console.log(read);
        fs.writeFile("./write.text","This is a new line of a sync",async(err)=>{});


     const resuilt=  fs.readFileSync("./king.js","utf-8");
console.log(resuilt);
fs.readFile("./king.js","utf-8",(err,correct)  =>{
    if(err){
        console.log("error",err)}
        else{
            console.log(correct)
        }
})


fs.readFile("write.text",'utf-8',(error,answer)=>{
if(error){
    console.log(error);
}else{
console.log(answer);

}
})

fs.appendFileSync("./king.js", `${new Date().toLocaleString()}\n`);
fs.appendFileSync("./king.js", `${new Date().getDate().toLocaleString()}\n`);


fs.copyFileSync("king.js","noman.js");

console.log(fs.statSync("./king.js").isFile());

const os=require('os');
os.totalmem();
os.freemem();
console.log(os.totalmem());
console.log(os.freemem());
   console.log(os.hostname());
   console.log(os.cpus().length);

fs.readFile("./king.js","utf-8",(err,correct)=>{
    if(err){
        console.log("error",err)}
    else{
        console.log(correct)
    }
}
)
console.log(" new line of code");
console.log("this is a  line of code");
console.log("this is a  of code")

const http=require("http");
const  myserver=http.createserver=(req,res)=>{
res.write ("ye ha mera pehla server");
res.end()
}
myserver.listen(3006,()=>{
    console.log("server is running on port 3006");
});