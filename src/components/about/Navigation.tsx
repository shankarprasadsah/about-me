import { Button } from "@/components/ui/button";
import { Home, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-light text-about-primary">
          Portfolio
        </h1>
        <div className="flex gap-4">
          <Button asChild variant="ghost" size="sm" className="hover:bg-gray-50 text-about-secondary hover:text-about-primary">
            <Link to="/" className="flex items-center gap-2">
              <Home size={16} />
              Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="border-about-primary text-about-primary hover:bg-about-primary hover:text-white">
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