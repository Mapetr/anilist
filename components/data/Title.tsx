import {Title} from "@/lib/types";

export default function Title({main, secondary}: {
  main: string;
  secondary?: string;
}) {

  if (!main) {

  }

  return (
    <div className={"text-left my-4"}>
      <h1 className={"font-medium text-2xl"}>{main}</h1>
      { secondary != "" && <h2 className={"font-medium"}>{secondary}</h2> }
    </div>
  );
}
