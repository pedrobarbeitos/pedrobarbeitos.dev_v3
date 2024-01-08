"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TmdbFilm from "../../models/TmdbFilm";
import TmdbResponse from "../../models/TmdbResponse";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { SelectFilter } from "@/components/SelectFilter";
import { SearchInput } from "@/components/SearchInput";

export default function FilmCollection() {
  const [films, setFilms] = useState<TmdbFilm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchFilms = async (page: number) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/list/8284424?language=en-US&page=${page}`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: TmdbResponse = await response.json();
        return data.items;
      } catch (error: any) {
        setError(error);
        return [];
      }
    };

    const fetchAllFilms = async () => {
      try {
        const [pageOne, pageTwo, pageThree] = await Promise.all([
          fetchFilms(1),
          fetchFilms(2),
          fetchFilms(3),
        ]);
        setFilms([...pageOne, ...pageTwo, ...pageThree]);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFilms();
  }, []);
  return (
    <main className=" grow flex w-full flex-col justify-center items-center">
      <div className="flex grow flex-col items-center max-w-3xl">
        <p className="leading-6 text-sm [&:not(:first-child)]:mt-6 text-center ">
          Dive into my Film Collection built with data provided by the TMDB API.
          This project is a quirky crossroad of technology and my eclectic film
          taste.
        </p>
      </div>
      <div className="flex justify-center w-full py-10 gap-3">
        <SelectFilter />
        <SearchInput />
      </div>
      <section className="flex flex-wrap justify-center w-full gap-3 mb-8 leading-none">
        {loading
          ? Array(50)
              .fill(null)
              .map((_, i) => <Skeleton key={i} width={100} height={150} />)
          : films.map((film) => (
              <Link href={"/projects/film-collection/" + film.id} key={film.id}>
                <Image
                  className="grayscale-[50%] hover:grayscale-0"
                  src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                  alt={film.title}
                  width={100}
                  height={150}
                />
              </Link>
            ))}
      </section>
    </main>
  );
}
