"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TmdbFilm from "../app/models/TmdbFilm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SelectFilter } from "@/components/SelectFilterFilms";
import { SearchInput } from "@/components/SearchInput";
import { ButtonIconInvertFilms } from "./ButtonIconInvertFilms";
import { motion } from "framer-motion";
import { useAppContext } from "@/lib/AppContext";

interface props {
  films: TmdbFilm[];
}

export default function FilmGallery(props: props) {
  const { searchedFilms, setSearchedFilms } = useAppContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchedFilms.length === 0) {
      setSearchedFilms(props.films);
    }
  }, [props.films, searchedFilms, setSearchedFilms]);

  const updatedSearchedFilms = searchedFilms.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(searchedFilms);

  return (
    <motion.section
      className="flex flex-wrap justify-center w-full mb-8 leading-none"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.85, delay: 0.1 }}
    >
      <div className="flex flex-col items-center max-w-3xl justify-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0">
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
      <div className="flex justify-center w-full pb-8 pt-4 gap-1 sm:gap-3">
        <ButtonIconInvertFilms />
        <SelectFilter originalFilms={props.films} />
        <SearchInput setSearch={setSearch} />
      </div>
      <motion.div
        layout
        className="flex flex-wrap justify-center w-[1100px] gap-3 mb-8 leading-none"
      >
        {updatedSearchedFilms.length === 0 && search.length === 0
          ? Array(50)
              .fill(null)
              .map((_, i) => <Skeleton key={i} width={150} height={225} />)
          : updatedSearchedFilms.map((film) => (
              <motion.div key={film.id} layout>
                <Link href={`/projects/film-collection/${film.id}`}>
                  <Image
                    className="grayscale-[50%] hover:grayscale-0"
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title}
                    width={150}
                    height={225}
                    priority
                  />
                </Link>
              </motion.div>
            ))}
      </motion.div>
    </motion.section>
  );
}
