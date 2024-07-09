"use client";

import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

export default function Header() {
  // hooks
  const pathname = usePathname();

  const isAuthenticated = false;

  const menus = [
    { title: "Home", url: "/" },
    { title: "Categories", url: "/categoreis" },
    { title: "Shop", url: "/products" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const isActive = (url) => {
    return pathname === url ? "text-primary font-semibold" : "text-secondary";
  };

  return (
    <header>
      <div className="bg-primary text-center py-2 text-sm text-white">
        Get 25% OFF on your first order.{" "}
        <Link href="/products" className="font-semibold hover:underline">
          Order now
        </Link>
      </div>

      {/* Navbar */}
      <nav className="container py-3 responsive">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Menu */}
          <div className="lg:block hidden">
            <ul className="flex items-center gap-6">
              {menus.map((menu) => (
                <li
                  key={menu.title}
                  className={`text-sm hover:text-primary ${isActive(menu.url)}`}
                >
                  <Link href={menu.url}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Search & Accounts */}
          <div className="flex items-center gap-8">
            {/* Search */}
            <div className="lg:block hidden">
              <Input
                type="search"
                placeholder="Search product"
                className="placeholder:text-[#878A92] text-sm text-secondary"
              />
            </div>

            {/* Cart & Account */}
            <div className="flex items-center gap-6">
              <Link href="/cart">
                <ShoppingCart size={20} />
              </Link>

              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer">
                      <User size={20} />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 mt-4">
                    <DropdownMenuItem className="cursor-pointer" asChild>
                      <Link href="/account">My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer w-full" asChild>
                      <button onClick={() => signOut()}>Logout</button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <User size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
