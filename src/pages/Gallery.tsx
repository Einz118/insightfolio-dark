import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import cms242 from "@/assets/cms24.2.jpg";
import cms243 from "@/assets/cms24.3.jpg";
import cms252 from "@/assets/cms25.2.jpg";
import cms25 from "@/assets/cms25.jpg";
import dsc00977 from "@/assets/DSC00977.jpg";
import dsc01148 from "@/assets/DSC01148.jpg";
import dsc01265 from "@/assets/DSC01265.jpg";
import img6242 from "@/assets/IMG_6242.jpg";
import img6267 from "@/assets/IMG_6267.jpg";
import img6368 from "@/assets/IMG_6368.jpg";

const Gallery = () => {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: cms242,
      title: "Cosmosics Award Ceremony",
      description: "Receiving recognition for STEM excellence"
    },
    {
      src: dsc01265,
      title: "Cosmosics Team & Organizers",
      description: "Large group photo with all participants and organizers"
    },
    {
      src: img6267,
      title: "STEM Fair Award Winners",
      description: "Award ceremony on stage at the STEM fair"
    },
    {
      src: img6242,
      title: "Robotics Workshop",
      description: "Students working with robotics technology"
    },
    {
      src: img6368,
      title: "Robot Soccer Competition",
      description: "Students competing in robot soccer tournament"
    },
    {
      src: cms25,
      title: "Classroom Collaboration",
      description: "Students working together on STEM projects"
    },
    {
      src: cms252,
      title: "Tech Presentation",
      description: "Students presenting their technical projects"
    },
    {
      src: dsc00977,
      title: "Outdoor STEM Activity",
      description: "Hands-on outdoor engineering challenge"
    },
    {
      src: dsc01148,
      title: "Cultural & Innovation Booth",
      description: "Showcasing cultural projects and innovations"
    },
    {
      src: cms243,
      title: "Student Engagement",
      description: "Students gathering at the STEM fair venue"
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
