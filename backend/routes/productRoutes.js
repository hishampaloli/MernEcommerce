import express from "express";
const router = express.Router();
import Product from "../modals/productModel.js";
import {getProducts, getProductsById} from '../controllers/productController.js'
import AsyncHandler from "express-async-handler";

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);


export default router;
