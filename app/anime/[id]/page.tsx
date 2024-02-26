import {getAnime} from "@/lib/db";
import {notFound} from "next/navigation";
import Separator from "@/components/ui/Separator";
import InfoLine from "@/components/ui/InfoLine";
import {Relation} from "@/lib/types";
import Relations from "@/components/Relations";
import Characters from "@/components/Characters";
import MainItem from "@/components/MainItem";
import Staff from "@/components/Staff";

function parseDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
}

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

export default async function Anime({params}: { params: { id: string } }) {
  const anime = await getAnime(params.id);
  if (!anime) {
    return notFound();
  }

  const romanji_title = anime.titles.find(title => title.type === "Default")?.title;
  const english_title = anime.titles.find(title => title.type === "English")?.title;

  let aired = `${parseDate(anime.aired.from)}`;
  if (anime.aired.to) {
    aired += ` to ${parseDate(anime.aired.to)}`;
  }

  const relations = group(anime.relations);
  let staff = [
    ...anime.staff.filter(x => x.positions.includes("Director")),
    ...anime.staff.filter(x => x.positions.includes("Producer")).slice(0, 3),
  ];
  if (staff.length === 0) {
    staff = anime.staff.slice(0, 3);
  }

  return (
    <div>
      <div className={"text-left my-4"}>
        <h1 className={"font-medium text-2xl"}>{romanji_title}</h1>
        <h2 className={"font-medium"}>{english_title}</h2>
      </div>
      <Separator/>
      <div className={"flex gap-6"}>
        <div className={"w-[16em] flex-shrink-0"}>
          <img className={"w-full"} src={anime.image} alt={romanji_title}/>
          <div className={"text-sm text-left flex flex-col gap-1 mt-4"}>
            <InfoLine name={"Type"} value={anime.type}/>
            <InfoLine name={"Episodes"} value={anime.episodes}/>
            <InfoLine name={"Status"} value={anime.status}/>
            <InfoLine name={"Broadcast"} value={anime.broadcast?.string}/>
            <InfoLine name={"Aired"} value={aired}/>
            <InfoLine name={"Duration"} value={anime.duration}/>
            <InfoLine name={"Rating"} value={anime.rating}/>
            <InfoLine name={"Season"} value={anime.season}/>
            <InfoLine name={"Genres"} value={[...anime.genres, ...anime.explicit_genres]}/>
            <InfoLine name={"Themes"} value={anime.themes}/>
            <InfoLine name={"Demographics"} value={anime.demographics}/>
            <InfoLine name={"Studios"} value={anime.studios}/>
            <InfoLine name={"Producers"} value={anime.producers}/>
            <InfoLine name={"Licensors"} value={anime.licensors}/>
          </div>
        </div>
        <div className={"text-left text-[15px] flex-grow"}>
          <div>
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
    </div>
  );
}
