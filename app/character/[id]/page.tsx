import {getCharacter} from "@/lib/db";
import {notFound} from "next/navigation";
import Separator from "@/components/ui/Separator";
import LeftPanel from "@/components/data/LeftPanel";
import {unwrap} from "@/lib/utils";
import MainItem from "@/components/MainItem";
import Relations from "@/components/Relations";
import Characters from "@/components/Characters";
import Title from "@/components/data/Title";
import Staff from "@/components/Staff";
import VoiceActors from "@/components/VoiceActors";

export default async function Character({params}: {params: {id: string}}) {
  const character = await getCharacter(params.id);
  if (!character) {
    return notFound();
  }

  return (
    <div>
      <Title main={character.name} secondary={character.name_kanji}/>
      <Separator/>
      <div className={"flex gap-6"}>
        <LeftPanel image={character.image} nicknames={character.nicknames} />
        <div className={"text-left text-[15px] flex-grow"}>
          <MainItem title={"About"}>
            <p className={"block whitespace-pre-wrap mt-2"}>{character.about}</p>
          </MainItem>
          {character.voice_actors && character.voice_actors.length > 0 &&
              <MainItem title={"Voice Actors"} separator={true}>
                  <VoiceActors voice_actors={character.voice_actors} />
              </MainItem>
          }
        </div>
      </div>
    </div>
  )
}
