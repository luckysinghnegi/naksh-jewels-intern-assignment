const isDocker = import.meta.env.MODE === "production";

const API_BASE_URL = isDocker
    ? "http://backend:3000"
    : import.meta.env.VITE_API_BASE_URL;

export const getProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/products`);
    return res.json();
};

export const addToCartAPI = async (data) => {
    const res = await fetch(`${API_BASE_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    return res.json();
};
