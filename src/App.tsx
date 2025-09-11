import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollAnimationProvider } from './components/ScrollAnimationProvider';
import { ScrollIndicator } from './components/ScrollIndicator';

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Check for admin mode in localStorage on mount
  useEffect(() => {
    const adminMode = localStorage.getItem('adminMode') === 'true';
    setIsAdminMode(adminMode);
  }, []);

  const toggleAdminMode = () => {
    const newAdminMode = !isAdminMode;
    setIsAdminMode(newAdminMode);
    localStorage.setItem('adminMode', newAdminMode.toString());
  };

  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <ScrollIndicator />
        <Header onToggleAdmin={toggleAdminMode} isAdminMode={isAdminMode} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio isAdminMode={isAdminMode} />
          <Contact />
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </ScrollAnimationProvider>
  );
}