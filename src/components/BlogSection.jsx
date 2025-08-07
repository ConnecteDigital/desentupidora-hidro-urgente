import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import blogImg1 from '../assets/desentupimento-ralo.png';
import blogImg2 from '../assets/desentupimento-cano.png';
import blogImg3 from '../assets/limpeza-caixa-gordura.png';

const BlogSection = ({ onReadMore }) => {
  const whatsappNumber = "5531993173020";

  const blogPosts = [
    {
      id: 1,
      title: "Como Prevenir Entupimentos em Casa: Dicas Essenciais",
      excerpt: "Descubra técnicas simples e eficazes para evitar entupimentos e manter suas tubulações sempre funcionando perfeitamente.",
      date: "Janeiro 2025",
      author: "Equipe Hidro Urgente",
      readTime: "5 min",
      image: blogImg1,
      slug: "como-prevenir-entupimentos-em-casa"
    },
    {
      id: 2,
      title: "5 Sinais de que Você Precisa de uma Desentupidora",
      excerpt: "Aprenda a identificar os principais sinais que indicam a necessidade de contratar um serviço profissional de desentupimento.",
      date: "Janeiro 2025",
      author: "Equipe Hidro Urgente",
      readTime: "4 min",
      image: blogImg2,
      slug: "sinais-que-precisa-desentupidora"
    },
    {
      id: 3,
      title: "Limpeza de Caixa de Gordura: Quando e Como Fazer",
      excerpt: "Guia completo sobre a importância da limpeza regular da caixa de gordura e como manter seu sistema funcionando corretamente.",
      date: "Janeiro 2025",
      author: "Equipe Hidro Urgente",
      readTime: "6 min",
      image: blogImg3,
      slug: "limpeza-caixa-de-gordura"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dicas e Informações Úteis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira nosso blog com dicas importantes sobre desentupimento, manutenção preventiva 
            e cuidados com suas tubulações.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => onReadMore(post.id)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Ler Artigo
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tem Dúvidas Sobre Desentupimento?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Nossa equipe especializada está pronta para esclarecer suas dúvidas e oferecer as melhores soluções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:31993173020"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Falar com Especialista
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Tenho dúvidas sobre desentupimento e gostaria de conversar com um especialista.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

