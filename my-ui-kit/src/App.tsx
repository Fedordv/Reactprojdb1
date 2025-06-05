import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <BrowserRouter>
      {/* Если используешь контекст, оберни всё в него */}
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} /> {/* 404 */}
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
