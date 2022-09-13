import express from "express";
const router = express.Router();
import Product from "../modals/productModel.js";
import AsyncHandler from "express-async-handler";

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
