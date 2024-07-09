import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export default function ReviewItem() {
  return (
    <div className="flex items-start gap-6 pt-9 pb-7">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <div>
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium text-primary flex-1">
              Emily Davis
            </h2>
            <div className="flex items-center gap-2">
              <StarIcon size={18} color="#5c5f6a" />
              <StarIcon size={18} color="#5c5f6a" />
              <StarIcon size={18} color="#5c5f6a" />
              <StarIcon size={18} color="#5c5f6a" />
              <StarIcon size={18} color="#5c5f6a" />
            </div>
          </div>
          <p className="text-xs text-secondary font-light">1 Week ago</p>

          <p className="text-sm text-secondary font-normal pt-3">
            This company always goes above and beyond to satisfy their
            customers.
          </p>
        </div>
      </div>
    </div>
  );
}
