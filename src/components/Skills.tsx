import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Box, Palette, Gamepad2, Code } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "3D Modeling & Rendering",
      icon: <Box className="h-5 w-5" />,
      skills: [
        { name: "Blender", level: 90 },
        { name: "Maya", level: 80 },
        { name: "3ds Max", level: 75 },
        { name: "ZBrush", level: 70 }
      ],
      tools: ["Substance Painter", "Substance Designer", "Marmoset Toolbag", "V-Ray", "Arnold"]
    },
    {
      title: "Animation & VFX",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Character Animation", level: 85 },
        { name: "Motion Graphics", level: 80 },
        { name: "Visual Effects", level: 75 },
        { name: "Rigging", level: 70 }
      ],
      tools: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Cinema 4D"]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="h-5 w-5" />,
      skills: [
        { name: "Unity 3D", level: 85 },
        { name: "Unity 2D", level: 90 },
        { name: "C# Scripting", level: 80 },
        { name: "Game Design", level: 85 }
      ],
      tools: ["Unity Hub", "Visual Studio", "Git", "Blender to Unity Pipeline"]
    },
    {
      title: "Technical Skills",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "C#", level: 80 },
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "Git/Version Control", level: 75 }
      ],
      tools: ["Visual Studio Code", "GitHub", "Unity Collaborate", "Perforce"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating immersive 3D experiences and interactive applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-primary mr-2">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">Tools & Software:</h5>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}