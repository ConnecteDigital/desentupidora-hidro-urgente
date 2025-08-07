import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoHidroUrgente from '../assets/logo-hidro-urgente.png';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5531993173020";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Atendimento 24 Horas</span>
            <span>•</span>
            <span>Orçamento Gratuito</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:31993173020"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              <Phone size={16} className="mr-1" />
              (31) 9317-3020
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de atendimento de desentupimento. Gostaria de um orçamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src={logoHidroUrgente} 
                alt="Logo Desentupidora Hidro Urgente" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-md"
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

