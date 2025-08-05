import mongoose from "mongoose";
export default mongoose.models.user ||   mongoose.model('user',{
    name:String,
    password:String,
    nic:Number,
    email:{
        type:String,
        required:true
    },
    products:[]
})



