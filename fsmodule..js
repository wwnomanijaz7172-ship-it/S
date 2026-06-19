
const fs = require('fs');




const a=fs.readFileasync('second.js');
console.log(a)
console.log("file chall nhe rahe ");


fs.writeFile('noman2.txt', "yeh file achi lg rahe ha ky nhe", () => {

    console.log("written in the files");
})
fs.readFile('noman2.txt','utf8',(error,Data)=>{
console.log(error,Data)

})
const d=fs.readFileSync('noman2.txt')
console.log(d);

 e =fs.writeFileSync('noman2.txt',"file chall gaye ha")
console.log(e);