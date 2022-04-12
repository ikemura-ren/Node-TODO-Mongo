const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRoute = require("./routes/tasks");
require("dotenv").config();

const PORT = 5000;

app.use("/api/v1/tasks" ,taskRoute);

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL);
            app.listen(PORT, console.log("サーバーが起動しました"));
    }catch(err){
        console.log(err);
    }
}

start();
