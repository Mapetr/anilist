'use client'

import {VoiceActor} from "@/lib/types";
import Person from "@/components/Person";

export default function VoiceActors({voice_actors}: {voice_actors: VoiceActor[]}) {
return (
    <div>
      <div className={"grid grid-cols-3 gap-4"}>
        {voice_actors.map((voice_actor, index) => (
          <Person id={voice_actor.id} name={voice_actor.name} description={voice_actor.language} image={voice_actor.image} key={index}/>
        ))}
      </div>
    </div>
  );
}
