import { Phone, MapPin, Clock, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const whatsappNumber = "5531993173020";
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.
    
📞 Telefone: ${formData.phone}
📧 Email: ${formData.email}
🔧 Serviço: ${formData.service}
⚡ Urgência: ${formData.urgency}

💬 Mensagem: ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    "Desentupimento de Ralo",
    "Desentupimento de Cano",
    "Desentupimento de Esgoto",
    "Desentupimento de Vaso",
    "Desentupimento de Pia",
    "Limpeza de Caixa de Gordura",
    "Outro serviço"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Telefone",
      info: "(31) 9317-3020",
      description: "Ligue agora para atendimento imediato",
      action: "tel:31993173020"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp",
      info: "(31) 9317-3020",
      description: "Resposta rápida e atendimento personalizado",
      action: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Gostaria de mais informações sobre os serviços.`
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Área de Atendimento",
      info: "Belo Horizonte e Região",
      description: "Contagem, Betim, Nova Lima, Sabará e região",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Horário de Atendimento",
      info: "24 horas por dia",
      description: "Todos os dias da semana, inclusive feriados",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Estamos prontos para resolver seu problema de desentupimento
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
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Gostaria de mais informações sobre os serviços da Desentupidora Hidro Urgente.`}
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

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h2>
            <p className="text-gray-600 mb-8">
              Preencha o formulário abaixo e entraremos em contato rapidamente via WhatsApp
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(31) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Serviço *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione o serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgência
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgente">Urgente</option>
                    <option value="emergencia">Emergência</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva o Problema
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descreva detalhadamente o problema que está enfrentando..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Enviar via WhatsApp
              </button>
            </form>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                <p className="text-sm text-green-800">
                  <strong>Garantia de Resposta:</strong> Respondemos todos os contatos em até 15 minutos durante o horário comercial e até 30 minutos fora do horário.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {contact.title}
                      </h3>
                      {contact.action ? (
                        <a
                          href={contact.action}
                          target={contact.action.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium text-lg">
                          {contact.info}
                        </p>
                      )}
                      <p className="text-gray-600 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🚨 Atendimento de Emergência
              </h3>
              <p className="mb-6 text-red-100">
                Para situações urgentes que não podem esperar, entre em contato imediatamente:
              </p>
              <div className="space-y-3">
                <a
                  href="tel:31993173020"
                  className="block bg-white text-red-600 text-center font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  📞 LIGAR AGORA: (31) 9317-3020
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=🚨 EMERGÊNCIA! Preciso de atendimento imediato para desentupimento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp SOS
                </a>
              </div>
              <p className="text-red-200 text-sm mt-4">
                ⏰ Chegamos em até 30 minutos em casos de emergência
              </p>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Áreas de Atendimento
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
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
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Vocês atendem 24 horas mesmo?",
                answer: "Sim! Nosso atendimento é 24 horas por dia, 7 dias por semana, inclusive feriados. Temos equipes de plantão para emergências."
              },
              {
                question: "Qual o tempo de chegada?",
                answer: "Em situações normais, chegamos em até 1 hora. Em emergências, nosso tempo de resposta é de até 30 minutos."
              },
              {
                question: "O orçamento é realmente gratuito?",
                answer: "Sim, o orçamento é 100% gratuito e sem compromisso. Você só paga se aprovar o serviço."
              },
              {
                question: "Vocês dão garantia do serviço?",
                answer: "Sim, todos os nossos serviços possuem garantia. O prazo varia conforme o tipo de serviço realizado."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

