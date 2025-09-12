import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, Upload, BarChart3, DollarSign } from "lucide-react";
import okgLogo from '../assets/okgLogo.jpeg'

export const ArtistHeader = () => {
  const location = useLocation();
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/artists" className="flex items-center space-x-2">
               <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={okgLogo} alt="" className="rounded-full"/>
            </div>
            <span className="text-xl font-bold text-primary">OKG-MUSIC</span>
          </div>
            <span className="text-sm text-orange-500 font-medium">for Artists</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/artists" className={location.pathname === "/artists" ? "text-orange-500 font-medium" : "text-muted-foreground hover:text-orange-500"} transition-colors>
              Home
            </Link>
            <Link to="/artists/upload" className={location.pathname === "/artists/upload" ? "text-orange-500 font-medium" : "text-muted-foreground hover:text-orange-500"} transition-colors>
              Upload
            </Link>
            <Link to="/artists/analytics" className={location.pathname === "/artists/analytics" ? "text-orange-500 font-medium" : "text-muted-foreground hover:text-orange-500"} transition-colors>
              Analytics
            </Link>
            <Link to="/artists/monetize" className={location.pathname === "/artists/monetize" ? "text-orange-500 font-medium" : "text-muted-foreground hover:text-orange-500"} transition-colors>
              Monetize
            </Link>
            <Link to="/artists/resources" className={location.pathname === "/artists/resources" ? "text-orange-500 font-medium" : "text-muted-foreground hover:text-orange-500"} transition-colors>
              Resources
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-orange-500 transition-colors">
              Listen on OKG-MUSIC
            </Link>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};