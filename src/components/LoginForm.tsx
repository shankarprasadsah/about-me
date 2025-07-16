import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="w-full max-w-[280px] text-center">
        <h1 className="text-2xl font-bold text-auth-text mb-8">Sign In</h1>
        
        {/* Social Login Icons */}
        <div className="flex justify-center gap-2 mb-6">
          <SocialButton icon="G" />
          <SocialButton icon="in" />
          <SocialButton icon="P" />
          <SocialButton icon="ig" />
        </div>
        
        <p className="text-sm text-auth-text-light mb-4">or use your email account</p>
        
        {/* Login Form */}
        <form className="space-y-4">
          <Input 
            type="email" 
            placeholder="Email"
            className="bg-auth-input border-0 rounded-lg px-4 py-3 transition-all duration-300 focus:bg-auth-input-focus focus:scale-[1.02] focus:shadow-sm"
          />
          <Input 
            type="password" 
            placeholder="Password"
            className="bg-auth-input border-0 rounded-lg px-4 py-3 transition-all duration-300 focus:bg-auth-input-focus focus:scale-[1.02] focus:shadow-sm"
          />
          
          <div className="text-right">
            <a href="#" className="text-sm text-auth-text-light hover:text-auth-primary transition-colors">
              Forgot your Password?
            </a>
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-auth-primary hover:bg-auth-primary-hover text-white font-semibold py-3 px-8 rounded-[25px] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(212,157,31,0.3)] hover:-translate-y-1 active:scale-95"
          >
            SIGN IN
          </Button>
        </form>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: string }) => (
  <button className="w-11 h-11 bg-auth-social hover:bg-auth-social-hover rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-auth-text font-semibold text-sm">
    {icon}
  </button>
);