import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import SearchPage from './components/pages/searchPage';
import Header from './components/header';
/*
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import NotFoundPage from './NotFoundPage';
*/
function App() {
  const navItems = [
    { href: "/search", label: "Productos" },
    { href: "/categories", label: "Categorias" },
    { href: "/about", label: "Nosotros" },
    { href: "/contact", label: "Contacto" },
  ]
  return (
    <>
    <Header siteTitle="Si Bonitas" navItems={navItems} />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
    </>
  );
}
/*
<Route path="/about" element={<AboutPage />} />
<Route path="/products" element={<ProductsPage />} />
<Route path="*" element={<NotFoundPage />} />
*/
export default App;
