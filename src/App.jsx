import "./App.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/Home/CustomCusrsor";
import Collections from "./components/Collections/Collections";
import TheBigThree from "./components/TheBigThree/TheBigThree";
import LegendsPage from "./components/Legends/LegendsPage";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  });

  return (
    <main className="geist leading-[100%] tracking-tighter font-medium bg-white">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/bigthree" element={<TheBigThree />} />
        <Route path="/legends" element={<LegendsPage />} />
      </Routes>
    </main>
  );
}

export default App;
