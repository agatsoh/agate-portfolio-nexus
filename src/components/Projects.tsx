
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Netflix Revenue Growth Analysis",
      description: "Comprehensive research breakdown analyzing Netflix's revenue streams and growth strategies with interactive charts and data visualizations.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tags: ["Research", "Data Analysis", "Strategy"],
      category: "Case Study"
    },
    {
      title: "Netflix User Research Segmentation",
      description: "Deep dive into user personas and behavioral insights, creating actionable segmentation strategies for product teams.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["UX Research", "Analytics", "Personas"],
      category: "Research"
    },
    {
      title: "Mindmapping for Product Managers",
      description: "Interactive resource and framework for PMs to structure complex product decisions and stakeholder alignment.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop",
      tags: ["Product Management", "Framework", "Tools"],
      category: "Resource"
    },
    {
      title: "Tide Product Teardown",
      description: "Detailed analysis of Tide's digital banking platform, examining UX patterns, user flows, and competitive positioning.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tags: ["Fintech", "UX Analysis", "Product Strategy"],
      category: "Analysis"
    },
    {
      title: "Blockchain DeFi Protocol",
      description: "Built decentralized finance protocol on Ethereum with smart contracts for automated market making and liquidity provision.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      tags: ["Blockchain", "DeFi", "Smart Contracts"],
      category: "Development"
    },
    {
      title: "Legal-Tech Case Management",
      description: "Developed comprehensive case management system for NGOs with document automation and compliance tracking.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
      tags: ["LegalTech", "Automation", "NGO"],
      category: "Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of impactful projects spanning product research, development, 
              and strategic analysis across various industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover-scale cursor-pointer bg-white/50 backdrop-blur-sm border-primary/20 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <Card className="p-8 bg-gradient-primary text-white max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Explore my complete portfolio on GitHub or connect with me to discuss potential collaborations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-primary hover:bg-gray-100 transition-colors">
                    View GitHub
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors">
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
