import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app=express();
const port=5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors())
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));


//db connection
connectDB()

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})



app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

