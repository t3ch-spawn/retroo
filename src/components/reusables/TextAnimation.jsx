import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

export default function TextAnimation() {
  useGSAP(() => {
    document.querySelectorAll(".text-anim").forEach((el) => {
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "animLine",
        autoSplit: true,
        onSplit: (self) => {
          return gsap
            .timeline({
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
              },
            })
            .from(self.lines, {
              y: 80,
              stagger: 0.08,
              delay: el.classList.contains("hero-text") ? 0.6 : 0,
              ease: "power2.inOut",
              duration: 0.7,
              onComplete: (e) => {
                const lineMasks = el.querySelectorAll(".animLine-mask");

                lineMasks.forEach((mask) => {
                  mask.classList.add("no-clip");
                });
              },
            });
        },
      });
    });
  }, []);

  return <div></div>;
}
