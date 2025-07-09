import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">BenzeneOS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('docs')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Community
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('docs')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Docs
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
