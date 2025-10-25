import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Target, Brain, Lock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze content patterns, sources, and context to identify misinformation with high accuracy.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Detection",
      description: "Get instant verification results within seconds. Our system processes and analyzes posts faster than traditional fact-checking methods.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Multi-Platform Support",
      description: "Works across all major social media platforms including YouTube, Facebook, Instagram, X (Twitter), and traditional media.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure & Private",
      description: "Your uploaded content is processed securely and privately. We don't store personal data or share information with third parties.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "High Accuracy",
      description: "Our AI models are trained on millions of verified and debunked claims, ensuring reliable and trustworthy results.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Reports are sent to Press Information Bureau (PIB) and other authorities, contributing to a safer information ecosystem.",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fighting Misinformation with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In an era of information overload, FactRadar empowers users to distinguish fact from fiction.
              Our advanced AI technology helps combat the spread of fake news and misinformation across digital platforms.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 border-2 hover:border-primary/50 transition-colors animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                We believe that access to accurate information is a fundamental right. FactRadar was created
                to provide everyone with a simple, powerful tool to verify the authenticity of news and content
                they encounter online. By combining cutting-edge AI technology with human expertise, we're
                building a safer, more informed digital world.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">How We Make a Difference</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="border-2 hover:border-accent/50 transition-colors animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Upload Content</h3>
                    <p className="text-muted-foreground">
                      Simply upload a screenshot of the post or news article you want to verify from any social media platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">AI Analysis</h3>
                    <p className="text-muted-foreground">
                      Our AI extracts text, images, and metadata, then cross-references with verified sources and fact-checking databases.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Report Generation</h3>
                    <p className="text-muted-foreground">
                      A detailed report is automatically sent to PIB and relevant authorities for further investigation and action.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Get Notified</h3>
                    <p className="text-muted-foreground">
                      Receive updates and results in your notifications panel, helping you stay informed about the verification process.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Join the Fight Against Misinformation</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Every verification counts. Help us build a more trustworthy digital ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
