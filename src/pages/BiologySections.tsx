import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Lock } from "lucide-react";
import { biologyData } from "@/data/biologyData";

const BiologySections = () => {
  const navigate = useNavigate();
  const { chapterId } = useParams();

  // Find the chapter data based on chapterId
  const chapter = biologyData.find(t => t.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Chapter not found</h1>
          <Button onClick={() => navigate("/biology")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Biology
          </Button>
        </div>
      </div>
    );
  }

  const handleSubsectionClick = (subsectionId: string) => {
    navigate(`/biology/${chapterId}/${subsectionId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate("/biology")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{chapter.title}</h1>
            <p className="text-muted-foreground">Select a topic to study</p>
          </div>
        </div>

        {/* Subsections Grid */}
        {chapter.status === "ready" && chapter.subsections.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chapter.subsections.map((subsection, index) => (
              <Card 
                key={subsection.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-l-4 border-l-emerald-500"
                onClick={() => handleSubsectionClick(subsection.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">{subsection.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      {subsection.practice_items.length} Q
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>Study Group {subsection.study_group || index + 1}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <Lock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h2>
            <p className="text-muted-foreground">This chapter is still being developed. Check back soon!</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BiologySections;
