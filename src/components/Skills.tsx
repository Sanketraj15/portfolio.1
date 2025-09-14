import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Box, Palette, Gamepad2, Code } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Java", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "C#", level: 80 }
      ],
      tools: ["IntelliJ IDEA", "Visual Studio Code", "Eclipse", "Git"]
    },
    {
      title: "3D Modeling & Technical",
      icon: <Box className="h-5 w-5" />,
      skills: [
        { name: "3D Modelling Reality", level: 90 },
        { name: "3D FIT Database", level: 85 },
        { name: "Management System", level: 80 },
        { name: "System Analysis", level: 85 }
      ],
      tools: ["Blender", "Maya", "Database Systems", "Analysis Tools"]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="h-5 w-5" />,
      skills: [
        { name: "Unity 3D", level: 85 },
        { name: "Unity 2D", level: 90 },
        { name: "Game Design", level: 85 },
        { name: "Character Controls", level: 80 }
      ],
      tools: ["Unity Hub", "Visual Studio", "C# Scripting", "Android Studio"]
    },
    {
      title: "Frontend & Web Development",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "React", level: 80 },
        { name: "Frontend Design", level: 85 },
        { name: "Responsive Design", level: 80 },
        { name: "UI/UX Principles", level: 75 }
      ],
      tools: ["React", "Steam Android", "Responsive Frameworks", "Design Tools"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full stack development expertise with specialized skills in 3D modeling, system analysis, and innovative digital solutions.
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