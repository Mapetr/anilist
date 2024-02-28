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
  characters: MediaCharacter[];
  staff: Staff[];
  relations: Relation[];
}

export type Title = {
  type: string;
  title: string;
}

export type MediaCharacter = {
  mal_id: number;
  character_id: string;
  name: string;
  image: string;
  role: string;
  voice_actor: VoiceActor;
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

export type Manga = {
  _id: string;
  mal_id: number;
  image: string;
  titles: Title[];
  type: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  published: {
    from: string;
    to: string;
  };
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
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
  characters: MediaCharacter[];
  relations: Relation[];
}

export type Author = {
  mal_id: number;
  name: string;
  type: string;
}

export type Serialization = {
  mal_id: number;
  name: string;
}

export type Character = {
  _id: string;
  mal_id: number;
  name: string;
  name_kanji: string;
  image: string;
  nicknames: string[];
  about: string;
  voice_actors: VoiceActor[];
}

export type VoiceActor = {
  mal_id: number;
  id: string;
  name: string;
  image: string;
  language: string;
}

export type Person = {
  _id: string;
  mal_id: number;
  name: string;
  given_name: string;
  family_name: string;
  website_url: string;
  image: string;
  birthday: string;
  alternate_names: string[];
  about: string;
  characters: PersonCharacter[];
  anime: PersonAnime[];
  manga: PersonManga[];
}

export type PersonCharacter = {
  mal_id: number;
  anime_id: string;
  anime_name: string;
  anime_image: string;
  id: string;
  name: string;
  image: string;
  role: string;
}

export type PersonAnime = {
  mal_id: number;
  id: string;
  name: string
  image: string;
  positions: string[];
}

export type PersonManga = {
  mal_id: number;
  id: string;
  name: string;
  image: string;
  positions: string[];
}
