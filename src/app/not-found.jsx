"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f4f0] dark:bg-slate-900 text-gray-800 dark:text-gray-100 p-4 text-center">
      <h1 className="text-6xl font-bold text-sky-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
