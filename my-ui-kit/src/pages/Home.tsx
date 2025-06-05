import { PostList } from '../components/PostList/PostList';
import ProductCard from '../components/ProductCard';
import { type Product } from '../context/CartContext';
import './Home.css';
import '../components/layout.css';

const products: Product[] = [
  { id: 1, title: 'Ноутбук', price: 40000 },
  { id: 2, title: 'Телефон', price: 25000 },
  { id: 3, title: 'Часы', price: 8000 },
  { id: 4, title: 'Планшет', price: 30000 },
  { id: 5, title: 'Монитор', price: 15000 },
];

export default function Home() {
  return (
    <div className="home">
      <div className="wrapper-text">
        <h1 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>Добро пожаловать!</h1>
        <p style={{ fontSize: '1.1rem' }}>
          Это главная страница нашего мини-проекта на React.
        </p>
      </div>

      <div className="section">
        <h2>Посты</h2>
        <PostList />
      </div>

      <div className="section">
        <h2>Товары</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
