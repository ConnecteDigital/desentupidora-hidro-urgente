import { Calendar, User, ArrowRight, Clock, Search, Tag } from 'lucide-react';
import blogImg1 from '../assets/desentupimento-ralo.png';
import blogImg2 from '../assets/desentupimento-cano.png';
import blogImg3 from '../assets/limpeza-caixa-gordura.png';

const BlogPage = () => {
  const whatsappNumber = "5531993173020";

  const blogPosts = [
    {
      id: 1,
      title: "Como Prevenir Entupimentos em Casa: Dicas Essenciais",
      excerpt: "Descubra as melhores práticas para evitar entupimentos e manter seu sistema hidráulico funcionando perfeitamente. Dicas simples que podem economizar muito dinheiro.",
      date: "15 de Janeiro, 2024",
      author: "Equipe Hidro Urgente",
      category: "Prevenção",
      readTime: "5 min",
      image: blogImg1,
      slug: "como-prevenir-entupimentos-em-casa"
    },
    {
      id: 2,
      title: "5 Sinais de que Você Precisa de uma Desentupidora",
      excerpt: "Aprenda a identificar os sinais precoces de problemas de entupimento antes que se tornem emergências custosas. Saiba quando é hora de chamar os profissionais.",
      date: "10 de Janeiro, 2024",
      author: "Equipe Hidro Urgente",
      category: "Diagnóstico",
      readTime: "4 min",
      image: blogImg2,
      slug: "5-sinais-que-precisa-desentupidora"
    },
    {
      id: 3,
      title: "Limpeza de Caixa de Gordura: Quando e Como Fazer",
      excerpt: "Guia completo sobre manutenção de caixa de gordura, incluindo frequência ideal, processo de limpeza e importância do descarte ecológico adequado.",
      date: "5 de Janeiro, 2024",
      author: "Equipe Hidro Urgente",
      category: "Manutenção",
      readTime: "7 min",
      image: blogImg3,
      slug: "limpeza-caixa-de-gordura-quando-como-fazer"
    }
  ];

  const categories = [
    { name: "Prevenção", count: 8 },
    { name: "Diagnóstico", count: 6 },
    { name: "Manutenção", count: 12 },
    { name: "Emergência", count: 4 },
    { name: "Dicas", count: 15 }
  ];

  const recentPosts = [
    "Como Prevenir Entupimentos em Casa",
    "5 Sinais de que Você Precisa de uma Desentupidora",
    "Limpeza de Caixa de Gordura",
    "Desentupimento de Vaso Sanitário",
    "Manutenção Preventiva de Ralos"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Hidro Urgente
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Dicas, guias e informações sobre desentupimento e manutenção hidráulica
            </p>
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Post Image */}
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-blue-600 text-6xl font-bold opacity-20">
                      {post.id}
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Tag size={16} className="mr-1" />
                        {post.category}
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {post.readTime} de leitura
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      <a href={`#${post.slug}`}>
                        {post.title}
                      </a>
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <a
                      href={`#${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Ler artigo completo
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  1
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-red-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Precisa de Ajuda Agora?</h3>
              <p className="mb-4 text-red-100">
                Não espere! Entre em contato para atendimento imediato.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:31993173020"
                  className="block bg-white text-red-600 text-center font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  📞 (31) 9317-3020
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Vi o blog de vocês e preciso de ajuda com desentupimento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href={`#category-${category.name.toLowerCase()}`}
                    className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Posts Recentes</h3>
              <div className="space-y-3">
                {recentPosts.map((post, index) => (
                  <a
                    key={index}
                    href={`#post-${index}`}
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-b-0"
                  >
                    {post}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Receba dicas de manutenção e prevenção diretamente no seu email.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ainda com Dúvidas?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para esclarecer qualquer questão sobre desentupimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:31993173020"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              📞 Falar com Especialista
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Tenho algumas dúvidas sobre desentupimento que vi no blog.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              💬 Tirar Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

