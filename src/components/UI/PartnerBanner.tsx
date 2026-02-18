import { ExternalLink } from 'lucide-react'; 

import logoTemplier from './assets/images/logo.png'; 

const PartnerBanner = () => (
  <section className="mt-6 bg-yellow-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 skew-x-[-2deg] shadow-[10px_10px_0px_rgba(255,255,255,0.1)] border-y-4 border-black">
    <div className="flex flex-col md:flex-row items-center gap-8 skew-x-[2deg]">
      <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 border-4 border-black rotate-[-3deg] shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-yellow-500">
        <img 
          src={logoTemplier} 
          alt="Logo Templier Driver" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-black text-3xl md:text-4xl font-black italic mb-2 tracking-tighter uppercase">
          PILOTAGE DE HAUT NIVEAU
        </h2>
        <div className="flex flex-col">
          <p className="text-black font-black uppercase text-[10px] tracking-[0.2em] mb-1">Partenaire Officiel</p>
          <p className="text-black/80 font-bold italic uppercase text-[10px] md:text-sm tracking-tight border-l-4 border-black pl-4">
            Accédez au portail officiel de notre partenaire Templier Driver.
          </p>
        </div>
      </div>
    </div>
    <a 
      href="https://templierdriver.org/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-black !text-white px-10 py-5 font-black italic tracking-[0.2em] hover:bg-white hover:!text-black transition-all skew-x-[2deg] flex items-center gap-4 text-sm whitespace-nowrap"
    >
      ACCÉDER AU SITE <ExternalLink size={20} />
    </a>
  </section>
);

export default PartnerBanner