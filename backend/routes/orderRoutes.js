import express from "express";
const router = express.Router();
import Order from "../modals/oderModal.js";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import AsyncHandler from "express-async-handler";
import { protect } from "../middlewares/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
export default router;
