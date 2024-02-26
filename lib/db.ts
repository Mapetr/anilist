import {unstable_cache} from "next/cache";
import {MongoClient, ObjectId} from "mongodb";
import {Anime} from "@/lib/types";

const uri = "mongodb://root:password@localhost:27017";
const client = new MongoClient(uri);
const db = client.db("anime");
const animeColl = db.collection("anime");

export const getAnime = unstable_cache(async (id: string): Promise<Anime | null> => {
  const object = await animeColl.findOne({_id: new ObjectId(id)});
  return object as Anime | null;
});
