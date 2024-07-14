"use client";

import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Trash } from "lucide-react";
import Image from "next/image";

const data = [
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    email: "customer@email.com",
    address: "1234 Street, City, Country",
    totalOrder: 10,
  },
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    email: "customer@email.com",
    address: "1234 Street, City, Country",
    totalOrder: 10,
  },
];

export default function CustomerTable() {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-center lg:w-[250px]">Name</div>;
      },
      cell: ({ row }) => {
        const image = row?.original?.image;
        return (
          <div className="capitalize flex items-center gap-2">
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
      accessorKey: "email",
      header: () => {
        return <div className="text-center">Email</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">{row?.getValue("email")}</div>
        );
      },
    },
    {
      accessorKey: "address",
      header: () => {
        return <div className="text-center">Address</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            {row?.getValue("address")}
          </div>
        );
      },
    },
    {
      accessorKey: "totalOrder",
      header: () => {
        return <div className="text-center">Total order</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            {row?.getValue("totalOrder")}
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
        tableTitle="Customers"
        data={data}
        columns={columns}
        searchBy={"name"}
        enableShowPerPage={false}
      />
    </div>
  );
}
