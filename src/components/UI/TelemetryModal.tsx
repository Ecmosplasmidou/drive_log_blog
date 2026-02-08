import { X, Trophy, ExternalLink } from 'lucide-react';

interface TelemetryModalProps {
  dossier: any;
  onClose: () => void;
}

export const TelemetryModal = ({ dossier, onClose }: TelemetryModalProps) => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-md">
    {/* Ajout de max-h-[90vh] et overflow-y-auto pour le scroll */}
    <div className="bg-[#111] max-w-2xl w-full p-6 md:p-10 relative border-l-8 border-yellow-500 shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
      
      {/* Bouton Fermer - rendu "Sticky" pour rester accessible au scroll */}
      <button 
        onClick={onClose} 
        className="sticky float-right top-0 -mr-2 -mt-2 p-2 text-yellow-500 hover:bg-white/10 transition-all rounded-none border border-yellow-500/20 z-10 bg-[#111]"
        aria-label="Fermer"
      >
        <X size={24} md:size={32} strokeWidth={3} />
      </button>

      <div className="flex items-center gap-2 text-yellow-500 mb-6 font-black italic text-xs tracking-[0.2em]">
        <Trophy size={16} /> ANALYSE_TECHNIQUE
      </div>

      <h2 className="text-3xl md:text-4xl font-black italic mb-8 tracking-tighter text-white leading-none">
        {dossier.title}
      </h2>

      <div className="space-y-6">
        {/* Le contenu textuel principal */}
        <p className="text-slate-300 leading-relaxed italic font-medium text-sm md:text-base border-l border-white/10 pl-4">
          {dossier.content}
        </p>

        {/* Grille des specs technique */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-4">
          {dossier.specs.map((spec: string) => (
            <div key={spec} className="bg-white/5 p-4 border border-white/10 text-center skew-x-[-10deg]">
              <p className="text-[10px] font-black italic text-yellow-500 skew-x-[10deg]">{spec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pied de modale : Sources */}
      <div className="mt-10 pt-8 border-t border-white/5">
        <p className="text-[10px] font-black opacity-40 mb-4">SOURCES_ET_TÉLÉMÉTRIE_OFFICIELLE :</p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://templierdriver.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-black text-yellow-500 border border-yellow-500/30 px-3 py-1 hover:bg-yellow-500 hover:text-black transition-colors"
          >
            TEMPLIER_DATA
          </a>
          {dossier.externalLinks?.map((l: any) => (
            <a 
              key={l.url} 
              href={l.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black flex items-center gap-2 border border-white/10 px-3 py-1 hover:bg-white hover:text-black transition-colors"
            >
              {l.name} <ExternalLink size={10} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);