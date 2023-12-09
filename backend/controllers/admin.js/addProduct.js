import { productModel } from "../../model/productModel.js";

export const add = async (req, res) =>{
    try {
        const name = req.body.value.name
        const discription = req.body.value.discription
        const price = parseInt(req.body.value.price)
        const image = req.body.value.image
        await productModel.create({
            name,
            discription,
            price,
            image
        })
        res.json({message:"New product add"})
    } catch (error) {
        console.log(error.massage);
    }
}