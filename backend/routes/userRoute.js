import express from "express";
const router = express.Router();
import {authUser, getUserProfile, registerUser, updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middlewares/authMiddleware.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.route('/login').post(authUser);
router.route('/').post(registerUser);
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile);


export default router;
