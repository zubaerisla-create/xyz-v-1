import Experience from "@/components/Experience/Experience";

export const metadata = {
  title: "Experience | Abdullah Al Zubaer",
  description: "Explore Abdullah Al Zubaer's professional experience, companies, roles, and technical contributions.",
};

export default function ExperienceRoute() {
  return (
    <div className="pt-4 pb-12 min-h-screen bg-[#f5f4f0] dark:bg-slate-900">
      <Experience />
    </div>
  );
}
