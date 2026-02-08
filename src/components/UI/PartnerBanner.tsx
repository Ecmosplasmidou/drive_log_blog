import { ExternalLink } from 'lucide-react';

export const PartnerBanner = () => (
  <section className="mt-24 bg-yellow-500 p-12 flex flex-col md:flex-row items-center justify-between gap-8 skew-x-[-2deg] shadow-[10px_10px_0px_rgba(255,255,255,0.1)]">
    <div className="skew-x-[2deg]">
      <h2 className="text-black text-4xl font-black italic mb-2 tracking-tighter">PILOTAGE_HAUT_NIVEAU</h2>
      <p className="text-black/70 font-bold italic uppercase text-sm tracking-tight">Accédez au portail officiel de l'écurie Templier Driver.</p>
    </div>
    <a 
      href="https://templierdriver.org/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-black text-white px-10 py-5 font-black italic tracking-[0.2em] hover:bg-white hover:text-black transition-all skew-x-[2deg] flex items-center gap-4 text-sm"
    >
      ACCÉDER AU PADDOCK <ExternalLink size={20} />
    </a>
  </section>
);