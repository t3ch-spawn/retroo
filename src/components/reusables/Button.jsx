import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Button({ className, children, bgColor }) {
  const btn = useRef(null);
  const bubbleRef = useRef(null);
  useGSAP(() => {
    gsap.from(btn.current, {
      filter: "blur(10px)",
      opacity: 0,
      y: 70,
      duration: 0.7,
      ease: "power1.inOut",
      scrollTrigger: { trigger: btn.current, start: "top 87%" },
    });
  });

  function scaleBubble(e) {
    const { left, top, width, height } = btn.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    const xPosition = clientX - left;
    const yPosition = clientY - top;
    const topPosition = (yPosition / height) * 100;
    const leftPosition = (xPosition / width) * 100;

    gsap.set(bubbleRef.current, {
      top: `${topPosition}%`,
      left: `${leftPosition}%`,
    });
    gsap.to(bubbleRef.current, {
      scale: 18,
    });
  }

  function scaleDownBubble(e) {
    const { left, top, width, height } = btn.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    const xPosition = clientX - left;
    const yPosition = clientY - top;
    let topPosition = (yPosition / height) * 100;
    let leftPosition = (xPosition / width) * 100;

    if (topPosition < 50) {
      topPosition = topPosition - topPosition - 40;
    }
    if (leftPosition < 50) {
      leftPosition = leftPosition - leftPosition - 30;
    }

    gsap.to(bubbleRef.current, {
      top: `${topPosition}%`,
      left: `${leftPosition}%`,

      // top: `${100}%`,
      // left: `${35}%`,
      scale: 0,
      duration: 0.7,
    });
  }

  return (
    <button
      onMouseEnter={scaleBubble}
      onMouseLeave={scaleDownBubble}
      ref={btn}
      className={`h-[76px] w-[252px] -1024:w-[210px] -1024:h-[54px] flex justify-center items-center text-black bg-white font-semibold text-[20px] tracking-tighter relative overflow-hidden -1024:text-[16px] ${className}`}
    >
      <div className="relative z-[4]"> {children}</div>

      <div
        ref={bubbleRef}
        style={{ backgroundColor: bgColor }}
        className="size-[40px] absolute rounded-full top-[100%] z-[2]"
      ></div>
    </button>
  );
}
