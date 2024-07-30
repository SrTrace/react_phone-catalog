import './App.scss';
import './styles/main.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SideMenu } from './components/SideMenu';
import { HomePage } from './pages/HomePage';
import { useState } from 'react';
import { ProductPage } from './pages/ProductPage';

export const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <h1 className="visually-hidden">Product Catalog</h1>
      <Header activePage={page} goToPage={setPage} />

      <SideMenu />

      <div className="container">
        {page === 'home' && <HomePage />}
        {page === 'phones' && <ProductPage />}
      </div>

      <Footer />
    </div>
  );
};
