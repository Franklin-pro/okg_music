import { Header } from "@/components/Header";
import { GenreCard } from "@/components/GenreCard";
import { PlaylistCard } from "@/components/PlaylistCard";
import { ArtistCard } from "@/components/ArtistCard";
import { TrackItem } from "@/components/TrackItem";
import { Sidebar } from "@/components/Sidebar";
import { Player } from "@/components/Player";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMusic } from "@/contexts/MusicContext";
import track1 from "@/assets/track1.jpg";
import track2 from "@/assets/track2.jpg";
import track3 from "@/assets/track3.jpg";
import track4 from "@/assets/track4.jpg";

const Discover = () => {
  const { currentTrack, isPlaying, playTrack, pauseTrack, setPlaylist } = useMusic();

  const tracks = [
    {
      id: "1",
      title: "Synthwave Nights",
      artist: "Neon Dreams",
      artwork: track1,
      duration: "3:45",
      plays: "2.3M",
      likes: "45K"
    },
    {
      id: "2",
      title: "Cosmic Journey",
      artist: "Stellar Waves",
      artwork: track2,
      duration: "4:12",
      plays: "1.8M",
      likes: "32K"
    },
    {
      id: "3",
      title: "Urban Pulse",
      artist: "City Beats",
      artwork: track3,
      duration: "3:28",
      plays: "1.5M",
      likes: "28K"
    },
    {
      id: "4",
      title: "Midnight Chill",
      artist: "Lo-Fi Collective",
      artwork: track4,
      duration: "5:02",
      plays: "987K",
      likes: "19K"
    },
    {
      id: "5",
      title: "Electric Dreams",
      artist: "Cyber Sync",
      artwork: track1,
      duration: "3:55",
      plays: "756K",
      likes: "15K"
    },
    {
      id: "6",
      title: "Ocean Waves",
      artist: "Ambient Flow",
      artwork: track2,
      duration: "6:18",
      plays: "623K",
      likes: "12K"
    }
  ];

  const handlePlayPause = (trackId: string) => {
    const track = tracks.find(t => t.id === trackId);
    if (!track) return;
    
    setPlaylist(tracks);
    
    if (currentTrack?.id === trackId && isPlaying) {
      pauseTrack();
    } else {
      playTrack(track);
    }
  };
  const genres = [
    { name: "Country", subtitle: "Trending Music", image: "/placeholder.svg", color: "bg-yellow-600" },
    { name: "Electronic", subtitle: "Trending Music", image: "/placeholder.svg", color: "bg-blue-600" },
    { name: "Folk", subtitle: "Trending Music", image: "/placeholder.svg", color: "bg-green-600" },
    { name: "Hip Hop & Rap", subtitle: "Trending Music", image: "/placeholder.svg", color: "bg-purple-600" },
    { name: "House", subtitle: "Trending Music", image: "/placeholder.svg", color: "bg-pink-600" },
  ];

  const curatedPlaylists = [
    { title: "BORDERLESS", subtitle: "Vibrations: Global Rhythms", image: "/placeholder.svg", color: "bg-orange-500" },
    { title: "FRESCO", subtitle: "La Onde Latina", image: "/placeholder.svg", color: "bg-orange-600" },
    { title: "PLUGD", subtitle: "Music: Rap & Hip-Hop", image: "/placeholder.svg", color: "bg-gray-800" },
    { title: "DREAMS", subtitle: "Scenes: Indie", image: "/placeholder.svg", color: "bg-green-500" },
    { title: "ATT", subtitle: "Scenes: Alternative", image: "/placeholder.svg", color: "bg-teal-600" },
  ];

  const buzzingArtists = [
    { name: "Buzzing Mexico", status: "New!", image: "/placeholder.svg" },
    { name: "Buzzing Electronic", status: "New!", image: "/placeholder.svg" },
    { name: "Buzzing Hip Hop & Rap", status: "New!", image: "/placeholder.svg" },
    { name: "Buzzing Pop", status: "New!", image: "/placeholder.svg" },
    { name: "Buzzing R&B", status: "New!", image: "/placeholder.svg" },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 pb-24">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-foreground mb-8">Discover</h1>
            
            <Tabs defaultValue="tracks" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="tracks">Trending Tracks</TabsTrigger>
                <TabsTrigger value="explore">Explore More</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tracks" className="mt-6">
                <div className="mb-6">
                  <p className="text-muted-foreground">Find your next favorite track</p>
                </div>
                <div className="space-y-2">
                  {tracks.map((track) => (
                    <TrackItem
                      key={track.id}
                      {...track}
                      isPlaying={currentTrack?.id === track.id && isPlaying}
                      onPlayPause={handlePlayPause}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="explore" className="mt-6">
                <div className="max-w-6xl mx-auto">

                  {/* Trending by genre */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Trending by genre</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {genres.map((genre) => (
                        <GenreCard key={genre.name} {...genre} />
                      ))}
                    </div>
                  </section>

                  {/* Curated for your taste */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Treanding Musics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {curatedPlaylists.map((playlist) => (
                        <PlaylistCard key={playlist.title} {...playlist} />
                      ))}
                    </div>
                  </section>

                  {/* Artists to watch out for */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Artists to Trending</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {buzzingArtists.map((artist) => (
                        <ArtistCard key={artist.name} {...artist} />
                      ))}
                    </div>
                  </section>

                  {/* Mobile app promo */}
                  <section className="bg-card rounded-xl p-8 border border-border">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold text-foreground">GO MOBILE</h3>
                      <div className="flex justify-center gap-4">
                        <div className="bg-muted rounded-lg p-4 w-24 h-12 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">App Store</span>
                        </div>
                        <div className="bg-muted rounded-lg p-4 w-24 h-12 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">Google Play</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>Legal - Privacy - Cookie Policy - Cookie Manager</p>
                        <p>Imprint - Artist Resources - Blog - Charts</p>
                        <p>Transparency Reports</p>
                        <p>Language: English (US)</p>
                      </div>
                    </div>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* Player */}
      <Player />
    </div>
  );
};

export default Discover;