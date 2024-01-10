"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TmdbFilm from "../app/models/TmdbFilm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SelectFilter } from "@/components/SelectFilter";
import { SearchInput } from "@/components/SearchInput";
import { ButtonIconInvert } from "./ButtonIconInvert";
import { motion, useInView, useAnimation } from "framer-motion";

interface props {
  films: TmdbFilm[];
}

export default function FilmGallery(props: props) {
  const [films, setFilms] = useState<TmdbFilm[]>([]);
  const [search, setSearch] = useState("");
  const [searchedFilms, setSearchedFilms] = useState<TmdbFilm[]>([]);

  useEffect(() => {
    setFilms(props.films);
    setSearchedFilms(props.films);
  }, [props.films]);

  useEffect(() => {
    const updatedSearchedFilms = films.filter((film) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedFilms(updatedSearchedFilms);
  }, [films, search]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="flex flex-wrap justify-center w-full  mb-8 leading-none"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.85, delay: 0.1 }}
    >
      <div className="flex flex-col items-center max-w-3xl justify-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0  ">
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
      <div className="flex justify-center w-full pb-8 pt-4 gap-3">
        <ButtonIconInvert
          searchedFilms={searchedFilms}
          setSearchedFilms={setSearchedFilms}
        />
        <SelectFilter
          searchedFilms={searchedFilms}
          setSearchedFilms={setSearchedFilms}
          films={films}
        />
        <SearchInput setSearch={setSearch} />
      </div>
      <motion.div
        layout
        className="flex flex-wrap justify-center w-full gap-3 mb-8 leading-none"
      >
        {films.length === 0
          ? Array(50)
              .fill(null)
              .map((_, i) => <Skeleton key={i} width={150} height={225} />)
          : searchedFilms.map((film) => (
              <motion.div key={film.id} layout>
                <Link href={"/projects/film-collection/" + film.id}>
                  <Image
                    className="grayscale-[50%] hover:grayscale-0 "
                    src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
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
