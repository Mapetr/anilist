'use client'

export default function InfoLine({name, value, unknown = "None"}: {
  name: string;
  value: string | number | string[] | null;
  unknown?: string;
}) {
  // if (Array.isArray(value)) value = value.join(", ");
  let output: string[] = [];
  if (Array.isArray(value)) {
    output = value;
  } else {
    output = [value as string];
  }
  if (output.length == 0 || output[0] === null) output = [unknown];

  return (
    <div>
      <span>{name}: </span>
      {output.map((item, index) => (
        <span key={index}>
          <span className={"font-medium"} key={index}>{item}</span>
          {index != output.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
