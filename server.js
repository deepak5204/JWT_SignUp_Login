import express from 'express';

const app = express();


const port = 4000;

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`);
})