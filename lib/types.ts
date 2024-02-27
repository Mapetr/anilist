export type Anime = {
  _id: string;
  mal_id: number;
  image: string;
  trailer: string;
  titles: Title[];
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
  characters: Character[];
  staff: Staff[];
  relations: Relation[];
}

export type Title = {
  type: string;
  title: string;
}

export type Character = {
  mal_id: number;
  character_id: string;
  name: string;
  image: string;
  role: string;
  voice_actor: VoiceActor;
}

export type VoiceActor = {
  mal_id: number;
  voice_actor_id: string;
  name: string;
  language: string;
  image: string;
}

export type Staff = {
  mal_id: number;
  people_id: string;
  name: string;
  image: string;
  positions: string[];
}

export type Relation = {
  mal_id: number;
  id: string;
  name: string;
  type: string;
  relation: string;
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
  year: string;
  type: string;
}
