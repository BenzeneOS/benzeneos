import { Button } from "@/components/ui/button";
import { Users, Github } from "lucide-react";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Contributors" },
    { value: "3+", label: "Years Active" },
    { value: "40+", label: "Countries" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Digital security and privacy protection concept" 
              className="rounded-2xl shadow-2xl w-full h-auto grayscale"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              BenzeneOS was born from the belief that privacy and security shouldn't be luxuries—they should be fundamental rights in the digital age.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We're building more than just an operating system. We're creating a movement towards digital sovereignty, where users have complete control over their data, their privacy, and their digital destiny. Every line of code is written with the principle that your digital life belongs to you, and only you.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-black hover:bg-gray-200 px-6 py-3 font-semibold transition-all duration-300"
                onClick={() => scrollToSection('community')}
              >
                <Users className="mr-2" size={16} />
                Join Community
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300"
              >
                <Github className="mr-2" size={16} />
                View Source
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
