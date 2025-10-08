import React from "react";
import orangeCar from "@/assets/hero_img.webp";
import orangeCar_mob from "@/assets/hero_img_mob.webp";
import ParallaxContainer from "../reusables/ParallaxContainer";

export default function Hero() {
  return (
    <section className="other-hero flex flex-col justify-center items-center pb-[40px] gap-[24px] pt-[180px]">
      {/* Heading */}
      <h1 className="logo-text">retro</h1>

      {/* Huge image */}
      <ParallaxContainer
        pFrom={-20}
        pTo={30}
        imgSrc={orangeCar}
        className="w-full mt-[26px] -1024:hidden"
        imgClass="aspect-[1440/762] -1024:aspect-[472/600]"
      />

      {/* Hero image on mobile */}
      <ParallaxContainer
        pFrom={-20}
        pTo={30}
        imgSrc={orangeCar_mob}
        className="w-full mt-[26px] hidden -1024:block"
        imgClass="aspect-[1440/762] -1024:aspect-[472/660] -1024:scale-[1.4]"
      />

      {/* paragraph */}
      <p className="text-[16px] font-semibold leading-[100%] w-[95%] -600:px-[20px] max-w-[990px] text-anim">
        like a library has books, our collection has stories—each vintage car a
        chapter in the living history of design and drive. within our retro
        portal, timeless rides reveal whispered secrets of an era where passion
        reigned supreme
      </p>
    </section>
  );
}
