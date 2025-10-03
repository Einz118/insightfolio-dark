import { Play, Clock, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lectureImage from "@/assets/lecture-session-1.jpg";

const LecturesSection = () => {
  const lectures = [
    {
      title: "Introduction to AI and VEX AIM",
      description: "Comprehensive workshop covering the fundamentals of artificial intelligence applications and VEX AIM robotics kit.",
      image: lectureImage,
      duration: "2 hours",
      attendees: "20 students, 4 teachers",
      date: "September 17, 2025",
      topics: ["AI Fundamentals", "Educational Applications", "Future Trends"]
    },
    {
      title: "Programming in VEX AIM",
      description: "Interactive session exploring how digital technologies are reshaping traditional educational methodologies and practices.",
      image: lectureImage,
      duration: "1.5 hours",
      attendees: 38,
      date: "March 8, 2024",
      topics: ["Digital Tools", "Learning Analytics", "Best Practices"]
    },
    {
      title: "Building Inclusive Online Communities",
      description: "Practical workshop on creating and maintaining inclusive digital learning environments that foster collaboration.",
      image: lectureImage,
      duration: "3 hours",
      attendees: 52,
      date: "February 28, 2024",
      topics: ["Community Building", "Accessibility", "Engagement Strategies"]
    }
  ];

  return (
    <section id="lectures" className="section-padding bg-gradient-to-br from-muted/30 to-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-glow">Lectures</span> & Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Professional development sessions and educational workshops designed to empower educators and learners with cutting-edge knowledge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {lectures.map((lecture, index) => (
            <Card key={index} className="card-gradient project-card group overflow-hidden">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={lecture.image}
                  alt={lecture.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30">
                    <Play className="mr-2 h-4 w-4" />
                    View Recording
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {lecture.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{lecture.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {lecture.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-primary">
                    <Clock className="h-4 w-4" />
                    {lecture.duration}
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <Users className="h-4 w-4" />
                    {lecture.attendees} attendees
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium">Topics Covered:</div>
                  <div className="flex flex-wrap gap-2">
                    {lecture.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Our Training Programs?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer customized training sessions and workshops for organizations looking to enhance their digital capabilities and educational practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Schedule a Workshop
            </Button>
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              View All Sessions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LecturesSection;