import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="h-full container flex items-center justify-between">
      <div className="w-6/12 flex-col text-justify">
        <h3 className="text-3xl font-bold py-3">About Us </h3>
        <p className="font-light py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem molestias corporis saepe deserunt veritatis, hic incidunt quas dolor perferendis quisquam fugiat debitis temporibus non quo necessitatibus minima consectetur aliquid rem praesentium eius dolore? Saepe ab earum, sed quo, fugit, distinctio repudiandae animi aliquid explicabo doloribus vero minima eligendi velit.</p>
        <Link href="/">
          <Button
            className="my-5"
            variant="default"
            padding="lg"
            size="lg"

          >
            Home <ArrowRight />
          </Button>
        </Link>
      </div>

      <div>
        <Image src="/assets/images/about.png" width="500" height="500" alt="shopping Image" />
      </div>
    </div>
  );
}
