import React from "react";
import Navbar from "../reusables/Navbar";
import Hero from "./Hero";
import ClassicCollections from "./ClassicCollections";
import Vision from "./Vision";
import Bigthree from "./Bigthree";
import Vintage from "./Vintage";
import Footer from "../reusables/Footer";
import Legends from "./Legends";
import CustomCursor from "./CustomCusrsor";
import { FakeBgOverlay, TransitionOverlay } from "../reusables/TransitionLink";
import TextAnimation from "../reusables/TextAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CarLoader from "../reusables/CarLoader";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] pointer-events-none w-full fixed inset-0 z-[90] bg-white loader-item car-mask"></div>
      <div className="h-[100vh] inset-0 pointer-events-none w-full bg-[#ff6200] fixed z-[220] big-box loader-item car-mask"></div>
      <div
        className={`fixed w-full top-0 h-[100vh] pointer-events-none scale-[1.3] z-[170] bg-[#ff6200] loaderOverlay hidden loader-item rotate-180 translate-y-[0vh]`}
      ></div>
      <CarLoader />
      <Navbar />
      <Hero />
      <ClassicCollections />
      <Vision />
      <Bigthree />
      <Vintage />
      <Legends />
      <Footer />
      <CustomCursor />
      <TransitionOverlay />
      <FakeBgOverlay />
      <TextAnimation />
    </>
  );
}
