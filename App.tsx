
import React, { useState } from 'react';
import { AppView, Product } from './types';
import { PRODUCTS } from './constants';
import AssistantModal from './components/AssistantModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAssistantOpen, setAssistantOpen] = useState(false);

  const navigateToDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView(AppView.DETAIL);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-500">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 pt-12 pb-4 px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold tracking-tighter">HL</div>
          <div className="flex gap-4">
            <button className="material-icons text-white/70">search</button>
            <button className="material-icons text-white/70">shopping_bag</button>
          </div>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <ul className="flex space-x-8 text-[10px] font-medium tracking-widest-plus uppercase text-white/60 whitespace-nowrap">
            <li className={`pb-1 ${currentView === AppView.HOME ? 'text-primary border-b border-primary' : ''}`} onClick={() => setCurrentView(AppView.HOME)}>Série Matemática</li>
            <li>Sistema</li>
            <li>Signal</li>
            <li>Field</li>
          </ul>
        </div>
      </nav>

      <main className="pt-40 pb-20">
        <section className="px-6 mb-24">
          <div className="relative">
            <div className="absolute -top-10 left-0 text-[10px] font-medium text-primary tracking-widest uppercase">
              [ ARCHIVE_VERSION_2.04 ]
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter-minus mb-6 uppercase">
              HIDDEN<br/>LAYER
            </h1>
            <p className="text-[11px] font-medium tracking-widest-plus text-white/50 uppercase leading-relaxed max-w-[280px]">
              ENTRE A ENTRADA<br/>E A SAÍDA
            </p>
          </div>
        </section>

        <section className="px-6 mb-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-bold uppercase tracking-widest">SÉRIE MATEMÁTICA</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">[ VOL. 01 ]</span>
          </div>
          <p className="text-[12px] text-white/60 leading-relaxed uppercase tracking-wider max-w-xs">
            Explorações vestíveis baseadas em algoritmos de compressão e lógica de sistemas modulares. 
            Onde o corte encontra a geometria absoluta.
          </p>
        </section>

        <section className="px-4 grid grid-cols-2 gap-4">
          {PRODUCTS.map(p => (
            <div key={p.id} onClick={() => navigateToDetail(p)} className="bg-surface rounded-lg overflow-hidden border border-white/5 group active:scale-[0.98] transition-transform">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale contrast-125" src={p.image} alt={p.name} />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                  <span className="text-[9px] font-bold text-white/80 tracking-widest uppercase">REF: {p.ref}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xs font-bold tracking-widest uppercase mb-1">{p.name}</h3>
                <p className="text-[9px] text-white/40 mb-4 uppercase tracking-wider">{p.category}</p>
                <button className="w-full py-2 border border-primary/30 text-primary text-[9px] font-bold uppercase tracking-widest rounded hover:bg-primary/10 transition-colors">
                  ABRIR DOCUMENTAÇÃO
                </button>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-24 px-6 py-12 border-t border-white/10">
          <div className="flex flex-col gap-6">
            <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">
              // SYSTEM STATE: OPERATIONAL
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">MAPA</h4>
                <ul className="text-[10px] text-white/50 uppercase tracking-widest space-y-2">
                  <li>Logistics</li>
                  <li>Terms</li>
                  <li>Calculus</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">CONEXÃO</h4>
                <ul className="text-[10px] text-white/50 uppercase tracking-widest space-y-2">
                  <li>Instagram</li>
                  <li>Discord</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-[8px] text-white/20 uppercase tracking-[0.3em] font-medium leading-loose">
              Copyright © Hidden Layer System Solutions.<br/>
              Desenvolvido sob paradigmas matemáticos.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );

  const renderCatalog = () => (
    <div className="animate-in fade-in duration-500 technical-grid min-h-screen">
      <div className="h-12 w-full bg-black sticky top-0 z-50"></div>
      <header className="px-6 pt-4 pb-8 border-b border-primary/20 bg-black/80 backdrop-blur-md sticky top-12 z-40">
        <div className="flex justify-between items-start mb-6">
          <div className="text-[10px] tracking-[0.3em] text-primary font-bold uppercase">System: HL-ARCHIVE-01</div>
          <div className="text-[10px] tracking-[0.3em] text-zinc-500">v4.0.2</div>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter leading-none mb-2">SÉRIE MATEMÁTICA</h1>
        <p className="text-[11px] leading-relaxed text-zinc-400 max-w-[280px] uppercase tracking-widest font-light">
          Transformações fundamentais através de estrutura mínima.
        </p>
      </header>

      <main className="px-4 py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
          {PRODUCTS.map(p => (
            <div key={p.id} onClick={() => navigateToDetail(p)} className="flex flex-col group active:scale-[0.98] transition-transform">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-primary/50 transition-colors">
                <img className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500" src={p.image} alt={p.name} />
                <div className="absolute top-2 right-2 text-[8px] font-mono text-primary bg-black/40 px-1 py-0.5 border border-primary/30">
                  {p.labels?.[0] || 'L1'}
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-xs font-medium tracking-tight uppercase">{p.name} Technical Item</h3>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-tighter">HL-SM-{p.ref}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center justify-center space-y-4 border-t border-zinc-800 pt-10 pb-20">
          <div className="w-1 h-1 bg-primary"></div>
          <div className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase italic">End of Index / SM-2024</div>
        </div>
      </main>
    </div>
  );

  const renderDetail = () => {
    if (!selectedProduct) return null;
    return (
      <div className="animate-in slide-in-from-right duration-500 min-h-screen flex flex-col px-6 pb-24">
        <div className="h-12 w-full"></div>
        <header className="grid grid-cols-3 pt-4 pb-8 border-b border-white/10 uppercase text-[10px] tracking-widest text-white/50">
          <div className="flex flex-col gap-1">
            <span className="text-white/30">REF:</span>
            <span className="text-white">{selectedProduct.id.toUpperCase()}</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="text-white/30">OBJETO:</span>
            <span className="text-white">TÊXTIL / VESTUÁRIO</span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-white/30">STATUS:</span>
            <div className="flex items-center justify-end gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,131,247,0.6)]"></div>
              <span className="text-white">ONLINE</span>
            </div>
          </div>
        </header>

        <div className="py-6 flex justify-between items-center">
          <h1 onClick={() => setCurrentView(AppView.HOME)} className="text-xs font-bold tracking-[0.3em] text-white cursor-pointer hover:text-primary transition-colors">HIDDEN LAYER ®</h1>
          <span className="text-[10px] text-white/40 tracking-widest">[ VER 2.0.4 ]</span>
        </div>

        <div className="relative w-full aspect-[3/4] flex items-center justify-center bg-[#050505] rounded-xl overflow-hidden border border-white/5">
          <img className="w-full h-full object-cover mix-blend-luminosity opacity-80" src={selectedProduct.image} alt={selectedProduct.name} />
          <div className="absolute top-4 left-4 border-l border-t border-white/20 w-4 h-4"></div>
          <div className="absolute top-4 right-4 border-r border-t border-white/20 w-4 h-4"></div>
          <div className="absolute bottom-4 left-4 border-l border-b border-white/20 w-4 h-4"></div>
          <div className="absolute bottom-4 right-4 border-r border-b border-white/20 w-4 h-4"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[0.5px] bg-white/5"></div>
            <div className="absolute h-full w-[0.5px] bg-white/5"></div>
          </div>
        </div>

        <section className="mt-10 mb-8">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="text-4xl font-light tracking-tighter uppercase">{selectedProduct.name}</h2>
            <span className="text-xs text-primary font-medium tracking-widest">{selectedProduct.ref}</span>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent mb-4"></div>
          <p className="text-sm font-medium text-white/60 tracking-[0.2em] uppercase">SÉRIE MATEMÁTICA</p>
        </section>

        <section className="mb-10 max-w-[85%]">
          <p className="text-base text-white/80 leading-relaxed font-light">
            {selectedProduct.description}
          </p>
        </section>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <label className="text-[10px] text-white/40 mb-4 block uppercase tracking-widest">Dimensionamento</label>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs text-white/50 rounded hover:border-primary/50">S</button>
              <button className="w-10 h-10 border border-primary flex items-center justify-center text-xs text-white bg-primary/10 rounded">M</button>
              <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs text-white/50 rounded hover:border-primary/50">L</button>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-white/40 mb-4 block uppercase tracking-widest">Espectro</label>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-primary p-0.5">
                <div className="w-full h-full rounded-full bg-white/90"></div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 p-0.5">
                <div className="w-full h-full rounded-full bg-zinc-900"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12 border-t border-white/10 pt-6">
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] uppercase tracking-widest">
              <span className="text-white/30">Composição</span>
              <span className="text-white">{selectedProduct.specs.composition}</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest">
              <span className="text-white/30">Resistência</span>
              <span className="text-white">{selectedProduct.specs.resistance}</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest">
              <span className="text-white/30">Origem</span>
              <span className="text-white">{selectedProduct.specs.origin}</span>
            </div>
          </div>
        </section>

        <footer className="mt-auto">
          <button className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-4 rounded-xl flex items-center justify-between px-6 transition-all active:scale-[0.98]">
            <span className="text-xs uppercase tracking-[0.2em]">Finalizar Transação</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">{selectedProduct.price}</span>
              <i className="material-icons text-sm">arrow_forward</i>
            </div>
          </button>
          <p className="text-[9px] text-center text-white/20 mt-4 uppercase tracking-[0.3em]">
            Protocolo de Aquisição HL-{selectedProduct.ref}-SECURE
          </p>
        </footer>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black relative">
      {currentView === AppView.HOME && renderHome()}
      {currentView === AppView.CATALOG && renderCatalog()}
      {currentView === AppView.DETAIL && renderDetail()}

      {/* Navigation Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-8 pb-4 z-50">
        <button 
          onClick={() => { setCurrentView(AppView.HOME); window.scrollTo(0,0); }}
          className={`material-icons ${currentView === AppView.HOME ? 'text-primary' : 'text-white/40'}`}
        >
          analytics
        </button>
        <button 
          onClick={() => { setCurrentView(AppView.CATALOG); window.scrollTo(0,0); }}
          className={`material-icons ${currentView === AppView.CATALOG ? 'text-primary' : 'text-white/40'}`}
        >
          layers
        </button>
        <div 
          onClick={() => setAssistantOpen(true)}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center -translate-y-4 shadow-lg shadow-primary/30 active:scale-90 transition-transform cursor-pointer"
        >
          <span className="material-icons text-black font-bold">radar</span>
        </div>
        <button className="material-icons text-white/40">radar</button>
        <button className="material-icons text-white/40">person_outline</button>
      </div>

      <AssistantModal isOpen={isAssistantOpen} onClose={() => setAssistantOpen(false)} />
    </div>
  );
};

export default App;
