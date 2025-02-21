// app/dashboard/error.tsx
"use client"; // Needed for error handling components in Next.js

import React from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-600 mt-2">{error.message || "Failed to load the dashboard."}</p>
      <button
        onClick={() => reset()} // Retry fetching data
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
