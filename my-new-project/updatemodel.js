
                       //MODEL//

const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({

        type: String,
        name:String,
        district:String,
        price:Number
})
module.exports = mongoose.model('updateapi', updateSchema,'updateapi');


















