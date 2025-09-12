import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Music, Users, Headphones } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-slow-zoom"
          style={{
            backgroundImage: 'url(https://cdn.freepixel.com/preview/free-PNG-graphics-3d-colorful-headphones-with-abstract-splash-effect-on-isolated-png-background-preview-1004223186.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container min-h-screen flex justify-center flex-col mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Your Music,
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> Your World</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Discover, stream, and share millions of tracks from emerging and established artists worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link to="/discover">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Start Listening
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                Go Pro
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <Music className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Unlimited Music</h3>
                <p className="text-muted-foreground">
                  Access millions of tracks from every genre and discover new favorites every day.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Connect with Artists</h3>
                <p className="text-muted-foreground">
                  Follow your favorite artists and discover emerging talent from around the world.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <Headphones className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">High Quality Audio</h3>
                <p className="text-muted-foreground">
                  Experience crystal clear sound with our high-quality streaming technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join millions of music lovers and discover your next favorite song today.
          </p>
          <Link to="/discover">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              Explore Music Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
