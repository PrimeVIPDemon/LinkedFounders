import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Flame } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';
import { Button } from '@/components/ui/button';

export default function AppHeader() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/discover" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">LinkedFounders</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/discover"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/discover') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Discover
          </Link>
          <Link
            to="/matches"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/matches') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Matches
          </Link>
          <Link
            to="/profile"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/profile') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Profile
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
