import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Settings } from 'lucide-react';
import { useScrollAnimation } from './ScrollAnimationProvider';

interface HeaderProps {
  onToggleAdmin: () => void;
  isAdminMode: boolean;
}

export function Header({ onToggleAdmin, isAdminMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { triggerScrollAnimation, isAnimating } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    if (isAnimating) return;
    triggerScrollAnimation(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">Sanket Raj</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
              disabled={isAnimating}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
              disabled={isAnimating}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
              disabled={isAnimating}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
              disabled={isAnimating}
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleAdmin}
              className="ml-4"
            >
              <Settings className="h-4 w-4 mr-2" />
              {isAdminMode ? 'Exit Admin' : 'Admin'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleAdmin}
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')} 
                className={`text-left hover:text-primary transition-all duration-300 hover:translate-x-2 ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                disabled={isAnimating}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className={`text-left hover:text-primary transition-all duration-300 hover:translate-x-2 ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                disabled={isAnimating}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className={`text-left hover:text-primary transition-all duration-300 hover:translate-x-2 ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                disabled={isAnimating}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`text-left hover:text-primary transition-all duration-300 hover:translate-x-2 ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                disabled={isAnimating}
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}