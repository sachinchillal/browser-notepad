import React from "react";
import { useGlobalData } from "../providers/GlobalDataProvider";

function formatDate(id: number) {
  const date = new Date(id);
  return date.toLocaleString();
}

const ShowNotes: React.FC = () => {
  const { notes, deleteNote } = useGlobalData();

  if (!notes.length) {
    return (
      <div className="p-4 text-gray-500">No notes yet.</div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold mb-4">Your Notes
          <span className="text-xs text-gray-500 ml-2">({notes.length})</span>
        </h2>
        <i className="ms-auto"></i>
        <button type="button" title="Sort by Date">&#128290;</button>
        <button type="button" title="Sort by Title">&#128288;</button>
      </div>
      <ul className="space-y-2">
        {notes.map(note => (
          <li key={note.id} className="relative rounded shadow p-2 border border-gray-200 dark:border-gray-700">
            <div className="mb-2">{note.note}</div>
            <div className="flex gap-2 items-center">
              <div className="text-xs text-gray-500">{formatDate(note.id)}</div>
              <i className="ms-auto"></i>
              <button
                className="p-1 hover:bg-red-900 rounded"
                title="Delete Note"
                onClick={() => deleteNote(note.id)}
                aria-label="Delete Note"
              >
                &#128465;
              </button>
              <button
                className="p-1 hover:bg-green-900 rounded"
                title="Copy Note"
                onClick={() => navigator.clipboard.writeText(note.note)}
                aria-label="Copy Note"
              >
                &#128196;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowNotes;
