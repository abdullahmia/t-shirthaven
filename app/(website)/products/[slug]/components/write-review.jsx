import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function WriteReview() {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "outline" }))}>
        Write a review
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write Review</DialogTitle>
        </DialogHeader>

        <form className="space-y-4">
          <div className="space-y-1">
            <Label className="text-sm text-secondary">Email</Label>
            <Input type="email" className="text-sm text-secondary" />
          </div>
          <div className="space-y-1">
            <Label className="text-sm text-secondary">Full name</Label>
            <Input type="text" className="text-sm text-secondary" />
          </div>

          <div className="space-y-1">
            <Label className="text-sm text-secondary">Review</Label>
            <Textarea className="text-sm text-secondary" />
          </div>

          <div>
            <Button className="w-full text-sm font-light">
              Submit Your Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
