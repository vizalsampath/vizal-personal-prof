import { useState, useEffect } from 'react';
import { Menu, X, FileText, Linkedin, FolderOpen, BookOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { icon: FileText, label: 'Resume', href: '#', download: true },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vizalsl', external: true },
    { icon: FolderOpen, label: 'Projects', action: () => scrollToSection('projects') },
    { icon: BookOpen, label: 'Blogs', action: () => scrollToSection('blogs') },
    { icon: Mail, label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-gradient">
            Vizal S L
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <div key={index}>
                  {link.download ? (
                    <a
                      href="/resume.pdf"
                      download
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <IconComponent size={18} />
                      <span>{link.label}</span>
                    </a>
                  ) : link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <IconComponent size={18} />
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <button
                      onClick={link.action}
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <IconComponent size={18} />
                      <span>{link.label}</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-nav-background border-b border-nav-border shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <div key={index}>
                    {link.download ? (
                      <a
                        href="/resume.pdf"
                        download
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent size={20} />
                        <span>{link.label}</span>
                      </a>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent size={20} />
                        <span>{link.label}</span>
                      </a>
                    ) : (
                      <button
                        onClick={link.action}
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-2 w-full text-left"
                      >
                        <IconComponent size={20} />
                        <span>{link.label}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;