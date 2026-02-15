import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

function HomeAnimation({ onComplete }) {
  const homeAnimationMainDivRef = React.useRef(null);
  useGSAP(() => {
    const text = document.querySelectorAll("#homePageAnimationMainDiv h1");
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    text.forEach(
      (t) => {
        tl.to(t, {
          opacity: 1,
          duration: 0.15,
          ease: "steps(12)",
        }).to(t, {
          opacity: 0,
          duration: 0.15,
          ease: "steps(12)",
        });
      },
      { scope: homeAnimationMainDivRef.current },
    );

    tl.to(homeAnimationMainDivRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "power3.inOut",
    });
  });

  return (
    <div
      id="homePageAnimationMainDiv"
      ref={homeAnimationMainDivRef}
      className="w-full h-full fixed flex flex-col justify-center items-center z-[999]  text-[#DDDDE1] bg-[#14213d] text-3xl font-bold"
    >
      <h1 className="position absolute opacity-0">• Hello</h1>
      <h1 className="position absolute opacity-0">• नमस्ते</h1>
      <h1 className="position absolute opacity-0">• Bonjour</h1>
      <h1 className="position absolute opacity-0">• こんにちは</h1>
      <h1 className="position absolute opacity-0">• Hola</h1>
    </div>
  );
}

export default HomeAnimation;
