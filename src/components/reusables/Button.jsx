import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Button({ className, children }) {
  const btn = useRef(null);
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

  return (
    <button
      ref={btn}
      className={`h-[76px] w-[252px] flex justify-center items-center text-black bg-white font-semibold text-[20px] tracking-tighter relative ${className}`}
    >
      {children}
    </button>
  );
}
