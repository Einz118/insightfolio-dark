import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border/20 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 VerdEngineers. Transforming education through innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;