import React, { Suspense, lazy } from "react";
import Banner from "../../components/Banner/Banner";

// Lazy load below-the-fold sections for faster initial paint
const About = lazy(() => import("../../components/About/About"));
const Experience = lazy(() => import("../../components/Experience/Experience"));
const Projects = lazy(() => import("../../components/Projects/Projects"));
const LatestProjectOverView = lazy(() => import("../../components/LatestProjectsOverView/LatestProjectOverView"));
const Education = lazy(() => import("../../components/Education/Education"));
const Services = lazy(() => import("../../components/Services/Services"));
const Contact = lazy(() => import("../../components/Contact/Contact"));

// Lightweight skeleton shown while lazy sections load
const SectionSkeleton = () => (
  <div className="w-full py-20 px-4 animate-pulse bg-[#f5f4f0]">
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="h-8 w-48 mx-auto rounded-full bg-gray-200" />
      <div className="h-4 w-96 mx-auto rounded-full bg-gray-200" />
      <div className="h-4 w-80 mx-auto rounded-full bg-gray-200" />
    </div>
  </div>
);

const Home = () => {
  return (
    <main>
      <div>
        {/* Banner loads immediately (above the fold) */}
        <Banner className="text-gray-700 dark:text-gray-100" />

        {/* Everything below the fold loads lazily */}
        <Suspense fallback={<SectionSkeleton />}>
          <About className="text-gray-900 dark:text-gray-100" />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <LatestProjectOverView />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;