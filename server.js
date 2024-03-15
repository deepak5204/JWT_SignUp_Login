const express = require("express");
const connectDB = require("./src/config/db");

const app = express();


const port = 4000;

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`);
})