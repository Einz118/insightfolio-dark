import { ExternalLink, Users, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import cosmosicsImage from "@/assets/cosmosics-stem.jpg";
import innovationImage from "@/assets/vex-webinar.jpg";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  
  const projects = [
    {
      title: t.cosmosicsTitle,
      description: t.cosmosicsDesc,
      image: cosmosicsImage,
      tags: [t.communityService, t.digitalLiteracy, t.outreach],
      stats: {
        participants: "150+",
        duration: "6 months",
        locations: "5 communities"
      },
      link: "https://www.facebook.com/"
    },
    {
      title: t.vexTitle,
      description: t.vexDesc,
      image: innovationImage,
      tags: [t.community, t.ai, t.collaboration],
      stats: {
        participants: "40+",
        duration: "2 weeks",
        locations: "Online Platform"
      },
      link: "https://www"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            {t.title} <span className="text-glow">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {t.description}
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
                    <div className="text-xs text-muted-foreground">{t.participants}</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{project.stats.duration}</div>
                    <div className="text-xs text-muted-foreground">{t.duration}</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{project.stats.locations}</div>
                    <div className="text-xs text-muted-foreground">{t.locations}</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10 group"
                >
                  {t.learnMore}
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            {t.callToAction}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="btn-hero"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.getInTouch}
            </Button>
            <Button 
              className="btn-hero"
              onClick={() => window.location.href = '/gallery'}
            >
              {t.gallery}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;