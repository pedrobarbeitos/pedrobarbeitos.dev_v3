import film_collection_01 from "/public/film_collection_01.jpg";
import film_collection_02 from "/public/film_collection_02.jpg";
import architecture_practice_01 from "/public/architecture_practice_01.jpg";
import architecture_practice_02 from "/public/architecture_practice_02.jpg";
import temples_01 from "/public/temples_01.jpg";
import temples_02 from "/public/temples_02.jpg";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <main className=" grow flex w-full flex-col items-center snap-y snap-mandatory ">
      <section className="relative flex grow flex-col items-center w-full max-w-2xl pt-10 ">
        <ProjectCard
          projectImage_01={film_collection_01}
          projectImage_02={film_collection_02}
          projectTitle="My record collection"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity! Each project is a byte-sized glimpse into my passion for blending technology."
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage_01={architecture_practice_01}
          projectImage_02={architecture_practice_02}
          projectTitle="Architecture practice website"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and creativity! Each project is a byte-sized glimpse into my passion for blending technology."
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="In development"
        />

        <ProjectCard
          projectImage_01={film_collection_01}
          projectImage_02={film_collection_02}
          projectTitle="Curated film collection"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity! "
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage_01={temples_01}
          projectImage_02={temples_02}
          projectTitle="The Temples project"
          projectDesc="Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my passion for blending technology, architecture, history, and
          creativity!"
          projectTech={["React", "NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="/projects/film-collection"
          projectStatus="In development"
        />
      </section>
    </main>
  );
}
