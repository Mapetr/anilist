import SearchBar from "@/components/SearchBar";
import {MeiliSearch} from "meilisearch";
import {SearchResult, SearchResults} from "@/lib/types";

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
  if (query) {
    results = await index.search(query, {limit: 10});
  }

  console.log(results);

  return (
    <>
      <SearchBar/>
      <div>
        {results.hits.map((hit) => (
          <div key={hit.id}>
            <a href={`/anime/${hit.id}`}>
              <span>{hit.title}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
