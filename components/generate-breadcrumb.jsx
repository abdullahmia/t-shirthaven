"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SITE_NAME } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GenerateBreadcrumb({ variant = "primary", title }) {
  // hooks
  const pathname = usePathname(); // Example: /docs/components/breadcrumb

  // Generate a array of breadcrumb items from the pathname
  const items = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb
      className={`${variant === "primary" ? "bg-secondary py-8 " : ""}`}
    >
      <div className="container responsive pb-2">
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      </div>
      <BreadcrumbList className="container responsive">
        <BreadcrumbItem>
          <Link href="/">{SITE_NAME}</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="" />

        {items.map((item, index) => {
          const href = `/${items.slice(0, index + 1).join("/")}`;
          return (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={href} className="capitalize">
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
