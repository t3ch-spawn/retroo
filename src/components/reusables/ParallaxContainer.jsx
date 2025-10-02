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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setContainerHeight();
    });

    setContainerHeight();
  }, []);

  function setContainerHeight() {
    if (picRef.current && contRef.current) {
      const picHeight = picRef.current.getBoundingClientRect().height;
      setHeight(picHeight * 0.88);
    }
  }

  useGSAP(() => {
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
          end: "bottom 30%",
        },
      }
    );
  });

  return (
    <div
      //   style={{ height: `${height}px` }}
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
