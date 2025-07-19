import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { AuthOverlay } from './AuthOverlay';
import { Button } from './ui/button';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-about-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Portfolio
          </h1>
          <Button asChild variant="outline" size="sm" className="hover:bg-about-primary/10">
            <Link to="/about" className="flex items-center gap-2">
              <User size={16} />
              About Me
            </Link>
          </Button>
        </div>
      </nav>

      {/* Auth Container */}
      <div className="flex-1 bg-background flex items-center justify-center p-4 pt-20">
        <div className="relative w-[min(700px,90vw)] h-[min(600px,80vh)] bg-auth-container rounded-[40%] shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden">
        
        {/* Form Containers */}
        <div 
          className={`absolute top-0 h-full w-1/2 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isSignUp ? 'transform translate-x-full' : ''
          }`}
        >
          <LoginForm />
        </div>
        
        <div 
          className={`absolute top-0 h-full w-1/2 right-0 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isSignUp ? 'transform -translate-x-full' : ''
          }`}
        >
          <RegisterForm />
        </div>

        {/* Overlay Container */}
        <AuthOverlay isSignUp={isSignUp} onToggle={toggleMode} />
        </div>
      </div>
    </div>
  );
};