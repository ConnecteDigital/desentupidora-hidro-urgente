import { Droplets, Wrench, Trash2, Toilet, ChefHat, Zap, Phone, Clock, Shield, CheckCircle } from 'lucide-react';
import servicoRalo from '../assets/desentupimento-ralo.png';
import servicoCano from '../assets/desentupimento-cano.png';
import servicoEsgoto from '../assets/desentupimento-esgoto.png';
import servicoVaso from '../assets/desentupimento-vaso.png';
import servicoPia from '../assets/desentupimento-pia.png';
import servicoCaixaGordura from '../assets/limpeza-caixa-gordura.png';

const ServicesPage = () => {
  const whatsappNumber = "5531993173020";

  const services = [
    {
      icon: <Droplets size={48} className="text-blue-500" />,
      title: "Desentupimento de Ralo",
      description: "Limpeza e desentupimento de ralos de banheiro, cozinha e área de serviço. Removemos cabelos, sabão e detritos acumulados.",
      features: ["Atendimento rápido", "Prevenção de odores", "Serviço duradouro"],
      image: servicoRalo,
      detailedDescription: "Nosso serviço de desentupimento de ralos é especializado em resolver problemas de entupimento causados por acúmulo de cabelos, sabão, restos de comida e outros detritos. Utilizamos equipamentos modernos e técnicas avançadas para garantir uma limpeza completa e duradoura.",
      process: [
        "Diagnóstico inicial do problema",
        "Remoção manual dos detritos visíveis",
        "Aplicação de produtos específicos",
        "Limpeza com equipamentos especializados",
        "Teste de funcionamento",
        "Orientações preventivas"
      ]
    },
    {
      icon: <Wrench size={48} className="text-blue-500" />,
      title: "Desentupimento de Cano",
      description: "Desobstrução completa de tubulações com hidrojateamento de alta pressão. Removemos incrustações, raízes e qualquer tipo de entupimento.",
      features: ["Diagnóstico preciso", "Técnicas avançadas", "Limpeza completa"],
      image: servicoCano,
      detailedDescription: "O desentupimento de canos é realizado com equipamentos de hidrojateamento de alta pressão, capazes de remover desde entupimentos simples até obstruções complexas causadas por raízes, incrustações e acúmulo de detritos ao longo dos anos.",
      process: [
        "Inspeção com câmera especializada",
        "Localização precisa do entupimento",
        "Hidrojateamento de alta pressão",
        "Remoção de incrustações e raízes",
        "Limpeza completa da tubulação",
        "Verificação final com câmera"
      ]
    },
    {
      icon: <Trash2 size={48} className="text-blue-500" />,
      title: "Desentupimento de Esgoto",
      description: "Desobstrução de redes de esgoto predial e residencial. Utilizamos caminhões limpa fossa e equipamentos de hidrojateamento.",
      features: ["Equipamentos pesados", "Solução definitiva", "Atendimento 24h"],
      image: servicoEsgoto,
      detailedDescription: "Para problemas de esgoto, contamos com caminhões limpa fossa e equipamentos de grande porte. Nosso serviço resolve desde entupimentos simples até problemas complexos em redes coletoras, garantindo o funcionamento adequado de todo o sistema.",
      process: [
        "Avaliação da rede de esgoto",
        "Posicionamento do caminhão limpa fossa",
        "Sucção dos resíduos acumulados",
        "Hidrojateamento das tubulações",
        "Limpeza completa do sistema",
        "Descarte ecológico dos resíduos"
      ]
    },
    {
      icon: <Toilet size={48} className="text-blue-500" />,
      title: "Desentupimento de Vaso",
      description: "Desentupimento especializado de vasos sanitários com equipamentos apropriados. Resolvemos entupimentos simples e complexos.",
      features: ["Higiene total", "Equipamentos sanitários", "Resultado imediato"],
      image: servicoVaso,
      detailedDescription: "O desentupimento de vasos sanitários requer cuidado especial e equipamentos apropriados. Nossa equipe é treinada para resolver desde entupimentos simples até casos mais complexos, sempre mantendo os mais altos padrões de higiene.",
      process: [
        "Proteção da área de trabalho",
        "Diagnóstico do tipo de entupimento",
        "Uso de equipamentos sanitários",
        "Desobstrução cuidadosa",
        "Limpeza e desinfecção",
        "Teste de funcionamento"
      ]
    },
    {
      icon: <ChefHat size={48} className="text-blue-500" />,
      title: "Desentupimento de Pia",
      description: "Desentupimento profissional de pias de cozinha e banheiro. Utilizamos equipamentos especializados para remover gordura e resíduos.",
      features: ["Sem quebra", "Garantia de 90 dias", "Equipamentos modernos"],
      image: servicoPia,
      detailedDescription: "Pias entupidas são um problema comum, especialmente na cozinha onde gordura e restos de comida se acumulam. Nosso serviço resolve o problema sem necessidade de quebrar azulejos ou estruturas, utilizando técnicas modernas e eficazes.",
      process: [
        "Análise do tipo de entupimento",
        "Remoção de sifões quando necessário",
        "Aplicação de produtos desentupidores",
        "Uso de equipamentos específicos",
        "Limpeza completa do sistema",
        "Remontagem e teste final"
      ]
    },
    {
      icon: <Zap size={48} className="text-blue-500" />,
      title: "Limpeza de Caixa de Gordura",
      description: "Limpeza e manutenção de caixas de gordura residenciais e comerciais. Serviço completo com descarte ecológico.",
      features: ["Descarte ecológico", "Manutenção preventiva", "Equipamentos especializados"],
      image: servicoCaixaGordura,
      detailedDescription: "A limpeza de caixa de gordura é essencial para o bom funcionamento do sistema de esgoto. Realizamos a limpeza completa, remoção de todos os resíduos e descarte ecológico, seguindo todas as normas ambientais vigentes.",
      process: [
        "Abertura e inspeção da caixa",
        "Remoção da gordura acumulada",
        "Limpeza das paredes internas",
        "Verificação de vazamentos",
        "Descarte ecológico certificado",
        "Orientações de manutenção"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Serviços Especializados
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Soluções completas em desentupimento com tecnologia avançada e equipe especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:31993173020"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                (31) 9317-3020
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Gostaria de conhecer mais sobre os serviços da Desentupidora Hidro Urgente.`}
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Service Image */}
                <div className="h-64 bg-gray-100 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-2xl font-bold text-gray-900 ml-3">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Nosso Processo:</h3>
                    <ul className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center text-gray-700">
                          <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Vantagens:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de ${service.title.toLowerCase()}. Gostaria de um orçamento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center block"
                  >
                    Solicitar Orçamento para {service.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por Que Escolher a Hidro Urgente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em desentupimento com anos de experiência e tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock size={64} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento 24h</h3>
              <p className="text-gray-600">
                Disponível todos os dias da semana, inclusive feriados. Chegamos em até 30 minutos.
              </p>
            </div>
            <div className="text-center p-6">
              <Shield size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garantia Total</h3>
              <p className="text-gray-600">
                Todos os nossos serviços possuem garantia. Sua satisfação é nossa prioridade.
              </p>
            </div>
            <div className="text-center p-6">
              <CheckCircle size={64} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Orçamento Gratuito</h3>
              <p className="text-gray-600">
                Avaliação gratuita e sem compromisso. Você só paga se aprovar o serviço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de Atendimento Emergencial?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Não espere o problema piorar! Entre em contato agora e receba atendimento imediato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:31993173020"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2" size={24} />
              (31) 9317-3020
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de atendimento de emergência. É urgente!`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              💬 WhatsApp Emergencial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

