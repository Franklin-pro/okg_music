import { Card } from "@/components/ui/card";

interface GenreCardProps {
  name: string;
  subtitle: string;
  image: string;
  color: string;
}

export const GenreCard = ({ name, subtitle, color }: GenreCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:bg-track-hover transition-all duration-300">
      <div className="aspect-square relative">
        <div className={`w-full h-full ${color} opacity-80 flex items-center justify-center`}>
          <div className="text-center text-white p-4">
            <h3 className="font-bold text-lg mb-1">{name}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      </div>
    </Card>
  );
};