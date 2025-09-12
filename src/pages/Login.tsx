import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Mail, User, Lock, Facebook, Chrome, Apple } from "lucide-react";
import okgLogo from '../assets/okgLogo.jpeg'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 flex flex-col">
      {/* Header with logo and navigation */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
       <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={okgLogo} alt="" className="rounded-full"/>
            </div>
            <span className="text-xl font-bold text-primary">OKG-MUSIC</span>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            Feed
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            Library
          </Button>
        </nav>
      </header>

      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                {isSignUp 
                  ? "Join the world's largest audio platform and start sharing your music today."
                  : "Sign in to discover new music, connect with artists, and build your perfect playlist."
                }
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Connect with fans</h3>
                  <p className="text-muted-foreground">Build your following and engage with listeners worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real-time stats</h3>
                  <p className="text-muted-foreground">Track your plays, likes, and audience growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-card rounded-xl border border-border p-8 shadow-card">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {isSignUp ? "Sign up for free" : "Sign in to your account"}
                  </h2>
                  <p className="text-muted-foreground">
                    {isSignUp ? "Start your music journey today" : "Welcome back to OKG-MUSIC"}
                  </p>
                </div>

                {/* Social login buttons */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                  >
                    <Facebook className="w-5 h-5 mr-3" />
                    Continue with Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-red-600 hover:bg-red-700 text-white border-red-600"
                  >
                    <Chrome className="w-5 h-5 mr-3" />
                    Continue with Google
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white border-gray-900"
                  >
                    <Apple className="w-5 h-5 mr-3" />
                    Continue with Apple
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or with email</span>
                  </div>
                </div>

                {/* Email form */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  
                  {!isSignUp && (
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Password"
                        className="h-12"
                      />
                    </div>
                  )}

                  <Button 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSignUp ? "Continue" : "Sign In"}
                  </Button>
                </div>

                {/* Legal text for signup */}
                {isSignUp && (
                  <p className="text-xs text-muted-foreground text-center">
                    By clicking any of the "Continue" buttons above, you agree to OKG-MUSIC's 
                    <span className="text-primary hover:underline cursor-pointer"> Terms of Use</span> and 
                    acknowledge our <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>.
                  </p>
                )}

                {/* Switch between login/signup */}
                <div className="text-center">
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isSignUp 
                      ? "Already have an account? Sign in" 
                      : "Don't have an account? Sign up for free"
                    }
                  </button>
                </div>

                {!isSignUp && (
                  <div className="text-center">
                    <button className="text-sm text-primary hover:underline">
                      Need help?
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;