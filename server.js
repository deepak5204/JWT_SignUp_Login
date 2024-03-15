const express = require("express");
const connectDB = require("./src/config/db");
// const userRoutes = require('./routes/userRoutes')
const userRoutes = require('./src/routes/userRoutes')

const app = express();
app.use(express.json());

app.use('/user', userRoutes);


const port = 8000;

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`);
})