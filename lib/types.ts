export type Anime = {
  _id: string;
  mal_id: number;
  image: string;
  trailer: string;
  titles: {
    type: string;
    title: string;
  }[];
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
  };
  duration: string;
  rating: string;
  synopsis: string;
  background: string;
  season: string;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: {
    name: string;
  }[];
  licensors: {
    name: string;
  }[];
  studios: {
    name: string;
  }[];
  genres: {
    name: string;
  }[];
  explicit_genres: {
    name: string;
  }[];
  themes: {
    name: string;
  }[];
  demographics: {
    name: string;
  }[];
}

export type SearchResults = {
  hits: SearchResult[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
}

export type SearchResult = {
  id: string;
  title: string;
  titles: string[];
  image: string;
}
