import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
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
import img6148 from "@/assets/IMG_6148.jpg";
import img6173 from "@/assets/IMG_6173.jpg";
import img6237 from "@/assets/IMG_6237.jpg";
import img62422 from "@/assets/IMG_6242-2.jpg";
import img6250 from "@/assets/IMG_6250.jpg";
import img6256 from "@/assets/IMG_6256.jpg";
import img6299 from "@/assets/IMG_6299.jpg";
import img6300 from "@/assets/IMG_6300.jpg";
import cms251 from "@/assets/cms25.1.jpg";
import cms2522 from "@/assets/cms25.2-2.jpg";
import dsc009772 from "@/assets/DSC00977-2.jpg";
import img61482 from "@/assets/IMG_6148-2.jpg";
import img6183 from "@/assets/IMG_6183.jpg";
import img62562 from "@/assets/IMG_6256-2.jpg";
import evg2524 from "@/assets/evg25.24.jpg";
import evg2529 from "@/assets/evg25.29.jpg";

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
    },
    {
      src: img6148,
      title: "Hands-on Science Activity",
      description: "Students participating in interactive science experiments"
    },
    {
      src: img6173,
      title: "Robot Competition Arena",
      description: "Competitive robotics event with spectators"
    },
    {
      src: img6237,
      title: "Youth Education Outreach",
      description: "Teaching younger students about STEM concepts"
    },
    {
      src: img62422,
      title: "Robotics Team Demo",
      description: "Students demonstrating their robot project"
    },
    {
      src: img6250,
      title: "Interactive Fair Booth",
      description: "Busy STEM fair booth with student demonstrations"
    },
    {
      src: img6256,
      title: "Science Experiment Showcase",
      description: "Students presenting chemistry and physics experiments"
    },
    {
      src: img6299,
      title: "Robot Competition Showcase",
      description: "Robot soccer tournament with audience participation"
    },
    {
      src: img6300,
      title: "Creative Workshop Station",
      description: "Students leading hands-on craft and engineering activities"
    },
    {
      src: cms251,
      title: "Classroom Presentation",
      description: "Student presenting technical concepts to peers"
    },
    {
      src: cms2522,
      title: "Interactive Learning Session",
      description: "Collaborative problem-solving in classroom setting"
    },
    {
      src: dsc009772,
      title: "Community STEM Outreach",
      description: "Teaching science experiments to younger students"
    },
    {
      src: img61482,
      title: "Hands-on Chemistry Demo",
      description: "Interactive chemistry demonstration at community event"
    },
    {
      src: img6183,
      title: "STEM Fair Exhibition Booth",
      description: "Students showcasing robotics projects at fair"
    },
    {
      src: img62562,
      title: "Science Experiment Fair",
      description: "Interactive science demonstrations with community engagement"
    },
    {
      src: evg2524,
      title: "Youth Robotics Workshop",
      description: "Teaching young children robotics fundamentals"
    },
    {
      src: evg2529,
      title: "Student Achievement Celebration",
      description: "Recognizing excellence in STEM competitions"
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
