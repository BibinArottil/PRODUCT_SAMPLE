import {Router} from "express"
import { add } from "../controllers/admin.js/addProduct.js"
import { products } from "../controllers/admin.js/products.js"


const product = Router()
product.route("/add-product").post(add)
product.route("/products").get(products)

export default product