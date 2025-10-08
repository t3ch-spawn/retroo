import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export default function ParallaxContainer({
  imgSrc,
  className,
  pFrom = -15,
  pTo = 20,
  imgClass,
}) {
  const contRef = useRef(null);
  const picRef = useRef(null);
  const [height, setHeight] = useState(0);

  useGSAP(() => {
    if (imgClass) {

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);

      gsap.fromTo(
        picRef.current,
        {
          // y: `-100%`,
          y: `${pFrom}%`,
        },
        {
          y: `${pTo}%`,
          // y: `100%`,
          scrollTrigger: {
            trigger: contRef.current,
            scrub: true,
            markers: true,
            start: "top 95%",
            end: "bottom 0%",
          },
        }
      );
    }
  }, [imgClass]);

  return (
    <div
      // style={{ height: `${height}px` }}
      ref={contRef}
      className={`overflow-hidden relative  ${className}`}
    >
      <img
        ref={picRef}
        src={imgSrc}
        alt="image"
        className={`w-full h-full will-anim parallax-image  object-cover  origin-[0_90%]  scale-[1.2] ${imgClass}`}
      />
    </div>
  );
}
