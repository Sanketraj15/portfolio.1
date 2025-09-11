import { Button } from './ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedProfilePicture } from './AnimatedProfilePicture';
import { useScrollAnimation } from './ScrollAnimationProvider';

export function Hero() {
  const { triggerScrollAnimation, isAnimating } = useScrollAnimation();

  const scrollToPortfolio = () => {
    if (isAnimating) return;
    triggerScrollAnimation('portfolio');
  };

  const scrollToContact = () => {
    if (isAnimating) return;
    triggerScrollAnimation('contact');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <AnimatedProfilePicture />
          </div>
          
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Sanket Raj
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              3D Modeller | Animator | Game Developer
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-muted-foreground">
              Professional 3D modeller and game developer currently working as a trainee at 
              <span className="text-foreground font-medium"> IEMA Research & Development</span>. 
              Graduated from <span className="text-foreground font-medium">UEMK in 2025</span> with expertise in 
              3D modeling, animation, and Unity game development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button onClick={scrollToPortfolio} size="lg" className="w-full sm:w-auto">
                View My Work
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}