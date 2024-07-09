import { Button } from "@/components/ui/button";
import ReviewItem from "./review-item";
import WriteReview from "./write-review";

export default function Reviews() {
  return (
    <div>
      <div className="space-y-2 border-b pb-10 w-full">
        <div>
          <h2 className="text-primary text-[16px] font-semibold">Reviews</h2>
          <h1 className="text-[32px] text-primary font-semibold">
            4.2{" "}
            <span className="text-sm text-secondary font-light">
              — 54 Reviews
            </span>
          </h1>
        </div>

        <WriteReview />
      </div>

      <div>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>

      <div className="flex items-center justify-center py-12">
        <Button variant="outline" className="text-sm text-secondary px-10">
          Load more reviews
        </Button>
      </div>
    </div>
  );
}
