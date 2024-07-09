import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ImageGallery() {
  return (
    <Carousel className="bg-secondary w-full lg:w-1/2">
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center px-[123px] pb-[40px] pt-[35px]">
          <Image
            src="/assets/images/product.png"
            width={400}
            height={404}
            alt="product"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center px-[123px] pb-[40px] pt-[35px]">
          <Image
            src="/assets/images/product.png"
            width={400}
            height={404}
            alt="product"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center px-[123px] pb-[40px] pt-[35px]">
          <Image
            src="/assets/images/product.png"
            width={400}
            height={404}
            alt="product"
          />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
