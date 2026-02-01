import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: February 1, 2026</p>

        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using LinkedFounders, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <p>
              You must be at least 18 years old to use LinkedFounders. By creating an account, you represent 
              that you meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for 
              all activities that occur under your account. You must provide accurate and complete information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harass, abuse, or harm other users</li>
              <li>Provide false or misleading information</li>
              <li>Use the platform for spam or commercial solicitation</li>
              <li>Attempt to access unauthorized areas of the platform</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Content</h2>
            <p>
              You retain ownership of content you post. By posting content, you grant us a license to use, 
              display, and distribute it as necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Conduct</h2>
            <p>
              LinkedFounders is a professional networking platform for entrepreneurs. Users are expected to 
              maintain professional behavior and focus on business collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <p>
              We strive to maintain service availability but do not guarantee uninterrupted access. 
              We reserve the right to modify or discontinue services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p>
              We may terminate or suspend your account at our discretion for violations of these terms. 
              You may delete your account at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p>
              LinkedFounders is provided "as is" without warranties. We do not verify the accuracy of user 
              information or guarantee successful matches or business outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
              For questions about these Terms, contact us at: legal@linkedfounders.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
