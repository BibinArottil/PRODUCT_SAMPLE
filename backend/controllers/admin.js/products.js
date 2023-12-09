import mongoose from "mongoose";
import { productModel } from "../../model/productModel.js";

export const products = async(req,res) =>{
    try {
        const productList = await productModel.find()
        res.json(productList)
    } catch (error) {
        console.log(error.message);
    }
}