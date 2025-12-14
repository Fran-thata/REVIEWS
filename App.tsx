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
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-brand-200">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className={`font-bold text-xl tracking-tight flex items-center gap-2 ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
             <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-extrabold text-lg">G</span>
             </div>
             <span>GoogleBoost</span>
          </div>
          <button 
            onClick={() => scrollToSection('pricing')}
            className={`hidden md:block px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 ${
              isScrolled 
                ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' 
                : 'bg-white text-brand-900 hover:bg-gray-100 shadow-lg'
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