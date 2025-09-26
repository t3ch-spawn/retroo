import React from "react";
import orangeCar from "../assets/hero_img.png";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center pb-[40px] gap-[24px] pt-[97px]">
      {/* Heading */}
      <h1 className="text-[100px] font-semibold inter">retro</h1>

      {/* Huge image */}
      <img
        src={orangeCar}
        alt="car"
        className="w-full h-[762px] object-cover mt-[26px]"
      />

      {/* paragraph */}
      <p className="text-[16px] font-semibold leading-[100%] w-[95%] max-w-[990px] text-anim">
        like a library has books, our collection has stories—each vintage car a
        chapter in the living history of design and drive. within our retro
        portal, timeless rides reveal whispered secrets of an era where passion
        reigned supreme
      </p>


    </section>
  );
}
