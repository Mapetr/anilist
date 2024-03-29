import {MediaCharacter} from "@/lib/types";
import Person from "@/components/Person";

export default function Characters({characters}: {
  characters: MediaCharacter[];
}) {
  return (
    <div>
      <div className={"grid grid-cols-3 gap-4"}>
        {characters.map((character, index) => (
          <Person id={character.character_id} name={character.name} description={character.role} image={character.image} character={true} key={index}/>
        ))}
      </div>
    </div>
  );
}
