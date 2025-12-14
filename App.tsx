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
  Footer,
  StickyCTA
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
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight flex items-center gap-3">
             <div className="w-10 h-10 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20 ring-1 ring-white/10">
                <span className="text-white font-extrabold text-xl">G</span>
             </div>
             <span className="text-white">GoogleBoost</span>
          </div>
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
      <StickyCTA />
    </div>
  );
};

export default App;