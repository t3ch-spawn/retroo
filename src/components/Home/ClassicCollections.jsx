import React, { useRef } from "react";
import Button from "../reusables/Button";
import rolls from "@/assets/rolls_collect.webp";
import ford from "@/assets/ford_collect.webp";
import lambo from "@/assets/lambo_collect.webp";
import ferrari from "@/assets/ferrari_collect.webp";
import porsche from "@/assets/porsche_collect.webp";
import jaguar from "@/assets/jaguar_collect.webp";
import shelby from "@/assets/shelby_collect.webp";
import mercedes from "@/assets/mercedes_collect.webp";
import mclaren from "@/assets/mclaren_collect.webp";
import aston from "@/assets/aston_collect.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParallaxContainer from "../reusables/ParallaxContainer";

const list1 = [
  {
    img: ferrari,
    heading: "ferrari 250 GTO",
    pTags: (
      <>
        <p>era: 1960s legend </p>
        <p>power: 3.0l v12 engine</p>
        <p>rarity: only 36 ever made </p>
        <p>nickname: "the million-dollar stallion"</p>
      </>
    ),
  },
  {
    img: rolls,
    heading: "rolls-royce phantom v",
    pTags: (
      <>
        <p>era: 1950s ultimate luxury </p>
        <p>power: 6.2l v8</p>
        <p>exclusivity: owned by royals & rockstars </p>
        <p>nickname: "the silent king"</p>
      </>
    ),
  },

  {
    img: lambo,
    heading: "lamborghini miura p400 sv",
    pTags: (
      <>
        <p>era: 1960s birth of the supercar </p>
        <p>power: 385 hp, 4.01 v12 </p>
        <p>iconic feature: first mid-engine supercar </p>
        <p>nickname: "the raging bull"</p>
      </>
    ),
  },

  {
    img: ford,
    heading: "ford gt40",
    pTags: (
      <>
        <p>era: 1960s racing dominance </p>
        <p>power: 7.0l v8 engine producing around 485 hp</p>
        <p>
          defining feature: four-time le mans champion, a symbol of endurance
          and relentless pursuit{" "}
        </p>
        <p>nickname: "the le mans conqueror"</p>
      </>
    ),
  },
  {
    img: porsche,
    heading: "porsche 911 turbo 930",
    pTags: (
      <>
        <p>era: 1970s turbo revolution</p>
        <p>power: 3.3l turbocharged flat-6</p>
        <p>notoriety: the "widowmaker"</p>
        <p>race pedigree: le mans provenace</p>
      </>
    ),
  },
];

const list2 = [
  {
    img: jaguar,
    heading: "jaguar e-type series 1",
    pTags: (
      <>
        <p>era: 1960s automotive art</p>
        <p>power: 3.8l straight-six </p>
        <p>nickname: "the most beautiful car in the world" – enzo ferrari</p>
        <p>top speed: 150 mph record-breaker</p>
      </>
    ),
  },
  {
    img: shelby,
    heading: "shelby cobra 427",
    pTags: (
      <>
        <p>era: late 1960s muscle and agility</p>
        <p>power: 7.0l v8 engine delivering over 400 hp</p>
        <p>
          defining feature: raw, aggressive design paired with nimble handling{" "}
        </p>
        <p>top speed: "the american wildcat" </p>
      </>
    ),
  },
  {
    img: mercedes,
    heading: "mercedes 300sl gullwing",
    pTags: (
      <>
        <p>era: 1950s jet-age engineering</p>
        <p>power: 3.0l straight-six</p>
        <p>defining feature: iconic gullwing doors</p>
        <p>status: first supercar ever</p>
      </>
    ),
  },
  {
    img: mclaren,
    heading: "mclaren f1",
    pTags: (
      <>
        <p>era: 1990s hypercar revolution</p>
        <p>power: 6.1l v12 by bmw, 627 hp</p>
        <p>defining feature: gold-plated engine bay for heat insulation</p>
        <p>top speed: 240.1 mph (world’s fastest car for a decade)</p>
        <p>nickname: "the three-seater spaceship"</p>
      </>
    ),
  },
  {
    img: aston,
    heading: "aston martin db5",
    pTags: (
      <>
        <p>era: 1960s british luxury meets performance</p>
        <p>power: 4.0l straight-six</p>
        <p>fame: james bond’s 007 car </p>
        <p>craftmanship: handbuilt interior</p>
      </>
    ),
  },
];

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
        <CollectionMarquee list={list1} />
        <CollectionMarquee reverse={true} list={list2} />
      </div>
    </section>
  );
} 

function CollectionMarquee({ reverse, list }) {
  const row1 = useRef(null);
  const row2 = useRef(null);

  const parent = useRef(null);

  return (
    <div className="overflow-hidden flex w-full marquee-parent" ref={parent}>
      <div
        ref={row1}
        className={`flex w-fit justify-start items-start gap-[20px] pl-[20px] h-[730px] -1024:h-[552px] ${
          reverse ? "reverse-marquee translate-x-[-100%]" : "marquee"
        } `}
      >
        {list.map((car) => {
          return <CollectionCard {...car} />;
        })}
      </div>
      <div
        ref={row2}
        className={`flex w-fit justify-start items-start gap-[20px] pl-[20px] h-[730px] -1024:h-[552px] ${
          reverse ? "reverse-marquee translate-x-[-100%]" : "marquee"
        } `}
      >
        {list.map((car) => {
          return <CollectionCard {...car} />;
        })}
      </div>
    </div>
  );
}

function CollectionCard({
  img,
  era,
  heading,
  power,
  exclusive,
  nickname,
  pTags,
}) {
  return (
    <div className="w-[460px] -1024:max-w-[300px] flex flex-col items-start justify-start">
      {/* Image */}
      {/* <img src={img} className="aspect-[460/579] -1024:aspect-[300/377]" alt="car" /> */}
      <ParallaxContainer
        imgClass="aspect-[460/579] -1024:aspect-[300/377] w-full"
        imgSrc={img}
      />

      {/* Heading */}
      <h3 className="mt-[15px] card-heading">{heading}</h3>

      {/* Container for facts */}
      <div className="tracking-tigheter font-medium pt-[16px]">{pTags}</div>
    </div>
  );
}

// Gsap marquee
// useGSAP(() => {
//   gsap
//     .timeline({ repeat: -1 })
//     .to(row1.current, {
//       // x: reverse ? "0%" : "-100%",
//       keyframes: {
//         "0%": { x: reverse ? "-100%" : "0%", ease: "none" },
//         "100%": { x: reverse ? "0%" : "-100%", ease: "none" },
//       },
//       duration: 17,
//       ease: "none",
//     })
//     .to(
//       row2.current,
//       {
//         // x: reverse ? "0%" : "-100%",
//         keyframes: {
//           "0%": { x: reverse ? "-100%" : "0%", ease: "none" },
//           "100%": { x: reverse ? "0%" : "-100%", ease: "none" },
//         },
//         duration: 17,
//         ease: "none",
//       },
//       "<"
//     );
// }, []);
