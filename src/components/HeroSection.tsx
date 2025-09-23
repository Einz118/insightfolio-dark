import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Educational Technology Innovation" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Transforming
            <span className="text-glow block">Education</span>
            Through Technology
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">We're an innovative ed-tech startup dedicated to creating cutting-edge educational solutions that empower learners, educators, and communities worldwide. Our mission is to make quality STEM and Robotics education accessible to everyone through hands-on experience and 1-1 coaching.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button onClick={() => scrollToSection("projects")} className="btn-hero group">
              Explore Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" onClick={() => scrollToSection("about")} className="border-primary/50 text-primary hover:bg-primary/10 group">
              <Play className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Schools Served</div>
            </div>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="hidden lg:block relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl backdrop-blur-sm border border-primary/20 animate-float" style={{
          animation: "float 6s ease-in-out infinite"
        }}>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-75" />
        </div>
      </div>
    </section>;
};
export default HeroSection;