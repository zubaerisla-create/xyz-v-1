"use client";
import ArticleDetail from "@/views/ArticleDetail/ArticleDetail";

export default function Page({ params }) {
  return <ArticleDetail id={params?.id} />;
}
