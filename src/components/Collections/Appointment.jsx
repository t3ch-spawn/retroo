import React from "react";
import Button from "../reusables/Button";

export default function Appointment() {
  return (
    <section className="py-[156px] flex flex-col justify-center items-center gap-[30px] px-[20px]">
      <p className="max-w-[590px] text-center text-anim">
        you didn't think we'd show you all the cars, did you? book an
        appointment and discover what other legendary machines are hiding in our
        vault. some secrets are best revealed in person
      </p>

      <Button bgColor="#00d1d1" className="!text-white !bg-black z-[3]">book an appointment</Button>
    </section>
  );
}
