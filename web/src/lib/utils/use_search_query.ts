//
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import type { ParseOptions } from "query-string";
import { useCallback, useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";

import { removeFalsyFromObject } from "./remove_falsy_from_object";

const options: ParseOptions = {
  arrayFormat: "bracket",
};

// utils package uusgeh
export const useSearchQuery = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryString = searchParams?.toString() ?? "";

  const setSearchQuery: Dispatch<SetStateAction<Record<string, any>>> =
    useCallback(
      (dispatch: SetStateAction<Record<string, any>>) => {
        const updatedParams =
          typeof dispatch === "function"
            ? dispatch(qs.parse(queryString, options))
            : dispatch;
        const truthyParams = removeFalsyFromObject(updatedParams);
        const query = qs.stringify(truthyParams, options);

        router.push(`${pathname}${query ? `?${query}` : ""}`);
      },
      [pathname, queryString, router]
    );

  const searchQuery = useMemo(
    () => qs.parse(queryString, options),
    [queryString]
  );

  const searchQueryString = useMemo(() => queryString, [queryString]);

  return { searchQuery, searchQueryString, setSearchQuery };
};
