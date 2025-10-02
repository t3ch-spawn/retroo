import React, { useEffect } from "react";
import steer_1 from "@/assets/steer_1.svg";
import steer_2 from "@/assets/steer_2.svg";
import steer_3 from "@/assets/steer_3.svg";
import steer_4 from "@/assets/steer_4.svg";
import steer_5 from "@/assets/steer_5.svg";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const wheels = [steer_1, steer_2, steer_3, steer_4, steer_5];

    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    let lastX = 0;
    let lastY = 0;
    const threshold = 20; // pixels
    document.addEventListener("mousemove", (e) => {
      if (!cursorDot || !cursor) return;
      if (cursorDot.classList.contains("should-move")) {
        cursorDot.style.top = e.clientY + "px";
        cursorDot.style.left = e.clientX + "px";

        cursor.animate(
          {
            left: e.clientX + "px",
            top: e.clientY + "px",
          },
          {
            duration: 700,
            fill: "forwards",
          }
        );

        cursorDot.classList.add("active");
        cursor.classList.add("active");

        const dx = Math.abs(e.clientX - lastX);
        const dy = Math.abs(e.clientY - lastY);

        // Check if difference between current x and y position is greater than threshold value
        if (dx > threshold || dy > threshold) {
          lastX = e.clientX;
          lastY = e.clientY;
          const wheelCont = document.createElement("div");
          const wheelImg = document.createElement("img");

          // Pick a random number between 0 and 5
          const randomIdx = gsap.utils.random(0, 5);

          // Use that number to get an svg src from the wheels array
          wheelImg.src = wheels[Math.floor(randomIdx)];
          wheelCont.classList.add("wheelCont");
          wheelCont.appendChild(wheelImg);

          wheelCont.style.top = e.clientY + "px";
          wheelCont.style.left = e.clientX + "px";
          document.body.appendChild(wheelCont);

          const randomId = "id-" + Math.random().toString(36).substr(2, 9);
          wheelCont.id = randomId;
          gsap
            .timeline()
            .to(`#${randomId}`, {
              scale: 1,
            })
            .to(`#${randomId}`, {
              scale: 0,
              stagger: 0.02,
              delay: 0.3,
              onComplete: () => {
                wheelCont.remove();
              },
            });
        }
      }
    });
  }, []);

  return (
    <>
      {/* <div className="custom-cursor opacity-0  fixed bg-transparent border-[1px] border-black rounded-full h-[30px] w-[30px] translate-x-[-50%] translate-y-[-50%]  z-[210] pointer-events-none -1024:hidden"></div>

      <div className="cursor-dot opacity-0 should-move  h-[5px] w-[5px] fixed bg-black rounded-[50%] pointer-events-none z-[215] translate-x-[-50%] translate-y-[-50%] -1024:hidden"></div> */}
    </>
  );
}
