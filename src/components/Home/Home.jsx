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
import FullLoader from "../reusables/FullLoader";

export default function Home() {
  return (
    <>
      <FullLoader />
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
