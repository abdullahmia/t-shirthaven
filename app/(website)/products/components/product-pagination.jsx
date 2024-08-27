"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductPagination({ pages, currentPage }) {
  /**
   * HOOKS
   */
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * HANDLERS
   */
  const handlePrevious = () => {
    if (currentPage > 1) {
      const params = new URLSearchParams(searchParams);
      params.set("page", parseInt(currentPage) - 1);
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const handleNext = () => {
    if (currentPage < pages) {
      const params = new URLSearchParams(searchParams);
      params.set("page", parseInt(currentPage) + 1);
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const renderPageNumbers = () => {
    const pageItems = [];
    for (let i = 1; i <= pages; i++) {
      pageItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`cursor-pointer ${
              parseInt(currentPage) === i && "bg-gray-100"
            }`}
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set("page", i);
              replace(`${pathname}?${params.toString()}`);
            }}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pageItems;
  };

  return (
    <div className="mt-14">
      <Pagination className={"text-sm text-secondary"}>
        <PaginationContent className="space-x-3 border rounded px-2 py-1 w-auto">
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={`${
                parseInt(currentPage) === 1 &&
                "cursor-not-allowed text-gray-300"
              }`}
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={`${
                parseInt(currentPage) === pages &&
                "cursor-not-allowed text-gray-300"
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
