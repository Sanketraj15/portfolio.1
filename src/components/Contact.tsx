import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram, Facebook, MessageCircle, X } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the message to a backend
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:srajiema2025@gmail.com';
  };

  const handlePhoneClick = () => {
    setIsPhoneModalOpen(true);
  };

  const handleCallClick = () => {
    const phoneNumber = '+916201325012';
    window.location.href = `tel:${phoneNumber}`;
    setIsPhoneModalOpen(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/916201325012`;
    window.open(whatsappUrl, '_blank');
    setIsPhoneModalOpen(false);
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub Profile',
      color: 'from-gray-600 to-gray-800',
      username: '@sanketraj'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sanketraj15',
      label: 'LinkedIn Profile',
      color: 'from-blue-600 to-blue-800',
      username: 'in/sanketraj15'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/_its_raj_0_2',
      label: 'Instagram Profile',
      color: 'from-pink-500 to-purple-600',
      username: '@_its_raj_0_2'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/sanket.raj.2215',
      label: 'Facebook Profile',
      color: 'from-blue-500 to-blue-700',
      username: 'sanket.raj.2215'
    },
    {
      icon: MessageCircle,
      href: 'https://twitter.com/ssraj2215',
      label: 'Twitter Profile',
      color: 'from-sky-400 to-blue-600',
      username: '@ssraj2215'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your vision to life as a System Analyst and 3D expert.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <motion.button
                    onClick={handleEmailClick}
                    className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors group/item"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                      <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium group-hover/item:text-primary transition-colors">Email</p>
                      <p className="text-sm text-muted-foreground group-hover/item:underline">srajiema2025@gmail.com</p>
                    </div>
                  </motion.button>
                  
                  <motion.button
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors group/item"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center gap-1">
                      <Phone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <MessageCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium group-hover/item:text-primary transition-colors">Phone / WhatsApp</p>
                      <p className="text-sm text-muted-foreground group-hover/item:underline">+91 6201325012</p>
                    </div>
                  </motion.button>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Kolkata, West Bengal, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    Social Media & Professional Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full justify-start group/social hover:scale-105 transition-all duration-300 relative overflow-hidden" 
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover/social:opacity-10 transition-opacity duration-300`} />
                          <div className={`p-1.5 rounded-full bg-gradient-to-r ${social.color} mr-3`}>
                            <social.icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{social.label}</span>
                            <span className="text-xs text-muted-foreground">{social.username}</span>
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-3 text-center">🚀 Currently Available For:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">System Analysis</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">3D Modeling</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Game Development</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Animation Work</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Unity Projects</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="focus:scale-105 transition-transform"
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus:scale-105 transition-transform"
                      required
                    />
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="focus:scale-105 transition-transform"
                    required
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="focus:scale-105 transition-transform resize-none"
                    required
                  />
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full group/send relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/send:opacity-100 transition-opacity duration-300" />
                      <Send className="h-4 w-4 mr-2 group-hover/send:animate-pulse relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Phone Options Modal */}
        <Dialog open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Choose Your Action
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={handleCallClick}
                  className="w-full justify-start group hover:scale-105 transition-all duration-300"
                  variant="outline"
                >
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 mr-3">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Call Me</p>
                    <p className="text-sm text-muted-foreground">+91 6201325012</p>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full justify-start group hover:scale-105 transition-all duration-300"
                  variant="outline"
                >
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 mr-3">
                    <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">WhatsApp Me</p>
                    <p className="text-sm text-muted-foreground">Quick message</p>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button
                  onClick={() => setIsPhoneModalOpen(false)}
                  className="w-full justify-center hover:scale-105 transition-all duration-300"
                  variant="ghost"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}