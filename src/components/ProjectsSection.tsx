import { ExternalLink, Users, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cosmosicsImage from "@/assets/cms24.2.jpg";
import innovationImage from "@/assets/project-innovation.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cosmosics: STEM fair",
      description: "Community outreach program providing digital literacy training to underserved populations, focusing on essential computer skills and internet safety.",
      image: cosmosicsImage,
      tags: ["Community Service", "Digital Literacy", "Outreach"],
      stats: {
        participants: "150+",
        duration: "6 months",
        locations: "5 communities"
      },
      link: "#"
    },
    {
      title: "EdTech Innovation Lab",
      description: "Collaborative workspace where educators and technologists develop cutting-edge learning tools and platforms for modern educational challenges.",
      image: innovationImage,
      tags: ["Innovation", "R&D", "Collaboration"],
      stats: {
        participants: "50+",
        duration: "Ongoing",
        locations: "Tech Hub"
      },
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Explore our impactful initiatives that are transforming communities through education and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient project-card group overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{project.stats.participants}</div>
                    <div className="text-xs text-muted-foreground">Participants</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{project.stats.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{project.stats.locations}</div>
                    <div className="text-xs text-muted-foreground">Locations</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10 group"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to collaborate on a project or learn more about our community initiatives?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="btn-hero"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
            <Button 
              className="btn-hero"
              onClick={() => window.location.href = '/gallery'}
            >
              Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;