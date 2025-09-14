import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, GraduationCap, Calendar, Users, Target, Award, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           As an AR/VR Developer, I specialize in bridging the gap between imagination and reality. With a 3+ year track record of creating dynamic digital solutions, I combine the artistic precision of 3D modeling, animation, and light baking with a robust technical foundation in Java, HTML, and CSS. I am driven by the challenge of building the next generation of interactive content and am seeking to lend my skills to ambitious developmental initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Professional Experience - Full Width */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building2 className="h-6 w-6 mr-3 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium text-lg mb-1">System Analyst</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-medium">IEMA Research & Development</span>
                        <Badge variant="outline" className="text-xs">Current Position</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Leading system analysis and design for cutting-edge research projects. Specializing in 
                        3D modeling technologies, interactive systems, and digital media solutions. Contributing 
                        to innovative technological advancements in research and development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-accent/50 rounded-lg">
                        <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <h5 className="font-medium text-sm">System Design</h5>
                        <p className="text-xs text-muted-foreground">Analysis & Implementation</p>
                      </div>
                      <div className="text-center p-4 bg-accent/50 rounded-lg">
                        <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <h5 className="font-medium text-sm">Team Leadership</h5>
                        <p className="text-xs text-muted-foreground">Project Coordination</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Key Responsibilities:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>System architecture design and analysis</li>
                        <li>3D technology integration and optimization</li>
                        <li>Research project management and coordination</li>
                        <li>Digital media solutions development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {/* B.Tech */}
                  <div className="p-4 bg-accent/30 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">B.Tech University of Engineering & Management</h4>
                        <p className="text-xs text-muted-foreground mb-2">Kolkata (UEMK)</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Aug 2021 - Jun 2025</span>
                          <Badge variant="outline" className="text-xs"></Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Previous Education */}
                  <div className="grid gap-3">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-xs mb-1">Class 12 | MPS School, Harnaut</h5>
                          <span className="text-xs text-muted-foreground">April 2020 - May 2021</span>
                        </div>
                        <Badge variant="secondary" className="text-xs"></Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <h5 className="font-medium text-xs mb-1">Class 10 | St. Paul's English School, Sarthai</h5>
                      <span className="text-xs text-muted-foreground">March 2018 - April 2019</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BadgeCheck className="h-5 w-5 mr-2 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-medium text-xs mb-2 text-blue-700 dark:text-blue-300">Technical Support Basics</h5>
                    <p className="text-xs text-muted-foreground mb-2">Coursera</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• IT support fundamentals</li>
                      <li>• Troubleshooting strategies</li>
                      <li>• Computer systems administration</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h5 className="font-medium text-xs mb-2 text-purple-700 dark:text-purple-300">Artificial Intelligence Fundamentals</h5>
                    <p className="text-xs text-muted-foreground mb-2">IBM SkillsBuild</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• AI principles & concepts</li>
                      <li>• Machine Learning basics</li>
                      <li>• Real-world applications</li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground text-center">
                      Continuously expanding knowledge in emerging technologies and industry best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}