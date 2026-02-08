export const Footer = () => (
  <footer className="mt-auto bg-black border-t-8 border-yellow-500 py-12 md:py-16 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12">
      <div className="text-center md:text-left italic">
        <p className="font-black text-2xl md:text-3xl tracking-tighter mb-2 uppercase">APEX_DRIVE</p>
        <p className="text-[10px] md:text-[11px] opacity-40 font-bold max-w-sm mx-auto md:mx-0 uppercase">
          LE BLOG RÉFÉRENCE POUR LES PASSIONNÉS DE VITESSE ET DE MÉCANIQUE DE PRÉCISION.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
        <p className="text-[9px] md:text-[10px] font-black text-slate-500 italic tracking-[0.3em] uppercase text-center md:text-right">PARTENAIRE_PRINCIPAL</p>
        <a href="https://templierdriver.org/" target="_blank" className="text-xl md:text-2xl font-black !text-yellow-500 hover:text-white transition-colors italic tracking-tighter underline">
          TEMPLIERDRIVER.ORG
        </a>
        <div className="flex gap-4 md:gap-6 mt-2">
          <a href="https://www.fia.com" target="_blank" className="text-[9px] md:text-[10px] opacity-40 !text-yellow-500 hover:opacity-100 uppercase">FIA_OFFICIAL</a>
          <a href="https://www.motogp.com" target="_blank" className="text-[9px] md:text-[10px] opacity-40 !text-yellow-500 hover:opacity-100 uppercase">MOTOGP_HUB</a>
        </div>
      </div>
    </div>
  </footer>
);