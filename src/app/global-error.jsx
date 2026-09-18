"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f4f0] text-gray-800 flex items-center justify-center min-h-screen">
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold mb-4">A critical error occurred</h2>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-sky-500 text-white rounded-full"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
