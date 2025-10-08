import React from "react";
import { CarCard } from "./Midnight";
import racebred1 from "@/assets/racebred1.webp";
import racebred2 from "@/assets/racebred2.webp";
import racebred3 from "@/assets/racebred3.webp";

export default function RaceBred() {
  return (
    <section className="pt-[166px] section lowercase">
      <h2 className="card-heading text-anim">Race-Bred Icons: Born on the Track</h2>
      <p className="mt-[20px] text-anim">
        These machines dominated circuits before becoming road legends.
      </p>

      {/* Container for car cards */}
      <div>
        {/* Top car */}
        <div className="mt-[62px]">
          <CarCard
            imgClass="aspect-[1267/579] -600:aspect-[390/579]"
            heading="Ford GT40"
            img={racebred1}
            era="1960s Le Mans Conqueror"
            power="7.0L V8"
            nickname="“Ferrari’s Nightmare”"
            topSpeed="205 mph endurance titan"
          />
        </div>

        {/* Bottom cars */}
        <div className="flex justify-center items-center gap-[30px] mt-[48px] -768:flex-col -768:items-start">
          <CarCard
            heading="Lancia Stratos HF"
            img={racebred2}
            imgClass="aspect-[616/579] max-w-[616px]"
            era="1970s Rally Dominator"
            power="2.4L V6"
            nickname="“The Corner Cutter”"
            topSpeed="143 mph gravel king"
          />
          <CarCard
            heading="Alfa Romeo Tipo 33 Stradale"
            img={racebred3}
            imgClass="aspect-[616/579] max-w-[616px]"
            era="1960s Italian Precision"
            power="2.0L V8"
            nickname="“The Road Racer”"
            topSpeed="160 mph handmade fury"
          />
        </div>
      </div>
    </section>
  );
}
