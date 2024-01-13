import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

export function SearchInput(props: SearchInputProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(event.target.value);
  };

  return <Input type="search" placeholder="search" onChange={handleSearch} />;
}
