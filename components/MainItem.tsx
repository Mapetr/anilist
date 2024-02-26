'use client'

import {ReactNode} from "react";

export default function MainItem({title, children}: {
  title: string;
  children: ReactNode;
  }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
