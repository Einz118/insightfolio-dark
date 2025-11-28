import { Users, Target, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  
  const values = [{
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: t.innovationTitle,
    description: t.innovationDesc
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: t.communityTitle,
    description: t.communityDesc
  }, {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: t.excellenceTitle,
    description: t.excellenceDesc
  }, {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: t.accessibilityTitle,
    description: t.accessibilityDesc
  }];
  return <section id="about" className="section-padding bg-gradient-to-br from-secondary/50 to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            {t.title} <span className="text-glow">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">{t.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6">{t.storyTitle}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.storyP1}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.storyP2}</p>
            <p className="text-muted-foreground leading-relaxed">{t.storyP3}</p>
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
            <h3 className="text-2xl font-bold mb-4">{t.missionTitle}</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">{t.missionDesc}</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;