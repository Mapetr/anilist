'use client'

import InfoLine from "@/components/ui/InfoLine";

export type LeftPanelProps = {
  image?: string;
  type?: string;
  episodes?: number | null;
  chapters?: number | null;
  volumes?: number | null
  status?: string;
  broadcast?: string;
  aired?: { from: string, to: string };
  published?: { from: string, to: string };
  duration?: string;
  rating?: string;
  season?: string;
  alternate_names?: string[];
  nicknames?: string[];
  authors?: string[];
  serializations?: string[];
  genres?: string[];
  themes?: string[];
  demographics?: string[];
  studios?: string[];
  producers?: string[];
  licensors?: string[];
}

function parseDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
}

export default function LeftPanel({
                                    image,
                                    type,
                                    episodes,
                                    chapters,
                                    volumes,
                                    status,
                                    broadcast,
                                    aired,
                                    published,
                                    duration,
                                    rating,
                                    season,
                                    alternate_names,
                                    nicknames,
                                    authors,
                                    serializations,
                                    genres,
                                    themes,
                                    demographics,
                                    studios,
                                    producers,
                                    licensors
                                  }: LeftPanelProps) {
  let airedString = "";
  if (aired) {
    if (aired.from) {
      airedString += parseDate(aired.from);
    }
    if (aired.to) {
      airedString += ` to ${parseDate(aired.to)}`;
    }
  }

  let publishedString = "";
  if (published) {
    if (published.from) {
      publishedString += parseDate(published.from);
    }
    if (published.to) {
      publishedString += ` to ${parseDate(published.to)}`;
    }
  }

  return (
    <div className={"w-[16em] flex-shrink-0"}>
      <img className={"w-full"} src={image ?? ""} alt={"Poster image"}/>
      <div className={"text-sm text-left flex flex-col gap-1 mt-4"}>
        {type && <InfoLine name={"Type"} value={type}/>}
        {episodes !== undefined && <InfoLine name={"Episodes"} value={episodes} unknown={"Unknown"}/>}
        {chapters !== undefined && <InfoLine name={"Chapters"} value={chapters} unknown={"Unknown"}/>}
        {volumes !== undefined && <InfoLine name={"Volumes"} value={volumes} unknown={"Unknown"}/>}
        {status && <InfoLine name={"Status"} value={status}/>}
        {broadcast && <InfoLine name={"Broadcast"} value={broadcast}/>}
        {published && <InfoLine name={"Published"} value={publishedString}/>}
        {aired && <InfoLine name={"Aired"} value={airedString}/>}
        {duration && <InfoLine name={"Duration"} value={duration}/>}
        {rating && <InfoLine name={"Rating"} value={rating}/>}
        {season && <InfoLine name={"Season"} value={season}/>}
        {alternate_names && <InfoLine name={"Alternate names"} value={alternate_names}/>}
        {nicknames && <InfoLine name={"Nicknames"} value={nicknames}/>}
        {authors && <InfoLine name={"Authors"} value={authors}/>}
        {serializations && <InfoLine name={"Serializations"} value={serializations}/>}
        {genres && <InfoLine name={"Genres"} value={genres}/>}
        {themes && <InfoLine name={"Themes"} value={themes}/>}
        {demographics && <InfoLine name={"Demographics"} value={demographics}/>}
        {studios && <InfoLine name={"Studios"} value={studios}/>}
        {producers && <InfoLine name={"Producers"} value={producers}/>}
        {licensors && <InfoLine name={"Licensors"} value={licensors}/>}
      </div>
    </div>
  );
}
