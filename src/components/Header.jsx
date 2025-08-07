import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoHidroUrgente from '../assets/logo-hidro-urgente-final.png';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5531993173020";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Adiciona scroll para o topo da página
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src={logoHidroUrgente} 
                alt="Logo Desentupidora Hidro Urgente" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover shadow-md"
              />
              <h1 className="text-xl md:text-3xl font-bold text-blue-600">
                Desentupidora Hidro Urgente
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Início
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className={`font-medium transition-colors ${currentPage === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Serviços
              </button>
              <button 
                onClick={() => handleNavClick('atendimento24h')}
                className={`font-medium transition-colors ${currentPage === 'atendimento24h' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Atendimento 24h
              </button>
              <button 
                onClick={() => handleNavClick('blog')}
                className={`font-medium transition-colors ${currentPage === 'blog' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`font-medium transition-colors ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`text-left font-medium transition-colors py-2 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Início
                </button>
                <button 
                  onClick={() => handleNavClick('services')}
                  className={`text-left font-medium transition-colors py-2 ${currentPage === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Serviços
                </button>
                <button 
                  onClick={() => handleNavClick('atendimento24h')}
                  className={`text-left font-medium transition-colors py-2 ${currentPage === 'atendimento24h' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Atendimento 24h
                </button>
                <button 
                  onClick={() => handleNavClick('blog')}
                  className={`text-left font-medium transition-colors py-2 ${currentPage === 'blog' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Blog
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className={`text-left font-medium transition-colors py-2 ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Contato
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

