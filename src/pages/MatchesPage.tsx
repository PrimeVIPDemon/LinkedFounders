import { useState, useEffect } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import MobileNav from '@/components/layout/MobileNav';
import ChatView from '@/components/features/ChatView';
import { Match } from '@/types';
import { MOCK_MATCHES } from '@/lib/mockData';
import { MessageCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  useEffect(() => {
    // Load matches from localStorage
    const saved = localStorage.getItem('matches');
    if (saved) {
      const parsed = JSON.parse(saved);
      setMatches(parsed.length > 0 ? parsed : MOCK_MATCHES);
    } else {
      setMatches(MOCK_MATCHES);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <AppHeader />
      
      <div className="container max-w-7xl py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
          {/* Matches List */}
          <div className="lg:col-span-1 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              Your Connections
            </h2>

            {matches.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No connections yet</p>
                <p className="text-sm text-muted-foreground">
                  Start swiping right to connect with entrepreneurs!
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    onClick={() => setSelectedMatch(match)}
                    className={`p-4 rounded-xl border bg-card hover:bg-accent cursor-pointer transition-colors ${
                      selectedMatch?.id === match.id ? 'border-primary bg-accent' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={match.user.photo}
                          alt={match.user.name}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                        {match.unreadCount > 0 && (
                          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                            {match.unreadCount}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold truncate">{match.user.name}</p>
                          {match.user.verified && (
                            <span className="text-xs">✓</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {match.user.role} • {match.user.startupStage}
                        </p>
                        {match.lastMessage && (
                          <p className="text-sm text-muted-foreground truncate mt-1">
                            {match.lastMessage.content}
                          </p>
                        )}
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(match.matchedAt), { addSuffix: true })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat View */}
          <div className="lg:col-span-2 hidden lg:block border rounded-xl overflow-hidden bg-card">
            {selectedMatch ? (
              <ChatView match={selectedMatch} />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Select a connection to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
