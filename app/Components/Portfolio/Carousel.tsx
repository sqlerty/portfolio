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
    <div className="w-full max-w-300 mx-auto border-2 border-gray-100 rounded-xl shadow-lg overflow-hidden max-md:max-w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {portfolioItems.map((item, index) => (
            <div
              className="flex-[0_0_100%] relative w-300 h-142 max-md:w-full max-md:h-65"
              key={index}>
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
