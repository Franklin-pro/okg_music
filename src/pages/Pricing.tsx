import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, BarChart3, Users,Repeat, Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import headphone from '../assets/headphone.png'


const Pricing = () => {
  const features = [
    {
      icon: Users,
      title: "Grow your audience",
      description: "Join the movement and be a stronger voice, make a big impact, and build a loyal fanbase"
    },
    {
      icon: BarChart3,
      title: "Know your audience",
      description: "Get insights on who listens and where, so you can understand exactly who your audience is"
    },
    {
      icon: Repeat,
      title: "Upload unlimited tracks",
      description: "Upload any number of tracks with zero limits from any device you own"
    },
    {
      icon: Share2,
      title: "Distribution is included",
      description: "Distribute to all major platforms including Spotify, Apple Music, and more"
    }
  ];

  const plans = [
    {
      name: "Artist",
      price: "€2.99",
      period: "/ month - billed yearly for €35.88",
      features: [
        { name: "3 hours of uploads", included: true },
        { name: "Boost tracks and get 30K+ followers", included: true, highlight: "30 plays/€" },
        { name: "Distribute & monetize tracks", included: true, highlight: "30 plays/€" },
        { name: "Replace tracks without losing stats", included: true, highlight: "30 plays/€" },
      ]
    },
    {
      name: "Artist Pro",
      price: "€6.99",
      period: "/ month - billed yearly for €83.88",
      isPopular: true,
      features: [
        { name: "Unlimited uploads", included: true },
        { name: "Boost tracks and get 30K+ followers", included: true, highlight: "30 plays/€" },
        { name: "Distribute & monetize tracks", included: true, highlight: "30 plays/€" },
        { name: "Audience stats and insights", included: true },
        { name: "Community engagement tools", included: true }
      ]
    }
  ];

  const comparisonFeatures = [
    { name: "Private tracks", artist: "3", artistPro: "3 tracks / month", upgrade: false },
    { name: "Get featured", artist: "3 tracks / month", artistPro: "3 tracks / month", upgrade: false },
    { name: "Spotlight ads", artist: "2 tracks / month", artistPro: "2 tracks / month", upgrade: false },
    { name: "Upload limit", artist: "How they found you", artistPro: "How they found you", upgrade: false },
    { name: "Comments limit", artist: false, artistPro: true, upgrade: false },
    { name: "Upload limit", artist: "3 hours", artistPro: "3 hours", upgrade: false },
    { name: "Fan-powering metrics", artist: "3 hours / month", artistPro: "3 tracks / month", upgrade: false },
    { name: "Replace tracks", artist: "2 tracks / month", artistPro: "2 tracks / month", upgrade: false },
    { name: "Quiet mode", artist: false, artistPro: true, upgrade: false },
    { name: "Scheduled track releases", artist: false, artistPro: true, upgrade: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Reach more listeners.
              </h1>
              <p className="text-muted-foreground text-lg mb-8 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Join millions of artists that use SoundCloud to get heard.
              </p>
              <div className="flex gap-4 mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Artist Pro
                </Button>
                <Button variant="outline" size="lg">
                  Get Artist
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <feature.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl" />
              <img 
                src={headphone} 
                alt="Music equipment illustration" 
                className="w-full h-auto rounded-3xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Available plans.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="relative bg-card border-border">
                {plan.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    MOST POPULAR
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    {plan.name === "Artist Pro" && (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The basic plan for all artist tools
                  </p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span className="text-sm text-foreground">{feature.name}</span>
                      </div>
                      {feature.highlight && (
                        <span className="text-xs text-primary font-medium">{feature.highlight}</span>
                      )}
                    </div>
                  ))}
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                    Get {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Compare features.
          </h2>
          
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium text-foreground">Features</th>
                    <th className="text-center p-4 font-medium text-foreground">Artist</th>
                    <th className="text-center p-4 font-medium text-foreground">Artist Pro</th>
                    <th className="text-center p-4 font-medium text-foreground">Upgrade</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 text-foreground">{feature.name}</td>
                      <td className="p-4 text-center text-muted-foreground">
                        {typeof feature.artist === 'boolean' ? (
                          feature.artist ? (
                            <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          feature.artist
                        )}
                      </td>
                      <td className="p-4 text-center text-muted-foreground">
                        {typeof feature.artistPro === 'boolean' ? (
                          feature.artistPro ? (
                            <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          feature.artistPro
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          UPGRADE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;