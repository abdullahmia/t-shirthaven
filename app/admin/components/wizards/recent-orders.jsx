"use client";

import { DataTable } from "@/components/data-table";
import Link from "next/link";

const data = [
  {
    name: "Classic Monochrome Tees",
    date: "2 days ago",
    total: "$940",
    status: "Delivered",
  },
  {
    name: "Monochromatic Wardrobe",
    date: "2 days ago",
    total: "$790",
    status: "Delivered",
  },
  {
    name: "Essential Neutrals",
    date: "2 days ago",
    total: "$740",
    status: "Processing",
  },
  {
    name: "Iphone 12 Pro Max",
    date: "2 days ago",
    total: "$740",
    status: "Processing",
  },
  {
    name: "Macbook Air 13 inch",
    date: "just now",
    total: "$740",
    status: "Cancelled",
  },
  {
    name: "Macbook Air 13 inch",
    date: "just now",
    total: "$740",
    status: "Cancelled",
  },
];

export default function RecentOrders() {
  const columns = [
    {
      accessorKey: "name",
      header: () => {
        return <div className="text-start lg:w-[250px]">Name</div>;
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "date",
      header: () => {
        return <div className="text-start">Address</div>;
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
        return <div className="text-start">Address</div>;
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
      cell: ({ row }) => (
        <div className="text-start capitalize">{row?.getValue("status")}</div>
      ),
    },
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-lg border border-[#E9E9EB]">
      <div className="flex items-center gap-4 p-5">
        <h2 className="text-[16px] font-semibold text-primary">
          Recent Orders
        </h2>
        <Link
          href={`/admin/orders`}
          className="text-xs text-secondary font-normal bg-secondary px-5 py-2 rounded-full hover:bg-gray-200 transition"
        >
          View all{" "}
        </Link>
      </div>

      <div>
        <DataTable
          tableTitle="POPs list"
          data={data}
          columns={columns}
          searchBy={"name"}
          showItemPerPage={20}
          enableShowPerPage={false}
          disableTableHeader={true}
          enablePagination={false}
        />
      </div>
    </div>
  );
}
