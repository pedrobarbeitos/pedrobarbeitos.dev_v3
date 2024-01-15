import record_collection_01 from "/public/record_collection_01.jpg";
import record_collection_02 from "/public/record_collection_02.jpg";
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
          projectImage_01={record_collection_01}
          projectImage_02={record_collection_02}
          projectTitle="My record collection"
          projectDesc="Explore my record collection! Using the Discogs API and Apple Music this project offers a digital window into my musical world, allowing you to discover and listen to my collection in a modern, interactive way. Flip through the records and hit play to listen."
          projectTech={["NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/record-collection"
          projectGitLink="https://github.com/pedrobarbeitos/pedrobarbeitos.dev_v3/tree/main/app/projects/record-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage_01={architecture_practice_01}
          projectImage_02={architecture_practice_02}
          projectTitle="Architecture practice website"
          projectDesc="A digital portfolio for a London based architectural practice, showcasing latest projects and reflecting their commitment to exceptional design. With a user-friendly layout, visitors can effortlessly navigate through most recent works, gaining insights into their unique architectural approach."
          projectTech={["NextJs", "TypeScript", "Sass", "Resend", "CPanel"]}
          projectLink="https://www.pgsfarchitects.com"
          projectGitLink="https://github.com/pedrobarbeitos/pgsfwebsite_v2"
          projectStatus="Live"
        />

        <ProjectCard
          projectImage_01={film_collection_01}
          projectImage_02={film_collection_02}
          projectTitle="Curated film collection"
          projectDesc="Dive into a carefully curated collection of films, constantly updated and maintained. With this selection, you'll never struggle to find a great film for your Friday nights. Explore, discover, and enjoy cinematic gems, all in one user-friendly and dynamic interface. "
          projectTech={["NextJs", "TypeScript", "Tailwind", "Vercel"]}
          projectLink="/projects/film-collection"
          projectGitLink="https://github.com/pedrobarbeitos/pedrobarbeitos.dev_v3/tree/main/app/projects/film-collection"
          projectStatus="Live"
        />
        <ProjectCard
          projectImage_01={temples_01}
          projectImage_02={temples_02}
          projectTitle="Temples"
          projectDesc="This ongoing project showcases all known ancient Greek temples. Inspired by a recent trip to Greece, this endeavor features a meticulously crafted database and REST API, providing access to detailed information about these architectural marvels. "
          projectTech={["Express", "MongoDB", "NextJs", "TypeScript", "AWS"]}
          projectLink="https://temples-livid.vercel.app"
          projectGitLink="https://github.com/pedrobarbeitos/Temples"
          projectStatus="In development"
        />
      </section>
    </main>
  );
}
