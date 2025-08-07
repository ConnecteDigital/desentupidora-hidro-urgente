import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "5531993173020";
  const phoneNumber = "31993173020";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Desentupidora Hidro Urgente
            </h3>
            <p className="text-gray-300 mb-4">
              Especialistas em desentupimento com atendimento 24 horas em Belo Horizonte e região. 
              Equipe qualificada, equipamentos modernos e garantia total em todos os serviços.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (31) 9317-3020
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Belo Horizonte e Região Metropolitana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-400" />
                <span className="text-gray-300">Atendimento 24 horas - Todos os dias</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicos" className="hover:text-white transition-colors">Desentupimento de Ralo</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Desentupimento de Cano</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Desentupimento de Esgoto</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Desentupimento de Vaso</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Desentupimento de Pia</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Limpeza de Caixa de Gordura</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#atendimento" className="hover:text-white transition-colors">Atendimento 24h</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              Precisa de Atendimento Emergencial?
            </h4>
            <p className="text-gray-300 mb-4">
              Entre em contato agora mesmo pelo WhatsApp e receba um orçamento gratuito!
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de um orçamento para desentupimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Desentupidora Hidro Urgente. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Atendimento 24 horas em Belo Horizonte e Região Metropolitana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

