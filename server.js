const express = require("express");
const dotenv = require('dotenv')
const connectDB = require("./src/config/db");
const userRoutes = require('./src/routes/userRoutes')



dotenv.config({ path: './src/config/config.env' })

const app = express();
app.use(express.json());

app.use('/user', userRoutes);


console.log(process.env.JWT_EXPIRES_IN)
const port = 8000;

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`);
})