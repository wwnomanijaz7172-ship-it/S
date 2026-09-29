
// getmodel.js
const mongoose = require("mongoose");

const getschema = new mongoose.Schema({
    name: String,
    hobby: String,
    company: String,
    price: String,
    generation: String,
    district:String
});

const getapi = mongoose.model('getapi', getschema, 'getapi');
module.exports = getapi;


