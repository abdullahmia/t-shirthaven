import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Order failed',
  description: 'Your order has failed. Please try again.',
};

export default function OrderFailed() {
  return (
    <div>
      <GenerateBreadcrumb variant="danger" title="Failed Order" />

      <div className="responsive container flex items-center justify-center py-20 lg:py-36">
        <div className="space-y-2 text-center lg:w-2/6">
          <Image
            src="/assets/images/payemnt-failed.png"
            width={143}
            height={122}
            alt="Payment Success"
            className="m-auto"
          />
          <h2 className="text-2xl font-semibold text-primary">
            Oops! There was an issue
          </h2>
          <p className="pb-8 text-sm text-secondary">
            Oops! There was a problem processing your order. Please review the
            details and try again.
          </p>
          <Link
            href="/checkout"
            className={`${cn(
              buttonVariants({}),
            )} rounded-sm px-8 text-sm font-light`}
          >
            Reorder
            <MoveRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
