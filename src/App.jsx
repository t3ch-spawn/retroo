import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import ClassicCollections from "./components/ClassicCollections";
import Lenis from "lenis";
import Vision from "./components/Vision";
import Bigthree from "./components/Bigthree";
import Vintage from "./components/Vintage";
import Legends from "./components/Legends";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Footer from "./components/Footer";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const [count, setCount] = useState(0);

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
      <Hero />
      <ClassicCollections />
      <Vision />
      <Bigthree />
      <Vintage />
      <Legends />
      <Footer />
    </main>
  );
}

export default App;
