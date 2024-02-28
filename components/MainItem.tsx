'use client'

import {ReactNode} from "react";
import Separator from "@/components/ui/Separator";

export default function MainItem({title, children, separator = false}: {
  title: string;
  children: ReactNode;
  separator?: boolean;
  }) {
  return (
    <div>
      {separator && <Separator/>}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
