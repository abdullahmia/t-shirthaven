import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="bg-secondary py-20">
      <div className="container responsive grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4">
        <div className="w-full space-y-4">
          <h2 className="text-2xl text-primary font-semibold">
            Join Our Newsletter
          </h2>
          <p className="text-sm text-secondary">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <form className="w-full flex items-center gap-3 lg:ps-14">
          <Input placeholder="Your email address" className="flex-1" />
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  );
}
