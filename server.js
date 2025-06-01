const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MongoURL)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err))


const taskRoutes = require("./controllers/routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

app.get("/",(req,res)=>{
    res.send("API WORKING GOOD")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running ${PORT}`))