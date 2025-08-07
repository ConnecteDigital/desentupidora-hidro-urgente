import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Savassi, Belo Horizonte",
      rating: 5,
      text: "Atendimento excelente! Chegaram em 30 minutos e resolveram o problema do meu banheiro rapidamente. Preço justo e profissionais muito educados.",
      service: "Desentupimento de Vaso Sanitário"
    },
    {
      name: "João Santos",
      location: "Pampulha, Belo Horizonte",
      rating: 5,
      text: "Serviço 24h muito eficiente. Tive um problema de madrugada e eles vieram imediatamente. Trabalho bem feito e com garantia.",
      service: "Desentupimento de Esgoto"
    },
    {
      name: "Ana Costa",
      location: "Contagem",
      rating: 5,
      text: "Recomendo! Equipe pontual e trabalho bem feito. Resolveram o entupimento da minha pia sem quebrar nada. Muito profissionais.",
      service: "Desentupimento de Pia"
    },
    {
      name: "Carlos Oliveira",
      location: "Nova Lima",
      rating: 5,
      text: "Excelente custo-benefício. Fizeram a limpeza da caixa de gordura do meu restaurante com muito cuidado e limpeza. Voltarei a contratar.",
      service: "Limpeza de Caixa de Gordura"
    },
    {
      name: "Fernanda Lima",
      location: "Betim",
      rating: 5,
      text: "Atendimento rápido e eficiente. O ralo do meu banheiro estava com mau cheiro e eles resolveram completamente. Muito satisfeita!",
      service: "Desentupimento de Ralo"
    },
    {
      name: "Roberto Mendes",
      location: "Venda Nova, Belo Horizonte",
      rating: 5,
      text: "Profissionais competentes e honestos. Explicaram todo o processo e deram dicas para evitar novos entupimentos. Recomendo demais!",
      service: "Desentupimento de Cano"
    }
  ];

  const whatsappNumber = "5531993173020";

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 1000 clientes satisfeitos em Belo Horizonte e região metropolitana. 
            Veja os depoimentos de quem já confiou em nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Service */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24h</div>
              <div className="text-blue-200">Atendimento Disponível</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfação dos Clientes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5★</div>
              <div className="text-blue-200">Avaliação Média</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Junte-se aos Nossos Clientes Satisfeitos
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Receba o mesmo atendimento de qualidade que já conquistou mais de 1000 clientes em BH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:31993173020"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (31) 9317-3020
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Vi os depoimentos e gostaria de um orçamento para desentupimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

