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
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import BlogPost3 from './BlogPost3';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedBlogPostId, setSelectedBlogPostId] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'atendimento24h':
        return <Atendimento24hPage />;
      case 'blog':
        return <BlogPage onReadMore={setSelectedBlogPostId} />;
      case 'contact':
        return <ContactPage />;
      case 'blogPost':
        if (selectedBlogPostId === 1) return <BlogPost1 />;
        if (selectedBlogPostId === 2) return <BlogPost2 />;
        if (selectedBlogPostId === 3) return <BlogPost3 />;
        return <BlogPage onReadMore={setSelectedBlogPostId} />;
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

