import express from "express";
import router from "./Routers/Rooms.js";

const app=express();
const PORT=4000;

app.use(express.json());

app.use('/api',router);
app.get("/",(req,res)=>
{
    res.status(200).send("Api is running");
})

app.listen(PORT,()=>
{
    console.log("App is runnig in the port",PORT)
})