


const checkAuth = (req, res, next) => {
   const userToken = req.headers.authorization;

   if (!userToken || userToken !== "my-secret-token") {

      return res.status(401).json({ message: "Aap logged in nahi hain!" })
   }

   next();
};
app.get("/profile", checkAuth, (req, res) => {
   return res.status(200).json({ name: "Ali", email: "ali@email.com" });
});















const checkAdmin = (req, res, next) => {
    const userRole = req.headers.role; 
    if (userRole !== "admin") {
   
        return res.status(403).json({ message: "Sirf Admin yeh kaam kar sakta hai!" });
    }

    next();
};

app.delete("/delete-user/:id", checkAdmin, (req, res) => {
    return res.status(200).json({ message: "User kamyabi se delete ho gaya." });
});













app.use(express.json()); 


app.post("/register", (req, res) => {

 const { username, password } = req.body;  
 
 return res.status(201).json({ message: `User ${username} register ho gaya.` });
});









