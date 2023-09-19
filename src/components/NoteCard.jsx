"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();
  const [newContent, setNewContent] = useState(content);
  const [editMode, setEditMode] = useState(false);

  async function handleUpdateNote() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newContent }),
      }
    );
    const data = await res.json();
    console.log(data);
    setEditMode(false);
    router.refresh();
  }

  async function handleDeleteNote() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  }

  return (
    <div className="bg-white/30 border-inset p-4 rounded-lg shadow">
      {editMode ? (
        <input
          className="min-h-[120px] bg-transparent border-transparent"
          value={newContent || content}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <div className="min-h-[120px]">{content}</div>
      )}

      <div className="flex gap-4">
        {editMode ? (
          <button onClick={handleUpdateNote}>Update</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}

        <button onClick={handleDeleteNote}>Delete</button>
      </div>
    </div>
  );
};
