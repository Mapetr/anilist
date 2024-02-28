import SearchBar from "@/components/SearchBar";
import {MeiliSearch} from "meilisearch";
import {SearchResult, SearchResults} from "@/lib/types";
import Result from "@/components/Result";

const search = new MeiliSearch({
  host: "http://127.0.0.1:7700",
  apiKey: "master_key",
});

export default async function Home({searchParams}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = searchParams["q"]?.toString() ?? "";
  const category = searchParams["category"]?.toString() ?? "anime";

  let results: SearchResults = {
    hits: [],
    query: query,
    processingTimeMs: 0,
    limit: 0,
    offset: 0,
    estimatedTotalHits: 0,
  };
  if (query && query.length > 2) {
    const index = search.index(category);
    results = await index.search(query, {limit: 10});
  }

  return (
    <>
      <SearchBar autofocus={true}/>
      <div className={"w-[32em] mx-auto"}>
        {results.hits.map((hit, index) => (
          <Result id={hit.id} title={hit.name} year={hit.year} type={hit.type} image={hit.image} key={index} />
        ))}
      </div>
    </>
  );
}
