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


function group(input: Relation[]) {
  const groups = new Map<string, Relation[]>();
  for (const relation of input) {
    if (!groups.has(relation.relation)) {
      groups.set(relation.relation, []);
    }
    groups.get(relation.relation)?.push(relation);
  }
  return groups;
}

function unwrap(input: { name: string }[]) {
  return input.map(x => x.name);
}

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
      <Title titles={anime.titles}/>
      <Separator/>
      <div className={"flex gap-6"}>
        <LeftPanel image={anime.image} type={anime.type} episodes={anime.episodes} status={anime.status}
                   broadcast={anime.broadcast.string} aired={anime.aired} duration={anime.duration}
                   rating={anime.rating} season={anime.season} genres={unwrap(genres)}
                   themes={unwrap(anime.themes)} demographics={unwrap(anime.demographics)}
                   studios={unwrap(anime.studios)} producers={unwrap(anime.producers)}
                   licensors={unwrap(anime.licensors)}/>
        <div className={"text-left text-[15px] flex-grow"}>
          <MainItem title={"Synopsis"}>
            <p className={"block whitespace-pre-wrap mt-2"}>{anime.synopsis}</p>
          </MainItem>
          <Separator/>
          <MainItem title={"Background"}>
            <p className={"block whitespace-pre-wrap mt-2"}>{anime.background}</p>
          </MainItem>
          <Separator/>
          <MainItem title={"Relations"}>
            <Relations relations={relations}/>
          </MainItem>
          <Separator/>
          <MainItem title={"Characters"}>
            <Characters characters={anime.characters.filter(x => x.role === "Main")}/>
          </MainItem>
          <Separator/>
          <MainItem title={"Staff"}>
            <Staff staff={staff}/>
          </MainItem>
        </div>
      </div>
    </div>
  );
}
