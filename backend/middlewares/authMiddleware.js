import jwt from "jsonwebtoken";
import User from "../modals/userModal.js";
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decoded.id).select('-password')
        console.log(req.user);

        next()
    } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error('Not authorized, token fail')
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Autherized')
  }
});

export { protect };
