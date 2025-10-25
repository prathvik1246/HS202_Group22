import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const ReportFake = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    platform: "",
    sourceName: "",
    profileUrl: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission
    setSubmitted(true);
    toast({
      title: "Report Submitted Successfully",
      description: "Our team will review this report within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        platform: "",
        sourceName: "",
        profileUrl: "",
        description: "",
      });
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm font-semibold">Report Misinformation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Report Fake News
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us combat misinformation by reporting suspicious content
            </p>
          </div>

          {/* Report Form */}
          <Card className="border-2 animate-slide-up">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6">
                    <CheckCircle className="h-10 w-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Report Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for helping us fight misinformation. We'll review your report shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Platform Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="platform" className="text-base font-semibold">
                      Platform *
                    </Label>
                    <Select
                      value={formData.platform}
                      onValueChange={(value) =>
                        setFormData({ ...formData, platform: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select social media platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="twitter">Twitter/X</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="telegram">Telegram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Source Name */}
                  <div className="space-y-2">
                    <Label htmlFor="sourceName" className="text-base font-semibold">
                      Source Name *
                    </Label>
                    <Input
                      id="sourceName"
                      placeholder="Name of the account or page"
                      value={formData.sourceName}
                      onChange={(e) =>
                        setFormData({ ...formData, sourceName: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Profile URL */}
                  <div className="space-y-2">
                    <Label htmlFor="profileUrl" className="text-base font-semibold">
                      Profile/Post URL *
                    </Label>
                    <Input
                      id="profileUrl"
                      type="url"
                      placeholder="https://example.com/post/12345"
                      value={formData.profileUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, profileUrl: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base font-semibold">
                      Why is this post incorrect? *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Provide detailed information about why you believe this post contains misinformation. Include any facts or sources that contradict the claim..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                      className="min-h-[150px] resize-none"
                    />
                    <p className="text-sm text-muted-foreground">
                      Be specific and provide evidence if possible
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Submit Report
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 animate-fade-in">
            <Card className="border bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <p className="text-sm text-muted-foreground">Average Review Time</p>
              </CardContent>
            </Card>
            <Card className="border bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Report Accuracy</p>
              </CardContent>
            </Card>
            <Card className="border bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Reports Processed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportFake;
