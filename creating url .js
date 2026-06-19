/*import url from 'url'
/*const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
 console.log(myURL);
 console.log(myURL.href)



 const youURL = new URL('https://example.org/foo#bar');
console.log(youURL.hash);
youURL.hash = 'baz';
console.log(youURL.href)


const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);


setURL.host = 'example.com:82';
console.log(setURL.href);


const simURL = new URL('https://abc:xyz@example.com');
console.log(simURL.password);
// Prints xyz

simURL.password = '548';
console.log(simURL.href);


const apnaurl=new URL('https://akm:ump@noman.com');
console.log(apnaurl.href);
apnaurl.password='complexpassword';
console.log(apnaurl.href);*/
// Step 1: Express tool ko apne code mein shamil (import) karein
// Step 1: Express tool ko apne code mein shamil (import) karein
const express = require('express');
const app = express();

// Step 2: Computer ko batayein ke data JSON format mein aayega
app.use(express.json());

// Fake Data: Farz karein ye data database se aa raha hai
const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" }
];

// Step 3: GET Route banana (Jab koi website/app users ka data mangaygi)
app.get('/api/users', (req, res) => {
    // Hum response (res) mein users ki list bhej rahe hain
    res.json(users);
});

// Step 4: Server ko active karna
app.listen(3000, () => {
    console.log("Aapki API Server Port 3000 par chal rahi hai!");
});
