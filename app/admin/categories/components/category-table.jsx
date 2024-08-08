"use client";

import { DataTable } from "@/components/data-table";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date";
import { Ellipsis, FilePenLine, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryTable({ categories }) {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-start lg:w-[70px]">Name</div>;
      },
      cell: ({ row }) => {
        const image = row?.original?.image;
        return (
          <div className="capitalize flex items-start gap-2">
            <Image
              src={image}
              width={48}
              height={48}
              alt={row.getValue("name")}
            />
            <span>{row.getValue("name")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: () => {
        return <div className="text-start">Description</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">
            {row?.getValue("description")?.slice(0, 50)}...
          </div>
        );
      },
    },
    {
      accessorKey: "totalProduct",
      header: () => {
        return <div className="text-center">Total Products</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            {/* {row?.getValue("totalProduct")} */} 10
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: () => {
        return <div className="text-center">Date</div>;
      },
      cell: ({ row }) => {
        console.log(row?.original);
        return (
          <div className="text-center capitalize">
            {formatDate(row?.getValue("createdAt"))}
          </div>
        );
      },
    },
    {
      accessorKey: "action",
      header: () => {
        return <div className="text-start">Action</div>;
      },
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <Ellipsis size={20} color="#5c5f6a" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32 mt-4">
            <DropdownMenuItem className="cursor-pointer w-full" asChild>
              <Link
                href={`/admin/categories/${1}`}
                className="flex items-center gap-2"
              >
                <FilePenLine size={17} />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer w-full" asChild>
              <button className="flex items-center gap-2">
                <Trash size={17} />
                Detete
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return (
    <div>
      <DataTable
        tableTitle="Categories"
        data={categories}
        columns={columns}
        extraFilterActions={
          <Link
            className={cn(buttonVariants({}))}
            href={"/admin/categories/new"}
          >
            Add category
          </Link>
        }
        searchBy={"name"}
        enableShowPerPage={false}
      />
    </div>
  );
}
