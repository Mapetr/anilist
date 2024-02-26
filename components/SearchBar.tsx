'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useEffect, useState} from "react";

export default function SearchBar({autofocus = false}: {autofocus: boolean}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 50);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      router.push("/?q=" + encodeURIComponent(debouncedSearchTerm));
    } else {
      router.push("/");
    }
  }, [debouncedSearchTerm]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
    <>
        <input className="bg-backgroundContainer caret-primary py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-primary" placeholder="Search" type="text" onChange={onChange} autoFocus={autofocus}/>
    </>
  );
}
