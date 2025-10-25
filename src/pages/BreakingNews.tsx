import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, ThumbsUp, ThumbsDown, Clock, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

interface NewsItem {
  id: number;
  title: string;
  source: string;
  platform: string;
  time: string;
  description: string;
  trueVotes: number;
  fakeVotes: number;
  image: string;
}

const BreakingNews = () => {
  const { toast } = useToast();
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Major Tech Company Announces Breakthrough in Quantum Computing",
      source: "Tech News Daily",
      platform: "Twitter/X",
      time: "15 minutes ago",
      description: "Company claims to have achieved quantum supremacy with new processor design.",
      trueVotes: 0,
      fakeVotes: 0,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Government to Implement New Digital Currency Policy",
      source: "Financial Express",
      platform: "Facebook",
      time: "32 minutes ago",
      description: "Sources suggest major policy shift in cryptocurrency regulation coming next month.",
      trueVotes: 0,
      fakeVotes: 0,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Scientists Discover Potential Cure for Common Disease",
      source: "Medical Journal",
      platform: "LinkedIn",
      time: "1 hour ago",
      description: "Preliminary research shows promising results in clinical trials.",
      trueVotes: 0,
      fakeVotes: 0,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "International Summit Reaches Climate Agreement",
      source: "Global News Network",
      platform: "YouTube",
      time: "2 hours ago",
      description: "World leaders commit to new emission targets, details yet to be confirmed.",
      trueVotes: 0,
      fakeVotes: 0,
      image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b0?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Space Agency Plans Mission to Distant Planet",
      source: "Space Today",
      platform: "Instagram",
      time: "3 hours ago",
      description: "Ambitious project aims to explore previously unreachable region of solar system.",
      trueVotes: 0,
      fakeVotes: 0,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
    },
  ]);

  const [userVotes, setUserVotes] = useState<Record<number, "true" | "fake" | null>>({});

  const handleVote = (newsId: number, voteType: "true" | "fake") => {
    const currentVote = userVotes[newsId];
    
    // If already voted the same way, remove vote
    if (currentVote === voteType) {
      setUserVotes({ ...userVotes, [newsId]: null });
      setNews(news.map(item => {
        if (item.id === newsId) {
          return {
            ...item,
            trueVotes: voteType === "true" ? item.trueVotes - 1 : item.trueVotes,
            fakeVotes: voteType === "fake" ? item.fakeVotes - 1 : item.fakeVotes,
          };
        }
        return item;
      }));
      toast({
        title: "Vote Removed",
        description: "Your vote has been removed.",
      });
      return;
    }

    // Update vote
    setUserVotes({ ...userVotes, [newsId]: voteType });
    setNews(news.map(item => {
      if (item.id === newsId) {
        let newTrueVotes = item.trueVotes;
        let newFakeVotes = item.fakeVotes;

        // Remove previous vote if exists
        if (currentVote === "true") newTrueVotes -= 1;
        if (currentVote === "fake") newFakeVotes -= 1;

        // Add new vote
        if (voteType === "true") newTrueVotes += 1;
        if (voteType === "fake") newFakeVotes += 1;

        return {
          ...item,
          trueVotes: newTrueVotes,
          fakeVotes: newFakeVotes,
        };
      }
      return item;
    }));

    toast({
      title: voteType === "true" ? "Voted True" : "Voted Fake",
      description: "Thank you for your contribution!",
    });
  };

  const getVotePercentage = (newsItem: NewsItem) => {
    const total = newsItem.trueVotes + newsItem.fakeVotes;
    if (total === 0) return { truePercent: 0, fakePercent: 0 };
    return {
      truePercent: Math.round((newsItem.trueVotes / total) * 100),
      fakePercent: Math.round((newsItem.fakeVotes / total) * 100),
    };
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4 animate-pulse">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-semibold">Live Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Breaking News
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest news yet to be verified. Help us determine authenticity by voting
            </p>
          </div>

          {/* Breaking News List */}
          <div className="space-y-6">
            {news.map((item, idx) => {
              const { truePercent, fakePercent } = getVotePercentage(item);
              const userVote = userVotes[item.id];

              return (
                <Card
                  key={item.id}
                  className="overflow-hidden border-2 hover:border-primary/30 transition-all animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground animate-pulse">
                        <Zap className="h-3 w-3 mr-1" />
                        Breaking
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {item.platform}
                          </Badge>
                          <span>•</span>
                          <span>{item.source}</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>

                        {/* Voting Section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <Button
                              variant={userVote === "true" ? "default" : "outline"}
                              size="lg"
                              onClick={() => handleVote(item.id, "true")}
                              className="flex-1 group"
                            >
                              <ThumbsUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                              True News
                              <Badge variant="secondary" className="ml-2">
                                {item.trueVotes}
                              </Badge>
                            </Button>
                            <Button
                              variant={userVote === "fake" ? "destructive" : "outline"}
                              size="lg"
                              onClick={() => handleVote(item.id, "fake")}
                              className="flex-1 group"
                            >
                              <ThumbsDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                              Fake News
                              <Badge variant="secondary" className="ml-2">
                                {item.fakeVotes}
                              </Badge>
                            </Button>
                          </div>

                          {/* Vote Results Bar */}
                          {(item.trueVotes + item.fakeVotes > 0) && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-success">True: {truePercent}%</span>
                                <span className="text-destructive">Fake: {fakePercent}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                                <div
                                  className="bg-success transition-all duration-500"
                                  style={{ width: `${truePercent}%` }}
                                />
                                <div
                                  className="bg-destructive transition-all duration-500"
                                  style={{ width: `${fakePercent}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Info Banner */}
          <Card className="mt-8 border-2 border-primary/20 bg-primary/5 animate-fade-in">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> These news items are unverified. Community voting helps identify authenticity. 
                Official verification will be provided once sources are confirmed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
