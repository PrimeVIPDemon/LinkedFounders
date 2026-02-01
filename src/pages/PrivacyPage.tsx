import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: February 1, 2026</p>

        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              FounderMatch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-2">Account Information</h3>
            <p className="mb-4">
              When you create an account, we collect: name, email address, age range, location (city-level), 
              role, startup stage, skills, industries, goals, bio, and optional professional links.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
            <p className="mb-4">
              We collect information about how you interact with our platform, including swipes, matches, 
              and messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our matching service</li>
              <li>To improve and personalize your experience</li>
              <li>To facilitate connections between users</li>
              <li>To send service-related notifications</li>
              <li>To ensure platform safety and security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p>
              We do not sell your personal information. Your profile information is visible to other users 
              for matching purposes. We may share information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of certain data collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              For privacy-related questions, contact us at: privacy@foundermatch.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
