import { Link, useLocation } from 'react-router-dom';
import { Flame, MessageCircle, User } from 'lucide-react';

export default function MobileNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="grid grid-cols-3 h-16">
        <Link
          to="/discover"
          className={`flex flex-col items-center justify-center gap-1 ${
            isActive('/discover') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Flame className="h-5 w-5" />
          <span className="text-xs font-medium">Discover</span>
        </Link>
        
        <Link
          to="/matches"
          className={`flex flex-col items-center justify-center gap-1 ${
            isActive('/matches') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-medium">Matches</span>
        </Link>
        
        <Link
          to="/profile"
          className={`flex flex-col items-center justify-center gap-1 ${
            isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
