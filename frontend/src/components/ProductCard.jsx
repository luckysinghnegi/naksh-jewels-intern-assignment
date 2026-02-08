import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        /* Use style={object} for inline styles */
        <div style={cardStyles.card}>
            <div style={cardStyles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.image}
                    style={cardStyles.image}
                />
            </div>
            <h3 style={cardStyles.title}>{product.name}</h3>
            <p style={cardStyles.price}>₹ {product.price}</p>
            <button
                style={cardStyles.button}
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

const cardStyles = {
    card: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '12px', // Slightly rounder for a modern look
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
        paddingBottom: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    imageContainer: {
        width: '100%',
        height: '250px',
        overflow: 'hidden',
        backgroundColor: '#fdfdfd',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain', // Best for jewelry to see the whole piece
        padding: '10px'
    },
    title: {
        fontSize: '1.1rem',
        fontWeight: '600',
        margin: '15px 10px 5px 10px',
        color: '#2c3e50',
        fontFamily: 'serif'
    },
    price: {
        fontSize: '1.2rem',
        color: '#b8860b', // Darker Gold for better readability
        fontWeight: 'bold',
        margin: '5px 0'
    },
    button: {
        marginTop: '10px',
        padding: '10px 24px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        border: 'none',
        borderRadius: '25px', // Pill shape looks more high-end
        cursor: 'pointer',
        fontWeight: '600',
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        letterSpacing: '1px',
        transition: 'background-color 0.2s'
    }
};

export default ProductCard;
