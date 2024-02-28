'use client'

import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Card({title, description, image, href}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  const router = useRouter();

  return (
    <div className={"flex gap-4 h-32"}>
      <img src={image} alt={`${title} image`} className={"h-full w-20 flex-shrink-0 object-cover cursor-pointer"}
           onClick={() => router.push(href)}/>
      <div className={"text-left flex flex-col gap-1 w-full text-ellipsis overflow-hidden"}>
        <Link className={"font-medium text-lg hover:underline"} href={href}>{title}</Link>
        <p>{description}</p>
      </div>
    </div>
  )
}
