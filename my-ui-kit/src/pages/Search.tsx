import { useState } from 'react';
import  {type Product } from '../context/CartContext';

const products: Product[] = [
  { id: 1, title: 'Ноутбук', price: 40000 },
  { id: 2, title: 'Телефон', price: 25000 },
  { id: 3, title: 'Часы', price: 8000 },
  { id: 4, title: 'Планшет', price: 30000 },
  { id: 5, title: 'Монитор', price: 15000 },
  { id: 6, title: 'Монитор', price: 15000 },
  { id: 7, title: 'Монитор', price: 15000 },
  { id: 8, title: 'Монитор', price: 15000 },
  { id: 9, title: 'Монитор', price: 15000 },
];

export default function Search() {
  const [query, setQuery] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Поиск товаров</h1>
      <input
        type="text"
        placeholder="Введите название..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1rem'
        }}
      />

      {filtered.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {filtered.map(p => (
            <li key={p.id}>{p.title} — {p.price} ₽</li>
          ))}
        </ul>
      )}
    </div>
  );
}
