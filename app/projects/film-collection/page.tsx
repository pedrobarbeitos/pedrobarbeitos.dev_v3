"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { SelectFilter } from "@/components/SelectFilter";
import { SearchInput } from "@/components/SearchInput";

export default function FilmCollection() {
  const initialPlaceholderFilms = Array(50)
    .fill({})
    .map((_, i) => ({
      id: i,
      title: "Loading...",
      poster_path: "url",
    }));
  const [films, setFilms] = useState(initialPlaceholderFilms);
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
        const data = await response.json();
        return data.items;
      } catch (error: any) {
        setError(error);
        return;
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
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
          Film Collection
        </h4>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-center">
          Dive into my "Film Collection" built with data provided by the TMDB
          API. This project is a quirky crossroad of technology and my eclectic
          film taste. From sci-fi marvels to heart-wrenching dramas, it's a
          window into my cinematic soul. You might just find your next favorite
          film, or at least question my sense of taste!
        </p>
      </div>
      <div className="flex justify-center w-full py-10 gap-3">
        <SelectFilter />
        <SearchInput />
      </div>
      <section
        className="flex flex-wrap justify-center w-full gap-3
    "
      >
        {films.map((film, i) => (
          <div key={i} className="">
            <div className="relative h-56 w-36 overflow-hidden">
              <Image
                className="grayscale-[50%] hover:grayscale-0"
                src={
                  loading
                    ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mPU+8+o9x8ABkwCXfvPaFcAAAAASUVORK5CYII="
                    : "https://image.tmdb.org/t/p/w500" + film.poster_path
                }
                alt={film.title}
                width={176}
                height={264}
              />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
