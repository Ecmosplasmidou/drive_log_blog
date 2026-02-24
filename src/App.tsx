import { useState } from 'react';
import './App.css';
import { ExternalLink } from 'lucide-react'; 

import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Hero/Hero';
import { NewsSection } from './components/UI/NewsSection'; // Import du nouveau composant
import { TelemetryModal } from './components/UI/TelemetryModal';
import { F1Calendar } from './components/Layout/F1Calendar';
import logoTemplier from './assets/images/logo.png'; 

const PartnerBanner = () => (
  <section className="mt-24 bg-yellow-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 skew-x-[-2deg] shadow-[10px_10px_0px_rgba(255,255,255,0.1)] border-y-4 border-black">
    <div className="flex flex-col md:flex-row items-center gap-8 skew-x-[2deg]">
      <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 border-4 border-black rotate-[-3deg] shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-yellow-500">
        <img src={logoTemplier} alt="Logo" className="w-full h-full object-contain" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-black text-3xl md:text-4xl font-black italic mb-2 tracking-tighter uppercase">PILOTAGE DE HAUT NIVEAU</h2>
        <div className="flex flex-col">
          <p className="text-black font-black uppercase text-[10px] tracking-[0.2em] mb-1">Partenaire Officiel</p>
          <p className="text-black/80 font-bold italic uppercase text-[10px] md:text-sm tracking-tight border-l-4 border-black pl-4">
            Accédez au portail officiel de notre partenaire Templier Driver.
          </p>
        </div>
      </div>
    </div>
    <a href="https://templierdriver.org/" target="_blank" rel="noopener noreferrer" 
       className="bg-black !text-white px-10 py-5 font-black italic tracking-[0.2em] hover:bg-white hover:!text-black transition-all skew-x-[2deg] flex items-center gap-4 text-sm whitespace-nowrap">
      ACCÉDER AU SITE <ExternalLink size={20} />
    </a>
  </section>
);

function App() {
  const [activeDossier, setActiveDossier] = useState<any>(null);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0a] text-white font-sans uppercase">
      <div className="racing-grid"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <NewsSection setActiveDossier={setActiveDossier} />
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <F1Calendar />
          <PartnerBanner />
        </div>
      </main>
      <Footer />
      {activeDossier && (
        <TelemetryModal dossier={activeDossier} onClose={() => setActiveDossier(null)} />
      )}
    </div>
  );
}

export default App;