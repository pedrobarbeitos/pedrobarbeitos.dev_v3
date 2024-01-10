"use client"; // Because we're inside a server component
import React, { createContext, useState, useContext } from "react";
import TmdbFilm from "@/app/models/TmdbFilm";

interface AppContextType {
  searchedFilms: TmdbFilm[];
  setSearchedFilms: React.Dispatch<React.SetStateAction<TmdbFilm[]>>;
}
// Create the context
const AppContext = createContext<AppContextType>({
  searchedFilms: [],
  setSearchedFilms: () => {}, // Empty function as a placeholder
});
// Create a provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchedFilms, setSearchedFilms] = useState<TmdbFilm[]>([]);
  // Define any functions or values you want to provide
  const value = {
    searchedFilms,
    setSearchedFilms,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// Export the context
export const useAppContext = () => useContext(AppContext);
