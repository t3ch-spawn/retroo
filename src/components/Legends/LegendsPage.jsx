import React from "react";
import LegendsHero from "./LegendsHero";
import LegendsCars from "./LegendsCars";
import Footer from "../reusables/Footer";
import Navbar from "../reusables/Navbar";
import CustomCursor from "../Home/CustomCusrsor";
import { FakeBgOverlay, TransitionOverlay } from "../reusables/TransitionLink";
import TextAnimation from "../reusables/TextAnimation";
import FullLoader from "../reusables/FullLoader";

export default function LegendsPage() {
  return (
    <>
      <FullLoader />
      <Navbar />
      <LegendsHero />
      <LegendsCars />
      <Footer />
      <TransitionOverlay />
      <CustomCursor />
      <FakeBgOverlay />
      <TextAnimation />
    </>
  );
}
