"use client";

import {
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminBreadcrumb() {
  // hooks
  const pathname = usePathname();

  // Generate a array of breadcrumb items from the pathname
  const items = pathname.split("/").filter(Boolean);

  return (
    <div className="py-5 flex items-center justify-between">
      <div>
        <BreadcrumbList>
          {items.map((item, index) => {
            const href = `/${items.slice(0, index + 1).join("/")}`;
            return (
              <>
                <BreadcrumbItem key={index}>
                  <Link href={href} className="capitalize">
                    {item}
                  </Link>
                </BreadcrumbItem>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </div>
      <div>
        <Button variant="link">
          <Image
            src={"/assets/icons/logout.png"}
            width={20}
            height={20}
            alt="logout icon"
          />
        </Button>
      </div>
    </div>
  );
}
