import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Services from "@/components/Services/Services";

export const metadata = {
  title: "About Me | Abdullah Al Zubaer",
  description: "Learn about Abdullah Al Zubaer's background, education, software engineering passion, and technical skills.",
};

export default function AboutRoute() {
  return (
    <div className="pt-4 pb-12">
      <About />
      <Education />
      <Services />
    </div>
  );
}
