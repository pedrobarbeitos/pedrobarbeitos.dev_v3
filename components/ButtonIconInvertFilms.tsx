import React, { useState, Dispatch, SetStateAction } from "react";
import TmdbFilm from "../app/models/TmdbFilm";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useAppContext } from "@/lib/AppContext";

export function ButtonIconInvertFilms() {
  const { searchedFilms, setSearchedFilms } = useAppContext();
  const [isAscending, setIsAscending] = useState(true);

  const swapOrder = () => {
    const swappedFilms = searchedFilms.slice().reverse();
    setSearchedFilms(swappedFilms);

    setIsAscending(!isAscending);
  };

  return (
    <Button variant="outline" size="icon" onClick={swapOrder} asChild>
      <div>
        {isAscending ? (
          <ArrowDown className="h-4 w-4" />
        ) : (
          <ArrowUp className="h-4 w-4" />
        )}
      </div>
    </Button>
  );
}
