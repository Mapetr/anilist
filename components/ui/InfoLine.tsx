'use client'

export default function InfoLine({name, value}: {
  name: string;
  value: string | number | string[] | null;
}) {
  if (Array.isArray(value)) value = value.join(", ");
  if (value === "" || !value) value = "None";

  return (
    <div>
      <span>{name}: </span>
      <span className={"font-medium"}>{value}</span>
    </div>
  );
}
