"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menus = [
  { title: "Orders", url: "/account", icon: "/assets/icons/cart.png" },
  {
    title: "Wishlist",
    url: "/account/wishlist",
    icon: "/assets/icons/wishlist.png",
  },
  {
    title: "Address",
    url: "/account/address",
    icon: "/assets/icons/truck.png",
  },
  {
    title: "Password",
    url: "/account/password",
    icon: "/assets/icons/key.png",
  },
  {
    title: "Account Details",
    url: "/account/account-details",
    icon: "/assets/icons/user.png",
  },
];

export default function MobileAccountSidebar() {
  // hooks
  const pathname = usePathname();
  const router = useRouter();

  /**
   * HANDLERS
   */
  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-5 w-5" color="#5c5f6a" />
        </SheetTrigger>
        <SheetContent>
          <div className="mt-5">
            <h2 className="text-md text-primary font-semibold">My Account</h2>
            <ul className="list-none space-y-3 mt-5">
              {menus?.map((menu) => (
                <li key={menu.title}>
                  <Link
                    href={menu.url}
                    className={`text-sm text-secondary font-medium flex items-center gap-3 hover:text-primary px-6 py-3 rounded ${
                      pathname === menu.url
                        ? "bg-secondary"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <Image src={menu.icon} width={20} height={20} alt="icon" />
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li
                className={`w-full text-sm text-secondary font-medium flex items-start gap-3 hover:text-primary px-6 py-3 rounded hover:bg-secondary cursor-pointer`}
                onClick={handleLogout}
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
