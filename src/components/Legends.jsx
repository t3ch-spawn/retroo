import React from "react";
import { LogoCard } from "./Bigthree";
import ford from "../assets/ford_logo.png";
import mclaren from "../assets/mclaren_logo.png";
import alfa from "../assets/alfa_logo.png";
import Button from "./reusables/Button";

export default function Legends() {
  return (
    <section>
      {/* Container for logos and their names */}
      <div className="h-[130vh] max-h-[1103px] flex ">
        <LogoCard brand="ford mustang" img={ford} />
        <LogoCard brand="ferrari" img={mclaren} />
        <LogoCard brand="alfa romeo" img={alfa} />
      </div>

      {/* Container for text and button */}
      <div className="bg-[#EDEAE0] text-center flex flex-col justify-center items-center gap-[21px] pt-[107px] pb-[121px]">
        <h2 className="sub-heading text-anim">automotive legends of the 80's</h2>

        <p className="max-w-[1078px] font-semibold leading-[130%] text-anim">
          three revolutionary brands defied the odds. deLorean's futuristic
          steel, tucker's ahead-of-time safety, and bristol's handcrafted
          excellence - each wrote their own chapter in automotive history before
          vanishing into legend.{" "}
        </p>

        <Button className="!bg-black !text-white">read stories</Button>
      </div>
    </section>
  );
}
