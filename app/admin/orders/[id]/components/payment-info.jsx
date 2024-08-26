import { CreditCard, Hash } from "lucide-react";
import Image from "next/image";

export default function PaymentInfo({ payment }) {
  console.log("Payment --> ", payment);
  return (
    <div className="bg-white p-5 border border-[#e9e9eb8d] rounded">
      <div className="flex items-center gap-2 pb-5 border-b">
        <Image
          src="/assets/icons/payment.png"
          height={36}
          width={36}
          alt="icon"
        />
        <h2>Payment</h2>
      </div>

      <div className="space-y-[18px] mt-[18px]">
        <div className="flex items-start gap-2">
          <Hash size={20} color="#5c5f6a" />
          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Payment status</p>
            <h2 className="text-primary text-sm font-semibold capitalize">
              {payment?.paymentStatus}
            </h2>
          </div>
        </div>

        {payment?.transactionId && (
          <div className="flex items-start gap-2">
            <Hash size={20} color="#5c5f6a" />
            <div className="flex-1">
              <p className="text-sm text-secondary font-normal">ID</p>
              <h2 className="text-primary text-sm font-semibold">
                {payment?.transactionId}
              </h2>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2">
          <CreditCard size={20} color="#5c5f6a" />
          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Payment Method</p>
            <h2 className="text-primary text-sm font-semibold uppercase">
              {payment?.paymentMethod}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
