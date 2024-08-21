import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <Carousel className="bg-secondary w-full lg:w-1/2">
      <CarouselContent>
        {images?.map((image, key) => (
          <CarouselItem key={key} className="flex justify-center items-center">
            <Image
              src={image?.url}
              width={400}
              height={404}
              alt="product"
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
