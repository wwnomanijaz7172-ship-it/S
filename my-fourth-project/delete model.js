const mongoose = require("mongoose");


const deleteschema = new mongoose.Schema({
    
        name: String,
        type: String,
        company: String,
        price: Number,
        generation: String,
        production: String,
        education:String,
        skill:String
    }
)
const model = mongoose.model(`deletapi`, deleteschema, `deleteapi`);
module.exports = model