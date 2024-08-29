'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Error({ error }) {
  return (
    <div className="container flex h-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/images/not-found.png"
          width={400}
          height={400}
          alt="error"
        />
        <div className="flex flex-col items-center gap-2">
          <p>
            The page you are looking for might have been removed or is
            temporarily unavailable
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: 'default',
                padding: 'lg',
              }),
            )}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
