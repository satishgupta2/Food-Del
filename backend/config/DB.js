import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://satishguptagps:Satish1&@foodcluster.4zrzcjn.mongodb.net/FoodOrdering').then(()=>console.log("DB Connected"));
}