import { type Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>{product.title}</h3>
        <p style={{ margin: 0 }}>{product.price} ₽</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: '#1a73e8',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        ➕
      </button>
    </div>
  );
}
