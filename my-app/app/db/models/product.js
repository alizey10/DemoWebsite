import mongoose from "mongoose";


export default mongoose.models.product ||   mongoose.model('product', {
    name:String,
    owner: String,
    price:Number,
    description:String,
    src: String,
    preview: String
});
