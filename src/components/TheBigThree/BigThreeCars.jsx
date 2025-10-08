import React from "react";
import ParallaxContainer from "../reusables/ParallaxContainer";
import Appointment from "../Collections/Appointment";
import ferrari_big from "@/assets/ferrari_big.webp";
import porsche_big from "@/assets/porsche_big.webp";
import lambo_big from "@/assets/lambo_big.webp";

export default function BigThreeCars() {
  return (
    <section className=" lowercase px-[20px]">
      <BigThreeCar
        carName="ferrari"
        phrase="the heart of racing"
        img={ferrari_big}
        className="mt-[80px]"
        description="Born from racing DNA, Enzo Ferrari's dream roared to life in 1947 in Maranello. The prancing horse wasn't just a logo - it became the ultimate symbol of automotive excellence. From the legendary 250 GTO that dominated tracks to the F40 that redefined what's possible on four wheels, every Ferrari tells a story of relentless pursuit of speed. Inside each engine bay lies not just mechanical perfection, but the spirit of a man who turned motorsport passion into the world's most desired automotive brand."
      />

      <BigThreeCar
        carName="porsche"
        phrase="EVOLUTION OF EXCELLENCE"
        img={porsche_big}
        className="mt-[80px]"
        description="When Ferry Porsche couldn't find his perfect sports car, he built one. From that first 356 in 1948, Porsche sparked a revolution in Stuttgart that never stopped. The 911's silhouette became a timeless icon, while the 959 showed the world that supercars could be engineering masterpieces. Every curve, every engine note, and every victory at Le Mans tells the story of a family that believed sports cars shouldn't just be fast - they should be perfect. The Stuttgart shield represents something rare: evolution without compromise."
      />

      <BigThreeCar
        carName="LAMBORGHINi"
        phrase="FROM REBELLION TO REVOLUTION"
        img={lambo_big}
        className="mt-[80px]"
        description="It started with an argument about a clutch. When tractor maker Ferruccio Lamborghini complained about his Ferrari, Enzo dismissed him. That moment of defiance birthed automotive history. The 350 GT proved Ferruccio could build better cars, but it was the Miura that changed everything - the world's first modern supercar. Then came the Countach, a poster car that defined an era and showed that supercars could be outrageous. From fighting bulls to screaming V12s, Lamborghini turned rebellion into revolution, creating machines that don't just move - they shock, stun, and stir the soul."
      />

      <Appointment />
    </section>
  );
}

export function BigThreeCar({ carName, phrase, description, img, imgClass, className }) {
  return (
    <div
      className={` max-w-[1267px] mx-auto flex flex-col items-start ${className}`}
    >
      {/* Brand name */}
      <h2 className="card-heading text-anim">{carName}</h2>

      {/* Phrase */}
      <p className="mt-[3px] text-anim">{phrase}</p>

      {/* Car image */}
      <ParallaxContainer
        className="mt-[26px]"
        imgClass={`${imgClass} aspect-[1267/579] -768:aspect-[616/579] -768:max-w-[616px]`}
        imgSrc={img}
      />

      <p className="mt-[15px] text-anim">{description}</p>
    </div>
  );
}
