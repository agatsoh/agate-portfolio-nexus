import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      items: [
        "MS (IT) - University of Applied Sciences Frankfurt - May 2016",
        "BE (EXTC) - Mumbai University - August 2008", 
        "LLB - Mumbai University - June 2021"
      ]
    },
    {
      icon: "💼",
      title: "Experience",
      items: ["Software Development", "Product Management", "Blockchain Innovation"]
    },
    {
      icon: "🌍",
      title: "Impact",
      items: ["Global Projects", "Cross-Cultural Teams", "NGO Advocacy"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate technologist with a unique blend of engineering expertise, 
              legal insight, and startup-driven product thinking.
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My career spans over 12 years across diverse domains - from software engineering at 
                Bank of America to blockchain innovation at Brainbot, and from legal advocacy with 
                Awaken India Movement to product management at GoSprint Logistics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This unique cross-functional experience has shaped my approach to building 
                product-first solutions that balance technical excellence with real-world impact. 
                I thrive at the intersection of technology, strategy, and human-centered design.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Problem Solving", "Innovation", "Integrity", "Collaboration"].map((value) => (
                  <span 
                    key={value}
                    className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-6 bg-white/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-3xl">{highlight.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                          <ul className="space-y-1">
                            {highlight.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-muted-foreground">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="p-6 hover-scale cursor-pointer bg-white/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="font-semibold text-foreground mb-2">Technical & Product</h4>
                <p className="text-sm text-muted-foreground">
                  Software Development, Agile, DevOps, Generative AI
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale cursor-pointer bg-white/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="font-semibold text-foreground mb-2">Analytical</h4>
                <p className="text-sm text-muted-foreground">
                  Data-driven decisions, Strategic planning, Design thinking
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale cursor-pointer bg-white/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-semibold text-foreground mb-2">Interpersonal</h4>
                <p className="text-sm text-muted-foreground">
                  Team & Stakeholder Management, Cross-functional Collaboration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
