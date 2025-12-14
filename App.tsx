import React, { useState, useEffect } from 'react';
import { 
  Hero, 
  Comparison, 
  HowItWorks, 
  SocialProof, 
  ServiceIncluded, 
  Pricing, 
  FAQ, 
  FinalCTA,
  Footer
} from './components/LandingComponents';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-500 selection:text-white">
      
      {/* Navigation Bar - Premium Dark Glass */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-end items-center">
          {/* Logo removed as requested */}
          
          <button 
            onClick={() => scrollToSection('pricing')}
            className={`hidden md:block px-8 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${
              isScrolled 
                ? 'bg-white text-brand-950 hover:bg-brand-50' 
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10'
            }`}
          >
            Ver Packs
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        <Hero onCtaClick={() => scrollToSection('pricing')} />
        <Comparison />
        <HowItWorks />
        <SocialProof />
        <ServiceIncluded />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;