"use client";

import Image from "next/image";
import TmdbFilm from "../../../models/TmdbFilm";

import { useAppContext } from "@/lib/AppContext";

type Props = {
  params: { recordId: string };
};

export default function Record({ params }: Props) {
  const { searchedRecords } = useAppContext();
  const recordId = params.recordId;

  const album = searchedRecords.find((a) => a.id === parseInt(recordId));
  if (!album) {
    throw new Error("No album found with the given id");
  }

  return (
    <main className="flex w-full flex-col items-center">
      <div>{album.basic_information.title}</div>
    </main>
  );
}
