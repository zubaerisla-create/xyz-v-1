import Projects from "@/components/Projects/Projects";
import LatestProjectOverView from "@/components/LatestProjectsOverView/LatestProjectOverView";

export const metadata = {
  title: "Projects Portfolio | Abdullah Al Zubaer",
  description: "Browse featured web applications, commercial platforms, and Android/iOS mobile apps engineered by Abdullah Al Zubaer.",
};

export default function ProjectsRoute() {
  return (
    <div className="pt-4 pb-12 min-h-screen bg-[#f5f4f0] dark:bg-slate-900">
      <Projects />
      <LatestProjectOverView />
    </div>
  );
}
