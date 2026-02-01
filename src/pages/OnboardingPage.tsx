import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ROLES, STARTUP_STAGES, AGE_RANGES, INDUSTRIES, SKILLS, LOOKING_FOR } from '@/constants';
import { toast } from 'sonner';

interface OnboardingPageProps {
  onComplete: () => void;
}

export default function OnboardingPage({ onComplete }: OnboardingPageProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: '',
    ageRange: '',
    location: '',
    role: '',
    startupStage: '',
    skills: [] as string[],
    industries: [] as string[],
    goals: '',
    lookingFor: [] as string[],
    bio: '',
    linkedIn: '',
    github: '',
    portfolio: '',
  });

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  const handleNext = () => {
    console.log('Step completed:', step, formData);
    
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save profile
      localStorage.setItem('userProfile', JSON.stringify(formData));
      onComplete();
      toast.success('Profile created! Start discovering matches.');
      navigate('/discover');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.ageRange && formData.location;
      case 2:
        return formData.role && formData.startupStage && formData.skills.length > 0;
      case 3:
        return formData.industries.length > 0 && formData.lookingFor.length > 0;
      case 4:
        return formData.goals && formData.bio;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Progress value={(step / totalSteps) * 100} className="mb-4" />
          <p className="text-sm text-muted-foreground text-center">
            Step {step} of {totalSteps}
          </p>
        </div>

        <div className="bg-card rounded-2xl border p-8 shadow-lg">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Let's start with the basics</h2>
                <p className="text-muted-foreground">Tell us a bit about yourself</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Sarah Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Age Range *</Label>
                  <div className="flex flex-wrap gap-2">
                    {AGE_RANGES.map((range) => (
                      <Badge
                        key={range}
                        variant={formData.ageRange === range ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setFormData({ ...formData, ageRange: range })}
                      >
                        {range}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (City) *</Label>
                  <Input
                    id="location"
                    placeholder="San Francisco, CA"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Your startup journey</h2>
                <p className="text-muted-foreground">Help others understand your role and experience</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Role *</Label>
                  <div className="flex flex-wrap gap-2">
                    {ROLES.map((role) => (
                      <Badge
                        key={role}
                        variant={formData.role === role ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setFormData({ ...formData, role })}
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Startup Stage *</Label>
                  <div className="flex flex-wrap gap-2">
                    {STARTUP_STAGES.map((stage) => (
                      <Badge
                        key={stage}
                        variant={formData.startupStage === stage ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setFormData({ ...formData, startupStage: stage })}
                      >
                        {stage}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Top Skills * (Select 3-5)</Label>
                  <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto p-2 border rounded-lg">
                    {SKILLS.map((skill) => (
                      <Badge
                        key={skill}
                        variant={formData.skills.includes(skill) ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            skills: toggleArrayItem(formData.skills, skill),
                          })
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">What are you building?</h2>
                <p className="text-muted-foreground">Share your interests and what you're looking for</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Industries * (Select 1-3)</Label>
                  <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto p-2 border rounded-lg">
                    {INDUSTRIES.map((industry) => (
                      <Badge
                        key={industry}
                        variant={formData.industries.includes(industry) ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            industries: toggleArrayItem(formData.industries, industry),
                          })
                        }
                      >
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Looking For * (Select all that apply)</Label>
                  <div className="flex flex-wrap gap-2">
                    {LOOKING_FOR.map((item) => (
                      <Badge
                        key={item}
                        variant={formData.lookingFor.includes(item) ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            lookingFor: toggleArrayItem(formData.lookingFor, item),
                          })
                        }
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Tell your story</h2>
                <p className="text-muted-foreground">Help matches understand who you are</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="goals">Current Goals *</Label>
                  <Textarea
                    id="goals"
                    placeholder="Building an AI-powered productivity tool. Looking for a technical co-founder to scale our MVP..."
                    rows={3}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Short Bio * (Background, experience, passion)</Label>
                  <Textarea
                    id="bio"
                    placeholder="Former PM at Google. Passionate about using AI to enhance productivity. Built 2 profitable side projects..."
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedIn">LinkedIn (Optional)</Label>
                  <Input
                    id="linkedIn"
                    placeholder="linkedin.com/in/yourprofile"
                    value={formData.linkedIn}
                    onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub (Optional)</Label>
                  <Input
                    id="github"
                    placeholder="github.com/yourusername"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                  <Input
                    id="portfolio"
                    placeholder="yourwebsite.com"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 gradient-primary text-white"
            >
              {step === totalSteps ? 'Complete' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
