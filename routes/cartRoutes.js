import express from 'express';
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"
import authMiddleware from '../middleware/auth.js';
const cartrRouter = express.Router();

cartrRouter.post("/add", authMiddleware, addToCart);
cartrRouter.post("/remove", authMiddleware, removeFromCart);
cartrRouter.post("/get",authMiddleware, getCart);

export default cartrRouter;
