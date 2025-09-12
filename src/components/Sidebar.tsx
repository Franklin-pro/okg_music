import { TrendingUp, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarTrackProps {
  title: string;
  artist: string;
  artwork: string;
  plays: string;
}

const SidebarTrack = ({ title, artist, artwork, plays }: SidebarTrackProps) => (
  <div className="flex items-center gap-3 p-2 hover:bg-sidebar-accent rounded-lg transition-colors cursor-pointer">
    <img src={artwork} alt={title} className="w-10 h-10 rounded object-cover" />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-sidebar-foreground truncate">{title}</p>
      <p className="text-xs text-muted-foreground truncate">{artist}</p>
    </div>
    <span className="text-xs text-muted-foreground">{plays}</span>
  </div>
);

export const Sidebar = () => {
  const trendingTracks = [
    {
      title: "Midnight Echoes",
      artist: "Luna Rivers",
      artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
      plays: "2.3M"
    },
    {
      title: "Digital Dreams",
      artist: "Cyber Pulse",
      artwork: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop&crop=center",
      plays: "1.8M"
    },
    {
      title: "Neon Nights",
      artist: "Synth Wave",
      artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
      plays: "1.5M"
    }
  ];

  const recentTracks = [
    {
      title: "Ocean Breeze",
      artist: "Chill Vibes",
      artwork: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop&crop=center",
      plays: "45K"
    },
    {
      title: "Urban Jungle",
      artist: "City Sounds",
      artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
      plays: "23K"
    }
  ];

  return (
    <aside className="w-80 bg-sidebar border-l border-sidebar-border p-4 overflow-y-auto">
      {/* Trending Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-sidebar-primary" />
          <h2 className="text-lg font-semibold text-sidebar-foreground">Trending</h2>
        </div>
        <div className="space-y-2">
          {trendingTracks.map((track, index) => (
            <SidebarTrack key={index} {...track} />
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-3 text-sidebar-primary hover:text-sidebar-primary">
          View all trending
        </Button>
      </div>

      {/* Recently Played */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-sidebar-primary" />
          <h2 className="text-lg font-semibold text-sidebar-foreground">Recently Played</h2>
        </div>
        <div className="space-y-2">
          {recentTracks.map((track, index) => (
            <SidebarTrack key={index} {...track} />
          ))}
        </div>
      </div>

      {/* Following Activity */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-sidebar-primary" />
          <h2 className="text-lg font-semibold text-sidebar-foreground">Following</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-primary" />
            <div className="flex-1">
              <p className="text-sm text-sidebar-foreground">Alex Chen liked a track</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20" />
            <div className="flex-1">
              <p className="text-sm text-sidebar-foreground">Maya posted a new track</p>
              <p className="text-xs text-muted-foreground">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};