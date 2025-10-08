import React from "react";
import TransitionLink from "./TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const navLinks = [
  { name: "home", link: "/" },
  { name: "collections", link: "/collections" },
  { name: "legends of the 80's", link: "/legends" },
  { name: "big three", link: "/bigthree" },
];

export default function Navbar() {
  useGSAP(() => {
    const nav = document.querySelector("nav");
    const hero = nav.nextElementSibling;
    let textIsWhite;
    let isOtherHero;
    const allLines = nav.querySelectorAll(".line-anim");

    if (hero?.classList?.contains("big-three-hero")) {
      textIsWhite = true;
      gsap.set("nav", { color: "white" });

      allLines.forEach((line) => {
        line.classList.add("white");
      });
    }

    if (hero?.classList?.contains("other-hero")) {
      isOtherHero = true;
    }

    ScrollTrigger.create({
      start: "top -50", // -50px means 50px "up", outside the view of the screen, the top of the nav kinda moves up out of view to meet the -50px point
      onEnter: () => {
        gsap.to("nav", {
          backgroundColor: "white",
          color: textIsWhite || isOtherHero ? "black" : "white",
          duration: 0.2,
        });
        if (textIsWhite) {
          allLines.forEach((line) => {
            line.classList.remove("white");
          });
        }
      },
      onLeaveBack: () => {
        gsap.to("nav", {
          backgroundColor: "transparent",
          color: textIsWhite ? "white" : "black",
          ease: "none",
          duration: 0.2,
        });
        if (textIsWhite) {
          allLines.forEach((line) => {
            line.classList.add("white");
          });
        }
      },
    });
  });

  return (
    <nav className="px-[20px] flex fixed left-0 top-0 justify-center -600:py-[18px]  py-[29px] items-center w-full z-[50] text-black">
      {/* Container for links */}
      <div className="flex flex-wrap justify-between -600:justify-center -600:gap-[30px] -600:gap-y-[20px] w-full gap-[10px] max-w-[791px]">
        {navLinks.map((link) => {
          return (
            <TransitionLink
              className="font-semibold line-anim"
              href={link.link}
            >
              {link.name}
            </TransitionLink>
          );
        })}
      </div>
    </nav>
  );
}
