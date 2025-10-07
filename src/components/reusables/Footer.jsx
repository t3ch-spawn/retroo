import React from "react";
import { navLinks } from "./Navbar";
import car from "../../assets/footer_car.png";
import ParallaxContainer from "./ParallaxContainer";
import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="pt-[50px] flex flex-col  items-center bg-black text-white overflow-hidden">
      {/* Footer nav */}
      <div className="w-full max-w-[791px] flex justify-between items-center gap-[10px] px-[20px] -600:flex-col -600:justify-center -600:gap-[40px]">
        {navLinks.map((link) => {
          return (
            <TransitionLink
              className="font-semibold line-anim white"
              href={link.link}
            >
              {link.name}
            </TransitionLink>
          );
        })}
      </div>

      {/* Container for address, number and mail */}
      <div className="max-w-[1000px] px-[20px] w-full flex -1024:flex-col -1024:justify-center -1024:gap-[50px] justify-between gap-[10px] flex-wrap text-center items-center font-semibold mt-[40px] -600:mt-[80px]">
        <p>phone: +1 (555) 123-4567</p>
        <p>address: 1955 heritage lane, beverly hills, ca 90210</p>
        <a href="mailto:hello@retro.com" className="line-anim white">
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
        imgClass="aspect-[1440/624] origin-right -600:aspect-[425/624]"
      />
    </footer>
  );
}
