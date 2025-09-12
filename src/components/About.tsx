import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, GraduationCap, Calendar, Users, Target, Award } from 'lucide-react';
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
            Passionate about bringing creative visions to life through system analysis, 3D modeling, animation, and interactive experiences.
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

          {/* Expertise & Skills */}
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
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Expertise & Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid gap-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      🎯 System Analysis & Design
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Expertise in analyzing complex systems, designing efficient workflows, and implementing technological solutions for research environments.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">System Architecture</Badge>
                      <Badge variant="secondary">Process Optimization</Badge>
                      <Badge variant="secondary">Technical Documentation</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      🎨 3D Modeling & Animation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Creating detailed 3D models and animations for research applications, games, and interactive experiences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Blender</Badge>
                      <Badge variant="secondary">Maya</Badge>
                      <Badge variant="secondary">Character Animation</Badge>
                      <Badge variant="secondary">VFX</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      🎮 Game Development
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Developing engaging 2D and 3D games using Unity, from concept to completion with full C# scripting capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Unity 2D/3D</Badge>
                      <Badge variant="secondary">C# Scripting</Badge>
                      <Badge variant="secondary">Game Design</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education - Moved to side and smaller */}
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
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="text-center p-4 bg-accent/30 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm mb-1">University of Engineering & Management</h4>
                    <p className="text-xs text-muted-foreground mb-1">Kolkata (UEMK)</p>
                    <Badge variant="outline" className="text-xs">Graduate 2025</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Academic Focus:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Engineering Principles</li>
                      <li>• Digital Media Technology</li>
                      <li>• Software Development</li>
                      <li>• System Design</li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground text-center">
                      Strong foundation in engineering with specialization in digital technologies and creative applications.
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