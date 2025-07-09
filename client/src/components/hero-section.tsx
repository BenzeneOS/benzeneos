import { Button } from "@/components/ui/button";
import { Download, Rocket } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            BenzeneOS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A security and privacy-first Linux distribution built for users who refuse to compromise on digital freedom and protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => scrollToSection('download')}
            >
              <Download className="mr-2" size={20} />
              Download Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => scrollToSection('features')}
            >
              <Rocket className="mr-2" size={20} />
              Explore Features
            </Button>
          </div>
        </div>
        
        {/* Hero stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Open Source</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Privacy Protection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Zero</div>
            <div className="text-gray-400">Data Collection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
