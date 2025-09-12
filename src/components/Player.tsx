import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useMusic } from "@/contexts/MusicContext";

export const Player = () => {
  const { currentTrack, isPlaying, setIsPlaying, nextTrack, previousTrack, isShuffled, repeatMode, toggleShuffle, toggleRepeat } = useMusic();
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([30]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-player border-t border-border p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Current Track Info */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <img
            src={currentTrack?.artwork || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=center"}
            alt="Current track"
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium text-foreground truncate">{currentTrack?.title || "No track playing"}</p>
            <p className="text-sm text-muted-foreground truncate">{currentTrack?.artist || "Select a track"}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={isShuffled ? "text-primary" : "text-muted-foreground hover:text-primary"}
              onClick={toggleShuffle}
            >
              <Shuffle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={previousTrack}>
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-10 h-10 rounded-full bg-primary hover:bg-primary-glow shadow-primary"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={nextTrack}>
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={repeatMode !== 'off' ? "text-primary" : "text-muted-foreground hover:text-primary"}
              onClick={toggleRepeat}
            >
              <Repeat className="w-4 h-4" />
              {repeatMode === 'one' && (
                <span className="absolute -top-1 -right-1 text-xs bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">1</span>
              )}
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-3 w-full max-w-lg">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">{currentTrack?.duration || "0:00"}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};