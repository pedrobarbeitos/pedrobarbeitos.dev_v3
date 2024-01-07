"use client";

import P01 from "/public/pgsf.png";
import ProjectCard from "@/components/ProjectCard";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Projects() {
  return (
    <main className=" grow flex w-full flex-col items-center snap-y snap-mandatory ">
      <section className="relative flex grow flex-col items-center w-full max-w-2xl ">
        <ProjectCard
          projectImage={P01}
          projectTitle="Curated film collection"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="Architecture practice website"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="In development"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="My record collection"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="Pedro's GPT"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! "
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="The Temples Project"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! "
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="Live"
        />
      </section>
    </main>
  );
}
