import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Lock, Dna } from "lucide-react";
import { biologyData } from "@/data/biologyData";

const BiologyDashboard = () => {
  const navigate = useNavigate();

  const chapters = [
    {
      id: "cell-biology",
      title: "Cell Biology",
      description: "Cell structure, division, and stem cells",
      icon: Dna,
      color: "from-emerald-500 to-teal-600",
      modules: biologyData,
      available: true
    }
  ];

  const handleChapterClick = (chapter: typeof chapters[0]) => {
    if (chapter.available) {
      // Navigate to first module (Cell Structure)
      navigate(`/biology/cell-structure`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate("/subjects")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Subjects
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Biology</h1>
            <p className="text-muted-foreground">GCSE AQA Biology</p>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => {
            const Icon = chapter.icon;
            return (
              <Card 
                key={chapter.id}
                className={`cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] overflow-hidden ${!chapter.available ? 'opacity-60' : ''}`}
                onClick={() => handleChapterClick(chapter)}
              >
                <div className={`h-2 bg-gradient-to-r ${chapter.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${chapter.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {!chapter.available && (
                      <Badge variant="secondary">
                        <Lock className="h-3 w-3 mr-1" />
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4">{chapter.title}</CardTitle>
                  <CardDescription>{chapter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {chapter.modules.slice(0, 3).map((module) => (
                      <div key={module.id} className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className={module.status === "ready" ? "text-foreground" : "text-muted-foreground"}>
                          {module.title}
                        </span>
                        {module.status === "coming_soon" && (
                          <Badge variant="outline" className="text-xs">Soon</Badge>
                        )}
                      </div>
                    ))}
                    {chapter.modules.length > 3 && (
                      <p className="text-xs text-muted-foreground">
                        + {chapter.modules.length - 3} more modules
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BiologyDashboard;
