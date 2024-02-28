'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Person({id, name, description, image, character}: {
  id: string;
  name: string;
  description: string;
  image: string;
  character?: boolean;
}) {
  const router = useRouter();

  const type = character ? "character" : "people";

  return (
    <div className={"flex gap-4 h-32"}>
      <img src={image} alt={name} className={"h-full w-20 flex-shrink-0 object-cover cursor-pointer"} onClick={() => router.push(`/people/${id}`)}/>
      <div className={"text-left flex flex-col gap-1 w-full text-ellipsis overflow-hidden"}>
        <Link className={"font-medium text-lg hover:underline"} href={`/${type}/${id}`}>{name}</Link>
        <p>{description}</p>
      </div>
    </div>
  )
}
