import React from "react";
import midnight_1 from "@/assets/midnight_1.png";
import midnight_2 from "@/assets/midnight_2.png";
import midnight_3 from "@/assets/midnight_3.png";
import ParallaxContainer from "../reusables/ParallaxContainer";

export default function Midnight() {
  return (
    <section className="pt-[83px] section lowercase">
      <h2 className="card-heading text-anim hero-text">
        midnight cruisers: style meets performance
      </h2>
      <p className="mt-[20px] text-anim hero-text">
        bold, sleek, and built for unforgettable night drives
      </p>

      {/* Container for car cards */}
      <div>
        {/* Top car */}
        <div className="mt-[62px]">
          <CarCard
            imgClass="aspect-[1267/579] -600:aspect-[390/579]"
            heading="Chevrolet Corvette Sting Ray"
            img={midnight_1}
            era="1960s american muscle"
            power="5.4L v8"
            nickname="“the split-window icon”"
            topSpeed="150 mph street prowler"
          />
        </div>

        {/* Bottom cars */}
        <div className="flex justify-center items-center gap-[30px] mt-[48px] -768:flex-col -768:items-start">
          <CarCard
            heading="jaguar xj13"
            img={midnight_2}
            imgClass="aspect-[616/579] max-w-[616px]"
            era="1960s Prototype Legend"
            power="5.0L V12"
            nickname="“The Lost Le Mans Racer”"
            topSpeed="170 mph unfulfilled beast"
          />
          <CarCard
            heading="Porsche 928"
            img={midnight_3}
            imgClass="aspect-[616/579] max-w-[616px]"
            era="1970s Grand Tourer"
            power="4.5L V8"
            nickname="“The Luxury Rebel”"
            topSpeed="143 mph highway king"
          />
        </div>
      </div>
    </section>
  );
}

export function CarCard({
  className,
  imgClass,
  heading,
  img,
  era,
  power,
  nickname,
  topSpeed,
}) {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-[15px] ${className}`}
    >
      {/* Image */}

      <ParallaxContainer imgSrc={img} imgClass={imgClass} />

      {/* heading */}
      <h3 className="card-heading text-anim">{heading}</h3>

      {/* COntainer for list of features */}
      <div className="">
        <p className="text-anim">era: {era}</p>
        <p className="text-anim">power: {power}</p>
        <p className="text-anim">nickname: {nickname} </p>
        <p className="text-anim">top speed: {topSpeed} </p>
      </div>
    </div>
  );
}

// heading = "";
// img = "";
// imgClass=""
// era = "";
// power = "";
// nickname = "";
// topSpeed = "";
