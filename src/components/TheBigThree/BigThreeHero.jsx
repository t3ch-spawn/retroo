import React from "react";
import Button from "../reusables/Button";
import ferrari from "@/assets/ferrari_logo.png";
import porsche from "@/assets/porsche_logo.png";
import lambo from "@/assets/lambo_logo.png";
import { LogoCard } from "../Home/Bigthree";

export default function BigThreeHero() {
  return (
    <section className="big-three-hero ">
      {/* Container for text */}
      <div className="bg-[#1B3A4B] text-white pt-[179px] pb-[107px] -800:pb-[79px] flex flex-col justify-center items-center gap-[21px] px-[20px] text-center">
        <h2 className="sub-heading text-anim hero-text">the big three</h2>

        <p className="max-w-[879px] leading-[130%] tracking-tighter font-semibold text-anim hero-text">
          in a realm defined by passion and precision, three legends emerged.
          ferrari blazed a trail with its fiery spirit, porsche refined the art
          of performance with unmatched engineering, and lamborghini broke
          boundaries with raw, audacious power. their intertwined legacies
          continue to shape the road, inspiring every drive with a story of
          relentless innovation and timeless allure.
        </p>

        <Button className='hero-btn' bgColor="#00cc52">read stories</Button>
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
