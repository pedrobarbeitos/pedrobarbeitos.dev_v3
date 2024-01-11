import Image from "next/image";
import TmdbFilm from "../../../models/TmdbFilm";
import FilmCard from "@/components/FilmCard";

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
    <main className="flex w-full flex-col items-center">
      <FilmCard film={film} />
    </main>
  );
}
