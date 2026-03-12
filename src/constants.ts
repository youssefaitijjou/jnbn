export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  score?: { home: number; away: number };
  time: string;
  status: 'live' | 'upcoming' | 'finished';
  league: string;
  viewerCount?: string;
  thumbnail: string;
}

export const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    awayLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg',
    score: { home: 2, away: 1 },
    time: "74'",
    status: 'live',
    league: 'La Liga',
    viewerCount: '1.2M',
    thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    homeTeam: 'Man City',
    awayTeam: 'Liverpool',
    homeLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    awayLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    score: { home: 0, away: 0 },
    time: "12'",
    status: 'live',
    league: 'Premier League',
    viewerCount: '850K',
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    homeLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    awayLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
    time: '20:45',
    status: 'upcoming',
    league: 'Bundesliga',
    thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    homeLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    awayLogo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Olympique_de_Marseille_logo.svg',
    time: '21:00',
    status: 'upcoming',
    league: 'Ligue 1',
    thumbnail: 'https://images.unsplash.com/photo-1518091043644-c1d445bb5120?auto=format&fit=crop&q=80&w=800'
  }
];

export const LEAGUES = [
  { name: 'All', icon: '🏆' },
  { name: 'Premier League', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'La Liga', icon: '🇪🇸' },
  { name: 'Bundesliga', icon: '🇩🇪' },
  { name: 'Serie A', icon: '🇮🇹' },
  { name: 'Ligue 1', icon: '🇫🇷' },
  { name: 'Champions League', icon: '⭐' },
];
