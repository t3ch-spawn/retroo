import React from "react";
import BigThreeHero from "./BigThreeHero";
import BigThreeCars from "./BigThreeCars";
import Footer from "../reusables/Footer";
import Navbar from "../reusables/Navbar";
import { FakeBgOverlay, TransitionOverlay } from "../reusables/TransitionLink";
import CustomCursor from "../Home/CustomCusrsor";
import TextAnimation from "../reusables/TextAnimation";
import FullLoader from "../reusables/FullLoader";

export default function TheBigThree() {
  return (
    <>
      <FullLoader />
      <Navbar />
      <BigThreeHero />
      <BigThreeCars />
      <Footer />
      <TransitionOverlay />
      <CustomCursor />
      <FakeBgOverlay />
      <TextAnimation />
    </>
  );
}
