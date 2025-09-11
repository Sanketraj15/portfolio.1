import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, GraduationCap, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about bringing creative visions to life through 3D modeling, animation, and interactive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-primary" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Trainee - IEMA Research & Development</h4>
                  <p className="text-sm text-muted-foreground">Current Position</p>
                  <p className="text-sm mt-2">
                    Working on cutting-edge research projects involving 3D modeling and interactive technologies. 
                    Contributing to innovative solutions in the field of digital media and development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">University of Engineering & Management, Kolkata</h4>
                  <p className="text-sm text-muted-foreground">Undergraduate Degree - 2025</p>
                  <p className="text-sm mt-2">
                    Completed comprehensive studies with focus on engineering principles and practical applications 
                    in digital media and software development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Expertise & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3">3D Modeling</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Creating detailed 3D models for various applications including games, architectural visualization, and product design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Blender</Badge>
                    <Badge variant="secondary">Maya</Badge>
                    <Badge variant="secondary">3ds Max</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Animation</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bringing characters and objects to life through sophisticated animation techniques and storytelling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Character Animation</Badge>
                    <Badge variant="secondary">Motion Graphics</Badge>
                    <Badge variant="secondary">VFX</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Game Development</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Developing engaging 2D and 3D games using Unity, from concept to completion.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Unity 2D</Badge>
                    <Badge variant="secondary">Unity 3D</Badge>
                    <Badge variant="secondary">C# Scripting</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}