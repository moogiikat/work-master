import { format } from "date-fns";
import { ChevronRightIcon } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { cn } from "@/lib/utils";

import { PageLayout } from "@/components/page_layout";
import { Pagination } from "@/components/pagination";
import { getPosts } from "@/services/facebook/getPosts";

// export const dynamic = "force-static";
// export const revalidate = 10;

export const generateStaticParams = async () => {
  const posts = await getPosts();
  const totalPage = posts.meta.totalPage;
  return Array.from({ length: totalPage }, (_, index) => ({
    page: (index + 1).toString(),
  }));
};

const NewsPage: React.Page<{ page: string }> = ({ params: { page } }) => {
  const posts = use(getPosts(page));

  if (posts.data.length === 0) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLayout className="pb-20">
        <div className="flex flex-col items-center">
          <h1 className={cn("text-brownPrimary text-h1", "md:text-[56px]")}>
            {"Шинэ мэдээлэл"}
          </h1>
          <p className="text-brownSecondary text-sm">
            {"Манай компанийн сүүлийн мэдээлэл"}
          </p>
        </div>
        <div className="h-full w-full flex flex-col gap-y-10 items-center">
          <div className="w-full h-full flex flex-col pt-14 gap-y-4">
            {posts.data.map((item, index) => (
              <Link
                key={`post-${index}`}
                href={item.permalink_url}
                className={cn(
                  "flex border-b items-center justify-between",
                  "hover:shadow-lg hover:rounded-lg"
                )}
              >
                <div className="flex flex-col px-2 gap-y-2 py-2">
                  <p className="text-brownSecondary text-[10px] italic">
                    {format(item.created_time, "yyyy.MM.dd")}
                  </p>
                  <p className="text-brownPrimary text-base line-clamp-2">
                    {item.message}
                  </p>
                </div>
                <div className="flex items-center">
                  <ChevronRightIcon
                    width={24}
                    height={24}
                    className="w-6 h-6 text-brownPrimary"
                  />
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            currentPage={posts.meta.currentPage}
            totalPage={posts.meta.totalPage}
            type="params"
          />
        </div>
      </PageLayout>
    </Suspense>
  );
};

export default NewsPage;
