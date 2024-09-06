import { format } from "date-fns";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { getPosts } from "@/services/facebook/getPosts";

export const Posts: React.FC = () => {
  const posts = use(getPosts());

  return (
    <div className="flex flex-col gap-y-5">
      {posts.data.slice(0, 5).map((item, index) => (
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
      <Link href={"/news"} className="pt-10">
        <Button className="text-white w-[300px] dark:text-black">
          {"Бүгдийг үзэх"}
        </Button>
      </Link>
    </div>
  );
};
