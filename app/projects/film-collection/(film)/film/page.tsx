"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TmdbFilm from "../../../../models/TmdbFilm";

type Props = {
  searchParams: { id: string };
};

export default function Film({ searchParams }: Props) {
  const [error, setError] = useState(null);
  const [film, setFilm] = useState<TmdbFilm>();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchFilmInfo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${searchParams.id}?language=en-US`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFilm(data);
        console.log(data);
      } catch (error: any) {
        setError(error);
        return;
      }
    };
    fetchFilmInfo();
  }, []);

  if (film) {
    return (
      <main className="  flex w-full flex-col items-center">
        <section className="flex flex-col items-center max-w-2xl justify-center">
          <Image
            className="grayscale-[50%]"
            src={"https://image.tmdb.org/t/p/w1280" + film.backdrop_path}
            alt={film.title}
            width={1280}
            height={800}
            priority
          />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-4 pb-0">
            {film.title}
          </h4>
          <p className="leading-6 text-sm [&:not(:first-child)]:mt-0  pt-2 pb-4">
            {film.overview}
          </p>
        </section>
      </main>
    );
  }
}
