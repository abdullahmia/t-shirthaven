"use client";

import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, FilePenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    date: "20 Mar, 2023",
    total: "$20",
    status: "Pending",
  },
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    date: "20 Mar, 2023",
    total: "$20",
    status: "Pending",
  },
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    date: "20 Mar, 2023",
    total: "$20",
    status: "Pending",
  },
];

export default function OrderTable() {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-start lg:w-[250px]">Name</div>;
      },
      cell: ({ row }) => {
        const image = row?.original?.image;
        return (
          <Link
            href={`/admin/orders/${1}`}
            className="capitalize flex items-center gap-2 group"
          >
            <Image
              src={image}
              width={48}
              height={48}
              alt={row.getValue("name")}
            />
            <span className="group-hover:underline transition">
              {row.getValue("name")}
            </span>
          </Link>
        );
      },
    },
    {
      accessorKey: "date",
      header: () => {
        return <div className="text-start">Date</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">{row?.getValue("date")}</div>
        );
      },
    },
    {
      accessorKey: "total",
      header: () => {
        return <div className="text-start">Total</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">{row?.getValue("total")}</div>
        );
      },
    },
    {
      accessorKey: "status",
      header: () => {
        return <div className="text-start">Status</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">{row?.getValue("status")}</div>
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
                href={`/admin/orders/${1}`}
                className="flex items-center gap-2"
              >
                <FilePenLine size={17} />
                Edit
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return (
    <div>
      <DataTable
        tableTitle="Orders"
        data={data}
        columns={columns}
        searchBy={"name"}
        enableShowPerPage={false}
      />
    </div>
  );
}
