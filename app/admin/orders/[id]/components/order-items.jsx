"use client";

import { DataTable } from "@/components/data-table";
import GenerateInvoice from "@/components/generate-invoice";
import { formatDate } from "@/utils/date";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function OrderItems({
  products,
  orderStatus,
  date,
  totalAmount,
  invoice,
}) {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-start lg:w-[250px]">Name</div>;
      },
      cell: ({ row }) => {
        const { product } = row?.original;
        return (
          <div className="capitalize flex items-center gap-2">
            <Image
              src={product?.images[0]?.url}
              width={48}
              height={48}
              alt={product?.title}
            />
            <span>{product?.title?.slice(0, 25)}</span>
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
        const { product } = row?.original;
        return <div className="text-start capitalize">{product?.sku}</div>;
      },
    },
    {
      accessorKey: "quantity",
      header: () => {
        return <div className="text-start">Quantity</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
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
          <div className="text-start capitalize">
            ${row?.getValue("price") * row?.getValue("quantity")}
          </div>
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
            {products?.length} Products
          </span>
        </h2>

        <div className="flex items-center gap-4">
          <div>
            <GenerateInvoice order={invoice} />
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary">
            <Calendar color="#5c5f6a" size={17} />
            {formatDate(date)}
          </div>

          {/* This div will replace with <Badge /> component */}
          <div className="text-sm text-[#2BB2FE] bg-[#EAF8FF] px-3 py-1 inline-block rounded-full capitalize">
            {orderStatus || ""}
          </div>
        </div>
      </div>
      <DataTable
        tableTitle="Categories"
        data={products}
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
          <span className="text-md text-primary">${totalAmount}</span>
        </div>

        {/* Grand Total */}
        <div className="flex items-center justify-between py-4">
          <span className="text-xl text-primary">Grand Total</span>
          <span className="text-xl text-primary">${totalAmount}</span>
        </div>
      </div>
    </div>
  );
}
