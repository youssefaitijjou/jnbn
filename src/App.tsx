import React from 'react';
import { Home, Play, Calendar, Users, Settings, Search, Bell, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from './lib/utils';
import { MOCK_MATCHES, LEAGUES, type Match } from './constants';

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={cn(
    "flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group",
    active ? "bg-brand-primary text-black font-semibold" : "text-white/60 hover:text-white hover:bg-white/5"
  )}>
    <Icon size={22} className={cn(active ? "text-black" : "text-white/60 group-hover:text-white")} />
    <span className="text-sm tracking-wide">{label}</span>
  </div>
);

const MatchCard = ({ match, onClick }: { match: Match, onClick: () => void }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="glass rounded-2xl overflow-hidden cursor-pointer group relative"
  >
    <div className="relative aspect-video">
      <img 
        src={match.thumbnail} 
        alt={match.homeTeam} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {match.status === 'live' && (
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-accent-red px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider animate-pulse">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          Live
        </div>
      )}
      
      {match.viewerCount && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-medium">
          <Users size={12} />
          {match.viewerCount}
        </div>
      )}
    </div>

    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-semibold text-brand-primary uppercase tracking-widest">{match.league}</span>
        <span className="text-[10px] text-white/40 font-mono">{match.status === 'live' ? match.time : `Starts at ${match.time}`}</span>
      </div>
      
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col items-center gap-1 flex-1">
          <img src={match.homeLogo} alt={match.homeTeam} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
          <span className="text-xs font-medium text-center line-clamp-1">{match.homeTeam}</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          {match.status === 'live' ? (
            <span className="text-lg font-bold font-mono">{match.score?.home} : {match.score?.away}</span>
          ) : (
            <span className="text-sm font-bold text-white/20">VS</span>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 flex-1">
          <img src={match.awayLogo} alt={match.awayTeam} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
          <span className="text-xs font-medium text-center line-clamp-1">{match.awayTeam}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [selectedMatch, setSelectedMatch] = React.useState<Match | null>(null);
  const [activeLeague, setActiveLeague] = React.useState('All');

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col p-6 hidden lg:flex">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Play size={20} className="text-black fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-display">GOALSTREAM</span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={Home} label="Home" active />
          <SidebarItem icon={Play} label="Live Matches" />
          <SidebarItem icon={Calendar} label="Schedule" />
          <SidebarItem icon={Users} label="Top Leagues" />
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <SidebarItem icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 lg:hidden">
            <Menu size={24} />
            <span className="text-xl font-bold tracking-tighter font-display">GOALSTREAM</span>
          </div>

          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input 
              type="text" 
              placeholder="Search matches, teams, or leagues..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-primary/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell size={20} className="text-white/60" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent-red rounded-full border-2 border-[#0A0A0B]" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">Alex Johnson</p>
                <p className="text-[10px] text-white/40">Premium Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-[1px]">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                  alt="Avatar" 
                  className="w-full h-full rounded-full bg-[#0A0A0B]"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {selectedMatch ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <button 
                onClick={() => setSelectedMatch(null)}
                className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors"
              >
                ← Back to Browse
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="aspect-video bg-black rounded-3xl overflow-hidden relative group">
                    <img 
                      src={selectedMatch.thumbnail} 
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center neon-glow cursor-pointer hover:scale-110 transition-transform">
                        <Play size={32} className="text-black fill-current ml-1" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-accent-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          Live
                        </div>
                        <span className="text-sm font-medium">{selectedMatch.homeTeam} vs {selectedMatch.awayTeam}</span>
                      </div>
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <span>720p HD</span>
                        <span>{selectedMatch.viewerCount} watching</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-3xl p-8">
                    <h3 className="text-xl font-bold mb-6">Match Statistics</h3>
                    <div className="space-y-6">
                      {[
                        { label: 'Possession', home: 54, away: 46 },
                        { label: 'Shots on Target', home: 6, away: 4 },
                        { label: 'Corners', home: 8, away: 3 },
                        { label: 'Fouls', home: 12, away: 15 },
                      ].map((stat) => (
                        <div key={stat.label} className="space-y-2">
                          <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-white/60">
                            <span>{stat.home}%</span>
                            <span>{stat.label}</span>
                            <span>{stat.away}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full flex overflow-hidden">
                            <div className="h-full bg-brand-primary" style={{ width: `${stat.home}%` }} />
                            <div className="h-full bg-brand-secondary" style={{ width: `${stat.away}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass rounded-3xl p-6 flex flex-col h-[500px]">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Users size={18} className="text-brand-primary" />
                      Live Chat
                    </h3>
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                      {[
                        { user: 'Marco', msg: 'Hala Madrid! ⚪️', color: 'text-blue-400' },
                        { user: 'Elena', msg: 'Barca can still win this!', color: 'text-red-400' },
                        { user: 'Sven', msg: 'What a save by Courtois!', color: 'text-green-400' },
                        { user: 'Liam', msg: 'Ref is blind lol', color: 'text-yellow-400' },
                        { user: 'Sofia', msg: 'GOAAAALLLLL!!!', color: 'text-pink-400' },
                      ].map((chat, i) => (
                        <div key={i} className="text-sm">
                          <span className={cn("font-bold mr-2", chat.color)}>{chat.user}:</span>
                          <span className="text-white/80">{chat.msg}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <input 
                        type="text" 
                        placeholder="Say something..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-brand-primary/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Hero Section */}
              <section className="relative h-[400px] rounded-[40px] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1920" 
                  alt="Hero" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-2xl space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Featured Match</span>
                    <span className="text-white/60 text-xs font-medium">Tonight • 21:00 PM</span>
                  </div>
                  <h1 className="text-6xl font-black font-display tracking-tighter leading-[0.9]">
                    THE BIGGEST <br /> <span className="text-brand-primary">DERBY</span> OF THE YEAR
                  </h1>
                  <p className="text-white/60 text-lg max-w-md">
                    Don't miss the clash between Real Madrid and Barcelona. Stream it live in 4K Ultra HD.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="bg-brand-primary text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform neon-glow">
                      Watch Live Now
                    </button>
                    <button className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                      Match Details
                    </button>
                  </div>
                </div>
              </section>

              {/* Leagues Selector */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Top Leagues</h2>
                  <button className="text-brand-primary text-sm font-semibold hover:underline">View All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {LEAGUES.map((league) => (
                    <button
                      key={league.name}
                      onClick={() => setActiveLeague(league.name)}
                      className={cn(
                        "flex items-center gap-3 px-6 py-3 rounded-2xl whitespace-nowrap transition-all duration-300",
                        activeLeague === league.name 
                          ? "bg-brand-primary text-black font-bold neon-glow" 
                          : "glass glass-hover text-white/60"
                      )}
                    >
                      <span className="text-xl">{league.icon}</span>
                      <span className="text-sm">{league.name}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Live Matches */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Live Matches</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                    <span className="text-xs font-bold text-accent-red uppercase tracking-widest">4 Matches Live</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {MOCK_MATCHES.filter(m => m.status === 'live').map((match) => (
                    <MatchCard key={match.id} match={match} onClick={() => setSelectedMatch(match)} />
                  ))}
                </div>
              </section>

              {/* Upcoming Matches */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Upcoming</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {MOCK_MATCHES.filter(m => m.status === 'upcoming').map((match) => (
                    <MatchCard key={match.id} match={match} onClick={() => setSelectedMatch(match)} />
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
