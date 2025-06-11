
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: "🎯",
      title: "Product Strategy",
      description: "End-to-end product strategy development, from market research to roadmap execution, leveraging data-driven insights and user-centered design principles.",
      features: [
        "Market Analysis & Competitive Intelligence",
        "Product Roadmap Development",
        "User Research & Validation",
        "Go-to-Market Strategy"
      ]
    },
    {
      icon: "⚡",
      title: "Technical Program Management",
      description: "Leading complex technical initiatives across cross-functional teams, ensuring timely delivery while maintaining quality and stakeholder alignment.",
      features: [
        "Agile Project Management",
        "Cross-functional Team Leadership",
        "Risk Assessment & Mitigation",
        "Stakeholder Communication"
      ]
    },
    {
      icon: "⚖️",
      title: "Legal-Tech Consulting",
      description: "Bridging the gap between legal requirements and technology solutions, with expertise in compliance, regulatory frameworks, and legal automation.",
      features: [
        "Regulatory Compliance Solutions",
        "Legal Process Automation",
        "Contract Management Systems",
        "Privacy & Data Protection"
      ]
    },
    {
      icon: "⛓️",
      title: "Blockchain Product Development",
      description: "Full-stack blockchain development and consulting, from smart contract architecture to DeFi protocol design and Web3 product strategy.",
      features: [
        "Smart Contract Development",
        "DeFi Protocol Design",
        "Web3 Product Strategy",
        "Blockchain Integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Services I <span className="text-gradient">Provide</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions combining technical expertise with strategic thinking 
              to drive product success and business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover-scale cursor-pointer bg-gradient-card border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity">
                    Book a Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="text-center animate-fade-in">
            <Card className="p-8 bg-gradient-primary text-white">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's discuss your project requirements and explore how we can work together 
                  to achieve your business objectives.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📞</div>
                    <div className="font-semibold">Free Consultation</div>
                    <div className="text-sm opacity-80">30-minute strategy call</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-semibold">Fast Turnaround</div>
                    <div className="text-sm opacity-80">Rapid project delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold">Results-Driven</div>
                    <div className="text-sm opacity-80">Focus on business outcomes</div>
                  </div>
                </div>

                <Button className="bg-white text-primary px-8 py-3 hover:bg-gray-100 transition-colors font-semibold">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
