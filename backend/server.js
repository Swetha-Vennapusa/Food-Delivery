import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config"
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//app config
const app=express();
// const port=5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors())
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));


//db connection
connectDB()

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
    console.log("git status check")
})

