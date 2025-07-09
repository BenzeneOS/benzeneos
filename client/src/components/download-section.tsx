import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Magnet, Cpu, HardDrive, Zap, Usb, ArrowRight, Book } from "lucide-react";

export default function DownloadSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const requirements = [
    { icon: Cpu, text: "64-bit processor (x86_64 or ARM64)" },
    { icon: HardDrive, text: "4GB RAM minimum (8GB recommended)" },
    { icon: Zap, text: "20GB free disk space minimum" },
    { icon: Usb, text: "USB drive for installation (8GB+)" }
  ];

  const quickSteps = [
    "Download the ISO file",
    "Create a bootable USB drive",
    "Boot from USB and follow installer",
    "Enjoy your secure system!"
  ];

  return (
    <section id="download" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get BenzeneOS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download the latest stable release and join thousands of users who've taken control of their digital privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">Latest Release</h3>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white mb-2">v2.1.0</div>
                  <div className="text-gray-400">Released December 2024</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-200 p-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    <Download className="mr-2" size={20} />
                    Download ISO (2.8 GB)
                    <ArrowRight className="ml-auto" size={20} />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black p-4 text-lg font-semibold transition-all duration-300"
                    size="lg"
                  >
                    <Magnet className="mr-2" size={20} />
                    Torrent Download
                    <ArrowRight className="ml-auto" size={20} />
                  </Button>
                </div>
                
                <div className="text-center space-y-2 text-sm text-gray-400">
                  <div>SHA256: <span className="font-mono text-xs">a1b2c3d4e5f6...</span></div>
                  <button className="text-white hover:underline">Verify signature</button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-white">Installation Requirements</h3>
            <div className="space-y-4 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center">
                  <req.icon className="text-white mr-3" size={20} />
                  <span className="text-gray-300">{req.text}</span>
                </div>
              ))}
            </div>
            
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Start</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
              {quickSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            
            <Button
              variant="outline"
              className="inline-flex items-center text-white border-white hover:bg-white hover:text-black"
              onClick={() => scrollToSection('docs')}
            >
              <Book className="mr-2" size={16} />
              Detailed Installation Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
