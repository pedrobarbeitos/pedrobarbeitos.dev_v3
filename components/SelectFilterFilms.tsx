import React, { Dispatch, SetStateAction } from "react";
import TmdbFilm from "../app/models/TmdbFilm";
import { useAppContext } from "@/lib/AppContext";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type props = {
  originalFilms: TmdbFilm[];
};

export function SelectFilter(props: props) {
  const { searchedFilms, setSearchedFilms } = useAppContext();
  const sortedByRating = searchedFilms.slice();
  sortedByRating.sort((a, b) => b.vote_average - a.vote_average);

  const sortedByRelease = searchedFilms.slice();
  sortedByRelease.sort(
    (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
  );

  return (
    <Select
      onValueChange={(value) => {
        if (value === "sortRating") {
          setSearchedFilms(sortedByRating);
        }
        if (value === "sortRelease") {
          setSearchedFilms(sortedByRelease);
        }
        if (value === "sortName") {
          setSearchedFilms(props.originalFilms);
        }
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="sortRating">Rating</SelectItem>
          <SelectItem value="sortRelease">Release Date</SelectItem>
          <SelectItem value="sortName">Film Name</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
