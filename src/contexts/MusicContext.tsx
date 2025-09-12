import { createContext, useContext, useState, ReactNode } from "react";

interface Track {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  duration: string;
  plays: string;
  likes: string;
}

interface MusicContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playlist: Track[];
  isShuffled: boolean;
  repeatMode: 'off' | 'all' | 'one';
  setCurrentTrack: (track: Track | null) => void;
  setIsPlaying: (playing: boolean) => void;
  setPlaylist: (tracks: Track[]) => void;
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const getNextTrack = () => {
    if (!currentTrack || playlist.length === 0) return null;
    
    if (repeatMode === 'one') {
      return currentTrack;
    }
    
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    
    if (isShuffled) {
      const availableTracks = playlist.filter(track => track.id !== currentTrack.id);
      return availableTracks[Math.floor(Math.random() * availableTracks.length)];
    }
    
    const nextIndex = (currentIndex + 1) % playlist.length;
    return playlist[nextIndex];
  };

  const nextTrack = () => {
    const next = getNextTrack();
    if (next) playTrack(next);
  };

  const previousTrack = () => {
    if (!currentTrack || playlist.length === 0) return;
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    playTrack(playlist[prevIndex]);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    setRepeatMode(prev => {
      if (prev === 'off') return 'all';
      if (prev === 'all') return 'one';
      return 'off';
    });
  };

  return (
    <MusicContext.Provider value={{
      currentTrack,
      isPlaying,
      playlist,
      isShuffled,
      repeatMode,
      setCurrentTrack,
      setIsPlaying,
      setPlaylist,
      playTrack,
      pauseTrack,
      nextTrack,
      previousTrack,
      toggleShuffle,
      toggleRepeat
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};