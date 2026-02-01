import { useState } from 'react';
import { User } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Rocket, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface SwipeCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right') => void;
  swipeDirection: 'left' | 'right' | null;
}

export default function SwipeCard({ user, onSwipe, swipeDirection }: SwipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`w-full max-w-md bg-card rounded-3xl overflow-hidden shadow-2xl border-2 transition-all ${
        swipeDirection === 'left' ? 'animate-swipe-left' : ''
      } ${swipeDirection === 'right' ? 'animate-swipe-right' : ''}`}
    >
      {/* Profile Image */}
      <div className="relative h-80">
        <img
          src={user.photo}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Name & Basic Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-bold">{user.name}</h2>
                {user.verified && (
                  <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </span>
                <span>{user.ageRange}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Role & Stage */}
        <div className="flex gap-2 mb-4">
          <Badge className="gradient-primary text-white border-0">
            <Briefcase className="h-3 w-3 mr-1" />
            {user.role}
          </Badge>
          <Badge variant="outline">
            <Rocket className="h-3 w-3 mr-1" />
            {user.startupStage}
          </Badge>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">Top Skills</p>
          <div className="flex flex-wrap gap-2">
            {user.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {user.skills.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{user.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Goals Preview */}
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">Current Goals</p>
          <p className="text-sm line-clamp-2">{user.goals}</p>
        </div>

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          className="w-full mb-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              View Full Profile
            </>
          )}
        </Button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 animate-fade-in border-t pt-4">
            {/* Bio */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">About</p>
              <p className="text-sm">{user.bio}</p>
            </div>

            {/* Industries */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Industries</p>
              <div className="flex flex-wrap gap-2">
                {user.industries.map((industry) => (
                  <Badge key={industry} variant="outline" className="text-xs">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Looking For */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Looking For</p>
              <div className="flex flex-wrap gap-2">
                {user.lookingFor.map((item) => (
                  <Badge key={item} variant="outline" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            {(user.linkedIn || user.github || user.portfolio) && (
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Links</p>
                <div className="space-y-2">
                  {user.linkedIn && (
                    <a
                      href={`https://${user.linkedIn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                  {user.github && (
                    <a
                      href={`https://${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {user.portfolio && (
                    <a
                      href={`https://${user.portfolio}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Portfolio
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
