const http = require('http');
const fs=require("fs");
const myserver = http.createServer((req, res) => {
    res.write("wah kiya bat ha ");
    res.end()
    const log='$'
    
})

myserver.listen(8002, () => {
    console.log("server is running on port 8002");
})


