import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className='notfound'>
      <h1>404 - Страница не найдена</h1>
      <p>Такой страницы не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

