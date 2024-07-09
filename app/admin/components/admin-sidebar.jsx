"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { title: "Dashboard", url: "/admin", icon: "/assets/icons/dashboard.png" },
  {
    title: "Products",
    url: "/admin/products",
    icon: "/assets/icons/products.png",
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: "/assets/icons/orders.png",
  },
  {
    title: "Customers",
    url: "/admin/customers",
    icon: "/assets/icons/users.png",
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: "/assets/icons/settings.png",
  },
];

export default function AdminSidebar() {
  // hooks
  const pathname = usePathname();

  return (
    <div className="w-[260px] bg-white border-r border-[#E9E9EB] p-5">
      <div>
        <Image
          src="/admin-logo.png"
          width={116}
          height={40}
          alt="admin logo"
          className="m-auto"
        />
      </div>

      {/* Menus */}
      <ul className="list-none space-y-2 mt-14">
        {menus?.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.url}
              className={`flex items-center gap-3 text-sm text-[#5C5F6A] font-medium hover:text-primary py-3 px-6 rounded ${
                pathname === menu.url ? "bg-[#F7F8FA]" : "hover:bg-[#F7F8FA]"
              }`}
            >
              <Image src={menu.icon} width={20} height={20} alt="icon" />
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
