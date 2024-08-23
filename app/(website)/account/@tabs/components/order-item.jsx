import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";

export default function OrderItem({ order }) {
  return (
    <div className="w-full flex items-center justify-between lg:gap-0 gap-4">
      <div className="w-full flex items-center lg:gap-9 gap-2">
        <div>
          <Image
            src={"/assets/images/product.png"}
            width={100}
            height={100}
            alt="prouct"
            className="w-[80px] h-[80px] object-cover aspect-auto"
          />
        </div>
        <div>
          <Link
            href={`/account/${34}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Raw Black T-Shirt Lineup
          </Link>
          <p className="text-xs text-secondary">
            Ordered on: {formatDate(order?.createdAt)}
          </p>
          <p className="text-sm text-primary">${order?.totalAmount}</p>
        </div>
      </div>
      <div className="w-full flex items-center lg:justify-end justify-start gap-4">
        <div className="lg:mr-4">
          <p className="text-sm font-medium underline text-primary capitalize">
            {order?.orderStatus}
          </p>
        </div>
      </div>
    </div>
  );
}
