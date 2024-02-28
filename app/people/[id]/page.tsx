import {getPeople} from "@/lib/db";
import {notFound} from "next/navigation";
import VoiceActors from "@/components/VoiceActors";
import Title from "@/components/data/Title";
import Separator from "@/components/ui/Separator";
import LeftPanel from "@/components/data/LeftPanel";
import MainItem from "@/components/MainItem";
import Characters from "@/components/person/Characters";
import Staff from "@/components/Staff";
import Card from "@/components/ui/Card";

export default async function People({params}: { params: { id: string } }) {
  const person = await getPeople(params.id);
  if (!person) {
    return notFound();
  }

  return (
    <div>
      <Title main={person.name} secondary={`${person.family_name} ${person.given_name}`}/>
      <Separator/>
      <div className={"flex gap-6"}>
        <LeftPanel image={person.image} alternate_names={person.alternate_names}/>
        <div className={"text-left text-[15px] flex-grow"}>
          <MainItem title={"About"}>
            <p className={"block whitespace-pre-wrap mt-2"}>{person.about}</p>
          </MainItem>
          {person.characters && person.characters.length > 0 &&
              <MainItem title={"Characters"} separator={true}>
                  <Characters characters={person.characters}/>
              </MainItem>
          }
          {person.anime && person.anime.length > 0 &&
              <MainItem title={"Anime"} separator={true}>
                  <div className={"grid grid-cols-3 gap-4"}>
                    {person.anime.slice(0, 6).map((anime, index) => (
                      <Card key={index} title={anime.name} image={anime.image} description={anime.positions?.join(", ")}
                            href={`/anime/${anime.id}`}/>
                    ))}
                  </div>
              </MainItem>
          }
          {person.manga && person.manga.length > 0 &&
              <MainItem title={"Manga"} separator={true}>
                  <div className={"grid grid-cols-3 gap-4"}>
                    {person.manga.slice(0, 6).map((manga, index) => (
                      <Card key={index} title={manga.name} image={manga.image} description={manga.positions?.join(", ")}
                            href={`/manga/${manga.id}`}/>
                    ))}
                  </div>
              </MainItem>
          }
        </div>
      </div>
    </div>
  )
}
