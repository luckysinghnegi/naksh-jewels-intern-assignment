let cart = [];

const addToCart = (req, res) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        res.status(404).json({ success: false, message: "Product Id and quantity is required" })
    }

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }

    res.status(201).json({
        message: "Item added to cart",
        cart,
        success: true
    });
};

export default addToCart;
