import { productModel } from "../../model/productModel.js";

export const productsList = async (req, res) =>{
    try {
        // const productList = await productModel.find()
        // res.json(productList)
        const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 6;
    const search = req.query.search || "";
    const list = await productModel
      .find({
        name: { $regex: search, $options: "i" },
      })
      .skip(page * limit)
      .limit(limit);
    const total = await productModel
      .find({
            name: { $regex: search, $options: "i" },
      })
      .count();
    const response = { list, page: page + 1, limit, total };
    res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}