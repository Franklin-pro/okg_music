import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtistCardProps {
  name: string;
  status: string;
  image: string;
}

export const ArtistCard = ({ name, status }: ArtistCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:bg-track-hover transition-all duration-300">
      <div className="aspect-square relative">
        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h3 className="font-bold text-xl">BUZZING</h3>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {status}
        </Badge>
      </div>
      <div className="p-3">
        <h4 className="font-semibold text-foreground truncate">{name}</h4>
      </div>
    </Card>
  );
};