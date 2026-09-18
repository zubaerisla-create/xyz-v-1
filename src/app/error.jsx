"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f4f0] dark:bg-slate-900 text-gray-800 dark:text-gray-100 p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
