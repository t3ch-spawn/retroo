import React from "react";

export const navLinks = [
  { name: "home", link: "#" },
  { name: "collections", link: "#" },
  { name: "legends of the 80's", link: "#" },
  { name: "big three", link: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 bg-white justify-center  py-[45px] items-center w-full z-[50] text-black">
      {/* Container for links */}
      <div className="flex flex-wrap justify-between w-full gap-[10px] max-w-[791px]">
        {navLinks.map((link) => {
          return (
            <a className="font-semibold line-anim" href={link.link}>
              {link.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
