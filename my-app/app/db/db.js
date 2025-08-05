import mongoose from "mongoose";
export function connect(){
    mongoose.connect(process.env.MONGO_ONLINE).then((resp)=>{
        console.log("new db");
    }).catch((err) => {
    console.error(" MongoDB connection error:", err);
})
}