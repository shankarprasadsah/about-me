import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { AuthOverlay } from './AuthOverlay';

export const AuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
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
  );
};