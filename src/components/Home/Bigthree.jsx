import React from "react";
import Button from "../reusables/Button";
import ferrari from "@/assets/ferrari_logo.webp";
import porsche from "@/assets/porsche_logo.webp";
import lambo from "@/assets/lambo_logo.webp";

export default function Bigthree() {
  return (
    <section className="  text-center text-white ">
      {/* Container for text */}
      <div className="bg-[#1B3A4B] pt-[79px] pb-[107px] -800:pb-[79px] flex flex-col justify-center items-center gap-[21px] px-[20px]">
        <h2 className="sub-heading text-anim">the big three</h2>

        <p className="max-w-[879px] leading-[130%] tracking-tighter font-semibold text-anim">
          in a realm defined by passion and precision, three legends emerged.
          ferrari blazed a trail with its fiery spirit, porsche refined the art
          of performance with unmatched engineering, and lamborghini broke
          boundaries with raw, audacious power. their intertwined legacies
          continue to shape the road, inspiring every drive with a story of
          relentless innovation and timeless allure.
        </p>

        <Button bgColor="#00cc52">read stories</Button>
      </div>

      {/* Container for logos and their names */}
      <div className="h-[130vh] max-h-[1103px] bg-black -800:max-h-[initial] -800:h-fit -800:flex-col flex">
        <LogoCard brand="ferrari" img={ferrari} />
        <LogoCard brand="porsche" img={porsche} />
        <LogoCard brand="lamborghini" img={lambo} />
      </div>  
    </section>
  );
}

export function LogoCard({ brand, img }) {
  return (
    <div className="h-full -800:w-full -800:h-[200vh] -800:mx-auto -800:max-w-[400px] -800:max-h-[500px] w-[33.3333%] flex flex-col justify-end items-start pl-[63px] pb-[58px] relative">
      <img
        src={img}
        alt="brand"
        className="absolute top-0 left-0 h-full w-full z-[2] object-cover aspect-[480/1103] -800:aspect-[400/500]"
      />

      <p className="text-[40px] text-white font-semibold tracking-tighter inter relative z-[3]">
        {brand}
      </p>
    </div>
  );
}
