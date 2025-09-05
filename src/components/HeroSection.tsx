import { FileDown, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/vizal-profile.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-accent animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary-light animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Vizal S L</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Data Analyst & AI Enthusiast
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Turning data into insights | Exploring AI-powered analytics | Future Data Scientist
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <FileDown size={20} />
                <span>View Resume</span>
              </a>
              <button
                onClick={scrollToProjects}
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Projects</span>
                <ArrowDown size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative animate-scale-in delay-300">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={profileImage}
                  alt="Vizal S L - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg animate-bounce delay-1000">
                📊
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-lg shadow-lg animate-bounce delay-2000">
                🤖
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;