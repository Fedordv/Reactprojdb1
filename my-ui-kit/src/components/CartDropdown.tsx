import { useCart } from '../context/CartContext';
import './Layout.css';

export default function CartDropdown() {
  const { cart, removeFromCart } = useCart();

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        right: 0,
        width: '300px',
        background: '#fff',
        border: '1px solid #ccc',
        padding: '1rem',
        zIndex: 100,
        color: 'black',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '4px',
      }}
    >
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {cart.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <strong>{item.title}</strong> × {item.quantity}
                <div style={{ fontSize: '0.9rem', color: '#555' }}>
                  {item.price * item.quantity} ₽
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: 'crimson',
                  color: '#fff',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
