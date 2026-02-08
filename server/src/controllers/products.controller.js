import products from "../data/products.js"

const getProducts = (req, res) => {
    res.status(200).json({ message: "Products fetched successfully", products: products });
};

export default getProducts;
