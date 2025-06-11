
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "GoSprint Logistics",
      role: "Technical Program Manager",
      period: "2024",
      logo: "🚚",
      achievements: [
        "Led product strategy for logistics optimization platform",
        "Improved delivery efficiency by 25% through data-driven insights",
        "Managed cross-functional teams across 3 time zones"
      ]
    },
    {
      company: "Awaken India Movement",
      role: "Legal Consultant",
      period: "2022-2023",
      logo: "⚖️",
      achievements: [
        "Provided legal advocacy for constitutional rights",
        "Developed legal-tech solutions for case management",
        "Collaborated with NGOs on policy reform initiatives"
      ]
    },
    {
      company: "Brainbot",
      role: "Blockchain Engineer",
      period: "2016-2022",
      logo: "⛓️",
      achievements: [
        "Built decentralized applications on Ethereum",
        "Contributed to Raiden Network scaling solutions",
        "Led technical architecture for DeFi protocols"
      ]
    },
    {
      company: "Deutsche Börse",
      role: "Working Student",
      period: "2014-2016",
      logo: "📈",
      achievements: [
        "Developed trading platform analytics",
        "Implemented real-time market data processing",
        "Contributed to regulatory compliance tools"
      ]
    },
    {
      company: "Bank of America",
      role: "Sr. Software Engineer",
      period: "2012-2013",
      logo: "🏦",
      achievements: [
        "Built enterprise-scale financial applications",
        "Optimized trading systems performance by 40%",
        "Mentored junior developers on best practices"
      ]
    },
    {
      company: "L&T Infotech",
      role: "Software Engineer",
      period: "2010-2012",
      logo: "💻",
      achievements: [
        "Developed full-stack web applications",
        "Implemented automated testing frameworks",
        "Delivered projects for Fortune 500 clients"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A decade-plus journey across diverse industries, from fintech to blockchain, 
              NGOs to logistics.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 hover-scale cursor-pointer bg-gradient-card border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl">
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.company}</h3>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-medium text-primary">{exp.role}</h4>
                    </div>

                    {/* Achievements */}
                    <div className="md:col-span-2">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="p-8 bg-gradient-primary text-white">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how my diverse experience can add value to your next project.
                </p>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Download Resume
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
