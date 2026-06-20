t addProduct = (req, res) => {
    const { name, price } = req.body;
    
    // Yahan database ma save karne ka logic aata ha
    res.status(201).json({
        success: true,
        message: "Product successfully add ho gaya ha!",
        data: { name, price }
    });
};

module.exports = { addProduct };





const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController");


router.post("/add-product", addProduct);

module.exports = router;.




// app.js (Basic/Simple tareeqa)
const express = require('express');
const app = express();
app.use(express.json());





app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    res.json({ message: "Login successful!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));