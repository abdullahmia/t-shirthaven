"use client";

import { DataTable } from "@/components/data-table";
import Chip from "@/components/ui/chip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/utils/date";
import { Ellipsis, FilePenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OrderTable({ orders }) {
  const columns = [
    {
      accessorKey: "id",
      header: () => {
        return <div className="text-start lg:w-[250px]">Name</div>;
      },
      cell: ({ row }) => {
        const id = row?.original?.id;
        const image = row?.original?.products[0]?.product?.images[0].url;
        const user = row?.original?.user;
        return (
          <Link
            href={`/admin/orders/${id}`}
            className="capitalize flex items-center gap-2 group"
          >
            <Image src={image} width={48} height={48} alt={id} />
            <div>
              <span className="group-hover:underline font-semibold transition">
                #{row.getValue("id")}
              </span>
              <p className="text-xs text-secondary">{user?.name}</p>
              <p className="text-xs text-secondary lowercase">{user?.email}</p>
            </div>
          </Link>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: () => {
        return <div className="text-start">Date</div>;
      },
      cell: ({ row }) => {
        const date = formatDate(row?.original?.createdAt);
        return <div className="text-start capitalize">{date}</div>;
      },
    },
    {
      accessorKey: "totalAmount",
      header: () => {
        return <div className="text-start">Total</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-start capitalize">
            ${row?.getValue("totalAmount")}
          </div>
        );
      },
    },

    {
      accessorKey: "paymentStatus",
      header: () => {
        return <div className="text-center">Payment Status</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            {row?.getValue("paymentStatus")}
          </div>
        );
      },
    },
    {
      accessorKey: "paymentMethod",
      header: () => {
        return <div className="text-center">Payment Method</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            {row?.getValue("paymentMethod")}
          </div>
        );
      },
    },
    {
      accessorKey: "orderStatus",
      header: () => {
        return <div className="text-center">Order Status</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            <Chip
              label={row?.getValue("orderStatus")}
              variant={
                row?.getValue("orderStatus") === "completed"
                  ? "success"
                  : row?.getValue("orderStatus") === "processing"
                  ? "warning"
                  : "danger"
              }
            />
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
        data={orders}
        columns={columns}
        searchBy={"name"}
        enableShowPerPage={false}
      />
    </div>
  );
}
