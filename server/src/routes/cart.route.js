import express from "express"
import CartMiddleware from "../middleware/validateCart.middleware.js"
import addToCart from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/", CartMiddleware, addToCart);

export default router;
