"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
  const router = useRouter();
  const [content, setContent] = useState("");

  const handleCreateNote = async () => {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content, user: "toer" }),
      }
    );
    const data = await res.json();
    console.log(data);
    setContent("");
    router.refresh();
  };

  return (
    <div className="flex gap-4">
      <h1>NOTES</h1>
      <input
        className="bg-zinc-200"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="w-fit" onClick={handleCreateNote}>
        Submit
      </button>
    </div>
  );
};
