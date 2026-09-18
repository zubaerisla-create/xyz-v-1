"use client";
import ProjectsDetails from "@/views/ProjectsDetails/ProjectsDetails";

export default function Page({ params }) {
  return <ProjectsDetails id={params?.id} />;
}
