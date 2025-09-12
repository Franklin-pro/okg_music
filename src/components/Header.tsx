import { Search, Home, Library, Upload, Music, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useMusic } from "@/contexts/MusicContext";
import track1 from "@/assets/track1.jpg";
import track2 from "@/assets/track2.jpg";
import track3 from "@/assets/track3.jpg";
import track4 from "@/assets/track4.jpg";
import okgLogo from '../assets/okgLogo.jpeg'

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { playTrack, setPlaylist } = useMusic();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  interface Track {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    duration: string;
    plays: string;
    likes: string;
  }

  const allTracks = [
    { id: "1", title: "Synthwave Nights", artist: "Neon Dreams", artwork: track1, duration: "3:45", plays: "2.3M", likes: "45K" },
    { id: "2", title: "Cosmic Journey", artist: "Stellar Waves", artwork: track2, duration: "4:12", plays: "1.8M", likes: "32K" },
    { id: "3", title: "Urban Pulse", artist: "City Beats", artwork: track3, duration: "3:28", plays: "1.5M", likes: "28K" },
    { id: "4", title: "Midnight Chill", artist: "Lo-Fi Collective", artwork: track4, duration: "5:02", plays: "987K", likes: "19K" },
    { id: "5", title: "Electric Dreams", artist: "Cyber Sync", artwork: track1, duration: "3:55", plays: "756K", likes: "15K" },
    { id: "6", title: "Ocean Waves", artist: "Ambient Flow", artwork: track2, duration: "6:18", plays: "623K", likes: "12K" }
  ];

  const filteredResults = searchQuery.length > 0 ? allTracks.filter(track => 
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5) : [];

  const handleTrackClick = (track: Track) => {
    setPlaylist(allTracks);
    playTrack(track);
    setShowResults(false);
    setSearchQuery("");
    navigate("/discover");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={okgLogo} alt="" className="rounded-full"/>
            </div>
            <span className="text-xl font-bold text-primary">OKG-MUSIC</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className={location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-white"} onClick={() => navigate("/")}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" className={location.pathname === "/discover" ? "text-primary" : "text-muted-foreground hover:text-white"} onClick={() => navigate("/discover")}>
              <Library className="w-4 h-4 mr-2" />
              Discover
            </Button>
            <Button variant="ghost" className={location.pathname === "/pricing" ? "text-primary" : "text-muted-foreground hover:text-white"} onClick={() => navigate("/pricing")}>
              <Library className="w-4 h-4 mr-2" />
              Pricing
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-white">
              <Library className="w-4 h-4 mr-2" />
              Library
            </Button>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-lg mx-8" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for tracks, artists, or albums..."
              className="pl-10 bg-muted/50 border-border focus:border-primary"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(e.target.value.length > 0);
              }}
              onFocus={() => searchQuery.length > 0 && setShowResults(true)}
            />
            
            {/* Search Results Dropdown */}
            {showResults && filteredResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                <div className="p-2">
                  <p className="text-xs text-muted-foreground mb-2 px-2">Tracks</p>
                  {filteredResults.map((track) => (
                    <div
                      key={track.id}
                      className="flex items-center gap-3 p-2 rounded-lg cursor-pointer"
                      onClick={() => handleTrackClick(track)}
                    >
                      <img src={track.artwork} alt={track.title} className="w-10 h-10 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{track.title}</p>
                        <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                      </div>
                      <Music className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {showResults && searchQuery.length > 0 && filteredResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-50">
                <div className="p-4 text-center text-muted-foreground">
                  No results found for "{searchQuery}"
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <div className="w-8 h-8 rounded-full bg-gradient-primary cursor-pointer" onClick={() => navigate("/login")} />
        </div>
      </div>
    </header>
  );
};