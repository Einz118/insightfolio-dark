import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import communityImage from "@/assets/community-service-1.jpg";
import heroImage from "@/assets/hero-image.jpg";
import lectureImage from "@/assets/lecture-session-1.jpg";
import innovationImage from "@/assets/project-innovation.jpg";

const Gallery = () => {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: communityImage,
      title: "Community Service Initiative",
      description: "Digital literacy training program"
    },
    {
      src: innovationImage,
      title: "EdTech Innovation Lab",
      description: "Collaborative workspace for educators"
    },
    {
      src: lectureImage,
      title: "AI & Robotics Workshop",
      description: "Educational lecture session"
    },
    {
      src: heroImage,
      title: "VerdEngineers Team",
      description: "Our team in action"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Project <span className="text-glow">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of impactful projects and initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="card-gradient overflow-hidden rounded-lg group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-muted-foreground">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
