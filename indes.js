const express= require('express');
const app = express();
const users= require ("./MOCK_DATA.json");
const port=3005;



const access = [
    { id: 1, name: "Noman Ijaz", role: "Developer" },
    { id: 2, name: "Ali Ahmed", role: "Designer" },
    { id: 3, name: "Sara Khan", role: "Manager" }
];

app.get('/api/access', (req, res) => {
        res.status(200).json(access);
});

app.get("/api/access/:id",(req,res)=>{
 const id=Number(req.params.id);
 const user =access.find((user)=>user.id===id)
 res.json(user);
})
app.get("/api/users",(req,res)=>{
 return res.json(users);
})
app.get("/api/users/:id",(req,res)=>{
 const id=Number(req.params.id);
 const user =users.find((user)=>user.id===id)
 res.json(user);
})
app.get("/users",(req,res)=>{
const html="<h1>noman</h1>";
return res.send(html);

})
app.post("/api/users",(req,res)=>{
    const newUser={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(newUser);
    return res.status(201).json(newUser);
});
app.put("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user =users.find((user)=>user.id===id)
    res.json(user);
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
