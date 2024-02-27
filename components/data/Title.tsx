import {Title} from "@/lib/types";

export default function Title({titles}: {
  titles: Title[];
}) {

  let main = titles.filter(x => x.type === "Default")[0]?.title;
  let english = titles.filter(x => x.type === "English")[0]?.title;

  if (!main) {
    if (!english) {
      main = titles[0].title;
    } else {
      main = english;
      english = "";
    }
  }

  return (
    <div className={"text-left my-4"}>
      <h1 className={"font-medium text-2xl"}>{main}</h1>
      { english != "" && <h2 className={"font-medium"}>{english}</h2> }
    </div>
  );
}
