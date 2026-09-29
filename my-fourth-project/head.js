const express = require("express");
const mongoose = require("mongoose");
const routes = require('./delete routes')

const app = express();
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/local`)
app.use('/', routes);

app.listen(4000, () => {
    console.log("server is running on port 4000")
});