import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Flame, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <div className="container max-w-3xl py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
            <Flame className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl font-bold">About FounderMatch</h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p className="text-xl text-muted-foreground">
            Connecting entrepreneurs to build the future, one match at a time.
          </p>

          <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
          <p>
            FounderMatch exists to solve one of the biggest challenges in entrepreneurship: finding the right people to build with. 
            We believe that great startups are built by great teams, and that every entrepreneur deserves access to a network of 
            talented, passionate co-founders, mentors, and collaborators.
          </p>

          <h2 className="text-2xl font-bold mt-8">Why We're Different</h2>
          <p>
            Unlike traditional professional networks, FounderMatch uses a swipe-based matching system to make connecting 
            fast, engaging, and effective. We've removed all barriers to entry—no paywalls, no premium tiers, no limits on 
            connections. Just real entrepreneurs looking to build real companies.
          </p>

          <h2 className="text-2xl font-bold mt-8">100% Free, Forever</h2>
          <p>
            We're committed to keeping FounderMatch completely free. Unlimited swipes, unlimited matches, unlimited messages. 
            We believe that access to opportunity shouldn't depend on your ability to pay for a subscription.
          </p>

          <h2 className="text-2xl font-bold mt-8">Who We Serve</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Aspiring Founders</strong> looking for co-founders to launch their first startup
            </li>
            <li>
              <strong>Technical Talent</strong> seeking business partners or exciting projects to join
            </li>
            <li>
              <strong>Experienced Mentors</strong> wanting to give back and guide the next generation
            </li>
            <li>
              <strong>Early Investors</strong> discovering promising founders and opportunities
            </li>
            <li>
              <strong>Designers & Marketers</strong> looking to join early-stage teams
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Our Values</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Collaboration Over Competition</h3>
              <p className="text-muted-foreground">
                We believe in building together, not against each other.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                We prioritize meaningful connections over endless swiping.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Accessibility For All</h3>
              <p className="text-muted-foreground">
                Everyone deserves access to opportunity, regardless of budget.
              </p>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-xl p-8 text-white mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Co-Founder?</h2>
            <p className="mb-6">
              Join thousands of entrepreneurs building the next generation of startups.
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
