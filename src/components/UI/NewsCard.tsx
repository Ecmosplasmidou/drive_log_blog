import { Activity, ArrowRight, Tag } from "lucide-react";

export const NewsCard = ({ item, onOpen }: { item: any, onOpen: (d: any) => void }) => {
  return (
    <article 
      onClick={() => onOpen(item.dossier)} 
      className="race-border bg-[#111] hover:bg-white/5 transition-all group relative overflow-hidden flex flex-col h-full cursor-pointer touch-manipulation"
    >
      {/* SECTION IMAGE */}
      <div className="relative h-48 md:h-52 overflow-hidden border-b border-white/10">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 opacity-80 md:opacity-60 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        
        {/* CATEGORIE PRINCIPALE */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-yellow-500 text-black px-2 py-1 text-[9px] md:text-[10px] font-black italic uppercase shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            {item.cat}
          </span>
        </div>
      </div>

      {/* CONTENU TEXTUEL */}
      <div className="p-5 md:p-8 relative flex-grow flex flex-col">
        <div className="absolute top-0 right-0 p-4 opacity-10 md:opacity-5 group-hover:opacity-20 transition-opacity hidden md:block">
          <Activity size={60} />
        </div>

        {/* METADONNÉES & FILTRES TECHNIQUES */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {/* Affichage des Tags dynamiques s'ils existent dans ton objet item */}
            {item.tags?.map((tag: string, index: number) => (
              <span key={index} className="text-[8px] font-bold border border-white/20 px-2 py-0.5 text-white/40 uppercase tracking-widest group-hover:border-yellow-500/50 group-hover:text-yellow-500 transition-colors">
                # {tag}
              </span>
            ))}
          </div>
          <span className="font-mono text-[9px] md:text-[10px] opacity-40 uppercase tracking-tighter">
            {item.date} // {item.type || 'SYSTEM_LOG'}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-black italic leading-tight mb-3 md:mb-4 group-hover:text-yellow-500 transition-colors tracking-tighter uppercase">
          {item.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 font-medium italic uppercase text-[10px] md:text-xs border-l border-yellow-500/20 pl-4 flex-grow">
          {item.desc}
        </p>

        {/* INFOS TECHNIQUES RAPIDES (Ligne du bas) */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOpen(item.dossier);
            }} 
            className="flex items-center gap-3 text-[10px] font-black italic tracking-[0.2em] text-yellow-500 group-hover:gap-6 transition-all uppercase"
          >
            OUVRIR_DOSSIER <ArrowRight size={14} />
          </button>
          
          <Tag size={12} className="opacity-20 group-hover:text-yellow-500 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </article>
  );
};