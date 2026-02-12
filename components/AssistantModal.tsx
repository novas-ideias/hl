
import React, { useState, useRef, useEffect } from 'react';
import { getTechnicalAdvice } from '../geminiService';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setLoading(true);

    const aiResponse = await getTechnicalAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'Erro de processamento.' }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col p-6 animate-in fade-in slide-in-from-bottom-10 duration-300">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs">// CONSULTOR TÉCNICO</h2>
          <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase mt-1">Status: Conectado</p>
        </div>
        <button onClick={onClose} className="material-icons text-white/40 hover:text-white">close</button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 mb-6 hide-scrollbar">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-10">
            <span className="material-icons text-primary/20 text-5xl mb-4 italic">radar</span>
            <p className="text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
              Inicie uma consulta sobre materiais, geometria de corte ou manutenção de sistemas têxteis.
            </p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-lg border ${m.role === 'user' ? 'bg-primary/5 border-primary/20' : 'bg-white/5 border-white/10'}`}>
              <p className="text-[11px] font-mono mb-2 text-white/30 uppercase tracking-widest">
                {m.role === 'user' ? 'USER_INPUT' : 'SYS_OUTPUT'}
              </p>
              <p className="text-[13px] leading-relaxed text-white/80">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg animate-pulse">
              <div className="h-2 w-20 bg-primary/20 rounded mb-2"></div>
              <div className="h-3 w-40 bg-white/10 rounded"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="INSIRA PARÂMETROS DE CONSULTA..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-primary/50 transition-colors uppercase"
        />
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 material-icons text-primary">send</button>
      </form>
    </div>
  );
};

export default AssistantModal;
