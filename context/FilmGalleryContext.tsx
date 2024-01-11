import React, { createContext, useState, ReactNode } from "react";
import TmdbFilm from "@/app/models/TmdbFilm";

interface FilmGalleryContextProps {
  searchedFilms: TmdbFilm[];
  setSearchedFilms: React.Dispatch<React.SetStateAction<TmdbFilm[]>>;
  scrollPosition: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

export const FilmGalleryContext = createContext<FilmGalleryContextProps>({
  searchedFilms: [],
  setSearchedFilms: () => {},
  scrollPosition: 0,
  setScrollPosition: () => {},
});

export const FilmGalleryProvider = ({ children }: { children: ReactNode }) => {
  const [searchedFilms, setSearchedFilms] = useState<TmdbFilm[]>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  return (
    <FilmGalleryContext.Provider
      value={{
        searchedFilms,
        setSearchedFilms,
        scrollPosition,
        setScrollPosition,
      }}
    >
      {children}
    </FilmGalleryContext.Provider>
  );
};
