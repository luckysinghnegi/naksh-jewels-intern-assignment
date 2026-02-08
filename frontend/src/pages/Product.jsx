import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api.js";
import ProductCard from "../components/ProductCard";

const styles = {
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '40px',
        padding: '40px 5%',
        maxWidth: '1400px',
        margin: '0 auto',
    }
};

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getProducts();
                setProducts(response?.products || []);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Naksh Jewels...</div>;

    return (
        <div style={styles.productsGrid}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;


