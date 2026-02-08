import { Flame, Gauge, Wind } from "lucide-react";

export const Hero = () => {
  return (
    <header className="relative pt-32 md:pt-44 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <span className="h-[2px] w-8 md:w-12 bg-yellow-500"></span>
        <span className="text-yellow-500 font-black italic tracking-widest text-[10px] md:text-sm uppercase">FULL THROTTLE // SEASON {new Date().getFullYear()}</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
        <div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-none mb-6 md:mb-8 italic tracking-tighter uppercase">
            VITESSE <br /> <span className="text-yellow-500">ABSOLUE.</span>
          </h1>
          <p className="text-slate-400 font-bold italic border-l-4 border-yellow-500 pl-4 md:pl-6 max-w-lg text-sm md:text-lg leading-relaxed">
            Analyses techniques et actualités critiques des sports mécaniques mondiaux. Nous disséquons les performances <span className='text-yellow-500 not-italic'>F1, MotoGP</span> et <span className='text-yellow-500 not-italic'>Air Racing</span>. Rapports produits en collaboration avec <a href="https://templierdriver.org/" target="_blank" className="!text-yellow-500 underline !decoration-yellow-500 font-black">Templier Driver</a>.
          </p>
        </div>
        
        {/* Grille de Stats Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full">
          {[
            { icon: <Gauge size={20} />, label: "LAP_TIME", value: "1:21.0" },
            { icon: <Wind size={20} />, label: "AERO_EFF", value: "98%" },
            { icon: <Flame size={20} />, label: "CORE_TEMP", value: "102°C" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 p-4 border-b-2 border-yellow-500 flex sm:flex-col justify-between items-center sm:items-start">
              <div className="text-yellow-500">{stat.icon}</div>
              <div className="text-right sm:text-left">
                <p className="text-[10px] font-black opacity-40 uppercase">{stat.label}</p>
                <p className="text-xl font-black italic">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};