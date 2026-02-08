import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useCart();

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <nav style={styles.nav}>
            <h3>Naksh Jewels</h3>

            <div>
                <Link to="/" style={styles.link}>
                    Products
                </Link>

                <Link to="/cart" style={styles.link}>
                    Cart ({totalItems})
                </Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    link: {
        marginLeft: '25px',
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500',
        fontSize: '0.95rem',
        transition: 'color 0.3s ease'
    }
};


export default Navbar;
