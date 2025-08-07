import { Calendar, User, ArrowLeft, Phone, AlertTriangle } from 'lucide-react';
import blogImg from '../assets/desentupimento-cano.png';

const BlogPost2 = () => {
  const whatsappNumber = "5531993173020";

  return (
    <article id="blog-post-2" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="#blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar ao Blog
          </a>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            5 Sinais de que Você Precisa de uma Desentupidora
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Calendar size={18} className="mr-2" />
              <span>Janeiro 2025</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <User size={18} className="mr-2" />
              <span>Equipe Hidro Urgente</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                4 min de leitura
              </span>
            </div>
          </div>

          <div className="h-64 bg-gray-100 rounded-xl overflow-hidden mb-8">
            <img 
              src={blogImg} 
              alt="Sinais de que você precisa de uma desentupidora"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Saber quando é hora de chamar uma desentupidora profissional pode fazer a diferença entre 
            resolver um problema simples e enfrentar uma emergência custosa. Muitas vezes, os sinais 
            de entupimento aparecem gradualmente, e identificá-los precocemente pode evitar transtornos 
            maiores e gastos desnecessários.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <AlertTriangle className="text-yellow-400 mr-3 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante!</h3>
                <p className="text-yellow-700">
                  Não ignore os sinais iniciais. Quanto mais cedo você agir, menor será o custo 
                  e a complexidade da solução.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. Água Escoa Lentamente</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Este é geralmente o primeiro sinal de que algo não está funcionando corretamente em suas 
            tubulações. Quando a água da pia, do chuveiro ou da banheira demora mais tempo que o normal 
            para escoar, isso indica que há uma obstrução parcial no sistema de esgoto.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Inicialmente, você pode tentar soluções caseiras como água quente ou desentupidores simples. 
            No entanto, se o problema persistir ou piorar progressivamente, é sinal de que a obstrução 
            está mais profunda no sistema e requer equipamentos profissionais para ser removida completamente.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Odores Desagradáveis</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Cheiros ruins vindos dos ralos são um indicativo claro de problemas no sistema de esgoto. 
            Esses odores podem ser causados por acúmulo de matéria orgânica em decomposição, problemas 
            no sifão ou até mesmo refluxo de gases do esgoto principal.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Além de ser extremamente desagradável, essa situação pode representar riscos à saúde, 
            especialmente se os gases contiverem substâncias tóxicas. Se a limpeza superficial dos 
            ralos não resolver o problema, é essencial chamar profissionais para identificar e 
            eliminar a fonte do odor.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Gorgolejos e Ruídos Estranhos</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Sons de gorgolejos, borbulhamentos ou outros ruídos estranhos vindos dos ralos e vasos 
            sanitários são sinais de que o ar não está circulando adequadamente no sistema de esgoto. 
            Isso geralmente acontece quando há obstruções que impedem o fluxo normal da água e do ar.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Esses ruídos podem indicar desde entupimentos simples até problemas mais complexos na 
            ventilação do sistema de esgoto. Um profissional pode usar equipamentos de diagnóstico 
            para identificar exatamente onde está o problema e qual a melhor forma de solucioná-lo.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Refluxo de Água ou Esgoto</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Quando água suja ou esgoto retorna pelos ralos, vasos sanitários ou outros pontos de 
            drenagem, isso indica um entupimento grave que está impedindo o fluxo normal dos dejetos. 
            Esta é uma situação de emergência que requer ação imediata.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            O refluxo não apenas causa danos materiais significativos, mas também representa sérios 
            riscos à saúde devido à contaminação bacteriana. Nestes casos, é fundamental interromper 
            o uso do sistema de esgoto e chamar uma desentupidora imediatamente para evitar que a 
            situação se agrave ainda mais.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Múltiplos Pontos Afetados Simultaneamente</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Quando vários pontos da casa apresentam problemas de drenagem ao mesmo tempo - como pia 
            da cozinha, banheiro e área de serviço - isso geralmente indica um entupimento na tubulação 
            principal ou no sistema de esgoto predial.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Esse tipo de problema está além do alcance de soluções caseiras e requer equipamentos 
            profissionais como máquinas de hidrojateamento e câmeras de inspeção para localizar e 
            remover a obstrução. Tentar resolver por conta própria pode agravar a situação e causar 
            danos mais extensos ao sistema.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Quando Não Esperar</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Algumas situações requerem ação imediata, sem esperar que o problema se agrave. Se você 
            notar qualquer combinação dos sinais mencionados, especialmente refluxo de esgoto ou 
            odores muito fortes, não hesite em contatar uma desentupidora profissional.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Lembre-se de que o custo de uma intervenção preventiva é sempre menor que o de uma 
            emergência. Além disso, profissionais qualificados podem oferecer orientações para 
            evitar que o problema se repita, garantindo o funcionamento adequado do seu sistema 
            de esgoto a longo prazo.
          </p>
        </div>

        {/* Emergency CTA */}
        <div className="bg-red-600 rounded-2xl p-8 text-white mt-12">
          <div className="text-center">
            <AlertTriangle size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Identificou Algum Desses Sinais?
            </h3>
            <p className="text-red-100 mb-6">
              Não espere o problema se agravar! Nossa equipe está disponível 24 horas para 
              atendimento emergencial em Belo Horizonte e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:31993173020"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Ligar Agora: (31) 9317-3020
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Identifiquei sinais de entupimento e preciso de atendimento urgente.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Emergencial
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost2;

