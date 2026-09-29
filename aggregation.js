const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // JSON data read karne ke liye

// Local MongoDB Connection
mongoose.connect('mongodb://localhost:27017/local')

// Schema aur Model banana (`postapi` collection ke liye)

const postApiSchema = new mongoose.Schema({
    name: String
});

// 2. Model sirf aik dafa banayein (exact collection name ke sath)
const PostApi = mongoose.model('postapi', postApiSchema, 'postapi');


const PostApi = require('../models/postModel');

// 1. Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await PostApi.find();
        res.status(200).json({ success: true, count: users.length, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Create User (POST)
exports.createUser = async (req, res) => {
    try {
        const newUser = new PostApi({ name: req.body.name });
        const savedData = await newUser.save();
        res.status(201).json({ success: true, message: "Data successfully insert ho gaya!", data: savedData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Update User (PUT)
exports.updateUser = async (req, res) => {
    try {
        const targetName = req.params.oldName;
        const newName = req.body.name;

        const updatedData = await PostApi.findOneAndUpdate(
            { name: targetName },
            { $set: { name: newName } },
            { returnDocument: 'after' }
        );

        if (!updatedData) {
            return res.status(404).json({ success: false, message: "Record nahi mila!" });
        }

        res.status(200).json({ success: true, message: "Data successfully update ho gaya!", data: updatedData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 4. Delete User (DELETE)
exports.deleteUser = async (req, res) => {
    
        const targetName = req.params.name;
        const deletedData = await PostApi.findOneAndDelete({ name: targetName });

        if (!deletedData) {
            return res.status(404).json({ success: false, message: "Record nahi mila!" });
        }

        res.status(200).json({ success: true, message: "Data successfully delete ho gaya!", data: deletedData });
    } ;