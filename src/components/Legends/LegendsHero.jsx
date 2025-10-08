import React from "react";
import Button from "../reusables/Button";
import { LogoCard } from "../Home/Bigthree";
import ford from "@/assets/ford_logo.webp";
import mclaren from "@/assets/mclaren_logo.webp";
import alfa from "@/assets/alfa_logo.webp";

export default function LegendsHero() {
  return (
    <>
      {" "}
      <section className="other-hero bg-[#EDEAE0] text-center flex flex-col justify-center items-center gap-[21px] px-[20px] pt-[179px] pb-[121px] -600:py-[80px]">
        <h2 className="sub-heading text-anim hero-text">
          automotive legends of the 80's
        </h2>

        <p className="max-w-[1078px] font-semibold leading-[130%] text-anim hero-text">
          three revolutionary brands defied the odds. deLorean's futuristic
          steel, tucker's ahead-of-time safety, and bristol's handcrafted
          excellence - each wrote their own chapter in automotive history before
          vanishing into legend.{" "}
        </p>

        <Button bgColor="#e65d00" className="!bg-black !text-white hero-btn">
          read stories
        </Button>
      </section>
      <div className="h-[130vh] max-h-[1103px] flex  bg-black -800:max-h-[initial] -800:h-fit -800:flex-col ">
        <LogoCard brand="ford mustang" img={ford} />
        <LogoCard brand="mclaren" img={mclaren} />
        <LogoCard brand="alfa romeo" img={alfa} />
      </div>
    </>
  );
}
