import "./App.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/Home/CustomCusrsor";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
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
                start: "top 87%",
              },
            })
            .from(self.lines, {
              y: 80,
              stagger: 0.08,
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
  });

  return (
    <main className="geist leading-[100%] tracking-tighter">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </main>
  );
}

export default App;
