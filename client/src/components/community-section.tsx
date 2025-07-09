import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Github, Mail } from "lucide-react";
import { FaDiscord, FaReddit } from 'react-icons/fa';

export default function CommunitySection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thanks for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  const communityLinks = [
    {
      name: "Discord",
      description: "Real-time chat and support",
      icon: FaDiscord,
      gradient: "from-blue-500 to-blue-600",
      href: "#"
    },
    {
      name: "Reddit",
      description: "Community discussions",
      icon: FaReddit,
      gradient: "from-orange-500 to-red-500",
      href: "#"
    },
    {
      name: "GitHub",
      description: "Source code and issues",
      icon: Github,
      gradient: "from-gray-700 to-gray-800",
      href: "#"
    },
    {
      name: "Mailing List",
      description: "Updates and announcements",
      icon: Mail,
      gradient: "from-green-500 to-emerald-600",
      href: "#"
    }
  ];

  return (
    <section id="community" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join the Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow privacy advocates, get support, and contribute to the future of secure computing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityLinks.map((link, index) => (
            <Card 
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-white transition-all duration-300 text-center group animate-on-scroll cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <link.icon className="text-2xl text-black" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{link.name}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900 border-gray-700 text-center animate-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-300 mb-6">Get the latest news, security updates, and release announcements.</p>
              
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black border-gray-600 text-white placeholder-gray-400 focus:border-white transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </Button>
              </form>
              
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
