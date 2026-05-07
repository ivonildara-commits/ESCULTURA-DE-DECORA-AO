import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw,
  Instagram,
  Facebook,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopeeLink = "https://www.casaeequilibrio.com.br/escultura-passaro-em-poliresina-com-aspecto-de-madeira-2-tamanhos?sku=13910&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&gad_source=1&gad_campaignid=22974420942&gbrai; // Placeholder link

  const categories = [
    { name: 'Sala de Estar', image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=600' },
    { name: 'Quarto', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600' },
    { name: 'Cozinha', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600' },
    { name: 'Iluminação', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Vaso de Cerâmica Minimalista', price: 'R$ 89,90', image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Luminária Pendente Industrial', price: 'R$ 149,90', image: 'https://images.unsplash.com/photo-1507473884658-cda78bc38367?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Quadro Abstrato Boho', price: 'R$ 120,00', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Espelho Adnet Orgânico', price: 'R$ 199,00', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
              <ShoppingBag className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-semibold italic tracking-tight text-primary-800 uppercase">Decor & Co.</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium text-primary-700/70">
            <a href="#" className="hover:text-primary-500 transition-colors">Coleções</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Novidades</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Sobre</a>
            <a 
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold shadow-xl shadow-primary-500/20 hover:bg-primary-600 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Comprar na Shopee
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-primary-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium">Coleções</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium">Novidades</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium">Sobre</a>
              <a 
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 text-white px-8 py-4 rounded-xl text-xl font-medium"
              >
                Comprar na Shopee
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 bg-primary-200/50 text-primary-400 rounded-lg text-xs uppercase tracking-[0.3em] font-bold mb-6">
                Design Orgânico e Atemporal
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] mb-8 text-primary-800">
                Sua casa, sua <br /><span className="italic font-normal">obra de arte.</span>
              </h1>
              <p className="text-xl text-primary-700/80 mb-10 max-w-lg leading-relaxed font-light">
                Curadoria exclusiva de peças artesanais em cerâmica, linho e madeira para criar ambientes que respiram leveza e sofisticação.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <a 
                  href={shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-primary-500 text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-2xl shadow-primary-500/20 hover:bg-primary-600 transition-all flex items-center justify-center gap-3 group"
                >
                  Comprar na Shopee
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-800">Frete Grátis</span>
                  <span className="text-[10px] opacity-60 uppercase tracking-tight">Em compras acima de R$150</span>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="Cliente" 
                    />
                  ))}
                </div>
                <p className="text-sm text-stone-500">
                  <span className="font-bold text-stone-900">+2.400</span> clientes satisfeitos no Brasil
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl skew-y-1 transition-transform duration-700 hover:skew-y-0">
                <img 
                  src="https://images.unsplash.com/photo-1616489953149-75577aaf9dcf?auto=format&fit=crop&q=80&w=800" 
                  alt="Decoração Minimalista"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-10 left-10 p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 hidden sm:block max-w-[300px]">
                  <p className="text-sm italic font-serif leading-relaxed text-primary-800">"A simplicidade é o último grau de sofisticação."</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-200/50 rounded-bl-[100px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-primary-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <Truck className="text-primary-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4 italic text-primary-800">Envio Rápido</h3>
              <p className="text-primary-700/70 font-light px-4">Postagem em até 24h úteis para que sua espera seja breve.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <Star className="text-primary-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4 italic text-primary-800">Curadoria Premium</h3>
              <p className="text-primary-700/70 font-light px-4">Peças selecionadas à mão garantindo um padrão estético inigualável.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <RotateCcw className="text-primary-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4 italic text-primary-800">Troca Facilitada</h3>
              <p className="text-primary-700/70 font-light px-4">Satisfeito ou devolvido, com o selo de garantia da nossa loja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">Peças em Destaque</h2>
              <p className="text-stone-500">Os queridinhos da nossa comunidade no momento.</p>
            </div>
            <a 
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 text-primary-700 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Ver todos os produtos <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-800">
                    Bestseller
                  </div>
                  <a 
                    href={shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <span className="bg-white text-primary-900 px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform">
                      Ver na Shopee
                    </span>
                  </a>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-1">{product.name}</h3>
                <p className="font-medium text-stone-500">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossas Categorias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <a 
                key={idx}
                href={shopeeLink}
                className="relative h-96 group rounded-3xl overflow-hidden block"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold">{cat.name}</h3>
                  <p className="text-stone-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">Explorar coleção</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[60px] p-12 md:p-24 relative overflow-hidden text-center shadow-2xl shadow-primary-200 border border-primary-100">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-30 -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-50 -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-light text-primary-800 mb-8 leading-tight">
                Leve o estilo <span className="italic">atemporal</span> <br /> para dentro da sua casa.
              </h2>
              <p className="text-primary-700/70 text-lg mb-12 max-w-2xl mx-auto font-light">
                Acesse nossa loja oficial na Shopee e aproveite cupons de frete grátis e descontos exclusivos para novos seguidores.
              </p>
              <a 
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 text-white px-14 py-6 rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-2xl shadow-primary-500/30 hover:bg-primary-600 transition-all inline-block"
              >
                Explorar na Shopee 🛍️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-50 pt-20 pb-10 border-t border-primary-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center">
                  <ShoppingBag className="text-white w-4 h-4" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight text-primary-900">DECOR&CO</span>
              </div>
              <p className="text-stone-500 mb-6">
                Curadoria de design e bem-estar para o seu lar. Elevando o cotidiano através da estética.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 border border-primary-300 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-primary-300 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-primary-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-stone-500">
                <li><a href="#" className="hover:text-primary-700 transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-primary-700 transition-colors">Produtos</a></li>
                <li><a href="#" className="hover:text-primary-700 transition-colors">Promoções</a></li>
                <li><a href="#" className="hover:text-primary-700 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-primary-900 mb-6">Atendimento</h4>
              <ul className="space-y-4 text-stone-500">
                <li><a href="#" className="hover:text-primary-700 transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-primary-700 transition-colors">Envio e Entregas</a></li>
                <li><a href="#" className="hover:text-primary-700 transition-colors">Políticas de Troca</a></li>
                <li><a href="#" className="hover:text-primary-700 transition-colors">Dúvidas Frequentes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary-900 mb-6">Newsletter</h4>
              <p className="text-stone-500 mb-4 text-sm">Receba dicas de decoração e cupons exclusivos.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-white border border-primary-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button className="bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-bold">Enviar</button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-primary-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-400 text-sm">
              © 2024 Decor & Co. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <img src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo-0.png" alt="Shopee Logo" className="h-6 grayscale opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 grayscale opacity-30" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 grayscale opacity-30" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
