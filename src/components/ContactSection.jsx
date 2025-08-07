import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "5531993173020";
  const phoneNumber = "31993173020";

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precisa de atendimento emergencial? Fale conosco agora mesmo! 
            Estamos disponíveis 24 horas por dia para resolver seu problema.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Telefone</h4>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    (31) 9317-3020
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Ligue agora para atendimento imediato
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de um orçamento para desentupimento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium text-lg"
                  >
                    (31) 9317-3020
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Resposta rápida e atendimento personalizado
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Área de Atendimento</h4>
                  <p className="text-gray-700">
                    Belo Horizonte e Região Metropolitana
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Contagem, Betim, Nova Lima, Sabará e região
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Clock className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-700 font-medium">24 horas por dia</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Todos os dias da semana, inclusive feriados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Atendimento Emergencial
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Chegamos em até 30 minutos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Orçamento gratuito e sem compromisso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Equipamentos modernos e profissionais qualificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Garantia total em todos os serviços</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2" size={24} />
                  Ligar Agora: (31) 9317-3020
                </a>
                
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de atendimento emergencial para desentupimento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 text-center text-blue-100">
                <p className="text-sm">
                  💡 Dica: Pelo WhatsApp você pode enviar fotos do problema para um diagnóstico mais preciso!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Cidades Atendidas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Belo Horizonte',
              'Contagem',
              'Betim',
              'Nova Lima',
              'Sabará',
              'Ribeirão das Neves',
              'Santa Luzia',
              'Vespasiano',
              'Lagoa Santa',
              'Pedro Leopoldo',
              'Ibirité',
              'Sete Lagoas'
            ].map((city, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-gray-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Não encontrou sua cidade? Entre em contato conosco para verificar disponibilidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

