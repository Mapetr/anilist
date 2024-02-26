'use client'

export default function InfoLine({name, value}: {
  name: string;
  value: string | number | { name: string }[] | null;
}) {
  if (Array.isArray(value)) {
    value = value.map((v) => v.name).join(", ");
  }

  if (value === "" || !value) value = "None";

  return (
    <div>
      <span>{name}: </span>
      <span className={"font-medium"}>{value}</span>
    </div>
  );
}
