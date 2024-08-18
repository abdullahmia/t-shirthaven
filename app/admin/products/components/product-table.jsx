"use client";

import { DataTable } from "@/components/data-table";
import DeleteModal from "@/components/delete-modal";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Ellipsis, FilePenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { deleteProductAction } from "../action";

export default function ProductTable({ products }) {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-start lg:w-[250px]">Name</div>;
      },
      cell: ({ row }) => {
        const image = row?.original?.images[0];
        const title = row?.original?.title;
        const slug = row?.original?.slug;
        return (
          <div className="capitalize flex items-center gap-2">
            <Image
              src={image?.url}
              width={48}
              height={48}
              alt={row.getValue("title")}
            />
            <Link
              href={`/products/${slug}`}
              target="_blank"
              className="hover:underline font-semibold"
            >
              {title?.slice(0, 40)}
              {title?.length > 40 && "..."}
            </Link>
          </div>
        );
      },
    },
    {
      accessorKey: "sku",
      header: () => {
        return <div className="text-start">SKU</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">{row?.getValue("sku")}</div>
        );
      },
    },
    {
      accessorKey: "price",
      header: () => {
        return <div className="text-start">Price</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">
            $ {row?.getValue("price")}
          </div>
        );
      },
    },
    {
      accessorKey: "stockStatus",
      header: () => {
        return <div className="text-start">Stock</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">
            {row?.getValue("stockStatus")}
          </div>
        );
      },
    },
    {
      accessorKey: "category",
      header: () => {
        return <div className="text-start">Category</div>;
      },
      cell: ({ row }) => {
        const category = row?.original?.category?.name;
        return <div className="text-start capitalize">{category}</div>;
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
                href={`/admin/products/${row?.original?.id}`}
                className="flex items-center gap-2"
              >
                <FilePenLine size={17} />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer w-full" asChild>
              <DeleteModal
                key="product"
                onDelete={() => deleteProductAction(row?.original?.id)}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return (
    <div>
      <DataTable
        tableTitle="Products"
        data={products}
        columns={columns}
        extraFilterActions={
          <Link className={cn(buttonVariants({}))} href={"/admin/products/new"}>
            Add Product
          </Link>
        }
        searchBy={"name"}
        enableShowPerPage={false}
      />
    </div>
  );
}
