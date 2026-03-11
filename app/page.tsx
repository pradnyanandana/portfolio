import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import { getProjects } from "@/lib/db/projects";

export default async function Home() {
  // Fetch projects server-side from DB (simulating DB query)
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <About />
      <Service />
      <Project initialProjects={projects} />
      <Contact />
    </>
  );
}
