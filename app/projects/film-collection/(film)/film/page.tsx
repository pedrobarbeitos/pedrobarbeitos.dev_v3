"use client";

import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <div>Film information</div>
      <div>{film ? film.overview : "Loading film data..."}</div>
    </div>
  );
}
