import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Bell, FileCheck, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Quick Analysis",
      description: "Upload screenshots from social media and get instant AI-powered verification results within seconds.",
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "Label Detection",
      description: "Advanced AI detects text, images, and metadata from posts to identify potential misinformation.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Source Verification",
      description: "Cross-reference content with verified sources and fact-checking databases for accuracy.",
    },
    {
      icon: <Bell className="h-12 w-12" />,
      title: "Report to Authorities",
      description: "Automatically send detailed reports to PIB and relevant authorities for action.",
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-pulse-glow">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-semibold">AI-Powered Truth Verification</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop the Spread of{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
                Fake News
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Verify news authenticity instantly with advanced AI technology. Detect misinformation
              across social media platforms and protect yourself from fake information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link to="/check">
                  Start Verification
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>Real-time Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for Truth Seekers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to combat misinformation and verify news authenticity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto max-w-4xl text-center text-primary-foreground animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Fight Misinformation?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of users who trust FactRadar to verify news authenticity
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 group"
            asChild
          >
            <Link to="/check">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 FactRadar. Fighting fake news with AI technology.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
