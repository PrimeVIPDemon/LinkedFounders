import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail } from 'lucide-react';

export default function HelpPage() {
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
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">How do I create an account?</h3>
                <p className="text-muted-foreground">
                  Click "Get Started" and sign up using your email, Google, or Apple account. Complete the onboarding 
                  flow to set up your profile and start matching.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Is FounderMatch really free?</h3>
                <p className="text-muted-foreground">
                  Yes! FounderMatch is 100% free with unlimited swipes, matches, and messages. There are no premium 
                  tiers or paywalls.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Matching & Swiping</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">How does matching work?</h3>
                <p className="text-muted-foreground">
                  Swipe right on profiles you're interested in connecting with. If they swipe right on you too, it's 
                  a match! You can then message each other directly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I undo a swipe?</h3>
                <p className="text-muted-foreground">
                  Currently, swipes are final. Make sure to carefully review profiles before swiping.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How are profiles shown to me?</h3>
                <p className="text-muted-foreground">
                  We prioritize profiles based on role compatibility, shared interests, startup stage, and location. 
                  You can also use filters to refine your preferences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Safety & Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">How do I report inappropriate behavior?</h3>
                <p className="text-muted-foreground">
                  You can report or block any user from their profile or chat. We take community safety seriously 
                  and review all reports promptly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How do I verify my profile?</h3>
                <p className="text-muted-foreground">
                  Connect your LinkedIn or verify your email address to earn a verification badge. This helps build 
                  trust with potential matches.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Messaging</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I message someone before matching?</h3>
                <p className="text-muted-foreground">
                  No, you need to match with someone first before you can send messages. This ensures both parties 
                  are interested in connecting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What are icebreaker prompts?</h3>
                <p className="text-muted-foreground">
                  Icebreakers are suggested conversation starters designed for entrepreneurs. Use them to kickstart 
                  meaningful conversations with your matches.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-muted rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Send us an email and we'll get back to you within 24 hours.
            </p>
            <a href="mailto:contact@foundermatch.com">
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
