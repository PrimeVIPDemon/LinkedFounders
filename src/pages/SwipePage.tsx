import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import MobileNav from '@/components/layout/MobileNav';
import SwipeCard from '@/components/features/SwipeCard';
import FilterPanel from '@/components/features/FilterPanel';
import { MOCK_USERS } from '@/lib/mockData';
import { User } from '@/types';
import { X, Heart, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function SwipePage() {
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const currentUser = users[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log('Swiped', direction, 'on', currentUser?.name);
    
    setSwipeDirection(direction);
    
    if (direction === 'right') {
      // One-way connection - you can message immediately
      setTimeout(() => {
        toast.success(`Connected with ${currentUser?.name}! 💬`, {
          description: 'You can now message them',
        });
        
        // Save connection to localStorage
        const matches = JSON.parse(localStorage.getItem('matches') || '[]');
        matches.push({
          id: `m${Date.now()}`,
          userId: currentUser.id,
          user: currentUser,
          matchedAt: new Date(),
          unreadCount: 0,
        });
        localStorage.setItem('matches', JSON.stringify(matches));
        
        moveToNext();
      }, 400);
    } else {
      setTimeout(moveToNext, 400);
    }
  };

  const moveToNext = () => {
    setSwipeDirection(null);
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      toast('You\'ve seen everyone!', {
        description: 'Check back later for new profiles',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <AppHeader />
      
      <div className="container max-w-7xl py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Discover People
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {users.length - currentIndex} profiles available
            </p>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <div className="mb-6">
            <FilterPanel onClose={() => setShowFilters(false)} />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Swipe Area */}
          <div className="lg:col-span-2">
            <div className="relative h-[600px] flex items-center justify-center">
              {currentUser ? (
                <SwipeCard
                  user={currentUser}
                  onSwipe={handleSwipe}
                  swipeDirection={swipeDirection}
                />
              ) : (
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">No more profiles right now</p>
                  <Button onClick={() => setCurrentIndex(0)}>
                    Start Over
                  </Button>
                </div>
              )}
            </div>

            {/* Swipe Buttons */}
            {currentUser && (
              <div className="flex justify-center gap-8 mt-8">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 w-16 rounded-full border-2 hover:border-destructive hover:bg-destructive/10"
                  onClick={() => handleSwipe('left')}
                >
                  <X className="h-8 w-8 text-destructive" />
                </Button>
                
                <Button
                  size="lg"
                  className="h-20 w-20 rounded-full gradient-primary text-white shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => handleSwipe('right')}
                >
                  <Heart className="h-10 w-10" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar - Active Users */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="font-semibold mb-4">Active This Week</h3>
              <div className="space-y-3">
                {users.slice(0, 5).map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent cursor-pointer transition-colors"
                  >
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                    </div>
                    {user.verified && (
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
