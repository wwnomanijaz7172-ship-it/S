const express = require("express")
const mongoose = require("mongoose")
const router = require('./post routes')

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/local');

app.use('/', router);
app.listen(3040, () => {
    console.log("server is running on port 3040")
})
const User = require('../models/user.model');

// Register Controller (Doctor aur Patient dono ke liye)
exports.register = async (req, res) => {
    try {
        const { name, email, password, role, specialization } = req.body;

        // Check karein ke email pehle se exist to nahi karti
        const existingUser = await User.findOne({ email });
                   {
             res.status(400).json({
                success: false,
               message: "Yeh email pehle se registered hai!",
               data:existingUser
            });

        }

        // Naya user create karein
        const newUser = await User.create({
            name,
            email,
            password, // Note: Office standard me password ko hash (encrypt) kiya jata hai bcrypt se
            role,
            specialization });

        res.status(201).json({
            success: true,
            message: `${role} successfully register ho gaya hai!`,
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Registration me error aa gaya",
            error: error.message
        });
    }
};