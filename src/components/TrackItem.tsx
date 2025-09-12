import { Play, Pause, Heart, Repeat, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TrackItemProps {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  duration: string;
  plays: string;
  likes: string;
  isPlaying?: boolean;
  onPlayPause: (id: string) => void;
}

const Waveform = ({ isPlaying }: { isPlaying: boolean }) => {
  const bars = Array.from({ length: 60 }, (_, i) => {
    const height = Math.random() * 40 + 10;
    const delay = Math.random() * 2;
    return (
      <div
        key={i}
        className={`w-0.5 transition-colors duration-200 ${
          isPlaying && i < 20 ? 'bg-orange-500' : isPlaying ? 'bg-orange-300' : 'bg-waveform-secondary'
        }`}
        style={{
          height: `${height}%`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });

  return (
    <div className="flex items-center justify-center h-16 gap-px flex-1 px-4">
      {bars}
    </div>
  );
};

export const TrackItem = ({
  id,
  title,
  artist,
  artwork,
  duration,
  plays,
  likes,
  isPlaying = false,
  onPlayPause
}: TrackItemProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className={`group flex items-center p-4 border-b border-border transition-colors cursor-pointer ${
        isPlaying 
          ? 'bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/15' 
          : 'hover:bg-track-hover'
      }`}
      onClick={() => onPlayPause(id)}
    >
      {/* Artwork and Play Button */}
      <div className="relative flex-shrink-0 mr-4">
        <img
          src={artwork}
          alt={`${title} artwork`}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute inset-0 w-16 h-16 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-black/70"
          onClick={() => onPlayPause(id)}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1" />
          )}
        </Button>
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className={`font-semibold truncate text-lg ${
              isPlaying ? 'text-orange-500' : 'text-foreground'
            }`}>{title}</h3>
            <p className={`truncate ${
              isPlaying ? 'text-orange-400' : 'text-muted-foreground'
            }`}>{artist}</p>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div>{duration}</div>
            <div className="flex items-center gap-2 mt-1">
              <span>{plays} plays</span>
              <span>{likes} likes</span>
            </div>
          </div>
        </div>

        {/* Waveform */}
        <Waveform isPlaying={isPlaying} />

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`hover:text-white ${isLiked ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Repeat className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};