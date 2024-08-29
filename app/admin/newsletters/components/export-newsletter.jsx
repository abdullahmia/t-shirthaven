'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Copy, FileDown } from 'lucide-react';

export default function ExportNewsletter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FileDown size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 space-y-7 p-4">
        <div>
          <h2 className="text-[16px] font-semibold text-primary">Copy Link</h2>
          <div className="mt-2 flex items-center gap-2">
            <Button variant="outline">
              <Copy size={20} color="#5c5f6a" />
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-[16px] font-semibold text-primary">Share</h2>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
