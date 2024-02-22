import {getAnime} from "@/app/db";
import {notFound} from "next/navigation";

export default async function Anime({params}: { params: { id: string } }) {
  // const anime = await getAnime(params.id);
  // if (!anime) {
  //   return notFound();
  // }

  const anime = {
    _id: '65d6186edf73fa34b2c87c7b',
    mal_id: 52991,
    image: 'https://cdn.myanimelist.net/images/anime/1015/138006l.webp',
    trailer: 'https://www.youtube.com/watch?v=ZEkwCGJ3o7M',
    titles: [
      { type: 'Default', title: 'Sousou no Frieren' },
      { type: 'Synonym', title: 'Frieren at the Funeral' },
      { type: 'Japanese', title: '葬送のフリーレン' },
      { type: 'English', title: "Frieren: Beyond Journey's End" }
    ],
    title_synonyms: [ 'Frieren at the Funeral' ],
    type: 'TV',
    source: 'Manga',
    episodes: 28,
    status: 'Currently Airing',
    airing: true,
    aired: {
      from: '2023-09-29T00:00:00+00:00',
      to: '2024-03-22T00:00:00+00:00'
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    synopsis: "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n" +
      '\n' +
      'However, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her "usual" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n' +
      '\n' +
      "As the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n" +
      '\n' +
      '[Written by MAL Rewrite]',
    background: 'Sousou no Frieren was released on Blu-ray and DVD in seven volumes from January 24, 2024, to July 17, 2024.',
    season: 'fall 2023',
    broadcast: {
      day: 'Fridays',
      time: '23:00',
      timezone: 'Asia/Tokyo',
      string: 'Fridays at 23:00 (JST)'
    },
    producers: [
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex'
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu'
      },
      {
        mal_id: 62,
        type: 'anime',
        name: 'Shogakukan-Shueisha Productions',
        url: 'https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions'
      },
      {
        mal_id: 1003,
        type: 'anime',
        name: 'Nippon Television Network',
        url: 'https://myanimelist.net/anime/producer/1003/Nippon_Television_Network'
      },
      {
        mal_id: 1143,
        type: 'anime',
        name: 'TOHO animation',
        url: 'https://myanimelist.net/anime/producer/1143/TOHO_animation'
      },
      {
        mal_id: 1430,
        type: 'anime',
        name: 'Shogakukan',
        url: 'https://myanimelist.net/anime/producer/1430/Shogakukan'
      }
    ],
    licensors: [],
    studios: [
      {
        mal_id: 11,
        type: 'anime',
        name: 'Madhouse',
        url: 'https://myanimelist.net/anime/producer/11/Madhouse'
      }
    ],
    genres: [
      {
        mal_id: 2,
        type: 'anime',
        name: 'Adventure',
        url: 'https://myanimelist.net/anime/genre/2/Adventure'
      },
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama'
      },
      {
        mal_id: 10,
        type: 'anime',
        name: 'Fantasy',
        url: 'https://myanimelist.net/anime/genre/10/Fantasy'
      }
    ],
    explicit_genres: [],
    themes: [],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen'
      }
    ]
  };

  console.log(anime);

  return (
    <div>
      <div>
        <h1>{anime.titles[0].title}</h1>
        <p>{anime.synopsis}</p>
      </div>
    </div>
  );
}
