import {PersonCharacter} from "@/lib/types";
import Person from "@/components/Person";

export default function Characters({characters}: {
  characters: PersonCharacter[];
}) {
  return (
    <div>
      <div className={"grid grid-cols-3 gap-4"}>
        {characters.slice(0, 3).map((character, index) => (
          <Person id={character.id} name={character.name} description={character.role} image={character.image} character={true} key={index}/>
        ))}
      </div>
    </div>
  );
}
