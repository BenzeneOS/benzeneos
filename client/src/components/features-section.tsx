import { Shield, ShieldX, Cpu, Code, Users, Monitor, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Hardened kernel, mandatory access controls, and proactive threat detection keep your system secure from advanced persistent threats.",
      features: ["Kernel hardening", "SELinux integration", "Real-time monitoring"]
    },
    {
      icon: ShieldX,
      title: "Privacy by Design",
      description: "No telemetry, no tracking, no data collection. Your digital life remains completely private and under your control.",
      features: ["Zero telemetry", "Tor integration", "Anonymous usage"]
    },
    {
      icon: Cpu,
      title: "Modern Performance",
      description: "Optimized for modern hardware with cutting-edge technologies while maintaining rock-solid stability.",
      features: ["Latest kernel", "GPU acceleration", "Fast boot times"]
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Pre-configured development environment with security tools and frameworks for security researchers and developers.",
      features: ["Security toolkit", "Multiple IDEs", "Container support"]
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by security enthusiasts, for security enthusiasts. Join our vibrant community of privacy advocates.",
      features: ["Open governance", "Community support", "Regular updates"]
    },
    {
      icon: Monitor,
      title: "Beautiful Interface",
      description: "Sleek, intuitive desktop environment that doesn't compromise on functionality or aesthetics.",
      features: ["Modern UI/UX", "Customizable themes", "Accessibility features"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose BenzeneOS?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built from the ground up with security and privacy as core principles, not afterthoughts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-black border-gray-700 hover:border-white transition-all duration-300 animate-on-scroll"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-2xl text-black" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="text-white mr-2" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
