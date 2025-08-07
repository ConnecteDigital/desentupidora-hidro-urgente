import { Clock, Phone, MapPin, Shield, Zap, CheckCircle, AlertCircle, Users } from 'lucide-react';

const Atendimento24hPage = () => {
  const whatsappNumber = "5531993173020";

  const emergencyServices = [
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Entupimento Total",
      description: "Quando nada passa pelo ralo ou vaso sanitário",
      response: "15-30 minutos"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Refluxo de Esgoto",
      description: "Quando o esgoto volta pelos ralos",
      response: "10-20 minutos"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Vazamentos Urgentes",
      description: "Quando há risco de alagamento",
      response: "5-15 minutos"
    }
  ];

  const coverageAreas = [
    "Belo Horizonte - Centro",
    "Belo Horizonte - Zona Sul",
    "Belo Horizonte - Zona Norte",
    "Belo Horizonte - Zona Leste",
    "Belo Horizonte - Zona Oeste",
    "Contagem",
    "Betim",
    "Nova Lima",
    "Sabará",
    "Ribeirão das Neves",
    "Santa Luzia",
    "Vespasiano"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full mb-6 animate-pulse">
              <Clock size={20} className="mr-2" />
              <span className="font-bold">ATENDIMENTO 24 HORAS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergência em Desentupimento?
              <span className="block text-yellow-300">Chegamos em 30 Minutos!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Atendimento imediato todos os dias da semana, inclusive feriados e madrugadas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:31993173020"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="mr-2" size={24} />
                LIGUE AGORA: (31) 9317-3020
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=🚨 EMERGÊNCIA! Preciso de atendimento imediato para desentupimento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                💬 WhatsApp Emergencial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Situações de Emergência
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e resolvemos rapidamente os problemas mais urgentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
                  Chegada em: {service.response}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Como Funciona Nosso Atendimento 24h
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Você Liga</h3>
              <p className="text-gray-600">
                Entre em contato pelo telefone ou WhatsApp relatando a emergência
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Avaliamos</h3>
              <p className="text-gray-600">
                Nossa central identifica o tipo de emergência e despacha a equipe mais próxima
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chegamos</h3>
              <p className="text-gray-600">
                Equipe especializada chega em até 30 minutos com todos os equipamentos
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Resolvemos</h3>
              <p className="text-gray-600">
                Problema resolvido rapidamente com garantia total do serviço
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Área de Atendimento 24h
            </h2>
            <p className="text-xl text-gray-600">
              Cobrimos toda a região metropolitana de Belo Horizonte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <MapPin size={20} className="text-red-600 mx-auto mb-2" />
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 24h Service */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por Que Oferecemos Atendimento 24h?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Problemas de Entupimento Não Esperam
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Madrugadas:</strong> Muitos entupimentos acontecem durante a noite quando o uso é intenso
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Finais de Semana:</strong> Quando as famílias estão reunidas e o uso dos banheiros aumenta
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Feriados:</strong> Justamente quando outras empresas não atendem
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Emergências:</strong> Refluxo de esgoto e alagamentos não podem esperar
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-red-800 mb-4">
                  Nossa Promessa 24h
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-700">
                    <Clock size={16} className="mr-2" />
                    Atendimento em até 30 minutos
                  </li>
                  <li className="flex items-center text-red-700">
                    <Users size={16} className="mr-2" />
                    Equipe especializada sempre disponível
                  </li>
                  <li className="flex items-center text-red-700">
                    <Shield size={16} className="mr-2" />
                    Equipamentos completos em todas as viaturas
                  </li>
                  <li className="flex items-center text-red-700">
                    <CheckCircle size={16} className="mr-2" />
                    Mesmo preço justo, independente do horário
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚨 Emergência Agora?
          </h2>
          <p className="text-2xl mb-8 text-red-100">
            Não perca tempo! Cada minuto conta em uma emergência de entupimento.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Ligue Agora:</h3>
            <a
              href="tel:31993173020"
              className="text-4xl md:text-5xl font-bold text-yellow-300 hover:text-yellow-400 transition-colors"
            >
              (31) 9317-3020
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:31993173020"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="mr-2" size={24} />
              LIGAR AGORA
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=🚨 EMERGÊNCIA! Preciso de atendimento imediato. Localização: [informe seu endereço]`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              💬 WhatsApp SOS
            </a>
          </div>
          
          <p className="text-red-200 mt-6">
            💡 <strong>Dica:</strong> Tenha seu endereço completo em mãos para agilizar o atendimento
          </p>
        </div>
      </section>
    </div>
  );
};

export default Atendimento24hPage;

