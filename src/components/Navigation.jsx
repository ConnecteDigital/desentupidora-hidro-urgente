import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

// Páginas
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import Atendimento24hPage from '../pages/Atendimento24hPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'atendimento24h':
        return <Atendimento24hPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppFloat />
    </div>
  );
};

export default Navigation;

