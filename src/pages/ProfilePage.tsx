import { useState, useEffect } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import MobileNav from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Edit, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('userProfile');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    console.log('Saving profile:', profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <AppHeader />
      
      <div className="container max-w-4xl py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <Button
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Preview */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-xl border p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="h-32 w-32 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {profile.name.charAt(0)}
                </div>
                <h2 className="text-xl font-bold mb-1">{profile.name}</h2>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Role</span>
                  <Badge>{profile.role}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Stage</span>
                  <Badge variant="outline">{profile.startupStage}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Age Range</span>
                  <span>{profile.ageRange}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Current Goals</h3>
              <Textarea
                value={profile.goals}
                onChange={(e) => setProfile({ ...profile, goals: e.target.value })}
                disabled={!isEditing}
                rows={4}
              />
            </div>

            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <Textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                disabled={!isEditing}
                rows={5}
              />
            </div>

            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill: string) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <div className="flex flex-wrap gap-2">
                {profile.industries.map((industry: string) => (
                  <Badge key={industry} variant="outline">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Looking For</h3>
              <div className="flex flex-wrap gap-2">
                {profile.lookingFor.map((item: string) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedIn">LinkedIn</Label>
                  <Input
                    id="linkedIn"
                    value={profile.linkedIn || ''}
                    onChange={(e) => setProfile({ ...profile, linkedIn: e.target.value })}
                    disabled={!isEditing}
                    placeholder="linkedin.com/in/yourprofile"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input
                    id="github"
                    value={profile.github || ''}
                    onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                    disabled={!isEditing}
                    placeholder="github.com/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio</Label>
                  <Input
                    id="portfolio"
                    value={profile.portfolio || ''}
                    onChange={(e) => setProfile({ ...profile, portfolio: e.target.value })}
                    disabled={!isEditing}
                    placeholder="yourwebsite.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
