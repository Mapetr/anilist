import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {Relation} from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function group(input: Relation[]) {
  const groups = new Map<string, Relation[]>();
  for (const relation of input) {
    if (!groups.has(relation.relation)) {
      groups.set(relation.relation, []);
    }
    groups.get(relation.relation)?.push(relation);
  }
  return groups;
}

export function unwrap(input: { name: string }[]) {
  return input.map(x => x.name);
}
