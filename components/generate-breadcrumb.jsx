"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SITE_NAME } from "@/constants";
import { usePathname } from "next/navigation";

export function GenerateBreadcrumb({ variant = "primary" }) {
  // hooks
  const pathname = usePathname(); // Example: /docs/components/breadcrumb

  // Generate a array of breadcrumb items from the pathname
  const items = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb
      className={`${variant === "primary" ? "bg-secondary py-8 " : ""}`}
    >
      <BreadcrumbList className="container responsive">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{SITE_NAME}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="" />

        {items.map((item, index) => {
          const href = `/${items.slice(0, index + 1).join("/")}`;
          return (
            <>
              <BreadcrumbItem key={item}>
                <BreadcrumbLink href={href} className="capitalize">
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* If last item then no need to add the separator */}
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
