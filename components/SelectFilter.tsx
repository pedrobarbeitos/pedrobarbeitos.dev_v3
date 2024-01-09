import React, { Dispatch, SetStateAction } from "react";
import TmdbFilm from "../app/models/TmdbFilm";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortProps = {
  searchedFilms: TmdbFilm[];
  films: TmdbFilm[];
  setSearchedFilms: Dispatch<SetStateAction<TmdbFilm[]>>;
};

export function SelectFilter(props: SortProps) {
  const sortedByRating = props.searchedFilms.slice();
  sortedByRating.sort((a, b) => b.vote_average - a.vote_average);

  const sortedByRelease = props.searchedFilms.slice();
  sortedByRelease.sort(
    (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
  );

  return (
    <Select
      onValueChange={(value) => {
        if (value === "sortRating") {
          props.setSearchedFilms(sortedByRating);
        }
        if (value === "sortRelease") {
          props.setSearchedFilms(sortedByRelease);
        }
        if (value === "sortAdded") {
          props.setSearchedFilms(props.films);
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
          <SelectItem value="sortAdded">Added Date</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
