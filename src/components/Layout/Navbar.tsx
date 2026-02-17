import { Flag } from 'lucide-react';
import logo from '../../assets/images/AD_2-snas-fond.png'
import logoMobile from '../../assets/images/AD_1-snas-fond.png'

export const Navbar = () => (
  <nav className="fixed w-full z-[100] bg-black/90 border-b-2 border-yellow-500 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="p-1 text-black font-black italic px-2 md:px-3 skew-x-[-15deg] text-sm md:text-base flex items-center justify-center">
          <img 
            src={logoMobile} 
            alt="Logo Mobile" 
            className="w-12 h-12 object-contain skew-x-[15deg] md:hidden"
          />
          <img 
            src={logo} 
            alt="Logo Apex-Drive" 
            className="hidden md:block w-18 h-18 object-contain skew-x-[15deg]"
          />
        </div>
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