import { Button } from './ui/button';
import { Download, Github, Linkedin, Mail, Phone, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';
import { AnimatedProfilePicture } from './AnimatedProfilePicture';
import { useScrollAnimation } from './ScrollAnimationProvider';
import { motion } from 'motion/react';

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

  const handleEmailClick = () => {
    window.location.href = 'mailto:srajiema2025@gmail.com';
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+916201325012';
    const whatsappUrl = `https://wa.me/916201325012`;
    const callUrl = `tel:${phoneNumber}`;
    
    // Show options for call or WhatsApp
    const choice = window.confirm('Choose your action:\nOK = Call\nCancel = WhatsApp');
    if (choice) {
      window.location.href = callUrl;
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sanketraj15',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/sanket.raj.2215',
      label: 'Facebook',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/_its_raj_0_2',
      label: 'Instagram',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Profile Picture Section - Enhanced Positioning */}
          <motion.div 
            className="flex justify-center lg:justify-start order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          >
            <div className="relative lg:ml-12">
              {/* Floating Background Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-lg"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Geometric Frame */}
              <motion.div
                className="absolute inset-0 border-2 border-gradient-to-r from-primary/30 to-accent/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ 
                  transform: 'scale(1.1)',
                  borderImage: 'linear-gradient(45deg, rgba(var(--primary), 0.3), rgba(var(--accent), 0.3)) 1'
                }}
              />
              
              {/* Main Profile Picture */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative z-10"
              >
                <AnimatedProfilePicture />
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-12 -right-8 text-2xl"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🎮
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-12 text-2xl"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                🎯
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-16 text-2xl"
                animate={{ 
                  x: [-5, 5, -5],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Section - Moved to Right */}
          <div className="text-center lg:text-left order-1 lg:order-2 lg:pr-8">
            <motion.h1 
              className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sanket Raj
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              System Analyst | 3D Modeller | Game Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-6 max-w-2xl mx-auto lg:mx-0 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              System Analyst and professional 3D modeller at 
              <span className="text-foreground font-medium"> IEMA Research & Development</span> with expertise in 
              3D modeling, animation, and Unity game development.
            </motion.p>

            {/* Contact Information */}
            <motion.div 
              className="mb-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-sm md:text-base">Kolkata, West Bengal, India</span>
              </div>
              
              {/* Email */}
              <motion.button 
                onClick={handleEmailClick}
                className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground hover:text-foreground transition-colors group w-full lg:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 text-green-500 group-hover:text-green-400 transition-colors" />
                <span className="text-sm md:text-base group-hover:underline">srajiema2025@gmail.com</span>
              </motion.button>
              
              {/* Phone */}
              <motion.button 
                onClick={handlePhoneClick}
                className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground hover:text-foreground transition-colors group w-full lg:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-500 group-hover:text-purple-400 transition-colors" />
                  <MessageCircle className="h-4 w-4 text-green-500 group-hover:text-green-400 transition-colors" />
                </div>
                <span className="text-sm md:text-base group-hover:underline">+91 6201325012</span>
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button onClick={scrollToPortfolio} size="lg" className="w-full sm:w-auto">
                View My Work
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                    <social.icon className="h-5 w-5" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}