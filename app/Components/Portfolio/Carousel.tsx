"use client";
import { portfolioItems } from "@/app/Data/Portfolio";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  return (
    <div className="mx-auto w-full max-w-300 overflow-hidden rounded-xl border-2 border-gray-100 shadow-lg max-md:max-w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {portfolioItems.map((item, index) => (
            <div
              className="relative h-142 w-300 flex-[0_0_100%] max-md:h-65 max-md:w-full"
              key={index}
            >
              <Image
                src={item.img}
                width={1500}
                height={1000}
                alt="Portfolio"
                className="object-cover max-md:h-65"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
