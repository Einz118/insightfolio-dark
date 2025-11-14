import { Users, Target, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  const values = [{
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We continuously push the boundaries of educational technology to create meaningful solutions."
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community",
    description: "Building strong partnerships with educators, students, and communities to drive positive change."
  }, {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Excellence",
    description: "Delivering high-quality educational experiences that exceed expectations and create lasting impact."
  }, {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Accessibility",
    description: "Making quality STEM education accessible to learners from all backgrounds and circumstances."
  }];
  return <section id="about" className="section-padding bg-gradient-to-br from-secondary/50 to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            About <span className="text-glow">VerdEngineers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">Founded with a vision to revolutionize education through technology, we are a passionate team of robotics students, educators, developers, and innovators committed to creating impactful learning experiences with hands-on approach..</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">VerdEngineers was born from the belief that hands-on STEM experience can bridge educational gaps and create opportunities for learners even in rural areas. Our journey began with small community events created by the students from our robo and has evolved into comprehensive educational platforms serving diverse populations.</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in developing innovative learning solutions, conducting impactful community 
              outreach programs, and delivering professional training sessions that empower individuals 
              and organizations to thrive in the digital age.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our multidisciplinary team combines expertise in education, engineering, and community development 
              to create solutions that are not only technically excellent but also pedagogically sound and 
              socially responsible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => <Card key={index} className="card-gradient hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">To democratize access to quality education by leveraging technology, fostering inclusive learning environments, and empowering communities to build a more educated and equitable world for all.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;