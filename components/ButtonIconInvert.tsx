import React, { useState, Dispatch, SetStateAction } from "react";
import TmdbFilm from "../app/models/TmdbFilm";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

type OrderProps = {
  searchedFilms: TmdbFilm[];
  setSearchedFilms: Dispatch<SetStateAction<TmdbFilm[]>>;
};

export function ButtonIconInvert(props: OrderProps) {
  const [isAscending, setIsAscending] = useState(true);

  const swapOrder = () => {
    const swappedFilms = props.searchedFilms.slice().reverse();
    props.setSearchedFilms(swappedFilms);

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
