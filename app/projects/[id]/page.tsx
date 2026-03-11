import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, getProjects } from "@/lib/db/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";
import Contact from "@/components/sections/Contact";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: `${project.title} – ${project.techStacks}. ${project.timeline}.`,
    openGraph: {
      title: project.title,
      description: `${project.title} – ${project.techStacks}`,
      images: [
        {
          url: `/images/project/${project.id}/thumbnail.png`,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: `${project.title} – ${project.techStacks}`,
      images: [`/images/project/${project.id}/thumbnail.png`],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetail project={project} />
      <Contact />
    </>
  );
}
