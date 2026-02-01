import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from '@/pages/LandingPage';
import AuthPage from '@/pages/AuthPage';
import OnboardingPage from '@/pages/OnboardingPage';
import SwipePage from '@/pages/SwipePage';
import MatchesPage from '@/pages/MatchesPage';
import ProfilePage from '@/pages/ProfilePage';
import AboutPage from '@/pages/AboutPage';
import HelpPage from '@/pages/HelpPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    // Check auth status from localStorage
    const user = localStorage.getItem('currentUser');
    const onboarding = localStorage.getItem('onboardingComplete');
    
    if (user) {
      setIsAuthenticated(true);
    }
    
    if (onboarding === 'true') {
      setHasCompletedOnboarding(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleOnboardingComplete = () => {
    setHasCompletedOnboarding(true);
    localStorage.setItem('onboardingComplete', 'true');
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="foundermatch-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/auth" 
            element={
              isAuthenticated ? <Navigate to="/discover" /> : <AuthPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/onboarding" 
            element={
              !isAuthenticated ? <Navigate to="/auth" /> :
              hasCompletedOnboarding ? <Navigate to="/discover" /> :
              <OnboardingPage onComplete={handleOnboardingComplete} />
            } 
          />
          <Route 
            path="/discover" 
            element={
              !isAuthenticated ? <Navigate to="/auth" /> :
              !hasCompletedOnboarding ? <Navigate to="/onboarding" /> :
              <SwipePage />
            } 
          />
          <Route 
            path="/matches" 
            element={
              !isAuthenticated ? <Navigate to="/auth" /> :
              <MatchesPage />
            } 
          />
          <Route 
            path="/profile" 
            element={
              !isAuthenticated ? <Navigate to="/auth" /> :
              <ProfilePage />
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
