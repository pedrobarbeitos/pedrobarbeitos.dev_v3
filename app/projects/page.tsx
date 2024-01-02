"use client";
import Footer from "@/components/Footer";
import P01 from "/public/pgsf.png";
import ProjectCard from "@/components/ProjectCard";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Projects() {
  return (
    <main className=" grow flex w-full flex-col items-center ">
      <section className="relative flex grow flex-col items-center w-full max-w-3xl">
        <motion.p
          className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-8 pb-20"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my
          passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of
          my web development adventures. Each project is a byte-sized glimpse
          into my passion for blending technology, architecture, history, and
          creativity!
        </motion.p>

        <ProjectCard
          projectImage={P01}
          projectTitle="Curated film collection"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of my web development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="Architecture practice website"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of my web development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="My record collection"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of my web development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="Pedro's GPT"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of my web development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="The Temples Project"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of my web development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
        />
        <ProjectCard
          projectImage={P01}
          projectTitle="The Temples API"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of my web development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
        />
      </section>
      <Footer />
    </main>
  );
}
