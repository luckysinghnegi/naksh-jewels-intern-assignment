import products from "../data/products.js";
const CartMiddleware = (req, res, next) => {
    const { productId, quantity } = req.body;

    if (!productId) {
        return res.status(400).json({ message: "Product ID is required", success: false });
    }
    // 🔍 Check if product exists
    const productExists = products.find(
        products => products.id === productId
    );

    if (!productExists) {
        return res.status(404).json({
            message: "Product not found",
        });
    }

    if (!quantity || quantity <= 0) {
        return res.status(400).json({ message: "Quantity must be greater than 0", success: false });
    }

    next();
};

export default CartMiddleware;