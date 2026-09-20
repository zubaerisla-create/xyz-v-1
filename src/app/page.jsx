import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import LatestProjectOverView from "@/components/LatestProjectsOverView/LatestProjectOverView";
import Experience from "@/components/Experience/Experience";
import Services from "@/components/Services/Services";
import ArticlesOverview from "@/components/ArticlesOverview/ArticlesOverview";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <main>
      <div>
        <Banner className="text-gray-700 dark:text-gray-100" />
        <About />
        <Projects />
        <LatestProjectOverView />
        <Experience />
        <Services />
        <ArticlesOverview />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
