import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://vennapusaswetha:Swetha_Vennapusa@fooddelivery.8j2hret.mongodb.net/?retryWrites=true&w=majority&appName=FoodDelivery').then(()=>console.log("DB Connected"));

}