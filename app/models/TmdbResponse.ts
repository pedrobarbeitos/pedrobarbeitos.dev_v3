import TmdbFilm from "./TmdbFilm";

interface TmdbResponse {
  created_by: string;
  description: string;
  favorite_count: number;
  id: number;
  iso_639_1: string;
  item_count: number;
  items: TmdbFilm[];
  name: string;
  page: number;
  poster_path: null | string;
  total_pages: number;
  total_results: number;

}

export default TmdbResponse;