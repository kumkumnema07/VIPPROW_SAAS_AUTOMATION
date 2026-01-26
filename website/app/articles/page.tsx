// app/articles/page.tsx  (NO "use client")
export const dynamic = "force-dynamic";
import { CTA } from "@/components/magic-ui/CTA";
import EditorialCard from "@/components/ui/cards/EditorialCard";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { fetchPublicArticles } from "../features/articles/services/article.api";
import { ArticlesClient } from "./ArticlesClient";

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // ✅ unwrap searchParams
  const { page: pageParam } = await searchParams;

  const page = Number(pageParam ?? 1);

  const data = await fetchPublicArticles({
    page,
    limit: 2,
    sortBy: "createdAt",
    sortOrder: "desc",
    filter: "active",
  });

  return (
    <main className="py-44 max-w-7xl mx-auto">
      <PrimaryHeading
        heading="Empower Your Workflow with AI"
        des="Ask your AI Agent for real-time collaboration, seamless integrations."
      />

      <section className="bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.data.map((item) => (
            <EditorialCard
              key={item._id}
              href={`/articles/details/${item._id}`}
              image={item.thumbnail ?? "/image/placeholder.png"}
              title={item.title}
              category_name={
                typeof item.category === "object" && item.category != null
                  ? item.category.name
                  : undefined
              }
            />
          ))}
        </div>

        {/* Pagination */}
        <ArticlesClient
          currentPage={page}
          totalPages={data.pagination.totalPages}
        />
      </section>

      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
    </main>
  );
}
