import {unstable_cache} from "next/cache";
import {Collection, MongoClient, ObjectId} from "mongodb";
import {Anime, Character, Manga, Person} from "@/lib/types";

let animeColl: Collection<Document>;
let mangaColl: Collection<Document>;
let characterColl: Collection<Document>;
let peopleColl: Collection<Document>;
const uri = process.env.MONGODB_URI;
if (uri) {
  const client = new MongoClient(uri);
  const db = client.db("anime");
  animeColl = db.collection("anime");
  mangaColl = db.collection("manga");
  characterColl = db.collection("characters");
  peopleColl = db.collection("people");
} else {
  console.error("No MONGODB_URI found");
}

export const getAnime = unstable_cache(async (id: string): Promise<Anime | null> => {
  if (!animeColl) return null;
  const object = await animeColl.findOne({_id: new ObjectId(id)});
  return object as Anime | null;
});

export const getManga = unstable_cache(async (id: string) => {
  if (!mangaColl) return null;
  const object = await mangaColl.findOne({_id: new ObjectId(id)});
  return object as Manga | null;
});

export const getCharacter = unstable_cache(async (id: string) => {
  if (!characterColl) return null;
  const object = await characterColl.findOne({_id: new ObjectId(id)});
  return object as Character | null;
});

export const getPeople = unstable_cache(async (id: string) => {
  if (!peopleColl) return null;
  const object = await peopleColl.findOne({_id: new ObjectId(id)});
  return object as Person | null;
});
