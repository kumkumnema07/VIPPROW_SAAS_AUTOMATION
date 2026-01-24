"use client";

import { CTA } from "@/components/magic-ui/CTA";
import EditorialCard from "@/components/ui/cards/EditorialCard";
import EditorialGrid from "@/components/ui/EditorialGrid";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { useDebounce } from "@/lib/useDebounce";
// import { useState } from "react";
import { usePublicArticles } from "../features/articles/hook/useArticle";
import { useState } from "react";

export default function ArticlesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, isError } = usePublicArticles({
    page,
    limit: 10,
    sortBy: "createdAt",
    sortOrder: "desc",
    filter: "active",
    search: debouncedSearch,
    categories: filters,
  });

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage != page) {
      setPage(newPage);
    }
  };

  const totalPages = data?.pagination?.totalPage || 1;

  return (
    <main className="py-44 max-w-7xl mx-auto">
      <PrimaryHeading
        heading="Empower Your Workflow with AI"
        des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations."
      />

      <section className="bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.data?.map((item, index) => (
            <EditorialCard
              key={index}
              image={item.thumbnail ?? "/image/placeholder.png"}
              title={item.title ?? "Untitle Article"}
              category_name={
                typeof item.category === "object" && item.category != null
                  ? item.category.name
                  : undefined
              }
            />
          ))}
        </div>

        {}
        {/* Pagination */}
        {/* {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )} */}
      </section>

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </main>
  );
}
