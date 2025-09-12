import { Link } from "react-router-dom";
import { ArtistHeader } from "@/components/ArtistHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import spotify from '../assets/spotify.png'
import apple from '../assets/apple.jpg'
import deezer from '../assets/deezer.png'
import amazon from '../assets/amazon.jpg'
import tidal from '../assets/tidal.png'
import pandora from '../assets/pandora.png'
import tiktok from '../assets/tiktok.jpeg'
import { Upload, BarChart3, Users, Mic, TrendingUp, Globe, Ticket, InstagramIcon, Youtube } from "lucide-react";

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArtistHeader />
      
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative">
  {/* Background image */}
  <img
    src="https://www.mi.edu/wp-content/uploads/2022/05/8-Vocal-Techniques-Every-Singer-Must-Know.jpg"
    alt="Artist performing"
    className="w-full h-[600px] object-cover"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />
  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your music <br /> everywhere.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          As an Artist Pro subscriber you get unlimited distribution. It’s included 
          along with monetization, advanced insights, unlimited uploads, and the 
          best creator tools available. Learn more about distribution.
        </p>
        <p className="text-base text-gray-300 mb-8">
          Why switch between services when you can have it all in one place?
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-semibold"
        >
          Get Artist Pro
        </Button>
        {/* Logos row */}
        <div className="flex flex-wrap gap-6 mt-10 items-center">
          <img src={spotify} alt="Spotify" className="h-10 w-9" />
          <img src={apple} alt="Apple Music" className="h-10 w-9" />
          <img src={deezer} alt="Deezer" className="h-10 w-9" />
          <img src={amazon} alt="Amazon Music" className="h-10 w-9" />
          <img src={tiktok} alt="tik tok Music" className="h-10 w-9" />
          <InstagramIcon className="h-10 w-9" />
          <Youtube className="h-10 w-9" />
          <img src={tidal} alt="Tidal" className="h-10 w-9" />
          <img src={pandora} alt="Pandora" className="h-10 w-9" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">300M+</h3>
              <p className="text-muted-foreground">Monthly Listeners</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">40M+</h3>
              <p className="text-muted-foreground">Creators</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">190+</h3>
              <p className="text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Upload className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Easy Upload</h3>
                <p className="text-muted-foreground">
                  Upload your tracks in seconds with our simple drag-and-drop interface.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BarChart3 className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  Track your performance with detailed insights and audience analytics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Fan Engagement</h3>
                <p className="text-muted-foreground">
                  Connect directly with your fans through comments and messages.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Mic className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Professional Tools</h3>
                <p className="text-muted-foreground">
                  Access professional-grade tools for editing and mastering your tracks.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Monetization</h3>
                <p className="text-muted-foreground">
                  Earn money from your music through our revenue sharing program.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Share your music with listeners from around the world instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Alex Rivera</h4>
                    <p className="text-sm text-muted-foreground">Electronic Producer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "This platform helped me reach 1M plays in just 6 months. The community support is incredible!"
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground">Indie Artist</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The analytics tools helped me understand my audience and grow my fanbase organically."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Share Your Music?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of artists who are already building their careers on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              <Upload className="mr-2 h-5 w-5" />
              Upload Your First Track
            </Button>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3">
                View Pro Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;