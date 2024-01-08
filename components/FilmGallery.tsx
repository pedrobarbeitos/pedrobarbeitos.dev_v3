"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TmdbFilm from "../app/models/TmdbFilm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SelectFilter } from "@/components/SelectFilter";
import { SearchInput } from "@/components/SearchInput";

interface props {
  films: TmdbFilm[];
}

export default function FilmGallery(props: props) {
  const [films, setFilms] = useState<TmdbFilm[]>([]);

  useEffect(() => {
    setFilms(props.films);
  }, [props.films]);

  return (
    <section className="flex flex-wrap justify-center w-full gap-3 mb-8 leading-none">
      <div className="flex grow flex-col items-center max-w-3xl">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0 ">
          Curated film collection
        </h4>
        <p className="text-sm text-muted-foreground pb-2">
          Data provided by{" "}
          <Link
            href="https://developer.themoviedb.org/reference/intro/getting-started"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </Link>
        </p>
      </div>
      <div className="flex justify-center w-full py-4 gap-3">
        <SelectFilter />
        <SearchInput />
      </div>
      {films.length === 0
        ? Array(50)
            .fill(null)
            .map((_, i) => <Skeleton key={i} width={150} height={225} />)
        : films.map((film) => (
            <Link href={"/projects/film-collection/" + film.id} key={film.id}>
              <Image
                className="grayscale-[50%] hover:grayscale-0 "
                src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                alt={film.title}
                width={150}
                height={225}
                priority
              />
            </Link>
          ))}
    </section>
  );
}
