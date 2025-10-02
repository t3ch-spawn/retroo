import React from "react";
import { navLinks } from "./Navbar";
import car from "../../assets/footer_car.png";
import ParallaxContainer from "./ParallaxContainer";

export default function Footer() {
  return (
    <footer className="pt-[50px] flex flex-col  items-center bg-black text-white overflow-hidden">
      {/* Footer nav */}
      <div className="w-full max-w-[791px] flex justify-between items-center gap-[10px] ">
        {navLinks.map((link) => {
          return (
            <a className="font-semibold line-anim white" href={link.link}>
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Container for address, number and mail */}
      <div className="max-w-[1000px] w-full flex justify-between items-center gap-[10px] font-semibold mt-[30px]">
        <p>phone: +1 (555) 123-4567</p>
        <p>address: 1955 heritage lane, beverly hills, ca 90210</p>
        <a href="mailto:hello@retro.com" className="line-anim">
          email: hello@retro.com
        </a>
      </div>

      {/* Retro big text/logo */}
      <h2 className="logo-text leading-[100%] tracking-tighter py-[40px]">
        retro
      </h2>

      {/* Word marquee */}
      <div className="flex justify-start items-start w-full marquee-parent">
        <p className="min-w-fit whitespace-nowrap marquee pl-[6px]">
          Three revolutionary brands defied the odds. DeLorean's futuristic
          steel, Tucker's ahead-of-time safety, and Bristol's handcrafted
          excellence - each wrote their own chapter in automotive history before
          vanishing into legend.
        </p>
        <p className="min-w-fit whitespace-nowrap marquee pl-[6px]">
          Three revolutionary brands defied the odds. DeLorean's futuristic
          steel, Tucker's ahead-of-time safety, and Bristol's handcrafted
          excellence - each wrote their own chapter in automotive history before
          vanishing into legend.
        </p>
      </div>

      {/* Footer car */}

      <ParallaxContainer
        imgSrc={car}
        className="mt-[40px] w-full"
        imgClass="aspect-[1440/368]"
      />
    </footer>
  );
}
