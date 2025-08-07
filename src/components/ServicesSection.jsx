import { Droplets, Wrench, Trash2, Toilet, ChefHat, Zap } from 'lucide-react';
import servicoVaso from '../assets/servico-vaso.png';
import servicoRalo from '../assets/servico-ralo.png';
import servicoCano from '../assets/servico-cano.png';
import servicoEsgoto from '../assets/servico-esgoto.png';
import servicoPia from '../assets/servico-pia.png';
import servicoCaixaGordura from '../assets/servico-caixa-gordura.png';

const ServicesSection = () => {
  const whatsappNumber = "5531993173020";

  const services = [
    {
      icon: <Droplets size={48} className="text-blue-500" />,
      title: "Desentupimento de Ralo",
      description: "Limpeza e desentupimento de ralos de banheiro, cozinha e área de serviço. Removemos cabelos, sabão e detritos acumulados.",
      features: ["Atendimento rápido", "Prevenção de odores", "Serviço duradouro"],
      image: servicoRalo
    },
    {
      icon: <Wrench size={48} className="text-blue-500" />,
      title: "Desentupimento de Cano",
      description: "Desobstrução completa de tubulações com hidrojateamento de alta pressão. Removemos incrustações, raízes e qualquer tipo de entupimento.",
      features: ["Diagnóstico preciso", "Técnicas avançadas", "Limpeza completa"],
      image: servicoCano
    },
    {
      icon: <Trash2 size={48} className="text-blue-500" />,
      title: "Desentupimento de Esgoto",
      description: "Desobstrução de redes de esgoto predial e residencial. Utilizamos caminhões limpa fossa e equipamentos de hidrojateamento.",
      features: ["Equipamentos pesados", "Solução definitiva", "Atendimento 24h"],
      image: servicoEsgoto
    },
    {
      icon: <Toilet size={48} className="text-blue-500" />,
      title: "Desentupimento de Vaso",
      description: "Desentupimento especializado de vasos sanitários com equipamentos apropriados. Resolvemos entupimentos simples e complexos.",
      features: ["Higiene total", "Equipamentos sanitários", "Resultado imediato"],
      image: servicoVaso
    },
    {
      icon: <ChefHat size={48} className="text-blue-500" />,
      title: "Desentupimento de Pia",
      description: "Desentupimento profissional de pias de cozinha e banheiro. Utilizamos equipamentos especializados para remover gordura e resíduos.",
      features: ["Sem quebra", "Garantia de 90 dias", "Equipamentos modernos"],
      image: servicoPia
    },
    {
      icon: <Zap size={48} className="text-blue-500" />,
      title: "Limpeza de Caixa de Gordura",
      description: "Limpeza e manutenção de caixas de gordura residenciais e comerciais. Serviço completo com descarte ecológico.",
      features: ["Descarte ecológico", "Manutenção preventiva", "Equipamentos especializados"],
      image: servicoCaixaGordura
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em desentupimento com tecnologia avançada e equipe 
            especializada. Atendimento 24 horas em Belo Horizonte e região metropolitana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Service Image */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de ${service.title.toLowerCase()}. Gostaria de um orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center block"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 bg-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de Atendimento Emergencial?
          </h3>
          <p className="text-red-100 mb-6">
            Não espere o problema piorar! Entre em contato agora e receba atendimento imediato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:31993173020"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              📞 (31) 9317-3020
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de atendimento de emergência. É urgente!`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

