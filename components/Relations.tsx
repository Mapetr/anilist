import {Relation} from "@/lib/types";
import Person from "@/components/Person";
import Link from "next/link";

export default function Relations({relations}: {
  relations: Map<string, Relation[]>;
}) {
  return (
    <div>
      {Array.from(relations).map(([relation, items], index) => (
        <div key={index}>
          <span>{relation}: </span>
          {items.map((item, index) => (
            <Link className={"underline text-link hover:brightness-75"} key={index} href={`/${item.type}/${item.id}`}>{item.name}{index != items.length - 1 && ", "}</Link>
          ))}
        </div>
      ))}
    </div>
  )
}
