
import express from "express";
const router = express.Router();
import Order from "../modals/oderModal.js";
import {addOrderItems} from '../controllers/orderController.js'
import AsyncHandler from "express-async-handler";
import {protect} from '../middlewares/authMiddleware.js'

router.route('/').post(protect, addOrderItems)

export default router