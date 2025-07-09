import { FaTwitter, FaGithub, FaDiscord, FaReddit } from 'react-icons/fa';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resourceLinks = [
    { name: "Download", action: () => scrollToSection('download') },
    { name: "Documentation", action: () => scrollToSection('docs') },
    { name: "Installation Guide", href: "#" },
    { name: "Security Guide", href: "#" },
    { name: "FAQ", href: "#" }
  ];

  const projectLinks = [
    { name: "About", action: () => scrollToSection('about') },
    { name: "Roadmap", href: "#" },
    { name: "Contributing", href: "#" },
    { name: "License", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaDiscord, href: "#", label: "Discord" },
    { icon: FaReddit, href: "#", label: "Reddit" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">BenzeneOS</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Securing your digital freedom through open-source innovation and unwavering commitment to privacy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  {link.action ? (
                    <button 
                      onClick={link.action}
                      className="hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Project</h4>
            <ul className="space-y-2 text-gray-400">
              {projectLinks.map((link, index) => (
                <li key={index}>
                  {link.action ? (
                    <button 
                      onClick={link.action}
                      className="hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BenzeneOS Project. Licensed under GPL v3. Made with ❤️ for digital privacy.</p>
        </div>
      </div>
    </footer>
  );
}
