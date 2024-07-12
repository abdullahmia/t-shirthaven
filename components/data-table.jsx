"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function DataTable({
  tableTitle = null,
  data = [],
  columns = [],
  enableShowPerPage = true,
  enablePagination = true,
  enableSearch = true,
  searchBy = null,
  extraFilterActions = null,
  disableTableHeader = false,
  totalPage = null,
  currentPage = null,
  lastPage,
  showItemPerPage = 20,
  onPageChange,
  onShowPerPageChange,
}) {
  // Local State
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: showItemPerPage,
      },
    },
  });

  // Constants
  const showPerPageOptions = [
    {
      label: "20 Entries",
      value: 20,
    },
    {
      label: "50 Entries",
      value: 50,
    },
    {
      label: "100 Entries",
      value: 100,
    },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      {!disableTableHeader && (
        <div className="flex items-center justify-between px-6">
          <div>
            {tableTitle && (
              <h2 className="py-3 text-xl font-semibold text-[#101828]">
                {tableTitle}
              </h2>
            )}
          </div>
          <div className="flex justify-end">
            <div className="flex w-full items-center justify-end gap-6 py-4">
              {enableSearch && (
                <Input
                  placeholder={`Search by ${searchBy || ""}...`}
                  value={table.getColumn(searchBy)?.getFilterValue() ?? ""}
                  onChange={(event) =>
                    table
                      .getColumn(searchBy)
                      ?.setFilterValue(event.target.value)
                  }
                  icon={<Search size={20} />}
                  className="max-w-sm"
                />
              )}

              {extraFilterActions && extraFilterActions}

              {enableShowPerPage && (
                <div className="flex w-full items-center gap-3">
                  <Label>Shows</Label>
                  {/* <FormElements.Select
                    options={showPerPageOptions}
                    // value={showPerPage}
                    placeholder={`${showItemPerPage} Entries`}
                    onChange={(value) => {
                      onShowPerPageChange(value);
                    }}
                    className="w-32"
                  /> */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-[#E6E7E8]"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="py-5">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Table Fotter */}

      {enablePagination && (
        <div className="flex items-center justify-between border-t p-3">
          {/* Previous page action */}
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={
                currentPage === 1 || currentPage === 0 || currentPage === null
              }
              className="flex items-center gap-2 px-4 py-2"
            >
              <ArrowLeft />
              Previous
            </Button>
          </div>

          {/* Updated Pagination */}

          <div>
            <Pagination>
              <PaginationContent>
                {Array.from({ length: totalPage }).map((_, index) => {
                  if (
                    index < 3 ||
                    index > lastPage - 3 ||
                    (index >= currentPage - 1 && index <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink
                          onClick={() => onPageChange(index + 1)}
                          isActive={currentPage === index + 1}
                          className="cursor-pointer"
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (index === 3 && currentPage > 3) {
                    return (
                      <PaginationEllipsis key={index}>...</PaginationEllipsis>
                    );
                  } else if (
                    index === lastPage - 3 &&
                    currentPage < lastPage - 3
                  ) {
                    return (
                      <PaginationEllipsis key={index}>...</PaginationEllipsis>
                    );
                  }

                  return null;
                })}
              </PaginationContent>
            </Pagination>
          </div>

          {/* Next page action */}
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === lastPage}
              className="flex items-center gap-2 px-4 py-2"
            >
              Next <ArrowRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
