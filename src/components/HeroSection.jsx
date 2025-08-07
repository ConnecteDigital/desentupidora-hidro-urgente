import { Phone, CheckCircle, Clock, Shield, Users } from 'lucide-react';
import logoHidroUrgente from '../assets/logo-hidro-urgente-final.png';

const HeroSection = () => {
  const whatsappNumber = "5531993173020";

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${logoHidroUrgente})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >{/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-blue-400 rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full mb-8 animate-pulse">
            <CheckCircle size={20} className="mr-2" />
            <span className="font-semibold">ORÇAMENTO GRATUITO</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Atendimento
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              IMEDIATO
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Ligue agora mesmo!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:31993173020"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="mr-2" size={24} />
              (31) 9317-3020
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de um orçamento para desentupimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Clock size={48} className="text-blue-400 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Atendimento 24h</h3>
              <p className="text-gray-300 text-sm text-center">
                Disponível todos os dias, inclusive feriados
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield size={48} className="text-green-400 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Garantia Total</h3>
              <p className="text-gray-300 text-sm text-center">
                Serviços com garantia e qualidade comprovada
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Users size={48} className="text-yellow-400 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Equipe Especializada</h3>
              <p className="text-gray-300 text-sm text-center">
                Profissionais qualificados e equipamentos modernos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

