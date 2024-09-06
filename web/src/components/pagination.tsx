"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import ReactPaginate from "react-paginate";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import { useGlobalTransition } from "@/hooks/use_global_transition";
import { usePagination } from "@/hooks/use_pagination";

type Props = {
  currentPage: number;
  totalPage: number;
  type: "params" | "searchParams";
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPage,
  type = "searchParams",
}) => {
  const { startTransition } = useGlobalTransition();

  const { paginateByParams, paginateBySearchParams } = usePagination();

  const setCurrentPage = (currentPage: number) => {
    startTransition(() => {
      if (type === "params") {
        paginateByParams(currentPage);
      }
      if (type === "searchParams") {
        paginateBySearchParams(currentPage);
      }
    });
  };

  return (
    <ReactPaginate
      onPageChange={({ selected }) => setCurrentPage(selected + 1)}
      breakLabel={
        <Button variant="ghost" size="icon" disabled={true}>
          <MoreHorizontalIcon className="h-4 w-4" />
        </Button>
      }
      containerClassName="flex gap-x-1.5"
      forcePage={currentPage - 1}
      nextLabel={
        <Button variant="ghost" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      }
      marginPagesDisplayed={2}
      pageCount={totalPage}
      pageLabelBuilder={(page) => (
        <Button
          variant={"outline"}
          size="icon"
          disabled={page === currentPage}
          className={cn("disabled:text-gray-600")}
        >
          {page}
        </Button>
      )}
      previousLabel={
        <Button variant="ghost" size="icon">
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
      }
    />
  );
};
