import { Router } from "express";
import { productsList } from "../controllers/user/products.js";

const product = Router()

product.route("/products").get(productsList)

export default product

