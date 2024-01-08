import TmdbResponse from "../../models/TmdbResponse";
import { SelectFilter } from "@/components/SelectFilter";
import { SearchInput } from "@/components/SearchInput";
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
      <div className="flex grow flex-col items-center max-w-3xl">
        <p className="leading-6 text-sm [&:not(:first-child)]:mt-6 text-center ">
          Dive into my Film Collection built with data provided by the TMDB API.
          This project is a quirky crossroad of technology and my eclectic film
          taste.
        </p>
      </div>
      <div className="flex justify-center w-full py-10 gap-3">
        <SelectFilter />
        <SearchInput />
      </div>
      <FilmGallery films={films} />
    </main>
  );
}
