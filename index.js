console.log("allah pak hamein maaf farmaein")
/*let b=25,
c =35
console.log("c-b",b+c);*/


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("assalam alaikum.");
});

app.listen(3004, () => {
    console.log("Server port 3004 par start ho gaya hai!");
});
