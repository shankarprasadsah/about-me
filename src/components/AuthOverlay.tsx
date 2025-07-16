import { Button } from "@/components/ui/button";

interface AuthOverlayProps {
  isSignUp: boolean;
  onToggle: () => void;
}

export const AuthOverlay = ({ isSignUp, onToggle }: AuthOverlayProps) => {
  return (
    <div 
      className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-50 ${
        isSignUp ? 'transform -translate-x-full' : ''
      }`}
    >
      <div 
        className={`relative w-[200%] h-full transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isSignUp ? 'transform -translate-x-1/2' : ''
        }`}
      >
        {/* Sign In Panel */}
        <div className="w-1/2 h-full absolute left-0 bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-8">
          <div className="text-center text-white max-w-[240px]">
            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              To keep connected with us please login with your personal info
            </p>
            <Button 
              onClick={onToggle}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gradient-start rounded-[25px] px-8 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              SIGN IN
            </Button>
          </div>
        </div>

        {/* Sign Up Panel */}
        <div className="w-1/2 h-full absolute right-0 bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-8">
          <div className="text-center text-white max-w-[240px]">
            <h2 className="text-2xl font-bold mb-4">Hello, Friend!</h2>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Enter your personal details and start your journey with us
            </p>
            <Button 
              onClick={onToggle}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gradient-start rounded-[25px] px-8 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};