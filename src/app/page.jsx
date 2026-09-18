import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import LatestProjectOverView from "@/components/LatestProjectsOverView/LatestProjectOverView";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <main>
      <div>
        <Banner className="text-gray-700 dark:text-gray-100" />
        <About />
        <Experience />
        <Projects />
        <Education />
        <LatestProjectOverView />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
