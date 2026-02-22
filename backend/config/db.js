// import mongoose from "mongoose";

// export const connectDB=async ()=>{
//     await mongoose.connect('mongodb+srv://vennapusaswetha:Swetha_Vennapusa@fooddelivery.8j2hret.mongodb.net/?appName=FoodDelivery').then(()=>console.log("DB Connected"));

// }
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vennapusaswetha:Swetha_Vennapusa@fooddelivery.8j2hret.mongodb.net/?appName=FoodDelivery"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error);
  }
};