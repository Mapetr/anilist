'use client'

import {useRouter} from "next/navigation";

type ResultProps = {
  id: string;
  title: string;
  type: string;
  year: string;
  image: string;
}

export default function Result({id, title, type, year, image}: ResultProps) {
  const router = useRouter();

  return (
    <div className="flex h-32 my-2 gap-4 cursor-pointer hover:bg-backgroundContainer" onClick={() => router.push(`/anime/${id}`)}>
      <span style={{backgroundImage: `url(${image})`}} className={"h-full w-24 bg-center bg-cover flex-shrink-0"}/>
      <div className={"text-left flex flex-col gap-2"}>
        <h2>{title}</h2>
        <p>{type}, {year}</p>
      </div>
    </div>
  );
}
