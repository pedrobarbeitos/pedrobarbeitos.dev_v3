"use client"; // Because we're inside a server component
import React, { createContext, useState, useContext } from "react";
import TmdbFilm from "@/app/models/TmdbFilm";
import DiscogRecord from "@/app/models/DiscogRecord";

interface AppContextType {
  searchedFilms: TmdbFilm[];
  setSearchedFilms: React.Dispatch<React.SetStateAction<TmdbFilm[]>>;
  searchedRecords: DiscogRecord[];
  setSearchedRecords: React.Dispatch<React.SetStateAction<DiscogRecord[]>>;
}
// Create the context
const AppContext = createContext<AppContextType>({
  searchedFilms: [],
  setSearchedFilms: () => {},
  searchedRecords: [],
  setSearchedRecords: () => {},
});
// Create a provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchedFilms, setSearchedFilms] = useState<TmdbFilm[]>([]);
  const [searchedRecords, setSearchedRecords] = useState<DiscogRecord[]>([]);

  // Define any functions or values you want to provide
  const value = {
    searchedFilms,
    setSearchedFilms,
    searchedRecords,
    setSearchedRecords,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// Export the context
export const useAppContext = () => useContext(AppContext);
