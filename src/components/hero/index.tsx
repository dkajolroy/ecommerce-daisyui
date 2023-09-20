"use client";
import { carousel } from "@/constants/dummy";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <div className="my-5">
      <Carousel showThumbs={false}>
        {carousel.map((item, i) => (
          <div className="max-h-96">
            <Image
              key={i}
              className="object-cover flex"
              src={item.image}
              width={300}
              height={200}
              alt="carousel Image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
