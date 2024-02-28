import {getAnime} from "@/lib/db";
import {notFound} from "next/navigation";
import Separator from "@/components/ui/Separator";
import InfoLine from "@/components/ui/InfoLine";
import {Relation} from "@/lib/types";
import Relations from "@/components/Relations";
import Characters from "@/components/Characters";
import MainItem from "@/components/MainItem";
import Staff from "@/components/Staff";
import Title from "@/components/data/Title";
import LeftPanel from "@/components/data/LeftPanel";
import {unwatchFile} from "node:fs";
import {group, unwrap} from "@/lib/utils";


export default async function Anime({params}: { params: { id: string } }) {
  const anime = await getAnime(params.id);
  if (!anime) {
    return notFound();
  }

  const relations = group(anime.relations);

  let staff = [
    ...anime.staff.filter(x => x.positions.includes("Director")),
    ...anime.staff.filter(x => x.positions.includes("Producer")).slice(0, 3),
  ];
  if (staff.length === 0) {
    staff = anime.staff.slice(0, 3);
  }

  let genres = [
    ...anime.genres,
    ...anime.explicit_genres
  ];

  return (
    <div>
      <Title main={anime.titles.filter(x => x.type === "Default")[0].title} secondary={anime.titles.filter(x => x.type === "English")[0].title}/>
      <Separator/>
      <div className={"flex gap-6"}>
        <LeftPanel image={anime.image} type={anime.type} episodes={anime.episodes} status={anime.status}
                   broadcast={anime.broadcast?.string} aired={anime.aired} duration={anime.duration}
                   rating={anime.rating} season={anime.season} genres={unwrap(genres)}
                   themes={unwrap(anime.themes)} demographics={unwrap(anime.demographics)}
                   studios={unwrap(anime.studios)} producers={unwrap(anime.producers)}
                   licensors={unwrap(anime.licensors)}/>
        <div className={"text-left text-[15px] flex-grow"}>
          <MainItem title={"Synopsis"}>
            <p className={"block whitespace-pre-wrap mt-2"}>{anime.synopsis}</p>
          </MainItem>
          {anime.background && anime.background.length > 0 &&
              <MainItem title={"Background"} separator={true}>
                  <p className={"block whitespace-pre-wrap mt-2"}>{anime.background}</p>
              </MainItem>
          }
          {anime.relations && anime.relations.length > 0 &&
              <MainItem title={"Relations"} separator={true}>
                  <Relations relations={relations}/>
              </MainItem>
          }
          {anime.characters && anime.characters.length > 0 &&
              <MainItem title={"Characters"} separator={true}>
                  <Characters characters={anime.characters.filter(x => x.role === "Main")}/>
              </MainItem>
          }
          {anime.staff && anime.staff.length > 0 &&
              <MainItem title={"Staff"} separator={true}>
                  <Staff staff={staff}/>
              </MainItem>
          }
        </div>
      </div>
    </div>
  );
}
