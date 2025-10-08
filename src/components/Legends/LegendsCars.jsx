import React from "react";
import { BigThreeCar } from "../TheBigThree/BigThreeCars";
import Appointment from "../Collections/Appointment";
import ford from "@/assets/ford_big.webp";
import mclaren from "@/assets/mclaren_big.webp";
import alfa from "@/assets/alfa_big.webp";

export default function LegendsCars() {
  return (
    <section className="flex flex-col px-[20px]">
      <BigThreeCar
        carName="ford mustang"
        phrase="the pony reborn"
        img={ford}
        description="The '80s Mustang wrote a new chapter in American muscle. The Fox Body generation transformed from everyday cruiser to street performance icon. The 5.0 badge became more than metal - it was a statement. From drag strips to high school parking lots, these Mustangs created a culture that mixed accessibility with raw power. The GT, the SVO, the Cobra - each variant proved that performance could evolve without losing its soul. A new generation of gearheads was born, armed with burnouts and T-tops."
        className="items-center text-center mt-[90px]"
      />
      <BigThreeCar
        carName="mclaren"
        phrase="formula one meets the street"
        img={mclaren}
        description="McLaren wasn't just winning F1 championships - they were rewriting the supercar rulebook. The McLaren F1 arrived like a spaceship from the future, bringing racing technology to the road. Three seats, center driving position, gold-lined engine bay - every detail screamed innovation. When it hit 240.1mph, it didn't just break records - it shattered the boundaries between race cars and road cars. Gordon Murray's masterpiece showed the world what happens when you let F1 engineers build a street car."
        className="items-center text-center mt-[90px]"
      />
      <BigThreeCar
        carName="alfa romeo"
        phrase="italian heart, global soul"
        img={alfa}
        description="The '80s saw Alfa Romeo blend tradition with technology. The GTV6 brought the legendary Busso V6 to the masses, creating a sound that car enthusiasts still dream about. The Milano (75 in Europe) proved sports sedans could have soul, while the Spider kept the romance of open-top Italian motoring alive. Each car was flawed, fantastic, and absolutely unforgettable - proof that passion matters more than perfection. These weren't just cars; they were love letters to driving written in steel and speed."
        className="items-center text-center mt-[90px]"
      />

      <Appointment />
    </section>
  );
}
