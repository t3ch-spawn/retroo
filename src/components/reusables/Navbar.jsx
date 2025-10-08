import React from "react";
import TransitionLink from "./TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      console.log(hero);
    }

    document.addEventListener("scroll", (e) => {
      let scrolledY = Math.floor(window.scrollY);

      if (scrolledY > 10) {
        gsap.to("nav", {
          backgroundColor: "white",
          color: textIsWhite || isOtherHero ? "black" : "white",
        });

        if (textIsWhite) {
          allLines.forEach((line) => {
            line.classList.remove("white");
          });
        }
      } else {
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
      }
    });
  });

  return (
    <nav className="px-[20px] flex fixed left-0 top-0 bg-transparent justify-center  py-[29px] items-center w-full z-[50] text-black">
      {/* Container for links */}
      <div className="flex flex-wrap justify-between w-full gap-[10px] max-w-[791px]">
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
