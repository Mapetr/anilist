import {unstable_cache} from "next/cache";
import {MongoClient, ObjectId} from "mongodb";
import {Anime, Character, Manga, Person} from "@/lib/types";

const uri = "mongodb://root:password@localhost:27017";
const client = new MongoClient(uri);
const db = client.db("anime");
const animeColl = db.collection("anime");
const mangaColl = db.collection("manga");
const characterColl = db.collection("characters");
const peopleColl = db.collection("people");

export const getAnime = unstable_cache(async (id: string): Promise<Anime | null> => {
  const object = await animeColl.findOne({_id: new ObjectId(id)});
  return object as Anime | null;
});

export const getManga = unstable_cache(async (id: string) => {
  const object = await mangaColl.findOne({_id: new ObjectId(id)});
  return object as Manga | null;
});

export const getCharacter = unstable_cache(async (id: string) => {
  const object = await characterColl.findOne({_id: new ObjectId(id)});
  return object as Character | null;
});

export const getPeople = unstable_cache(async (id: string) => {
  const object = await peopleColl.findOne({_id: new ObjectId(id)});
  return object as Person | null;
});
