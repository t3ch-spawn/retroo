import React, { useRef } from "react";
import Button from "../reusables/Button";
import rolls from "@/assets/rolls_collect.png";
import ford from "@/assets/ford_collect.png";
import lambo from "@/assets/lambo_collect.png";
import ferrari from "@/assets/ferrari_collect.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParallaxContainer from "../reusables/ParallaxContainer";

export default function ClassicCollections() {
  return (
    <section className="bg-black text-white py-[263px] -1024:py-[100px]">
      {/* Container for heading, para and btn */}
      <div className="px-[20px]">
        <h2 className="ml-[15.4vw] -1024:ml-[0] sub-heading text-anim">
          classic collections
        </h2>
        {/* para */}
        <p className="font-medium leading-[100%] mt-[9px] ml-[30.7vw] -1024:ml-[0] max-w-[590px] -1024:mt-[20px] text-anim">
          each model tells a story of passion, innovation, and the enduring
          allure of vintage design. take a trip down memory lane, where every
          detail celebrates the artistry and engineering that transformed cars
          into living legends
        </p>

        {/* Button */}
        <Button
          bgColor={"#d68e00"}
          className="mt-[30px] ml-[30.7vw] -1024:ml-[0]"
        >
          see more collections
        </Button>
      </div>
      {/* Container for marquees */}
      <div className="flex flex-col gap-[112px] mt-[200px] -1024:mt-[150px]">
        <CollectionMarquee />
        <CollectionMarquee reverse={true} />
      </div>
    </section>
  );
}

const list1 = [
  {
    img: ferrari,
    heading: "ferrari 250 GTO",
    era: "1960s legend",
    power: " 3.0l v12 engine",
    exclusive: "only 36 ever made",
    nickname: `"the million-dollar stallion"`,
  },
  {
    img: rolls,
    heading: "rolls-royce phantom v",
    era: "1950s ultimate luxury",
    power: "6.2l v8",
    exclusive: "owned by royals & rockstars",
    nickname: `"the silent king"`,
  },

  {
    img: lambo,
    heading: "lamborghini miura p400 sv",
    era: "1960s birth of the supercar",
    power: "385 hp, 4.0l v12",
    exclusive: "first mid-engine supercar",
    nickname: `"the raging bull"`,
  },

  {
    img: ford,
    heading: "ford gt40",
    era: "1960s racing dominance",
    power: "7.0l v8 engine producing around 485 hp",
    exclusive:
      "four-time le mans champion, a symbol of endurance and relentless pursuit",
    nickname: `"the le mans conqueror"`,
  },
];

function CollectionMarquee({ reverse }) {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useGSAP(() => {
    // gsap
    //   .timeline({ repeat: -1 })
    //   .to(row1.current, {
    //     // x: reverse ? "0%" : "-100%",
    //     keyframes: {
    //       "0%": { x: reverse ? "-100%" : "0%", ease: "none" },
    //       "100%": { x: reverse ? "0%" : "-100%", ease: "none" },
    //     },
    //     duration: 17,
    //     ease: "none",
    //   })
    //   .to(
    //     row2.current,
    //     {
    //       // x: reverse ? "0%" : "-100%",
    //       keyframes: {
    //         "0%": { x: reverse ? "-100%" : "0%", ease: "none" },
    //         "100%": { x: reverse ? "0%" : "-100%", ease: "none" },
    //       },
    //       duration: 17,
    //       ease: "none",
    //     },
    //     "<"
    //   );
  });

  const parent = useRef(null);

  // function handleEnter() {
  //   const allMarquees = parent.current.querySelectorAll(".marq");

  //   allMarquees.forEach((marquee) => {
  //     gsap.to(marquee, {
  //       duration: 1.5,
  //       ease: "power2.inOut",
  //       onUpdate: () => {
  //         marquee.style.animationDuration = "40s";
  //       },
  //     });
  //   });
  // }
  // function handleLeave() {
  //   const allMarquees = parent.current.querySelectorAll(".marq");

  //   allMarquees.forEach((marquee) => {
  //     gsap.to(marquee, {
  //       duration: 1.5,
  //       ease: "power2.inOut",
  //       onUpdate: () => {
  //         marquee.style.animationDuration = "4s";
  //       },
  //     });
  //   });
  // }

  return (
    <div className="overflow-hidden flex w-full marquee-parent" ref={parent}>
      <div
        ref={row1}
        className={`flex w-fit justify-start items-start gap-[20px] pl-[20px] marq  ${
          reverse ? "reverse-marquee translate-x-[-100%]" : "marquee"
        } `}
      >
        {list1.map((car) => {
          return <CollectionCard {...car} />;
        })}
      </div>
      <div
        ref={row2}
        className={`flex w-fit justify-start items-start gap-[20px] pl-[20px] marq  ${
          reverse ? "reverse-marquee translate-x-[-100%]" : "marquee"
        } `}
      >
        {list1.map((car) => {
          return <CollectionCard {...car} />;
        })}
      </div>
    </div>
  );
}

function CollectionCard({ img, era, heading, power, exclusive, nickname }) {
  return (
    <div className="w-[460px] -1024:max-w-[300px] flex flex-col items-start justify-start">
      {/* Image */}
      {/* <img src={img} className="w-[460px] h-[579px]" alt="car" /> */}
      <ParallaxContainer imgClass="aspect-[460/579]" imgSrc={img} />

      {/* Heading */}
      <h3 className="text-[40px] -1024:text-[32px] mt-[15px] leading-[100%] tracking-tighter font-semibold inter">
        {heading}
      </h3>

      {/* Container for facts */}
      <div className="tracking-tigheter font-medium">
        <p className="mt-[16px]">era: {era}</p>
        <p className="">power: {power}</p>
        <p className="">exclusivity: {exclusive}</p>
        <p className="">nickname: {nickname}</p>
      </div>
    </div>
  );
}
