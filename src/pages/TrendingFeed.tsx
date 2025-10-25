import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CheckCircle, Calendar, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const TrendingFeed = () => {
  const trendingNews = [
    {
      id: 1,
      title: "Government Announces New Digital India Initiative",
      source: "PIB Official",
      platform: "Twitter/X",
      verifiedBy: "Multiple Sources",
      date: "2 hours ago",
      engagement: "125K",
      category: "Government",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Climate Summit Reaches Historic Agreement on Emissions",
      source: "UN Climate",
      platform: "Facebook",
      verifiedBy: "Reuters, AP News",
      date: "5 hours ago",
      engagement: "89K",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Tech Giants Collaborate on AI Safety Standards",
      source: "Tech Press",
      platform: "LinkedIn",
      verifiedBy: "TechCrunch, WSJ",
      date: "8 hours ago",
      engagement: "67K",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Healthcare Breakthrough: New Treatment Shows Promise",
      source: "Medical Journal",
      platform: "YouTube",
      verifiedBy: "WHO, Medical Experts",
      date: "12 hours ago",
      engagement: "102K",
      category: "Health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Economic Recovery Shows Strong Signs Across Markets",
      source: "Financial Times",
      platform: "Twitter/X",
      verifiedBy: "Bloomberg, CNBC",
      date: "1 day ago",
      engagement: "78K",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "Education Reform Bill Passes with Bipartisan Support",
      source: "News Agency",
      platform: "Instagram",
      verifiedBy: "AP, PTI",
      date: "1 day ago",
      engagement: "54K",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Government: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      Environment: "bg-green-500/10 text-green-600 border-green-500/20",
      Technology: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      Health: "bg-red-500/10 text-red-600 border-red-500/20",
      Economy: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      Education: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-semibold">Verified & Trending</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trending Verified Feed
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest verified news from trusted sources
            </p>
          </div>

          {/* Trending News Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {trendingNews.map((news, idx) => (
              <Card
                key={news.id}
                className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${getCategoryColor(news.category)} border`}
                  >
                    {news.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-semibold text-success">Verified</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {news.platform}
                      </Badge>
                      <span>•</span>
                      <span>{news.source}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs">Verified by: {news.verifiedBy}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{news.engagement} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingFeed;
