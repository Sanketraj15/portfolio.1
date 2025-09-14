import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, Edit, Trash2, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: '3D Modeling' | 'Animation' | '2D Game' | '3D Game' | 'VFX';
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface PortfolioProps {
  isAdminMode: boolean;
}

export function Portfolio({ isAdminMode }: PortfolioProps) {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Salary System | Restaurant Billing Assistant',
      description: 'Integrated restaurant billing system with chatbot functionality. Created an easy-to-use restaurant billing solution with recommendations and smooth user experience.',
      category: '3D Game',
      image: 'https://images.unsplash.com/photo-1626207887298-da2fc1f50e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmRsZXNzJTIwcnVubmVyJTIwZ2FtZXxlbnwxfHx8fDE3NTc4NjQzODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Java', 'C#', 'Steam Android'],
      featured: true
    },
    {
      id: '2',
      title: 'Business-up One Running Game',
      description: 'Endless runner game with smooth character controls, dynamic animations, and engaging scoring system. Designed and developed from concept to completion.',
      category: '2D Game',
      image: 'https://images.unsplash.com/photo-1728908053208-b7403ce54b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmRsZXNzJTIwcnVubmVyJTIwZ2FtZXxlbnwxfHx8fDE3NTc4NjQzODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Java', 'C#', 'Unity', 'Game Design'],
      featured: true
    },
    {
      id: '3',
      title: 'System Analysis Dashboard',
      description: 'Comprehensive system analysis and management dashboard for IEMA R&D. Features real-time data visualization and process optimization tools.',
      category: '3D Game',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['System Analysis', 'Database Management', '3D FIT Database'],
      liveUrl: 'https://example.com'
    },
    {
      id: '4',
      title: '3D Modeling Reality Projects',
      description: 'Collection of 3D modeling projects showcasing reality-based designs and technical implementations for research applications.',
      category: '3D Modeling',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
      technologies: ['3D Modelling Reality', 'Blender', 'Technical Design']
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: '3D Modeling',
    image: '',
    technologies: [],
    githubUrl: '',
    liveUrl: ''
  });

  const categories = ['All', '3D Modeling', 'Animation', '2D Game', '3D Game', 'VFX'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project: Project = {
        id: Date.now().toString(),
        title: newProject.title,
        description: newProject.description,
        category: newProject.category as Project['category'],
        image: newProject.image || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
        technologies: newProject.technologies || [],
        githubUrl: newProject.githubUrl,
        liveUrl: newProject.liveUrl
      };
      setProjects([...projects, project]);
      setNewProject({
        title: '',
        description: '',
        category: '3D Modeling',
        image: '',
        technologies: [],
        githubUrl: '',
        liveUrl: ''
      });
      setIsAddDialogOpen(false);
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setNewProject(project);
  };

  const handleUpdateProject = () => {
    if (editingProject && newProject.title && newProject.description) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...editingProject, ...newProject } as Project
          : p
      ));
      setEditingProject(null);
      setNewProject({
        title: '',
        description: '',
        category: '3D Modeling',
        image: '',
        technologies: [],
        githubUrl: '',
        liveUrl: ''
      });
    }
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleTechnologyInput = (value: string) => {
    const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech);
    setNewProject({ ...newProject, technologies });
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects in system analysis, game development, 3D modeling, and full stack development solutions.
          </p>
        </div>

        {/* Admin Controls */}
        {isAdminMode && (
          <div className="mb-8 text-center">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Project</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                  <Select
                    value={newProject.category}
                    onValueChange={(value) => setNewProject({ ...newProject, category: value as Project['category'] })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3D Modeling">3D Modeling</SelectItem>
                      <SelectItem value="Animation">Animation</SelectItem>
                      <SelectItem value="2D Game">2D Game</SelectItem>
                      <SelectItem value="3D Game">3D Game</SelectItem>
                      <SelectItem value="VFX">VFX</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Image URL"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                  />
                  <Input
                    placeholder="Technologies (comma separated)"
                    value={newProject.technologies?.join(', ')}
                    onChange={(e) => handleTechnologyInput(e.target.value)}
                  />
                  <Input
                    placeholder="GitHub URL (optional)"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                  />
                  <Input
                    placeholder="Live URL (optional)"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                  />
                  <Button onClick={handleAddProject} className="w-full">
                    Add Project
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-2 left-2">Featured</Badge>
                )}
                {isAdminMode && (
                  <div className="absolute top-2 right-2 space-x-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEditProject(project)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant="outline" className="w-fit">{project.category}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Dialog */}
        <Dialog open={!!editingProject} onOpenChange={() => setEditingProject(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              />
              <Textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              />
              <Select
                value={newProject.category}
                onValueChange={(value) => setNewProject({ ...newProject, category: value as Project['category'] })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3D Modeling">3D Modeling</SelectItem>
                  <SelectItem value="Animation">Animation</SelectItem>
                  <SelectItem value="2D Game">2D Game</SelectItem>
                  <SelectItem value="3D Game">3D Game</SelectItem>
                  <SelectItem value="VFX">VFX</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Image URL"
                value={newProject.image}
                onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
              />
              <Input
                placeholder="Technologies (comma separated)"
                value={newProject.technologies?.join(', ')}
                onChange={(e) => handleTechnologyInput(e.target.value)}
              />
              <Input
                placeholder="GitHub URL (optional)"
                value={newProject.githubUrl}
                onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
              />
              <Input
                placeholder="Live URL (optional)"
                value={newProject.liveUrl}
                onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
              />
              <Button onClick={handleUpdateProject} className="w-full">
                Update Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}