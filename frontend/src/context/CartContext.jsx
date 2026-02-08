import { createContext, useContext, useState } from "react";
import { addToCartAPI } from "../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = async (product) => {
        await addToCartAPI({
            productId: product.id,
            quantity: 1,
        });

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, qty) => {
        setCart(
            cart.map(item =>
                item.id === id ? { ...item, quantity: qty } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
