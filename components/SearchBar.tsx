'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useEffect, useState} from "react";

export default function SearchBar({autofocus = false}: {autofocus: boolean}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('anime');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 50);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchCategory, searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      router.push(`/?category=${searchCategory}&q=` + encodeURIComponent(debouncedSearchTerm));
    } else {
      router.push("/");
    }
  }, [debouncedSearchTerm, searchCategory]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className={"flex gap-6 justify-center"}>
      <select onChange={(x) => {
        setSearchCategory(x.target.value);
      }} className={"bg-backgroundContainer rounded-lg h-8 p-1 px-2 self-center"}>
        <option value={"anime"}>Anime</option>
        <option value={"manga"}>Manga</option>
        <option value={"character"}>Character</option>
        <option value={"people"}>People</option>
      </select>
      <input
        className="bg-backgroundContainer caret-primary py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-primary"
        placeholder="Search" type="text" onChange={onChange} autoFocus={autofocus}/>
    </div>
  );
}
