import { Calendar, User, ArrowLeft, Phone, Droplets } from 'lucide-react';
import blogImg from '../assets/limpeza-caixa-gordura.png';

const BlogPost3 = () => {
  const whatsappNumber = "5531993173020";

  return (
    <article id="blog-post-3" className="py-20 bg-white">
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
            Limpeza de Caixa de Gordura: Quando e Como Fazer
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
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                6 min de leitura
              </span>
            </div>
          </div>

          <div className="h-64 bg-gray-100 rounded-xl overflow-hidden mb-8">
            <img 
              src={blogImg} 
              alt="Limpeza de Caixa de Gordura"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            A caixa de gordura é um componente essencial do sistema de esgoto de qualquer residência 
            ou estabelecimento comercial que possui cozinha. Sua função é separar a gordura e óleos 
            da água antes que ela chegue à rede de esgoto, evitando entupimentos e problemas ambientais. 
            Entender quando e como fazer sua manutenção é fundamental para o bom funcionamento de todo 
            o sistema hidráulico.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <Droplets className="text-blue-400 mr-3 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Você Sabia?</h3>
                <p className="text-blue-700">
                  Uma caixa de gordura bem mantida pode evitar até 90% dos entupimentos relacionados 
                  a gordura em sua residência ou estabelecimento comercial.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">O que é e Como Funciona</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            A caixa de gordura é um reservatório que funciona através do princípio da diferença de 
            densidade. Quando a água com gordura entra na caixa, a velocidade do fluxo diminui, 
            permitindo que a gordura, por ser mais leve que a água, flutue na superfície. A água 
            limpa sai pela parte inferior, enquanto a gordura fica retida.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Existem diferentes tipos de caixas de gordura: as residenciais, geralmente menores e 
            feitas de PVC ou concreto, e as comerciais, maiores e mais robustas, projetadas para 
            suportar maior volume de gordura. Independentemente do tipo, todas requerem manutenção 
            regular para funcionar adequadamente.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Quando Fazer a Limpeza</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            A frequência da limpeza da caixa de gordura depende de vários fatores, incluindo o 
            tamanho da caixa, o volume de gordura produzido e o número de pessoas que utilizam 
            a cozinha. Para residências familiares, recomenda-se a limpeza a cada 6 meses. 
            Já para estabelecimentos comerciais como restaurantes, a limpeza deve ser mensal 
            ou até quinzenal.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Alguns sinais indicam que a limpeza está atrasada: odores desagradáveis vindos dos 
            ralos da cozinha, água escorrendo lentamente na pia, presença de gordura visível 
            nos ralos, ou até mesmo refluxo de água suja. Quando qualquer um desses sinais 
            aparecer, é hora de fazer a manutenção imediatamente.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">O Processo de Limpeza Profissional</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            A limpeza profissional da caixa de gordura envolve várias etapas importantes. Primeiro, 
            os técnicos fazem a remoção completa da gordura acumulada na superfície, utilizando 
            equipamentos especializados que garantem a retirada total do material. Em seguida, 
            é feita a limpeza das paredes internas da caixa, removendo resíduos aderidos.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Após a limpeza física, é realizada uma inspeção completa da estrutura da caixa, 
            verificando se há rachaduras, vazamentos ou problemas na vedação. Os profissionais 
            também verificam o funcionamento das tubulações de entrada e saída, garantindo que 
            não há obstruções que possam comprometer o sistema.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Descarte Ecológico</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Um aspecto fundamental da limpeza profissional é o descarte adequado da gordura 
            removida. Empresas especializadas possuem licenças ambientais e parcerias com 
            empresas de reciclagem que transformam a gordura coletada em biodiesel e outros 
            produtos úteis, evitando a contaminação do meio ambiente.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            O descarte inadequado da gordura pode causar sérios problemas ambientais, incluindo 
            contaminação de rios e lençóis freáticos, além de entupimentos na rede pública de 
            esgoto. Por isso, é essencial contratar empresas que sigam todas as normas ambientais 
            e ofereçam certificados de descarte adequado.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Manutenção Preventiva</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Além da limpeza regular, algumas práticas simples podem prolongar a vida útil da 
            caixa de gordura e reduzir a frequência de manutenção. Evite despejar grandes 
            quantidades de óleo quente diretamente na pia, use peneiras para capturar restos 
            de comida, e faça limpezas superficiais regulares dos ralos da cozinha.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Para estabelecimentos comerciais, é recomendável manter um registro das limpezas 
            realizadas, incluindo datas, observações sobre o estado da caixa e certificados 
            de descarte. Isso não apenas ajuda no controle da manutenção, mas também pode 
            ser exigido por órgãos de fiscalização sanitária e ambiental.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Custos e Benefícios</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            O investimento na manutenção regular da caixa de gordura é muito menor que os 
            custos de reparos emergenciais causados por entupimentos graves. Uma limpeza 
            preventiva custa uma fração do que seria necessário para desentupir tubulações 
            principais ou reparar danos causados por refluxo de esgoto.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Além dos benefícios financeiros, a manutenção adequada garante um ambiente mais 
            higiênico e saudável, elimina odores desagradáveis, previne a proliferação de 
            pragas e contribui para a preservação do meio ambiente. É um investimento que 
            se paga rapidamente através da prevenção de problemas maiores.
          </p>
        </div>

        {/* Service CTA */}
        <div className="bg-green-600 rounded-2xl p-8 text-white mt-12">
          <div className="text-center">
            <Droplets size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Precisa de Limpeza de Caixa de Gordura?
            </h3>
            <p className="text-green-100 mb-6">
              Nossa equipe especializada oferece serviço completo de limpeza e manutenção 
              de caixas de gordura com descarte ecológico certificado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="bg-green-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">✓ Limpeza Completa</h4>
                <p className="text-green-200">Remoção total da gordura e resíduos</p>
              </div>
              <div className="bg-green-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">✓ Descarte Ecológico</h4>
                <p className="text-green-200">Certificado de descarte adequado</p>
              </div>
              <div className="bg-green-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">✓ Inspeção Completa</h4>
                <p className="text-green-200">Verificação de toda a estrutura</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:31993173020"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                (31) 9317-3020
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Preciso de limpeza de caixa de gordura. Gostaria de um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost3;

