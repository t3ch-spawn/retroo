import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef, useState } from "react";
import { useApp } from "./AppContext";

export default function CarLoader() {
  const [progressNumber, setProgressNumber] = useState(0);
  const { setLoaded } = useApp();

  const loaderTimeline = useRef(null);
  useGSAP(() => {
    gsap.set(".hero-img", { opacity: 0 });

    const heroText = SplitText.create(".hero-text", {
      type: "chars",
      mask: "chars",
    });

    gsap.set(heroText.chars, { y: 100, opacity: 0 });

    loaderTimeline.current = gsap
      .timeline({ paused: true })
      .to(".car-path", {
        x: "30vw",
        delay: 1,
        duration: 1.4,
        ease: "bounce.out",
      })
      .to(".car-path", {
        scale: 19,
        duration: 1.1,
        delay: 0.1,
        transformOrigin: "center",
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(".loaderOverlay", {
            display: "block",
            duration: 0,
          });

          gsap.to(".car-path, .car-mask", {
            display: "none",
            duration: 0,
          });
        },
      })
      .to(
        ".loaderOverlay",
        {
          ease: "power3.inOut",
          duration: 1.5,
          scale: 1,
          y: "-100vh",
          onComplete: () => {
            gsap.to(heroText.chars, {
              opacity: 1,
              y: 0,
              ease: "back.out(2)",
              stagger: 0.05,
            });
            gsap.to(".hero-img", {
              opacity: 1,
              delay: 0.6,
              duration: 1,
              onComplete: () => {
                setLoaded(true);
              },
            });
          },
        },
        "<0.6"
      );

    const queue = new createjs.LoadQueue(false);
    queue.loadFile("/src/assets/alfa_big.webp");
    queue.loadFile("/src/assets/racebred1.webp");
    queue.loadFile("/src/assets/ferrari_big.webp");
    queue.loadFile("/src/assets/lambo_big.webp");
    queue.loadFile("/src/assets/hero_img.webp");
    queue.loadFile("/src/assets/porsche_big.webp");
    queue.loadFile("/src/assets/midnight_3.webp");
    queue.loadFile("/src/assets/prewar2.webp");
    queue.loadFile("/src/assets/ford_big.webp");

    queue.on("progress", (e) => {
      const fill = document.querySelector(".loader-fill");
      fill.style.width = `${e.progress * 100}%`;
      setProgressNumber(e.progress * 100);
    });

    queue.on("complete", () => {
      loaderTimeline.current.play();
      gsap.to(".loading-container", {
        autoAlpha: 0,
      });
    });
  }, []);

  return (
    <>
      {" "}
      <svg width="0" height="0" className="pointer-events-none">
        <defs>
          <clipPath id="car-clip" clipPathUnits="userSpaceOnUse">
            <path
              className="car-path -1024:scale-[0.6] fixed translate-y-[5vh] -1024:translate-y-[20vh] -600:scale-[0.3] -600:translate-y-[27vh]"
              d="M408.29 262.879a35.125 35.125 0 1 0 35.125 35.125 35.17 35.17 0 0 0-35.125-35.125zm0 62.873a27.736 27.736 0 1 1 27.736-27.737 27.736 27.736 0 0 1-27.736 27.748zm8.876-27.737a8.876 8.876 0 1 1-8.876-8.875 8.876 8.876 0 0 1 8.876 8.875zm-265.538 0a35.125 35.125 0 1 0-35.126 35.126 35.17 35.17 0 0 0 35.126-35.126zm-35.126 27.737a27.736 27.736 0 1 1 27.737-27.737 27.736 27.736 0 0 1-27.737 27.748zm345.452-21.823a53.997 53.997 0 1 0-107.617-5.925 53.665 53.665 0 0 0 5.447 23.61H165.008a53.986 53.986 0 1 0-101.849-15.211C37.542 295.64 21 278.033 21 250.186c0-28.846 86.87-69.418 142.122-71.327v34.094a24.83 24.83 0 0 0 24.83 24.83h47.517a24.774 24.774 0 0 0 24.409-20.758s-1.62-21.668-6.813-25.518l3.407-2.54 24.474 28.08h94.104c63.994-.022 115.95 23.42 115.95 52.266 0 13.314-10.973 25.396-29.046 34.616zm-336.576-5.925a8.876 8.876 0 1 1-8.876-8.876 8.876 8.876 0 0 1 8.876 8.887z"
            />
          </clipPath>
        </defs>
      </svg>
      {/* Loader bar and number */}
      <div className="fixed z-[300] loading-container pointer-events-none translate-x-[-50%] w-full left-[50%] bottom-[20%] flex flex-col gap-6">
        <div
          className={`${
            progressNumber == 100 ? "active" : ""
          } bg-[#d9d9d9] w-[90%] mx-auto max-w-[400px] flex justify-center items-center h-[4px] relative loading-bar`}
        >
          <div className=" bg-black loader-fill duration-[250ms] ease-in-out h-[98%] left-0 absolute"></div>
        </div>
        <p
          className={`${
            progressNumber == 100 ? "opacity-1 pointer-events-none" : ""
          }  duration-200 text-black text-2xl text-center`}
        >
          {Math.floor(progressNumber)}%
        </p>
      </div>
    </>
  );
}
