"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function FilmCollection() {
  const initialPlaceholderFilms = Array(50)
    .fill({})
    .map((_, i) => ({
      id: i,
      title: "Loading...",
      poster_path: "/placeholder.jpg",
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
    <main className=" grow flex w-full flex-col items-center">
      <section className="flex grow">
        <div className="flex flex-wrap justify-center w-full gap-1">
          {films.map((film, i) => (
            <div key={i} className="">
              <div className="relative h-80 w-56">
                <Image
                  className=""
                  src={
                    loading
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUVFT6DwACNAFlD2DxwAAAAABJRU5ErkJggg=="
                      : "https://image.tmdb.org/t/p/w500" + film.poster_path
                  }
                  alt={film.title}
                  width={200}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8ff78fwAIgAN6RKyS3QAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
