// app/dashboard/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <ul className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className="p-4 bg-gray-200 rounded-md animate-pulse"
          >
            <div className="h-4 bg-gray-300 w-3/4 mb-2 rounded"></div>
            <div className="h-3 bg-gray-300 w-1/2 rounded"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
