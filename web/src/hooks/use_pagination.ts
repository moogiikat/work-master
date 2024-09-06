import { usePathname, useRouter } from "next/navigation";

import { omitProperties } from "@/lib/utils/omit_properties";
import { useSearchQuery } from "@/lib/utils/use_search_query";

const pattern = /^(\/.+)(\/\d*)$/;

export const usePagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const paginateByParams = async (currentPage: number) => {
    const match = pattern.exec(pathname);
    const path = match ? match[1] : pathname;

    router.push(`${path}/${currentPage}`);
  };

  const paginateBySearchParams = async (currentPage: number) => {
    setSearchQuery(
      currentPage === 1
        ? omitProperties(searchQuery, { currentPage: true })
        : {
            ...searchQuery,
            currentPage: currentPage,
          }
    );
  };
  return { paginateByParams, paginateBySearchParams };
};
