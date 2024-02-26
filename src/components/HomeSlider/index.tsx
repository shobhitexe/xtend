"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HomeSliderConstants } from "./HomeSliderConstants";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function HomeSlider() {
  return (
    <div className="xs:mt-24 mt-10 w-full mx-auto relative">
      <div className="absolute w-full md:h-[280px] sm:h-[250px] ss:h-[150px] xs:h-[120px] h-[110px] bg-bgViolet bottom-0 z-20">
        <div></div>
      </div>
      <Carousel
        className="z-30 w-[90%] mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent className="flex items-center ss:gap-10 gap-1">
          {HomeSliderConstants.map((slider) => (
            <CarouselItem key={slider.alt} className="ss:basis-1/5 basis-1/3">
              <Image
                src={slider.src}
                alt={slider.alt}
                width={120}
                height={120}
                className="w-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
