"use client";
import { useRef } from "react";
import { CarouselProps } from "@/lib/types";

const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 268; // 262px card + 6px gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full max-w-[1092px] items-center mx-6 gap-3 justify-center">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="flex items-center justify-center w-10 h-10 text-3xl text-green-400 border border-green-400 rounded-full"
      >
        ‹
      </button>

      {/* Scrollable container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth max-w-[980px] w-auto gap-6"
      >
        {items.map((item, index) => {

          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className={`relative w-[262px] h-[315px] rounded-md bg-cover bg-center flex items-end justify-start p-4 shrink-0`}
            >
              <div className="z-10 flex flex-col text-white">
                <h2 className="text-4xl font-bold font-Arial">{item.title}</h2>
                <span className="text-xl font-bold font-Arial">
                  {item.description}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="flex items-center justify-center w-10 h-10 text-3xl text-green-400 border border-green-400 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
