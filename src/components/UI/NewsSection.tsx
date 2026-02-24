import { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { NewsCard } from './NewsCard';
import { news } from '../../data/newsData';

export const NewsSection = ({ setActiveDossier }: { setActiveDossier: (d: any) => void }) => {
  const [activeTournament, setActiveTournament] = useState('TOUS');
  const [visibleCount, setVisibleCount] = useState(4);

  const tournamentCategories = ['TOUS', ...new Set(news.map(item => item.cat.toUpperCase()))];

  const filteredNews = news.filter(item => {
    if (activeTournament === 'TOUS') return true;
    return item.cat.toUpperCase() === activeTournament;
  });

  const displayedNews = filteredNews.slice(0, visibleCount);

  return (
    <section id="pitlane" className="px-6 max-w-7xl mx-auto pb-24 w-full">
      <div id="news-head" className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 text-yellow-500 min-w-fit">
          <Filter size={14} />
          <span className="text-[10px] font-black tracking-[0.3em]">FILTRES :</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tournamentCategories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveTournament(cat);
                setVisibleCount(4); // Reset le scroll au changement de filtre
              }}
                className={`px-4 py-1 text-[10px] !font-black text-black italic skew-x-[-15deg] transition-all border ${
                activeTournament === cat ? 'bg-yellow-500 border-yellow-500' : '!text-black/50 border-white/20 hover:border-yellow-500 hover:text-black'
              }`}
            >
              <span className="skew-x-[15deg] block uppercase whitespace-nowrap">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {displayedNews.length > 0 ? (
          displayedNews.map(item => (
            <NewsCard key={item.id} item={item} onOpen={setActiveDossier} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center opacity-30 italic font-black text-xl tracking-tighter">
            [!] AUCUNE INFORMATION POUR LE MOMENT
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        {visibleCount < filteredNews.length ? (
          <button
            onClick={() => setVisibleCount(filteredNews.length)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-3 text-[10px] font-black italic tracking-widest text-black/50 hover:bg-yellow-500 hover:text-black transition-all group uppercase"
            >
            AFFICHER TOUTES LES NEWS <ChevronUp size={14} className="rotate-180" />
          </button>
        ) : (
          filteredNews.length > 4 && (
            <button
              onClick={() => {
                setVisibleCount(4);
                document.getElementById('news-head')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-3 text-[10px] font-black italic tracking-widest text-black/50 hover:bg-yellow-500 hover:text-black transition-all group uppercase"
            >
              REDUIRE LA LISTE <ChevronDown size={14} className="rotate-180" />
            </button>
          )
        )}
      </div>
    </section>
  );
};