import React from "react";
import CollectionsHero from "./CollectionsHero";
import { FakeBgOverlay, TransitionOverlay } from "../reusables/TransitionLink";
import Midnight from "./Midnight";
import Footer from "../reusables/Footer";
import RaceBred from "./RaceBred";
import PreWar from "./PreWar";
import Appointment from "./Appointment";
import Navbar from "../reusables/Navbar";
import CustomCursor from "../Home/CustomCusrsor";
import TextAnimation from "../reusables/TextAnimation";
import FullLoader from "../reusables/FullLoader";

export default function Collections() {
  return (
    <>
      <FullLoader />
      <Navbar />
      <CollectionsHero />
      <TransitionOverlay />
      <Midnight />
      <RaceBred />
      <PreWar />
      <Appointment />
      <Footer />
      <TransitionOverlay />
      <CustomCursor />
      <FakeBgOverlay />
      <TextAnimation />
    </>
  );
}
