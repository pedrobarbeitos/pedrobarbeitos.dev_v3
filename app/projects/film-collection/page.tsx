import TmdbResponse from "../../models/TmdbResponse";

import FilmGallery from "@/components/FilmGallery";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

async function getData(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/list/8284424?language=en-US&page=${page}`,
    options
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: TmdbResponse = await res.json();
  return data.items;
}

async function getAllData() {
  try {
    const [pageOne, pageTwo, pageThree] = await Promise.all([
      getData(1),
      getData(2),
      getData(3),
    ]);
    return [...pageOne, ...pageTwo, ...pageThree];
  } catch (error: any) {
    throw error;
  }
}

export default async function FilmCollection() {
  const films = await getAllData();

  return (
    <main className=" grow flex w-full flex-col justify-center items-center">
      <FilmGallery films={films} />
    </main>
  );
}
