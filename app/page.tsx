import SearchBar from "@/components/SearchBar";
import {MeiliSearch} from "meilisearch";
import {SearchResult, SearchResults} from "@/lib/types";
import Result from "@/components/Result";

let search: MeiliSearch;
const host = process.env.MEILI_HOST;
const master_key = process.env.MEILI_MASTER_KEY;
if (host && master_key) {
  search = new MeiliSearch({
    host: host,
    apiKey: master_key,
  });
} else {
  console.error("No MEILI_HOST or MEILI_MASTER_KEY found");
}

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
  if (query && query.length > 2 && search) {
    const index = search.index(category);
    results = await index.search(query, {limit: 10});
  }

  return (
    <>
      <SearchBar autofocus={true}/>
      <div className={"w-[32em] mx-auto"}>
        {results.estimatedTotalHits === 0 && query.length > 3 && <p>No results found for <b>{query}</b></p>}
        {results.hits.map((hit, index) => (
          <Result id={hit.id} title={hit.name} category={category} year={hit.year} type={hit.type} image={hit.image} key={index} />
        ))}
      </div>
    </>
  );
}
