const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRoute = require("./routes/tasks");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("./public/"));

app.use("/api/v1/tasks" ,taskRoute);


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL || process.env.MONGODB_URI);
            app.listen(PORT, console.log("サーバーが起動しました"));
    }catch(err){
        console.log(err);
    }
}

start();
