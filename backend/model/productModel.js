import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    discription:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:true,
        trim:true
    }
})

export const productModel = mongoose.model("Product",productSchema)