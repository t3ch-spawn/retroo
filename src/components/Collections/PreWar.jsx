import React from "react";
import { CarCard } from "./Midnight";
import prewar1 from "@/assets/prewar1.png";
import prewar2 from "@/assets/prewar2.png";
import prewar3 from "@/assets/prewar3.png";

export default function PreWar() {
  return (
    <section className="pt-[166px] section lowercase">
      <h2 className="card-heading text-anim">
        Pre-War Elegance: The Golden Age of Luxury
      </h2>
      <p className="mt-[20px] text-anim">
        Hand-built masterpieces from the era of true automotive craftsmanship.
      </p>

      {/* Container for car cards */}
      <div>
        {/* Top car */}
        <div className="mt-[62px]">
          <CarCard
            imgClass="aspect-[1267/579] -600:aspect-[390/579]"
            heading="Mercedes-Benz 540K Special Roadster"
            img={prewar1}
            era="1930s German Opulence"
            power="5.4L Supercharged Straight-8"
            nickname="“The Aristocrat’s Choice”"
            topSpeed="110 mph timeless beauty"
          />
        </div>

        {/* Bottom cars */}
        <div className="flex justify-center items-center gap-[30px] mt-[48px] -768:flex-col -768:items-start">
          <CarCard
            heading="Duesenberg Model J"
            img={prewar2}
            imgClass="aspect-[616/579] max-w-[616px]"
            era="1920s American Prestige"
            power="6.9L Straight-8"
            nickname="“The Hollywood King”"
            topSpeed="119 mph roaring luxury"
          />
          <CarCard
            heading="Bugatti Type 57SC Atlantic"
            img={prewar3}
            imgClass="aspect-[616/579] max-w-[616px]"
            era="1930s Art Deco Excellence"
            power="3.3L Straight-8"
            nickname="“The Million-Dollar Coupe”"
            topSpeed="125 mph masterpiece"
          />
        </div>
      </div>
    </section>
  );
}
