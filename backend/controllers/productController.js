
import Product from "../modals/productModel.js";
import AsyncHandler from "express-async-handler";

const getProducts = AsyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products);
})

const  getProductsById = AsyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
})

export {getProducts, getProductsById}