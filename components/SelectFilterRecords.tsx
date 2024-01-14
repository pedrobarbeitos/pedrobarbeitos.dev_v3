import React, { Dispatch, SetStateAction } from "react";
import DiscogRecord from "@/app/models/DiscogRecord";
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
  originalRecords: DiscogRecord[];
};

export function SelectFilter(props: props) {
  const { searchedRecords, setSearchedRecords } = useAppContext();

  const sortedByRelease = searchedRecords.slice();
  sortedByRelease.sort(
    (a, b) => b.basic_information.year - a.basic_information.year
  );

  return (
    <Select
      defaultValue="sortArtist"
      onValueChange={(value) => {
        if (value === "sortRelease") {
          setSearchedRecords(sortedByRelease);
        }
        if (value === "sortArtist") {
          setSearchedRecords(props.originalRecords);
        }
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="sortRelease">Release Date</SelectItem>
          <SelectItem value="sortArtist">Artist</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
