import { useEffect, useState } from 'react';
import { Flag, Calendar, MapPin, Loader2, ChevronDown } from 'lucide-react';

import { motoGPData } from '../../data/motoGpCalendarData'
import { f1Data } from '../../data/F1CalendarData'

export const F1Calendar = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'TOUS' | 'F1' | 'MOTOGP'>('TOUS');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchAllRaces = async () => {
      try {
        const combined = [...f1Data, ...motoGPData]
          .sort((a, b) => a.date.getTime() - b.date.getTime());
        setEvents(combined);
      } catch (err) {
        console.error("Erreur chargement calendriers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllRaces();
  }, []);

  const filteredEvents = events.filter(event => {
    if (filter === 'TOUS') return true;
    return event.type === filter;
  });

  const displayedEvents = filteredEvents.slice(0, visibleCount);

  if (loading) return (
    <div className="flex items-center justify-center p-20 text-yellow-500 font-black italic uppercase">
      <Loader2 className="animate-spin mr-2" /> SYNCHRONISATION_DATA_STREAM...
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-6 relative">
      <div id="calendar-head" className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="flex items-center gap-4">
          <div className="bg-yellow-500 p-2 text-black skew-x-[-15deg]">
            <Calendar size={24} className="skew-x-[15deg]" />
          </div>
          <div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none text-white">Calendrier de la saison</h2>
            <p className="text-[10px] font-black text-yellow-500 opacity-60 tracking-[0.3em] uppercase">Saison {new Date().getFullYear()}</p>
          </div>
        </div>

        <div className="flex gap-2">
          {['TOUS', 'F1', 'MOTOGP'].map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f as any); setVisibleCount(6); }}
              className={`px-4 py-1 text-[10px] !font-black text-black italic skew-x-[-15deg] transition-all border ${
                filter === f ? 'bg-yellow-500 border-yellow-500' : '!text-black/50 border-white/20 hover:border-yellow-500 hover:text-black'
              }`}
            >
              <span className="skew-x-[15deg] block">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {displayedEvents.map((event) => (
          <div key={event.id} className="group relative bg-white/5 border-l-2 border-white/10 p-6 hover:bg-white/10 hover:border-yellow-500 transition-all cursor-crosshair">
            <div className="flex justify-between items-start mb-4">
              <span className={`text-[10px] font-black italic px-2 py-0.5 border ${event.border} ${event.color}`}>
                {event.type}
              </span>
              <span className="font-mono text-[10px] opacity-40 uppercase text-white">
                {event.date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' })}
              </span>
            </div>
            
            <h3 className="text-xl font-black italic tracking-tighter uppercase mb-2 group-hover:text-yellow-500 transition-colors text-white">
              {event.title}
            </h3>
            
            <div className="flex items-center gap-2 opacity-60 text-[10px] font-bold uppercase text-white">
              <MapPin size={12} className="text-yellow-500" /> {event.track}
            </div>

            <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Flag size={20} className="text-yellow-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 mb-12 flex justify-center">
        {visibleCount < filteredEvents.length ? (
          <button 
            onClick={() => setVisibleCount(filteredEvents.length)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-3 text-[10px] font-black italic tracking-widest text-black/50 hover:bg-yellow-500 hover:text-black transition-all group uppercase"
          >
            AFFICHER TOUTE LA SAISON <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        ) : (
          filteredEvents.length > 6 && (
            <button 
              onClick={() => {
                setVisibleCount(6);
                const element = document.getElementById('calendar-head');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2 bg-yellow-500 text-black/50 hover:text-black px-8 py-3 text-[10px] font-black italic tracking-widest hover:bg-white transition-all group uppercase"
            >
              RÉDUIRE LA LISTE <ChevronDown size={14} className="rotate-180 group-hover:-translate-y-1 transition-transform" />
            </button>
          )
        )}
      </div>
    </section>
  );
};