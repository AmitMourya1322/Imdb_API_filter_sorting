require("dotenv").config();
const express = require('express');
const movieRoutes = require('./routes/movies')
const cors =require('cors');
const dbConnect = require("./dbConnect");
const app = express();
dbConnect();
app.use(express.json());
app.use(cors())
app.use("/api",movieRoutes)

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("server is running on port 8080")
})
