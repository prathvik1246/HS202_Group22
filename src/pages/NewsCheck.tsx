import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle2, AlertCircle, Loader2, Bell } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";

type AnalysisStep = {
  id: number;
  text: string;
  icon: React.ReactNode;
  status: "pending" | "loading" | "complete";
};

type NotificationItem = {
  id: number;
  platform: string;
  timestamp: string;
  status: "processing" | "completed";
};

const NewsCheck = () => {
  const [platform, setPlatform] = useState("");
  const [fileName, setFileName] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const analysisSteps: AnalysisStep[] = [
    { id: 1, text: "Detecting Labels in the image...", icon: <Loader2 className="h-5 w-5 animate-spin" />, status: "pending" },
    { id: 2, text: "Analysing the Labels...", icon: <Loader2 className="h-5 w-5 animate-spin" />, status: "pending" },
    { id: 3, text: "Checking the Source...", icon: <Loader2 className="h-5 w-5 animate-spin" />, status: "pending" },
  ];

  const [steps, setSteps] = useState(analysisSteps);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      toast.success("Screenshot uploaded successfully!");
    }
  };

  const handleAnalysis = async () => {
    if (!platform || !fileName) {
      toast.error("Please select a platform and upload a screenshot");
      return;
    }

    setIsAnalyzing(true);
    setShowResults(false);
    setCurrentStep(0);

    // Reset steps
    setSteps(analysisSteps);

    // Simulate multi-step analysis
    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentStep(i);
      
      // Update current step to loading
      setSteps((prev) =>
        prev.map((step, idx) => ({
          ...step,
          status: idx === i ? "loading" : idx < i ? "complete" : "pending",
        }))
      );

      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Update current step to complete
      setSteps((prev) =>
        prev.map((step, idx) => ({
          ...step,
          status: idx <= i ? "complete" : "pending",
        }))
      );
    }

    // Add to notifications
    const newNotification: NotificationItem = {
      id: Date.now(),
      platform,
      timestamp: new Date().toLocaleString(),
      status: "completed",
    };
    setNotifications((prev) => [newNotification, ...prev]);

    setIsAnalyzing(false);
    setShowResults(true);
    toast.success("Analysis complete! Report sent to PIB.");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Verify News Authenticity
            </h1>
            <p className="text-muted-foreground text-lg">
              Upload a screenshot from social media and let AI detect misinformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Analysis Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 hover:border-primary/50 transition-colors animate-slide-up">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="platform" className="text-base font-semibold">
                      Select Social Media Platform
                    </Label>
                    <Select value={platform} onValueChange={setPlatform}>
                      <SelectTrigger id="platform" className="w-full">
                        <SelectValue placeholder="Choose a platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="x">X (Twitter)</SelectItem>
                        <SelectItem value="tv">TV</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="screenshot" className="text-base font-semibold">
                      Upload Screenshot
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="screenshot"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="screenshot" className="cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          {fileName || "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                      </label>
                    </div>
                  </div>

                  <Button
                    onClick={handleAnalysis}
                    disabled={isAnalyzing || !platform || !fileName}
                    className="w-full text-lg py-6"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Check the News"
                    )}
                  </Button>

                  {/* Analysis Progress */}
                  {isAnalyzing && (
                    <div className="space-y-4 mt-8 animate-fade-in">
                      {steps.map((step, idx) => (
                        <div
                          key={step.id}
                          className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
                            step.status === "loading"
                              ? "bg-accent/20 border-2 border-accent"
                              : step.status === "complete"
                              ? "bg-success/10 border border-success/30"
                              : "bg-muted/30"
                          }`}
                        >
                          {step.status === "complete" ? (
                            <CheckCircle2 className="h-5 w-5 text-success" />
                          ) : (
                            step.icon
                          )}
                          <span className="font-medium">{step.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Results */}
                  {showResults && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-success/10 to-accent/10 rounded-lg border-2 border-success/30 animate-fade-in">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-success mt-1" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Analysis Complete!</h3>
                          <p className="text-sm text-muted-foreground">
                            We have extracted the information and sent a detailed report to PIB
                            (Press Information Bureau). Results will be available in the Notifications
                            section.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Notifications Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Bell className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Notifications</h2>
                  </div>

                  {notifications.length === 0 ? (
                    <div className="text-center py-8">
                      <AlertCircle className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        No notifications yet. Start analyzing posts to see results here.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-semibold text-sm capitalize">{notif.platform}</span>
                            <span className="text-xs px-2 py-1 bg-success/20 text-success rounded-full">
                              {notif.status}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{notif.timestamp}</p>
                          <p className="text-sm mt-2">Report sent to PIB for verification</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCheck;
