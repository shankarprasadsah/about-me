import { Button } from "@/components/ui/button";
import { Home, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-about-primary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Portfolio
        </h1>
        <div className="flex gap-4">
          <Button asChild variant="ghost" size="sm" className="hover:bg-about-primary/10">
            <Link to="/" className="flex items-center gap-2">
              <Home size={16} />
              Home
            </Link>
          </Button>
          <Button asChild variant="default" size="sm" className="bg-gradient-hero hover:opacity-90">
            <Link to="/about" className="flex items-center gap-2">
              <User size={16} />
              About
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};