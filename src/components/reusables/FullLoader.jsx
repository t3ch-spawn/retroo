import React from "react";
import { useApp } from "./AppContext";
import CarLoader from "./CarLoader";

export default function FullLoader() {
  const { loaded } = useApp();

  return (
    <>
      {" "}
      {!loaded && (
        <>
          {" "}
          <div className="h-[100vh] pointer-events-none w-full fixed inset-0 z-[130] bg-white loader-item car-mask"></div>
          <div className="h-[100vh] inset-0 pointer-events-none w-full bg-[#ff6200] fixed z-[220] big-box loader-item car-mask"></div>
          <div
            className={`fixed w-full top-0 h-[100vh] pointer-events-none scale-[1.3] z-[170] bg-[#ff6200] loaderOverlay hidden loader-item rotate-180 translate-y-[0vh]`}
          ></div>
          <CarLoader />
        </>
      )}
    </>
  );
}
