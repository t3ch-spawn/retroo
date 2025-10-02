import React from "react";
import orangeCar from "@/assets/hero_img.png";
import ParallaxContainer from "../reusables/ParallaxContainer";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center pb-[40px] gap-[24px] pt-[60px]">
      {/* Heading */}
      <h1 className="logo-text">retro</h1>

      {/* Huge image */}
      <ParallaxContainer
        pFrom={-20}
        pTo={30}
        imgSrc={orangeCar}
        className="w-full mt-[26px]"
        imgClass="aspect-[1440/762]"
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
