import {getManga} from "@/lib/db";
import Separator from "@/components/ui/Separator";
import LeftPanel from "@/components/data/LeftPanel";
import MainItem from "@/components/MainItem";
import Relations from "@/components/Relations";
import Characters from "@/components/Characters";
import Title from "@/components/data/Title";
import {notFound} from "next/navigation";
import {group, unwrap} from "@/lib/utils";

export default async function Manga({params}: { params: { id: string } }) {
  const manga = await getManga(params.id);
  if (!manga) {
    return notFound();
  }

  const relations = group(manga.relations);

  let genres = [
    ...manga.genres,
    ...manga.explicit_genres
  ];

  return (
    <div>
      <Title main={manga.titles.filter(x => x.type === "Default")[0].title} secondary={manga.titles.filter(x => x.type === "English")[0].title}/>
      <Separator/>
      <div className={"flex gap-6"}>
        <LeftPanel image={manga.image} type={manga.type} status={manga.status} chapters={manga.chapters}
                   volumes={manga.volumes} authors={unwrap(manga.authors)} serializations={unwrap(manga.serializations)} genres={unwrap(genres)}
                   themes={unwrap(manga.themes)} demographics={unwrap(manga.demographics)}/>
        {/*<LeftPanel image={anime.image} type={anime.type} episodes={anime.episodes} status={anime.status}*/}
        {/*           broadcast={anime.broadcast.string} aired={anime.aired} duration={anime.duration}*/}
        {/*           rating={anime.rating} season={anime.season} genres={unwrap(genres)}*/}
        {/*           themes={unwrap(anime.themes)} demographics={unwrap(anime.demographics)}*/}
        {/*           studios={unwrap(anime.studios)} producers={unwrap(anime.producers)}*/}
        {/*           licensors={unwrap(anime.licensors)}/>*/}
        <div className={"text-left text-[15px] flex-grow"}>
          <MainItem title={"Synopsis"}>
            <p className={"block whitespace-pre-wrap mt-2"}>{manga.synopsis}</p>
          </MainItem>
          {manga.background && manga.background.length > 0 &&
              <MainItem title={"Background"} separator={true}>
                  <p className={"block whitespace-pre-wrap mt-2"}>{manga.background}</p>
              </MainItem>
          }
          {manga.relations && manga.relations.length > 0 &&
              <MainItem title={"Relations"} separator={true}>
                  <Relations relations={relations}/>
              </MainItem>
          }
          {manga.characters && manga.characters.length > 0 &&
              <MainItem title={"Characters"} separator={true}>
                  <Characters characters={manga.characters.filter(x => x.role === "Main")}/>
              </MainItem>
          }
        </div>
      </div>
    </div>
  );
}
