import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, ChevronRight, Lock } from "lucide-react";
import { getEconomicsChapterById } from "@/data/economicsData";

const EconomicsSections = () => {
  const navigate = useNavigate();
  const { chapterId } = useParams();

  const chapter = getEconomicsChapterById(chapterId || "");

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
          <Button onClick={() => navigate("/economics/chapters")}>
            Back to Chapters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-500/5 to-teal-500/5">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/economics/chapters")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Chapters
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl">
              {chapter.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{chapter.title}</h1>
              <p className="text-muted-foreground">{chapter.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {chapter.modules.map((module) => (
            <Card key={module.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>
                  <Badge
                    variant={module.status === "ready" ? "default" : "secondary"}
                    className={module.status === "ready" ? "bg-emerald-500" : ""}
                  >
                    {module.status === "ready" ? "Ready" : "Coming Soon"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid gap-3">
                  {module.subsections.map((subsection) => (
                    <div
                      key={subsection.id}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        module.status === "ready"
                          ? "hover:bg-emerald-500/5 hover:border-emerald-500/30 cursor-pointer"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => {
                        if (module.status === "ready") {
                          navigate(`/economics/topic/${chapter.id}/${module.id}/${subsection.id}`);
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          {module.status === "ready" ? (
                            <BookOpen className="h-4 w-4 text-emerald-600" />
                          ) : (
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <span className="font-medium">{subsection.title}</span>
                      </div>
                      {module.status === "ready" && (
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EconomicsSections;
