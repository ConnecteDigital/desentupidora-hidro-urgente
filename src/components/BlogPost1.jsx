import { Calendar, User, ArrowLeft, Phone } from 'lucide-react';
import blogImg from '../assets/desentupimento-ralo.png';

const BlogPost1 = () => {
  const whatsappNumber = "5531993173020";

  return (
    <article id="blog-post-1" className="py-20 bg-white">
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
            Como Prevenir Entupimentos em Casa: Dicas Essenciais
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                5 min de leitura
              </span>
            </div>
          </div>

          <div className="h-64 bg-gray-100 rounded-xl overflow-hidden mb-8">
            <img 
              src={blogImg} 
              alt="Prevenção de Entupimentos"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Entupimentos são um dos problemas mais comuns e frustrantes que podem ocorrer em qualquer residência. 
            Felizmente, a maioria deles pode ser evitada com algumas práticas simples e cuidados preventivos. 
            Neste artigo, compartilhamos as principais estratégias para manter suas tubulações funcionando 
            perfeitamente e evitar chamadas de emergência.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. Cuidados na Cozinha</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            A cozinha é um dos locais onde mais ocorrem entupimentos, principalmente devido ao descarte inadequado 
            de gordura e restos de comida. A gordura, quando despejada quente na pia, pode parecer inofensiva, 
            mas ao esfriar, ela se solidifica e gruda nas paredes dos canos, criando obstruções que crescem 
            progressivamente.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Para evitar esse problema, nunca despeje óleo ou gordura diretamente na pia. Em vez disso, deixe 
            a gordura esfriar e solidificar, depois descarte no lixo comum. Utilize papel toalha para limpar 
            panelas e pratos antes de lavá-los, removendo o máximo de gordura possível. Instale uma peneira 
            na pia para capturar restos de comida e limpe-a regularmente.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Manutenção do Banheiro</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            No banheiro, os principais vilões são os cabelos, produtos de higiene e objetos inadequados 
            descartados no vaso sanitário. Cabelos são especialmente problemáticos porque se entrelaçam 
            e formam verdadeiras redes que capturam outros detritos, criando bloqueios significativos.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Instale protetores de ralo no box e na pia do banheiro para capturar cabelos antes que entrem 
            no sistema de esgoto. Limpe esses protetores semanalmente. No vaso sanitário, descarte apenas 
            papel higiênico e dejetos humanos. Produtos como preservativos, absorventes, fraldas, cotonetes 
            e medicamentos nunca devem ser jogados no vaso, pois podem causar entupimentos graves.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Limpeza Preventiva Regular</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Uma rotina de limpeza preventiva pode fazer toda a diferença na saúde das suas tubulações. 
            Semanalmente, despeje água quente nos ralos para ajudar a dissolver gorduras e sabões acumulados. 
            Uma mistura de bicarbonato de sódio com vinagre branco também é eficaz para manter os canos limpos 
            e livres de odores.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Para fazer essa limpeza, despeje meia xícara de bicarbonato de sódio no ralo, seguido de meia 
            xícara de vinagre branco. Tampe o ralo por 15 minutos e depois despeje água quente abundante. 
            Esse processo ajuda a remover resíduos orgânicos e mantém as tubulações desobstruídas.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Sinais de Alerta</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Mesmo com todos os cuidados preventivos, é importante estar atento aos sinais que indicam 
            o início de um entupimento. Água que escoa lentamente, gorgolejos nos ralos, odores desagradáveis 
            e refluxo de água são indicadores de que algo não está funcionando corretamente.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Quando esses sinais aparecem, é hora de agir rapidamente. Quanto mais cedo o problema for 
            identificado e tratado, menor será o custo e a complexidade da solução. Nesses casos, 
            é recomendável entrar em contato com uma desentupidora profissional para uma avaliação 
            e intervenção adequada.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Quando Chamar um Profissional</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Embora muitas medidas preventivas possam ser tomadas pelos próprios moradores, algumas 
            situações requerem a expertise de profissionais especializados. Entupimentos recorrentes, 
            problemas em múltiplos pontos da casa simultaneamente, ou situações onde métodos caseiros 
            não surtem efeito são indicações claras de que é hora de chamar uma desentupidora.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Profissionais qualificados possuem equipamentos especializados como máquinas de hidrojateamento 
            e câmeras de inspeção que permitem identificar e resolver problemas de forma eficiente e duradoura. 
            Além disso, eles podem oferecer orientações específicas para sua residência e sistema de esgoto.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de Ajuda Profissional?
            </h3>
            <p className="text-blue-100 mb-6">
              Se você está enfrentando problemas de entupimento ou quer uma avaliação preventiva, 
              nossa equipe está pronta para ajudar 24 horas por dia.
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
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Li o artigo sobre prevenção de entupimentos e gostaria de uma avaliação.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost1;

