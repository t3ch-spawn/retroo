import React from "react";
import vintage from "@/assets/vintage.png";
import Button from "../reusables/Button";
import ParallaxContainer from "../reusables/ParallaxContainer";

export default function Vintage() {
  return (
    <section className="py-[328px] relative flex flex-col text-white text-center justify-center items-center gap-[25px]">
      {/* Heading */}
      <h2 className="sub-heading z-[3] relative text-anim">
        vintage in motion
      </h2>

      {/* Para */}
      <p className="font-semibold max-w-[879px] z-[3] relative text-anim">
        immerse yourself in cinematic reels that capture the soul of classic
        rides. every frame transports you to an era of passion and precision,
        where design and drive became legends. tap into the legacy—watch, feel,
        and live the story of automotive excellence.
      </p>

      <Button className="z-[3]">book appointment</Button>

      {/* Background image */}
      {/* <img
        src={vintage}
        className="absolute z-[2] w-full h-full top-0 object-cover"
        alt=""
      /> */}

      <ParallaxContainer
        pFrom={-20}
        pTo={30}
        className="!absolute z-[2] w-full h-full top-0 object-cover"
        imgSrc={vintage}
        imgClass="aspect-[1440/935]"
      />
    </section>
  );
}
