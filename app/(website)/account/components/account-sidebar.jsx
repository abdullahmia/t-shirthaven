"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menus = [
  { title: "Dashboard", url: "/account", icon: "/assets/icons/dashboard.png" },
  { title: "Orders", url: "/account/orders", icon: "/assets/icons/cart.png" },
  {
    title: "Address",
    url: "/account/address",
    icon: "/assets/icons/truck.png",
  },
  {
    title: "Account Details",
    url: "/account/account-details",
    icon: "/assets/icons/user.png",
  },
  {
    title: "Password",
    url: "/account/password",
    icon: "/assets/icons/key.png",
  },
  {
    title: "Wishlist",
    url: "/account/wishlist",
    icon: "/assets/icons/wishlist.png",
  },
];

export default function AccountSidebar() {
  // hooks
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="pr-10 border-r">
      <ul className="list-none space-y-3">
        {menus?.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.url}
              className={`text-sm text-secondary font-medium flex items-center gap-3 hover:text-primary px-6 py-3 rounded ${
                pathname === menu.url ? "bg-secondary" : "hover:bg-secondary"
              }`}
            >
              <Image src={menu.icon} width={20} height={20} alt="icon" />
              {menu.title}
            </Link>
          </li>
        ))}
        <li
          className={`w-full text-sm text-secondary font-medium flex items-start gap-3 hover:text-primary px-6 py-3 rounded hover:bg-secondary cursor-pointer`}
          onClick={() => signOut()}
        >
          <Image
            src={"/assets/icons/logout.png"}
            width={20}
            height={20}
            alt="icon"
          />
          Logout
        </li>
      </ul>
    </div>
  );
}
