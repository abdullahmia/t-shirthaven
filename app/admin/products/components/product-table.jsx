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
import { Ellipsis, FilePenLine, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    sku: "47514501",
    stock: "in stock",
    price: "$20",
    category: "T-Shirts",
  },
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    sku: "47514501",
    stock: "in stock",
    price: "$20",
    category: "T-Shirts",
  },
];

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
        return (
          <div className="capitalize flex items-center gap-2">
            <Image
              src={image?.url}
              width={48}
              height={48}
              alt={row.getValue("title")}
            />
            <span>{title}</span>
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
          <div className="text-start capitalize">{row?.getValue("price")}</div>
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
                href={`/admin/products/${1}`}
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
