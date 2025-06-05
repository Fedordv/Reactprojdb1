import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';
import './layout.css';
import './Header.css';

export default function Header() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container2 header-content">
        <nav className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
           <Link to="/search">Поиск</Link> {/* Новая кнопка */}
        </nav>

        <div className="cart-wrapper">
          <button className="cart-btn" onClick={() => setOpen(prev => !prev)}>
            🛒 <span className="cart-count">{cart.length}</span>
          </button>
          {open && <CartDropdown />}
        </div>
      </div>
    </header>
  );
}
