import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

export default function TransitionLink({
  children,
  href,
  className,
  onClick,
  hasNavReversed,
}) {
  useGSAP(() => {
    gsap.set("main>*:not(.fakeOverlay)", {
      opacity: 0,
    });

    gsap
      .timeline()
      .to(".fakeOverlay", {
        delay: 0.3,
        opacity: 0,
      })
      .to(
        "main > *:not(.fakeOverlay)",
        {
          opacity: 1,
        },
        "<0.1"
      );
  });

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  function handleTransition(e) {
    if (onClick) {
      onClick();
    }

    if (pathname == href) {
      return;
    }

    e.preventDefault();
    pageTransition();
  }

  function pageTransition() {
    if (pathname == href) {
      return;
    }

    gsap.timeline().to(".pageOverlay", {
      y: "-8%",
      duration: 1,
      ease: "power2.out",
    });

    const transTl = gsap
      .timeline()

      .to(".pageOverlay", {
        clipPath: "ellipse(135% 100% at  50% 100%)",
        ease: "power2.inOut",
        delay: 0.05,
        duration: 0.7,
        onComplete: () => {
          navigate(href);
        },
      });
  }

  return (
    <a className={`${className}`} onClick={handleTransition} href={href}>
      {children}
    </a>
  );
}

export function TransitionOverlay({ className }) {
  return (
    <div
      className={`fixed w-full top-0 h-[120vh] z-[200] bg-[#ff6200] pageOverlay translate-y-[100vh] ${className}`}
    ></div>
  );
}

export function FakeBgOverlay({ className }) {
  return (
    <div
      className={`fixed w-full top-0 h-[100vh] z-[200] bg-[#ff6200] fakeOverlay pointer-events-none ${className}`}
    ></div>
  );
}
