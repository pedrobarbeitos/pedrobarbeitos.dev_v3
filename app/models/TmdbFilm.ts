interface Genre {
  id: number;
  name: string;
}

interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface TmdbFilm {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: Collection; // Optional since not all films belong to a collection
  budget: number;
  genres: Genre[];
  homepage?: string; // Optional as not all films have a homepage
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline?: string; // Optional as not all films have a tagline
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

  
  export default TmdbFilm;