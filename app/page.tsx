import SearchBar from "@/components/SearchBar";
import {MeiliSearch} from "meilisearch";
import {SearchResult, SearchResults} from "@/lib/types";
import Result from "@/components/Result";

const search = new MeiliSearch({
  host: "http://127.0.0.1:7700",
  apiKey: "master_key",
});
const index = search.index("anime");


export default async function Home({searchParams}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = searchParams["q"]?.toString() ?? "";

  let results: SearchResults = {
    hits: [],
    query: query,
    processingTimeMs: 0,
    limit: 0,
    offset: 0,
    estimatedTotalHits: 0,
  };
  if (query && query.length > 2) {
    results = await index.search(query, {limit: 10});
  }

  return (
    <>
      <SearchBar autofocus={true}/>
      <div className={"w-[32em] mx-auto"}>
        {results.hits.map((hit, index) => (
          <Result id={hit.id} title={hit.title} year={hit.year} type={hit.type} image={hit.image} key={index} />
        ))}
      </div>
    </>
  );
}
