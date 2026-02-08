import { Flag } from 'lucide-react';

export const Navbar = () => (
  <nav className="fixed w-full z-[100] bg-black/90 border-b-2 border-yellow-500 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="p-1 bg-yellow-500 text-black font-black italic px-2 md:px-3 skew-x-[-15deg] text-sm md:text-base uppercase">APEX</div>
        <span className="font-black tracking-tighter text-lg md:text-2xl italic">DRIVE_LOG</span>
      </div>
      <a 
        href="https://templierdriver.org/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-yellow-500 text-black px-3 md:px-6 py-2 font-black italic tracking-widest hover:bg-white transition-all text-[10px] md:text-xs shadow-[4px_4px_0px_rgba(255,255,255,0.2)]"
      >
        <span className="hidden sm:inline">TEMPLIER_DRIVER</span> 
        <Flag size={16} fill="black" />
      </a>
    </div>
  </nav>
);