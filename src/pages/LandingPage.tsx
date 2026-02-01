import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Flame, Users, Zap, Shield, Search, MessageCircle, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Flame className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">FounderMatch</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/help" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Help
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0 gradient-card opacity-50" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Find Your Perfect{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Co-Founder
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              The professional matching platform for entrepreneurs. Swipe to connect with co-founders, 
              developers, mentors, and investors. Build your dream team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="w-full sm:w-auto gradient-primary text-white hover:opacity-90">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to find your perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Share your role, startup stage, skills, and what you're looking for. It's completely free.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Swipe & Match</h3>
              <p className="text-muted-foreground">
                Browse curated profiles. Swipe right to connect, left to pass. Get unlimited swipes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Collaborating</h3>
              <p className="text-muted-foreground">
                When both users swipe right, it's a match! Message freely and build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why FounderMatch?</h2>
            <p className="text-lg text-muted-foreground">Everything you need, completely free</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl border bg-card">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">
                Unlimited swipes, matches, and messages. No paywalls, no premium tiers.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border bg-card">
              <Search className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered recommendations based on role compatibility and goals.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border bg-card">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Verified Profiles</h3>
              <p className="text-sm text-muted-foreground">
                Email and LinkedIn verification to ensure credibility and professionalism.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border bg-card">
              <MessageCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Rich Messaging</h3>
              <p className="text-sm text-muted-foreground">
                Text, voice notes, links, and icebreaker prompts to start conversations.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border bg-card">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Find Anyone</h3>
              <p className="text-sm text-muted-foreground">
                Co-founders, developers, designers, mentors, advisors, and investors.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border bg-card">
              <Flame className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Active Community</h3>
              <p className="text-sm text-muted-foreground">
                Join thousands of serious entrepreneurs building the next big thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Find Your Co-Founder?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of entrepreneurs connecting and building together.
            </p>
            <Link to="/auth">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90">
                Start Matching Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Flame className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold">FounderMatch</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting entrepreneurs to build the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link to="/help" className="block text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm text-muted-foreground">
                contact@foundermatch.com
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2026 FounderMatch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
