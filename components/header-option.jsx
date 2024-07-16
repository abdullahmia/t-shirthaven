"use client";

import { User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function HeaderOptions() {
  // Local State
  const [loginSession, setLoginSession] = useState(null);

  // auth session
  const { data: session } = useSession();

  /**
   * EFFECTS
   */
  useEffect(() => {
    setLoginSession(session);
  }, [session]);

  return (
    <>
      {loginSession?.user ? (
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
    </>
  );
}
