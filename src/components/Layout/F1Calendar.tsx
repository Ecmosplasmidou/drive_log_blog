import { useEffect, useState } from 'react';
import { Flag, Calendar, MapPin, Loader2, ChevronDown } from 'lucide-react';

export const F1Calendar = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'F1' | 'MOTOGP'>('ALL');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchAllRaces = async () => {
      try {
        const currentYear = new Date().getFullYear()
        const f1Res = await fetch(`https://api.openf1.org/v1/sessions?session_name=Race&year=${currentYear}`);
        const f1Data = await f1Res.json();
        
        const f1Formatted = f1Data.map((r: any) => ({
          id: `f1-${r.session_key}`,
          type: 'F1',
          title: `${r.location} GP`,
          track: r.circuit_short_name,
          date: new Date(r.date_start),
          color: 'text-red-600',
          border: 'border-red-600'
        }));

        const motoGPData = [
          { id: 'm-1', type: 'MOTOGP', title: 'GP du Qatar', track: 'Lusail', date: new Date(`${currentYear}-03-08T17:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
          { id: 'm-2', type: 'MOTOGP', title: 'GP du Portugal', track: 'Portimão', date: new Date(`${currentYear}-03-22T14:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
          { id: 'm-3', type: 'MOTOGP', title: 'GP des Amériques', track: 'Austin', date: new Date(`${currentYear}-04-05T20:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
          { id: 'm-4', type: 'MOTOGP', title: 'GP d\'Espagne', track: 'Jerez', date: new Date(`${currentYear}-04-26T14:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
          { id: 'm-5', type: 'MOTOGP', title: 'GP de France', track: 'Le Mans', date: new Date(`${currentYear}-05-10T14:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
          { id: 'm-6', type: 'MOTOGP', title: 'GP d\'Italie', track: 'Mugello', date: new Date(`${currentYear}-05-31T14:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
          { id: 'm-7', type: 'MOTOGP', title: 'GP d\'Allemagne', track: 'Sachsenring', date: new Date(`${currentYear}-06-21T14:00:00Z`), color: 'text-blue-500', border: 'border-blue-500' },
        ];

        const combined = [...f1Formatted, ...motoGPData]
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
    if (filter === 'ALL') return true;
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
          {['ALL', 'F1', 'MOTOGP'].map((f) => (
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

      {/* BOUTONS DE CONTRÔLE SORTIS DE LA CONDITION DE VISIBILITÉ */}
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