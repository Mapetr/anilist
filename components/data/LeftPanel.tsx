'use client'

import InfoLine from "@/components/ui/InfoLine";

export type LeftPanelProps = {
  image: string;
  type: string;
  episodes: number;
  status: string;
  broadcast: string;
  aired: { from: string, to: string };
  duration: string;
  rating: string;
  season: string;
  genres: string[];
  themes: string[];
  demographics: string[];
  studios: string[];
  producers: string[];
  licensors: string[];
}

function parseDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
}

export default function LeftPanel({
                                    image,
                                    type,
                                    episodes,
                                    status,
                                    broadcast,
                                    aired,
                                    duration,
                                    rating,
                                    season,
                                    genres,
                                    themes,
                                    demographics,
                                    studios,
                                    producers,
                                    licensors
                                  }: LeftPanelProps) {
  let airedString = "";
  if (aired.from) {
    airedString += parseDate(aired.from);
  }
  if (aired.to) {
    airedString += ` to ${parseDate(aired.to)}`;
  }

  return (
    <div className={"w-[16em] flex-shrink-0"}>
      <img className={"w-full"} src={image} alt={"Poster image"}/>
      <div className={"text-sm text-left flex flex-col gap-1 mt-4"}>
        {type.length > 0 && <InfoLine name={"Type"} value={type}/>}
        {episodes != 0 || status === "Currently Airing" && <InfoLine name={"Episodes"} value={episodes}/>}
        {status.length > 0 && <InfoLine name={"Status"} value={status}/>}
        {broadcast.length > 0 && <InfoLine name={"Broadcast"} value={broadcast}/>}
        {airedString.length > 0 && <InfoLine name={"Aired"} value={airedString}/>}
        {duration.length > 0 && <InfoLine name={"Duration"} value={duration}/>}
        {rating.length > 0 && <InfoLine name={"Rating"} value={rating}/>}
        {season.length > 0 && <InfoLine name={"Season"} value={season}/>}
        {genres.length > 0 && <InfoLine name={"Genres"} value={genres}/>}
        {themes.length > 0 && <InfoLine name={"Themes"} value={themes}/>}
        {demographics.length > 0 && <InfoLine name={"Demographics"} value={demographics}/>}
        {studios.length > 0 && <InfoLine name={"Studios"} value={studios}/>}
        {producers.length > 0 && <InfoLine name={"Producers"} value={producers}/>}
        {licensors.length > 0 && <InfoLine name={"Licensors"} value={licensors}/>}
      </div>
    </div>
  );
}
