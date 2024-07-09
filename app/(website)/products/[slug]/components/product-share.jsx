"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Copy,
  Facebook,
  Instagram,
  LinkedinIcon,
  Share2,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function ProductShare() {
  /**
   * HANDLERS
   */
  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Share2 size={20} color="#5c5f6a" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4 space-y-7">
        <div>
          <h2 className="text-primary text-[16px] font-semibold">Copy Link</h2>
          <div className="flex items-center gap-2 mt-2">
            <Input value={window.location.href} disabled />
            <Button onClick={handleCopyClipboard} variant="outline">
              <Copy size={20} color="#5c5f6a" />
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-primary text-[16px] font-semibold">Share</h2>

          <div className="flex items-center gap-4 pt-4">
            <Link href={"/"}>
              <Instagram color="#5c5f6a" size={20} />
            </Link>
            <Link href={"/"}>
              <Facebook color="#5c5f6a" size={20} />
            </Link>
            <Link href={"/"}>
              <LinkedinIcon color="#5c5f6a" size={20} />
            </Link>
            <Link href={"/"}>
              <Twitter color="#5c5f6a" size={20} />
            </Link>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
