import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  title: string;
  subtitle: string;
  image: string;
  color?: string;
}

export const PlaylistCard = ({ title, subtitle, color = "bg-gray-600" }: PlaylistCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:bg-track-hover transition-all duration-300">
      <div className="aspect-square relative">
        <div className={`w-full h-full ${color} flex items-center justify-center`}>
          <div className="text-center text-white p-4">
            <h3 className="font-bold text-lg mb-1">{title}</h3>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        <Button
          size="icon"
          className="absolute bottom-3 right-3 bg-primary hover:bg-primary/90 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <Play className="w-4 h-4 ml-0.5" />
        </Button>
      </div>
      <div className="p-3">
        <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
      </div>
    </Card>
  );
};