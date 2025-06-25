"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const marcas = [
  { src: "/logos/zebra.png", alt: "Zebra" },
  { src: "/logos/honeywell.png", alt: "Honeywell" },
  { src: "/logos/sato.png", alt: "Sato" },
  { src: "/logos/arclad.png", alt: "Arclad" },
  { src: "/logos/tsc.png", alt: "TSC" },
  { src: "/logos/datalogic.png", alt: "Datalogic" },
  { src: "/logos/epson.png", alt: "Epson" },
  { src: "/logos/intermec.png", alt: "Intermec" },
  { src: "/logos/nicelabel.webp", alt: "Nicelabel" },
];

export default function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {marcas.map((marca, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
            <div className="p-2">
              <Card>
                <CardContent className="flex items-center justify-center p-4 h-40">
                  <img
                    src={marca.src}
                    alt={marca.alt}
                    className="h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
