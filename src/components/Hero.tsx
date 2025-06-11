
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setYearsCount(prev => {
          if (prev >= 12) {
            clearInterval(interval);
            return 12;
          }
          return prev + 1;
        });
      }, 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-purple-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 rounded-full text-sm font-medium text-purple-700 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new projects
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                  Engineer.
                </span>
                <br />
                <span className="text-foreground">Strategist.</span>
                <br />
                <span className="text-muted-foreground text-4xl lg:text-5xl font-medium">
                  Builder of
                </span>
                <br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Product-First
                </span>
                <br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Solutions.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Crafting exceptional digital experiences with{' '}
                <span className="text-primary font-semibold relative">
                  {yearsCount}+ years
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </span>{' '}
                spanning software engineering, blockchain innovation, product management, and legal-tech solutions.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-6 text-lg"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 px-8 py-6 text-lg group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {yearsCount}+
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                  6
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">Companies</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Main profile container with enhanced styling */}
              <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 p-1.5 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="w-full h-full rounded-3xl bg-white p-6 relative overflow-hidden">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
                      alt="Sohan Agate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 animate-bounce border border-white/20">
                <div className="text-3xl">🚀</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 animate-bounce delay-1000 border border-white/20">
                <div className="text-3xl">💡</div>
              </div>
              <div className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 animate-pulse border border-white/20">
                <div className="text-2xl">⚡</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60 animate-ping delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
