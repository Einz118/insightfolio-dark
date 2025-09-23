import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email service integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "hello@verdengineers.com",
      action: "mailto:hello@verdengineers.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: "+84 936 279 11",
      action: "tel:+84936279111"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      details: "Hanoi, Vietnam",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Get In <span className="text-glow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Ready to transform education together? Let's discuss how we can collaborate to create meaningful impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-gradient hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <a
                        href={info.action}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/company/verdengineers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Company LinkedIn</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://linkedin.com/in/verdengineers-founder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Founder's Profile</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-muted/30 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full group"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;