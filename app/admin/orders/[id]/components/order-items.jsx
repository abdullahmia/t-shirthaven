"use client";

import { DataTable } from "@/components/data-table";
import { Calendar } from "lucide-react";
import Image from "next/image";

// Example data

const data = [
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    sku: 10,
    quantity: 10,
    price: 100,
  },
  {
    image: "/assets/images/product.png",
    name: "Raw Black T-Shirt Lineup",
    sku: 10,
    quantity: 10,
    price: 100,
  },
];

export default function OrderItems() {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-start lg:w-[250px]">Name</div>;
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
      accessorKey: "quantity",
      header: () => {
        return <div className="text-start">Quantity</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">
            {row?.getValue("quantity")}
          </div>
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
          <div className="text-start capitalize">${row?.getValue("price")}</div>
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
          <div className="text-start capitalize">${row?.getValue("price")}</div>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-5 border border-[#e9e9eb8d] rounded w-full">
      <div className="pb-5 flex items-center justify-between">
        <h2 className="space-x-3">
          <span className="text-[18px] text-primary font-semibold">
            Product
          </span>
          <span className="text-sm font-semibold text-[#1A9882] bg-[#E9FAF7] px-3 py-1 rounded-full">
            2 Products
          </span>
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-secondary">
            <Calendar color="#5c5f6a" size={17} />
            13 January 2023, 14:00
          </div>

          {/* This div will replace with <Badge /> component */}
          <div className="text-sm text-[#2BB2FE] bg-[#EAF8FF] px-3 py-1 inline-block rounded-full">
            Shiped
          </div>
        </div>
      </div>
      <DataTable
        tableTitle="Categories"
        data={data}
        columns={columns}
        searchBy={"name"}
        enableShowPerPage={false}
        enablePagination={false}
        enableSearch={false}
        disableTableHeader={true}
      />
      {/* Totals */}
      <div>
        {/* Sub Total */}
        <div className="flex items-center justify-between py-4 mt-4">
          <span className="text-md text-primary">Sub Total</span>
          <span className="text-md text-primary">$3432</span>
        </div>

        {/* Grand Total */}
        <div className="flex items-center justify-between py-4">
          <span className="text-xl text-primary">Grand Total</span>
          <span className="text-xl text-primary">$3432</span>
        </div>
      </div>
    </div>
  );
}
