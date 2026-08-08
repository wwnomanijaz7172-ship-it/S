let a=44;   
b=33;
console.log(a+b)
console.log("aj ka dewan")
console.log(" ka dewana")

function sas(a,b,v){
    return a+b+v
}
function sa(a,b){
    return a+b
}
module.exports={sas,sa};

//FS SYSTEM MODULE
const fs=require('fs');
fs.writeFileSync('output.txt','hello noman how are you');
fs.appendFileSync('output.txt','hello noman how are you');
const data=fs.readFileSync('react.js','utf-8',);
console.log(data);

const os=require('os');
console.log(os.cpus().length);


const http=require('http');
const vgh=http.createServer((req,res)=>{
    console.log(req);
    res.end("  how are you");
});
vgh.listen(4008, () => {
    console.log("server is running on port 4001");
});