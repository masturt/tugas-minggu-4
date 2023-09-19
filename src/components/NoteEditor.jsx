"use client";

import { Input } from "./Input";
import { NoteCard } from "./NoteCard";

export const NoteEditor = ({ noteData }) => {
  const createNote = async () => {
    const res = await fetch();
    const data = res.json();
    console.log(data);
  };
  return (
    <div className="space-y-8">
      <Input />
      <div className="grid grid-cols-2 gap-2 text-slate-950">
        {noteData.map(({ id, content }) => {
          return <NoteCard key={id} id={id} content={content} />;
        })}
      </div>
    </div>
  );
};
