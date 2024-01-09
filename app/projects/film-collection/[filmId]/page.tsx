import Image from "next/image";
import TmdbFilm from "../../../models/TmdbFilm";
import { ButtonIcon } from "@/components/ButtonIcon";
import { motion, useInView, useAnimation } from "framer-motion";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

type Props = {
  params: { filmId: string };
};

async function getData(filmId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?language=en-US`,
    options
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Film({ params }: Props) {
  const filmID = params.filmId;
  const film: TmdbFilm = await getData(filmID);

  return (
    <main className="  flex w-full flex-col items-center">
      <section className="flex flex-col items-center max-w-2xl justify-center">
        <Image
          className="grayscale-[50%]"
          src={"https://image.tmdb.org/t/p/w1280" + film.backdrop_path}
          alt={film.title}
          width={672}
          height={378}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPM+gkAAdMBZdytAagAAAAASUVORK5CYII="
          priority
        />

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0">
          {film.title}
        </h4>
        <p className="text-sm text-muted-foreground pb-2">{film.tagline}</p>
        <p className="leading-6 text-sm [&:not(:first-child)]:mt-0  pt-2 pb-4">
          {film.overview}
        </p>
        <ButtonIcon />
      </section>
    </main>
  );
}
