import enzo from "../assets/enzo.png";

export default function Vision() {
  return (
    <section className="bg-[#1A1A1A] pt-[133px] pb-[241px] gap-[74px] flex justify-center items-end text-white">
      {/* Enzo */}
      <div className="flex flex-col gap-[72px]">
        <h2 className="sub-heading max-w-[671px] text-anim">
          "i don't sell cars, i sell dreams." - enzo ferrari
        </h2>
        <img src={enzo} className="max-w-[654px] aspect-[654/585]" alt="enzo" />
      </div>

      {/* Vision */}
      <div className="max-w-[471px] flex flex-col gap-[24px]">
        <h2 className="sub-heading max-w-[671px] text-anim">
          our vision
        </h2>
        <p className="leading-[100%] tracking-tighter text-anim">
          “retro” is a portal into a bygone era—a carefully curated homage to
          the golden age of automotive design and passion. here, every vintage
          car is more than a machine; it's a storied artifact, a chapter in the
          epic narrative of innovation, beauty, and rebellion. we envision
          "retro" as a space where enthusiasts can rediscover the art of the
          drive, feeling the heartbeat of a time when design was an expression
          of freedom and each curve told a story. it's a meeting place for
          dreamers, collectors, and admirers, where history and passion converge
          to ignite a renewed appreciation for timeless craftsmanship.
        </p>
      </div>
    </section>
  );
}
