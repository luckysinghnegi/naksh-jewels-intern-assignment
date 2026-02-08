import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart = [], removeFromCart, updateQuantity } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    return (
        <div style={cartStyles.container}>
            <h2 style={cartStyles.header}>Shopping Bag</h2>

            {cart.length === 0 ? (
                <p style={cartStyles.emptyMsg}>Your bag is currently empty.</p>
            ) : (
                <div style={cartStyles.cartGrid}>
                    {/* Item List */}
                    <div style={cartStyles.itemList}>
                        {cart.map(item => (
                            <div key={item.id} style={cartStyles.itemRow}>
                                <img src={item.image} alt={item.name} style={cartStyles.thumb} />

                                <div style={cartStyles.details}>
                                    <h4 style={cartStyles.itemName}>{item.name}</h4>
                                    <p style={cartStyles.itemPrice}>₹ {item.price}</p>
                                </div>

                                <div style={cartStyles.controls}>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        style={cartStyles.input}
                                        onChange={e => updateQuantity(item.id, Number(e.target.value))}
                                    />
                                    <button
                                        style={cartStyles.removeBtn}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Sidebar */}
                    <div style={cartStyles.summary}>
                        <h3 style={cartStyles.summaryTitle}>Summary</h3>
                        <div style={cartStyles.summaryRow}>
                            <span>Subtotal</span>
                            <span>₹ {totalPrice}</span>
                        </div>
                        <button style={cartStyles.checkoutBtn}>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const cartStyles = {
    container: { padding: '40px 5%', maxWidth: '1100px', margin: '0 auto' },
    header: { fontFamily: 'serif', fontSize: '2rem', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '30px' },
    emptyMsg: { textAlign: 'center', marginTop: '50px', color: '#666' },
    cartGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' },
    itemRow: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #f5f5f5'
    },
    thumb: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '20px' },
    details: { flex: 1 },
    itemName: { margin: '0 0 5px 0', fontSize: '1.1rem', fontWeight: '500' },
    itemPrice: { color: '#d4af37', fontWeight: 'bold', margin: 0 },
    controls: { display: 'flex', alignItems: 'center', gap: '15px' },
    input: { width: '50px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' },
    removeBtn: { background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '1.2rem' },
    summary: {
        padding: '30px',
        backgroundColor: '#fdfdfd',
        borderRadius: '8px',
        height: 'fit-content',
        border: '1px solid #eee'
    },
    summaryTitle: { marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '15px' },
    summaryRow: { display: 'flex', justifyContent: 'space-between', margin: '20px 0', fontWeight: 'bold', fontSize: '1.2rem' },
    checkoutBtn: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#222',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    }
};

export default Cart;
