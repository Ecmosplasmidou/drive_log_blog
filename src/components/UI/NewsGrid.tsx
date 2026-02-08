import { useState } from 'react';
import { news } from '../../data/newsData';
import { NewsCard } from './NewsCard';
import { Filter } from 'lucide-react';

export const NewsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('TOUT');
  const [selectedDossier, setSelectedDossier] = useState(null);

  const filters = ['TOUT', 'Technique', 'Écuries', 'Circuits', 'Marques'];

  const filteredNews = news.filter(item => {
    if (activeFilter === 'TOUT') return true;
    return item.cat.includes(activeFilter.toUpperCase()) || 
           item.tags?.some(tag => tag.includes(activeFilter));
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* BARRE DE FILTRES */}
      <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-yellow-500 mr-4">
          <Filter size={16} />
          <span className="text-[10px] font-black uppercase italic">Filtrer_Data :</span>
        </div>
        
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1 text-[10px] font-black italic skew-x-[-15deg] transition-all border ${
              activeFilter === f 
                ? 'bg-yellow-500 text-black border-yellow-500' 
                : 'text-white/40 border-white/10 hover:border-white/40'
            }`}
          >
            <span className="skew-x-[15deg] block uppercase">{f}</span>
          </button>
        ))}
      </div>

      {/* GRILLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map(item => (
          <NewsCard 
            key={item.id} 
            item={item} 
            onOpen={(d) => console.log("Ouvrir dossier", d)} 
          />
        ))}
      </div>
      
      {filteredNews.length === 0 && (
        <div className="text-center py-20 opacity-40 italic font-mono uppercase text-sm">
          [!] Aucun_Dossier_Trouvé_Pour_Ce_Filtre
        </div>
      )}
    </section>
  );
};